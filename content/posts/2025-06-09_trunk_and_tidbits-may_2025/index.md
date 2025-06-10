---
title: "Trunk & Tidbits, May 2025"
description: "News and updates from the Mastodon developers. Mastodon 4.4 beta is out, and we had a busy month with events."
date: 2025-06-10
section: Trunk and Tidbits
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
draft: false
---

Hello again! Thank you for reading our monthly engineering team update, we’re happy to share what we’ve been working on.

## Events

We had a busy May, with several events that we participated in, or organized. The biggest one was re:publica in Berlin, where several members of the Mastodon team were able to meet with the community, talk about the project, and share our plans for the future.

In particular, the team hosted a community meetup at the Wikimedia offices, to discuss the latest developments in Mastodon. At re:publica itself, [Philip](https://mastodon.social/@philipkristians) was on stage [for a conversation about Mastodon](https://www.youtube.com/watch?v=URmr3HcQgFI) as open infrastructure, and [Felix](https://mastodon.social/@mellifluousbox) joined [a discussion about large scale adoption](https://www.youtube.com/watch?v=6ceMDPJBqHE) of independent social media platforms.

There is a range of very active conversations about the Fediverse happening right now, particularly (but not exclusively) in Europe, and we are grateful to be taking part in them.

## Releases

At the very beginning of May (just before last month's blog post) we released Mastodon versions [4.3.8](https://github.com/mastodon/mastodon/releases/tag/v4.3.8) and [4.2.21](https://github.com/mastodon/mastodon/releases/tag/v4.2.21) - hopefully you'll already have updated to one of these stable versions.

We've now released the [first beta](https://github.com/mastodon/mastodon/releases/tag/v4.4.0-beta.1) of Mastodon 4.4.0.

<blockquote class="mastodon-embed" data-embed-url="https://mastodon.social/@MastodonEngineering/114625074809479231/embed" style="background: #FCF8FF; border-radius: 8px; border: 1px solid #C9C4DA; margin: 0; max-width: 540px; min-width: 270px; overflow: hidden; padding: 0;"> <a href="https://mastodon.social/@MastodonEngineering/114625074809479231" target="_blank" style="align-items: center; color: #1C1A25; display: flex; flex-direction: column; font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Oxygen, Ubuntu, Cantarell, 'Fira Sans', 'Droid Sans', 'Helvetica Neue', Roboto, sans-serif; font-size: 14px; justify-content: center; letter-spacing: 0.25px; line-height: 20px; padding: 24px; text-decoration: none;"> <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="32" height="32" viewBox="0 0 79 75"><path d="M63 45.3v-20c0-4.1-1-7.3-3.2-9.7-2.1-2.4-5-3.7-8.5-3.7-4.1 0-7.2 1.6-9.3 4.7l-2 3.3-2-3.3c-2-3.1-5.1-4.7-9.2-4.7-3.5 0-6.4 1.3-8.6 3.7-2.1 2.4-3.1 5.6-3.1 9.7v20h8V25.9c0-4.1 1.7-6.2 5.2-6.2 3.8 0 5.8 2.5 5.8 7.4V37.7H44V27.1c0-4.9 1.9-7.4 5.8-7.4 3.5 0 5.2 2.1 5.2 6.2V45.3h8ZM74.7 16.6c.6 6 .1 15.7.1 17.3 0 .5-.1 4.8-.1 5.3-.7 11.5-8 16-15.6 17.5-.1 0-.2 0-.3 0-4.9 1-10 1.2-14.9 1.4-1.2 0-2.4 0-3.6 0-4.8 0-9.7-.6-14.4-1.7-.1 0-.1 0-.1 0s-.1 0-.1 0 0 .1 0 .1 0 0 0 0c.1 1.6.4 3.1 1 4.5.6 1.7 2.9 5.7 11.4 5.7 5 0 9.9-.6 14.8-1.7 0 0 0 0 0 0 .1 0 .1 0 .1 0 0 .1 0 .1 0 .1.1 0 .1 0 .1.1v5.6s0 .1-.1.1c0 0 0 0 0 .1-1.6 1.1-3.7 1.7-5.6 2.3-.8.3-1.6.5-2.4.7-7.5 1.7-15.4 1.3-22.7-1.2-6.8-2.4-13.8-8.2-15.5-15.2-.9-3.8-1.6-7.6-1.9-11.5-.6-5.8-.6-11.7-.8-17.5C3.9 24.5 4 20 4.9 16 6.7 7.9 14.1 2.2 22.3 1c1.4-.2 4.1-1 16.5-1h.1C51.4 0 56.7.8 58.1 1c8.4 1.2 15.5 7.5 16.6 15.6Z" fill="currentColor"/></svg> <div style="color: #787588; margin-top: 16px;">Post by @MastodonEngineering@mastodon.social</div> <div style="font-weight: 500;">View on Mastodon</div> </a> </blockquote> <script data-allowed-prefixes="https://mastodon.social/" async src="https://mastodon.social/embed.js"></script>

The plan is to release a second beta in the next few days, with a release candidate to follow. We hope to make the final release by the end of June.

There are a lot of great new features in this release, so take a look at the [release notes](https://github.com/mastodon/mastodon/releases/tag/v4.4.0-beta.1). We will be sharing more details for developers and for users in the coming weeks as we get towards the final release.

## Backend and web

In May, we reviewed and merged 180 Pull Requests (114 with translation and dependency updates removed) from 17 contributors.

<div class="features-list">

- {{< feature-label name="interface" >}} New pinned / featured content design for user profiles, with carousel. {{< github-pr id=34858 authors="ChaosExAnima" >}} {{< github-pr id=34754 authors="ChaosExAnima" >}}
- {{< feature-label name="interface" >}} New Followers you know widget, and relationship info on hover cards. {{< github-pr id=34652 authors="diondiondion" >}} {{< github-pr id=34792 authors="diondiondion" >}} {{< github-pr id=34769 authors="diondiondion" >}}
- {{< feature-label name="admin" >}} Server owners can now set whether a Referer header should be set {{< github-pr id=34731 authors="ChaosExAnima" >}}
- Multiple compatibility updates ahead of 4.4 beta release:
  - {{< feature-label name="devops" >}} Bumped minimum Redis version to 6.2 {{< github-pr id=30413 authors="ClearlyClaire" >}} Also dropped Redis namespace support. See [the migration details](https://github.com/mastodon/redis_namespace_migration) if your instance is using Redis namespaces. {{< github-pr id=34581 authors="ClearlyClaire" >}} {{< github-pr id=34664 authors="ClearlyClaire" >}} {{< github-pr id=34665 authors="ClearlyClaire" >}}
  - {{< feature-label name="devops" >}} Update to Sidekiq 7 {{< github-pr id=34745 authors="mjankowski" >}}
  - {{< feature-label name="devops" >}} Drop support for PostgreSQL 12 {{< github-pr id=34744 authors="ClearlyClaire" >}}
  - {{< feature-label name="devops" >}} Update rack to version 3 {{< github-pr id=34816 authors="mjankowski" >}}
  - {{< feature-label name="devops" >}} Change minimum Node.js version to Node 20 {{< github-pr id=34390 authors="renchap" >}}
  - {{< feature-label name="devops" >}} Libvips is now the default image processing library. ImageMagick support is deprecated,and will be removed in a future version. {{< github-pr id=34741 authors="ClearlyClaire" >}}
- {{< feature-label name="interface" >}} Major migration from Webpack to Vite {{< github-pr id=34469 authors="ChaosExAnima" >}} {{< github-pr id=34454 authors="ChaosExAnima" >}} {{< github-pr id=34450 authors="ChaosExAnima" >}}
- {{< feature-label name="new-feature" >}} Add initial support for sharing data with Fediverse Auxiliary Service Providers (i.e. [Fediscovery](https://fediscovery.org)) {{< github-pr id=34415 authors="oneiros" >}}
- {{< feature-label name="admin" >}} Legal feature updates as described in a [recent blog post](https://blog.joinmastodon.org/2025/05/legal-features-updates/) - ability to set Terms of Service, create rule translations, and set age requirements. {{< github-pr id=34527 authors="ClearlyClaire" >}} {{< github-pr id=34494 authors="ClearlyClaire" >}}
- {{< feature-label name="backend" >}} Support for displaying incoming quote posts based on [FEP-044f](https://codeberg.org/fediverse/fep/src/branch/main/fep/044f/fep-044f.md) {{< github-pr id=34584 authors="ClearlyClaire" >}} {{< github-pr id=34773 authors="ClearlyClaire" >}} {{< github-pr id=34772 authors="ClearlyClaire" >}} {{< github-pr id=34771 authors="ClearlyClaire" >}} {{< github-pr id=34738 authors="diondiondion" >}}
- {{< feature-label name="interface" >}} Refreshed audio player design for the web UI {{< github-pr id=34520 authors="Gargron" >}}

</div>

## Android

No significant updates shipped in May.

## iOS

On iOS, work continues on overhauling the basic post layout (currently only available to beta testers).  A few smaller fixes will likely be coming soon.

## Fediscovery

We implemented the `follow_recommendation` capability in our discovery provider reference implementation, [fediscoverer](https://github.com/mastodon/fediscoverer).

In May, work began to get fediscoverer closer to production readiness. There is still a way to go, but we are making steady progress.

## Community news

We are always happy to see the community building on Mastodon, and this month we have a few interesting tidbits to share:

- [Tom Casavant](https://tomkahe.com/@tom) shared a [post about using Meshtastic to post to Mastodon](https://tomcasavant.com/i-posted-to-mastodon-1-mile-away-from-an-internet-connection/) from over a mile away!
- [Oliphaunt](https://www.reddit.com/r/Mastodon/comments/1kikrlx/oliphaunt_a_native_macos_app_for_mastodon_now_on/) is a native macOS app for Mastodon that can be tried via TestFlight.
- [Splinter](https://splinter.hastily.cc/) is a tool for Mastodon threads - it turns long articles into threads and posts them for you automatically.
- [Beej](https://mastodon.sdf.org/@beejjorgensen) shared a [blog post with a method for using Mastodon to add comments to a static blog](https://beej.us/blog/data/mastodon-comments/).
- [Masto2RSS](https://tzovar.as/masto2rss/) creates RSS feeds containing links shared on Mastodon timelines.

## Thank you - and, we need your help

If you appreciate the work we do, and want to support the project, consider becoming a patron or making a donation. We are a non-profit organisation, and we rely on your contributions. The team is grateful for your support.

{{< donate >}}
