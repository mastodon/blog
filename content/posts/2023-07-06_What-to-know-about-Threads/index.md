---
title: "What to know about Threads"
description: "There’s been a lot of speculation around what Threads will be and what it means for Mastodon. We’ve put together some of the most common questions and our responses based on what was launched today."
date: 2023-07-05
author: gargron
draft: false
tags:
- activitypub
- threads
categories:
- News
resources:
- name: hero
  src: hero.png
---

Today, Meta is launching its new microblogging platform called Threads. What is noteworthy about this launch is that Threads intends to become part of the decentralized social web by using the same standard protocol as Mastodon, ActivityPub. There’s been a lot of speculation around what Threads will be and what it means for Mastodon. We’ve put together some of the most common questions and our responses based on what was launched today.

### What we know

Threads is a separate app from Facebook, WhatsApp, and Instagram. This means Threads’ user base will be separate from their existing platforms. Instagram users however can sign-in using their Instagram accounts. It will not be available in the EU and will not support federation at launch.

### What you may be asking

**Will Meta get my data or be able to track me?**

Mastodon does not broadcast private data like e-mail or IP address outside of the server your account is hosted on. Our software is built on the reasonable assumption that third party servers cannot be trusted. For example, we cache and reprocess images and videos for you to view, so that the originating server cannot get your IP address, browser name, or time of access. A server you are not signed up with and logged into cannot get your private data or track you across the web. What it can get are your public profile and public posts, which are publicly accessible.

**Will Meta be able to show me ads?**

Nobody on Mastodon can insert advertising into your user interface except the server you are signed up with and logged into. By default, Mastodon does not include any functionality to display ads. Unless you use Threads, you will not see any ads from Threads. It is also not possible for any third party server to insert ad-like posts into your home feed, since your home feed is calculated by your own server from the people (and hashtags) that you choose to follow. If someone you follow posts an ad and you do not want to see it, you can unfollow or mute that person.

**Will a large platform like Meta joining Mastodon overwhelm smaller servers?**

Mastodon works primarily through follow relationships. When you follow a user on another server for the first time, your server subscribes to that user specifically. That means even if there is a server with millions of people in the network, unless you follow millions of people, you will not be receiving updates for millions of people. This keeps traffic and storage manageable across the network. As such, small servers will not be affected, and may not even notice the presence of Threads, except when they decide to follow specific users.

**Will Meta embrace-extend-extinguish the ActivityPub protocol?**

There are comparisons to be made between Meta adopting ActivityPub for its new social media platform and Meta adopting XMPP for its Messenger service a decade ago. There was a time when users of Facebook and users of Google Talk were able to chat with each other and with people from self-hosted XMPP servers, before each platform was locked down into the silos we know today. What would stop that from repeating? Well, even if Threads abandoned ActivityPub down the line, where we would end up is exactly where we are now. XMPP did not exist on its own outside of nerd circles, while ActivityPub enjoys the support and brand recognition of Mastodon.

**Based on its App Store listing, it collects a lot of data. How does this affect me?**

According to the App Store listing for the Threads app, it collects a variety of data, which stands out in comparison to the Mastodon app, which collects none. However, this affects only those who download and use the Threads app, or become users of Threads directly through other means. Even if you follow or send a message to a Threads user from your Mastodon account, Threads will not be able to collect any of your private information except the message you sent.

**When Threads adds federation, will I be able to communicate with people there?**

We expect that eventually Mastodon and Threads will be interoperable, and from a technical standpoint, users will be able to follow each other and exchange messages. However, it is up to the operator of the Mastodon server you’re are using to decide whether to allow communication with Threads or not. If you are not happy with their decision, you can move your account to a different Mastodon server while keeping all of your followers. Since Mastodon is open-source, you can even host your own server and be entirely in charge.

**Will Meta enforce content moderation policies on other servers?**

Just like any Mastodon server, Threads will have their own moderation policies and tools, and just like any Mastodon server, they will be able to choose which content to block on their platform. However, their decisions can only affect their own platform. The only people who can set rules for and moderate your Mastodon server are the moderators of said server, and if you self-host, that continues to be just you. Different Mastodon servers don’t have to agree on all moderation policies to interoperate, as they can simply granularly block specific content, and there is no indication that Threads will be any different in this regard.

### Our stance

We have been advocating for interoperability between platforms for years. The biggest hurdle to users switching platforms when those platforms become exploitative is the lock-in of the social graph, the fact that switching platforms means abandoning everyone you know and who knows you. The fact that large platforms are adopting ActivityPub is not only validation of the movement towards decentralized social media, but a path forward for people locked into these platforms to switch to better providers. Which in turn, puts pressure on such platforms to provide better, less exploitative services. This is a clear victory for our cause, hopefully one of many to come.

**Mastodon is a non-profit headquartered in Germany and fully crowd-funded through donations. If you enjoy using mastodon.social, or our official apps for iOS and Android, or want to support the development of the server software itself, you can [donate to our non-profit on Patreon](https://patreon.com/mastodon).**