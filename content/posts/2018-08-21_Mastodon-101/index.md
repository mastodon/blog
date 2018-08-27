---
title: "Mastodon quick start guide"
date: 2018-08-27
draft: false
author: nico
resources:
- name: hero
  src: vlcsnap-2018-08-27-16h43m11s127.png
categories:
- Guides
tags:
- mastodon
---

So you want to join Mastodon and get tooting. Great! Here's how to dive straight in.<!--more-->

### Let's start with the basics. What is this?

Mastodon is a microblogging platform akin to others you may have seen, such as Twitter, but instead of being centralised it is a federated network which operates in a similar way to email.

Like email, you choose your server and whether it's GMail, Outlook, iCloud, wherever you sign up you know you'll be able to email everyone you need to so long as you know their address.

> The word "instance" is often used on Mastodon as a synonym of server.

This means there's no big uncaring company running it all, no shareholders, no central control, none of the targeted advertising we're all fed up with, just a bunch of people sharing the things they want to share with each other.

### Where do I sign up?

The first thing you have to do is choose your server. This sounds like a hassle but it's actually pretty great.

Like with email, your identity includes the server you log in to. So for example, I joined mastodon.social so to mention me you can type @nico@mastodon.social in your post. It's not as unwieldy as it sounds because the user interface doesn't show the server name when it's not helpful (like when reading conversations) and puts it in when necessary (like when you reply to someone's post from another server) and you'll find it's not a problem when you're chattering away.

If what you want to talk about most fits into a clear category (maybe it's video games or art or queer life or coding or fiction or whatever) then it might be worth making your first server one where that will primarily host that sort of content -- it'll be easier to make connections and find like-minded folk. Some consider your server to be like a neighbourhood or a venue where the general chatter can have a specific focus.

> You have the ability to view all public local posts that have been made by people on your server in the so-called "local timeline".

If you aren't here to stick mainly to one topic, you'll likely want to pick a server that caters to general interests. Either way, there's a helpful server picker tool on [joinmastodon.org](https://joinmastodon.org/#getting-started).

**Don't panic!** You'll be able to chatter to people on other servers, no matter which one you choose. Remember, this is like email and you can still email your mum on her ancient Yahoo account from your GMail, for example.

> The word "fediverse" (federated universe) refers to the network of Mastodon servers [and other compatible software]({{< ref "posts/2018-06-27_Why-ActivityPub-is-the-future/index.md" >}}), users of which are able to talk to each other seamlessly.

In time, you might find yourself wanting an account on another server, whether that means moving your primary account or having a secondary account for a certain aspect of yourself. This is normal behaviour on the fediverse and nothing to worry about. People are completely used to seeing the occasional post like this:

{{< mastodon "https://divad.xyz/@zyx/100582487377045070" >}}

### Knowing your server

Take a moment before registering to check out the rules of your chosen server and make sure they are compatible with how you want to be tooting.

> Posts on Mastodon are called "toots", because that's the sound an elephant makes.

Under the sign up form you will see a link to the rules page. It is likewise linked from the "Learn more" button under "Administered by"; on other pages, the rules are linked in the footer as simply "About". You could also just enter the correct URL into the address bar of your browser directly as it always follows a format like `https://mastodon.social/about/more`.

The rules page also tells you who the owner/administrator of the server is. Most servers set you up following the admin when you sign up, kind of like a modern take on MySpace Tom. This is great, it means you know who to ask if you run into problems and you can receive server-specific announcements (like when the software is being upgraded) and in general it's great to know who runs the server you're on.

Admins are super friendly people who are usually running the server out of their own pocket so it's good to get to know them like you would a landlord. Many accept donations to cover the running costs and if you're able to contribute then it's always appreciated.

### I think I found my new home!

Head to the homepage of your server and choose your username and password in the sign up form. You'll need an email address to register, which you will be asked to confirm before being able to log in.

Next thing to do is upload your profile picture, give the settings page a good once-over (and do come back to it when you've been on Mastodon a week or so just to make any tweaks that might help your experience) and get ready to introduce yourself.

> Some interesting settings worth checking are: two-factor authentication to improve your account's security; GIF autoplay which is turned off by default; the language you intend to post in; and the languages you prefer seeing when viewing the local, federated, and hashtag timelines (by default, you see all languages).

Hashtags are a really important thing on Mastodon. In fact, they are the [only part of the content of toots that is searchable]({{< ref "posts/2018-07-05_Cage-the-Mastodon/index.md" >}}). So if you want to be found by people who are looking for toots about photography it's best to include #photography.

> For multiple word hashtags, please use camel case #LikeThisGoodHashtag instead of #likethisbadhashtag for accessibility reasons.

So for your first toot, a great idea is to post a short #introduction giving some information about yourself and what your interests are and what you'll be talking about on Mastodon. That's also a great hashtag to search, you'll find lots of other people new to the network and many will care about the things you do.

{{< mastodon "https://mastodon.social/@dorigo/100578566888115867" >}}

### A quick tour of the web interface

> Mastodon offers [many apps](https://joinmastodon.org/apps), both for mobile phones and for the browser; you are not locked into using the standard interface. For a simplified experience, try out [Pinafore](https://pinafore.social)

The standard Mastodon interface has multiple columns rather than a single feed. You can move or remove these at your leisure.

Home is all the toots in chronological order of the people you're following. It includes the toots of people on your server and on other servers, all that matters is that it's people you follow. Some people like to disable boosts in this column so they just see what their follows themselves say. That option is there if you click the settings button on the top right of the column.

> "Boost" (as in "signal boost" or "rocket boost") is a synonym of "reblog" or "retweet" in Mastodon.

Notifications does what it says on the tin. Again, this is across the fediverse. The settings button (top right) has a range of options for this column. You may want to turn off the "boop" sound, for example.

Local timeline is the live feed of all the toots of people on your server. On many servers, particularly smaller ones and ones focused on a particular topic, this is where the magic happens. It feels like a town square or Slack chatroom. You can reply to people from there and it's a great place to meet people.

The federated timeline is a view of all the public toots your servers knows about from across the whole network (including local ones). The most common reason that something appears in the federated timeline is that someone from your server follows the author of that toot. This column moves fast, and can often be pretty wild. I enjoy setting that column to show only toots with media, hiding boosts, then seeing a constant stream of daft selfies, hot memes, and funky art.

You can also pin a column for a hashtag you're interested in -- just search for that hashtag and then in the column settings choose "pin" and done.

### Using content warnings

One of the best features on Mastodon is that button that says "CW" where you write your toots. Clicking that adds a content warning field where you can put information about what the toot contains (eg. mental health, politics, lewd talk, nudity) so that people don't have to see content they wish to avoid, for whatever reason. Of course, it's also great for show or book spoilers.

A common convention is to put +, -, or ~ in a content warning to signify if the contents are broadly positive, negative, or mixed respectively.

My advice is simple: if you're not sure whether a toot needs a CW or not, give it a CW. People really appreciate it and it doesn't do any harm to be too cautious and too respectful of others.

You can also use a CW to summarise a long post. Some use it for joke punchlines. Maybe you'll think of other uses for it. Have fun.

### Learn more

Official material:

* [What is Mastodon?](https://www.youtube.com/watch?v=IPSbNdBmWKE)
* [Frequently Asked Questions](https://github.com/tootsuite/documentation/blob/master/Using-Mastodon/FAQ.md)
* [Mobile apps for iOS and Android](https://joinmastodon.org/apps)

Community material:

* [Intro to Mastodon - Tahajin](https://www.youtube.com/watch?v=W22msAw2zwI)
* [A Beginner's Guide to Mastodon - Lifehacker](https://lifehacker.com/a-beginner-s-guide-to-mastodon-1828503235)
* [An Increasingly Less-Brief Guide to Mastodon - Joyeuse Noelle](https://github.com/joyeusenoelle/GuideToMastodon/)