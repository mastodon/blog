---
title: "Mastodon 2.5 released"
subtitle: "Highlights from the changelog"
date: 2018-09-05
draft: false
author: gargron
categories:
- New Features
tags:
- mastodon
- changelog
---

Mastodon 2.5 is the 100th released version of Mastodon since the project's inception almost 2 years ago.<!-- more --> It brings a variety of improvements to the software, the full list of which is [available in the changelog](https://github.com/tootsuite/mastodon/releases/tag/v2.5.0).

{{< figure src="screenshot-profile.png" caption="Public profile page" >}}

**The public areas of the web interface have been redesigned**. The color scheme and design is now more consistent with the logged-in interface. The new profile layout makes better use of space for bio text and increases the value of header images. Prominent follow buttons ensure that even people new to Mastodon understand quickly what they can do on it.

But that's not all: The public pages now also display **reply, favourite and boost buttons that open a remote interaction dialog** that can take you back to your home server where you can actually interact with the toot from your account. That's a lot simpler than having to copy & paste the toot permalink into your server's search bar!

{{< figure src="screenshot-remote-interaction.png" caption="Remote interaction dialog" >}}

The other thing on the new profiles: You can choose to feature some of the people you follow on your profile, to be displayed in random order as a sort of recommendation to anyone who is visiting it. Your favourite cat owners, important voices or your associates, it's up to you. Like the MySpace Top 8 without the "top" and the "8", or even more like the WordPress blogroll.

Some of the smaller changes: The number of replies to toots is now stored and displayed so you can know straight away if a question you see has already been answered or if a lively discussion is happening. Mastodon now accepts MOV videos from iOS, and larger video files in general, and is smarter about resizing images.

### Administration and moderation

For those who moderate Mastodon servers, a **new dashboard** provides an overview of important weekly numbers such as new sign-ups, user activity and liveliness. The **number of e-mail notifications generated from reports has been reduced**: reports for the same person do not generate a notification if one of the reports is currently unresolved. Additionally, you can now disable report notifications for yourself.

{{< figure src="screenshot-dashboard.png" caption="Admin dashboard" >}}

Suspensions in Mastodon are a harsh measure: You no longer have to fear misclicking and suspending the wrong person with a **new confirmation screen** that tells you how many toots and followers the suspension will affect before asking you to re-type the name of the account to make sure you didn't click on the wrong one.

But that's not all: The **temporary account lock-out** function has been made available to moderators as a softer, and completely reversible alternative to suspensions.

### Deployment and scaling

**For those who run Mastodon servers**, the database schema has been adjusted to **reduce disk write operations and CPU load of PostgreSQL**. And for those who need to scale big, **support for read-replicas** is now baked into the software: it's [just a matter of changing configuration](https://github.com/tootsuite/documentation/blob/master/Running-Mastodon/Tuning.md#using-read-replicas).

A **new command-line interface** is supposed to make working with Mastodon from the terminal easier, in place of the clunky rake tasks system. For example, there is a new way to import a pack of custom emojis. Let's say we have an archive stored under `/home/alice/Downloads/hackerman.tar.gz` with the hackerman set of letter emojis saved as PNG files like `a.png`, `b.png` and so on, it could be imported with:

```bash
bin/tootctl emoji import \
  --unlisted \
  --prefix hacker_ \
  /home/alice/Downloads/hackerman.tar.gz
```

This will create custom emojis in Mastodon with shortcodes like `:hacker_a:` that will not clutter up the emoji picker but will be autocompleted.

{{< mastodon "https://knzk.me/@Knzk/100674210459241787" >}}

### Federation relays

If your Mastodon server does not have enough activity to be interesting to new users, that chicken-and-egg problem can now be solved by subscribing to a so-called **federation relay**. Federation relays are separate servers that act as a, well, *relay* between participating Mastodon servers, that is, every participating server receives every public toot from every other participating server.

It has to be mentioned that the core design of Mastodon where a server receives only toots from users it follows, rather than all toots from any one server, is more scalable long-term. However, servers that don't yet follow a lot of people can often feel like ghost towns, and federation relays fix that.

___

**To get started with Mastodon, you can [sign up for free here](https://mastodon.cloud/about) or [here](https://mstdn.io/about), or dive into the deep end of choice [by browsing the list of servers here](https://joinmastodon.org/#getting-started). Or, [use the bridge tool to find where your Twitter friends are](https://bridge.joinmastodon.org) and sign up there.**

Huge thanks to everyone who contributed to the recent releases ([see the full changelogs for accreditation](https://github.com/tootsuite/mastodon/releases/tag/v2.5.0)), to [everyone who sponsors](https://joinmastodon.org/sponsors) the project, and to everyone who makes the network worth using by being awesome tooters! 🐘
