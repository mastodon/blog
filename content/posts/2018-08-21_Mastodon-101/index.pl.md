---
title: "Przewodnik po Mastodonie"
description: "Więc chcesz dołączyć do Mastodona i zacząć tootować. Świetnie! Ten artykuł pomoże ci zagłębić się."
date: 2018-08-28
draft: false
author: nico
resources:
- name: hero
  src: vlcsnap-2018-08-27-16h43m11s127.png
categories:
- Guides
tags:
- mastodon
---

Ten wpis jest tłumaczeniem wpisu [Nico](https://mastodon.social/@nico) pt. [Mastodon quick start guide]({{< relref path="2018-08-21_Mastodon-101" lang="en" >}}). Dziękuję [Wojtkowi](https://polska.masto.host/@Wojtek) za dokonanie poprawek w moim tłumaczeniu. Proszę o zgłaszanie [mi](https://101010.pl/@m4sk1n) uwag dotyczących tłumaczenia, jeżeli takie wystąpią.

---

Więc chcesz dołączyć do Mastodona i zacząć tootować. Świetnie! Ten artykuł pomoże ci zagłębić się.

### Zacznijmy od podstaw. Czym jest Mastodon?

Mastodon jest platformą mikroblogową podobną do tych, które możesz już znać, takich jak Twitter. Nie jest jednak scentralizowana — jest to sfederowana sieć działająca w sposób podobny do e-maila.

Tak jak w przypadku e-maila, wybierasz swój serwer i — niezależnie od tego, czy jest to GMail, Outlook, iCloud — gdziekolwiek się zarejestrujesz, wiesz że będziesz mógł/mogła napisać wiadomość do wszystkich, jeżeli znasz ich adres.

> Wyraz „instancja” jest często używany przez użytkowników Mastodona do określenia serwera.

Oznacza to, że nie ma tu jednej, bezwzględnej firmy kontrolującej to wszystko, akcjonariuszy, centralnego zarządzania i targetowanych reklam których wszyscy mamy dosyć, są tu tylko osoby wzajemnie udostępniające sobie rzeczy, które chcą wzajemnie udostępniać.

### Gdzie mogę się zarejestrować?

Pierwszą rzeczą którą musisz zrobić jest **wybór serwera**. Jest to dodatkowy krok w porównaniu do stron takich jak Twitter i Tumblr, ale nie jest to tak trudne, jak się wydaje.

Tak jak w przypadku e-maila, twój identyfikator zawiera serwer na który się logujesz. Na przykład, zarejestrowałem się na mastodon.social, więc aby o mnie wspomnieć, wprowadź @nico@mastodon.social w swoim wpisie. Nie jest to tak nieporęczne jak się wydaje, ponieważ interfejs użytkownika nie wyświetla nazw serwerów, gdy nie są one przypadnie (np. wyświetlając konwersacje) i dodaje je, gdy są potrzebne (np. gdy odpowiadasz na wpis użytkownika innego serwera), więc nie jest to problem którym powinieneś(-naś) się przejmować.


Jeżeli to, o czym chcesz, rozmawiać mieści się zwykle w jednej kategorii (mogą być to gry wideo, sztuka, programowanie, fikcja lub cokolwiek innego), dobrym pomysłem może być wybranie serwera, który skupia się na związanej z tym zawartości — będzie łatwiej nawiązać kontakty i znaleźć podobne osoby. Dla niektórych serwer jest czymś jak sąsiedztwo lub miejsce spotkań, gdzie większość rozmów skupiona jest na jednym temacie.

> Możesz wyświetlać wszystkie publiczne lokalne wpisy utworzone przez użytkowników twojego serwera na tak zwanej „lokalnej osi czasu”.

Jeżeli nie zamierzasz skupić się na jednym temacie, prawdopodobnie chcesz wybrać ogólnotematyczny serwer. Niezależnie od tego, możesz znaleźć przydatne narzędzie do wyboru serwerów na [joinmastodon.org](https://joinmastodon.org/#getting-started).

**Nie panikuj!** Będziesz mógł/mogła rozmawiać z osobami z innych serwerów niezależnie od tego, który wybierzesz. Pamiętaj, to tak jak e-mail — możesz na przykład wysłać maila do swojej mamy na jej stare konto na WP ze swojego GMaila.

> Słowo „Fediwersum” (ang. „fediverse”, „federation” + „universe”) odnosi się do sieci serwerów Mastodona [i innego kompatybilnego oprogramowania]({{< relref path="2018-06-27_Why-ActivityPub-is-the-future" lang="en"  >}}), którego użytkownicy mogą wzajemnie ze sobą konwersować.

Po upływie czasu, możesz uznać, że chcesz założyć konto na innym serwerze, chcąc przenieść swoje główne konto lub utworzyć drugie konto dotyczące określonej cząstki siebie. Jest to normalna rzecz w Fediwersum i nie ma czym się martwić. Ludzie przywykli tu do widoku wpisów tego typu raz na jakiś czas:

{{< mastodon "https://divad.xyz/@zyx/100582487377045070" >}}

### Poznaj swój serwer

Poświęć chwilę przed rejestracją, aby przejrzeć zasady wybranego serwera i upewnić się, czy pozwala na publikowanie treści, które chcesz tam zamieszczać.

> Wpisy na Mastodonie są nazywane „tootami”, co jest onomatopeją ogłosu wydawanego przez słonie.

Pod polem rejestracji znajdziesz odnośnik do strony zasad. Jest nim prawdopodobnie przycisk „Dowiedz się więcej” pod „Administrowana przez”. Na innych stronach, zasady znajdują się w stopce, podpisane jako „O tej instancji”. Możesz też wprowadzić prawidłowy adres URL w pasek adresu przeglądarki, zawsze ma on format taki jak `https://mastodon.social/about/more`.

Strona zasad informuje też, kto jest właścicielem/administratorem serwera. Większość serwerów jest skonfigurowana tak, że po rejestracji zaczynasz śledzić administratora, tak jak kiedyś Toma na MySpace. Jest to świetne, ponieważ wiesz, do kogo możesz się zwrócić gdy napotkasz jakiś problem i możesz otrzymywać ogłoszenia dotyczące serwera (np. gdy oprogramowania zostanie zaktualizowane), jest to też dobry sposób na poznanie osoby, która zarządza serwerem, z którego korzystasz.

Administratorzy są bardzo przyjaznymi osobami, które zwykle opłacają serwer z własnej kieszeni, więc dobrze jest poznać ich tak, jakby byli właścicielami mieszkania, które wynajmujesz. Wielu z nich przyjmuje dotacje, aby pokryć koszty utrzymania serwera, więc jeżeli możesz pomóc, będzie to docenione.

### Wydaje mi się, że znalazłem(-am) nowy dom!

Przejdź na stronę główną swojego serwera i wprowadź swoją nazwę użytkownika i hasło w formularzu rejestracji. Musisz użyć adresu e-mail, który będziesz musiał(a) potwierdzić, zanim otrzymasz możliwość zalogowania.

Następna rzeczą którą powinieneś(-naś) zrobić jest zmiana zdjęcia profilowego, przejrzenie strony ustawień (i powrót tam po mniej więcej tygodniu korzystania z Mastodona, aby poprawić swoje doświadczenie) i przygotowanie do przedstawienia się.

> Wartymi uwagi ustawieniami są: uwierzytelnianie dwuetapowe zwiększające bezpieczeństwo konta, domyślnie wyłączone automatyczne odtwarzanie GIF-ów, język w którym umieszczasz wpisy o języki które chcesz wyświetlać na lokalnej i globalnej osi czasu i osiach czasu hashtagów (domyślnie widzisz wpisy we wszystkich językach).

Hashtagi są ważnym elementem Mastodona. Są one [jedyną częścią tootów, którą możesz wyszukiwać]({{< relref path="2018-07-05_Cage-the-Mastodon" lang="en" >}}). Jeżeli chcesz zostać znaleziony(-a) przez osoby zainteresowane fotografią, najlepiej uwzględnić we wpisie hashtag #photography.

> W przypadku hashtagów zawierających wiele słów, używaj „camel case” #JakWTymDobrymHashtagu zamiast tak #jakwtymgorszymhashtgu ze względu na dostępność.

Jako pierwszy wpis, dobrym pomysłem jest przedstawienie się pod hashtagiem #introductions i umieszczenie informacji o sobie, swoich zainteresowaniach i tym, o czym będziesz rozmawiać na Mastodonie. Jest to świetny hashtag do przeglądania, możesz znaleźć dużo nowych osób w sieci i wielu z nich może się tobą zainteresować.

{{< mastodon "https://mastodon.social/@Altruest/99738664857313748" >}}

{{< mastodon "https://mastodon.social/@laches1sm/100530830792499728" >}}

{{< mastodon "https://mastodon.social/@dorigo/100578566888115867" >}}

### Krótkie oprowadzenie po interfejsie webowym

> Mastodon oferuje [wiele aplikacji](https://joinmastodon.org/apps), zarówno na urządzenia mobilne jak i przeglądarkę z nie musisz używać standardowego interfejsu. Jeżeli oczekujesz prostszego rozwiązania, wypróbuj [Pinafore](https://pinafore.social)

{{< figure src="default-interface.png" caption="Schemat domyślnego interfejsu użytkownika" >}}

Standardowy interfejs Mastodona składa się z wielu kolumn zamiast jednego strumieniami Możesz przenosić i usuwać je, aby dostosować go do swoich potrzeb.

**Strona główna** zawiera wszystkie tooty od osób które śledzisz w kolejności chronologicznej. Są to osoby z twojego serwera i pozostałych, jeżeli tylko je śledzisz. Niektóre osoby nie chcą, aby podbicia były widoczne w tej kolumnie, chcą widzieć tylko autorskie wpisy śledzonych. Aby je ukryć, naciśnij przycisk ustawień w prawym górnym rogu kolumny.

> „Podbicie” jest synonimem „retweeta”/„udostępnienia” na Mastodonie.

**Powiadomienia** służą do tego, co wskazuje nazwa. Znowu, dotyczą one całego Fediwersum. Przycisk ustawień (prawy górny róg) zawiera liczne opcje dotyczące tej kolumny. Możesz na przykład wyłączyć dźwięk „boop” towarzyszący nowym powiadomieniom.

**Lokalna oś czasu** jest aktualizowanym na żywo strumieniem wpisów wszystkich użytkowników twojego serwera. Na wielu serwerach, szczególnie tych mniejszych, jest to miejsce wokół którego wszystko się toczy. To jak rynek na mieście lub pokój na Slacku. Możesz odpowiadać tam osobom z jest to świetnie miejsce do poznawania ludzi.

**Oś czasu federacji** jest widokiem na wszystkie publiczne wpisy z całej sieci o których wie twój serwer (łącznie z lokalnymi). Najczęściej pojawiają się one tam, jeżeli któryś użytkownik twojego serwera śledzi ich autora. Ta kolumna aktualizuje się bardzo szybko. Ustawiam w tej kolumnie widok wyłącznie wpisów z zawartością multimedialną, ukrywam podbicia i otrzymuję nieustający strumień głupkowatych selfie, świeżych memów i sztuki.

Możesz też przypiąć kolumnę z hashtagiem który cię interesuje — po prostu znajdź tej hashtag i wybierz „Przypnij” w ustawieniach kolumny.

### Korzystanie z ostrzeżeń o zawartości

Jedną z najlepszych funkcji Mastodona jest przycisk „CW” w miejscu gdzie tworzysz tooty. Kliknięcie go tworzy pole ostrzeżenia o zawartości pozwalające na umieszczenie informacji, czego dotyczy wpis (np. stan psychiczny, polityka, sprośne wpisy, nagość), aby osoby które nie chcą widzieć tego rodzaju wpisów mogły je ominąć. Jest to też oczywiście dobre rozwiązanie na spoilery treści książek i filmów.

Powszechną praktyką jest umieszczanie +, - i ~ w ostrzeżeniu o zawartości aby określić, czy zawartość ma wydźwięk odpowiednio pozytywny, negatywny czy mieszany.

Moja rada jest prosta: jeżeli nie masz pewności, czy wpis wymaga CW, nadaj mu CW. Ludzie doceniają to, a nadmierna ostrożność i szacunek wobec innych nie skrzywdzi nikogo.

Możesz też użyć CW, aby streścić dłuższy wpis. Niektórzy używają go do puent dowcipów. Może znajdziesz inne zastosowania dla tej funkcji. Baw się dobrze.

### Dowiedz się więcej

Oficjalne materiały:

* [Czym jest Mastodon?](https://www.youtube.com/watch?v=IPSbNdBmWKE)
* [Najczęściej zadawane pytania](https://github.com/tootsuite/documentation/blob/master/Using-Mastodon/FAQ.md)
* [Aplikacje na iOS i Androida](https://joinmastodon.org/apps)
* [Jak odnieść sukces jako artysty na Mastodonie]({{< relref path="2018-06-24_How-to-become-a-successful-artist-on-Mastodon" lang="en"  >}})

Materiały społeczności:

* [Intro to Mastodon - Tahajin](https://www.youtube.com/watch?v=W22msAw2zwI)
* [A Beginner's Guide to Mastodon - Lifehacker](https://lifehacker.com/a-beginner-s-guide-to-mastodon-1828503235)
* [An Increasingly Less-Brief Guide to Mastodon - Joyeuse Noelle](https://github.com/joyeusenoelle/GuideToMastodon/)
