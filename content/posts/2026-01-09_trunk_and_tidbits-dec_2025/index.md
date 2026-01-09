---
title: "Trunk & Tidbits, December 2025"
description: "A look back at what the team was working on last month, and what's coming next."
date: 2026-01-09
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

Welcome back, friends: and, happy 2026. Our team is anticipating a lot of exciting developments this year!

As we write this update in early January, [FOSDEM](https://fosdem.org/2026) is just a few weeks away. We will have a stand at the event for the third year in a row, where you’ll be able to talk to folks from the team. If you’ve visited us at FOSDEM in the past, you should expect a different setup this year. We will have less merchandise to pick up from us in person, for logisical reasons: you can still [order merch online](https://shop.joinmastodon.org), but we don’t plan to have t-shirts, plushies or mugs with us this year, only some of the smaller items.

Apart from our table, we also have a presence in a couple of devrooms. Our Community Director, [Hannah](https://hachyderm.io/@haubles) will be on stage in the [Social Web Devroom](https://fosdem.org/2026/schedule/track/social-web/) with a session entitled [Tending the Herd](https://fosdem.org/2026/schedule/event/HJYRFF-tending-the-herd/), and will be on a panel on another track as well. We hope to meet some Trunk & Tidbits readers in the Social Web Devroom, so please say hello 🫶🏻

## Releases

In the past week, we released versions [4.5.4](https://github.com/mastodon/mastodon/releases/tag/v4.5.4), [4.4.11](https://github.com/mastodon/mastodon/releases/tag/v4.4.11), [4.3.17](https://github.com/mastodon/mastodon/releases/tag/v4.3.17) and [4.2.29](https://github.com/mastodon/mastodon/releases/tag/v4.2.29).

These versions contain fixes for various bugs, and include important security fixes (one high severity, and one moderate severity). We recommend that all server administrators update to the new point releases for the Mastodon version they are running.

> Note the [end-of-life dates](https://github.com/mastodon/mastodon/blob/main/SECURITY.md). Mastodon v4.2.29 will be the final update for the Mastodon v4.2 branch. Coming up, he 4.3 branch will reach EOL on **May 6, 2026**.
{.warning}

## Backend and Web

In December 2025 we reviewed and merged 183 Pull Requests (137 with translation and dependency updates removed) from 10 contributors. A quieter month - mostly as expected at this time of year, when folks take a break for the holiday.

Thank you to everyone who helped with code contributions and issue triage.

<div class="features-list">

- {{< feature-label name="interface" >}} Wrapstodon (our end-of-year summary of your activity) was updated, based on feedback from last year. It no longer requires action from administrators, and is enabled for everyone (but, it can be disabled). It is now generated on-demand, and has a new appearance. {{< github-pr id=37093 authors="diondiondion" >}} {{< github-pr id=37055 authors="ClearlyClaire" >}} {{< github-pr id=37106 authors="ChaosExAnima" >}} {{< github-pr id=37109 authors="ChaosExAnima" >}} {{< github-pr id=37121 authors="ChaosExAnima" >}} {{< github-pr id=37169 authors="diondiondion" >}} {{< github-pr id=37188 authors="ClearlyClaire" >}} {{< github-pr id=37273 authors="ClearlyClaire" >}}
- {{< feature-label name="api" >}} The work on [Collections (formerly known as starter packs)](https://blog.joinmastodon.org/2025/10/our-ideas-about-packs/) is continuing, and the first APIs are implemented. This is still highly experimental and will change. {{< github-pr id=37053 authors="oneiros" >}} {{< github-pr id=37110 authors="oneiros" >}} {{< github-pr id=37117 authors="oneiros" >}} {{< github-pr id=37139 authors="oneiros" >}}
- {{< feature-label name="ui" >}} There is an ongoing refactor aimed at improving our theming system. This will allow 3rd party themes to support a user setting for dark/light mode 😎 {{< github-pr id=37095 authors="diondiondion" >}}
- {{< feature-label name="backend" >}} Fixed an issue where `Referer` headers were not sent even if the administrator configured them to be sent. {{< github-pr id=37107 authors="ChaosExAnima" >}}
- {{< feature-label name="ui" >}} Fixed YouTube embeds not being displayed. {{< github-pr id=37126 authors="ChaosExAnima" >}} {{< github-pr id=37139 authors="oneiros" >}}

</div>

## iOS

We shipped 2025.09 with Liquid Glass controls, better scrolling on iPad, some crash fixes, and a few more localized languages. It was followed quickly by 2025.10, to correct the appearance of the new Liquid Glass icon on the App Store.

## Community

- If you like the multi-column view of Mastodon's Advanced Mode, you might also like to take a look at [FediDeck](https://fedideck.app/), an in-progress app with some similarities. It is marked as alpha, so be kind!
- If you're an iOS user, our friends at Tapbots [shipped an update for Ivory](https://tapbots.social/@ivory/115849434866292703) with support for Mastodon's consent-respecting quote posts feature.
- Finally, [Fediway](https://github.com/fediway/fediway) is "a recommendation engine for Mastodon" that you may be curious to investigate.

As always: if you're building with the Mastodon API, let us know!

## We Appreciate You

As we enter a new year, we're tremendously grateful for your support and contributions. We're building a people-powered social web, and depend on your donations. Please click below to help out. Thank you!

{{< donate >}}
