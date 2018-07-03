---
title: "How to make friends and verify requests"
subtitle: "Implementing an ActivityPub inbox"
date: 2018-07-03
draft: true
author: gargron
categories:
- Guides
tags:
- mastodon
- activitypub
---

In the previous tutorial we have learned [how to send a reply to another ActivityPub server]({{< ref "posts/2018-06-23_How-to-implement-a-basic-activitypub-server.md" >}}), and we have used mostly static parts to do it. Now it's time to talk about how to subscribe to other people and receive messages.

### The inbox

Primarily this means having a publicly accessible inbox and validating HTTP signatures. Once that works, everything else is just semantics. Let's use a Sinatra web server to implement the inbox.

In fact, I intend to omit persistence from this tutorial. How you would want to store data in a real application is very much up for debate and depends on your goals and requirements. So, we're going to store data in a variable and implement a simple way to inspect it.

```ruby
require 'sinatra'

INBOX = []

get '/inspect' do
  [200, INBOX.join("\n\n")]
end

post '/inbox' do
  request.body.rewind
  INBOX << request.body.read
  [200, 'OK']
end
```

That's an absolutely basic implementation. Save it in `server.rb`. You can run the server with `ruby server.rb` (you need the Sinatra gem installed before that: `gem install sinatra`). Now on this server you can navigate to `/inspect` to see the contents of your inbox, and you (and anyone, really) can POST to the `/inbox` to add something there.

Of course, anyone being able to put anything in there is not ideal. We need to check the incoming POST requests for a HTTP signature and validate it. Here is what a HTTP signature header looks like:

    Signature: keyId="https://my-example.com/actor#main-key",headers="(request-target) host date",signature="Y2FiYW...IxNGRiZDk4ZA=="

We need to read the `Signature` header, split it into its parts (`keyId`, `headers` and `signature`), fetch the public key linked from `keyId`, create a comparison string from the plaintext headers we got in the same order as was given in the signature header, and then verify that string using the public key and the original signature.

```ruby
require 'json'
require 'http'

post '/inbox' do
  signature_header = request.headers['Signature'].split(',').map do |pair|
    pair.split('=').map do |value|
      value.gsub(/\A"/, '').gsub(/"\z/, '') # "foo" -> foo
    end
  end.to_h

  key_id    = signature_header['keyId']
  headers   = signature_header['headers']
  signature = Base64.decode64(signature_header['signature'])

  actor = JSON.parse(HTTP.get(key_id).to_s)
  key   = OpenSSL::PKey::RSA.new(actor['publicKey']['publicKeyPem'])

  comparison_string = headers.split(' ').map do |signed_header_name|
    if signed_header_name == '(request-target)'
      '(request-target): post /inbox'
    else
      "#{signed_header_name}: #{request.headers[signed_header_name.capitalize]}"
    end
  end

  if key.verify(OpenSSL::Digest::SHA256.new, signature, comparison_string)
    request.body.rewind
    INBOX << request.body.read
    [200, 'OK']
  else
    [401, 'Request signature could not be verified']
  end
end
```

The code above is **somewhat simplified** and missing some checks that I would advise implementing in a serious production application. For example:

* The request contains a `Date` header. Compare it with current date and time within a reasonable time window to prevent replay attacks.
* It is advisable that requests with payloads in the body also send a `Digest` header, and that header be signed along in the signature. If it's present, it should be checked as another special case within the comparison string: Instead of taking the digest value from the received header, recompute it from the received body.
* While this proves the request comes from an actor, what if the payload contains an attribution to someone else? In reality you'd want to check that both are the same, otherwise one actor could forge messages from other people.

Still, now you have a reasonably secure toy inbox. Moving on.

### Following people

To register as a follower of someone, you need to send them a `Follow` activity. The receiver may manually decide whether to allow that or not, or their server may do it automatically, but in the case of success you will receive an `Approve` activity back referring to your `Follow`. Here is how a `Follow` may look like:

```json
{
	"@context": "https://www.w3.org/ns/activitystreams",
	"id": "https://my-example.com/my-first-follow",
	"type": "Follow",
	"actor": "https://my-example.com/actor",
	"object": "https://mastodon.social/users/Mastodon"
}
```

Make sure your actor JSON points to your inbox, and your inbox server is running and publicly accessible under that URL, then deliver that activity to the target user's inbox, in our example it would be `https://mastodon.social/inbox`.

If everything works correctly, inspecting your inbox you should find an `Approve` activity. Afterwards, you will find other activities in there from the person you followed, like `Create`, `Announce` and `Delete`.

Ideally, you'd follow your own Mastodon account, just so you can control when to post, otherwise you may end up waiting for your inbox to fill for a long time.