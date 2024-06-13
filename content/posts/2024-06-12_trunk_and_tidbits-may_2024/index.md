---
title: Trunk & Tidbits, May 2024
description: "Updates from the core Mastodon engineering team for May 2024"
date: 2024-06-12
draft: false
categories:
- Trunk and Tidbits
- Engineering
tags:
- engineering
- mastodon
authors:
- renchap
- andy
resources:
- name: hero
  src: hero.png
---

Welcome again to Trunk & Tidbits, our engineering updates blog series. Let us fill you in on what we’ve been focused on during this past month.

# Releases you should know about

During May, we [released](https://github.com/mastodon/mastodon/releases) some important updates for [the 4.2 and 4.1 releases, and nightly builds](https://mastodon.social/@MastodonEngineering/112530662239602222). They contain minor security fixes, as well as bug fixes. Thanks to [the BSI](https://www.bsi.bund.de/DE/Home/home_node.html) for sponsoring a pentest of our codebase, which helped us find and fix some of these issues.

As a reminder, you can [follow @MastodonEngineering](https://mastodon.social/@MastodonEngineering) to keep track of new releases and other important technical updates. If you are a server administrator or you want to pay special attention to these releases, you can also choose to be notified when that account posts an update.

# Code changes and work in progress

We are continuing to drive towards Mastodon 4.3, our next major release.

The changes below are available to users of instances that are running a recent "nightly" version (for example, [mastodon.social](http://mastodon.social) or [mastodon.online](https://mastodon.online)), and will come to others as part of the 4.3 release.

## Web app and Backend

<div class="features-list">

- {{< feature-label name="interface" >}} Allow administrators to configure the instance favicon and logo. {{< github-pr id=30040 authors="FawazFarid" >}}
- {{< feature-label name="performance" >}} Add OpenTelemetry instrumentation. This allows administrators to optionally send traces to their own OpenTelemetry server, to provide monitoring of backend errors and performance with much more detail than logs - useful to identify and fix issues (note that no user data is collected, this is an opt-in diagnostic tool) {{< github-pr id=30130 authors="robbkidd,julianocosta89,renchap" >}}
- {{< feature-label name="api" >}} Implement RFC 8414 for OAuth 2.0 server metadata {{< github-pr id=29191 authors="thisismissem" >}}
- {{< feature-label name="api" >}} Support multiple redirect_uris when creating OAuth 2.0 Applications {{< github-pr id=29192 authors="thisismissem" >}}
- {{< feature-label name="api" >}} Add a batch fetch API to get multiple accounts and statuses at once. {{< github-pr id=27871 authors="noellabo,ClearlyClaire" >}}
- {{< feature-label name="new feature" >}} Add support for `fediverse:creator` OpenGraph tag in source links shared in posts. This new feature will show a link to an article author's own Mastodon account. This is an experimental first step in a series of related features. {{< github-pr id=30398 authors="Gargron" >}}

</div>

## iOS

- Reworked the [account](https://github.com/mastodon/mastodon-ios/pull/1297) and [post](https://github.com/mastodon/mastodon-ios/pull/1297) menus.
- Improved the [content warning display in the timeline](https://github.com/mastodon/mastodon-ios/pull/1300). They no longer use the full post height, which caused them to create a lot of white space.
- Released version 2024.5, with a lot of crash fixes and other stability improvements. ([release details](https://github.com/mastodon/mastodon-ios/releases/tag/2024.5))

The focus for June on the iOS side is on continuing the stability improvements, fixing some issues regarding the timeline posts loading, and adding support for Lists and the new grouped notifications feature coming in 4.3.

## Documentation

We have had a lot of helpful contributions to the [documentation](https://github.com/mastodon/documentation) over the past few months. This month, we particularly want to give shout-outs to [adrian2793](https://github.com/adrian2793), [MahanRahmati](https://github.com/MahanRahmati) and [progval](https://github.com/progval) for helping to keep things updated. We appreciate you!

# Looking ahead

These are the key things we are actively working on for June:

<div class="features-list">

- {{< feature-label name="performance" >}} The migration to `libvips` is nearly finished. This will be opt-in for 4.3, as it will require a modern (8.13+) `libvips` version; but, it will be the default in our pre-built container image.
- {{< feature-label name="new feature" >}} We are still working on completing the grouped notifications feature. The [backend work has been merged](https://github.com/mastodon/mastodon/pull/29889) (but is highly experimental, please wait for this to be stable before implementing it in your client app) and the [frontend part is in progress](https://github.com/mastodon/mastodon/pull/30440).

</div>

Those are the 2 remaining major features planned for 4.3 that need to be completed. Once they are merged, we will focus on releasing the first 4.3 beta.

Additionally, [work is still in progress](https://github.com/mastodon/mastodon/issues?q=label%3Atypescript+is%3Aclosed+-label%3Adependencies) to convert our frontend to modern React / Redux and TypeScript. For example, [this PR](https://github.com/mastodon/mastodon/pull/30270) defined a modern and 100% typed way of defining Redux actions. If you know React, Redux and TypeScript, you can help! [Here](https://github.com/mastodon/mastodon/issues/26556) is a good place to start.

# Other news

We are excited to report that we filled our new core developer position! Our new team member will start in early July, and we will have more to share nearer to the time.

We have fully re-written and clarified the [contribution guide](https://github.com/mastodon/.github/blob/main/CONTRIBUTING.md), across the whole project. It now includes explanations about how the project works, and where we are most able to accept contributions (not just code contributions). We also have [an issue to visit on the main repository](https://github.com/mastodon/mastodon/issues/30167) with pointers to help you get started. We hope this will make it easier for new contributors to get involved.

Finally, a *huge* thank you to our triage team for keeping the issue tracker clean and organized. We appreciate all the work you do to help us stay on top of things.

# Thank you for using Mastodon

That is it for May 2024. Spread the word to others, and get them to join us all in building better social media!

{{< donate >}}
