---
title: "Trunk & Tidbits, August 2026"
description: "The latest updates on engineering work from the Mastodon team"
date: 2026-09-15
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

Welcome to the 29th edition of Trunks & Tidbits!

## Releases

In August, we released Mastodon 4.7, which focuses entirely on technical improvements that are not visible by users. If you are a Fediverse implementer, our [release blog post](https://blog.joinmastodon.org/2026/08/mastodon-4.7/) will likely be useful to you to understand the new features we implemented on the ActivityPub side.

As of this publication date, our latest supported releases are 4.7.1, 4.6.7, 4.5.17 and 4.4.24. Those releases contain security fixes and we advise all admins to update to them.

Mastodon 5.0, our next version, is shaping up quickly. We published a [first blog post](https://blog.joinmastodon.org/2026/08/5.0-laying-the-foundation/) explaining the big interface changes that it will contain, and you can expect more news about it soon!

## Backend & Web

In August 2026 we reviewed and merged 197 Pull Requests (132 with translation and dependency updates removed) from 11 contributors.

While some of the team were enjoying their summer break, others were working hard on preparing our next release.

Our front end team is focused on implementing the new Mastodon 5.0 interface changes. Those are not yet visible (even when running the nightly releases) as they are still being worked on, but they should start to appear on your screens in a few weeks.

Work is continuing in stabilising [Fediscoverer](https://github.com/mastodon/fediscoverer/tree/main) to make it production-ready and allow admins to start benefitting from [Fediscovery](https://fediscovery.org).

- This started a few months ago, but we finally finished rolling our our custom Rails / Vite integration, which is simpler and uses less resources {{< github-pr id=40004 authors="jhbabon" >}}
- As part of other work, there can now be rare cases where remote account handles might become invalid after a rename. Those accounts are now indicated as such [in the REST API](https://docs.joinmastodon.org/entities/Account/#invalid_handle) and in the web interface. {{< github-pr id=40045 authors="ClearlyClaire" >}}
- Search queries that are very wide and might return far too many results are now blocked in order to not cause unbounded load on ElasticSearch {{< github-pr id=40196 authors="Gargron" >}}
- To help us understand better which features in Mastodon are popular or effective, we now count—anonymously, of course—which feature led to a user following another user, e.g. how many times users click “Follow” from the search results or from collections {{< github-pr id=40226 authors="Gargron" >}}  {{< github-pr id=40258 authors="Gargron" >}}  {{< github-pr id=40340 authors="Gargron" >}}
- We started an experiment to change how account deletion is federated, by keeping track of (an over-approximation of) which servers have seen each local account. This information is stored in a bloom filter, and used on account deletion to send deletion notices only to servers that already know of the account (plus a few others, as this is an approximation), greatly limiting the generated workload and network traffic. {{< github-pr id=40283 authors="ClearlyClaire" >}}

## Android & iOS

On iOS, we released 2026.07 to fix a security issue when using the "Open in Mastodon" feature on links that are not Mastodon URLs.

Version 2.13.3 of our Mastodon for Android app has been released, with a few bug fixes.

Work is in progress to update both apps to our upcoming designs and we expect to be able to share more about this soon!

## Thanks

Thanks for reading! If you’re excited about what we’re working on, would you consider supporting us with a small, recurring donation?

{{< donate >}}
