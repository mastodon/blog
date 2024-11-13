---
title: "Trunk & Tidbits, October 2024"
description: "Engineering updates from the Mastodon core team, October 2024. Initial updates post-4.3, a new team member, and lots of community news."
date: 2024-11-13
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

# Trunk & Tidbits, October 2024

Welcome back to our monthly engineering series. In October, our long-anticipated plushies got out into the wild (mostly in Europe, for now), and we were busy tuning the code and planning what's next.

This is also a larger entry in our blog series, for updates from around our community.

## New arrivals

We are really excited to welcome [Shannon Hughes](https://mastodon.social/@whattherestimefor) to our core development team, to work on our iOS experience. Big thanks to our friends Marcus and Nathan for looking after the app over the past couple of years, as well. Shannon has already started to get to work on improvements, so look out for more in the coming months!

<blockquote class="mastodon-embed" data-embed-url="https://mastodon.social/@MastodonEngineering/113385884140450090/embed" style="background: #FCF8FF; border-radius: 8px; border: 1px solid #C9C4DA; margin: 0; max-width: 540px; min-width: 270px; overflow: hidden; padding: 0;"> <a href="https://mastodon.social/@MastodonEngineering/113385884140450090" target="_blank" style="align-items: center; color: #1C1A25; display: flex; flex-direction: column; font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Oxygen, Ubuntu, Cantarell, 'Fira Sans', 'Droid Sans', 'Helvetica Neue', Roboto, sans-serif; font-size: 14px; justify-content: center; letter-spacing: 0.25px; line-height: 20px; padding: 24px; text-decoration: none;"> <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="32" height="32" viewBox="0 0 79 75"><path d="M74.7135 16.6043C73.6199 8.54587 66.5351 2.19527 58.1366 0.964691C56.7196 0.756754 51.351 0 38.9148 0H38.822C26.3824 0 23.7135 0.756754 22.2966 0.964691C14.1319 2.16118 6.67571 7.86752 4.86669 16.0214C3.99657 20.0369 3.90371 24.4888 4.06535 28.5726C4.29578 34.4289 4.34049 40.275 4.877 46.1075C5.24791 49.9817 5.89495 53.8251 6.81328 57.6088C8.53288 64.5968 15.4938 70.4122 22.3138 72.7848C29.6155 75.259 37.468 75.6697 44.9919 73.971C45.8196 73.7801 46.6381 73.5586 47.4475 73.3063C49.2737 72.7302 51.4164 72.086 52.9915 70.9542C53.0131 70.9384 53.0308 70.9178 53.0433 70.8942C53.0558 70.8706 53.0628 70.8445 53.0637 70.8179V65.1661C53.0634 65.1412 53.0574 65.1167 53.0462 65.0944C53.035 65.0721 53.0189 65.0525 52.9992 65.0371C52.9794 65.0218 52.9564 65.011 52.9318 65.0056C52.9073 65.0002 52.8819 65.0003 52.8574 65.0059C48.0369 66.1472 43.0971 66.7193 38.141 66.7103C29.6118 66.7103 27.3178 62.6981 26.6609 61.0278C26.1329 59.5842 25.7976 58.0784 25.6636 56.5486C25.6622 56.5229 25.667 56.4973 25.6775 56.4738C25.688 56.4502 25.7039 56.4295 25.724 56.4132C25.7441 56.397 25.7678 56.3856 25.7931 56.3801C25.8185 56.3746 25.8448 56.3751 25.8699 56.3816C30.6101 57.5151 35.4693 58.0873 40.3455 58.086C41.5183 58.086 42.6876 58.086 43.8604 58.0553C48.7647 57.919 53.9339 57.6701 58.7591 56.7361C58.8794 56.7123 58.9998 56.6918 59.103 56.6611C66.7139 55.2124 73.9569 50.665 74.6929 39.1501C74.7204 38.6967 74.7892 34.4016 74.7892 33.9312C74.7926 32.3325 75.3085 22.5901 74.7135 16.6043ZM62.9996 45.3371H54.9966V25.9069C54.9966 21.8163 53.277 19.7302 49.7793 19.7302C45.9343 19.7302 44.0083 22.1981 44.0083 27.0727V37.7082H36.0534V27.0727C36.0534 22.1981 34.124 19.7302 30.279 19.7302C26.8019 19.7302 25.0651 21.8163 25.0617 25.9069V45.3371H17.0656V25.3172C17.0656 21.2266 18.1191 17.9769 20.2262 15.568C22.3998 13.1648 25.2509 11.9308 28.7898 11.9308C32.8859 11.9308 35.9812 13.492 38.0447 16.6111L40.036 19.9245L42.0308 16.6111C44.0943 13.492 47.1896 11.9308 51.2788 11.9308C54.8143 11.9308 57.6654 13.1648 59.8459 15.568C61.9529 17.9746 63.0065 21.2243 63.0065 25.3172L62.9996 45.3371Z" fill="currentColor"/></svg> <div style="color: #787588; margin-top: 16px;">Post by @MastodonEngineering@mastodon.social</div> <div style="font-weight: 500;">View on Mastodon</div> </a> </blockquote> <script data-allowed-prefixes="https://mastodon.social/" async src="https://mastodon.social/embed.js"></script>

Shannon was not the only newcomer! We aim to keep this blog series focused on the code, but we were excited that the initial batch of [#Plushtodon](https://mastodon.social/tags/Plushtodon) took the world by storm in October - check out [the hashtag](https://mastodon.social/tags/Plushtodon), for photos of happy Mastodons finding their new homes! We're working to help them reach the UK and the US, as well; stay tuned to [our Mastodon posts](https://mastodon.social/@Mastodon) and [merch store](https://shop.joinmastodon.org/) for more on this.

{{< figure src="wild_plush.jpeg" caption="A wild #Plushtodon appeared!" >}}

## Releases

We released [version 4.3.1](https://github.com/mastodon/mastodon/releases/tag/v4.3.1), which mostly features a number of smaller fixes and polish to the main 4.3.0 release. Instance administrators are encouraged to upgrade (if you have not already done so).

## Recent work

In October, we reviewed and merged 234 Pull Requests (167 with translation and dependency updates subtracted from the total) from 24 authors.

We really appreciate the contributions and support. If you would like to get involved, we have some [issues tagged "help welcome"](https://github.com/mastodon/mastodon/labels/help%20welcome), including [this one for Rails/backend](https://github.com/mastodon/mastodon/issues/32023), and [this one for React/frontend](https://github.com/mastodon/mastodon/issues/29991).

### Backend

There were a number of small bug fixes following the 4.3.0 release, that made it into 4.3.1.

<div class="features-list">

- {{< feature-label name="api" >}} Removed support for authenticating to the API using username and password, as this can cause security issues, and this usage has been strongly discouraged by OAuth security recommendations for several years. This is a change that will affect API libraries that implemented username and password authentication, so check for compatibility if you're using one of these - you'll want to find a library that supports OAuth tokens, and generate one for your app. {{< github-pr id=30960 authors="thisismissem" >}}
- {{< feature-label name="new feature" >}} Added back a 6 hour mute option, in addition to the existing 1, 7 and 30 days. {{< github-pr id=32522 authors="renchap" >}}
- {{< feature-label name="new feature" >}} Group follow notifications. This can be disabled in the notification settings. {{< github-pr id=32520 authors="renchap" >}}
- {{< feature-label name="new feature" >}} Added a way for push notification endpoints to cancel a push subscription. This is especially useful if your push notification server handles things asynchronously and you know that a subscription token has been permanently invalidated. For example, we are [updating our own mobile notification server](https://github.com/mastodon/webpush-apn-relay/pull/8) to benefit from this feature. {{< github-pr id=32626 authors="oneiros" >}}
- {{< feature-label name="interface" >}} Improved the instructions to set up the `fediverse:creator` tag. {{< github-pr id=32522 authors="ClearlyClaire" >}}
- {{< feature-label name="interface" >}} The look of Filters and Content Warnings have been adjusted based on community feedback. {{< github-pr id=32543 authors="ClearlyClaire" >}}
- {{< feature-label name="interface" >}} Text formatting in posts should look better (and is aligned with our latest design on Android). Right now it is not possible to post formatted text on Mastodon directly, but supporting this is on the roadmap. {{< github-pr id=32633 authors="gargron" >}}
- {{< feature-label name="interface" >}} Like and boost counts for remote posts should now be more accurate, as they are fetched when a status is refreshed. This is not real-time, and is only a first step toward better support for remote-content synchronisation. Thanks to [@sneakers-the-rat](https://github.com/sneakers-the-rat) for this contribution, and other PRs that we are currently reviewing. {{< github-pr id=32620 authors="sneakers-the-rat" >}}
- {{< feature-label name="interface" >}} If you open a poll on a Mastodon instance other that your own, and try to vote, we now show a modal to direct you to your server. This is similar to boosting or following. {{< github-pr id=32609 authors="thisismissem" >}}

</div>

### Android

Many small quality of life improvements have been made to our app over the past month. You will also find that support has been added for displaying a subset of formatted text (bold, italic, strikethrough, code spans, lists, blockquotes); creating posts with this markup is not yet supported, but this is on our roadmap.

<div class="features-list">

- {{< feature-label name="interface" >}} Added an option to use the Mastodon color theme (instead of Material You).
- {{< feature-label name="interface" >}} Support for the color contrast setting in Android 15.
- {{< feature-label name="interface" >}} New look for the media viewer.
- {{< feature-label name="new feature" >}} You can now crop your profile picture when editing your profile.
- {{< feature-label name="new feature" >}} You can now long-press "Add media" in the composer to bring up the file picker.
- {{< feature-label name="new feature" >}} New follower notifications now appear grouped.
- {{< feature-label name="new feature" >}} Directional loading for gaps in timelines: load newer posts when scrolling up, older when down.

</div>

### iOS

[Shannon](https://mastodon.social/@whattherestimefor) has joined the core development team, to work on the iOS app.

As well as learning the internals, Shannon has been fixing some "random" crashes tied to how authentication is handled, as well as making small UI fixes and improvements. Expect to see some more visible changes in the coming weeks, as she starts working on larger pieces.

### Fediscovery

The [specification](https://github.com/mastodon/fediverse_auxiliary_service_provider_specifications) work on Fediverse Auxiliary Service Providers (the archetype of [Fediverse Discovery Provider](https://fediscovery.org)) is moving forwards, thanks to some good feedback from the community. We switched to a simpler authentication model that does not involve OAuth, as feedback showed that it was not the best technical way to achieve what we needed.

Next, the focus is on having a way for providers to request data from an instance, so that the various discovery modules can build an index. We will open a Pull Request with this specification soon, to gather more community feedback.

## Community news

A busy month around our community!

- We added a short list of our recently published blog posts to the main README on our [GitHub organisation page](https://github.com/mastodon). Hopefully, more people will discover Trunk & Tidbits, and follow along with our development progress.
- Our friends at Datadog [published a case study featuring Mastodon](https://opensource.datadoghq.com/projects/mastodon/) as part of their Datadog for Open Source Projects program. In particular, this highlights the value of the [OpenTelemetry](https://opentelemetry.io/) support in Mastodon 4.3.
- [FOSDEM 2025](https://fosdem.org/2025/) is coming in February. We're excited that [a Social Web Devroom](https://socialhub.activitypub.rocks/t/social-web-devroom-at-fosdem-2025/4709) is happening (and, we'll be submitting to the Call for Papers). The Mastodon team has also applied for a stand, after the success of our table in 2024 - look our for future news on this.
- [Andy](https://macaw.social/@andypiper) from our team was a guest on [FLOSS Weekly episode 805](https://hackaday.com/2024/10/16/floss-weekly-episode-805-mastodon-bring-your-own-algorithm/), to talk about the version 4.3 release. There are video and audio versions of the conversation that you can check out, if you're interested.
- The recent [Alt Party](https://www.altparty.org/) had a neat photo printer that printed Mastodon posts, and [the code is available](https://github.com/hacklab-fi/fediphoto).
- A number of folks have posted examples of integrating the author attribution feature, aka the `fediverse:creator` tag, into different blog platforms:
  - [Robb Knight](https://social.lol/@robb) wrote a [general post](https://rknight.me/blog/setting-up-mastodon-author-tags/) about it.
  - [Dr Footleg](https://fosstodon.org/@drfootleg) shared [how to do this with Blogger](https://adventures-with-pi.blogspot.com/2024/10/setting-up-author-attribution-for.html).
  - [Andy](https://macaw.social/@andypiper) posted [one example](https://macaw.social/@andypiper/113311819856439844) of how to do this with WordPress.

### Bots... In... Spaaaace

Sadly, after many years, the [botsin.space](https://botsin.space) Mastodon instance will be closing in December 2024 - if you've missed the news, you can [read about it on the muffinlabs website](https://muffinlabs.com/posts/2024/10/29/10-29-rip-botsin-space/). Folks with apps / bots / accounts on that instance should already have seen the announcement notification (and, depending on account settings, may have had an email) with a reminder to look for somewhere to migrate their apps.

There are a number of options if you run one of the bots affected by this change. Here is a short list:

 - Look for a new Mastodon instance. One option could be [mastodon.bot](https://mastodon.bot) (other instances are available!). If you do this before botsin.space goes away, you can use the [move account option](https://docs.joinmastodon.org/user/moving/) to migrate the bot's follower and following networks to the new home instance.
- [Botwiki](https://botwiki.org) continues to be an amazing resource for bot developers of all kinds, and has a [list of resources for Fediverse bot creators](https://botwiki.org/resources/fediverse-bots/).
- [Terence Eden](https://mastodon.social/@edent) has created an interesting new single-purpose ActivityPub app - [ActivityBot](https://shkspr.mobi/blog/2024/11/introducing-activitybot-the-simplest-way-to-build-mastodon-bots/)- that makes it easy to build and host your own bot directly, without needing to live on a Mastodon instance (but your app will still be accessible in the Fediverse as a whole).

We'd like to say **Thank You** to [Colin](https://muffin.industries/@colin), the owner of botsin.space, for providing a nice home for so many bots on Mastodon over the past seven years. What a lovely space it was 💜 🤖 🙏

## Gratitude

The whole Mastodon team values your support for our work and platform, your contributions, and your feedback.

Now is a more important time than ever to create a social web that is open, independent, and sustainable! Our work depends on donations, and we appreciate your continued support.

{{< donate >}}
