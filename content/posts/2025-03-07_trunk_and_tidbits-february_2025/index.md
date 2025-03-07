---
title: "Trunk & Tidbits, February 2025"
description: "Development updates from the Mastodon team. Code changes and updates made during February 2025."
date: 2025-03-07
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

Hello again. Thanks for checking out our latest engineering updates. We hope that our monthly updates help you follow what we've been working on, and where we're headed. This is a slightly lighter entry in the series, although there is plenty happening.

## Beyond the code

Just after the engineering update was published last month, we also shared [our thinking and plans around Quote Posts](https://blog.joinmastodon.org/2025/02/bringing-quote-posts-to-mastodon/). Since then, there has been [active discussion on SocialHub](https://socialhub.activitypub.rocks/t/pre-fep-quote-posts-quote-policies-and-quote-controls/5031) (a forum for ActivityPub and Fediverse developers) about the proposal. We appreciate the feedback.

On the events and outreach side, it was a busy month: two of the team were at RightsCon in Taipei where they had the opportunity to talk to a range of digital rights activists and experts; and our CTO, Renaud, took part in a number of interviews with media organisations in France.

Now let's turn to the code updates!

## Releases

We released Mastodon [4.3.4](https://github.com/mastodon/mastodon/releases/tag/v4.3.4), [4.2.17](https://github.com/mastodon/mastodon/releases/tag/v4.2.17) and [4.1.23](https://github.com/mastodon/mastodon/releases/tag/v4.1.23).

Important: Mastodon 4.2.17 drops support for Ruby 3.0 (which is no longer supported upstream). If you are running Mastodon 4.2 and Ruby 3.0, you can update as far as Mastodon 4.2.16 which contains the latest security fixes, but please note that this version has a known vulnerability if you are using SAML authentication with Mastodon. If you are running Mastodon 4.2 with Ruby 3.0, we strongly encourage you to update to Ruby 3.2, and then use Mastodon 4.2.17 or above.

If you are running Mastodon 4.1, note that it only supports Ruby 3.0 (which is no longer supported upstream) and is subject to the above SAML security issue.

> Countdown to the end of life for Mastodon 4.1.x - this version will no longer receive updates (including for security issues) after **April 8, 2025**. If you are running an instance on 4.1.x, you must update to 4.2.x or 4.3.x within the next ~30 days, in order to remain on a supported version of the software.
{.warning}

Related: administrators of instances that are currently on [our servers list](https://joinmastodon.org/servers) but that are not running supported versions of the software will shortly be asked to upgrade. We are working on updates to the Mastodon Server Covenant that will include a requirement to stay up-to-date on software levels, and hope to streamline the process for being added to the list. We are unfortunately backlogged on updating the list in general due to various process changes; apologies if this applies to your submission. Thanks for your patience, and look out for more on this in the coming weeks.

## Backend and web

In February, we reviewed and merged 119 Pull Requests (61 with translation and dependency updates removed) from 8 authors.

## Mobile

No major news on the mobile apps in the past month. On **Android**, there were some minor UI tweaks and bug fixes. On **iOS**, grouped notifications are coming very soon, along with a few additional bug fixes. There's a lot of work happening, but less to discuss in terms of changes during February.

## Fediscovery

As a short reminder: Fediscovery is [a project](https://www.fediscovery.org/) we're working on independent of Mastodon itself, to explore decentralized search and discovery for the Fediverse as a whole. It defines _Fediverse Discovery Providers_ as one type of potential _Fediverse Auxiliary Service Provider_ (FASP) that can offer additional functionality to any Fediverse service.

- We published a first draft of the [`account_search`](https://github.com/mastodon/fediverse_auxiliary_service_provider_specifications/blob/main/discovery/account_search/v0.1/account_search.md) capability specification
- We opened up the GitHub repository of our reference implementation, [fediscoverer](https://github.com/mastodon/fediscoverer). It is still (very) early days, but all of the different draft specifications have been implemented in some way. One of the next steps in the coming months is getting this production-ready.
- We published draft PRs for Mastodon itself to integrate with a discovery FASP (<https://github.com/mastodon/mastodon/pull/34031>, <https://github.com/mastodon/mastodon/pull/34032>, <https://github.com/mastodon/mastodon/pull/34033>)

## Community contributions

We're always on the lookout for interesting uses of the Mastodon API. Here are some that we spotted this month.

- Monkedo is no-code automation software designed for a range of users (technical and non-technical) users.<https://monkedo.com/integrations/app/mastodon>
- Congratulations (and thank you!) to [@halcy](https://icosahedron.website/@halcy) for releasing the major new version 2.0.x of [Mastodon.py](https://github.com/halcy/Mastodon.py). This powerhouse of a Python library is now fully updated with all the current core Mastodon API methods, and modernised for current Python versions. `pip install` it today, and let us know what you build!
  - Relatedly, with the ability to run Python in a web browser... there's [a blog post about using this to build web apps](https://halcy.de/blog/2025/02/18/mastodonpy-in-the-browser/), and [here is a Mastodon API Explorer](https://kal-tsit.halcy.de/client_side_mastopy/api_explorer.htm). Pretty nifty!
- Do you use Sphinx for a website? well, you can use [`sphinx-fediverse`](https://github.com/LivInTheLookingGlass/sphinx-fediverse?tab=readme-ov-file) to use Mastodon as a comments system.

Please let us know if you're building something interesting on top of Mastodon, and we can help other people hear about your projects. Got something we should know about? Don't forget to use the #MastodonAPI hashtag when you share it.

## Thanks for supporting us

We're grateful for every user of the platform, and every donation that we receive helps to sustain the project.

As an independent project with a small team, Mastodon continues to depend on your support. We believe in authentic human connection, and we're creating a social platform for everyone. Every contribution helps to keep Mastodon moving forward. Thank you.

{{< donate >}}
