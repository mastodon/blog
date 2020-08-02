---
title: Mastodon 2.7
subtitle: "Wyróżnienia z listy zmian"
description: "W tym wydaniu: nowy katalog profilów, nowy poradnik, nowa publiczna strona hashtagów i więcej narzędzi moderacyjnych"
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

Ten wpis jest tłumaczeniem wpisu [Eugena Rochko](https://mastodon.social/@Gargron) [Mastodon 2.7]({{< relref path="2019-01-19_Mastodon-2.7/index.md" lang="en" >}}). Proszę o zgłaszanie [mi](https://101010.pl/@m4sk1n) uwag dotyczących tłumaczenia, jeżeli takie wystąpią.

---

Świeże wydanie Mastodona przynosi długo oczekiwane usprawnienia możliwości poznawania treści i interfejsu administracyjnego, wraz z dużą liczbą poprawek i ulepszeń.

Wydanie 2.7 zawiera **376 commitów** od **36 współautorów** od 31 października 2018. Aby dowiedzieć się, kto dokonał danej zmiany, możesz przejrzeć [plik listy zmian][changelog], a jeżeli chcesz zobaczyć kompletną listę autorów i tłumaczy, możesz odnieść się do [pliku authors][authors]. Oba są dołączone do tego wydania.

[changelog]: https://github.com/tootsuite/mastodon/blob/v2.7.0/CHANGELOG.md
[authors]: https://github.com/tootsuite/mastodon/blob/v2.7.0/AUTHORS.md

{{< figure src="Screenshot_2019-01-19 Explore Mastodon.png" caption="Katalog profilów na mastodon.social" >}}

Jedną z nowych funkcji jest **katalog profilów** do którego możesz się zapisać. Katalog pozwala na spojrzenie na najbardziej aktywnych twórców na danym serwerze Mastodona i filtrowanie ich na podstawie hashtagów znajdujących się w ich opisach. Dzięki temu, możesz odnaleźć osoby o podobnych zainteresowań bez konieczności przeglądania publicznej osi czasu, możesz nawet znaleźć osoby warte śledzenia z innych instancji bez konieczności rejestracji i lurkowania!

{{< figure src="Screenshot_2019-01-19 Mastodon (Dev).png" caption="Poradnik wyjaśniający osie czasu" >}}

**Poradnik**, który widzą użytkownicy po rejestracji został opracowany na nowo. Od teraz, zamiast opisywać szczegóły domyślnego interfejsu, skupia się on na głównych założeniach Mastodona, na których opiera się jego interfejs. Do tego, zawiera kolorowe ilustracje. Poza tym, ładuje się teraz trochę szybciej, ponieważ nie jest oknem modalnym nachodzącym na interfejs, a ładuje się *przed* interfejsem.

{{< figure src="Screenshot_2019-01-19 catstodon.png" caption="Publiczna strona hashtagu #catstodon" >}}

**Publiczne strony hashtagów** bardziej efektywnie wykorzystują przestrzeń ekranu, układając wpisy w masonry grid, zamiast szerokiej kolumny. Publiczna strona hashtagów nie jest częścią interfejsu używanego przez zalogowanych użytkowników – jest stroną skupioną na niezarejestrowanych przeglądających.

2.7 zawiera **nowy system ostrzeżeń moderacyjnych**dla Mastodona. Poprzednio użytkownicy dowiadywali się, że ich konto zostało wyłączone lub zawieszone tylko za pośrednictwem ogólnej wiadomości o błędzie przy próbie uzyskania dostępu do konta, a teraz moderatorzy mogą poinformować użytkowników o podjętych działaniach. Nawet jeżeli nie podejmą żadnego działania, mogą oni wysłać oficjalne ostrzeżenie dostarczane wiadomością e-mail, widoczne dla inncyh moderatorów w interfejsie moderacyjnym. Moderatorzy mogą przekazać w tych wiadomościach dowolne dodatkowe informacje. Ponieważ przyczyny takich działań często są podobne, istnieje system pozwalający na zapisywanie szablonów, których mogą używać moderatorzy, zamiast ręcznego pisania takich samych wiadomości za każdym razem.

Oczywiście, ponieważ cięzko jest uogólniać, a niektórych trolli i spamboty najlepiej powstrzymać, kiedy nie wiedzą że zostały powstrzymane, ten system powiadomień może zostać wyłączony w konkretnych sytuacjach.

{{< figure src="Screenshot_2019-01-19 TheKinrar mastodon xyz - Mastodon.png" caption="Interfejs administracyjny dla zdalnych kont" >}}

Interfejs moderacyjny dla kont i instancji również został opracowany na nowo. Konta wyświetlają najważniejsze liczby w prostej do odczytania siatce. Niektóre nieprzydatne informacje zostały usunięte, a takie jak data rejestracji użytkownika lub użytkownik, który wysłał mu zaproszenie zostały dodane. W przypadku kont z innych serwerów, możesz spojrzeć na listę lokalnych użytkowników którzy je śledzą.

{{< figure src="Screenshot_2019-01-19 Federation - Mastodon.png" caption="Interfejs administracyjny dla znanych serwerów" >}}

Interfejs administracyjny dla znanych serwerów i zablokowane domeny zostały połączone w jedno miejsce. Poza wyświetlaniem liczby znanych kont z danego serwera, możesz dowiedzieć się, ile kont jest śledzonych z Twojego serwera, ile z nich śledzi Twoich użytkowników, ilu zostało zablokowanych lub zgłoszonych i ile miejsca zajmują załączniki multimedialne z tego serwera.

Twórcy aplikacji ucieszą się na wiadomość, że wydanie 2.7 wporwadziło **API dla rejestracji**. Dzięki implementacji tego API, aplikacje mogą przyjmować rejestracje od ich użytkowników, zamiast kierować ich do przeglądarki. Użytkownik który zarejestruje się przez aplikację wciąż będzie musiał otworzyć potwierdzającą wiadomość e-mail, ale będzie ona zawierała odnośnik, który będzie mógł zostać otwarty przez aplikację, a kiedy konto zostanie zaktywowane, aplikacja będzie już uwierzytelniona i gotowa do działania.

Narzędzie wiersza poleceń przeznaczone do zarządzania serwerem Mastodona – `tootctl` (wymawiane „toot control”) otrzymało kilka nowych poleceń. Od czasu powstania Mastodona, niektórzy utworzyli strony zbierające statystyki dotyczące znanych im serwerów Msatodona, oczywiście, te liczby zawsze będą się trochę różniły i ciężko jest określić, w jaki sposób są zbierane. Od teraz, możesz skanować sieć Mastodona z własnego urządzenia aby poznawać serwery i zbierać statystyki dot. korzystania z Mastodona używając polecenia `tootctl domains crawl`.

Po uruchomieniu tego polecenia na własnym urządzeniu, uzyskałem następujące liczby: **2251** aktywnych serwerów Mastodona, **1,882,838** zarejestrowanych użytkowników, **172,041** aktywnych użytkowników i **21,537** nowych rejestracji w pierwszym tygodniu stycznia 2019.

Kolejnym nowym poleceniem jest `tootctl accounts follow`, dzięki któremu wszyscy użytkownicy serwera zaczynają śledzić określone konto. W ramach przypomnienia, domyślnie użytkownicy Mastodona śledzą swojego administratora, dzięki czemu otrzymują ważne ogłoszenia, oraz zapełnia się ich główna oś czasu. To polecenie przydaje się w rzadkich sytuacjach, kiedy administrator potrzebuje zmienić coś na ich kontach.

> Aby dowiedzieć się więcej o poleceniu `tootctl`, dodaj do niego `--help`, np. `tootctl domains crawl --help`

To nie wszystko co zostało dodane w tym wydaniu – jest wiele drobnych usprawnień, takich jak możliwość eksportowania list i zablokowanych domen do pliku CSV, suwak głośności dla filmów, możliwość śledzenia wielu hashtagów w tej samej kolumnie, usprawniona osbługa emoji, lepsze zabezpieczenie przed spamem dzięki sprawdzaniu MX i jeszcze więcej.

### Podsumowanie

**Współautorzy tego wydania:** [0xflotus](https://github.com/0xflotus), [Aditoo17](https://github.com/Aditoo17), [ariasuni](https://github.com/ariasuni), [ashleyhull-versent](https://github.com/ashleyhull-versent), [BenLubar](https://github.com/BenLubar), [chr-1x](https://github.com/chr-1x), [Esteth](https://github.com/Esteth), [fwenzel](https://github.com/fwenzel), [Gargron](https://github.com/Gargron), [hinaloe](https://github.com/hinaloe), [jomo](https://github.com/jomo), [kedamaDQ](https://github.com/kedamaDQ), [Kjwon15](https://github.com/Kjwon15), [m4sk1n](https://github.com/m4sk1n), [mayaeh](https://github.com/mayaeh), [mbugowski](https://github.com/mbugowski), [moritzheiber](https://github.com/moritzheiber), [noellabo](https://github.com/noellabo), [nolanlawson](https://github.com/nolanlawson), [pawelngei](https://github.com/pawelngei), [pointlessone](https://github.com/pointlessone), [Quenty31](https://github.com/Quenty31), [remram44](https://github.com/remram44), [renatolond](https://github.com/renatolond), [Reverite](https://github.com/Reverite), [shrft](https://github.com/shrft), [Sir-Boops](https://github.com/Sir-Boops), [sumdog](https://github.com/sumdog), [tachyons](https://github.com/tachyons), [ThibG](https://github.com/ThibG), [tmm576](https://github.com/tmm576), [ykzts](https://github.com/ykzts), [ysksn](https://github.com/ysksn), [yukimochi](https://github.com/yukimochi), [zunda](https://github.com/zunda)

**Tłumacze tego wydania:** adrianbblk, Alix D. R., Antonis, avndp, azenet, Branko Kokanovic, Burekz Finezt, ButterflyOfFire, carl morris, codl, Daniel, Eirworks, Enol P., Ivan Pleva, Jaz-Michael King, Jeong Arm, jeroenpraat, koyu, Kristijan Tkalec, Kumasun Morino, lilo, Lorem Ipsum, Marcin Mikołajczak, Marek Ľach, Masoud Abkenar, mayaeh, Muhammad Nur Hidayat (MNH48), Mélanie Chauvel, osapon, Osoitz, Quenti2, Quentí, Ranjith Tellakula, Rasmus Sæderup, Renato "Lond" Cerqueira, rscmbbng, spla, Vanege, Xose M., 小鳥遊まりあ

Jak zawsze, chciałbym podziękować wszystkim którzy dokonali wkładu w to wydanie, [wszystkim sponsorującym ten projekt][sponsors] na [Patreonie][patreon] i wszystkim korzystającym z tej sieci! 🐘

[sponsors]: https://joinmastodon.org/sponsors
[patreon]: https://patreon.com/mastodon

### Zasoby

- [Pełna lista zmian](https://github.com/tootsuite/mastodon/releases/tag/v2.7.0)
- [Dokumentacja dla użytkowników](https://docs.joinmastodon.org/pl/usage/basics/)
