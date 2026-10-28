---
title: "Trunk & Tidbits, September 2026"
description: "The latest updates on engineering work from the Mastodon team"
date: 2026-10-28
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

Welcome to the 30th edition of Trunks & Tidbits!

## Releases

We made two patch releases for all supported versions since our last Trunk & Tidbits post. As of this publication, our latest supported versions are 4.7.3, 4.6.9, 4.5.19 and 4.4.26.

Please note that Mastodon 4.4 will stop being maintained in less than 2 months, and we advise any server running it to update to a more recent version.

Mastodon 5.0 release is coming soon, and we [shared an update](/2026/10/5.0-a-closer-look/) of the upcoming interface changes. You can expect a first beta version very soon.

## Backend & Web

In September 2026 we reviewed and merged 287 Pull Requests (202 with translation and dependency updates removed) from 17 contributors.

This month, a lot of the activity was again to work on our upcoming Mastodon 5.0 redesign. In addition to this, here are the most significant changes:

- Limit the number of deletion notices sent to other servers by storing the list of servers which fetched an account in a bloom filter. This is strongly recommended on large servers who regularly delete many accounts as it heavily decreases the number of federation `Delete` activities. This feature introduces a new setting to require signed requests for accounts in order to know where the request comes from. {{< github-pr id=40283 authors="ClearlyClaire" >}}
- Added information about the trends and follow recommendation status of an account in the moderation panel {{< github-pr id=40398 authors="jhbabon" >}}
- Show the app used for registering an account in the moderation panel {{< github-pr id=40567 authors="jhbabon" >}}
- Added a server-side way to filter direct mentions, boosts, quotes and replies from the home feed {{< github-pr id=40468 authors="ClearlyClaire" >}}
- Refactored FASP capabilities integration so they can be toggled individually {{< github-pr id=40763 authors="oneiros" >}}
- David has been working on a new flow to register a FASP with a Fediverse server. You can [read it and provide feedback on GitHub](https://github.com/mastodon/fediverse_auxiliary_service_provider_specifications/pull/66).

## Android & iOS

We’re hard at work bringing a new navigational structure and features to align with the upcoming 5.0 design. Stay tuned!

## Thanks

Thanks for reading! If you’re excited about what we’re working on, would you consider supporting us with a small, recurring donation?

{{< donate >}}
