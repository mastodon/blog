---
title: "Trunk & Tidbits, June 2024"
description: "Mastodon engineering team updates for June 2024"
date: 2024-07-11
draft: false
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

Looking back at June (and just sneaking in to the start of July), we have a lot to share with you. Let’s dive in!

# Growing the team

First of all, we are delighted to announce a new member of the core development team - [David Roetzel](https://upp2.com/@dave) joined us as a core web developer. [Welcome, @dave!](https://mastodon.social/@Gargron/112717333579545073)

# Keeping things secure

During June, we investigated and fixed (and tested the patches for) 3 security issues. They were part of our most recent security [releases](https://github.com/mastodon/mastodon/releases) at the start of July. These are important updates for [the 4.2 and 4.1 releases, and nightly builds](https://mastodon.social/@MastodonEngineering/112729089400502697). Please make sure you are running the latest version of Mastodon to keep your instance secure.

We care about the maintenance of our supported versions, so there is always a portion of work that goes into this strand of the team's activities. We're excited to bring you the new features mentioned below - but, making sure that Mastodon is secure and reliable is always our top priority, so that comes first.

As a reminder, you can [follow @MastodonEngineering](https://mastodon.social/@MastodonEngineering) to keep track of new releases and other important technical updates.

# Current development work

We are aiming to make the first beta of Mastodon 4.3 available during July.

The changes list below are now available to users of instances that are running a recent "nightly" version (for example, [mastodon.social](http://mastodon.social) or [mastodon.online](https://mastodon.online)), and will come to others as part of the full 4.3 release.

## Web and Backend

In June, the team reviewed and merged 237 Pull Requests (162 when translation and dependency updates are taken out of that larger total), from 20 authors! Thank you to our contributors. If you would like to help, there are bug fixes, features, and improvements to be made across backend and frontend - [start here](https://github.com/mastodon/mastodon/issues/30167).

<div class="features-list">

- {{< feature-label name="new feature" >}} The grouped notifications backend has been merged. This is still experimental; the API might change. {{< github-pr id=29889 authors="ClearlyClaire" >}}
- {{< feature-label name="developer" >}} The devcontainer setup has been improved, thanks to [polotek](https://social.polotek.net/@polotek) asking us about it and the work of a number of contributors {{< github-pr id=30548 authors="vmstan" >}} {{< github-pr id=30547 authors="mjankowski" >}} {{< github-pr id=30502 authors="fabiosammy,mjankowski" >}}  {{< github-pr id=30566 authors="mjankowski" >}} {{< github-pr id=30592 authors="mjankowski" >}} {{< github-pr id=30593 authors="mjankowski" >}} {{< github-pr id=30603 authors="mjankowski" >}}
- {{< feature-label name="performance" >}} `libvips` support has been merged! ImageMagick is still available, but we plan to switch the default to `libvips` in the next version, then remove ImageMagick support. `libvips` ≥ 8.13 is required, and our official container images uses `libvips` out of the box {{< github-pr id=30090 authors="gargron" >}}
- {{< feature-label name="container" >}} `libvips` and `ffmpeg` are now built from source in our official container image, allowing us to use just the dependencies we need and to use the latest version, removing several hundred megabytes from the image. Those versions are also automatically tracked by Renovate, to ensure we update them. {{< github-pr id=30571 authors="vmstan" >}} {{< github-pr id=30569 authors="vmstan" >}}
- {{< feature-label name="api" >}} The recently-introduced `read:me` OAuth scope has been renamed to `profile` for consistency {{< github-pr id=30357 authors="ThisIsMissEm" >}}
- {{< feature-label name="new feature" >}} Support for  `fediverse:creator` author links in the web UI. {{< github-pr id=30521 authors="Gargron" >}}
- {{< feature-label name="api" >}} In order to support multiple authors for a `fediverse:creator` link preview, we are introducing the `authors` attribute in the REST API. This  will contain the author name, optional URL, and optional Fediverse account. For now, this attribute cannot contain more than one author on Mastodon, but this might change. The `author_*` attributes will be deprecated. {{< github-pr id=30846 authors="Gargron" >}}
- {{< feature-label name="new feature" >}} Mastodon now has account hover cards that show when hovering over an account name. We are still gathering feedback and tuning the feature, but it should be especially useful with the new grouped notifications. {{< github-pr id=30754 authors="Gargron" >}}

</div>

We are currently working on:

- Finishing the frontend part of the grouped notifications feature. This is a lot of work to get all specific behaviour implemented, but we are nearing the end. We intend to release this as an experimental, opt-in, feature at first for a few weeks, to ensure it behaves correctly both in the UI and in terms of performance. This is the last piece to complete before the 4.3 beta can be released!
- Thinking about link preview federation. The first step is listing everything related to this concept, potential issues, points of concern... and then, trying to find all possible ways of solving the issues. More news on this topic in the upcoming weeks!

## Android

- Redesigned the "news" tab, to align with the web version.
- Implemented support for `fediverse:creator` display in link previews.
- Polished the upcoming in-app donation feature.
- Multiple bug fixes and small improvements.

## iOS

- Implemented [support for `fediverse:creator` display](https://github.com/mastodon/mastodon-ios/pull/1321) in link previews.
- Fixed [multiple bugs related to the translation feature]( https://github.com/mastodon/mastodon-ios/pull/1320).
- New [privacy & safety screen](https://github.com/mastodon/mastodon-ios/pull/1306).
- Reworked and fixed [timeline loading](https://github.com/mastodon/mastodon-ios/pull/1316).
- Other bug fixes and stability improvements.

The focus for July on iOS will be on adding support for Lists, and the new grouped notifications feature coming in 4.3.

# Around the community

If you’re building something using Mastodon or the Mastodon API, let us know about it (you can use the #MastodonAPI hashtag, if you like). Here are some things we noticed this month that we thought you might like to know about, too!

- Not one but *two* new things from [Stefan Bohacek](https://stefanbohacek.online/@stefan): a [pinned posts organizer](https://pinned-posts-organizer.stefanbohacek.dev/), and a series of [Fediverse explorations](https://stefanbohacek.com/project/fediverse-explorations/). Thanks for sharing, Stefan!
- Frederik Elwert [posted about](https://fedihum.org/@felwert/112724461707800079) a [bookmarks app](https://github.com/frederik-elwert/mastodon-bookmark-search/). It is an additional way to search your bookmarks on Mastodon (tip: you can use the `in:collection` search operator to search your bookmarks, but that includes likes as well).
- Hexmasteen [posted](https://chaos.social/@hexmasteen/112728534180475511) that [SocialHubIO](https://socialhub.io/en/) now supports Mastodon.

# Thank you for using Mastodon

We're happy to be able to build a platform that matters to so many people around the world. Spread the word!

{{< donate >}}
