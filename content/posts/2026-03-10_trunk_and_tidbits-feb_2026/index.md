---
title: "Trunk & Tidbits, February 2026"
description: "Product and engineering updates from the Mastodon team."
date: 2026-03-10
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

Welcome to our monthly engineering update. The team is continuing to work on the next major version of Mastodon (4.6), as well as maintaining the current stable releases.

Before we dive in to our regular review of code changes and updates from the past month, there are a number of items that we wanted to highlight this time around.

- We are hiring! We’re looking for two Ruby on Rails developers to work with us on the backend of the software. More information [here](https://mastodon.social/@MastodonEngineering/116103936616513460).
- We're pleased to be able to share that Mastodon GmbH has formally joined the World Wide Web Consortium (W3C), the multi-stakeholder community organisation that develops standards like ActivityPub. We look forward to collaborating in the evolution of the open social web through the Social Web Working Group. Several members of the team [took part in the first meeting of the group](https://github.com/w3c/socialwg/blob/main/meetings/2026/2026-03-06-WG-kickoff.md) at the end of last week, and we are excited to be part of this important work.
- Authenticity and connection are core elements of Mastodon's mission. The project has now added an [AI Contribution Policy](https://github.com/mastodon/.github/blob/main/AI_POLICY.md) to the set of documents that define how we work. Many other open source projects have been adopting similar policies over the past year or so. We are grateful for the work of projects such as CloudNativePG and Ghostty (as well as others), from whom we've borrowed in creating our guidance.
- In case you missed it: back in November 2025, we adopted the Contributor Covenant, version 3.0, as our [community Code of Conduct](https://github.com/mastodon/.github/blob/main/CODE_OF_CONDUCT.md). We want to remind everyone that participation in the Mastodon project and community spaces is subject to the Code of Conduct - it is a crucial part of how we keep our community safe and welcoming for everyone.

## Releases

At the end of February, we shipped point updates for each of the current release streams: [4.5.7](https://github.com/mastodon/mastodon/releases/tag/v4.5.7), [4.4.14](https://github.com/mastodon/mastodon/releases/tag/v4.4.14), [4.3.20](https://github.com/mastodon/mastodon/releases/tag/v4.3.20). Note that versions 4.5.7 and 4.4.14 specifically include security fixes.

As usual, we strongly recommend that server operators upgrade to the most recent release of the version they are running. This helps keep your systems up-to-date with bug fixes, and provides a more consistent experience for people who use Mastodon.

Also, we need to remind you that version 4.3.x will not be supported after 06 May 2026 - please move to a more current version before then.

Beyond the Mastodon server code, we also shipped something new - [a Share button that anyone can include in their websites](https://blog.joinmastodon.org/2026/03/a-new-share-button/). There have been a number of other ways to implement sharing before now - thank you to everyone who has been promoting the Fediverse! We’ve regularly been asked to create something like this, and that is why we built it. The [code is open source](https://github.com/mastodon/share), so feel free to have a look at how it works.

## Backend and Web

In February 2026 we reviewed and merged 230 Pull Requests (166 with translation and dependency updates removed) from 14 contributors.

Version 4.6 will include a couple of changes that we plan to share separate blog posts about in the coming weeks. The first of these is Collections; we [previously wrote about](https://blog.joinmastodon.org/2025/10/our-ideas-about-packs/) this new way to curate follower recommendations, and this is well into implementation. Another update is an overhaul and redesign of the profile page, and we'll have more to explain about the design choices here soon. As a result, a lot of the work this month is clustered in these two areas.

<div class="features-list">

- {{< feature-label name="new feature" >}} More work on implementing Collections. On the backend, work is in progress to implement federation, based on our [`FeaturedCollection` proposal.](https://github.com/mastodon/featured_collections) Editing, viewing, reporting, and sharing Collections is being implemented on the frontend. We will publish a blog post showing our progress and what to expect for this feature later this month.
- {{< feature-label name="interface" >}} Continued work on the profile redesign, releasing the experimental account view as work on in-app profile editing continues.
- {{< feature-label name="new feature" >}} Accessibility improvements: New "Jump to content/navigation" links, improved keyboard focus indicators in posts with images, more accessible alt-text popup.
- {{< feature-label name="ui" >}} Merged the final step for our theming rework. Now there is a single default "Mastodon" theme, with user settings for contrast and colour scheme. Mastodon theme authors can update their themes to support these options. {{< github-pr id=37612 authors="ClearlyClaire" >}}
- {{< feature-label name="ui" >}} Custom emojis are now properly purged when a domain is suspended. Admins can run `tootctl emoji purge --suspended-only` to clean up the emojis from servers that were already suspended. {{< github-pr id=37808 authors="ClearlyClaire" >}} {{< github-pr id=37808 authors="ClearlyClaire" >}}
- {{< feature-label name="security" >}} Added a setting on roles to require all users with the role to enable two factor authentication (2FA). We have a few improvements to implement to this feature before we recommend enabling it, but in future this will be strongly recommended for admins and moderators. {{< github-pr id=37701 authors="ClearlyClaire" >}}

</div>

## Android

Most of the Android work during February was related to the upcoming profile redesign.

## iOS

A small update should be arriving soon (as version 2026.02), but most effort continues to go into the profile redesign implementation.

## Community

A bumper month for news and projects from around the community!

The new share button can be used in different ways. [Coywolf](https://coywolf.social/@coywolf) explains [how to customise it for a WordPress site](https://coywolf.com/news/social-media/mastodon-now-has-an-official-share-button-for-sites/), and [Roy Scholten](https://yoroy.eu/@roy) has a similar post [for Hugo and static site generators](https://blog.royscholten.nl/nl/posts/2026/share-on-mastodon/) (as a side note, we've been using the button on our blog for a while now - you can see it in the top right corner of this page!).

There are a couple of other interesting blog posts from around the community. [Terence Eden](https://mastodon.social/@edent) writes about [adding Log In With Mastodon to Auth0](https://shkspr.mobi/blog/2026/03/adding-log-in-with-mastodon-to-auth0/). *Multi-time Trunk & Tidbits featured contributor* [Stefan Bohacek](https://stefanbohacek.online/@stefan) has a [new tool for sending Fediverse Invitations](https://stefanbohacek.com/project/fediverse-invitation/) to friends, where you can include recommended apps and other information of your choice.

On the code projects side of things, we spotted [an RSS-to-Mastodon app](https://github.com/xsukax/xsukax-RSS-to-Mastodon) that can help with cross-posting, if that is something you might find useful.

There were also a few client apps released over the past month that may be of interest:

- [Elefeed](https://elefeed.app/) is an experimental web client that allows you to view your feed with and without followed hashtags, etc.
- [CrowFi](https://www.notion.so/Apple-Feedbacks-Filed-2106208ac91b80d38e0ef056921cd7af?pvs=21) is a recently-released iOS client app;
- [Oliphaunt](https://apps.apple.com/us/app/oliphaunt-for-mastodon/id6745527185?mt=12) is a macOS client app;
- [MastoBlaster](https://www.mastoblaster.com/) is an iOS app currently on TestFlight, that works with Mastodon servers and with other Fediverse servers, specifically [snac](https://codeberg.org/grunfink/snac2).

It is exciting to see so many interesting new things happening around the ecosystem!

## We appreciate you

As always, we want to take the time to say Thank You for following our project, and for being a part of the community. We're building a more human internet together, and we value your support. See you back here next month!

{{< donate >}}
