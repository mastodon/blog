---
title: "Mastodon 3.2"
subtitle: "A look inside"
date: 2020-08-02
draft: false
author: gargron
tags:
- mastodon
- changelog
categories:
- New Features
resources:
- name: hero
  src: hero.png
---

The new Mastodon release brings you a much better audio player and improved support for different audio and video formats, as well as some additional security mechanisms.<!-- more -->

The **audio player has been completely reworked** to have a more eye-catching design. It will extract album art from the uploaded audio file automatically, or allow you to upload a thumbnail of your own choosing to be displayed in the center. Dominant colors from the artwork or thumbnail will then be used to give the player a unique look.

Whereas previously video thumbnails were automatically taken from the first frame of the video, you now also have the ability to **upload a custom thumbnail that will be displayed before the video starts playing**. Simply click on "Edit" on a newly uploaded media file and then choose a new thumbnail!

{{< figure src="embed.gif" caption="Mastodon audio showing up on Twitter" >}}

When you share links to video or audio on Mastodon on other platforms, for example Twitter, your friends will be able to **open Mastodon's video or audio player right on that platform** (assuming the platform supports the `twitter:player` tag).

To better protect your accounts when you're not there, there's a **new security mechanism guarding new login attempts**. When you don't have two-factor authentication setup, have been away for at least two weeks, and someone tries to login to your account from a previously unseen IP address, they will be required to enter a token sent to your e-mail address.

It's a feature more meant to guard those who forget to setup two-factor authentication, so if you are reading this, remember that it's good practice to use two-factor authentication (Mastodon's does not require a phone number or a Mastodon app, any TOTP app works), and to use a password manager to generate random and unique passwords for each account you have!

{{< figure src="notes.gif" caption="Adding a personal note" >}}

Have you ever blocked or muted someone but forgot why? Or have you followed someone but then forgot who they are? Now you can add **personal notes** to other accounts to keep track of who's who. Visible only to you!

### Conclusion

The 3.2 release consists of **380 commits** by **27 contributors** since May 14, 2020. For line-by-line attributions, you can peruse the [changelog file](https://github.com/tootsuite/mastodon/blob/v3.2.0/CHANGELOG.md), and for a historically complete list of contributors and translators, you can refer to the [authors file](https://github.com/tootsuite/mastodon/blob/v3.2.0/AUTHORS.md), both included in the release.

**Contributors to this release:** [OmmyZhang](https://github.com/OmmyZhang), [ThibG](https://github.com/ThibG), [Gargron](https://github.com/Gargron), [noellabo](https://github.com/noellabo), [Sasha-Sorokin](https://github.com/Sasha-Sorokin), [dunn](https://github.com/dunn), [highemerly](https://github.com/highemerly), [tateisu](https://github.com/tateisu), [ariasuni](https://github.com/ariasuni), [bclindner](https://github.com/bclindner), [cchoi12](https://github.com/cchoi12), [leo60228](https://github.com/leo60228), [mfmfuyu](https://github.com/mfmfuyu), [mayaeh](https://github.com/mayaeh), [lfuelling](https://github.com/lfuelling), [ykzts](https://github.com/ykzts), [angristan](https://github.com/angristan), [BenLubar](https://github.com/BenLubar), [trwnh](https://github.com/trwnh), [arielrodrigues](https://github.com/arielrodrigues)

**Translators for this release:** Duy, stan ionut, Besnik_b, Emanuel Pina, regulartranslator, ButterflyOfFire, adrmzz, FédiQuébec, GiorgioHerbie, Marcin Mikołajczak, ariasuni, Thai Localization, 奈卜拉, Mentor Gashi, Xosé M., axi, Selyan Slimane AMIRI, Alix Rossi, Jeroen, SteinarK, ThonyVezbe, Hrach Mkrtchyan, Gwenn, ᏦᏁᎢᎵᏫ mask, Danial Behzadi, spla, Rafael H L Moretti, Jeong Arm, koyu, Yi-Jyun Pan, norayr, Alessandro Levati, Sasha Sorokin, gagik_, lamnatos, Sveinn í Felli, Zoltán Gera, cybergene, Tagomago, Michal Stanke, borys_sh, Ramdziana F Y, Osoitz, Maya Minatsuki, Willia, BurekzFinezt, Evert Prants, ThibG, Dewi, Emyn-Russell Nt Nefydd, vishnuvaratharajan, tolstoevsky, Diluns, Falling Snowdin, Marek Ľach, Balázs Meskó, Ryo, Roboron, StanleyFrew, PPNplus, Heimen Stoffels, Andrew, Iváns, Carlos Solís, Sokratis Alichanidis, TS, SensDeViata, AzureNya, OctolinGamer, 北䑓如法, Laura, Imre Kristoffer Eilertsen, Rikard Linde, Ali Demirtaş, diorama, Daniele Lira Mereb, Goudarz Jafari, psymyn, v4vachan, Sebastián Andil, Khóo, ZiriSut, strubbl, Reg3xp, AlexKoala, VSx86, Mo_der Steven, musix, ギャラ, Saederup92, mynameismonkey, omquylzu, Miro Rauhala, 硫酸鶏, siamano, Viorel-Cătălin Răpițeanu, Pachara Chantawong, Balázs Meskó, Steven Tappert, Unmual, Zijian Zhao, Skew, enolp, Yann Aguettaz, Mick Onio, r3dsp1, Tianqi Zhang, piupiupiudiu, Padraic Calpin, るいーね, Belkacem Mohammed, Miquel Sabaté Solà, serubeena, Solid Rhino, Rintan, 林水溶, Tagada, shafouz, Tom_, OminousCry, ALEM FARID, Nathaël Noguès, Robin van der Vliet, twpenguin, Paz Galindo, 夜楓Yoka, mkljczk, kiwi0, Esther, Renato "Lond" Cerqueira, igordrozniak, Philipp Fischbeck, GaggiX, Allen Zhong, Albatroz Jeremias, Nocta, pezcurrel, Aditoo17, 森の子リスのミーコの大冒険, Doug, Fleva

As always, huge thanks to everyone who contributed to this release, to [everyone who sponsors the project][sponsors] on [Patreon][patreon], and to everyone who uses the network! 🐘

[sponsors]: https://joinmastodon.org/sponsors
[patreon]: https://patreon.com/mastodon

Happy tooting!
