---
title: Mastodon 2.7
subtitle: "Highlights from the changelog"
description: "In this release: New profile directory, new tutorial, new public hashtag pages and more moderation tools"
date: 2019-01-20
draft: false
author: gargron
resources:
- name: hero
  src: hero.png
categories:
- New Features
tags:
- mastodon
---

Polish translation is available: [Mastodon 2.7]({{< relref path="2019-01-19_Mastodon-2.7" lang="pl" >}})

---

The fresh release of Mastodon brings long-overdue improvements to discoverability of content and the administration interface, as well as a large number of bug fixes and extra polish.

The 2.7 release consists of **376 commits** by **36 contributors** since October 31, 2018. For line-by-line attributions, you can peruse the [changelog file][changelog], and for a historically complete list of contributors and translators, you can refer to the [authors file][authors], both included in the release.

[changelog]: https://github.com/tootsuite/mastodon/blob/v2.7.0/CHANGELOG.md
[authors]: https://github.com/tootsuite/mastodon/blob/v2.7.0/AUTHORS.md

{{< figure src="Screenshot_2019-01-19 Explore Mastodon.png" caption="Profile directory on mastodon.social" >}}

One of the new features is a **profile directory** that people can opt-in to. The directory allows you to see at a glance active posters on a given Mastodon server and filter them by the hashtags in their profile bio. So you can find people who share your interests without reading through the public timelines, and you can even find out who to follow from a different Mastodon server without needing to sign up and lurk there!

{{< figure src="Screenshot_2019-01-19 Mastodon (Dev).png" caption="Tutorial explaining the timelines" >}}

The **tutorial** that new people see after signing up has been completely reworked. It has a tighter narrative: Rather than explaining the minutea of the default user interface, it focuses on the main concepts of Mastodon, from which the interface is a derivation. And it is accompanied by colorful illustrations. It also has the benefit of loading a bit faster, since it's not a modal window laid over the interface, but rather it loads *before* the interface.

{{< figure src="Screenshot_2019-01-19 catstodon.png" caption="Public hashtag page for #catstodon" >}}

The **public hashtag page** now makes better use of screen estate by arranging toots in a masonry grid instead of a narrow column. The public hashtag page is the page outside the columnized web interface that logged in users see and use--it is a page oriented primarily towards anonymous viewers.

2.7 includes a **new moderation warning system** for Mastodon. Whereas previously people would learn that their account was suspended or disabled only through a generic error page when trying to access their account, now moderators can choose to notify users about any actions taken against them. Even without specific actions, moderators can send official warnings that get delivered over e-mail and are reflected in the moderator interface, allowing other moderators to stay updated. Moderators can write any additional information in those e-mails. Because many moderation cases are similar, there is a system for saving presets, that moderators can very easily choose from instead of typing messages from scratch every time.

Of course, because it's hard to generalize, and some trolls and spam bots are best contained when they don't realize they are being contained, that notification system can be overriden on a case by case basis.

{{< figure src="Screenshot_2019-01-19 TheKinrar mastodon xyz - Mastodon.png" caption="Admin interface for a remote account" >}}

The moderation interfaces for accounts and instances has also been reworked. Accounts now display the most important numbers in an easy to skim grid. Some useless information has been removed, and some useful information has been added, such as when the user signed up, or who sent them an invite. For accounts from other servers, you can now see which local users follow them at a glance.

{{< figure src="Screenshot_2019-01-19 Federation - Mastodon.png" caption="Administration interface for known servers" >}}

The administration interfaces for known servers and domain blocks have been unified into a common area. Besides displaying how many accounts are known from a particular server, you can now also see how many accounts are followed from your server, how many of their accounts are following your users, how many have been individually blocked or reported, and how much disk space that server's media attachments are taking up.

App developers will be delighted to learn that 2.7 introduces a **registration API**. By implementing that API, apps will be able to accept new registrations from their users, instead of having to send them to a web browser. When a user signs up through an app, they still receive a confirmation e-mail which they have to open before their account is activated, but the e-mail contains a link that can open the app, and once the account is activated, the app is already authenticated and ready to go.

The command-line utility for managing a Mastodon server, `tootctl` (pronounced "toot control") has received a few new commands. Over the course of Mastodon's existence, some people built websites collecting statistics from known Mastodon servers. However, their numbers always differ a little, and it's difficult to inspect how they function. Now, you can scan the Mastodon network from your own machine to discover servers and aggregate statistics about Mastodon's usage with `tootctl domains crawl`.

By running that command from my machine, I was able to gather these figures: **2251** active Mastodon servers, **1,882,838** registered users, **172,041** active users and **21,537** new sign-ups in the first week of January 2019.

The other new command is `tootctl accounts follow` and it allows you to make the users on your server follow a specified account. As a reminder, users on Mastodon follow their administrator by default, both for important announcements as well as to kickstart their home feed with something when they're new. So that command is useful in those rare cases where the administrator needs to change their account.

> To learn more about a `tootctl` command, append `--help` to it, for example: `tootctl domains crawl --help`

This is far from everything included in the release--there are many smaller improvements, like CSV export for lists and domain blocks, volume sliders for videos, ability to follow multiple hashtags from the same column, improved emoji support, better defences against spammers with MX checks, and more.

### Conclusion

**Contributors to this release:** [0xflotus](https://github.com/0xflotus), [Aditoo17](https://github.com/Aditoo17), [ariasuni](https://github.com/ariasuni), [ashleyhull-versent](https://github.com/ashleyhull-versent), [BenLubar](https://github.com/BenLubar), [chr-1x](https://github.com/chr-1x), [Esteth](https://github.com/Esteth), [fwenzel](https://github.com/fwenzel), [Gargron](https://github.com/Gargron), [hinaloe](https://github.com/hinaloe), [jomo](https://github.com/jomo), [kedamaDQ](https://github.com/kedamaDQ), [Kjwon15](https://github.com/Kjwon15), [m4sk1n](https://github.com/m4sk1n), [mayaeh](https://github.com/mayaeh), [mbugowski](https://github.com/mbugowski), [moritzheiber](https://github.com/moritzheiber), [noellabo](https://github.com/noellabo), [nolanlawson](https://github.com/nolanlawson), [pawelngei](https://github.com/pawelngei), [pointlessone](https://github.com/pointlessone), [Quenty31](https://github.com/Quenty31), [remram44](https://github.com/remram44), [renatolond](https://github.com/renatolond), [Reverite](https://github.com/Reverite), [shrft](https://github.com/shrft), [Sir-Boops](https://github.com/Sir-Boops), [sumdog](https://github.com/sumdog), [tachyons](https://github.com/tachyons), [ThibG](https://github.com/ThibG), [tmm576](https://github.com/tmm576), [ykzts](https://github.com/ykzts), [ysksn](https://github.com/ysksn), [yukimochi](https://github.com/yukimochi), [zunda](https://github.com/zunda)

**Translators for this release:** adrianbblk, Alix D. R., Antonis, avndp, azenet, Branko Kokanovic, Burekz Finezt, ButterflyOfFire, carl morris, codl, Daniel, Eirworks, Enol P., Ivan Pleva, Jaz-Michael King, Jeong Arm, jeroenpraat, koyu, Kristijan Tkalec, Kumasun Morino, lilo, Lorem Ipsum, Marcin Mikołajczak, Marek Ľach, Masoud Abkenar, mayaeh, Muhammad Nur Hidayat (MNH48), Mélanie Chauvel, osapon, Osoitz, Quenti2, Quentí, Ranjith Tellakula, Rasmus Sæderup, Renato "Lond" Cerqueira, rscmbbng, spla, Vanege, Xose M., 小鳥遊まりあ

As always, huge thanks to everyone who contributed to this release, to [everyone who sponsors the project][sponsors] on [Patreon][patreon], and to everyone who uses the network! 🐘

[sponsors]: https://joinmastodon.org/sponsors
[patreon]: https://patreon.com/mastodon

### Resources

- [Full changelog](https://github.com/tootsuite/mastodon/releases/tag/v2.7.0)
- [User documentation](https://docs.joinmastodon.org/usage/basics/)
