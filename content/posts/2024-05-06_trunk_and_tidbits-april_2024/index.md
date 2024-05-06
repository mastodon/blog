---
title: Trunk & Tidbits, April 2024
description: "Welcome to the first in a planned ongoing series of updates from the core Mastodon engineering team"
date: 2024-05-07
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

Welcome to the first in a planned ongoing series of updates from the core Mastodon engineering team. We’ll also take a quick look at what’s been happening around the broader community.

# What we’ve been working on

The Mastodon 4.3 release is around the corner - we only have one big feature (grouped notifications) to finish before the first beta release! Let’s dive in on some of the most important things that have been merged lately.

Changes below are available to users of instances that are running a recent “nightly” version (like mastodon.social or mastodon.online), and will come in the 4.3 release.

## Web app and Backend

<div class="features-list">

- {{< feature-label name="interface" >}} This is from March, and it will probably make a lot of people happy: you can now configure Mastodon to use the light or dark theme depending on your device setting! {{< github-pr id=29748 authors="nshki,renchap" >}}
- {{< feature-label name="interface" >}} A better design for the Profile page in the Explore section. This is the last part of multiple improvements to profile recommendations that will be in 4.3 {{< github-pr id=30059 authors="Gargron" >}}
- {{< feature-label name="new feature" >}} After adding notifications for severed relationships (when an admin blocks an instance and it makes you loose followers or follows), we added a new notification when a moderator sends you a warning (it was previously only an email and some people missed it) {{< github-pr id=30065 authors="ClearlyClaire" >}}
- {{< feature-label name="security" >}} Merged initial support for ActiveRecord Encryption, which will allow us to encrypt some fields in the database so they do not appear in clear text in the database or backups {{< github-pr id=29831 authors="mjankowski" >}}
- {{< feature-label name="performance" >}} Ruby 3.3.1 official support, providing a 15% performance improvement compared to Ruby 3.2 (this number comes from our metrics on mastodon.social). Ruby 3.3.0 had multiple bugs with YJIT, but they seem to all be fixed in 3.3.1. Support for Ruby 3.0 has been dropped as it reached EOL. {{< github-pr id=28013 authors="mjankowski,vmstan" >}}
- {{< feature-label name="api" >}} New `read:me` scope in the API, to request read-only to the user’s account (and not to every accounts like `read` ) {{< github-pr id=29087 authors="ThisIsMissEm" >}}
- {{< feature-label name="api" >}} The web app should stop resetting the home timeline marker everytime you open it. This should make the marker API usable for syncing timeline position in native clients. If you are a developer and want to use it, please send us any feedback about this feature so we can improve it. And expect the web app to (correctly) sync the position at some point in the future! {{< github-pr id=22721 authors="davbeck" >}}

</div>

As always, many bug fixes or refactors to make the code cleaner and improve our test coverage have been merged. Shout out to [Matt Jankowski](https://cyber.digital-cache.cloud/@matt) who has been driving a lot of upgrades, modernisation, test improvements and other refactors to the backend.

## iOS

- A new release with improved polls, the return of the local timeline, better explore tab, and multiple smaller changes and fixes ([release notes](https://github.com/mastodon/mastodon-ios/releases/tag/2024.4))
- The iOS app is still undergoing a behind-the-scene large refactor to make it easier to work on. We are focused on improving it’s stability, and adding the most-requested missing features.

## Android

- A new version adding support for the new “filtered notifications” feature that will be released in 4.3 and some small changes and improvements ([release notes](https://github.com/mastodon/mastodon-android/releases/tag/v2.5.0))
- Working on an experiment on mastodon.social to show a **non-intrusive, easily dismissible** banner to donate to the project, similar to what Signal is doing. This is the first step of a bigger project to try to have the Mastodon ecosystem financed by its users and, if it proves successful, will be slowly expanded with more features (specifically, the ability for donations to go to server admins)

# What’s coming

These items are actively being worked on…

<div class="features-list">

- {{< feature-label name="new feature" >}} Grouped notifications API: with this feature, notifications like boosts, follows or likes on the same post will be grouped if they occur a few hours appart, and will show “X, Y, Z and 12 other accounts liked your post”. The UI is not complete, and we want to experiment with it a bit to see if it works. This required significant effort to implement without causing performance issues, but we think this should make notifications much better! {{< github-pr id=29889 authors="ClearlyClaire" >}}
- {{< feature-label name="api" >}} A new batch fetch API to get multiple accounts or statuses at once {{< github-pr id=27871 authors="noellabo,ClearlyClaire" >}}
- {{< feature-label name="performance" >}} Adding support for using `libvips` as our image processing library, which should make image operations more secure, much faster and require less memory {{< github-pr id=30090 authors="Gargron" >}}
- {{< feature-label name="performance" >}} We are trying to ship OpenTelemetry support in 4.3, to provide server admins with very useful operation data, and to drive our performance work. {{< github-pr id=30130 authors="robbkidd,julianocosta89,renchap" >}}
- {{< feature-label name="developer" >}} Work is ongoing to move our frontend build system from the deprecated Webpacker Gem to Vite, a more modern, faster and simpler bundler. It will not block the 4.3 release if not ready in time, but is near completion. {{< github-pr id=24981 authors="renchap" >}}

</div>

In parallel to all those projects, recruitment for a new [full-time core developer position](https://jobs.ashbyhq.com/mastodon/de1e4d8a-5639-4b6a-86d7-97bd9c768b02) is still in progress and we have been meeting with amazing people.

Looking further ahead, work is in progress to more clearly define a plan for Quote Posts. This will in part be funded by the [awesome folks at NLNet through their NGI0 Entrust fund](https://nlnet.nl/project/Mastodon-Quoting/). The first part of the work is working on specifications, and we hope to be able to publish more details on what we plan to implement soon.

We are also improving our documentation to help people to contribute to the project. This can seem daunting, but there is now a [pinned issue in the main repository](https://github.com/mastodon/mastodon/issues/30167) to point you to some good entrypoints, like some confirmed bugs, or features that we know we want, are well defined and are small enough for an individual to tackle. Expect more progress on this front in the next episode of this series!

# Around the community

We’re always excited to see the different ways that developers embrace Mastodon. Here are a couple of things we spotted this month. If you’re building something, let us know about it (you can use the #MastodonAPI hashtag, if you like)

- Take a look at [Stefan Bohacek](https://stefanbohacek.online/@stefan)’s blog post and code [analysing the network for his creative bots](https://stefanbohacek.com/blog/analyzing-fediverse-followers/).
- Got a Nintendo 3DS? You can [access Mastodon, too](https://wetdry.world/@760ceb3b9c0ba4872cadf3ce35a7a4/112338857837231408)! 🎮

# In case you missed it

We shared a couple of big news stories during April:

- The [plushie is coming](https://blog.joinmastodon.org/2024/04/mastodon-stuffed-toy-coming-soon/)! (and it is ***so cute***!)
- Mastodon [now has a 501(c)(3) entity in the United States](https://blog.joinmastodon.org/2024/04/mastodon-forms-new-u.s.-non-profit/), enabling the project to raise funds there more easily.

We were also excited to see our friends at Ghost [announcing](https://activitypub.ghost.org/) news to join the Fediverse, along with Buttondown!

# Thank you for your support

That's it for this month - thanks for using Mastodon, we hope you'll help spread the word to others and get them to join us all in building better social media.

{{< donate >}}
