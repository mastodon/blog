---
title: "Why ActivityPub is the future"
date: 2018-06-27
draft: true
author: gargron
categories:
- Op-Ed
tags:
- activitypub
- peertube
- pixelfed
- misskey
- pleroma
- plume
---

We often tout things like "Mastodon is based on open web protocols" as one of its advantages. I want to elaborate why exactly that's a good thing.

As a refresher, Mastodon implements the so-called ActivityPub protocol to enable Mastodon servers to talk to each other; that's the basis of the "federation" we also like to bring up. Federation is what you already know from e-mail, even if you may not know it by name: It's the concept of servers hosting users that can talk to users from other servers. That protocol pins down on paper how exactly such inter-server communication would look like, using a vocabulary that can be applied for a variety of purposes. And here's the kicker:

**The social network that is Mastodon isn't really Mastodon**. It's *bigger*. It's *any piece of software that implements ActivityPub*. That software can be wildly different in how it looks and what it does! But the social graph--what we call the people and their connections--is the same.

- Mastodon is the software built around 500-character text posts.
- You want a video platform? That's [PeerTube](https://joinpeertube.org/en/home/).
- You want something centered on photos and pictures? [PixelFed](https://pixelfed.org/) is here.
- You want to write long, rich blog posts? [Plume](https://github.com/Plume-org/Plume) is in development.

That's not to mention a multitude of variations on the same concepts. PeerTube and PixelFed won't be the only ones in their categories. For example, [Misskey](https://github.com/syuilo/misskey) and [Pleroma](https://pleroma.social/) have a similar use case as Mastodon, but they make different choices in programming languages, design and functionality.

All of these platforms are different and they focus on different needs. And yet, the foundation is all the same: people subscribing to receive posts from other people. And so, they are all compatible. From within Mastodon, Pleroma, Misskey, PixelFed and PeerTube users can be followed and interacted with all the same.

**And that's the strength of using open web protocols**. When you decide to switch to Mastodon, you're not just gambling on the success of one project. You can be certain that regardless what happens with Mastodon, the network will live on and flourish. Newer and better software will be born within this ecosystem, but you will never have to drag all your friends and followers someplace else again--they'll already be where they need to be.

If Twitter shuts down, you'll lose your followers. If Facebook shuts down, you'll lose your friends. For some platforms, it's not a question of "if", but "when". Such events are usually followed by a scrambling into a variety of different platforms, where you inevitably lose some people as you have to make a choice which one to stay on. This happened before. But it doesn't have to happen again. Use the federated web. Join Mastodon.