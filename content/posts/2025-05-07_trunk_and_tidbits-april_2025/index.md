---
title: "Trunk & Tidbits, April 2025"
description: "Mastodon development news for April 2025: team changes, releases, future deprecations, and new features in the works."
date: 2025-05-07
section: Trunk and Tidbits
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
draft: false
---

This edition of Trunk & Tidbits marks the one year anniversary of our monthly development updates 🎉

Back at the beginning of 2024, we discussed how regular communication needed to be a part of our team's culture, as a commitment to the people who help to make Mastodon what it is - everyone that uses Mastodon daily, the administrators who run servers, the moderators that help to manage community discussions, and the people that [donate](https://joinmastodon.org/sponsors#donate) to the project to help us to keep moving forward.

We hope you're finding the updates and behind-the-scenes insights useful. We're interested in your feedback, so please let us know if you have any suggestions for future posts. We're [in the Fediverse](https://mastodon.social/@MastodonEngineering), and should be easy to find... 🙂

## Team news

Last week, we published a blog post [sharing an update on the team as a whole](https://www.notion.so/Evolving-the-team-1e06208ac91b80919d19c45d2ba4a66f?pvs=21), particularly with some news about a change to our 501(c)(3) fundraising board, and some non-engineering roles.

<blockquote class="mastodon-embed" data-embed-url="https://mastodon.social/@Mastodon/114433296016318962/embed" style="background: #FCF8FF; border-radius: 8px; border: 1px solid #C9C4DA; margin: 0; max-width: 540px; min-width: 270px; overflow: hidden; padding: 0;"> <a href="https://mastodon.social/@Mastodon/114433296016318962" target="_blank" style="align-items: center; color: #1C1A25; display: flex; flex-direction: column; font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Oxygen, Ubuntu, Cantarell, 'Fira Sans', 'Droid Sans', 'Helvetica Neue', Roboto, sans-serif; font-size: 14px; justify-content: center; letter-spacing: 0.25px; line-height: 20px; padding: 24px; text-decoration: none;"> <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="32" height="32" viewBox="0 0 79 75"><path d="M63 45.3v-20c0-4.1-1-7.3-3.2-9.7-2.1-2.4-5-3.7-8.5-3.7-4.1 0-7.2 1.6-9.3 4.7l-2 3.3-2-3.3c-2-3.1-5.1-4.7-9.2-4.7-3.5 0-6.4 1.3-8.6 3.7-2.1 2.4-3.1 5.6-3.1 9.7v20h8V25.9c0-4.1 1.7-6.2 5.2-6.2 3.8 0 5.8 2.5 5.8 7.4V37.7H44V27.1c0-4.9 1.9-7.4 5.8-7.4 3.5 0 5.2 2.1 5.2 6.2V45.3h8ZM74.7 16.6c.6 6 .1 15.7.1 17.3 0 .5-.1 4.8-.1 5.3-.7 11.5-8 16-15.6 17.5-.1 0-.2 0-.3 0-4.9 1-10 1.2-14.9 1.4-1.2 0-2.4 0-3.6 0-4.8 0-9.7-.6-14.4-1.7-.1 0-.1 0-.1 0s-.1 0-.1 0 0 .1 0 .1 0 0 0 0c.1 1.6.4 3.1 1 4.5.6 1.7 2.9 5.7 11.4 5.7 5 0 9.9-.6 14.8-1.7 0 0 0 0 0 0 .1 0 .1 0 .1 0 0 .1 0 .1 0 .1.1 0 .1 0 .1.1v5.6s0 .1-.1.1c0 0 0 0 0 .1-1.6 1.1-3.7 1.7-5.6 2.3-.8.3-1.6.5-2.4.7-7.5 1.7-15.4 1.3-22.7-1.2-6.8-2.4-13.8-8.2-15.5-15.2-.9-3.8-1.6-7.6-1.9-11.5-.6-5.8-.6-11.7-.8-17.5C3.9 24.5 4 20 4.9 16 6.7 7.9 14.1 2.2 22.3 1c1.4-.2 4.1-1 16.5-1h.1C51.4 0 56.7.8 58.1 1c8.4 1.2 15.5 7.5 16.6 15.6Z" fill="currentColor"/></svg> <div style="color: #787588; margin-top: 16px;">Post by @Mastodon@mastodon.social</div> <div style="font-weight: 500;">View on Mastodon</div> </a> </blockquote> <script data-allowed-prefixes="https://mastodon.social/" async src="https://mastodon.social/embed.js"></script>

One new member of the team was not included in that post, as it was just before they started - we're very happy to welcome [Dion](https://indieweb.social/@diondiondion) to the core team this week, as our second full-time front-end developer.

It's not all about the code, so we're also sharing what we're doing to help the Fediverse, outside of the work in our repositories. Interest in independent, non-commercial social platforms continues to grow, and we're working to share the message about Mastodon and the Fediverse with a wider audience.

During April, members of the team were at the International Journalism Festival in Perugia, and also visited The Hague and Amsterdam, to meet with policymakers and media organizations. We've even [been on the radio in Germany](https://www.radioeins.de/programm/sendungen/der_schoene_morgen/_/global-solution-summit.html) (well, [Felix](https://mastodon.social/@mellifluousbox) was interviewed there!). You can also watch [Andy](https://macaw.social/@andypiper)'s participation in a panel at Fediverse House from March, [on Flipboard's PeerTube channel](https://flipboard.video/w/fr6Ajy9YxgmW3ZGdAycBca).

In each Trunk & Tidbits post this year, we've mentioned some events that the team has been at. We want to share our future plans as well, and as an initial step, we've added a new section to the Discord server [for our Patreon supporters](https://www.patreon.com/mastodon). This lists upcoming events, as well as the people from the team who will be there. In the future, we're planning to add some of this information on the main project website as well. We're also going to be using [our main Mastodon account](https://mastodon.social/@Mastodon), posting on [LinkedIn](https://www.linkedin.com/company/joinmastodon/), and using other channels to share our plans and broaden the ways we reach people.

## Releases

There were no new releases of the Mastodon server code in April, but we just released [4.3.8](https://github.com/mastodon/mastodon/releases/tag/v4.3.8) and [4.2.21](https://github.com/mastodon/mastodon/releases/tag/v4.2.21) as we rolled over into May. These contain a few small bug fixes, and a minor security fix. We encourage administrators to update to the most recent release for their instances.

Last month, Mastodon 4.1.x reached the end of support. If you are running a version of Mastodon on the 4.1 series (or earlier), *please upgrade*. We are unable to help you if you hit issues while running older releases of the code.

Looking ahead to future releases, there are a couple of upcoming technical changes that administrators and developers should know about.

Firstly, for administrators, [David](https://upp2.com/@dave) has provided some [next steps towards the removal of Redis namespaces in version 4.4.0](https://github.com/mastodon/mastodon/discussions/34198#discussioncomment-12992222). This is a change that was mentioned in [the last Trunk & Tidbits post](https://blog.joinmastodon.org/2025/04/trunk-tidbits-march-2025/), and it will be a breaking change for some instances. If you are running a Redis server with multiple Mastodon instances, please take a look at the discussion on GitHub.

The second change is that we're moving to implement the final version of RFC9421 HTTP Signatures in Mastodon (originally mentioned [back in February](https://blog.joinmastodon.org/2025/02/trunk-tidbits-january-2025/)) [Renaud](https://oisaur.com/@renchap) has put out a [call for feedback with other ActivityPub implementers](https://oisaur.com/@renchap/114455531480422517). This is a change that will affect how Mastodon interacts with other ActivityPub servers, and we are looking to test with other developers in the community.

## Backend and web

The team is hard at work finishing the few items left before the first Mastodon 4.4 release. We are planning for the first beta version to be released later in May.

In April, we reviewed and merged 142 Pull Requests (77 with translation and dependency updates removed) from 12 authors. Thank you to everyone who contributed to the project this month!

<div class="features-list">

- {{< feature-label name="interface" >}} Added a dropdown menu to list of accounts with quick actions. {{< github-pr id=34391 authors="Gargron" >}}
- {{< feature-label name="interface" >}} Added a new “Featured” tab on profiles, to showcase featured posts (previously pinned posts), hashtags and accounts, and allow those to be featured or unfeatured from the web UI.  {{< github-pr id=34405 authors="ChaosExAnima" >}} {{< github-pr id=34490 authors="Gargron" >}} {{< github-pr id=34568 authors="Gargron" >}}
- {{< feature-label name="interface" >}} Added a dropdown menu on hashtags to browse the posts for the hashtag or mute it directly. {{< github-pr id=34393 authors="Gargron" >}}
- {{< feature-label name="interface" >}} Added a way to remove a follower when browsing their profile (previously you could achieve this by blocking then unblocking them). [Issue #34473](https://github.com/mastodon/mastodon/issues/34473) from [thisismissem](https://github.com/ThisIsMissEm)
- {{< feature-label name="new feature" >}} Added support for incoming quote posts (ActivityPub + backend). {{< github-pr id=34370 authors="ClearlyClaire" >}} {{< github-pr id=34479 authors="ClearlyClaire" >}} [Documentation](https://github.com/mastodon/documentation/pull/1630)
- {{< feature-label name="admin" >}} Changed `DEFAULT_LOCALE` setting to not override unauthenticated users' browser language, and introduce `FORCE_DEFAULT_LOCALE` to restore this behaviour. {{< github-pr id=34535 authors="ClearlyClaire" >}}
- {{< feature-label name="new feature" >}} Updated account search to be more forgiving of spaces. {{< github-pr id=34455 authors="Gargron" >}}
- {{< feature-label name="api" >}} Added an API for fetching a user's endorsed accounts. {{< github-pr id=34421 authors="Gargron" >}} [Documentation](https://github.com/mastodon/documentation/pull/1633)

</div>

## Android

In April, there were two releases of the app, with mostly minor changes. The most noticeable update is that you can now see which post you're replying to in the compose screen. Also, the top bar in the Explore tab now scrolls away. The other changes were fixes for some rare crashes.

## iOS

Release 2025.02 brought improvements to new account registration, including support for the new minimum age server option and a less aggressive field-invalidation marking experience. Also, several types of notifications that had not previously been visible in the app will now appear. Admins have the option to filter out the potentially high-volume admin notifications.

## Fediscovery

We published a first draft of the [`follow_recommendation`](https://github.com/mastodon/fediverse_auxiliary_service_provider_specifications/pull/55) capability specification. This API allows personalized follow recommendations to be fetched from a discovery provider.

## Around the community

- The Discourse team [announced](https://blog.discourse.org/2025/04/discourse-and-the-fediverse/) support for ActivityPub and the Fediverse. Welcome!
- Looking for a fun Mastodon web client with themes and animations? [Hai](https://antijingoist.itch.io/hai)!
- Some [Mastodon components for Svelte](https://github.com/ryanatkn/fuz_mastodon).
- [Mastodon for n8n](https://github.com/redoracle/n8n-nodes-the-mastodon_node) = Mastodon functionality for n8n, a workflow automation tool.
- We don't have an algorithm, but some other people have built some. A new release of FediAlgo [was announced](https://universeodon.com/@cryptadamist/114395249311910522).

Built something cool on Mastodon? Let us know! We love to see what the community is building, and we want to share it with everyone.

## We appreciate you

The team has evolved, and we're working hard to make Mastodon even better for you. We can only do this with your help - we're not taking venture capital, and we don't have a big company behind us. We are a small team, and we need your help to keep going. If you like what we're doing, please consider supporting us. Thank you to everyone who contributes to the project, and who uses Mastodon every day.

{{< donate >}}
