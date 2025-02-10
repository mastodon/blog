---
title: "Trunk & Tidbits, January 2025"
description: "News and updates from the Mastodon developers. Technical changes from January 2025, and what the core team did at FOSDEM."
date: 2025-02-07
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

# Trunk & Tidbits, January 2025

Welcome back to our technical blog series: Trunk & Tidbits. This is where we share updates on what the development team has been working on, and what we have planned for the future. This month we have a lot to tell you about, including a brief recap of our time at FOSDEM (which technically happened at the very start of February rather than during January), and some exciting new features and improvements that we have been working on.

## General news

First of all, we want to again share the news that [we are working on restructuring the project](https://blog.joinmastodon.org/2025/01/the-people-should-own-the-town-square/), forming a new non-profit entity to be based in Europe to ensure good governance and sustainability. There was a flurry of activity outside of the technical side in January, as we talked to different organisations about this news. We do not expect this to have a big impact on the day-to-day development of Mastodon, but we hope that it will help to ensure the long-term future of the project.

We had a great time at FOSDEM! Five members of the team - Eugen, Renaud, Felix, David, and Andy - spent time meeting members of the community at our stand, as well as explaining what Mastodon and the Fediverse are to newcomers. Andy helped to run the first ever [Social Web Devroom](https://fosdem.org/2025/schedule/track/social-web/) (a FOSDEM Devroom is roughly equivalent to a talk track at a conference), where David presented the Fediscovery project; [more on that, below](#fediscovery-project).

<blockquote class="mastodon-embed" data-embed-url="https://mastodon.social/@_elena/113933826503119732/embed" style="background: #FCF8FF; border-radius: 8px; border: 1px solid #C9C4DA; margin: 0; max-width: 540px; min-width: 270px; overflow: hidden; padding: 0;"> <a href="https://mastodon.social/@_elena/113933826503119732" target="_blank" style="align-items: center; color: #1C1A25; display: flex; flex-direction: column; font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Oxygen, Ubuntu, Cantarell, 'Fira Sans', 'Droid Sans', 'Helvetica Neue', Roboto, sans-serif; font-size: 14px; justify-content: center; letter-spacing: 0.25px; line-height: 20px; padding: 24px; text-decoration: none;"> <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="32" height="32" viewBox="0 0 79 75"><path d="M74.7135 16.6043C73.6199 8.54587 66.5351 2.19527 58.1366 0.964691C56.7196 0.756754 51.351 0 38.9148 0H38.822C26.3824 0 23.7135 0.756754 22.2966 0.964691C14.1319 2.16118 6.67571 7.86752 4.86669 16.0214C3.99657 20.0369 3.90371 24.4888 4.06535 28.5726C4.29578 34.4289 4.34049 40.275 4.877 46.1075C5.24791 49.9817 5.89495 53.8251 6.81328 57.6088C8.53288 64.5968 15.4938 70.4122 22.3138 72.7848C29.6155 75.259 37.468 75.6697 44.9919 73.971C45.8196 73.7801 46.6381 73.5586 47.4475 73.3063C49.2737 72.7302 51.4164 72.086 52.9915 70.9542C53.0131 70.9384 53.0308 70.9178 53.0433 70.8942C53.0558 70.8706 53.0628 70.8445 53.0637 70.8179V65.1661C53.0634 65.1412 53.0574 65.1167 53.0462 65.0944C53.035 65.0721 53.0189 65.0525 52.9992 65.0371C52.9794 65.0218 52.9564 65.011 52.9318 65.0056C52.9073 65.0002 52.8819 65.0003 52.8574 65.0059C48.0369 66.1472 43.0971 66.7193 38.141 66.7103C29.6118 66.7103 27.3178 62.6981 26.6609 61.0278C26.1329 59.5842 25.7976 58.0784 25.6636 56.5486C25.6622 56.5229 25.667 56.4973 25.6775 56.4738C25.688 56.4502 25.7039 56.4295 25.724 56.4132C25.7441 56.397 25.7678 56.3856 25.7931 56.3801C25.8185 56.3746 25.8448 56.3751 25.8699 56.3816C30.6101 57.5151 35.4693 58.0873 40.3455 58.086C41.5183 58.086 42.6876 58.086 43.8604 58.0553C48.7647 57.919 53.9339 57.6701 58.7591 56.7361C58.8794 56.7123 58.9998 56.6918 59.103 56.6611C66.7139 55.2124 73.9569 50.665 74.6929 39.1501C74.7204 38.6967 74.7892 34.4016 74.7892 33.9312C74.7926 32.3325 75.3085 22.5901 74.7135 16.6043ZM62.9996 45.3371H54.9966V25.9069C54.9966 21.8163 53.277 19.7302 49.7793 19.7302C45.9343 19.7302 44.0083 22.1981 44.0083 27.0727V37.7082H36.0534V27.0727C36.0534 22.1981 34.124 19.7302 30.279 19.7302C26.8019 19.7302 25.0651 21.8163 25.0617 25.9069V45.3371H17.0656V25.3172C17.0656 21.2266 18.1191 17.9769 20.2262 15.568C22.3998 13.1648 25.2509 11.9308 28.7898 11.9308C32.8859 11.9308 35.9812 13.492 38.0447 16.6111L40.036 19.9245L42.0308 16.6111C44.0943 13.492 47.1896 11.9308 51.2788 11.9308C54.8143 11.9308 57.6654 13.1648 59.8459 15.568C61.9529 17.9746 63.0065 21.2243 63.0065 25.3172L62.9996 45.3371Z" fill="currentColor"/></svg> <div style="color: #787588; margin-top: 16px;">Post by @_elena@mastodon.social</div> <div style="font-weight: 500;">View on Mastodon</div> </a> </blockquote> <script data-allowed-prefixes="https://mastodon.social/" async src="https://mastodon.social/embed.js"></script>

_Thank you to the wonderful [Elena Rossini](https://mastodon.social/@_elena) for taking photos of the team. Check out [her newsletter](https://blog.elenarossini.com/tag/the-future-is-federated/), where she writes about the federated future._

There were also two additional Social Web sessions: a "birds of a feather" set of short talks during FOSDEM itself, and an "After Hours" social event, where Andy delivered a talk entitled _Fediverse for Freedom_. The buzz around the Fediverse at FOSDEM this year was incredible, and the sessions were all very well attended. There is so much great work happening in the space!

During January, we received a large number of applications for our front-end developer role. We've now paused taking new applications, while we work through the candidates that we have. We hope to be able to share news on this soon.

## Releases

We released Mastodon [4.3.3](https://github.com/mastodon/mastodon/releases/tag/v4.3.3), [4.2.15](https://github.com/mastodon/mastodon/releases/tag/v4.2.15) and [4.1.22](https://github.com/mastodon/mastodon/releases/tag/v4.1.22). These versions contain a few bug fixes, as well as a fix for a medium severity security issue. We recommend that all instances update to the latest version as soon as possible.

> Countdown to the end of life for Mastodon 4.1.x - this version will no longer receive updates after **April 8, 2025**. If you are running an instance on 4.1.x, you must update to 4.2.x or 4.3.x within the next ~60 days, in order to remain on a supported version of the software.
{.warning}

## Code updates

### Backend

In January, we reviewed and merged 250 Pull Requests (170 with translation and dependency updates removed) from 23 authors.

<div class="features-list">

- {{< feature-label name="interface" >}} Display language names in the native language (in addition to the current language) in the post language picker. {{< github-pr id=33402 authors="c960657" >}}
- {{< feature-label name="new feature" >}} Add support for the final specification of WebPush. We previously only supported an outdated draft of the protocol. {{< github-pr id=33528 authors="p1gp1g" >}}
- {{< feature-label name="api" >}} Add an API to update the allowed attribution domains for an account. {{< github-pr id=33270 authors="c960657" >}}
- {{< feature-label name="interface" >}} Add an indicator in the web interface when the selected language for the post does not match the language guessed from the post content. {{< github-pr id=33042 authors="Gargron" >}} {{< github-pr id=33700 authors="ClearlyClaire" >}}
- {{< feature-label name="interface">}} Redesign the edit media modal. {{< github-pr id=33516 authors="Gargron" >}} {{< github-pr id=33702 authors="Gargron" >}}
- {{< feature-label name="interface">}} Add an alert with posting a message that includes an image without alt text. This can be disabled in the preferences. {{< github-pr id=33760 authors="Gargron" >}}
- {{< feature-label name="admin">}} Add an optional metrics exporter in Prometheus format. This allows an administrator to get useful process-level metrics from Puma, Sidekiq and Ruby (memory/GC). {{< github-pr id=33734 authors="renchap" >}}

</div>

The team also made significant progress on the specification for Quote Posts. It needs a few minor changes, but we expect to publish it for comment in February, and start implementation right away. The current plan is to publish Mastodon 4.4 with support for displaying Quote Posts, and then add authoring in Mastodon 4.5.

We also plan to support receiving and validating ActivityPub requests using RFC9421 signatures in Mastodon 4.4, and sign them using those signatures in Mastodon 4.5 (see the W3C SWICG [ActivityPub and HTTP Signatures report](https://swicg.github.io/activitypub-http-signature/) for more context).

### Android

We released 2.9.4 on Jan 6, with the following changes:

<div class="features-list">

- {{< feature-label name="interface" >}} Fixed custom emojis not loading under some configurations.
- {{< feature-label name="admin" >}} The app now sends `org.joinmastodon.android as referrer to websites opened from the app.
- Fixed some minor crashes.

</div>

We also added the ability to accept or reject follow requests in the Android app, based on a [contributed pull request](https://github.com/mastodon/mastodon-android/pull/965) (thank you [@underroot](https://mastodon.social/@underoot)) but with much of it rewritten. This feature will be available in the next release.

### iOS

There was no new release in January, but we are hard at work on bringing grouped notifications to our iOS app, along with some smaller bug fixes.

## Fediscovery Project

David presented our Fediscovery project at FOSDEM 2025. We were delighted to finally discuss the project with other implementers and interested parties. The talk gave an overview of the project itself, and an update about the current status. You can find links to the [slides and video recordings of the talk](https://www.fediscovery.org/#fediscovery--fosdem-2025) on the Fediscovery website.

We are currently working on the reference implementation for our first search and discovery provider. We rely a lot on Ruby (and Ruby on Rails) for Mastodon already, so it made sense to use Ruby on Rails here as well. The provider is not yet available, but we extracted two Rails plugins from it to help others build their own providers. One of these handles all of the low-level general interfacing with Fediverse servers, while the other includes building blocks to implement our “Data Sharing” specification, that is at the heart of the Fediscovery project. We have also built a small demo provider. All of this can be found [in the `fasp_ruby` project](https://github.com/mastodon/fasp_ruby), a repository we released to coincide with the FOSDEM talk.

## Community

It was another exciting month watching what folks have been building on top of Mastodon. Here are a few highlights:

- This was missed last month, but in December the Linux GTK app [Tuba](https://tuba.geopjr.dev/) got [a big update](https://floss.social/@Tuba/113657758389560981) featuring account suggestions for new accounts, scheduled & draft posts, and hashtag extraction from posts (along with a bunch of nice GNOME-related UI enhancements).
- Multiple client libraries for the Mastodon API saw new releases in January; if you are a JavaScript developer check out [Masto.js](https://neet.github.io/masto.js/) and [Megaladon](https://h3poteto.github.io/megalodon/).
- [Crystal for Mastodon](https://crystal.social) was released, allowing you to view beautiful slideshows of images from Mastodon posts on your Apple TV. We need a new category for third party apps on our website!
- Another text console / CLI / TUI app came along. If you live in the terminal, take a look at [Fediboat](https://github.com/Lo-Riot/fediboat).
- [Posty](https://codeberg.org/oliphant/posty) allows you to self-host an archive of your Mastodon posts. It's a simple static site generator that uses your Mastodon archive.

Don't forget to let us know if you're building something interesting on top of Mastodon. We love to hear about it!

## Appreciation

We would like to thank everyone who has contributed to Mastodon in the past month, and to everyone that uses the platform every day. Your support is what keeps us going, and we are grateful for it.

We're an independent open source project that *depends on your support*. We're not taking venture capital. We believe that social media should be for everyone. If you can, please consider making a donation to help us continue to build Mastodon.

{{< donate >}}
