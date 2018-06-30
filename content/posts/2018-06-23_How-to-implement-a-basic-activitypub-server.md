---
title: "How to implement a basic ActivityPub server"
date: 2018-06-23
draft: false
author: gargron
categories:
- Guides
tags:
- mastodon
- activitypub
---

Today we’ll be looking at how to connect the protocols powering Mastodon in the simplest way possible to enter the federated network. We will use static files, standard command-line tools, and some simple Ruby scripting, although the functionality should be easily adaptable to other programming languages.

First, what’s the end goal of this exercise? We want to send a Mastodon user a message from our own, non-Mastodon server.

So what are the ingredients required? The message itself will be formatted with ActivityPub, and it must be attributed to an ActivityPub actor. The actor must be discoverable via Webfinger, and the delivery itself must be cryptographically signed by the actor.

### The actor

The actor is a publicly accessible JSON-LD document answering the question "who". JSON-LD itself is a quite complicated beast, but luckily for our purposes we can treat it as simple JSON with a `@context` attribute. Here is what an actor document could look like:

```json
{
	"@context": [
		"https://www.w3.org/ns/activitystreams",
		"https://w3id.org/security/v1"
	],

	"id": "https://my-example.com/actor",
	"type": "Person",
	"preferredUsername": "alice",
	"inbox": "https://my-example.com/inbox",

	"publicKey": {
		"id": "https://my-example.com/actor#main-key",
		"owner": "https://my-example.com/actor",
		"publicKeyPem": "-----BEGIN PUBLIC KEY-----...-----END PUBLIC KEY-----"
	}
}
```

The `id` must be the URL of the document (it’s a self-reference), and all URLs should be using HTTPS. You need to include an `inbox` even if you don’t plan on receiving messages in response, because for legacy purposes Mastodon doesn’t acknowledge inbox-less actors as compatible.

The most complicated part of this document is the `publicKey` as it involves cryptography. The `id` will in this case refer to the actor itself, with a fragment (the part after `#`) to identify it--this is because we are not going to host the key in a separate document (although we could). The `owner` must be the actor’s `id`. Now to the hard part: You’ll need to generate an RSA keypair.

You can do this using OpenSSL:

    openssl genrsa -out private.pem 2048
    openssl rsa -in private.pem -outform PEM -pubout -out public.pem

The contents of the `public.pem` file is what you would put into the `publicKeyPem` property. However, JSON does not support verbatim line-breaks in strings, so you would first need to replace line-breaks with `\n` instead.

### Webfinger

What is Webfinger? It is what allows us to ask a website, "Do you have a user with this username?" and receive resource links in response. Implementing this in our case is really simple, since we’re not messing with any databases and can hardcode what we want.

The Webfinger endpoint is always under `/.well-known/webfinger`, and it receives queries such as `/.well-known/webfinger?resource=acct:bob@my-example.com`. Well, in our case we can cheat, and just make it a static file:

```json
{
	"subject": "acct:alice@my-example.com",

	"links": [
		{
			"rel": "self",
			"type": "application/activity+json",
			"href": "https://my-example.com/actor"
		}
	]
}
```

The `subject` property here consists of the username (same as `preferredUsername` earlier) and the domain you’re hosting on. This is how your actor will be stored on other Mastodon servers and how people will be able to mention it in toots. Only one link is required in the Webfinger response, and it’s the link to the actor document.

After this is uploaded to your webhost and available under your domain with a valid SSL certificate, you could already look up your actor from another Mastodon by entering `alice@my-example.com` into the search bar. Although it’ll look quite barren.

### The message

ActivityPub messages practically consist of two parts, the message itself (the object) and a wrapper that communicates what’s happening with the message (the activity). In our case, it’s going to be a `Create` activity. Let’s say "Hello world" in response to my toot about writing this blog post:

{{< mastodon "https://mastodon.social/@Gargron/100254678717223630" >}}

Here is how the document could look:

```json
{
	"@context": "https://www.w3.org/ns/activitystreams",

	"id": "https://my-example.com/create-hello-world",
	"type": "Create",
	"actor": "https://my-example.com/actor",

	"object": {
		"id": "https://my-example.com/hello-world",
		"type": "Note",
		"published": "2018-06-23T17:17:11Z",
		"attributedTo": "https://my-example.com/actor",
		"inReplyTo": "https://mastodon.social/@Gargron/100254678717223630",
		"content": "<p>Hello world</p>",
		"to": "https://www.w3.org/ns/activitystreams#Public"
	}
}
```

With the `inReplyTo` property we’re chaining our message to a parent. The `content` property may contain HTML, although of course it will be sanitized by the receiving servers according to their needs — different implementations may find use for a different set of markup. Mastodon will only keep `p`, `br`, `a` and `span` tags. With the `to` property we are defining who should be able to view our message, in this case it’s a special value to mean "everyone".

For our purposes, we don’t actually need to host this document publicly, although ideally both the activity and the object would be separately available under their respective `id`. Let’s just save it under `create-hello-world.json` because we’ll need it later.

So the next question is, how do we send this document over, where do we send it, and how will Mastodon be able to trust it?

### HTTP signatures

To deliver our message, we will use POST it to the inbox of the person we are replying to (in this case, me). That inbox is `https://mastodon.social/inbox`. But a simple POST will not do, for how would anyone know it comes from the real @alice@my-example.com and not literally anyone else? For that purpose, we need a HTTP signature. It’s a HTTP header signed by the RSA keypair that we generated earlier, and that’s associated with our actor.

HTTP signatures is one of those things that are much easier to do with actual code instead of manually. The signature looks like this:

    Signature: keyId="https://my-example.com/actor#main-key",headers="(request-target) host date",signature="..."

The `keyId` refers to public key of our actor, the `header` lists the headers that are used for building the signature, and then finally, the `signature` string itself. The order of the headers must be the same in plain-text and within the to-be-signed string, and header names are always lowercase. The `(request-target)` is a special, fake header that pins down the HTTP method and the path of the destination.

The to-be-signed string would look something like this:

    (request-target): post /inbox
    host: mastodon.social
    date: Sun, 06 Nov 1994 08:49:37 GMT

Mind that there is only a ±30 seconds time window when that signature would be considered valid, which is a big reason why it’s quite difficult to do manually. Anyway, assuming we’ve got the valid date in there, we now need to build a signed string out of it. Let’s put it all together:

```ruby
require 'http'
require 'openssl'

document      = File.read('create-hello-world.json')
date          = Time.now.utc.httpdate
keypair       = OpenSSL::PKey::RSA.new(File.read('private.pem'))
signed_string = "(request-target): post /inbox\nhost: mastodon.social\ndate: #{date}"
signature     = Base64.strict_encode64(keypair.sign(OpenSSL::Digest::SHA256.new, signed_string))
header        = 'keyId="https://my-example.com/actor",headers="(request-target) host date",signature="' + signature + '"'

HTTP.headers({ 'Host': 'mastodon.social', 'Date': date, 'Signature': header })
    .post('https://mastodon.social/inbox', body: document)
```

Let’s save it as `deliver.rb`. I am using the HTTP.rb gem here, so you’ll need to have that installed (`gem install http`). Finally, run the file with `ruby deliver.rb`, and your message should appear as a reply on my toot!

### Conclusion

We have covered how to create a discoverable ActivityPub actor and how to send replies to other people. But there is a lot we haven’t covered: How to follow and be followed (it requires a working inbox), how to have a prettier profile, how to support document forwarding with LD-Signatures, and more. If there is demand, I will write more in-depth tutorials!

Read more on:

* [ActivityPub](https://www.w3.org/TR/activitypub/)
* [Webfinger](https://tools.ietf.org/html/rfc7033)
* [HTTP Signatures](https://tools.ietf.org/html/draft-cavage-http-signatures-10)
