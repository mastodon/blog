---
title: "Mastodon 3.3"
subtitle: "What's new"
date: 2021-01-29
draft: false
author: gargron
tags:
- mastodon
- changelog
categories:
- New Features
resources:
- name: hero
  src: modal.png
---

It's Mastodon 3.3 time 🎉 We've got security fixes, performance fixes, new moderation tools and quality of life features!<!--more-->

### Reversible suspensions

The main change in this release of Mastodon is **our approach to suspensions**. Previously, suspending an account deleted all of its associated data immediately, so while an account could be unsuspended technically, the person would have to start completely from scratch. Of course, that wasn't ideal -- everybody makes mistakes. Now, the data is kept for 30 days after suspension, giving a long enough time window to correct mistakes or talk through appeals. The suspended person also gets the ability to download an archive of their account, which was not possible before. If there is a need to delete the data immediately, the option is still there for moderators.

But that's not all: Whereas previously suspended accounts would not show up in the app at all, now, as long as they're recoverable, they do show up and more clealy communicate that they're in a suspended state. **As Mastodon matures and grows, we're striving for more transparency and fail-safety around moderation.**

### IP blocks

Another missing piece has been added to Mastodon's moderation toolbox -- **the ability to control access from specific IP addresses or subnets**. As a response to a troll making alternative accounts to evade suspensions or a bot farm creating spam accounts, server administrators can now either fully block access from an IP or send new accounts through the approval queue while letting everyone else sign-up normally.

{{< figure src="ip-rules.png" caption="Creating a new IP rule from the admin interface" >}}

### Performance improvements

The release includes **multiple performance optimizations** both on the server-side and on the client-side. On the client-side, lag caused by typing up a new post should be if not completely removed, vastly reduced, and all live updates from the Streaming API now come through a single connection no matter how many different columns you have open, one or thirty. Requests for an account's media tab, your favourites, bookmarks, or hashtags should be much faster. Operations involving deleting an account's data are up to 100x faster, reducing delays in the system, and so on.

### "Bell button"

{{< figure src="bell.png" caption="Bell button on the Ruby developer's profile" >}}

Are you following an account that only posts once in a blue moon? And it would almost certainly be drowned out in an otherwise active home feed? Perhaps an artist that only posts new artwork, or a bot that posts weather warnings for your area -- **now you can choose to be notified when a person you follow makes a new post by toggling the bell button on their profile**.

### Pop-out media player

{{< figure src="popout.gif" caption="Continue watching or listening as you browse" >}}

As for media, if you scroll away from an audio or video while it's still playing, **the playback will continue in the corner of your screen with convenient buttons to reply, boost, or favourite the post it's from**. You can also finally use **familiar hotkeys to control audio and video playback** -- space to toggle playback, "m" to mute, "j" and "l" to jump backward and forward, and a few others. And finally, **media modals got a facelift**, now using the average color from the picture for the page overlay and always showing interactive buttons for the post underneath.

### Conclusion

The 3.3 release consists of **619 commits** by **21 contributors** since July 27, 2020. For line-by-line attributions, you can peruse the [changelog file](https://github.com/tootsuite/mastodon/blob/v3.3.0/CHANGELOG.md), and for a historically complete list of contributors and translators, you can refer to the [authors file](https://github.com/tootsuite/mastodon/blob/v3.3.0/AUTHORS.md), both included in the release.

**Contributors to this release:** [Gargron](https://github.com/Gargron), [mashirozx](https://github.com/mashirozx), [ThibG](https://github.com/ThibG), [noellabo](https://github.com/noellabo), [aquarla](https://github.com/aquarla), [trwnh](https://github.com/trwnh), [nornagon](https://github.com/nornagon), [joshleeb](https://github.com/joshleeb), [mkljczk](https://github.com/mkljczk), [santiagorodriguez96](https://github.com/santiagorodriguez96), [jiikko](https://github.com/jiikko), [ykzts](https://github.com/ykzts), [tateisu](https://github.com/tateisu), [uist1idrju3i](https://github.com/uist1idrju3i), [mfmfuyu](https://github.com/mfmfuyu), [zunda](https://github.com/zunda), [dunn](https://github.com/dunn)

**Translators for this release:** qezwan, adrmzz, yeft, Koala Yeung, tzium, kamee, Ali Demirtaş, Jurica, Ramdziana F Y, Alix Rossi, gagik_, Hồ Nhất Duy, ᏦᏁᎢᎵᏫ mask, Xosé M., xatier, otrapersona, Sveinn í Felli, Zoltán Gera, Rafael H L Moretti, Floxu, spla, Besnik_b, Emanuel Pina, Saederup92, Jeroen, Jeong Arm, Alessandro Levati, Thai Localization, Marcin Mikołajczak, tolstoevsky, vishnuvaratharajan, Maya Minatsuki, dkdarshan760, Roboron, Danial Behzadi, Imre Kristoffer Eilertsen, Coelacanthus, syncopams, FédiQuébec, koyu, Diluns, ariasuni, Hakim Oubouali, Hayk Khachatryan, v4vachan, Denys, Akarshan Biswas, 奈卜拉, Liboide, cybergene, strubbl, StanleyFrew, Ryo, Sokratis Alichanidis, Rachida S., lamnatos, Tigran, atriix, antonyho, Em St Cenydd, Pukima, Aryamik Sharma, phena109, ahangarha, Isaac Huang, igordrozniak, Allen Zhong, coxde, Rasmus Lindroth, liffon, fragola, Sasha Sorokin, bobchao, twpenguin, ThonyVezbe, Esther, Tagomago, Balázs Meskó, Gopal Sharma, Tofiq Abdula, subram, Ptrcmd, arshat, Scvoet, hiroTS, johne32rus23, Hexandcube, Neo_Chen, Aswin C, Ryan Ho, GiorgioHerbie, Willia, clarmin b8, Hernik, Rikard Linde, Wrya ali, Goudarz Jafari, Pukima, Jeff Huang, Timo Tijhof, Yamagishi Kazutoshi, AlexKoala, Rekan Adl, ButterflyOfFire, Sherwan Othman, Yassine Aït-El-Mouden, Fei Yang, Hougo, Vanege, TracyJacks, mecqor labi, Selyan Slimane AMIRI, norayr, Marek Ľach, mkljczk, marzuquccen, Yi-Jyun Pan, Gargron, dadosch, Orlando Murcio, Ильзира Рахматуллина, shdy, Yogesh K S, Antara2Cinta, Pixelcode, Hinaloe, alnd hezh, Clash Clans, Sébastien Feugère, k_taka, enolp, jmontane, Hallo Abdullah, Kahina Mess, Reg3xp, さっかりんにーさん, Rhys Harrison, GatoOscuro, pullopen, CyberAmoeba, 夜楓Yoka, Xurxo Guerra, Apple, mashirozx, ÀŘǾŚ PÀŚĦÀÍ, filippodb, abidin toumi, tykayn, xpac1985, Ozai, diorama, dashty, Salh_haji6, Ranj A Abdulqadir, Amir Kurdo, Baban Abdulrahman, dobrado, 于晚霞, Hannah, Savarín Electrográfico Marmota Intergalactica, Jari Ronkainen, SamOak, dcapillae, umonaca, ThibG

**Thank you** to everyone who contributed to this release, to [everyone who sponsors the project][sponsors] through [Patreon][patreon] or through [our new sponsors portal][sponsors-portal], and to everyone who uses the network! 🐘

[sponsors]: https://joinmastodon.org/sponsors
[patreon]: https://patreon.com/mastodon
[sponsors-portal]: https://sponsor.joinmastodon.org
