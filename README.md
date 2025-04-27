# Usercard

Interaktywna, responsywna wizytówka online z odtwarzaczem muzyki, animowanym tłem i dynamicznymi kartami linków.

---

## Spis treści
1. [Opis projektu](#opis-projektu)
2. [Funkcjonalności](#funkcjonalności)
3. [Technologie](#technologie)
4. [Instalacja](#instalacja)
5. [Użytkowanie](#użytkowanie)
6. [Konfiguracja](#konfiguracja)
7. [Dostosowywanie](#dostosowywanie)
8. [Kontrybucja](#kontrybucja)
9. [Licencja](#licencja)
10. [Podziękowania](#podziękowania)

---

## Opis projektu

`Usercard` to lekka, samodzielna strona HTML/CSS/JS, która pełni rolę wizytówki online profilu użytkownika lub twórcy. Projekt zawiera:

- **Animowane tło cząsteczek** generowane przez bibliotekę tsParticles
- **Dynamiczny odtwarzacz muzyki** z zapisem stanu (utwór, głośność, shuffle) w `localStorage`
- **Listę kart linków** do serwerów, profili społecznościowych i innych zasobów
- **Animowany gradient w nagłówku** i piszący się tytuł strony
- **Preloader** przed pełnym załadowaniem strony
- **Integrację analityczną** (Google Analytics + Plausible)

## Funkcjonalności

- **Responsywny design** dostosowany do urządzeń mobilnych
- **Tryb ciemny** sterowany przez CSS variables
- **Interaktywne efekty**: hover na kartach linków, animacje przycisków, gradient tekstu
- **Player audio**: play/pause, next/prev, shuffle, pasek postępu, kontrola głośności
- **Dynamiczne generowanie** elementów na podstawie obiektu konfiguracyjnego
- **Animacja tytułu** strony (`<title>`) imitująca efekt pisania i kasowania

## Technologie

- **HTML5**
- **CSS3** (custom properties, animacje, backdrop-filter)
- **JavaScript (ES6+)**
- **tsParticles** (animowane tło)  
- **Font Awesome** (ikony)
- **Google Analytics** + **Plausible Analytics**

## Instalacja

1. Sklonuj repozytorium:
   ```bash
   git clone https://github.com/herbatniczek0/Usercard
   ```
2. Przejdź do katalogu projektu:
   ```bash
   cd usercard
   ```
3. Otwórz plik `index.html` w przeglądarce.

> Nie są wymagane żadne dodatkowe narzędzia build (np. Webpack).

## Użytkowanie

Po otwarciu `index.html` w przeglądarce zobaczysz:

1. **Preloader** – znika po pełnym wczytaniu.
2. **Tło cząsteczek** animowane przez tsParticles.
3. **Avatar**, **nazwa** oraz **e-mail** w nagłówku.
4. **Karty linków** – kliknij, aby otworzyć w nowej karcie.
5. **Ikona płyty** (💽) w prawym górnym rogu – otwiera odtwarzacz muzyki.
6. **Player audio** – kontrolki odtwarzania oraz listę utworów.

## Konfiguracja

W pliku `index.html`, wewnątrz głównego `<script>` znajdziesz obiekt `config`. Przykład:

```js
const config = {
  mainColor: '#6b21a8',
  avatarSrc: 'img/avatar.png',
  name: 'TwojaNazwa',
  email: 'twoj.email@example.com',
  links: [ /* karty linków */ ],
  socials: [ /* ikony social media */ ],
  credit: { text: 'TwojaNazwa', url: 'https://twoja-strona.pl/' },
  tracks: [ /* playlista */ ]
};
```

- **`mainColor`** – kolor akcentu (przyciski, gradient).  
- **`links`** – tablica obiektów `{ icon, title, badge?, subtitle, url }`.  
- **`socials`** – tablica `{ icon (font-awesome), url }`.  
- **`tracks`** – tablica `{ name, src }` dla odtwarzacza.

## Dostosowywanie

- **Ikony**: możesz użyć obrazków (`.png`, `.jpg`) lub klas Font Awesome.  
- **CSS**: zmieniaj zmienne w `:root` (kolory, przejścia).  
- **Animacje**: modyfikuj `@keyframes` lub interwały JS przy tytule.

## Kontrybucja

1. Stwórz forka repozytorium.  
2. Wdróż zmiany w nowym branchu.  
3. Wyślij pull request.  

Propozycje nowych funkcji, zgłaszanie bugów – mile widziane!

## Licencja

Projekt udostępniony na licencji MIT. Szczegóły w pliku `LICENSE`.

## Podziękowania

- [tsParticles](https://github.com/matteobruni/tsparticles) – za piękne tło.  
- [Font Awesome](https://fontawesome.com/) – za ikony.  
- [Plausible](https://plausible.io/) & [Google Analytics](https://analytics.google.com/) – za statystyki.

