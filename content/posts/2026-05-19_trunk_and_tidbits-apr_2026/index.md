---
title: "Trunk & Tidbits, April 2026"
description: "The latest updates on engineering work from the Mastodon team"
date: 2026-05-19
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

Welcome to the 25th edition of Trunks & Tidbits!

## Product & Community Updates

Looking back at April:

- We made an exciting announcement about how we’re improving the server admin experience thanks to [generous funding from the Sovereign Tech Agency](https://blog.joinmastodon.org/2026/04/sovereign-tech-agency-funding/). The funding will enable us to implement **key features and improvements for server admins,** detailed in our blog post. We expect to deliver some of the features this year.
- Speaking of, one of the vital improvements we’re implementing thanks to STA funding is blocklist synchronisation. Some of the advanced synchronisation features are made possible by [Emelia Smith](https://brandedcode.com/)’s work on on the [FediMod FIRES](https://fires.fedimod.org/) protocol. Thank you for your incredible work, Emelia! We’re proud to be a part of the fediverse developer community, and glad to have you in it.
- Some of our team-members attended FediForum, and our Head of Design Imani Joy [presented a demo](https://spectra.video/w/9PimpSkZXiCneBXrrEvrRx?start=12s) of recent UX changes to Mastodon including how we’ve updated [Profiles](https://blog.joinmastodon.org/2026/03/a-redesign-for-profiles/) our new feature [Collections](https://blog.joinmastodon.org/2026/04/designing-collections/). If you didn’t make it to the April ‘26 edition of FediForum, visit their website. Recordings of all the demos, and notes from the unconference sessions, are [now live](https://fediforum.org/2026-04/).

<iframe title="FediForum Demo: Mastodon's Recent UX Changes" width="560" height="315" src="https://spectra.video/videos/embed/9PimpSkZXiCneBXrrEvrRx?start=12s" allow="fullscreen" sandbox="allow-same-origin allow-scripts allow-popups allow-forms" style="border: 0px;"></iframe>

Visit our [Product Roadmap](https://joinmastodon.org/roadmap) to see what our team is working on next — we’ll be updating it with some 5.0 features before the next Trunk & Tidbits. 👀

## Releases

Last month, we released updates for the Mastodon software across two active branches and one branch which has now passed its end-of-support date. While the update to the 4.3.x branch provides important security updates, it is still recommend to update to a later version as this will likely be a final patch for the 4.3.x branch.

- [4.5.9](https://github.com/mastodon/mastodon/releases/tag/v4.5.9)
- [4.4.16](https://github.com/mastodon/mastodon/releases/tag/v4.4.16)
- [4.3.22](https://github.com/mastodon/mastodon/releases/tag/v4.3.22)

> Support for the 4.3.x branch has ended as of May 6th 2026. We recommend updating your Mastodon software to a 4.4.x version or later immediately.
{.warning}

Follow [Mastodon Engineering](https://mastodon.social/@MastodonEngineering) for the latest updates.

## Backend & Web

In April 2026 we reviewed and merged 231 Pull Requests (163 with translation and dependency updates removed), from 10 contributors.

<div class="features-list">
Most of the work this month has been focused on finishing up the two big features we are releasing in Mastodon 4.6. The first one is the profile redesign, which you can [read more about here](https://blog.joinmastodon.org/2026/03/a-redesign-for-profiles/) and has been launched on [mastodon.social](http://mastodon.social) last month.

The second key feature is Collections. We spent a lot of time finishing up the backend and web frontend code for those, and they are ready for testing. This feature has been enabled on [mastodon.social](http://mastodon.social) last week to allow us to get some user feedback. We are now working on polishing the interface and writing the documentation so app developers can implement support for it.

We also added a way for apps to display notifications for types they do not have explicit support for. We encourage app developers to support those fallback attributes so notifications about new features (like Collections) are displayed in their apps once they roll out. {{< github-pr id=38832 authors="ClearlyClaire" >}}

We also implemented a new feature to allow visitors to receive an account’s posts by email. Server administrators need to enable this on their server, then grant the permission to a role, then the account needs to opt into it. {{< github-pr id=38487 authors="Gargron" >}} {{< github-pr id=38741 authors="Gargron" >}}

The new server setup process is changing slightly. When the domain for a new server includes our wordmark “Mastodon,” the software nudges the server’s creator to consult the Mastodon organisation’s [Trademark Policy](https://joinmastodon.org/trademark). Our policy requires that you seek written permission from Mastodon before using our trademark (name and logo) in your server name or branding.

Finally, we spent some time refactoring old code (in particular around emoji support in the web interface) and updating dependencies to keep Mastodon secure and fast.

</div>

## Android & iOS

During April, our Apps developers worked on implementing redesigned Profiles. See our [iOS](https://github.com/mastodon/mastodon-ios/releases) and [Android](https://github.com/mastodon/mastodon-android/releases) repositories for the latest releases.

In May, the team will be focused on bringing Collections to our official apps. Stay tuned!

## Thanks

Thanks for reading! If you’re excited about what we’re working on, would you consider supporting us with a small, recurring donation?

{{< donate >}}
