---
title: "Trunk & Tidbits, July 2025"
description: "Project updates from the Mastodon engineering team. This month: quote posts, Starter Packs, and more."
date: 2025-08-07
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

It’s time for another recap of project progress, particularly from the engineering side of the team. Welcome!

## News

In July, we [announced that we’d be running a donation campaign in our mobile apps](https://blog.joinmastodon.org/2025/07/a-nudge-to-fund-our-future/), visible to people on the `mastodon.social` and `mastodon.online` servers. This is an exploratory step, as we look at different ways to grow our funding. In the future we plan to extend this to the web, and (longer term) we have a plan to make this banner feature available to the operators of other Mastodon servers as well.

## Releases

At the start of August (just before publishing this update) we released version [4.4.3](https://github.com/mastodon/mastodon/releases/tag/v4.4.3), along with [4.3.11](https://github.com/mastodon/mastodon/releases/tag/v4.3.11), and [4.2.24](https://github.com/mastodon/mastodon/releases/tag/v4.2.24). These are the _current, recommended releases_.

These releases contain bugfixes, a fix for a moderate severity rate limit issue, and a fix for a security issue if you use SAML. In version 4.4.3 there are also changes to how quote posts are handled, as we continue to work towards full support for quote posts in the next main release (see below for more on this).

During July we also released version 4.4.2, 4.3.10, and 4.2.23.
You can find the full list of changes for these by checking their entries in the [release notes](https://github.com/mastodon/mastodon/releases/).

We recommend that all server operators upgrade to the latest point release for the main version they are running, to stay up-to-date with fixes and to provide people with the best available experience. We announce new version releases via our [@MastodonEngineering account](https://mastodon.social/@MastodonEngineering).

## Backend and Web

This month, we made a lot of progress on quote posts. We finalised designs for quote post authoring and settings, considering ways to provide both creative freedom and privacy with this new feature. Backend work on quote posts authoring is underway.

We are also working on adding Starter Packs to Mastodon, with early interface and ActivityPub exploration done in the last few weeks. We are planning to publish a feature explainer detailing our decisions (for example, how to let users control if they want to be included in a Starter Pack) in the coming weeks, and will share a [Fediverse Enhancement Proposal](https://codeberg.org/fediverse/fep) (FEP) so that they can be implemented in other ActivityPub-based software.

Other technical work is moving along. We are refactoring our Emoji code, and beginning a rework of the way we write stylesheets, to make them more tuned for performance, and more future-proof.

<div class="features-list">

- {{< feature-label name="interface" >}} Work is in progress to replace Mastodon’s emoji handling code to improve performance and avoid loading a lot of unused emoji data {{< github-pr id=35229 authors="ChaosExAnima" >}} {{< github-pr id=35282 authors="ChaosExAnima" >}} {{< github-pr id=35253 authors="ChaosExAnima" >}} {{< github-pr id=35424 authors="ChaosExAnima" >}} {{< github-pr id=35505 authors="ChaosExAnima" >}} {{< github-pr id=35568 authors="ChaosExAnima" >}}
- {{< feature-label name="interface" >}} Rewrote the keyboard shortcut code to remove an unmaintained dependency {{< github-pr id=35425 authors="diondiondion" >}}
- {{< feature-label name="interface" >}} Added the ability for the web interface to automatically fetch replies from other servers and show a button if there are new ones {{< github-pr id=35210 authors="Gargron" >}} {{< github-pr id=35575 authors="Gargron" >}}
- {{< feature-label name="interface" >}} Started to add quote posts authoring (behind a feature flag). This is API-only for now, and still being worked on. {{< github-pr id=35355 authors="ClearlyClaire" >}} {{< github-pr id=35578 authors="ClearlyClaire" >}}
- {{< feature-label name="interface" >}} Updated the design of quote posts to align with our latest design {{< github-pr id=35584 authors="Gargron" >}}
- {{< feature-label name="backend" >}} Updated trending statuses criteria to account for quote posts (a post with a quote can only trend if the quoted post is allowed for trending) {{< github-pr id=35507 authors="ClearlyClaire" >}}
- {{< feature-label name="admin" >}} Added the ability to block specific usernames from registering. This handles homoglyphs, partial matches, and either require approval, or deny registration entirely. {{< github-pr id=35407 authors="Gargron" >}} {{< github-pr id=35614 authors="ClearlyClaire" >}}

</div>

## Android

Fixed some minor bugs and started working on displaying quote posts.

## iOS

Finished work on 2025.04, including:

- Navigations should no longer look broken (fixes [#1448](https://github.com/mastodon/mastodon-ios/issues/1448))
- Editing a post now gives the same progress indication as publishing a post for the first time (filling up the button)
- Efficiency improvements to avoid the “too many requests” error (fixes [#1449](https://github.com/mastodon/mastodon-ios/issues/1449))

Behind-the-scenes, there is work in progress to completely rework the way posts and timelines are handled.

## Community

We spotted a couple of interesting new app releases this month.

- toot, a text-based UI (TUI) for Mastodon, [hit version 0.49.0](https://github.com/ihabunek/toot/releases/tag/0.49.0)
- Tuba, a GNOME / GTK client (Linux), had [what OMG Ubuntu called “a huge update”](https://www.omgubuntu.co.uk/2025/08/tuba-0-10-mastodon-client-linux-new-features)

As a reminder: if you’re building something cool, fun, unusual, or useful on Mastodon or using the Mastodon API, let us know, so we can share it here!

## Wrapping up

That’s all for another month of progress. We’re very grateful to everyone supporting us, as we work to make the social web a better place to be. Thank you.

{{< donate >}}
