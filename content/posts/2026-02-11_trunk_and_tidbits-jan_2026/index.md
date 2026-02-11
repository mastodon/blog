---
title: "Trunk & Tidbits, January 2026"
description: "Updates from the Mastodon product and engineering team."
date: 2026-02-11
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

## Intro

Welcome to Mastodon's monthly product and engineering update, looking back at January 2026.

## Events

We've just published [a recap of our visit to FOSDEM 2026](https://blog.joinmastodon.org/2026/02/fosdem-2026-recap/). We've had feedback that some event updates were a bit buried in the Trunk & Tidbits posts; and, that the results and outcomes of our team presence at events could be made more clear. We've heard you, and we'll be posting these sorts of update in standalone format in the future.

## Releases

In the past month, we released the following point versions - these contain bugfixes, and a fix for a security issue, so we strongly recommend that server operators update to a current version.

- [4.5.6](https://github.com/mastodon/mastodon/releases/tag/v4.5.6)
- [4.4.13](https://github.com/mastodon/mastodon/releases/tag/v4.4.13)
- [4.3.19](https://github.com/mastodon/mastodon/releases/tag/v4.3.19)

See the associated release notes at the links above for instructions on upgrading, and remember that these processes sometimes require asset recompilation.

> Note that all versions of Mastodon from the 4.2.x release branch and below are now out of support, and support for version 4.3.x will end on **May 6, 2026**. Read more about [end-of-life dates](https://github.com/mastodon/mastodon/blob/main/SECURITY.md).
{.warning}

## Backend and Web

In January 2026 we reviewed and merged 242 Pull Requests (157 with translation and dependency updates removed) from 16 contributors, 11 of which were from the broader community. Thank you!

Progress towards the next major release of Mastodon continues. Here's what the team has been working on.

<div class="features-list">

- {{< feature-label name="ui" >}} We’ve been creating new accessible & redesigned form components for use in the editing interfaces for Collections and Profiles
- {{< feature-label name="ui" >}} Work on the editing UI for the upcoming Collections feature is in progress, so is work on federation of Collections
- {{< feature-label name="ui" >}} Continued work on the new Profile design: expect some visible changes in the coming weeks, for users running nightly releases
- {{< feature-label name="performance" >}} Fix a performance issue with the status batch delete SQL query {{< github-pr id=37469 authors="ClearlyClaire" >}}
- {{< feature-label name="interface" >}} Add new `data-color-scheme` and `data-contract` attributes on `<html>` to let themes easily get the correct color scheme and contrast settings for the user {{< github-pr id=37477 authors="diondiondion" >}}
- {{< feature-label name="backend" >}} Shortened caching duration for pending quote post approvals, which should help to reduce the number of times a quote is displayed as pending {{< github-pr id=37570 authors="ClearlyClaire" >}}
- {{< feature-label name="backend" >}} Removed support for ImageMagick, which has been deprecated for the last 2 versions. Mastodon now requires `libvips` {{< github-pr id=37488 authors="mjankowski" >}}
- {{< feature-label name="backend" >}} Added storage of image descriptions for profile pictures and headers when they come from federation. This does not have any impact in the UI, nor can they be set by Mastodon users for now. {{< github-pr id=37634 authors="ClearlyClaire" >}}

</div>

## iOS

We started off the year releasing 2026.01, with a few important improvements:

<div>

- Avoid triggering post actions accidentally while scrolling.
- Display Lists in alphabetical order, as on the web.
- Improved hashtag statistics layout for longer translations.
- Avoid publishing the same post twice by accidentally double tapping the publish button.

</div>

Most of our iOS work lately has been on the new profile view, which is not yet in released builds.

## Community

We spotted some terminal-based Mastodon apps! Have you tried [tooi](https://codeberg.org/ihabunek/tooi) (below)? There's also [mastui](https://mastui.app/), which is an alternative.

<blockquote class="mastodon-embed" data-embed-url="https://mastodon.social/@ihabunek/115819612141229264/embed" style="background: #FCF8FF; border-radius: 8px; border: 1px solid #C9C4DA; margin: 0; max-width: 540px; min-width: 270px; overflow: hidden; padding: 0;"> <a href="https://mastodon.social/@ihabunek/115819612141229264" target="_blank" style="align-items: center; color: #1C1A25; display: flex; flex-direction: column; font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Oxygen, Ubuntu, Cantarell, 'Fira Sans', 'Droid Sans', 'Helvetica Neue', Roboto, sans-serif; font-size: 14px; justify-content: center; letter-spacing: 0.25px; line-height: 20px; padding: 24px; text-decoration: none;"> <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="32" height="32" viewBox="0 0 79 75"><path d="M63 45.3v-20c0-4.1-1-7.3-3.2-9.7-2.1-2.4-5-3.7-8.5-3.7-4.1 0-7.2 1.6-9.3 4.7l-2 3.3-2-3.3c-2-3.1-5.1-4.7-9.2-4.7-3.5 0-6.4 1.3-8.6 3.7-2.1 2.4-3.1 5.6-3.1 9.7v20h8V25.9c0-4.1 1.7-6.2 5.2-6.2 3.8 0 5.8 2.5 5.8 7.4V37.7H44V27.1c0-4.9 1.9-7.4 5.8-7.4 3.5 0 5.2 2.1 5.2 6.2V45.3h8ZM74.7 16.6c.6 6 .1 15.7.1 17.3 0 .5-.1 4.8-.1 5.3-.7 11.5-8 16-15.6 17.5-.1 0-.2 0-.3 0-4.9 1-10 1.2-14.9 1.4-1.2 0-2.4 0-3.6 0-4.8 0-9.7-.6-14.4-1.7-.1 0-.1 0-.1 0s-.1 0-.1 0 0 .1 0 .1 0 0 0 0c.1 1.6.4 3.1 1 4.5.6 1.7 2.9 5.7 11.4 5.7 5 0 9.9-.6 14.8-1.7 0 0 0 0 0 0 .1 0 .1 0 .1 0 0 .1 0 .1 0 .1.1 0 .1 0 .1.1v5.6s0 .1-.1.1c0 0 0 0 0 .1-1.6 1.1-3.7 1.7-5.6 2.3-.8.3-1.6.5-2.4.7-7.5 1.7-15.4 1.3-22.7-1.2-6.8-2.4-13.8-8.2-15.5-15.2-.9-3.8-1.6-7.6-1.9-11.5-.6-5.8-.6-11.7-.8-17.5C3.9 24.5 4 20 4.9 16 6.7 7.9 14.1 2.2 22.3 1c1.4-.2 4.1-1 16.5-1h.1C51.4 0 56.7.8 58.1 1c8.4 1.2 15.5 7.5 16.6 15.6Z" fill="currentColor"/></svg> <div style="color: #787588; margin-top: 16px;">Post by @ihabunek@mastodon.social</div> <div style="font-weight: 500;">View on Mastodon</div> </a> </blockquote> <script data-allowed-prefixes="https://mastodon.social/" async src="https://mastodon.social/embed.js"></script>

If you're looking to make yourself more discoverable, then [this tool](https://mastodon-account-checker.playground.54gradsoftware.de/) may help you to find ways to do that, by completing more information in your profile.

If you're building with the Mastodon API, please let us know so we can share with the community!

## Thank you, and until next time

We believe that it is always important for us to humbly acknowledge the community that supports our work. Thank you - your contributions mean a lot to all of us on the team, and to our mission. We really appreciate your donations.

{{< donate >}}
