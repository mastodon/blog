---
title: "Trunk & Tidbits, November 2025"
description: "Our monthly report on engineering progress. 20k commits! Also, team news, and a round-up of some community projects."
date: 2025-12-09
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

Hello, friends! Last month was momentous and exciting: [we announced a new organisation structure](https://blog.joinmastodon.org/2025/11/the-future-is-ours-to-build-together/); [Eugen changed roles](https://blog.joinmastodon.org/2025/11/my-next-chapter-with-mastodon/); and, we also announced a new path for donors to support us in Europe, [thanks to fiscal sponsorship from WE AID](https://blog.joinmastodon.org/2025/11/mastodon-joins-forces-with-we-aid/).

Alongside these changes, we've also started a series of social posts to encourage folks to visit the new donation portal. You may see these posts, with a #SupportMastodon hashtag - feel free to boost them, to spread the word about our mission 🙏🏻

Oh, and also, this happened... 🎉

<blockquote class="mastodon-embed" data-embed-url="https://aus.social/@shlee/115627130637372701/embed" style="background: #FCF8FF; border-radius: 8px; border: 1px solid #C9C4DA; margin: 0; max-width: 540px; min-width: 270px; overflow: hidden; padding: 0;"> <a href="https://aus.social/@shlee/115627130637372701" target="_blank" style="align-items: center; color: #1C1A25; display: flex; flex-direction: column; font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Oxygen, Ubuntu, Cantarell, 'Fira Sans', 'Droid Sans', 'Helvetica Neue', Roboto, sans-serif; font-size: 14px; justify-content: center; letter-spacing: 0.25px; line-height: 20px; padding: 24px; text-decoration: none;"> <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="32" height="32" viewBox="0 0 79 75"><path d="M63 45.3v-20c0-4.1-1-7.3-3.2-9.7-2.1-2.4-5-3.7-8.5-3.7-4.1 0-7.2 1.6-9.3 4.7l-2 3.3-2-3.3c-2-3.1-5.1-4.7-9.2-4.7-3.5 0-6.4 1.3-8.6 3.7-2.1 2.4-3.1 5.6-3.1 9.7v20h8V25.9c0-4.1 1.7-6.2 5.2-6.2 3.8 0 5.8 2.5 5.8 7.4V37.7H44V27.1c0-4.9 1.9-7.4 5.8-7.4 3.5 0 5.2 2.1 5.2 6.2V45.3h8ZM74.7 16.6c.6 6 .1 15.7.1 17.3 0 .5-.1 4.8-.1 5.3-.7 11.5-8 16-15.6 17.5-.1 0-.2 0-.3 0-4.9 1-10 1.2-14.9 1.4-1.2 0-2.4 0-3.6 0-4.8 0-9.7-.6-14.4-1.7-.1 0-.1 0-.1 0s-.1 0-.1 0 0 .1 0 .1 0 0 0 0c.1 1.6.4 3.1 1 4.5.6 1.7 2.9 5.7 11.4 5.7 5 0 9.9-.6 14.8-1.7 0 0 0 0 0 0 .1 0 .1 0 .1 0 0 .1 0 .1 0 .1.1 0 .1 0 .1.1v5.6s0 .1-.1.1c0 0 0 0 0 .1-1.6 1.1-3.7 1.7-5.6 2.3-.8.3-1.6.5-2.4.7-7.5 1.7-15.4 1.3-22.7-1.2-6.8-2.4-13.8-8.2-15.5-15.2-.9-3.8-1.6-7.6-1.9-11.5-.6-5.8-.6-11.7-.8-17.5C3.9 24.5 4 20 4.9 16 6.7 7.9 14.1 2.2 22.3 1c1.4-.2 4.1-1 16.5-1h.1C51.4 0 56.7.8 58.1 1c8.4 1.2 15.5 7.5 16.6 15.6Z" fill="currentColor"/></svg> <div style="color: #787588; margin-top: 16px;">Post by @shlee@aus.social</div> <div style="font-weight: 500;">View on Mastodon</div> </a> </blockquote> <script data-allowed-prefixes="https://aus.social/" async src="https://staticcdn.aus.social/embed.js"></script>

## Events in November, and ahead

Andy was at Decidim Fest in Barcelona, as part of [the panel "Can Decentralization Fix Social Media?"](https://meta.decidim.org/conferences/DecidimFest25/f/1980/meetings/2118). There were some lively conversations about digital sovereignty and technical standards, but the core of the event itself was participatory technology for democracy. The concept that civic institutions should own their own social channels, aligns strongly with Mastodon's own vision and values.

Felix joined the in-person Fediforum track at SFSCon in Bolzano, Italy. It was great to connect with a number of our friends from around the Fediverse.

Also, last month saw the European Digital Sovereignty Summit held in Berlin. Our new Executive Director Felix, and our Chief of Staff, Philip, were able to attend, and  connect with other organisations that share a similar mission to Mastodon.

Looking ahead into early 2026, we will have a stand at FOSDEM. We’re excited to be heading back to Brussels, where we will also be present in the Social Web Devroom.

## Releases

The current stable release of Mastodon is [**4.5.2**](https://github.com/mastodon/mastodon/releases/tag/v4.5.2)

In November, we shipped two fixes for the 4.5 release ([4.5.1](https://github.com/mastodon/mastodon/re>leases/tag/v4.5.1), [4.5.2](https://github.com/mastodon/mastodon/releases/tag/v4.5.2)), and backported equivalent updates for the 4.4 and 4.3 branches: version [4.4.9](https://github.com/mastodon/mastodon/releases/tag/v4.4.9) and version [4.3.15](https://github.com/mastodon/mastodon/releases/tag/v4.3.15).

We recommend that all Mastodon server owners should be running the latest point version for their release branch, and ideally, to upgrade to the newest stable version of Mastodon.

Please pay attention to the [upcoming end-of-life dates](https://github.com/mastodon/mastodon/blob/main/SECURITY.md). The 4.2 branch will no longer receive updates after January 8, 2026, and the 4.3 branch will reach EOL on May 6, 2026.

## Backend and Web

In November 2025 we reviewed and merged 237 Pull Requests (159 with translation and dependency updates removed) from 20 contributors. This was huge. We appreciate the contributions!

<div class="features-list">

- {{< feature-label name="interface" >}} The experimental `theme_tokens` feature flag as well as our legacy styles have been removed from our codebase, and our new theme tokens (based on CSS variables) are now live on mastodon.social and mastodon.online (and any other servers using our nightly builds). If you’re maintaining a third-party theme or a server with custom CSS, now is a good time to ensure your styling tweaks play well with this update. {{< github-pr id=37056 authors="diondiondion" >}}
- {{< feature-label name="new feature" >}} Implementation of “Collections” ([our take on Starter Packs](https://blog.joinmastodon.org/2025/10/our-ideas-about-packs/)) has begun. We are slowly laying foundations, so nothing to see yet, but we are getting there! {{< github-pr id=37049 authors="oneiros" >}} {{< github-pr id=37020 authors="oneiros" >}} {{< github-pr id=37005 authors="oneiros" >}} {{< github-pr id=36977 authors="oneiros" >}}
- {{< feature-label name="interface" >}} Updated the media modal with smoother scrolling experience {{< github-pr id=36673 authors=”ChaosExAnima” >}}{{< github-pr id=36782 authors=”ChaosExAnima” >}}{{< github-pr id=36806 authors=”ChaosExAnima” >}}{{< github-pr id=36916 authors=”ChaosExAnima” >}}{{< github-pr id=37034 authors=”ChaosExAnima” >}}
- {{< feature-label name="interface" >}} Hide domain filtering for local custom emoji in admin {{< github-pr id=37080 authors=”ChaosExAnima” >}}
- {{< feature-label name="interface" >}}  Fixed issues with emoji caching and web worker {{< github-pr id=36808 authors=”ChaosExAnima” >}}{{< github-pr id=36897 authors=”ChaosExAnima” >}}
- {{< feature-label name="interface" >}}  Clean up stray Font Awesome styles {{< github-pr id=36960 authors="dariusk" >}}
- {{< feature-label name="interface" >}} Fix post and keyboard navigation issues {{< github-pr id=37052 authors="diondiondion" >}} {{< github-pr id=37044 authors="diondiondion" >}} {{< github-pr id=36935 authors="diondiondion" >}} {{< github-pr id=36927 authors="ClearlyClaire" >}} {{< github-pr id=36804 authors="diondiondion" >}} {{< github-pr id=36736 authors="diondiondion" >}} {{< github-pr id=36870 authors="diondiondion" >}}{{< github-pr id=36866 authors="diondiondion" >}}
- {{< feature-label name="interface" >}} Fix error page when logging out or boosting on mobile {{< github-pr id=37028 authors="diondiondion" >}}
- {{< feature-label name="admin" >}} Increase HTTP read timeout for expensive S3 batch delete operations {{< github-pr id=37004 authors="ClearlyClaire" >}}{{< github-pr id=36971 authors="ClearlyClaire" >}}{{< github-pr id=36996 authors="ClearlyClaire" >}}
- {{< feature-label name="admin" >}} Increase nginx proxy_read_timeout to avoid long-request failures {{< github-pr id=30599 authors="shleeable" >}}
- {{< feature-label name="admin" >}} Optimize nginx location blocks {{< github-pr id=19644 authors="Izorkin" >}}
- {{< feature-label name="developer" >}} Fix Accept headers when fetching ActivityPub objects to match spec (AP integrity/interoperability) {{< github-pr id=30354 authors="TheOneric" >}}
- {{< feature-label name="api" >}} Add shared context for API authentication {{< github-pr id=36981 authors="oneiros" >}}
- {{< feature-label name="api" >}} Fix `/api/v1/statuses/:id/context` sometimes returning Mastodon-Async-Refresh without result_count {{< github-pr id=36779 authors="ClearlyClaire" >}}
- {{< feature-label name="admin" >}} Fix `tootctl status remove` removing quoted posts and remote quotes of local posts (CLI/API behavior) {{< github-pr id=37009 authors="ClearlyClaire" >}}
- {{< feature-label name="admin" >}} Separate remote thumbnails into cache/ directory {{< github-pr id=36911 authors="shugo" >}}
- Increase number of quote approval job retries {{< github-pr id=36698 authors="ClearlyClaire" >}}
- {{< feature-label name="admin" >}} Add systemd service file for Prometheus exporter {{< github-pr id=35130 authors="ThisIsMissEm" >}}
- {{< feature-label name="admin" >}} Rely on Puma default environment and remove legacy AR connection boot from Puma config {{< github-pr id=36760 authors="mjankowski" >}} {{< github-pr id=36757 authors="mjankowski" >}}

</div>

## Android

We released an update that adds loading all replies, and several smaller updates that improve the stability of the app.

## iOS

We shipped version 2025.08 on December 1st, with better loading and scrolling performance, an all-new audio player, and improvements to video playback. Major work on rewriting/refactoring is starting to pay off as more areas of the app are replaced with new multi-purpose code and old code files are deleted. This version also saw us replace our complex and outdated localization system with modern `.xcstrings` format files, which will be much easier for developers and translators moving forward.

## DevOps

If you have an interest in Helm charts, we would like to hear from you.

<blockquote class="mastodon-embed" data-embed-url="https://mastodon.social/@MastodonEngineering/115604304459044751/embed" style="background: #FCF8FF; border-radius: 8px; border: 1px solid #C9C4DA; margin: 0; max-width: 540px; min-width: 270px; overflow: hidden; padding: 0;"> <a href="https://mastodon.social/@MastodonEngineering/115604304459044751" target="_blank" style="align-items: center; color: #1C1A25; display: flex; flex-direction: column; font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Oxygen, Ubuntu, Cantarell, 'Fira Sans', 'Droid Sans', 'Helvetica Neue', Roboto, sans-serif; font-size: 14px; justify-content: center; letter-spacing: 0.25px; line-height: 20px; padding: 24px; text-decoration: none;"> <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="32" height="32" viewBox="0 0 79 75"><path d="M63 45.3v-20c0-4.1-1-7.3-3.2-9.7-2.1-2.4-5-3.7-8.5-3.7-4.1 0-7.2 1.6-9.3 4.7l-2 3.3-2-3.3c-2-3.1-5.1-4.7-9.2-4.7-3.5 0-6.4 1.3-8.6 3.7-2.1 2.4-3.1 5.6-3.1 9.7v20h8V25.9c0-4.1 1.7-6.2 5.2-6.2 3.8 0 5.8 2.5 5.8 7.4V37.7H44V27.1c0-4.9 1.9-7.4 5.8-7.4 3.5 0 5.2 2.1 5.2 6.2V45.3h8ZM74.7 16.6c.6 6 .1 15.7.1 17.3 0 .5-.1 4.8-.1 5.3-.7 11.5-8 16-15.6 17.5-.1 0-.2 0-.3 0-4.9 1-10 1.2-14.9 1.4-1.2 0-2.4 0-3.6 0-4.8 0-9.7-.6-14.4-1.7-.1 0-.1 0-.1 0s-.1 0-.1 0 0 .1 0 .1 0 0 0 0c.1 1.6.4 3.1 1 4.5.6 1.7 2.9 5.7 11.4 5.7 5 0 9.9-.6 14.8-1.7 0 0 0 0 0 0 .1 0 .1 0 .1 0 0 .1 0 .1 0 .1.1 0 .1 0 .1.1v5.6s0 .1-.1.1c0 0 0 0 0 .1-1.6 1.1-3.7 1.7-5.6 2.3-.8.3-1.6.5-2.4.7-7.5 1.7-15.4 1.3-22.7-1.2-6.8-2.4-13.8-8.2-15.5-15.2-.9-3.8-1.6-7.6-1.9-11.5-.6-5.8-.6-11.7-.8-17.5C3.9 24.5 4 20 4.9 16 6.7 7.9 14.1 2.2 22.3 1c1.4-.2 4.1-1 16.5-1h.1C51.4 0 56.7.8 58.1 1c8.4 1.2 15.5 7.5 16.6 15.6Z" fill="currentColor"/></svg> <div style="color: #787588; margin-top: 16px;">Post by @MastodonEngineering@mastodon.social</div> <div style="font-weight: 500;">View on Mastodon</div> </a> </blockquote> <script data-allowed-prefixes="https://mastodon.social/" async src="https://mastodon.social/embed.js"></script>

## Documentation

Shout-out to [Matt Jankowski](https://github.com/mjankowski) for a huge effort on issue triage & merge support, closing 81 issues in total (most of which merged fixes and updates), backed by 13 contributors in total.

## Community

We've posted a call for proofreaders for translations across our apps and website. See [the discussion posts](https://crowdin.com/project/mastodon/discussions/406) in our Crowdin projects.

- Version 3.2.0 of Pachli for Android [was released just over a week ago](https://mastodon.social/@pachli/115639792255551687); it includes support for Quote Posts, and makes lots of useful search options available.
- Version 7 of Mona for iOS [will be available soon](https://mastodon.social/@MonaApp/115672546858050601).

Reminder that if you're building on the Mastodon API, we'd love to hear about your project.

## Thanks

That's it for another month of behind-the-scenes updates. We're grateful for your support for our mission. Please donate to help us if you are able.

{{< donate >}}
