---
title: "Trunk & Tidbits, September 2024"
description: "Engineering updates from the Mastodon team for September 2024. Behind-the-scenes of the 4.3 release."
date: 2024-10-11
draft: true
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

---

# Trunk & Tidbits, September 2024

Hello, friends! It’s time for another installment of our engineering updates series. Here’s what’s been happening in the code this past month.

## Releases

Mastodon 4.3 is here! After 12 months of hard work, several beta versions, and a release candidate for testing, we’re excited to share version 4.3 with you. Check out the full details in our [launch blog post](https://blog.joinmastodon.org/2024/10/mastodon-4.3/).

Additionally, we’ve released patch versions [4.2.13](https://github.com/mastodon/mastodon/releases/tag/v4.2.13) and [4.1.20](https://github.com/mastodon/mastodon/releases/tag/v4.1.20), and we recommend that all instances upgrade to these latest updates.

Please note, the Mastodon 4.1.x series is now deprecated and will reach End of Life on April 8, 2025 (six months after the release of 4.3.0). We recommend updating to 4.2.x or 4.3.x as soon as possible.

## Recent work

This update covers changes since the last edition of Trunk & Tidbits, so there may be some overlap with the 4.3 release notes.

In September, we reviewed and merged 298 pull requests (224 excluding translation and dependency updates) from 14 contributors.

Interested in getting involved? [Start here](https://github.com/mastodon/mastodon/issues/30167) for issues covering both bug fixes and new features for the backend and frontend.

## Web and Backend

Here’s a look at some key updates:

<div class="features-list">

- {{< feature-label name="new feature" >}} You can now allow domains to credit you in link previews using `fediverse:creator`. This setting is available in your account settings under **Profile > Verification** and is federated using a new `attributionDomains` property in the [ActivityPub profile object](https://docs.joinmastodon.org/spec/activitypub/#properties-used-1). Learn more in [the blog post](https://blog.joinmastodon.org/2024/07/highlighting-journalism-on-mastodon/). {{< github-pr id=31819 authors="gargron" >}}
- {{< feature-label name="interface" >}} The media viewer has been improved. The alt badge can now be clicked to read the text, the show/hide button is  more explicit, the styling has been slightly adjusted, and the media tab in profiles has a fresh look. {{< github-pr id=31807 authors="gargron" >}} {{< github-pr id=31852 authors="gargron" >}} {{< github-pr id=32058 authors="gargron" >}} {{< github-pr id=319672 authors="gargron" >}}
- {{< feature-label name="new feature" >}} You can now reorder media in the post composer via drag-and-drop. {{< github-pr id=32093 authors="gargron" >}}
- {{< feature-label name="admin" >}} Redis Sentinel is now fully supported. Thanks to @[gmemstr](https://github.com/gmemstr) for the initial work. {{< github-pr id=26571 authors="gmemstr" >}}. {{< github-pr id=31744 authors="oneiros" >}} {{< github-pr id=31767 authors="oneiros" >}} {{< github-pr id=31768 authors="oneiros" >}}
- {{< feature-label name="interface" >}} If an instance administrator enables image processing using `libvips` (we recommend it!), link preview images can now be up to 8MB, up from the previous 2MB limit. {{< github-pr id=31904 authors="ClearlyClaire" >}}
- {{< feature-label name="interface" >}} Embedded posts now use the same components as the main Web UI, ensuring a consistent design. We've also improved the embed code in case the JavaScript fails to load, and updated the "Get Embed Code" modal. {{< github-pr id=31801 authors="gargron" >}} {{< github-pr id=31766 authors="gargron" >}}
- {{< feature-label name="new feature" >}} Grouped notifications are now enabled for all users. We’ve also stabilized the API for grouped notifications, and encourage client developers to implement support for it. The backend also now supports grouping follow notifications, but this is not yet available in the Web UI. {{< github-pr id=31840 authors="ClearlyClaire" >}} {{< github-pr id=31929 authors="ClearlyClaire" >}} {{< github-pr id=32805 authors="renchap" >}}
- {{< feature-label name="api" >}} We now expose like and boost counts in ActivityPub `Note` objects. This should allow more accurate counts for remote posts in the future. {{< github-pr id=32007 authors="gargron" >}}
- {{< feature-label name="api" >}} The `summary` field in non-`Note` objects is now treated as HTML, supporting the same limited markup as posts. {{< github-pr id=28629 authors="Menrath" >}}
- {{< feature-label name="performance" >}} When receiving many follow notifications (e.g., during account migrations), the web UI previously made excessive API requests, potentially leading to rate-limiting. This has been resolved by batching those requests. {{< github-pr id=32042 authors="gargron" >}}
- {{< feature-label name="interface" >}} When blocking a domain, the confirmation modal now shows how many follows and followers you will lose. There is also a new API endpoint available for app developers to retrieve this information. {{< github-pr id=32032 authors="gargron" >}}
- {{< feature-label name="interface" >}} Translators now have access to the translatable strings for the current stable Mastodon version, which will allow for updates in patch releases. If you'd like to help with translations, you can participate [via Crowdin](https://crowdin.com/project/mastodon). {{< github-pr id=32174 authors="ClearlyClaire" >}}

</div>

Special thanks to @[JoeDupuis](https://github.com/JoeDupuis), for submitting [a PR to migrate to a new Paperclip Adapter for Azure Storage](https://github.com/mastodon/mastodon/pull/32080). This means Azure storage support will not be deprecated, and Mastodon 4.4 will switch to this new library.

With the 4.3 release complete, we’re turning our focus to 4.4, which will include:

- **Quote Posts:** We are resuming work on this long-awaited feature, and it will be our main focus for the rest of the year.
- **Block list improvements:** We are evaluating several improvements, including subscribing to external blocklists and offering an optional default “worst of the worst” blocklist for new Mastodon installs. We’re also exploring ways for operators to approve blocks from external lists.
- **Post Parsing:** We’re experimenting with potentially changing to a new parser for posts, which will be more modular and enable features like basic text formatting.

## Mobile apps

## iOS

We completed the recruitment of our new iOS developer; she will begin in 2 weeks. We received our first application on 25 July, and closed the role just over 9 weeks later - a great turnaround given that our recruitment team was away for 3 weeks during the summer.

Thanks to our incredible community and network, the quality of candidates was the strongest we’ve ever seen!

**Fun fact**: Out of 46 applicants that applied, we interviewed 39% of them - the highest conversion from the application form to a screening interview we’ve had.

## Android

Grouped notifications are now available for users on servers running Mastodon 4.3, alongside a redesign of posts and notifications to match our latest designs.

# Fediscovery

At the September Fediforum event, we introduced the Fediverse Discovery Providers project, also known as [Fediscovery](https://www.fediscovery.org/). If you've been following the Trunk & Tidbits series, you’ll remember we mentioned plans to share more details about this initiative. This project is funded by the European Commission through the NGI Search program.

As part of this work, we released the first specification for “Fediverse Auxiliary Service Providers.” This will enable Fediverse server operators to opt in to additional services that extend the capabilities of their software. You can find all the details [in our repository](https://github.com/mastodon/fediverse_auxiliary_service_provider_specifications), and we encourage your feedback.

We’re currently experimenting with the first building block: allowing a provider to receive data (such as accounts and statuses) from connected instances.

A big shout out to one of our core developers, [David](https://upp2.com/@dave), for leading this effort!

# From the wider community

One of our community members, [@gee@framapiaf.org](https://framapiaf.org/@gee/), recently pointed out that [you can now add your Mastodon profile link to your Steam profile](https://framapiaf.org/@gee/113236663066085795). Meanwhile, our developer advocate [Andy](https://macaw.social/@andypiper) has ssuggested to Ko-fi that they add Mastodon as a social media option, but we’re still waiting for them to implement it. It would be great to see more platforms supporting Fediverse profiles!

# Thank you

We truly appreciate your support and feedback. September was a fantastic month, with two betas and a release candidate for 4.3, and your input has been invaluable in shaping the final release. We hope you enjoy the new features and improvements, and we’re already working on more for the future.

As always, if you want to help us, we appreciate your donations.

{{< donate >}}
