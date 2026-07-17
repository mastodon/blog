---
title: "Trunk & Tidbits, June 2026"
description: "The latest updates on engineering work from the Mastodon team"
date: 2026-07-17
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

Welcome to the 27th edition of Trunks & Tidbits!

## Releases

The big release for this month is Mastodon 4.6! You can read more about it in [our announcement](/2026/06/mastodon-4.6/). If you work with the Mastodon API, you will also want to read [our specific article](/2026/06/mastodon-4-6-for-devs/).

We released patch versions for all supported versions. Latest versions are 4.6.3, 4.5.13 and 4.4.20, they contain security fixes and we recommend that all admins update their servers.

As per our policy, Mastodon 4.4 will stop being supported 6 months after this new version release, on the 17th December 2026. We advise administrators running Mastodon 4.4 to plan an update in the next few months.

## Backend & Web

In June 2026 we reviewed and merged 280 Pull Requests (204 with translation and dependency updates removed) from 26 contributors.

Many of those include bug fixes for the 4.6 release, as well as refactors that were waiting for the release to happen. Notables changes are:

- Added support for exporting and importing filters {{< github-pr id=39085 authors="arte7" >}} {{< github-pr id=39256 authors="arte7" >}}
- Continued to work on accessibility improvements, we will write more about those in a dedicated blog post
- Started some work to improve ActivityPub signatures, including inbound support for [FEP-521a](https://codeberg.org/fediverse/fep/src/commit/d6bf7ea9f195af9b91e92e258b9fb0c4ea7828b5/fep/521a/fep-521a.md), support for `Ed25519` signatures. {{< github-pr id=39497 authors="ClearlyClaire" >}} {{< github-pr id=39518 authors="ClearlyClaire" >}}
- Improved the moderation panel with a search field on the IP blocks page and audit logs for hashtag actions {{< github-pr id=39404 authors="arte7" >}} {{< github-pr id=39337 authors="arte7" >}}
- Changed the mentions dropdown to support one space (for example you can now type `@Elena Rossini` and it will suggest you `@_elena@mastodon.social`) {{< github-pr id=39622 authors="Gargron" >}}

## Android & iOS

Version 2.13 of Masdoton's Android app has been released, with view-only support for collections. Push notifications have also been reworked to work without a relay by having Mastodon servers send them directly to the Android Push Notifications service.

On iOS, version 2026.04 has been released with support for viewing Collections natively. You can also report them, if necessary. This version also updated the edit history view to match the new timeline style. Stats (followers/following/boosts/etc.) are now always rounded down, so you won’t see milestones like “1K” before they are actually reached.

## Kubernetes Helm Chart

For people deploying Mastodon in Kubernetes, we have created a [new helm chart](https://github.com/mastodon/helm-charts/tree/main/charts/mastodon), intended to fully replace the [old chart](https://github.com/mastodon/chart), which will be deprecated at the end of the year.

The new chart addresses several fundamental issues with the old chart, with those key changes:

- Now supports a proper helm repo within the Github repository.
- Capable of holding multiple charts (not just mastodon) in one repo.
- No longer bundles external dependencies like PostgreSQL or Redis to avoid dependency issues.
- Chart now follows helm best practices with regards to formatting, variable names and file structure.
- Additional abstraction and generalisation to keep the templates as DRY as possible.
- Removes old or deprecated features predating Mastodon v4.4 to reduce complexity.
- Better configuration support for things like secrets.

Since the new chart cannot simply be dropped in as a replacement, we have also created a [migration guide](https://github.com/mastodon/helm-charts/blob/main/charts/mastodon/MIGRATION.md) to help clarify the steps that need to be taken, as well as detailed lists of variable changes.

## Thanks

Thanks for reading! If you’re excited about what we’re working on, would you consider supporting us with a small, recurring donation?

{{< donate >}}
