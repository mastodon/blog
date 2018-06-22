---
title: "Mastodon and the W3C"
subtitle: "The Pub is Now Open, ActivityPub that is!"
date: 2017-09-10
draft: false
author: gargron
categories:
- New Features
tags:
- mastodon
- activitypub
---

*[Mastodon](https://joinmastodon.org) is a free, open-source federated social network spanning over 800,000 users spread across more than 2,000 servers.*

[Mastodon v1.6](https://github.com/tootsuite/mastodon/releases/tag/v1.6.0) is here, and it is the first Mastodon release which fully implements the ActivityPub protocol. [ActivityPub](https://www.w3.org/TR/activitypub/) is a new federated messaging protocol developed by the World Wide Web Consortium (W3C) which aims to fix the shortcomings of past standards like [OStatus](https://en.wikipedia.org/wiki/OStatus).

Mastodon is one of the first platforms, and certainly the first major platform to implement this new standard and prove it in the wild. It was a natural upgrade for our project, as we long ago reached the limits of what OStatus was capable of. And what we needed was better privacy, better defaults, better cryptographic verifiability, and better distribution mechanisms.

This protocol is also very flexible in what it allows you to express and it is naturally extensible as it is based on [JSON-LD](https://en.wikipedia.org/wiki/JSON-LD). Besides allowing Mastodon to fully and reliably exchange the data it currently needs to exchange, it also has a lot of potential for future developments in the area of distributed identities and end-to-end encryption.

Servers which support this new protocol will use it in version 1.6. OStatus is still available as a full-fledged fallback.

Here are some of the juicier highlights from this release:

1. We’ve improved the integrity of distributed conversations. Up until now, the only server which had a full view of a conversation was the server of the conversation’s starter, as all responders sent their replies to it. But the servers of the responders or followers had only an incidental view of the conversation conversation; to get a full view, one would have to either follow the other responders, or get a reply from the conversation starter. Now, the server that receives the replies forwards them to followers’ servers as long as they are public. This means that when opening the conversation view on a different server, it will be as complete as on the origin server. This is especially helpful to those who run single-user instances, as they are the least likely to have already been following all responders.

2. Another feature, which is small, but has a big UX effect, is that we can finally fetch account statistics from remote profiles (total toots, number of followers, etc.), as there is now a standardized way of expressing this using ActivityPub. Technically this is not a big deal, but it did confuse new users when they saw someone from another server with a seemingly empty profile, when in reality it had thousands of toots and followers.

![](https://cdn-images-1.medium.com/max/2000/1*dKhj4RnceIzmX2zs5Zn2UQ.png)

3. Speaking of profiles, this release brings you redesigned public profile pages, as well as the ability to pin certain toots on them to be permanently displayed. By default, stand-alone toots are displayed, and there are now tabs for toots with replies and toots with media.

4. The function of getting embed codes for toots is now more accessible — through a button in the web UI, and not just through the OEmbed API. The look of the embedded view has also been refurbished, and an optional script has been added to ensure the embeds have the correct height. I am excited to see Mastodon content appear on other websites.

5. To improve the experience of brand new users, we’ve added something in the old tradition of MySpace Tom — except instead of following some central Tom, new accounts will start off following their local admins (this can be adjusted by the administrator). That way, on your first login you are greeted with a populated home timeline instead of an empty one.

**All in all, this release is all about filling the gaps in the server-to-server layer, improving content discovery and first time experience of new users, and making it easier to share Mastodon content.**

Big shout-out to [Chris Webber](https://octodon.social/@cwebber), [Puck Meerburg](https://puckipedia.com/social), and [Unarist](https://mstdn.maud.io/@unarist) specifically, and to the W3C Social Working Group in general for helping put everything together.

Likewise none of this would be possible without the [support of our patrons](https://github.com/tootsuite/documentation/blob/master/Contributing-to-Mastodon/Sponsors.md). Thank you!

*Mastodon is free, open-source software. The development is crowdfunded through [Patreon](https://www.patreon.com/mastodon) and [Liberapay](https://liberapay.com/Mastodon/). The source code is available on [GitHub](https://github.com/tootsuite/mastodon). General information and a list of instances is available on [joinmastodon.org](https://joinmastodon.org)*
