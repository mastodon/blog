---
title: "Trunk & Tidbits, July 2024"
description: "The latest updates from the Mastodon engineering team, for progress made in July 2024"
date: 2024-08-12
draft: false
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
---

Hey, friends - here is another instalment in our engineering updates series. This is what has been happening in the code lately.

## Team Updates

At the very end of July we [opened a role](https://mastodon.social/@MastodonEngineering/112875546269005188) for an iOS developer to look after the official Mastodon for iOS app. If you are interested, the [details of the role are available here](https://jobs.ashbyhq.com/mastodon/bc91c481-d30a-4e73-9eb8-ac29f4e905e2).

## Current work

We continue along the road to Mastodon 4.3, our next major release. We really *hoped* to release a beta in July, but we got some feedback about the filtered notifications feature, and we are making a few changes to address some issues before releasing it more widely. It should be really close now!

The changes described here are already available to users of instances that are running a recent “nightly” version (for example, [mastodon.social](https://mastodon.social) or [mastodon.online](https://mastodon.online)), and will come to others as part of the 4.3 release.

# Web and Backend

In July, we reviewed and merged 186 Pull Requests (110 with translation and dependency updates removed) from 14 authors. We appreciate the contributions. If you would like to help, we have a [list of issues](https://github.com/mastodon/mastodon/issues/30167) that you can start from.

<div class="features-list">

- {{< feature-label name="new feature" >}} Added a way to see all public posts sharing a trending link. {{< github-pr id=30840 authors="Gargron" >}}
- {{< feature-label name="new feature" >}} The grouped notifications feature is merged, behind an experimental flag in notifications settings for now. We plan to make grouped notifications the default experience after the first beta is released. The API is not yet 100% final, but we think it should not change much; documentation will be published once the API becomes stable. {{< github-pr id=30440 authors="renchap,ClearlyClaire,Gargron">}}
- {{< feature-label name="api" >}} New API endpoints have been added to fetch the number of unread notifications (using the existing marker), for both the ungrouped ([see docs](https://docs.joinmastodon.org/methods/notifications/#unread-count)) and grouped notifications. {{< github-pr id=31191 authors="ClearlyClaire" >}}
- {{< feature-label name="performance" >}} Multiple improvements to metadata extraction when posting URLS. {{< github-pr id=30929 authors="oneiros" >}} {{< github-pr id=30933 authors="oneiros" >}} {{< github-pr id=30957 authors="oneiros" >}} {{< github-pr id=30973 authors="oneiros" >}} {{< github-pr id=31144 authors="adamniedzielski" >}}
- {{< feature-label name="interface" >}} We recently introduced cards when hovering over account names, but this was a distraction for some people (particularly when using the advanced web interface), so there is now a setting to disable them. {{< github-pr id=30931 authors="ClearlyClaire" >}}
- {{< feature-label name="interface" >}} The non-React parts of the frontend (sign-in, sign-up, preferences, admin panel etc.) have been updated to the new UI colors. {{< github-pr id=31034 authors="vmstan" >}}
- {{< feature-label name="interface" >}} The various confirmation modals (except boosts) have been updated with a more modern look. {{< github-pr id=30884 authors="Gargron" >}}
- {{< feature-label name="new feature" >}} Moderators can now search for hashtags in the moderation interface. {{< github-pr id=30880 authors="ThisIsMissEm" >}}
- {{< feature-label name="security" >}} PKCE has been enabled for authenticating using OAuth. It is highly recommended for apps to use it.  {{< github-pr id=31129 authors="ThisIsMissEm" >}}

</div>

We are currently working on:

- Changing the filtered notifications, taking user feedback of the initial experience into account.
- Polishing the new grouped notifications, based on feedback and on and some performance data we are gathering.
- Discussing the best way to let applications know what is supported by the Mastodon API on a given instance. Currently, developers needs to either use the Mastodon version (not precise enough) or probe for API availability, which is painful and brittle.
- Releasing the first 4.3 beta. We have been saying this for some time now, but this is still our priority!

# Mobile apps

## Android

This month, we released a new version of the app that adds a way to support Mastodon by making a donation to us. It will also allow us to experiment with a small, dismissible, one-time donation banner in the app, and see whether this is effective. This is only enabled for users on [mastodon.social](https://mastodon.social) and [mastodon.online](https://mastodon.online) for now, but is part of a bigger project to improve the Fediverse’s sustainability, and we plan to expand it to more instances later, allowing the instance administrators to more easily fund the infrastructure, while also supporting financing of the development of the software.

We also updated the app description in the Play Store to better explain what Mastodon is, and what it brings to users.

## iOS

- This has been a long-requested feature: you can [now access your lists and followed hashtags from the app](https://github.com/mastodon/mastodon-ios/pull/1325)! Creating or editing lists is not there yet, but will be added in a future release.
- The new 4.3 filtered notifications feature is available in the app. It does not yet mirror the latest experience from the web (because we are still iterating on it), but the basics are there.
- Other bug fixes and stability improvements, including fixing the widgets and shortcuts, as well as [correctly counting URLs as 23 characters](https://github.com/mastodon/mastodon-ios/pull/1336), regardless of their actual size.

You can explore these improvements in the 2024.8 release of the app, and [read the full release notes on GitHub](https://github.com/mastodon/mastodon-ios/releases/tag/2024.8).

# Community radar

We’re always interested to hear what you’re building using the Mastodon API. This month, our Developer Advocate [Andy](https://macaw.social/@andypiper) has been trying some of the nice command-line / terminal client apps that exist for Mastodon, for example [toot](https://github.com/ihabunek/toot) and [tut](https://tut.anv.nu/) - should we add a section to the client apps section of the website for these? Are there more of them that we don’t know about yet? Let us know what you think.

If you are interested in trains and railways, you may also be interested in [Stefan Bohacek](https://stefanbohacek.online/@stefan)’s recently launched [@trainstations@botsin.space bot](https://botsin.space/@trainstations). What are your favourite friendly, fun or useful bots? Let Andy know, and we may feature some in a future update.

# Thank you for using Mastodon

We are extremely grateful to have such an incredible community of users who believe in what we're building, and contributors who support us in the code and documentation. Your support and engagement are what make Mastodon a platform that matters.

{{< donate >}}
