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

Hello! September was an exciting month, as we started to enable [the ability to create Quote Posts](https://blog.joinmastodon.org/2025/09/introducing-quote-posts/) on [mastodon.social](http://mastodon.social) and [mastodon.online](http://mastodon.online) (and, they also started to show up on other servers that run nightly builds of Mastodon). Coming to stable releases, very soon now!

## Releases

In September, we made two sets of releases: version [4.4.4](https://github.com/mastodon/mastodon/releases/tag/v4.4.4) / [4.3.12](https://github.com/mastodon/mastodon/releases/tag/v4.3.12) / [4.2.25](https://github.com/mastodon/mastodon/releases/tag/v4.2.25), followed by version [4.4.5](https://github.com/mastodon/mastodon/releases/tag/v4.4.5) / [4.3.13](https://github.com/mastodon/mastodon/releases/tag/v4.3.13) / [4.2.26](https://github.com/mastodon/mastodon/releases/tag/v4.2.26). These addressed issues identified with display of quote posts (in v4.4), as well as various other smaller updates and fixes. If you run a Mastodon server, we recommend that you upgrade to the most recent minor update level for your major version.

Looking ahead, we plan to release version 4.5 during October! Expect to see the first beta version in the next few days.

## Backend and Web

We reviewed and merged 195 Pull Requests (123 with translation and dependency updates removed) from 16 contributors. All three metrics up over August! 🚀 We appreciate the contributions.

- Lot of changes relative to quote posts to finish the work around this feature, which we enabled on our own servers. They are available on nightly releases without a feature flag now.
- Changes to how we create new conversation URIs. <https://github.com/mastodon/mastodon/pull/35959> <https://github.com/mastodon/mastodon/pull/36064>
- Added [schema.org](http://schema.org) markup to posts, so they can appear with more information in search engines <https://github.com/mastodon/mastodon/pull/36075>
- Changed the UI to notify the user that new replies are available <https://github.com/mastodon/mastodon/pull/36172>
- Refactored the emoji-related code to modernise it, and allow using native emojis in the future <https://github.com/mastodon/mastodon/pull/36165> <https://github.com/mastodon/mastodon/pull/36293>
- Recent quote posts change: you can now view the list of quotes on other people’s posts <https://github.com/mastodon/mastodon/pull/36301> <https://github.com/mastodon/mastodon/pull/36291>
- Change the identifiers used in ActivityPub to numeric IDs (instead of their username) for new users. This is a first step towards allowing account renaming <https://github.com/mastodon/mastodon/pull/32724>

## Android

The big changes in September were around Quote Post authoring, and the 2.11.1 release.

## iOS

We put the finishing touches on 2025.06, which is now available in the App Store.  This brings an all-new timeline layout throughout the app, including support for quote posts. This has been a major chunk of work that puts us in a better position to move forward with additional UI improvements from here. We hope you enjoy the new look (and, the bunch of bug fixes made along the way).

## Fediscovery

The [Fediscovery project](https://fediscovery.org) was always only an initial implementation of a broader specification, [Fediverse Auxiliary Service Providers](https://github.com/mastodon/fediverse_auxiliary_service_provider_specifications), aka FASPs.

We’re happy to see that our friend James @<Floppy@mastodon.me.uk> has been working on creating a [client / non-provider side implementation of the FASP interface](https://github.com/manyfold3d/fasp_client). In fact, he also added support for federated search based on Fediscovery into [version 0.123.0](https://manyfold.app/news/2025/09/16/release-v0-123-0.html) of [Manyfold](https://manyfold.app/), an application for organising 3D print models that is also part of the Fediverse.

If you’re interested in Fediscovery or in creating FASP implementations then we’d be curious to know what you’re working on 🧐

## Community

We have a couple of important discussions to highlight in our GitHub community this month:

- We plan to update our Code of Conduct for the Mastodon community and GitHub projects to the Contributor Covenant, version 3. The [proposal for comment](https://github.com/mastodon/mastodon/discussions/36324) is open for the next month.
- We just posted a [community consultation on new Terms of Service](https://github.com/mastodon/mastodon/discussions/36368) to be applied to the Mastodon servers hosted by Mastodon gGmbH (mastodon.social and mastodon.online)

Apart from these discussions, we love to discover new projects being built on the Mastodon API! 🔍

- [Best-o-Masto is a new single-purpose iOS client app](https://birchtree.me/blog/introducing-best-o-masto/) for highlighting the top posts from your friends.
- [Feditag](https://github.com/Enichan/feditag) is a JavaScript-based embed to pull in hashtagged posts from a specific Mastodon account for display on a web page.

## Thank you for your support

We’re always grateful for your support, and now more than ever, we’re committed to building a better social web. Please donate if you are able. Thank you!

{{< donate >}}
