---
title: "Trunk & Tidbits, December 2024"
description: "The latest engineering updates from the Mastodon team technical updates covering December 2024: including Fediscovery, FOSDEM... and, holidays."
date: 2025-01-10
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
---

A belated "happy 2025!" wish, from the Mastodon team (although, if you've been paying attention, there has been [some important news already](https://blog.joinmastodon.org/2025/01/the-people-should-own-the-town-square/) this month). We're a little later than planned in posting a summary of the work that happened during December, but let's get into it.

Last month was a bit more quiet than usual, because most of the team took time off with friends and family over the annual holiday season.

## In case you missed it

- At the start of December, our Developer Relations lead, [Andy](https://macaw.social/@andypiper), gave the opening keynote at RubyWorld 2024 in Japan (including a video message from [Eugen](https://mastodon.social/@gargron)). The topic was *The Social Web: Decentralization and Building a Better Internet*, and included the important role that Ruby plays in Mastodon's development. You can [read the full script of the talk](https://andypiper.co.uk/2024/12/24/building-a-better-social-web/), and also [access the slides](https://andypiper.org/SocialWeb-RubyWorld2024/).

{{< figure src="rubyworld.jpeg" caption="Talking about Mastodon in Japan" >}}

- During December, the project published the [Annual Report for 2023](https://blog.joinmastodon.org/2024/12/annual-report-2023/).
- We secured a table at [FOSDEM](https://fosdem.org) 2025: [find us at H14](https://fosdem.org/2025/stands/). We will also be part of the [Social Web](https://fosdem.org/2025/schedule/track/social-web/) track (more on this below), and attend the [Social Web After Hours](https://socialwebfoundation.org/2025/01/04/social-web-after-hours-at-fosdem-2025/) meetup.
- We've opened a new role on the team, for a front-end web developer.

<blockquote class="mastodon-embed" data-embed-url="https://mastodon.social/@MastodonEngineering/113782664417082619/embed" style="background: #FCF8FF; border-radius: 8px; border: 1px solid #C9C4DA; margin: 0; max-width: 540px; min-width: 270px; overflow: hidden; padding: 0;"> <a href="https://mastodon.social/@MastodonEngineering/113782664417082619" target="_blank" style="align-items: center; color: #1C1A25; display: flex; flex-direction: column; font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Oxygen, Ubuntu, Cantarell, 'Fira Sans', 'Droid Sans', 'Helvetica Neue', Roboto, sans-serif; font-size: 14px; justify-content: center; letter-spacing: 0.25px; line-height: 20px; padding: 24px; text-decoration: none;"> <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="32" height="32" viewBox="0 0 79 75"><path d="M74.7135 16.6043C73.6199 8.54587 66.5351 2.19527 58.1366 0.964691C56.7196 0.756754 51.351 0 38.9148 0H38.822C26.3824 0 23.7135 0.756754 22.2966 0.964691C14.1319 2.16118 6.67571 7.86752 4.86669 16.0214C3.99657 20.0369 3.90371 24.4888 4.06535 28.5726C4.29578 34.4289 4.34049 40.275 4.877 46.1075C5.24791 49.9817 5.89495 53.8251 6.81328 57.6088C8.53288 64.5968 15.4938 70.4122 22.3138 72.7848C29.6155 75.259 37.468 75.6697 44.9919 73.971C45.8196 73.7801 46.6381 73.5586 47.4475 73.3063C49.2737 72.7302 51.4164 72.086 52.9915 70.9542C53.0131 70.9384 53.0308 70.9178 53.0433 70.8942C53.0558 70.8706 53.0628 70.8445 53.0637 70.8179V65.1661C53.0634 65.1412 53.0574 65.1167 53.0462 65.0944C53.035 65.0721 53.0189 65.0525 52.9992 65.0371C52.9794 65.0218 52.9564 65.011 52.9318 65.0056C52.9073 65.0002 52.8819 65.0003 52.8574 65.0059C48.0369 66.1472 43.0971 66.7193 38.141 66.7103C29.6118 66.7103 27.3178 62.6981 26.6609 61.0278C26.1329 59.5842 25.7976 58.0784 25.6636 56.5486C25.6622 56.5229 25.667 56.4973 25.6775 56.4738C25.688 56.4502 25.7039 56.4295 25.724 56.4132C25.7441 56.397 25.7678 56.3856 25.7931 56.3801C25.8185 56.3746 25.8448 56.3751 25.8699 56.3816C30.6101 57.5151 35.4693 58.0873 40.3455 58.086C41.5183 58.086 42.6876 58.086 43.8604 58.0553C48.7647 57.919 53.9339 57.6701 58.7591 56.7361C58.8794 56.7123 58.9998 56.6918 59.103 56.6611C66.7139 55.2124 73.9569 50.665 74.6929 39.1501C74.7204 38.6967 74.7892 34.4016 74.7892 33.9312C74.7926 32.3325 75.3085 22.5901 74.7135 16.6043ZM62.9996 45.3371H54.9966V25.9069C54.9966 21.8163 53.277 19.7302 49.7793 19.7302C45.9343 19.7302 44.0083 22.1981 44.0083 27.0727V37.7082H36.0534V27.0727C36.0534 22.1981 34.124 19.7302 30.279 19.7302C26.8019 19.7302 25.0651 21.8163 25.0617 25.9069V45.3371H17.0656V25.3172C17.0656 21.2266 18.1191 17.9769 20.2262 15.568C22.3998 13.1648 25.2509 11.9308 28.7898 11.9308C32.8859 11.9308 35.9812 13.492 38.0447 16.6111L40.036 19.9245L42.0308 16.6111C44.0943 13.492 47.1896 11.9308 51.2788 11.9308C54.8143 11.9308 57.6654 13.1648 59.8459 15.568C61.9529 17.9746 63.0065 21.2243 63.0065 25.3172L62.9996 45.3371Z" fill="currentColor"/></svg> <div style="color: #787588; margin-top: 16px;">Post by @MastodonEngineering@mastodon.social</div> <div style="font-weight: 500;">View on Mastodon</div> </a> </blockquote> <script data-allowed-prefixes="https://mastodon.social/" async src="https://mastodon.social/embed.js"></script>

## Releases

No release updates during December: the latest released versions remain [4.3.2](https://github.com/mastodon/mastodon/releases/tag/v4.3.2), [4.2.14](https://github.com/mastodon/mastodon/releases/tag/v4.2.14), and [4.1.21](https://github.com/mastodon/mastodon/releases/tag/v4.1.21).

As a reminder, Mastodon 4.1.x is now deprecated, which means that it will reach End of Life and no longer receive updates on April 8, 2025. If you own an instance running 4.1.x, please update to 4.2.x or 4.3.x soon.

We recommend that owners / administrators of Mastodon instances upgrade to the latest available versions, as appropriate to their environments.

## Code updates

In December, we reviewed and merged 187 Pull Requests (127 with translation and dependency updates removed) from 17 authors. This was a quieter month, as the team was away for the holiday break.

### Backend

<div class="features-list">

- {{< feature-label name="interface" >}}Add an option to use the system scrollbars {{< github-pr id=32117 authors="vmstan" >}}
- {{< feature-label name="new feature" >}} Do not direct unconfirmed users to the settings, but to the “Check your inbox” screen, to reduce confusion {{< github-pr id=33209 authors="Gargron" >}}
- {{< feature-label name="new feature" >}} Adds optional Terms of Service, along with a generator based on a template from our law firm. This is not yet 100% finished, as we plan to update it based on feedback. {{< github-pr id=33055 authors="Gargron" >}}
- {{< feature-label name="new feature" >}} Allow instance to configure their HTTP Referer policy through a system setting. We previously disabled any `Referrer` header on links to external websites to avoid any data leakage, but on instances with many users it makes sense to allow the referer domain, as you can not tie the visit to any user. It will help publishers to see traffic coming from Mastodon. {{< github-pr id=33214 authors="Gargron" >}} {{< github-pr id=33239 authors="renchap" >}}
- {{< feature-label name="new feature" >}} Changed the search feature so the parameters are in the URL. It allows copy and pasting of a search result page. {{< github-pr id=32949 authors="Gargron" >}}
- {{< feature-label name="interface" >}} New cute animation on the feed loading screen. {{< github-pr id=33311 authors="Gargron" >}}
- {{< feature-label name="interface" >}} Simplify the design of the interaction modal to make it less confusing to users and focus on the important part. {{< github-pr id=33278 authors="Gargron" >}}
- {{< feature-label name="performance" >}} Add a configuration option to configure Active Record query log tags, which will insert an SQL comment in every query with the controller and action that generated the query. This is very useful for SQL performance work. {{< github-pr id=33342 authors="renchap" >}}

</div>

### Android

Nothing significant to report for December.

### iOS

Our final release of 2024 brought improvements to the compose window and the timeline.

The app is now less likely to freeze up while you’re typing out a post, and the post compose view won’t disappear (along with all your typing...) until after the post has successfully published.

In the timeline, link previews no longer show large blank spaces for images that never arrive, and compact link previews show all the expected information.

We also fixed a problem where images and avatars could show up with posts they didn’t belong to, and one where GIFs in content-warned or filtered posts were not blurred out. Filters set to hide, really do remove posts from your timeline completely now, and tap targets in the post header are easier to hit (for the author name, action menu button, and show/hide button).

In the coming months, we will continue improving stability and fixing small UI issues while working towards supporting grouped notifications, and updating post layouts to the latest design.

### Documentation and website

We continue to get great community contributions for the [documentation repository](https://github.org/mastodon/documentation), and will work on improving our rate of review here during 2025.

The [code for the main joinmastodon.org website](https://github.org/mastodon/joinmastodon) has a backlog of dependency updates via Renovate, including some with  React components that contain breaking changes. If you would like to help out here, please [take a look](https://github.com/mastodon/joinmastodon/pulls?q=is%3Apr+is%3Aopen+label%3Adependencies) - we would welcome the additional help to get things to a better state!

## Fediscovery Project

We merged our [first draft of the data sharing specification](https://github.com/mastodon/fediverse_auxiliary_service_provider_specifications/pull/36). We also have a working proof of concept provider implementation, along with the Mastodon integration.

Work is now focused on the first real capability, trends (for which we have a [first specification draft](https://github.com/mastodon/fediverse_auxiliary_service_provider_specifications/pull/45)), and the implementation of the reference provider software.

You can learn more about Fediscovery at FOSDEM - check out [David](https://upp2.com/@dave)'s [talk on Saturday afternoon](https://fosdem.org/2025/schedule/event/fosdem-2025-4531-fediscovery-improving-search-and-discovery-on-the-fediverse/).

## Thanks

The past year has been a period of change and growth, inside and outside of the Mastodon project - new team members, new organisations forming in the Fediverse, more people discovering that there is an opportunity to choose better social media. If you read [the news about the organisational change](https://blog.joinmastodon.org/2025/01/the-people-should-own-the-town-square/) over the coming months, you will see that we plan to continue to build Mastodon for everyone.

Thank you for your support, and for your contributions.

{{< donate >}}
