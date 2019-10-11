---
title: "Mastodon 3.0"
subtitle: "A short overview of some of our newest features"
description: "In this exciting new release: Moving accounts, trending hashtags, private servers and more!"
date: 2019-10-11
draft: false
author: eleanor
tags:
- mastodon
- changelog
categories:
- New Features
resources:
- name: hero
  src: hero.png
---

It's finally here! Mastodon 3.0 is live! The team has been hard at work on making sure that this release is one of our most user-friendly yet with some exciting new features! Here are just a few:

### Stronger anti-harassment tools

We're always looking for new ways to provide users and admins with the most robust and comprehensive tools to combat harassment on the fediverse. We take a lot of pride in excelling where Twitter, Tumblr and Facebook have continuously failed in this regard. As such 3.0 introduces some powerful new features: whitelist mode, and an optional public list of blocked domains.

With the whitelist feature it's now possible for **private, semi-private, and secured networks** to be deployed. Want to deploy mastodon for educational institutions, networked between a couple schools? Or do you want to build a secured, user-first network within the fediverse itself? The choice is yours. This protects servers and their users from stalkers, intrusive web crawlers, and other malign agents by creating the tightest security on a server yet.

Additionally, server admins now have the **option of making their domain blocklists public**, with optional comments clarifying why a domain was blocked. Security on the fediverse relies in part on admins working together to enforce safe community standards, and this allows for the most robust way of sharing information about bad actors in the fediverse. We want you to not just see who was blocked, but why. Transparency lets you see how yours, and other, servers are being run, so you can make informed decisions.

### Moving accounts

You spoke, we listened! Here is the completely revamped account migration system! Easier than ever, and with 3.0 comes the **ability to bring your followers with you like magic**! Point the old account to the new one, and the new one to the old one, using the new interface, and your followers will be transferred over!

{{< figure src="migration.png" caption="Moving followers to another account" >}}

Additionally, your old account will no longer show up in searches and will have limited functionality (that, of course, can be undone by re-activating it). This process is streamlined and straightforward, and we hope that it makes moving between servers even easier than before!

### A more powerful search

Searching is now more flexible and more powerful than before. **You can now search using "phrase matching" and by excluding words from a search by including a minus sign before a term**. For example: if you wanted to search for Cute Doggos (I know what you like) but didn't want to include cats, you’d just search for `cute doggos -cat` to get to get those puppies.

### 💁 Working with custom emojis just got easier! 😸

**Admins can now create custom emoji categories**! No more worrying about having too many, or thinking ‘oh jeez now I have 40 thounking emojo, where will I put them??’ No more scrolling through hundreds of custom emojis on the web UI to find that perfect way to express yourself! 🐣 Categories! They’re here!

{{< figure src="categories.png" caption="Custom custom emojis categories" >}}

### Goodbye OStatus; You’ve been deprecated!

**Mastodon will no longer support OStatus**. For most users this means that there will be no change whatsoever. For the extremely slim margin of people this affects, please refer to the discussion on the bug tracker to see how we got here. We’re a 100% ActivityPub household now!

### The hashiest hashtags

3.0 brings support for **auto-suggestions for hashtags** and shows you how many times each tag has been used in the past week! This makes it easier to see what the fediverse is talking about and what tags are most popular during the week!

{{< figure src="autocomplete.png" caption="Hashtag auto-suggestions" >}}

Even better, you can see **trending hashtags** now, making it easy to follow along with current events and the lightning-fast world of memes on the fediverse. Hashtag trends aren’t blind though; they’re reviewed by your admin to ensure they aren’t being gamed as a vector for abuse. Trust your admin? Use those hashtags!

{{< figure src="trends.png" caption="Trending hashtags" >}}

### The timeline's alive, with the sound of music

We thought the old media player was pretty disappointing, so we did something about it! Introducing the **new and improved audio player** for web UI! Sharing audio on Mastodon is now much more user-friendly, with a vastly improved experience over the old player.

{{< figure src="audio.png" caption="All new audio player for web UI" >}}

### Changes to the UI

Single-column mode now supports **scrolling from anywhere on the page**! This makes viewing the timeline easier than ever and makes mastodon even friendlier to use on laptops and touchscreens.

**Slow mode**! It’s a slower mode! Pop into the preferences pane and toggle this mode to disable livestreaming in the timeline. Instead, you’ll see a manual link to refresh the feed, with a counter letting you know how many new toots there are for you to catch up on. Having a lot of followers doesn’t mean you aren’t able to keep up anymore: stay in the loop with slow mode!

Lastly, new users see a **minimal UI** and can change their email address before their account is acivated! Less worrying about typos in the sign-up phase just makes it easier for new friends to join, which is good news for everyone!

### Conclusion

The 3.0 release consists of **563 commits** by **23 contributors** since June 22, 2019. For line-by-line attributions, you can peruse the [changelog file](https://github.com/tootsuite/mastodon/blob/v3.0.0/CHANGELOG.md), and for a historically complete list of contributors and translators, you can refer to the [authors file](https://github.com/tootsuite/mastodon/blob/v3.0.0/AUTHORS.md), both included in the release.

**Contributors to this release:** [abcang](https://github.com/abcang), [ahangarha](https://github.com/ahangarha), [brortao](https://github.com/brortao), [cutls](https://github.com/cutls), [danhunsaker](https://github.com/danhunsaker), [Gargron](https://github.com/Gargron), [highemerly](https://github.com/highemerly), [hugogameiro](https://github.com/hugogameiro), [ichi-i](https://github.com/ichi-i), [Kjwon15](https://github.com/Kjwon15), [koyuawsmbrtn](https://github.com/koyuawsmbrtn), [madmath03](https://github.com/madmath03), [mayaeh](https://github.com/mayaeh), [noellabo](https://github.com/noellabo), [nzws](https://github.com/nzws), [Shleeble](https://github.com/Shleeble), [ThibG](https://github.com/ThibG), [trwnh](https://github.com/trwnh), [tsia](https://github.com/tsia), [umonaca](https://github.com/umonaca), [ykzts](https://github.com/ykzts), [zunda](https://github.com/zunda)

**Translators for this release:** 101010, Abijeet Patro, Aditoo17, Adrián Lattes, Akarshan Biswas, Alessandro Levati, Alix Rossi, Andrea Lo Iacono, Anunnakey, ariasuni, atarashiako, AW Unad, Benjamin Cobb, borys\_sh, ButterflyOfFire, carolinagiorno, Ch., christalleras, Cutls, cybergene, d5Ziif3K, Daniel Dimitrov, Dewi, diazepan, Diluns, dragnucs2, Dremski, dxwc, eichkat3r, Emyn Nant Nefydd, EPEMA YT, erikstl, Evert Prants, Evgeny Petrov, filippodb, frumble, FédiQuébec, Hinaloe, hiphipvargas, Hugh Liu, hussama, Jack R, JackXu, Jaz-Michael King, Jeong Arm, Jeroen, Johan Schiff, Juan José Salvador Piedra, juanda097, JzshAC, Karol Kosek, kat, KEINOS, koyu, Kristijan Tkalec, lamnatos, liffon, Lukas Fülling, MadeInSteak, Marcepanek\_, Marcin Mikołajczak, Marek Ľach, Masoud Abkenar, Maya Minatsuki, mmokhi, Muha Aliss, Oguz Ersen, OpenAlgeria, Osoitz, oti4500, oɹʇuʞ, PPNplus, Rakino, Ramdziana F Y, Ray, Renato "Lond" Cerqueira, Rhys Harrison, Rikard Linde, Rintan1, Roboron, ruine, Ryo, sabri, Saederup92, Sahak Petrosyan, SamitiMed, Sasha Sorokin, sergioaraujo1, SHeija, shioko, silkevicious, skaaarrr, SnDer, Sokratis Alichanidis, spla, Stasiek Michalski, taoxvx, tctovsli, Thai Localization, Tiago Epifânio, Tradjincal, tykayn, umelard, Unmual, Vanege, vjasiegd, waweic, Xosé M., Yi-Jyun Pan, Zoltán Gera, Zoé Bőle, さっかりんにーさん, 唐宗勛, 森の子リスのミーコの大冒険, 硫酸鶏

As always, huge thanks to everyone who contributed to this release, to [everyone who sponsors the project][sponsors] on [Patreon][patreon], and to everyone who uses the network! 🐘

[sponsors]: https://joinmastodon.org/sponsors
[patreon]: https://patreon.com/mastodon

Happy tooting!
