---
title: "Trunk & Tidbits, May 2026"
description: "The latest updates on engineering work from the Mastodon team"
date: 2026-06-30
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
---

Welcome to the 26th edition of Trunks & Tidbits!

It is a bit later than usual, but a lot happened in May.

First of all, we welcomed [Pia](https://mastodon.social/@pia_ranha) into the team as a backend developer. This new hire was made possible by our recently announced [contract with the Sovereign Tech Agency](/2026/04/sovereign-tech-agency-funding/) and will help us deliver all of those features.

## Releases

We worked hard preparing the Mastodon 4.6 release, along with a [blog post](/2026/06/mastodon-4-6-for-devs/) outlining the major changes for API users and Fediverse implementors. As of this writing, Mastodon 4.6 has been released, you can learn more about it [in our announcement blog post](/2026/06/mastodon-4.6/).

We also released a few patch versions to fix security issues in supported versions. At the time of this publication, the latest supported versions are 4.6.2, 4.5.13 and 4.4.18. We strongly suggest administrators to update to those versions as soon as possible.

We also published Mastodon 4.3.23 with some security fixes, but Mastodon 4.3 has now reached end of life, as announced previously, and will not get any additional updates. We advise Mastodon administrators running 4.3 update to the latest version available.

To get the latest updates on our releases, you can follow our [Mastodon Engineering](https://mastodon.social/@MastodonEngineering) account.

## Backend & Web

In May 2026 we reviewed and merged 209 Pull Requests (141, not counting translation and dependency updates) from 21 contributors.

Our active projects (collections and emoji frontend refactor) got a lot of small fixes and tweaks in advance of the 4.6 release.

On the collection front, we marked the API as stable, removed the need for a feature flag, and published the relevant [API documentation](https://docs.joinmastodon.org/client/collections/).

Other notable changes include:

- Added an admin interface to manage the new email subscriptions feature: {{< github-pr id=38741 authors="Gargron" >}}
- Improved the moderation panel:
    - Add search to email blocks page: {{< github-pr id=38923 authors="arte7" >}}
    - Allow batch actions on collections: {{< github-pr id=38991 authors="arte7" >}}
- Improved Mastodon’s accessibility, including:
    - Improved visibility of focus indicators on search fields and the composer: {{< github-pr id=39120 authors="diondiondion" >}} {{< github-pr id=39120 authors="diondiondion" >}}
    - Add landmark regions to web app & settings: {{< github-pr id=39133 authors="diondiondion" >}} {{< github-pr id=39129 authors="diondiondion" >}}
    - Use a list markup for navigation lists: {{< github-pr id=39145 authors="diondiondion" >}} {{< github-pr id=39144 authors="diondiondion" >}}
    - Fix gaps in heading levels: {{< github-pr id=39149 authors="diondiondion" >}}
    - Fix focus order of post elements not matching visual reading order: {{< github-pr id=39169 authors="diondiondion" >}}
- Improved Emoji search: {{< github-pr id=39008 authors="chaosexanima" >}} {{< github-pr id=39077 authors="chaosexanima" >}} {{< github-pr id=39167 authors="chaosexanima" >}}
- Added a new “Overview” option for the server landing page setting, which shows a simplified page with your server info and the latest posts {{< github-pr id=39074 authors="Gargron" >}}

## Android & iOS

On Android, we released the 2.12.0 update implementing new generic notifications and admin-specific notifications, as well as adding view-only support for collections (full support will be coming in a future version).

On iOS, we released version 2026.03 with a full redesign of the profile screen consistent with Mastodon 4.6, support for generic notifications, and view-only support for collections.

## Thanks

Thanks for reading! Excited about what we’re working on? We are a non-profit team running on a very tight budget. Please consider supporting us with a small, recurring donation!

{{< donate >}}
