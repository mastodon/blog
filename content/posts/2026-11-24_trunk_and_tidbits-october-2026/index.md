---
title: "Trunk & Tidbits, October 2026"
description: "The latest updates on engineering work from the Mastodon team"
date: 2026-11-24
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
---

Welcome to the 31st edition of Trunks & Tidbits!

## Releases

Since the last Trunk and Tidbits issue, we released multiple patch versions to fix bugs and security issues. At the time of writing, the latest available stable versions are Mastodon [4.7.6](https://github.com/mastodon/mastodon/releases/tag/v4.7.6), [4.6.12](https://github.com/mastodon/mastodon/releases/tag/v4.6.12), [4.5.22](https://github.com/mastodon/mastodon/releases/tag/v4.5.22) and [4.4.29](https://github.com/mastodon/mastodon/releases/tag/v4.4.29). Those contain fixes for a critical security issue and administrators are strongly advised to update, if not done already.

This is also a final reminder that Mastodon 4.4 will stop being maintained next month, and that its latest patch version still contains dependencies with security issues that we can not fix. All administrators of servers running Mastodon 4.4 should update to the latest supported release as soon as possible.

In more positive news, we also released the first and [second Mastodon 5.0 beta](https://github.com/mastodon/mastodon/releases/tag/v5.0.0-beta.2) versions. The release candidate is expected this week, with the final release next week. We received a lot of feedback from those beta versions and most of it has now been addressed, and we are working on the final small fixes and polish before the release.

## Backend & Web

In October 2026 we reviewed and merged 407 Pull Requests (297 with translation and dependency updates removed) from 17 contributors.

As last month, a huge chunk of the work in October went into the new Mastodon 5 user interface changes. Our two front-end developers have been very busy implementing the latest designs addressing the user feedback we received and squashing the bugs that creeped in. A notable change is the introduction of a new Theme Color setting to let users (and admins) change the main color of the Mastodon interface.

- Added a new setting to hide your own posts and boosts from your timeline {{< github-pr id=40813 authors="arte7" >}} {{< github-pr id=40867 authors="arte7" >}}
- Added a new Server Health page to the admin interface. It displays recommendations about your server configuration {{< github-pr id=41282 authors="jhbabon" >}}
- Mastodon now support a new sign up flow for third party clients and apps. It goes through the existing oAuth flow. The existing API-based sign up flow is now deprecated and will be removed in a future version. {{< github-pr id=40659 authors="Clearlyclaire" >}}
- A new parameter for [`/api/v1/accounts/verify_credentials`](https://docs.joinmastodon.org/methods/accounts/#verify_credentials) allows clients to know the exact status of the logged account (functional, confirmed…). This is mostly useful to use alongside the new sign up flow, so the app can detect when the account is usable. {{< github-pr id=40803 authors="Clearlyclaire" >}}
- Account that have not been active for 90 days will now need to click on a link they receive by email to sign in. Moderators have the ability to skip this step for an account, for example if they do not receive the email. {{< github-pr id=40745 authors="jhbabon" >}}
- The account confirmation page no longer tries to redirect you to your app. This was confusing to users when they confirmed their email on a different device than the one they registered from as the app might not be installed on it {{< github-pr id=41066 authors="ClearlyClaire" >}}
- A new server setting has been added to not immediately send account confirmations emails after a user registers on a server configured with registration approval, but only do it after a moderator approved the account. This might make for a poorer user experience, as they will receive their account confirmation email at a random time (for them) and need to click on it within the next 7 days. {{< github-pr id=40690 authors="ClearlyClaire" >}}
- Added two new server settings to indicate that your server can appear in server directories and in default server recommendations. This is not used yet but will become a requirement for the official Mastodon Server Directory in the future. {{< github-pr id=40750 authors="arte7" >}}
- The first iteration of Blocklist Synchronisation has been merged. This is under a feature flag to give us time to test it out and improve it over the next few months and expected to be marked as stable in Mastodon 5.1 {{< github-pr id=40136 authors="ClearlyClaire" >}}
- Warning Presets have been renamed into Moderation Canned Responses and now support restricting them to a specific moderation action, so for example you can have a set of specific canned responses for Suspensions only. {{< github-pr id=41045 authors="arte7" >}} {{< github-pr id=41092 authors="arte7" >}}
- Mastodon will now verify incoming ML-DSA-44 HTTP Message Signatures {{< github-pr id=41119 authors="ClearlyClaire" >}}
- Mastodon 5.0 will only support Ruby 4.0, the latest major version of Ruby. We are reducing the range of supported versions to reduce the maintenance burden and avoid issues where old but still supported Mastodon versions can not get security patches because they support very old Ruby versions.

## Android & iOS

The Android app had two updates to fix minor bugs. A larger project of updating the mobile interface to match the new Mastodon interface principles is in progress and should be released in December.

For iOS, a new release is now available with a major navigational overhaul which is more aligned with Apple Interface guidelines and should work much better on all devices. Work is in progress to implement creating and editing collections.

## Thanks

Thanks for reading! If you’re excited about what we’re working on, would you consider supporting us with a small, recurring donation?

{{< donate >}}
