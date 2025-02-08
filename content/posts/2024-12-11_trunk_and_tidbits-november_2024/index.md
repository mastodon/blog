---
title: "Trunk & Tidbits, November 2024"
description: "Mastodon core team technical updates for November 2024: the latest point releases, progress on Fediscovery, FOSDEM planning, and projects from the developer community."
date: 2024-12-11
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

Hi everyone! We're back with our monthly engineering update, looking back at a busy November.

## General news

We were pleased to see our friends at NGI (Next Generation Internet) [announce a major transition to using Mastodon and PeerTube](https://ngi.eu/news/2024/11/29/ngi-projects-adopt-mastodon-and-peertube-as-main-communication-channels/) as  primary communication channels for many of their projects. 🎉

Our application for a stand at [FOSDEM 2025](https://fosdem.org/2025/) was accepted. We're excited to be taking part in FOSDEM for the second year! We've started to plan what we will bring to share and talk about. We're also going to be engaged in this year's [Social Web Devroom](https://socialwebfoundation.org/2024/11/01/fosdem-2025-social-web-devroom-call-for-participation/). The Fediverse is growing, and we are happy to be a part of it.

After the U.S. celebrates Thanksgiving, they've historically had so-called Black Friday and then Cyber Monday... there's also a more recent tradition of Giving Tuesday. This year, the [Mastodon 501(c)(3) organisation](https://blog.joinmastodon.org/2024/04/mastodon-forms-new-u.s.-non-profit/) - our U.S. non-profit entity - launched [a fundraising campaign](https://givebutter.com/givingmastodon) to help us to fund a Trust & Safety Lead. We're super [grateful and happy that the campaign has started](https://mastodon.social/@Mastodon/113631034747345380) to raise these funds (also, the campaign remains open!).

## Releases

In November, we released updates for each of the currently-supported Mastodon versions - [4.3.2](https://github.com/mastodon/mastodon/releases/tag/v4.3.2), [4.2.14](https://github.com/mastodon/mastodon/releases/tag/v4.2.14), and [4.1.21](https://github.com/mastodon/mastodon/releases/tag/v4.1.21). These contain a mixture of small fixes, and in the case of 4.3.2 and 4.2.14, a new administrative `tootctl feeds vacuum` command for retroactively removing feeds that may have been left behind from deleted accounts.

As a reminder, Mastodon 4.1.x is now deprecated, which means that it will reach End of Life and no longer receive updates on April 8, 2025 - this will be six months after the release of 4.3.0.

We recommend that owners / administrators of Mastodon instances upgrade to the latest available versions, as appropriate to their environments.

## Code updates

In November, we reviewed and merged 194 Pull Requests (133 with translation and dependency updates removed) from 18 authors.

We always appreciate [contributions](https://github.com/mastodon/.github/blob/main/CONTRIBUTING.md). If you would like to get involved, we have some [issues tagged "help welcome"](https://github.com/mastodon/mastodon/labels/help%20welcome), including [this one for Rails/backend](https://github.com/mastodon/mastodon/issues/32023). There are also a small number of "easy" (?) unmaintained React library replacements needed: [`react-notification`](https://github.com/mastodon/mastodon/issues/30438),  [`react-motion`](https://github.com/mastodon/mastodon/issues/30437) and [`react-hotkeys`](https://github.com/mastodon/mastodon/issues/30436).

### Backend

<div class="features-list">

- {{< feature-label name="new feature" >}} Added support for Wrapstodon, a fun "year-in-review" feature. This currently needs to be generated from the console, and is not yet ready for general use, but it allowed us to run it on [mastodon.social](http://mastodon.social) and [mastodon.online](http://mastodon.online) and test the feature in the wild. {{< github-pr id=32709 authors="Gargron" >}} {{< github-pr id=32765 authors="Gargron" >}}
- {{< feature-label name="new feature" >}} Added more reserved usernames, so they can not be registered by malicious actors. Big thanks to Jaz from [IFTAS](https://about.iftas.org/) for this contribution. {{< github-pr id=32828 authors="jmking-iftas" >}}
- {{< feature-label name="interface" >}} Improved display of statuses in admin interface.  {{< github-pr id=30813 authors="ThisIsMissEm" >}}
- {{< feature-label name="interface" >}} Greatly improve the design of the list management screens {{< github-pr id=32881 authors="Gargron" >}} and automatically update list timelines when adding/removing accounts {{< github-pr id=32930 authors="Gargron" >}}

</div>

We've also been busy working on bug fixes (which rolled up into the point releases), and are also working on Fediscovery and on quote posts.

Among other contributors, we'd also like to say Thank You to Matt [@mjankowski](https://github.com/mjankowski) for tirelessly triaging PRs and Issues and helping us to get our backlogs into better shape - for a popular project like this one, it can be a lot of work 🙏🏻


### Android

The most recent Android release had a number of visual updates: the ability to use a default Material palette; a redesign of the media viewer; and the ability to crop avatars are probably the most noticeable ones.

### iOS

Just in time for Giving Tuesday, our update 2024.11 shipped with the ability to show members of [mastodon.social](http://mastodon.social) and [mastodon.online](http://mastodon.online) a banner at the bottom of their timeline inviting support for Mastodon’s continued development.

This version also made several improvements to filters and content warnings, most importantly that filtered posts now take up less space and tell you which filter they triggered! Also, filters with the “hide” action now really do remove posts from your feed completely. Finally, content warnings now function as they do on the web, blurring only the attached media if the content warning message is empty.

We’ve fixed a few longstanding privacy issues, so that when you log out of an account (or delete the app from your device and reinstall it), you will be required to re-enter your username and password to regain access to the account. And we’ve made a few improvements to the experience of using the app with a brand new account: "Find people to follow" is now easier to exit from, and posts from anyone you’ve just followed will show up in your feed immediately.

Finally, there are a few small visual improvements, including that the Dark Mode icon now has a dark ‘m’, and a large amount of code change that will hopefully mean fewer crashes right away and make further stability improvements in the future easier to achieve.

## Fediscovery Project

In case you missed it: [Fediscovery](https://www.fediscovery.org/) (full title, Fediverse Discovery Providers) is a project to explore decentralised search and discovery for the Fediverse as a whole. This is a new service for ActivityPub-compatible platforms.

Work on establishing a solid base for providers is ongoing, and we have been able to publish the first draft for a provider to register to data updates from a configured instance. This will allow discovery providers to know when there are new (or updated, or deleted) posts or accounts so it can index them. No data is directly sent to the provider, but only references that the provider can fetch over ActivityPub, using it’s own actor. You can read more about it (and leave your comments) [here](https://github.com/mastodon/fediverse_auxiliary_service_provider_specifications/pull/36).

A proof of concept implementation is also in progress, as writing specifications without experimenting is not the best way to ensure that they are good in practice. This will help us ensure that the specifications can be translated to working code, and to show some real progress!

## Community

As usual, we've been on the look out for interesting links and projects to share here on the blog. Here's what came across [Andy's](https://macaw.social/@andypiper) radar this month...

- [Bastian](https://scholar.social/@gedankenstuecke) shared [a way to build an RSS feed from popular links shared in your Mastodon timeline](https://tzovar.as/mastodon-rss/).
- Do things with your account archive!
  - A [lightweight way to read and explore a Mastodon account archive](https://github.com/s427/MARL).
  - Build [a static site from your account archive](https://github.com/lmorchard/fossilizer).
- Explore [a visual representation of your Mastodon follow graph](https://github.com/AMNatty/Mastodon-Circles).
- An [ActivityPub relay](https://s-h-gamelinks.github.io/activity-pub-relay/) written in Ruby.

And finally... [mmm, cookies](https://fosstodon.org/@batvin3211/113624161661746400)! 🍪

## Thank you

Mastodon is an open source project - the team relies on donations to exist, and word-of-mouth to grow.

This is a critical time in the history of the internet, and we strongly believe that a sustainable, free and open social web must continue to exist.

We are so grateful for your support and contributions to our project!

{{< donate >}}
