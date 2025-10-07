---
title: "Trunk & Tidbits, September 2025"
description: "News about what the Mastodon team worked on in September. Quote posts initial release, preparing version 4.5, new Android and iOS releases, and more."
date: 2025-10-08
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

Hello! September was an exciting month, as we started to enable [the ability to create Quote Posts](https://blog.joinmastodon.org/2025/09/introducing-quote-posts/) on `mastodon.social` and `mastodon.online` (and, they also started to show up on other servers that run nightly builds of Mastodon). Coming to stable releases, very soon now!

## Releases

In September, we made two sets of releases: version [4.4.4](https://github.com/mastodon/mastodon/releases/tag/v4.4.4) / [4.3.12](https://github.com/mastodon/mastodon/releases/tag/v4.3.12) / [4.2.25](https://github.com/mastodon/mastodon/releases/tag/v4.2.25), followed by version [4.4.5](https://github.com/mastodon/mastodon/releases/tag/v4.4.5) / [4.3.13](https://github.com/mastodon/mastodon/releases/tag/v4.3.13) / [4.2.26](https://github.com/mastodon/mastodon/releases/tag/v4.2.26). These addressed issues identified with display of quote posts (in v4.4), as well as various other smaller updates and fixes. If you run a Mastodon server, we recommend that you upgrade to the most recent minor update level for your major version.

Looking ahead, we plan to release version 4.5 during October! Expect to see the first beta version in the next few days. After that, we'll start to work on version 4.6 during November; we just [shared our initial thoughts on a Fediverse-friendly format for "Starter Packs"](https://blog.joinmastodon.org/2025/10/our-ideas-about-packs/), which would be a focus in that release.

## Backend and Web

We reviewed and merged 195 Pull Requests (123 with translation and dependency updates removed) from 16 contributors. All three metrics up over August! 🚀 We appreciate the contributions.

<div class="features-list">

- {{< feature-label name="new feature" >}} Lots of changes relative to quote posts to finish the work around this feature, which we enabled on our own servers. They are available on nightly releases without a feature flag now.
- {{< feature-label name="interface" >}} Recent quote posts change: you can now view the list of quotes on other people’s posts. {{< github-pr id=36291 authors="ClearlyClaire" >}} {{< github-pr id=36301 authors="ClearlyClaire" >}}
- {{< feature-label name="api" >}} Changes to how we create new conversation URIs. {{< github-pr id=35959 authors="jesseplusplus" >}} {{< github-pr id=36064 authors="ClearlyClaire" >}}
- {{< feature-label name="new feature" >}} Added [schema.org](http://schema.org) markup to posts, so they can appear with more information in search engines. {{< github-pr id=36075 authors="Gargron" >}}
- {{< feature-label name="interface" >}} Changed the UI to notify the user that new replies are available. {{< github-pr id=36172 authors="diondiondion" >}}
- {{< feature-label name="interface" >}} Refactored the emoji-related code to modernise it, and allow using native emojis in the future {{< github-pr id=36165 authors="ChaosExAnima" >}} {{< github-pr id=36293 authors="ChaosExAnima" >}}
- {{< feature-label name="api" >}} Change the identifiers used in ActivityPub to numeric IDs (instead of their username) for new users. This is a first step towards allowing account renaming. {{< github-pr id=32724 authors="ClearlyClaire" >}}

</div>

## Android

The big changes in September were around Quote Post authoring. We also shipped the 2.11.1 release.

## iOS

We put the finishing touches on 2025.06, which is now available in the App Store. This brings an all-new timeline layout throughout the app, including support for quote posts. This has been a major chunk of work that puts us in a better position to move forward with additional UI improvements from here. We hope you enjoy the new look (and, the bunch of bug fixes made along the way).

## Fediscovery

The [Fediscovery project](https://fediscovery.org) is the initial implementation of a broader specification, [Fediverse Auxiliary Service Providers](https://github.com/mastodon/fediverse_auxiliary_service_provider_specifications), aka FASPs.

We’re happy to see that our friend [James aka @Floppy](https://mastodon.me.uk/@Floppy) has been working on creating a [client / non-provider side implementation of the FASP interface](https://github.com/manyfold3d/fasp_client). In fact, he also added support for federated search based on Fediscovery into [version 0.123.0](https://manyfold.app/news/2025/09/16/release-v0-123-0.html) of [Manyfold](https://manyfold.app/), an application for organising 3D print models that is also part of the Fediverse.

If you’re interested in Fediscovery - or in creating FASP implementations - then we’d be curious to know what you’re working on... 🧐

## Community

We have a couple of important discussions to highlight in our GitHub community this month:

- We plan to update our Code of Conduct for the Mastodon community and GitHub projects to the Contributor Covenant, version 3. The [proposal for comment](https://github.com/mastodon/mastodon/discussions/36324) is open for the next month. Participants in our community look at this discussion, as this is an opportunity to comment on new Code of Conduct.
- We just posted a [community consultation on new Terms of Service](https://github.com/mastodon/mastodon/discussions/36368) to be applied to the Mastodon servers hosted by Mastodon gGmbH (`mastodon.social` and `mastodon.online`) in the coming month. If you have an account on these servers, please take a look at this.

Apart from these discussions, we love to discover new projects being built on the Mastodon API! 🔍

- [Best-o-Masto is a new single-purpose iOS client app](https://birchtree.me/blog/introducing-best-o-masto/) for highlighting the top posts from the people you follow.
- [Feditag](https://github.com/Enichan/feditag) is a JavaScript-based embed to pull in hashtagged posts from a specific Mastodon account, for display on a web page.

## Thank you for your support

We’re always grateful for your support, and we’re committed to building a better social web. Please donate if you are able. Thank you!

{{< donate >}}
