---
title: "Trunk & Tidbits, August 2024"
description: "Updates, news, and code changes from the Mastodon engineering team, for August 2024. The 4.3 beta is here!"
date: 2024-09-09
draft: false
categories:
- Trunk and Tidbits
- Engineering
tags:
- engineering
- mastodon
authors:
- andy
- renchap
resources:
- name: hero
  src: hero.png
---

# Trunk & Tidbits, August 2024

It was a big month for the Mastodon team, with a lot of work going into getting the first beta release of version 4.3 ready - but that's not all that we've worked on. Here is our monthly update on what we've been up to.

## Releases

During August, we released versions [4.2.12](https://github.com/mastodon/mastodon/releases/tag/v4.2.12) (as well as a short-lived 4.2.11) and [4.1.19](https://github.com/mastodon/mastodon/releases/tag/v4.1.19), with many bug fixes. If you are running the 4.2.x or 4.1.x series, we recommend that you upgrade to these latest versions.

We also [released the first beta of Mastodon 4.3](https://mastodon.social/@MastodonEngineering/113012338363435978)! This release includes a number of new features and improvements, including a new notifications screen, a new way to filter notifications, and a number of new APIs. Take a look at the full release notes [here](https://github.com/mastodon/mastodon/releases/tag/v4.3.0-beta.1). You will want to take a look at the requirements for upgrading to the new version, as many dependencies have been updated.

We are already running the latest code on our own instances (`mastodon.online` and `mastodon.social`), but it is important to get input from elsewhere. We appreciate all the feedback we can get from those upgrading to and running 4.3.0-beta.1 with their Mastodon communities - you can help us to make the release version even better.

## Current work

Our *current* plan is to release a second beta (i.e. 4.3.0-beta.2) in mid-September, with the final version of 4.3.0 coming 2-3 weeks after that.

# Web and Backend

In August, we reviewed and merged 242 Pull Requests (163 with translation and dependency updates removed) from 18 authors. If you're looking to get involved, [here](https://github.com/mastodon/mastodon/issues/30167) is a great place to start - a list of issues covering bug fixes and features, for both the backend and frontend.

<div class="features-list">

- {{< feature-label name="new feature" >}} A lot of work went into incorporating community feedback on the filtered notifications feature. You can now choose to drop messages rather than filtering them, reject or accept multiple ones at once, and the UI is much better. {{< github-pr id=31242 authors="ClearlyClaire" >}} {{< github-pr id=31262 authors="renchap" >}} {{< github-pr id=31250 authors="ClearlyClaire" >}} {{< github-pr id=31343 authors="ClearlyClaire" >}} {{< github-pr id=31342 authors="ClearlyClaire" >}} {{< github-pr id=31309 authors="ClearlyClaire" >}} {{< github-pr id=31457 authors="renchap" >}}
- {{< feature-label name="new feature" >}} Many small things have been tweaked in the new notifications screen. We enabled the new notifications (with grouping) for everyone on [mastodon.social](http://mastodon.social) and [mastodon.online](http://mastodon.online), which gave us more feedback, and we are adjusting some things accordingly. It also helped to ensure that the new API did not cause significant performance issues. If you are a client application developer, you can [provide feedback on the new notifications API](https://github.com/mastodon/mastodon/discussions/31618), before we mark it as stable.
- {{< feature-label name="interface" >}} Font Awesome removal! The main app got its icons replaced with Material Icons a few months ago, but Font Awesome was still used in the Rails rendered views (preferences, admin & moderation panels). Thanks to `@mjankowski`, those have been replaced as well, and we can now stop loading Font Awesome CSS & font files, which significantly reduces the page size.
- {{< feature-label name="api" >}} We added a new `api_versions` property in `/api/v2/instance` to provide a way for client apps to more easily detect the features available on the server. You can read more about this in the PR. {{< github-pr id=31354 authors="ClearlyClaire" >}}
- {{< feature-label name="api" >}} The recently added customisable instance icon is now available in the API {{< github-pr id=30205 authors="renchap" >}}
- {{< feature-label name="admin" >}} After being deprecated in 4.2, the `statsd` integration has been removed. Check the 4.3 release notes for possible replacements. {{< github-pr id=30240 authors="mjankowski" >}}
- {{< feature-label name="interface" >}}  The last confirmation modal, for boosting, has been updated to the new design. {{< github-pr id=31555 authors="Gargron" >}}

</div>

Again, there have been lot of bug fixes and refactoring from our recurring (and new!) contributors - thanks a lot!

One more thing: the Azure storage support is likely to be removed in the future, as Microsoft is abandoning their Ruby SDK. [More information here](https://github.com/mastodon/mastodon/discussions/31617).

We are currently working on:

- Polishing things before the 4.3 release, mostly around grouped notifications, along with some interface fixes.
- Launching a new project around Fediverse Discovery, thanks to a grant by the European Commission through their NGI Search program. More information very soon!
- Once 4.3 is branched out and in Release Candidate, we will focus on specification work for Quote Posts.
- We are also starting brainstorming around block list improvements. We did some preliminary work on this in 4.3, and we expect this to be one of the big features for 4.4.

# Mobile apps

There has not been a lot of activity around the mobile apps in August, due to the summer vacations. The recruitment for our full-time iOS developer position is going well and should be over by the end of September.

We would like to support the new grouped notifications in the mobile apps soon, as this is a very useful feature, and it will be our focus for the immediate future.

# Around the Community

Here are just a few of the things that we spotted from the developer community this past month!

- The wonderful [@vmstan](https://vmst.io/@vmstan) went through the documentation, and updated all of the screenshots to reflect the latest designs! You can see the [pull request here](https://github.com/mastodon/documentation/pull/1520) and you can expect to see the updated documentation soon.
- [Tom Casavant](https://tomkahe.com/@tom/) posted a blog entry about [including Mastodon posts in DuckDuckGo search results](https://tomcasavant.com/duckducksocial/).
- [Alan Pope aka Popey](https://mastodon.social/@popey) shared a new bot, [Uncle Clive](https://botsin.space/@UncleClive), to post the results of programs for the vintage / retro Spectrum computer. You can read about it in [his newsletter archive](https://newsletter.popey.com/archive/2024-08-23).
- A [Hugo shortcode, `stoot`](https://mandarismoore.com/2024/08/16/introducing-stoot-for.html) for including Mastodon posts in your site.
- Our Developer Relations human, [Andy](https://macaw.social/@andypiper), asked about what folks may not have seen that is built on the Mastodon API, and had responses ranging from an existing iOS app with a unique UI ([Pipilo](https://pipilo.thanel.me/)), to a new app currently in iOS TestFlight ([Fedicat](https://fedicat.com/)), to an new scheduling option ([MixPost](https://mixpost.app/releases/pro#v2.3.0)). So now you know about them, too!

# Gratitude

It is a pleasure to look back on the contributions from our community every month. The team wants to thank everyone who uses Mastodon and by doing so, helps to make it better. We are grateful for your support, your code, your bug reports, your translations, and your feedback. Thank you!

{{< donate >}}
