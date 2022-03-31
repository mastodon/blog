---
title: "Mastodon 3.5"
subtitle: "What's new"
description: "A brand new explore page, post editing, and new moderation features are just some of the additions in this new release of Mastodon!"
date: 2022-03-30
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

Work on multiple features in this release has been kindly sponsored by the German Federal Ministry of Education and Research through the [Prototype Fund][prototype-fund].

We've added one of the most requested functions among our competitors, the ability to **edit posts**. Since older Mastodon versions would not understand the edits, the function is disabled in the web app until more Mastodon servers upgrade to 3.5, but all parts are already included in the release. The original and previous versions of the posts are saved and remain accessible through a history view. And people who have previously shared the post get notified about any edits, so they can un-share if there's foul play.

Coincidentally, the order of media attachments in a post is no longer dependent on the order in which they were uploaded.

Discoverability has always been a hot topic on Mastodon. Discoverability makes or breaks a platform, as there is nothing more important to retain a new user than to let them find something interesting to stay for, as soon as possible. In 3.5, we bring a new **explore page** which features currently popular posts, news stories that people share a lot, trending hashtags and follow recommendations. Furthermore, for the first time, we attempt to bring people content in their own language.

As we value safety, these new features come with their own moderation tools--nothing will show up in trends unless reviewed by one of the server's moderators first.

A **new, multi-step report flow** improves the quality of information for moderators and highlights available self-help tools in Mastodon to the user.

On the topic of moderation, any action taken by a server moderator against a user's account, such as deleting their posts or suspending the account, will now **be viewable through account settings**, by default accompanied by an e-mail notification, and permit the user to **submit an appeal**. Since actions such as deleting posts or marking posts as sensitive did not use to generate any kind of notification, this should make them more viable precursors to harsher punishments like suspensions; and being able to handle appeals within Mastodon should reduce the burden of out-of-band e-mail communication for moderators and increase user trust in Mastodon.

There is a brand new **moderation dashboard** that shows the development of various key metrics over time and shines some light on where new users come from, which languages they speak, and how many of them stay active months later. A completely **new look for the report screen** reduces the time and effort required to handle reports, and multiple selections on the accounts page offer a way to **clean up spam and bot accounts in large batches**.

### Conclusion

The 3.5 release consists of **887 commits** by **23 contributors** between June 3, 2021 and March 30, 2022. For line-by-line attributions, you can peruse the [changelog file][changelog], and for a historically complete list of contributors and translators, you can refer to the [authors file][authors], both included in the release.

**Contributors to this release**: Gargron, ClearlyClaire, tribela, noiob, mayaeh, mashirozx, noellabo, baby-gnu, MitarashiDango, chandrn7, Brawaru, aquarla, zunda, rgroothuijsen, ykzts, HolgerHuo, helloworldstack, r0hanSH, kgtkr, heguro, matildepark, weex, truongnmt

**Translators for this release**: Kristaps_M, Cyax, Sveinn í Felli, Kimmo Kujansuu, Jeong Arm, xatier, Thai Localization, spla, NCAA, Emanuel Pina, GunChleoc, Xosé M., Hồ Nhất Duy, T. E. Kalaycı, ケインツロ space_invader, e, Jeff Huang, Besnik_b, Nurul Azeera Hidayah @ Muhammad Nur Hidayat Yasuyoshi, koyu, Ramdziana F Y, calypsoopenmail, Alessandro Levati, Bran_Ruz, Tigran, Allen Zhong, Daniele Lira Mereb, Zoltán Gera, Martin, Gearguy, Marek Ľach, Eshagh, Asier Iturralde Sarasola, Takeçi, Roboron, Ihor Hordiichuk, xpil, Tagomago, Rojdayek, Ondřej Pokorný, Kristoffer Grundström, Alexander Sorokin, Joene, ButterflyOfFire, Balázs Meskó, Catalina, Manuel Viens, LNDDYL, Danial Behzadi, Vik, GCardo, enolp, NadieAishi, Just Spanish, bilfri, VaiTon, Frontier Translation Ltd., Mastodon 中文译者, rondnunes, Edward Navarro, ClearlyClaire, Kahina Mess, GiorgioHerbie, ManeraKai, හෙළබස, retiolus, stan ionut, Filbert Salim, ahangarha, Rex_sa, Sokratis Alichanidis, axi, Delta, Ali Demirtaş, Michael Zeevi, SarfarazAhmed, Mo_der Steven, Remito, Maya Minatsuki, Врабац, Dženan, FreddyG, Alix Rossi, cruz2020, Adrián Graña, vpei, Ryo, AlexKoala, 1Alino, Michał Sidor, Vedran Serbu, Yi-Jyun Pan, Y.Yamashiro, al_.\_, Matthías Páll Gissurarson, KcKcZi, xsml, cybergene, mynameismonkey, Rikard Linde, strubbl, 北䑓如法, Hexandcube, abidin toumi, serapolis, Diluns, 游荡, megaleo, arielcostas3, sanser, Imre Kristoffer Eilertsen, Yamagishi Kazutoshi, MODcraft, Marcus Myge, Yuval Nehemia, Amir Reza, Percy, Marek Ľach, Nemuj, revarioba, Oymate, Ifnuth, 森の子リスのミーコの大冒険, Algustionesa Yoshi, Artem Mikhalitsin, gnu-ewm, Tatsuto "Laminne" Yamamoto, filippodb, Maciej Błędkowski, tunisiano187, Timur Seber, Mélanie Chauvel, Jona, Ka2n, atriix, eorn, Lagash, Chine Sebastien, Exbu, A A, Goudarz Jafari, Cirelli, ギャラ, siamano, Siddharastro Doraku, asnomgtu, Saederup92, damascene, dbeaver, Overflow Cat, rikrise, zordsdavini, ThonyVezbe, Slimane Selyan AMIRI, coxde, Maxine B. Vågnes, tzium, Umi, Youngeon Lee, Nikita Epifanov, DAI JIE, X.M, ZQYD, v4vachan, boni777, Rhys Harrison, Stanisław Jelnicki, iVampireSP, nua_kr, SteinarK, Paula SIMON, CloudSet, Adam Sapiński, Zlr-, papayaisnotafood, Linnéa, Parodper, César Daniel Cavanzo Quintero, Artem, EzigboOmenana, Mt Front, mkljczk, Lalo Tafolla, Yassine Aït-El-Mouden, frumble, ronee, lokalisoija, Jason Gibson, María José Vera, codl, Tangcuyu, Lilian Nabati, Kaede, mawoka-myblock, Mohd Bilal, Ragnars Eggerts, thisdudeisvegan, liffon, Holger Huo, Pukima, HSD Channel, pullopen, hud5634j, Patrice Boivin, Jill H., maksutheam, majorblazr, 江尚寒, Balázs Meskó, soheilkhanalipur, Vanege

**Thank you** to everyone who contributed to this release, to [everyone who sponsors the project][sponsors] through [Patreon][patreon] or through [our new sponsors portal][sponsors-portal], and to everyone who uses the network! 🐘

[prototype-fund]: https://prototypefund.de "01IS21S29"
[sponsors]: https://joinmastodon.org/sponsors
[patreon]: https://patreon.com/mastodon
[sponsors-portal]: https://sponsor.joinmastodon.org
[changelog]: https://github.com/mastodon/mastodon/blob/v3.5.0/CHANGELOG.md
[authors]: https://github.com/mastodon/mastodon/blob/v3.5.0/AUTHORS.md

{{< figure src="ios.png" caption="Mastodon for iOS" >}}

**P.S.** We just released a new version of our [official iOS app][ios], adding iPad support and many visual improvements, and just started [beta-testing our official Android app][android-beta] with our Patreon supporters.

[ios]: https://apps.apple.com/us/app/mastodon-for-iphone/id1571998974
[android-beta]: https://www.patreon.com/posts/mastodon-for-64413994
