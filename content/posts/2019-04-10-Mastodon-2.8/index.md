---
title: "Mastodon 2.8"
subtitle: "Highlights from the changelog"
description: "In this release: Polls, new tools for managing followers, new frontpage design, new admin features, Keybase integration, and more"
date: 2019-04-10
draft: true
author: gargron
resources:
- name: hero
  src: hero.png
categories:
- New Features
tags:
- mastodon
---

In this long-awaited release: Polls, new tools for managing followers, new frontpage design, new admin features, Keybase integration, and more.

{{< figure src="poll.png" caption="A poll" >}}

Mastodon now has a **poll feature**. Instead of attaching images or video to your post, you can ask your followers to choose an answer to your question. You can choose how long a poll will remain open for. Polls in private posts are accessible only to your followers.

{{< figure src="featured-tags.png" caption="Featured hashtags on an artist's profile" >}}

You can now choose which **hashtags to feature on your profile**. They will be displayed on the sidebar and allow visitors to browse your posts specifically under those hashtags.

A new server setting will allow communities to grow without worrying about spammers, trolls, or unexpected traffic spikes: Instead of allowing everyone to sign up, or allowing nobody to sign up, a server owner can choose to let people **apply for an invite** and manually approve sign-ups.

{{< figure src="landing-page.png" caption="The new landing page" >}}

The **landing page has been simplified** to its essence: Sign up form, quick access to a login form for returning users, short and to the point information about the server, and links to ways of exploring the server.

The design of profiles within the web app has been changed to match the design of public profiles more closely, making better use of space and showing the header image without obscuring it.

{{< figure src="relationship-manager.png" caption="Manage follows and followers" >}}

There is a new **powerful UI for managing your followers and follows**. It allows you to filter them by various criteria, such as your mutuals, or who hasn't been active in a long time, and you can unfollow them in batches, as well as remove them from your followers in batches.

In a similar vein, the import tool for follows, mutes, and blocks now allows you to choose whether the imported data will merge with what you already had in your account, or replace it.

Among other things, Mastodon now supports **Keybase's new proof system**, allowing you to connect your Keybase account with your Mastodon account to affirm your identity across the web. Keybase is slowly rolling this feature out on their side, and it will eventually be available to all Mastodon servers.

### Conclusion

The 2.8 release consists of **392 commits** by **32 contributors** since January 28, 2019. For line-by-line attributions, you can peruse the [changelog file][changelog], and for a historically complete list of contributors and translators, you can refer to the [authors file][authors], both included in the release.

[changelog]: https://github.com/tootsuite/mastodon/blob/v2.8.0/CHANGELOG.md
[authors]: https://github.com/tootsuite/mastodon/blob/v2.8.0/AUTHORS.md

**Contributors to this release:** [Aditoo17](https://github.com/Aditoo17), [armandfardeau](https://github.com/armandfardeau), [aurelien-reeves](https://github.com/aurelien-reeves), [BenLubar](https://github.com/BenLubar) [enewhuis](https://github.com/enewhuis), [Gargron](https://github.com/Gargron), [hinaloe](https://github.com/hinaloe), [jeroenpraat](https://github.com/jeroenpraat), [Kjwon15](https://github.com/Kjwon15), [koyuawsmbrtn](https://github.com/koyuawsmbrtn), [m4sk1n](https://github.com/m4sk1n), [mabkenar](https://github.com/mabkenar), [marek-lach](https://github.com/marek-lach), [mayaeh](https://github.com/mayaeh), [noellabo](https://github.com/noellabo), [nolanlawson](https://github.com/nolanlawson), [palindromordnilap](https://github.com/palindromordnilap), [Quenty31](https://github.com/Quenty31), [renatolond](https://github.com/renatolond), [rinsuki](https://github.com/rinsuki), [salvadorpla](https://github.com/salvadorpla), [sascha-sl](https://github.com/sascha-sl), [Shleeble](https://github.com/Shleeble), [Slaynash](https://github.com/Slaynash), [slice](https://github.com/slice), [ThibG](https://github.com/ThibG), [xgess](https://github.com/xgess), [yagizhan49](https://github.com/yagizhan49), [ykzts](https://github.com/ykzts), [ysksn](https://github.com/ysksn)

**Translators for this release:** Aditoo, Albakham, Alessandro Levati, Ali Demirtas, Alix D. R., Amrz0, Andrew Zyabin, Angeles Broullón, Antonis, arshat, Austin Jones, Becci Cat, Besnik Bleta, Burekz Finezt, ButterflyOfFire, dxwc, Einhjeriar, Eirworks, Evgeny Petrov, goofy-mdn, Hinaloe, Ivan Pleva, Jaz-Michael King, Jeong Arm, jeroenpraat, Joseph Nuthalapati, João Pinheiro, Kaitian Xie, Kevin Houlihan, koyu, Kristijan Tkalec, Kumasun Morino, Leia, lilo, Maigonis, Marcin Mikołajczak, Marek Ľach, martialarts, Masoud Abkenar, Max Winkler, mayaeh, Mikko Poussu, Mélanie Chauvel, Osoitz, Owain Rhys Lewis, pan93412, parnikkapore, Peter, Quenti2, Quentí, Rasmus Sæderup, Renato "Lond" Cerqueira, Sarunas Medeikis, Sergio Soriano, spla, Thai Localization, Vanege, Xose M., Павел Гастелло, 森の子リスのミーコの大冒険

As always, huge thanks to everyone who contributed to this release, to [everyone who sponsors the project][sponsors] on [Patreon][patreon], and to everyone who uses the network! 🐘

[sponsors]: https://joinmastodon.org/sponsors
[patreon]: https://patreon.com/mastodon

### Resources

- [Full changelog](https://github.com/tootsuite/mastodon/releases/tag/v2.8.0)
- [User documentation](https://docs.joinmastodon.org/usage/basics/)
