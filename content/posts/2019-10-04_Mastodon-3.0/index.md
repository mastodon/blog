---
title: "Mastodon 3.0 released"
subtitle: "A short overview of some of our newest features"
date: 2019-10-04
draft: true
author: eleanor
tags:
- mastodon
- changelog
categories:
- New Features
---

It's finally here! Mastodon 3.0 is live! The team has been hard at work on making sure that this release is one of our most user-friendly yet with a number of exciting new features! Here are just a few!<!--more-->

### Stronger Anti-Harassment Tools

We're always looking for new ways to provide users and admins with the most robust and comprehensive tools to combat harassment on the fediverse. We take a lot of pride in  excelling where Twitter, Tumblr and Facebook have failed in this regard. As such we're introducing with 3.0 two powerful new features the whitelist and an option public list of blocked domains.

With the whitelist feature, it's now possible to make your instance completely private except to those other instances which you are federating with. This means that all pages in an instance are now kept behind a login page, and only those instances that you are federating with can see the content that your instance has posted! This keeps users and instances safe from stalkers, intrusive web crawlers and more. It's now possible to have a private and secure existence on the fediverse.

Additionally instance admins now have the option of making their domain blocklists public, with optional comments stating why a domain was blocked. Security on the fediverse relies in part on admins working together to enforce the standards of community that they want and this allows for the most robust way of sharing information about bad actors in the fediverse.

### An Entirely Revamped Account Migration UI

We've listened to you and completely revamped the way that account migration is handled. Now much easier than before, our new account migration UI makes moving instances significantly easier than before:

{{< figure src="image1.png" caption="Account Migration UI" >}}

With the new account migration tool your followers will be moved to your new account automatically, additionally your old account will no longer show up in searches and your old account will have limited functionality (that, of course, can be undone by re-activation of the old account). This process is much more straightforward than the previous method and we hope that it makes moving instances even easier than before!

### A More Powerful Search

Searching is now more flexible and more powerful than before. You can now search using "phrase matching" and by excluding words from a search by including a minus sign before a term. For instance, if you wanted to search for the phrase "Bernie Sanders" but didn't want to include the term "debate," you would simply search for "Bernie sanders -debate" to get to get more specific results.

### 💁 Working with Custom Emojis just got Easier! 😸

You can now add categories for your instance's custom emojis! Admins can now create custom emoji categories! No more scrolling through hundreds of custom emojis on the web UI to find that perfect way to express yourself! 🐣

### Hashtags

Mastodon now supports auto-suggestions for hashtags and shows you how many times each tag has been used in the past week! This makes it easier to see what the fediverse is talking about and what tags are most popular during the week!

{{< figure src="image2.png" caption="Hashtag Suggestion" >}}

### The Timeline's Alive, With the Sound of Music

Introducing the new and improved audio player for web UI! Sharing audio on Mastodon is now much more user-friendly!

{{< figure src="image3.png" caption="All new audio player for web UI" >}}

### Changes to the UI

Single-column mode now supports scrolling from anywhere on the page! This makes viewing the timeline easier than ever and makes mastodon even friendlier to use on laptops and touchscreens.

We've also made it so that when you choose to hide a domain all of your notifications from that domain are removed from the notifications tab! This gives each user greater control over what they wish to see and helps to hide content that may be abusive or otherwise something that users do not wish to engage in.

Additionally we've introduced slow-mode in preferences. This disables live-streaming on the timeline and instead tells users how many new toots there are with a link that manually refreshes the timeline. If you follow a lot of users, or if you simply find the live timeline to be overwhelming this allows you to choose when to see the newest toots!

{{< figure src="image4.png" caption="Slow Mode Options" >}}

{{< figure src="image5.png" caption="Slow Mode in Action">}}

Finally, new users see a minimal UI and are able to change their email address before their account is approved!

### OStatus is deprecated

Mastodon will not longer support OStatus. For most users this means that there will be no change whatsoever. For users of GNUSocial this will mean that they will no longer be able to see Mastodon content. This will affect very few people as there are not many people who still use GNUSocial and it has not been updated in a few years—further discussion can be found on the bug tracker.

### Conclusion

The 3.0 release consists of **563 commits** by **23 contributors** since June 22, 2019. For line-by-line attributions, you can peruse the [changelog file](https://github.com/tootsuite/mastodon/blob/v3.0.0/CHANGELOG.md), and for a historically complete list of contributors and translators, you can refer to the [authors file](https://github.com/tootsuite/mastodon/blob/v3.0.0/AUTHORS.md), both included in the release.

**Contributors to this release:** [abcang](https://github.com/abcang), [ahangarha](https://github.com/ahangarha), [brortao](https://github.com/brortao), [cutls](https://github.com/cutls), [danhunsaker](https://github.com/danhunsaker), [Gargron](https://github.com/Gargron), [highemerly](https://github.com/highemerly), [hugogameiro](https://github.com/hugogameiro), [ichi-i](https://github.com/ichi-i), [Kjwon15](https://github.com/Kjwon15), [koyuawsmbrtn](https://github.com/koyuawsmbrtn), [madmath03](https://github.com/madmath03), [mayaeh](https://github.com/mayaeh), [noellabo](https://github.com/noellabo), [nzws](https://github.com/nzws), [Shleeble](https://github.com/Shleeble), [ThibG](https://github.com/ThibG), [trwnh](https://github.com/trwnh), [tsia](https://github.com/tsia), [umonaca](https://github.com/umonaca), [ykzts](https://github.com/ykzts), [zunda](https://github.com/zunda)

**Translators for this release:** 101010, Abijeet Patro, Aditoo17, Adrián Lattes, Akarshan Biswas, Alessandro Levati, Alix Rossi, Andrea Lo Iacono, Anunnakey, ariasuni, atarashiako, AW Unad, Benjamin Cobb, borys\_sh, ButterflyOfFire, carolinagiorno, Ch., christalleras, Cutls, cybergene, d5Ziif3K, Daniel Dimitrov, Dewi, diazepan, Diluns, dragnucs2, Dremski, dxwc, eichkat3r, Emyn Nant Nefydd, EPEMA YT, erikstl, Evert Prants, Evgeny Petrov, filippodb, frumble, FédiQuébec, Hinaloe, hiphipvargas, Hugh Liu, hussama, Jack R, JackXu, Jaz-Michael King, Jeong Arm, Jeroen, Johan Schiff, Juan José Salvador Piedra, juanda097, JzshAC, Karol Kosek, kat, KEINOS, koyu, Kristijan Tkalec, lamnatos, liffon, Lukas Fülling, MadeInSteak, Marcepanek\_, Marcin Mikołajczak, Marek Ľach, Masoud Abkenar, Maya Minatsuki, mmokhi, Muha Aliss, Oguz Ersen, OpenAlgeria, Osoitz, oti4500, oɹʇuʞ, PPNplus, Rakino, Ramdziana F Y, Ray, Renato "Lond" Cerqueira, Rhys Harrison, Rikard Linde, Rintan1, Roboron, ruine, Ryo, sabri, Saederup92, Sahak Petrosyan, SamitiMed, Sasha Sorokin, sergioaraujo1, SHeija, shioko, silkevicious, skaaarrr, SnDer, Sokratis Alichanidis, spla, Stasiek Michalski, taoxvx, tctovsli, Thai Localization, Tiago Epifânio, Tradjincal, tykayn, umelard, Unmual, Vanege, vjasiegd, waweic, Xosé M., Yi-Jyun Pan, Zoltán Gera, Zoé Bőle, さっかりんにーさん, 唐宗勛, 森の子リスのミーコの大冒険, 硫酸鶏

As always, huge thanks to everyone who contributed to this release, to [everyone who sponsors the project][sponsors] on [Patreon][patreon], and to everyone who uses the network! 🐘

[sponsors]: https://joinmastodon.org/sponsors
[patreon]: https://patreon.com/mastodon

Happy tooting!
