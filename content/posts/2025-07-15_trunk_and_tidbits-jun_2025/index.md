---
title: "Trunk & Tidbits, June 2025"
description: "News from the Mastodon engineering team. Oh hey, did you hear that Mastodon 4.4 is out?"
date: 2025-07-15
section: Trunk and Tidbits
categories:
- Trunk and Tidbits
- Engineering
tags:
- engineering
- mastodon
authors:
- renchap
- andy
resources:
- name: hero
  src: hero.png
draft: false
---

It was another busy month in June, as we moved into the final stretch of the 4.4 release process. We also covered a lot of events during the month. Here’s what was happening.

## Team

We welcomed [Imani](https://mastodon.social/@imanijoy) to the team, as our new designer. Very excited to have Imani join us!

We also said goodbye to [Inga](https://mastodon.social/@inganomads), who has been instrumental in building the team. Thank you, Inga 🙏🏻

<blockquote class="mastodon-embed" data-embed-url="https://mastodon.social/@inganomads/114678177720568140/embed" style="background: #FCF8FF; border-radius: 8px; border: 1px solid #C9C4DA; margin: 0; max-width: 540px; min-width: 270px; overflow: hidden; padding: 0;"> <a href="https://mastodon.social/@inganomads/114678177720568140" target="_blank" style="align-items: center; color: #1C1A25; display: flex; flex-direction: column; font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Oxygen, Ubuntu, Cantarell, 'Fira Sans', 'Droid Sans', 'Helvetica Neue', Roboto, sans-serif; font-size: 14px; justify-content: center; letter-spacing: 0.25px; line-height: 20px; padding: 24px; text-decoration: none;"> <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="32" height="32" viewBox="0 0 79 75"><path d="M63 45.3v-20c0-4.1-1-7.3-3.2-9.7-2.1-2.4-5-3.7-8.5-3.7-4.1 0-7.2 1.6-9.3 4.7l-2 3.3-2-3.3c-2-3.1-5.1-4.7-9.2-4.7-3.5 0-6.4 1.3-8.6 3.7-2.1 2.4-3.1 5.6-3.1 9.7v20h8V25.9c0-4.1 1.7-6.2 5.2-6.2 3.8 0 5.8 2.5 5.8 7.4V37.7H44V27.1c0-4.9 1.9-7.4 5.8-7.4 3.5 0 5.2 2.1 5.2 6.2V45.3h8ZM74.7 16.6c.6 6 .1 15.7.1 17.3 0 .5-.1 4.8-.1 5.3-.7 11.5-8 16-15.6 17.5-.1 0-.2 0-.3 0-4.9 1-10 1.2-14.9 1.4-1.2 0-2.4 0-3.6 0-4.8 0-9.7-.6-14.4-1.7-.1 0-.1 0-.1 0s-.1 0-.1 0 0 .1 0 .1 0 0 0 0c.1 1.6.4 3.1 1 4.5.6 1.7 2.9 5.7 11.4 5.7 5 0 9.9-.6 14.8-1.7 0 0 0 0 0 0 .1 0 .1 0 .1 0 0 .1 0 .1 0 .1.1 0 .1 0 .1.1v5.6s0 .1-.1.1c0 0 0 0 0 .1-1.6 1.1-3.7 1.7-5.6 2.3-.8.3-1.6.5-2.4.7-7.5 1.7-15.4 1.3-22.7-1.2-6.8-2.4-13.8-8.2-15.5-15.2-.9-3.8-1.6-7.6-1.9-11.5-.6-5.8-.6-11.7-.8-17.5C3.9 24.5 4 20 4.9 16 6.7 7.9 14.1 2.2 22.3 1c1.4-.2 4.1-1 16.5-1h.1C51.4 0 56.7.8 58.1 1c8.4 1.2 15.5 7.5 16.6 15.6Z" fill="currentColor"/></svg> <div style="color: #787588; margin-top: 16px;">Post by @inganomads@mastodon.social</div> <div style="font-weight: 500;">View on Mastodon</div> </a> </blockquote> <script data-allowed-prefixes="https://mastodon.social/" async src="https://mastodon.social/embed.js"></script>

## Events

Beyond the work of the engineering team:
- [Andy](https://macaw.social/@andypiper) spoke at PublicSpaces in Amsterdam and at ECAS Day in Brussels;
- [Felix](https://mastodon.social/@mellifluousbox) was at the Internet Governance Forum in Oslo;
- [Hannah](https://hachyderm.io/@haubles) spoke about [Mastodon being recognised as a Digital Public Good](https://blog.joinmastodon.org/2025/06/mastodon-dpga/), at the UN Open Source Week;
- [Renaud](https://oisaur.com/@renchap) represented us at the NGI Forum in Brussels;
- [Zora](https://mastodon.social/@zoraxzora) co-hosted a Mastodon workshop at the Publix day in Berlin.

Relatedly, we were happy that our most recent grant application to the NGI0 Commons fund was approved. This means that we will have some funding to work on [institutional features](https://nlnet.nl/project/Mastodon-for-institutions/) over the next year.

## Releases

In June, there were two beta releases and one release candidate for version 4.4.0. As we slid over into July, we released 4.4.0 and then [4.4.1](https://github.com/mastodon/mastodon/releases/v4.4.1) in quick succession. We recommend that server owners upgrade directly from 4.3.x to 4.4.1, and [check the release notes for 4.4.0 in detail for important migration information](https://github.com/mastodon/mastodon/releases/tag/v4.4.0), particularly around versions of other software that Mastodon depends on.

What’s new in version 4.4? We got you covered! Here’s [a blog post for developers](https://blog.joinmastodon.org/2025/07/mastodon-4-4-for-devs/), and [our 4.4 launch blog post](https://blog.joinmastodon.org/2025/07/mastodon-4.4/) that covers some of the most visible new features.

We also released patch versions [4.3.9](https://github.com/mastodon/mastodon/releases/tag/v4.3.9) and [4.2.22](https://github.com/mastodon/mastodon/releases/tag/v4.2.22), for server owners that remain on the 4.3.x or 4.2.x branches.

We're already hard at work on version 4.5 🧑🏻‍💻

### Bonus releases 🎉

We released [a pack of stickers for Signal users to use](https://signal.art/addstickers/#pack_id=43a9c3e16e24b2f182e2d3e03a7e1338&pack_key=87a129905fbe7371568eef6485f93a81b7569a963bf711063bf804123a075083) when talking with friends and contacts. Help share Mastodon via our cute mascot!

<blockquote class="mastodon-embed" data-embed-url="https://mastodon.social/@Mastodon/114749156199964168/embed" style="background: #FCF8FF; border-radius: 8px; border: 1px solid #C9C4DA; margin: 0; max-width: 540px; min-width: 270px; overflow: hidden; padding: 0;"> <a href="https://mastodon.social/@Mastodon/114749156199964168" target="_blank" style="align-items: center; color: #1C1A25; display: flex; flex-direction: column; font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Oxygen, Ubuntu, Cantarell, 'Fira Sans', 'Droid Sans', 'Helvetica Neue', Roboto, sans-serif; font-size: 14px; justify-content: center; letter-spacing: 0.25px; line-height: 20px; padding: 24px; text-decoration: none;"> <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="32" height="32" viewBox="0 0 79 75"><path d="M63 45.3v-20c0-4.1-1-7.3-3.2-9.7-2.1-2.4-5-3.7-8.5-3.7-4.1 0-7.2 1.6-9.3 4.7l-2 3.3-2-3.3c-2-3.1-5.1-4.7-9.2-4.7-3.5 0-6.4 1.3-8.6 3.7-2.1 2.4-3.1 5.6-3.1 9.7v20h8V25.9c0-4.1 1.7-6.2 5.2-6.2 3.8 0 5.8 2.5 5.8 7.4V37.7H44V27.1c0-4.9 1.9-7.4 5.8-7.4 3.5 0 5.2 2.1 5.2 6.2V45.3h8ZM74.7 16.6c.6 6 .1 15.7.1 17.3 0 .5-.1 4.8-.1 5.3-.7 11.5-8 16-15.6 17.5-.1 0-.2 0-.3 0-4.9 1-10 1.2-14.9 1.4-1.2 0-2.4 0-3.6 0-4.8 0-9.7-.6-14.4-1.7-.1 0-.1 0-.1 0s-.1 0-.1 0 0 .1 0 .1 0 0 0 0c.1 1.6.4 3.1 1 4.5.6 1.7 2.9 5.7 11.4 5.7 5 0 9.9-.6 14.8-1.7 0 0 0 0 0 0 .1 0 .1 0 .1 0 0 .1 0 .1 0 .1.1 0 .1 0 .1.1v5.6s0 .1-.1.1c0 0 0 0 0 .1-1.6 1.1-3.7 1.7-5.6 2.3-.8.3-1.6.5-2.4.7-7.5 1.7-15.4 1.3-22.7-1.2-6.8-2.4-13.8-8.2-15.5-15.2-.9-3.8-1.6-7.6-1.9-11.5-.6-5.8-.6-11.7-.8-17.5C3.9 24.5 4 20 4.9 16 6.7 7.9 14.1 2.2 22.3 1c1.4-.2 4.1-1 16.5-1h.1C51.4 0 56.7.8 58.1 1c8.4 1.2 15.5 7.5 16.6 15.6Z" fill="currentColor"/></svg> <div style="color: #787588; margin-top: 16px;">Post by @Mastodon@mastodon.social</div> <div style="font-weight: 500;">View on Mastodon</div> </a> </blockquote> <script data-allowed-prefixes="https://mastodon.social/" async src="https://mastodon.social/embed.js"></script>

We shipped an [improved donation widget](https://joinmastodon.org/sponsors#donate) for the website. It is now easier to donate directly to the project (although you are free to use Patreon, GitHub sponsors, and others if you wish).

## Backend and web

In June, we reviewed and merged 189 Pull Requests (137 with translation and dependency updates removed) from 11 contributors.

<div class="features-list">

- {{< feature-label name="backend" >}} Add support for receiving RFC9421 HTTP signatures (under an experimental flag for now) {{< github-pr id=34814 authors="oneiros" >}}
- {{< feature-label name="interface" >}} Update the navigation layout on small screens {{< github-pr id=34910 authors="Gargron" >}}
- {{< feature-label name="interface" >}} Replaced the dropdown menu near the composer with a “More” button in the main navigation {{< github-pr id=34987 authors="Gargron" >}}
- {{< feature-label name="interface" >}} Renamed “Explore” to “Trending” {{< github-pr id=34985 authors="Gargron" >}}
- {{< feature-label name="admin" >}} Reordered the items in the main navigation panel {{< github-pr id=35029 authors="Gargron" >}}
- {{< feature-label name="backend" >}} Added Fediscovery support to follow recommendations {{< github-pr id=35218 authors="oneiros" >}}
- {{< feature-label name="backend" >}} Added Fediscovery support for account search {{< github-pr id=34033 authors="oneiros" >}}
- {{< feature-label name="admin" >}} Added support for writing moderation notes for instances {{< github-pr id=31529 authors="ThisIsMissEm" >}}
- {{< feature-label name="admin" >}} Added support for a second set of SMTP credentials for non-transactional emails {{< github-pr id=35203 authors="oneiros" >}}
- {{< feature-label name="backend" >}} {{< feature-label name="interface" >}} Many small fixes to the backend and interface, to polish the 4.4 release

</div>

## Android

No updates of note in June.

## iOS

Version 2025.03 is now available on the App Store for all users, bringing an improved iPad layout and support for the 4.4 updates to server rules display, including translations.

## Fediscovery

Our [reference discovery provider](https://www.notion.so/Github-25298b9f28d04f9fb4b8cff033b83246?pvs=21) has become easier to install as we added documentation and an official helm chart. We started testing this in a production setting with a few select servers.

On the Mastodon side, we merged support for account search and follow recommendations. Both are in 4.4, but still behind a feature flag (server administrators need to enable these features). The integrations do not have immediate user-visible effects, but should help smaller servers to fill their local database with remote accounts. Once available, these then improve account discoverability across the Fediverse.

Although the additions do not have an instant effect, we already have an experimental API in place to help track the fetching of those remote accounts (and other things). Next steps will be to figure out an acceptable user experience to make the results available as they come in.

## Community news

In June, we spotted that the excellent [Robb](https://social.lol/@robb) (maker of [EchoFeed](https://echofeed.app/)) created [a plugin for TRMNL](https://github.com/rknightuk/trmnl-mastodon-profile), an e-Ink display device, to show Mastodon profile information. A fun little display! 📊

There’s ➡ more space here ⬅ for another one or two projects 😉 As a reminder, if you are building on Mastodon and our API, we’d love to hear about your project. Let [Andy](https://macaw.social/@andypiper) know about it, so we can include a shout-out and tell the community about it.

## Thank you

Thanks for reading, and apologies that this update was shared a little later than usual and intended - we’ll get them back on track.

One of our [key strategic goals for 2025](https://blog.joinmastodon.org/2025/06/mastodon-2025/) is to make Mastodon more sustainable, and we really want to grow both the number of people using Mastodon, and the number of people who donate to help us. We depend on your support - no ads, no venture capital, fully independent: better social networking, for the people.

{{< donate >}}
