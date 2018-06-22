---
title: "Learning from Twitter’s mistakes"
subtitle: "Privacy and abuse-handling tools in Mastodon"
date: 2017-03-03
draft: false
author: gargron
hero: https://cdn-images-1.medium.com/max/2628/1*41Gx5rCc2E4g1f6xaeHJGg.jpeg
categories:
- New Features
tags:
- mastodon
- twitter
---

*My name is Eugen Rochko and I’m the creator of Mastodon, a free, open-source federated social network server. The flagship instance mastodon.social has over 22,000 users and is growing fast.[ You can check it out here](https://mastodon.social).*

Very early on in the development of Mastodon I’ve decided that centralization and unexpected algorithmic changes were not the only one of Twitter’s problems. Harrassment and tools to deal with it have always been lacking on Twitter’s end. I reached out to people who have been affected by it to collect ideas. Here is what I gathered:

When you block someone, you don’t want to see them, ever. This means that if someone you follow shares their post, you don’t want to see it. If someone talks about them, you don’t want to see it. If someone replies to their post and mentions you, you don’t want to see it. That’s how it should be, and that’s how it works in Mastodon.

Of course maybe you don’t want to go that far. You merely don’t want to see someone’s posts, not lock them off entirely. Muting an account to remove it from your feeds is also possible.

You can hide an individual post’s text behind a content warning — whether to use this for trigger warnings or spoiler warnings is up to you. Beyond this, when you share images that you wouldn’t want someone to see you looking at in public, you can mark individual posts as containing sensitive material.

Sometimes you want to broadcast to the open web, other times you want to address only people that you know. For this purpose, you can optionally lock your account, requiring all new followers to get your approval before being allowed to follow you. Independently of this, you can individually choose the visibility of your posts. Public, or visible only to followers and the people you mention in them. The presence of public timelines — timelines of “everyone’s” posts — mandates a middle ground, where your posts are still fully public but opted-out of being listed on the public timelines.

When you encounter inappropriate content, there is a quick option to report the account, allowing you to select any offending posts and optionally specify a message.

In some cases you know exactly who you want to talk to, and who you don’t. You have a choice to outright block any notifications from people who don’t follow you (to never see a “rando” again), or who you don’t follow (limiting yourself to “mutuals”).

The federated nature of the network also has implications on behaviour. Different instances, owned by different entities, will have different rules and moderation policies. This gives the power to shape smaller, independent, yet integrated communities back to the people. As an end-user, you have the ability to choose an instance with the rules and policies that you agree with (or roll your own, if you are technically inclined).

Smaller, tight-knit communities are less prone to harbouring toxic behaviour; you could think of it as moderation work of the entire network being spread somewhat* between countless administrators of independent but compatible communities, which makes it way more scalable than a single multi-million-user company with a small safety team.

*(I need to specify that naturally, moderation is not global in the network. An admin of one instance cannot affect the account of a user on another. Admins have control over content that arrives on their instances, and can curate it with various tools. This allows places with different rules to coexist)*

Of course, communities with the sole purpose of spreading toxic behaviour will pop up too. In such cases, instance administrators can blacklist specific instances outright. It takes substantially more effort to setup a brand-new instance than it is to create a new account on a centralized social network — you have to acquire hosting, domain name, invest time in installation and configuration — so blacklist-evading is a lot harder.

With all this, [Mastodon](https://mastodon.social) aims to be a safer and more humane place.

*If you’d like to check these features out for yourself, go to [mastodon.social](https://mastodon.social).*
