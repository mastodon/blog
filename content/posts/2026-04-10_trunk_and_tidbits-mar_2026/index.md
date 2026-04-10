---
title: "Trunk & Tidbits, March 2026"
description: "An update on the latest engineering work from the Mastodon team as we approach version 4.6"
date: 2026-04-10
section: Trunk and Tidbits
categories:
- Trunk and Tidbits
- Engineering
tags:
- engineering
- mastodon
authors:
- andy
resources:
- name: hero
  src: hero.png
draft: true
---

Welcome to the *24th edition* of Trunk & Tidbits 🎉 We’ve been publishing this monthly series, “behind the scenes of the code” from the Mastodon team, for a whole two years now!

We’re getting close to the release of Mastodon 4.6. In the past few weeks we published two feature updates about things you’ll see in the next version:

- firstly, there was a post about [a redesign for profile pages](https://blog.joinmastodon.org/2026/03/a-redesign-for-profiles/), now available to try out on `mastodon.social` and coming to other servers with version 4.6;
- we also posted [a more detailed update on Collections](https://blog.joinmastodon.org/2026/04/designing-collections/) (previously [briefly](https://blog.joinmastodon.org/2025/10/our-ideas-about-packs/) known as “Packs”).

Our goal in posting these updates is to offer a community-driven design process, and to provide visibility into *how* and *why* we reached implementation choices - similar to the transparency we’ve been offering via Trunk & Tidbits, but at a slightly less technical level.

One more thing on a related topic - [Imani](https://mastodon.social/@imanijoy) spoke at [FOSS Backstage Design](https://26.foss-backstage.design/), about the journey of being a designer at Mastodon, and some of the challenges and opportunities of working on federated software at scale. You can [watch the talk on YouTube](https://www.youtube.com/watch?v=oNxpTvbTy54).

## Releases

Last month, we released updates for the Mastodon server software across the three active  branches. These point releases all include security updates, as well as fixes to compatibility with GoToSocial features.

- [4.5.8](https://github.com/mastodon/mastodon/releases/tag/v4.5.8)
- [4.4.15](https://github.com/mastodon/mastodon/releases/tag/v4.4.15)
- [4.3.21](https://github.com/mastodon/mastodon/releases/tag/v4.3.21)

As usual, we strongly encourage server owners to update to the most recent version, in order to get the most stable and secure code and up-to-date user experience.

> Note that this is the final month for the 4.3.x branch - the end of support date for this version is May 6th 2026.
{.warning}

## Backend and Web

In March 2026 we reviewed and merged 347 Pull Requests (268 with translation and dependency updates removed), from 13 contributors.

We’re continuing to focus on the [new profile design](https://blog.joinmastodon.org/2026/03/a-redesign-for-profiles/) work, and Collections, both of which will be major features of Mastodon 4.6 - so again this month, much of the work has been around these two areas. Thank you for the feedback shared about the updates to profiles, in particular - this is being used to shape the final full release version.

<div class="features-list">
We’ve also worked on improving the accessibility of the Mastodon Web UI. This has involved focusing on the sign-up and login flows, better colour contrast, and improved navigation with skip links, with more to come in the near future. {{< github-pr id=38006 authors="diondiondion" >}} {{< github-pr id=38188 authors="diondiondion" >}} {{< github-pr id=38036 authors="diondiondion" >}}

Hidden behind a `EXPERIMENTAL_FEATURES` flag for now (`email_subscriptions`), we’ve added the ability for account owners to allow anonymous visitors to subscribe to their posts via e-mail, without making a Mastodon account. With the flag enabled, you must create a new user role with the “Manage Email Subscriptions” permission, and assign that role to whoever you want to use this feature. The account owner can then enable this functionality under Privacy & Reach settings. This feature is not yet ready for testing (we are working on the missing pieces right now). The work has been funded by [an NGI0 grant through NLNet](https://nlnet.nl/project/Mastodon-for-institutions/), to improve Mastodon's suitability for use by institutions.

Mastodon now supports two additional [Fediverse Enhancement Proposals](https://fediverse.codeberg.page/fep/), [FEP-2c59](https://codeberg.org/fediverse/fep/src/branch/main/fep/2c59/fep-2c59.md) (Discovery of a Webfinger address from an ActivityPub actor {{< github-pr id=38239 authors="ClearlyClaire" >}}) and [FEP-3b86](https://codeberg.org/fediverse/fep/src/branch/main/fep/3b86/fep-3b86.md) (Activity Intents, {{< github-pr id=38120 authors="Gargron" >}} {{< github-pr id=38130 authors="ClearlyClaire" >}}). This will improve interactions with other Fediverse servers.

On the API side, as part of the profile redesign we are introducing [a new dedicated `profile`](https://docs.joinmastodon.org/methods/profile/) endpoint, allowing client apps to access the current profile and update it. App developers are encouraged to add support for this new set of functions - they also allow brand new capabilities, such as setting a text description for profile pictures and header banners.

Lastly, there have been a lot of technical improvements and refactoring in the codebase, including support for Ruby 4.0, the removal of the `oj` gem for JSON handling in the backend, and an upgrade of our web client toolchain to Vite 8, which should make the web assets build step much faster and more memory efficient.
</div>

## Android

We continued working on the profile redesign, and made two releases with minor bug fixes.

## iOS

We shipped version 2026.02 with a number of technical improvements that will help us keep moving forward, and some visible fixes as well:

- You can now manage multiple logged-in accounts from the Settings screen (this has always been accessible by long-pressing the current account avatar, but was not easy to discover).
- Fix for [No audio while playing videos or audio before going full screen](https://github.com/mastodon/mastodon-ios/issues/1505)
- Fix for [Quoted posts that are *long* are not truncated](https://github.com/mastodon/mastodon-ios/issues/1516)
- Fix for [Encoded HTML entities in display names are applied](https://github.com/mastodon/mastodon-ios/issues/1528)

## Community

One of the benefits of building open platforms is that people can build interfaces that work well for different scenarios. We’ve got [a number of client apps](https://joinmastodon.org/apps) listed on our website (and you can add your own, if it is not listed there yet - [send a pull request on our website repository](https://github.com/mastodon/joinmastodon)).

Not everyone uses the latest and greatest devices, and even if you do, maybe you also like small and simple interfaces as well? In these cases, check out [smolfedi](https://codeberg.org/adele/smolfedi) - a lightweight, cross-fedi-platform front end that works with Mastodon as well as with several other Fediverse services.

If you run a Mastodon server, or any kind of Fediverse server - or even if you ran a server, and then closed it down - the Social Web Foundation has a new survey to gather data for a sustainability report. The [Fediverse Sustainability Survey](https://socialwebfoundation.org/2026/04/06/fediverse-sustainability-survey/) is anonymous, and the report will be published on the SWF site in the future.

## Thank you

As [the initiator and author](https://macaw.social/@andypiper) of twenty four editions of Trunk & Tidbits, and on behalf of the Mastodon team, I’d like to say, directly to *you* - Thank You, for all of your support over the past couple of years. Please do “chip in” with a recurring donation to the project - Open Source, not-for-profit software and movements like ours, need to be sustained.

{{< donate >}}
