---
title: "Mastodon 3.2"
subtitle: "Spojrzenie wgłąb"
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

Nowe wydanie Mastodona wprowadza zdecydowanie lepszy odtwarzacz audio, usprawnioną obsługę różnorodnych formatów audio i wideo, a także dodatkowe mechanizmy zabezpieczcające.<!-- more -->

***

Ten wpis jest tłumaczeniem wpisu pt. [Mastodon 3.2 – A look inside]({{< relref path="2020-08-02_Mastodon-3.2/index.md" lang="en" >}}). Proszę o zgłaszanie [mi](https://mstdn.io/@mkljczk) uwag dotyczących tłumaczenia, jeżeli takie wystąpią.

***

**Całkowicie na nowo opracowano odtwarzacz dźwięku**, aby otrzymał bardziej przyciągający wzrok wygląd. Automatycznie wydobywa on obraz albumu z pliku, lub pozwala na wybów wyświetlanej po środku miniatury. Dominujący kolor z tej grafiki jest wykorzysytwany aby nadać odtwarzaczowi wyróżniający się wygląd.

Tak jak poprzednio miniatury filmów były automatycznie oparte o pierwszą klatkę filmu, teraz możesz **wysłać własną miniaturę, która będzie wyświetlana przed odtworzeniem filmu**. Po prostu naciśnij „Edytuj” na nowo wysłanym medium i wybierz nową miniaturę!

{{< figure src="embed.gif" caption="Plik dźwiękowy z Mastodona wyświetlany na Twtterze" >}}

Jeżeli dzielisz się linkami do filmów lub dźwięku z Mastodona na innych platformach, np. na Twitterze, twoi znajaomi będą mogli **otworzyć odtwarzacz mediów Mastodona bezpośrednio z tej platformy** (zakładadjąc że platforma obsługuje tag `twitter:player`).

Aby lepiej zabezpieczać konta gdy nie korzystasz z nich, powstał **nowy mechanizm zabezpieczający próby logowania**. Jeżeli nie skonfigurowałeś(-aś) uwierytelniania dwustopniowego, nie byłeś(-aś) obecny(-a) przez przynajmniej dwa tygodnie, a ktoś spróbuje zalogować się z wcześniej nieznanego adres IP, otrzymasz prośbę o wysłanie tokenu wysłanego na Twój adres e-mail.

Ta funkcja jest przeznaczona dla osób które zapomniały skonfigurować uwierzytelnianie dwuetapowe. Jeśli to czytasz, pamiętaj że wzorową praktyką jest korzystanie z 2FA (Mastodon nnie wymaaga podana numeru telefonu ani aplikacji Mastodona, każda aplikacja TOTP działa) i używania menedżera haseł, aby tworzyć losowe i unikatowe hasła dla każdego posiadanego konta!

{{< figure src="notes.gif" caption="Dodawanie osobistej notatki" >}}

Zdarzyło ci się zablokować lub wyciszyć kogoś i zapomnieć, dlaczego to zrobiłeś(-aś)? A może zaobserwowałeś(-aś) sporo osób i nie pamiętasz kim oni są? Teraz możesz dodać **osobiste notatki** do innych kont, aby pamiętać kto jest kim. Widoczne tylko dla ciebie!

### Podsumowanie
Na wydanie 3.2 składa się **380 commitów** od **27 autorów** od 14 maja 2020. Aby dowiedzieć się kto odpowiada za konkretną zmianę, możesz przejrzeć [plik changelogu](https://github.com/tootsuite/mastodon/blob/v3.2.0/CHANGELOG.md), a dla kompletnej i listy wkładu i tłumaczeń możesz skorzystać z [pliku authors](https://github.com/tootsuite/mastodon/blob/v3.2.0/AUTHORS.md) (oba uwzględnione w tym wydaniu).

**Wkład w to wydanie wnieśli:** [OmmyZhang](https://github.com/OmmyZhang), [ThibG](https://github.com/ThibG), [Gargron](https://github.com/Gargron), [noellabo](https://github.com/noellabo), [Sasha-Sorokin](https://github.com/Sasha-Sorokin), [dunn](https://github.com/dunn), [highemerly](https://github.com/highemerly), [tateisu](https://github.com/tateisu), [ariasuni](https://github.com/ariasuni), [bclindner](https://github.com/bclindner), [cchoi12](https://github.com/cchoi12), [leo60228](https://github.com/leo60228), [mfmfuyu](https://github.com/mfmfuyu), [mayaeh](https://github.com/mayaeh), [lfuelling](https://github.com/lfuelling), [ykzts](https://github.com/ykzts), [angristan](https://github.com/angristan), [BenLubar](https://github.com/BenLubar), [trwnh](https://github.com/trwnh) i [arielrodrigues](https://github.com/arielrodrigues)

**Tłumacze tego wydania:** Duy, stan ionut, Besnik_b, Emanuel Pina, regulartranslator, ButterflyOfFire, adrmzz, FédiQuébec, GiorgioHerbie, Marcin Mikołajczak, ariasuni, Thai Localization, 奈卜拉, Mentor Gashi, Xosé M., axi, Selyan Slimane AMIRI, Alix Rossi, Jeroen, SteinarK, ThonyVezbe, Hrach Mkrtchyan, Gwenn, ᏦᏁᎢᎵᏫ mask, Danial Behzadi, spla, Rafael H L Moretti, Jeong Arm, koyu, Yi-Jyun Pan, norayr, Alessandro Levati, Sasha Sorokin, gagik_, lamnatos, Sveinn í Felli, Zoltán Gera, cybergene, Tagomago, Michal Stanke, borys_sh, Ramdziana F Y, Osoitz, Maya Minatsuki, Willia, BurekzFinezt, Evert Prants, ThibG, Dewi, Emyn-Russell Nt Nefydd, vishnuvaratharajan, tolstoevsky, Diluns, Falling Snowdin, Marek Ľach, Balázs Meskó, Ryo, Roboron, StanleyFrew, PPNplus, Heimen Stoffels, Andrew, Iváns, Carlos Solís, Sokratis Alichanidis, TS, SensDeViata, AzureNya, OctolinGamer, 北䑓如法, Laura, Imre Kristoffer Eilertsen, Rikard Linde, Ali Demirtaş, diorama, Daniele Lira Mereb, Goudarz Jafari, psymyn, v4vachan, Sebastián Andil, Khóo, ZiriSut, strubbl, Reg3xp, AlexKoala, VSx86, Mo_der Steven, musix, ギャラ, Saederup92, mynameismonkey, omquylzu, Miro Rauhala, 硫酸鶏, siamano, Viorel-Cătălin Răpițeanu, Pachara Chantawong, Balázs Meskó, Steven Tappert, Unmual, Zijian Zhao, Skew, enolp, Yann Aguettaz, Mick Onio, r3dsp1, Tianqi Zhang, piupiupiudiu, Padraic Calpin, るいーね, Belkacem Mohammed, Miquel Sabaté Solà, serubeena, Solid Rhino, Rintan, 林水溶, Tagada, shafouz, Tom_, OminousCry, ALEM FARID, Nathaël Noguès, Robin van der Vliet, twpenguin, Paz Galindo, 夜楓Yoka, mkljczk, kiwi0, Esther, Renato "Lond" Cerqueira, igordrozniak, Philipp Fischbeck, GaggiX, Allen Zhong, Albatroz Jeremias, Nocta, pezcurrel, Aditoo17, 森の子リスのミーコの大冒険, Doug, Fleva

Jak zawsze, chcielibyśmy podziękować każdemu kto wniósł wkład w ten projekt [każdemu kto wspiera projekt][sponsors] na [Patreonie][patreon] i każdego kto korzysta z sieci! 🐘

[sponsors]: https://joinmastodon.org/sponsors
[patreon]: https://patreon.com/mastodon

Udanego tootowania!
