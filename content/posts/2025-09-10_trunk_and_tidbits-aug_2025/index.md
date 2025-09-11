---
title: "Trunk & Tidbits, August 2025"
description: "Behind-the-scenes updates from the Mastodon team. A trip to FrOSCon, and a lot of preparation for quote posts."
date: 2025-09-10
section: Trunk and Tidbits
categories:
- Trunk and Tidbits
- Engineering
tags:
- engineering
- mastodon
authors:
- mastodon
resources:
- name: hero
  src: hero.png
draft: false
---

Welcome to the 17th edition of Trunk & Tidbits: your monthly update from inside the Mastodon core engineering team. Let’s get into what we were working on in August 2025.

It has been summertime in the northern hemisphere, and various team members have been taking time away. As a result, things were a little more quiet than usual, but progress continues.

## Events

The main event during August was [FrOSCon](https://froscon.org/), held in Sankt Augustin, Germany. [Andy](https://macaw.social/@andypiper) and [David](https://upp2.com/@dave) attended and spoke at the event.

- Andy’s keynote: [Decentralising Freedom - Open Source for Sovereignty](https://media.ccc.de/v/froscon2025-3408-decentralising_freedom_open_source_for_sovereignty)
- David’s talk: [Taking a Fresh Look at the Fediverse](https://media.ccc.de/v/froscon2025-3346-taking_a_fresh_look_at_the_fediverse)

If you are interested in new features in Mastodon, and our upcoming plans, David’s talk is particularly worth watching. You can also read [Andy’s personal blog post](https://andypiper.co.uk/2025/08/22/talks-and-travels-froscon-germany/) about the event.

In addition to our own team, shout out to [Georg Lukas](https://chaos.social/@ge0rg), who gave a great talk (based on [his blog post](https://op-co.de/blog/posts/samsung_nx_mastodon/)) about [creating a bridge from Samsung NX cameras to post to Mastodon](https://media.ccc.de/v/froscon2025-3304-samsung_camera_to_mastodon_bridge). Pretty detailed, and also very interesting and entertaining!

## Releases

There were no new backend software releases since the previous Trunk & Tidbits ⛱ the current releases of the Mastodon server software are [4.4.3](https://github.com/mastodon/mastodon/releases/tag/v4.4.3), [4.3.11](https://github.com/mastodon/mastodon/releases/tag/v4.3.11) and [4.2.24](https://github.com/mastodon/mastodon/releases/tag/v4.2.24). It is always best to keep your server up-to-date with the current code, as this ensures that you keep up with patches for any pesky bugs, and the community can enjoy the latest features.

## Backend and Web

In August, we reviewed and merged 176 Pull Requests (117 with translation and dependency updates removed) from 14 contributors. Thank you!

<div class="features-list">

- {{< feature-label name="new feature" >}} Lots of work on Quote Posts, now with the ability to create them, change the related settings and retract them. The feature is nearly finished, and you can expect a full blog post on it very soon!
If you are a Mastodon client developer, you can already look at [this draft implementation guide](https://github.com/mastodon/documentation/pull/1710).
- {{< feature-label name="performance" >}} Our FASP implementation now track the status of every provider, and stops trying to send data to them if they are not responsive {{< github-pr id=35723 authors="oneiros" >}}
- {{< feature-label name="interface" >}} The refactor of the web UI theme colours (implementing our new theme tokens) is well underway.
- {{< feature-label name="container" >}} Our container image is now using the latest Debian release {{< github-pr id=35768 authors="vmstan" >}}

</div>

## Android

We finished working on displaying quote posts, and fixed some more minor bugs and crashes. Released version 2.10.1.

## iOS

Furious paddling beneath the surface continues!

The new post layout is in good shape, and we are pushing through the todo list to deliver quote posts, as well.

## Documentation

We’d like to say thanks to several folks for their contributions to the [documentation repository](https://github.com/mastodon/documentation) last month. The docs can be a good place to help out if you’re looking to get involved, but have less knowledge of Ruby or other coding areas (for example).

We recently updated the README, and added a [DOCSTYLE](https://github.com/mastodon/documentation/blob/main/DOCSTYLE.md) guide, to work towards better consistency in the documentation.

Thanks to iioflow, Tak, cobrachili and joshuajung for helping to improve things for everyone.

## Community

There have been a lot of releases from projects across the developer ecosystem lately 💗

There’s a new release of [Mastodon for the Apple II](https://www.colino.net/wordpress/en/mastodon-for-apple-ii/)! (and, if you love retro computing, check out [the Retro computing category on the third-party apps list](https://joinmastodon.org/apps))

<blockquote class="mastodon-embed" data-embed-url="https://piaille.fr/@colin_mcmillen/115085414289701797/embed" style="background: #FCF8FF; border-radius: 8px; border: 1px solid #C9C4DA; margin: 0; max-width: 540px; min-width: 270px; overflow: hidden; padding: 0;"> <a href="https://piaille.fr/@colin_mcmillen/115085414289701797" target="_blank" style="align-items: center; color: #1C1A25; display: flex; flex-direction: column; font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Oxygen, Ubuntu, Cantarell, 'Fira Sans', 'Droid Sans', 'Helvetica Neue', Roboto, sans-serif; font-size: 14px; justify-content: center; letter-spacing: 0.25px; line-height: 20px; padding: 24px; text-decoration: none;"> <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="32" height="32" viewBox="0 0 79 75"><path d="M63 45.3v-20c0-4.1-1-7.3-3.2-9.7-2.1-2.4-5-3.7-8.5-3.7-4.1 0-7.2 1.6-9.3 4.7l-2 3.3-2-3.3c-2-3.1-5.1-4.7-9.2-4.7-3.5 0-6.4 1.3-8.6 3.7-2.1 2.4-3.1 5.6-3.1 9.7v20h8V25.9c0-4.1 1.7-6.2 5.2-6.2 3.8 0 5.8 2.5 5.8 7.4V37.7H44V27.1c0-4.9 1.9-7.4 5.8-7.4 3.5 0 5.2 2.1 5.2 6.2V45.3h8ZM74.7 16.6c.6 6 .1 15.7.1 17.3 0 .5-.1 4.8-.1 5.3-.7 11.5-8 16-15.6 17.5-.1 0-.2 0-.3 0-4.9 1-10 1.2-14.9 1.4-1.2 0-2.4 0-3.6 0-4.8 0-9.7-.6-14.4-1.7-.1 0-.1 0-.1 0s-.1 0-.1 0 0 .1 0 .1 0 0 0 0c.1 1.6.4 3.1 1 4.5.6 1.7 2.9 5.7 11.4 5.7 5 0 9.9-.6 14.8-1.7 0 0 0 0 0 0 .1 0 .1 0 .1 0 0 .1 0 .1 0 .1.1 0 .1 0 .1.1v5.6s0 .1-.1.1c0 0 0 0 0 .1-1.6 1.1-3.7 1.7-5.6 2.3-.8.3-1.6.5-2.4.7-7.5 1.7-15.4 1.3-22.7-1.2-6.8-2.4-13.8-8.2-15.5-15.2-.9-3.8-1.6-7.6-1.9-11.5-.6-5.8-.6-11.7-.8-17.5C3.9 24.5 4 20 4.9 16 6.7 7.9 14.1 2.2 22.3 1c1.4-.2 4.1-1 16.5-1h.1C51.4 0 56.7.8 58.1 1c8.4 1.2 15.5 7.5 16.6 15.6Z" fill="currentColor"/></svg> <div style="color: #787588; margin-top: 16px;">Post by @colin_mcmillen@piaille.fr</div> <div style="font-weight: 500;">View on Mastodon</div> </a> </blockquote> <script data-allowed-prefixes="https://piaille.fr/" async src="https://piaille.fr/embed.js"></script>

If you’re into more modern platforms, the Android app Tusky reached version 30! (and version 31 was just published as well) 👏🏻

<blockquote class="mastodon-embed" data-embed-url="https://mastodon.social/@Tusky/115004655628945040/embed" style="background: #FCF8FF; border-radius: 8px; border: 1px solid #C9C4DA; margin: 0; max-width: 540px; min-width: 270px; overflow: hidden; padding: 0;"> <a href="https://mastodon.social/@Tusky/115004655628945040" target="_blank" style="align-items: center; color: #1C1A25; display: flex; flex-direction: column; font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Oxygen, Ubuntu, Cantarell, 'Fira Sans', 'Droid Sans', 'Helvetica Neue', Roboto, sans-serif; font-size: 14px; justify-content: center; letter-spacing: 0.25px; line-height: 20px; padding: 24px; text-decoration: none;"> <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="32" height="32" viewBox="0 0 79 75"><path d="M63 45.3v-20c0-4.1-1-7.3-3.2-9.7-2.1-2.4-5-3.7-8.5-3.7-4.1 0-7.2 1.6-9.3 4.7l-2 3.3-2-3.3c-2-3.1-5.1-4.7-9.2-4.7-3.5 0-6.4 1.3-8.6 3.7-2.1 2.4-3.1 5.6-3.1 9.7v20h8V25.9c0-4.1 1.7-6.2 5.2-6.2 3.8 0 5.8 2.5 5.8 7.4V37.7H44V27.1c0-4.9 1.9-7.4 5.8-7.4 3.5 0 5.2 2.1 5.2 6.2V45.3h8ZM74.7 16.6c.6 6 .1 15.7.1 17.3 0 .5-.1 4.8-.1 5.3-.7 11.5-8 16-15.6 17.5-.1 0-.2 0-.3 0-4.9 1-10 1.2-14.9 1.4-1.2 0-2.4 0-3.6 0-4.8 0-9.7-.6-14.4-1.7-.1 0-.1 0-.1 0s-.1 0-.1 0 0 .1 0 .1 0 0 0 0c.1 1.6.4 3.1 1 4.5.6 1.7 2.9 5.7 11.4 5.7 5 0 9.9-.6 14.8-1.7 0 0 0 0 0 0 .1 0 .1 0 .1 0 0 .1 0 .1 0 .1.1 0 .1 0 .1.1v5.6s0 .1-.1.1c0 0 0 0 0 .1-1.6 1.1-3.7 1.7-5.6 2.3-.8.3-1.6.5-2.4.7-7.5 1.7-15.4 1.3-22.7-1.2-6.8-2.4-13.8-8.2-15.5-15.2-.9-3.8-1.6-7.6-1.9-11.5-.6-5.8-.6-11.7-.8-17.5C3.9 24.5 4 20 4.9 16 6.7 7.9 14.1 2.2 22.3 1c1.4-.2 4.1-1 16.5-1h.1C51.4 0 56.7.8 58.1 1c8.4 1.2 15.5 7.5 16.6 15.6Z" fill="currentColor"/></svg> <div style="color: #787588; margin-top: 16px;">Post by @Tusky@mastodon.social</div> <div style="font-weight: 500;">View on Mastodon</div> </a> </blockquote> <script data-allowed-prefixes="https://mastodon.social/" async src="https://mastodon.social/embed.js"></script>

Here are just a couple more highlights of other recent releases:

- [TootSDK](https://github.com/TootSDK/TootSDK/tags), a Swift library, made a number of releases during August.
- [Mastodon.py](https://github.com/halcy/Mastodon.py/releases/tag/v2.1.0), a Python library, brought functionality up-to-date with Mastodon 4.4.3 (and made a few more releases in August, as well).

## Thanks

First and foremost: Thank You for using Mastodon, and for believing in a better social web, one outside of corporate interests and without obscure algorithms.

We recently ran a small experiment with an in-app donation banner (visible to people on our own Mastodon servers), and appreciated the financial support that it generated. Even without that banner though, you can support us any time: we find recurring donations particularly helpful. If you become [a Patreon supporter](https://www.patreon.com/mastodon), you can also follow our updates over there, for even more news about what the team is doing to support the Fediverse!

{{< donate >}}
