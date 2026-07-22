# 13 — TC-PK-005: frontend smoke/content-audit + CMS-readiness-blauwdruk

**Status:** DRAFT — geldig tot Delroy "Goedgekeurd" zegt.
**Task Contract:** `TC-PK-005-frontend-audit-APPROVED.md` (APPROVED 2026-07-22)
**Fase:** CUT-4e · **Lane:** A · **Execution Mode:** SAFE MODE (report-only)
**Uitvoering:** 2026-07-22 · **Baseline:** `99d664d` · **Push:** niet uitgevoerd.
**Meting tegen:** dev-server `http://localhost:3101` (SSR, bun dev).

Dit rapport wijzigt geen applicatiecode. De enige schrijfactie in de repo is dit
bestand; de auditscripts staan buiten de repo in de Devmart Playwright-harness.

---

## 0. Methode en reproduceerbaarheid

Alle bevindingen zijn **gemeten in Chromium** tegen de draaiende dev-server, niet
afgeleid uit de broncode. Scripts staan in
`C:\Users\delro\devmart-test-harness\playwright\` en zijn herbruikbaar als
regressiebasis (fix-lijst 10 uit `PK-CODEX-AUDIT-001`).

| Script | Spoor | Uitvoer |
| --- | --- | --- |
| `pk-routes.mjs` | — | gedeelde routelijst (22 publieke routes incl. 404) |
| `pk-content-audit.mjs` | 1 | `pk-content-audit.json` — sectie-inventaris + duplicaatdetectie |
| `pk-content-report.mjs` | 1 | leesbare route→sectie→kop→description-tabel |
| `pk-placeholder-audit.mjs` | 1 | `pk-placeholder-audit.json` — placeholderfamilies + nummering |
| `pk-restpunten-audit.mjs` | 2 | `pk-restpunten-audit.json` + `pk-shot-*.png` |
| `pk-admin-readiness.mjs` | 3 | `pk-admin-readiness.json` + `pk-shot-admin-dashboard.png` |
| `pk-probe-dom.mjs`, `pk-probe-toparea.mjs`, `pk-probe-raw.mjs`, `pk-probe-headings.mjs`, `pk-probe-lang.mjs`, `pk-probe-chrome.mjs`, `pk-probe-pagetext.mjs`, `pk-probe-context.mjs`, `pk-probe-home-extras.mjs`, `pk-probe-failed-requests.mjs` | 1–4 | losse bewijsprobes |

```bash
cd C:\Users\delro\devmart-test-harness\playwright
node pk-content-audit.mjs && node pk-content-report.mjs
node pk-placeholder-audit.mjs
node pk-restpunten-audit.mjs
node pk-admin-readiness.mjs
```

**Scope.** 22 publieke routes: `/`, `/about`, `/accessibility`, `/artists`,
`/artists/portfolio`, `/collections/$slug`, `/contact`, `/events`,
`/events/details`, `/faq`, `/heritage`, `/heritage/details`,
`/heritage/upcoming`, `/media`, `/organizations`, `/organizations/details`,
`/privacy`, `/search`, `/stories`, `/stories/details`, `/terms` en de
404-splatroute. Buiten scope conform TC: `/account.*`, `/wishlist`,
`/certificate`, `/admin` (voor `/admin` geldt: alleen gelezen/gemeten, niets
gewijzigd).

**Sectiedefinitie.** Een sectie = één directe child van de ArtMart-scopecontainer
(`header.header-area`'s parent), met uitzondering van de twee zuiver functionele
elementen `.tt-style-switch` en `.circle-container`. Kop = de heading in het
`.section-title*`-blok, anders de eerste heading. Description = de eerste `<p>`
in het sectietitel-blok, anders de eerste `<p>` van ≥ 20 tekens.

---

## 1. Spoor 1 — Content & descriptions per sectie

### 1.1 Duplicate descriptions (exacte matches)

Gemeten met `pk-content-audit.mjs`; alle zes groepen zijn **byte-identiek**.

| # | Voorkomens | Tekst (ingekort) | Locaties |
| --- | --- | --- | --- |
| D1 | **22×** | "Prani Kulturu is de digitale erfgoedhub van Stichting Prani Kulturu. Wij brengen materieel en immaterieel erfgoed uit Suriname samen in één toegankelijk archief…" | `.footer-section` op **alle 22 routes** |
| D2 | **7×** | "Een collectie bundelt records rond een thema, een periode of een gemeenschap. De redactie stelt collecties samen op basis van herkomst, rechten en context." | `.breadcrumb-section2` op `/artists`, `/collections/$slug`, `/heritage`, `/heritage/upcoming`, `/media`, `/organizations`, `/search` |
| D3 | **6×** | "Ontdek Surinaams erfgoed en verhalen uit het gedeeld archief." | `/` → `.home1-auction-slider-section`, `.home2-category-section`, `.home2-artist-section`, `.home1-general-art-slider-section`, `.home1-article-section`; `/contact` → `.contact-page` |
| D4 | 2× | "Prani Kulturu bewaart en ontsluit het cultureel geheugen van Suriname. Wij verbinden makers, organisaties en gemeenschappen in één archief…" | `/` → `.home2-about-section`; `/about` → `.discover-section` |
| D5 | 2× | "Voorbeeldkunstenaar. Beschrijving volgt zodra de redactie dit profiel heeft aangevuld met herkomst, oeuvre en context." | `/artists/portfolio` → `.breadcrumb-section`; `/organizations/details` → `.breadcrumb-section` |
| D6 | 2× | "Voorbeeldprofiel. De redactie vult herkomst, oeuvre en context van deze maker aan zodra de gegevens zijn geverifieerd." | `/artists/portfolio` → `.auction-card-sidebar-section`; `/organizations/details` → `.auction-card-sidebar-section` |

**Vrijwel identieke (niet-exacte) descriptions:** 0 gevonden. De genormaliseerde
vergelijking (kleine letters, cijfers → `#`, leestekens weg) leverde geen extra
clusters op naast de exacte duplicaten. **Alle duplicatie is exact.**

Severity:
- **D2 — HIGH.** Zeven verschillende archieftypen (kunstenaars, erfgoed, media,
  organisaties, zoekresultaten, collecties, binnenkort) dragen dezelfde
  collectie-uitleg. Op vijf van die zeven routes is de tekst inhoudelijk onjuist.
- **D3 — HIGH.** Vijf opeenvolgende homepagesecties dragen dezelfde zin; de
  homepage leest daardoor als één herhaalde regel. De zesde plaatsing staat op
  `/contact`, waar de zin geen betekenis heeft.
- **D1 — LOW.** Een footer is per definitie site-breed; dit is geen defect maar
  wordt in Fase 5 één instelling (zie blauwdruk §4).
- **D4/D5/D6 — MEDIUM.** Twee pagina's met identieke tekst; `/organizations*`
  hergebruikt letterlijk de kunstenaarsteksten.

### 1.2 Route → sectie → huidige tekst → bevinding → voorstel-type

Kolom "voorstel-type" is een **type**, geen uitgeschreven tekst (TC-constraint:
geen verzonnen cultuurinhoud).

#### `/` (10 secties)

| Sectie | Kop | Description (gemeten) | Bevinding | Voorstel-type |
| --- | --- | --- | --- | --- |
| `.header-area` | — | — | globale chrome | laten |
| `.home2-search-bar-section` | — | — | zoekbalk, chip "Hulp nodig?" | laten |
| `.home2-banner-section` | "Ontdek Surinaams erfgoed en verhalen uit ons archief" | "Blader door records, verhalen en collecties uit het gedeelde archief van Prani Kulturu." | uniek; kop en D3-zin liggen semantisch dicht bij elkaar | laten |
| `.home1-auction-slider-section` | "Uitgelicht erfgoed" | D3 | duplicaat | uniek maken |
| `.home2-category-section` | "Ontdek" | D3 | duplicaat | uniek maken |
| `.home2-artist-section` | "Uitgelichte kunstenaars" | D3 | duplicaat | uniek maken |
| `.home1-general-art-slider-section` | "Aankomende evenementen" | D3 | duplicaat | uniek maken |
| `.home2-about-section` | "Ontdek onze essentie" | D4 | duplicaat met `/about`; bevat counters 65 / 1.5 / 800 / 1 (ArtMart-demowaarden) | uniek maken + counters als instelling |
| `.home1-article-section` | "Laatste verhalen" | D3 | duplicaat | uniek maken |
| `.footer-section` | "Menu" | D1 | site-breed | laten (wordt instelling) |

#### `/about` (9 secties)

| Sectie | Kop | Description | Bevinding | Voorstel-type |
| --- | --- | --- | --- | --- |
| `.discover-section` | "Ontdek onze essentie" | D4 | duplicaat met `/` | uniek maken |
| `.home1-artistic-section` | "Onze werkwijze" | "Prani Kulturu ontsluit Surinaams erfgoed via een gedeeld archief. Wij staan voor:" | uniek | laten |
| `.behiend-us-section` | "Ons verhaal" | "Prani Kulturu is opgezet om het culturele archief van Suriname toegankelijker, transparanter en beter deelbaar te maken." | uniek | laten |
| `.home1-feature-section` | "Waar wij voor staan" | "Prani Kulturu ontsluit Surinaams tangibel en immaterieel erfgoed…" | uniek; "tangibel" is een anglicisme | redactionele correctie |
| `.enquery-section` | "Neem contact op" | "Redactie, organisaties en publiek — wij horen graag van u…" | uniek | laten |
| `.topbar` / `.header-area` / `.top-area` / `.footer-section` | — | — | chrome + kruimelpad | laten |

#### `/accessibility` (5 secties)

| Sectie | Kop | Description | Bevinding | Voorstel-type |
| --- | --- | --- | --- | --- |
| `.top-area` | kruimelpad "Bronnen / **Privacy**" | — | **fout kruimelpad** | uniek maken |
| `.terms-and-conditions-page` | "**Privacyverklaring van Prani Kulturu**" | — | **de volledige pagina is een 1:1 kopie van `/privacy`** (zie §2.6) | eigen inhoud vereist |

#### `/artists` (5 secties)

| Sectie | Kop | Description | Bevinding | Voorstel-type |
| --- | --- | --- | --- | --- |
| `.breadcrumb-section2` | "Uitgelichte kunstenaars" | D2 (collectietekst) | **verkeerde description** voor een kunstenaarsoverzicht | uniek maken |
| `.artist-grid-section` | (kaarttitel "Voorbeeld kunstenaar") | — | geen sectiebeschrijving; kaarten dragen jaartallen van buitenlandse kunstenaars (§1.4) | uniek maken + placeholderopschoning |

#### `/artists/portfolio` (5 secties)

| Sectie | Kop | Description | Bevinding | Voorstel-type |
| --- | --- | --- | --- | --- |
| `.breadcrumb-section` | "Voorbeeld kunstenaar" | D5 | duplicaat met `/organizations/details` | uniek maken |
| `.auction-card-sidebar-section` | "Standaardsortering" | D6 | duplicaat; kop is een filterlabel, geen sectiekop | uniek maken |

#### `/collections/$slug` (5 secties)

| Sectie | Kop | Description | Bevinding | Voorstel-type |
| --- | --- | --- | --- | --- |
| `.breadcrumb-section2` | "Collectie" | D2 | **enige route waar D2 inhoudelijk klopt** | laten |
| `.auction-card-sidebar-section` | "Categorieën" | — | filterlabel als kop; geen sectiebeschrijving | uniek maken |

#### `/contact` (5 secties)

| Sectie | Kop | Description | Bevinding | Voorstel-type |
| --- | --- | --- | --- | --- |
| `.contact-page` | "Neem contact op per telefoon" | D3 ("Ontdek Surinaams erfgoed…") | **description hoort niet bij contact**; "Telefoonnummer volgt" staat als placeholder | uniek maken |

#### `/events` (5 secties)

| Sectie | Kop | Description | Bevinding | Voorstel-type |
| --- | --- | --- | --- | --- |
| `.articel-section` | "**Verhaal uit het archief**" | — | agendapagina toont verhaal-placeholders; identiek aan `/stories` | uniek maken (Event-placeholderfamilie) |

#### `/events/details` (5 secties)

| Sectie | Kop | Description | Bevinding | Voorstel-type |
| --- | --- | --- | --- | --- |
| `.details-page-wrapper` | "Voorbeeld bijdrager" | "Erfgoed werkt als spiegel én als aanjager van maatschappelijke verandering…" | **byte-identiek aan `/stories/details`**; eventvelden (datum, locatie, organisator) ontbreken | uniek maken |

#### `/faq` (6 secties)

| Sectie | Kop | Description | Bevinding | Voorstel-type |
| --- | --- | --- | --- | --- |
| `.home1-faq-section` | "Wat is Prani Kulturu?" | — | accordeon; NL en commerce-vrij | laten |
| `.enquery-section` | "Hebt u een vraag? Stel hem hier" | "Of bel ons Telefoonnummer volgt" | placeholder-telefoonnummer zichtbaar in de description | redactionele placeholder |

#### `/heritage`, `/heritage/upcoming`, `/media`, `/organizations`, `/search`

Alle vijf hebben dezelfde opbouw: `.breadcrumb-section2` + listing-sectie.

| Route | Kop breadcrumb | Description | Bevinding | Voorstel-type |
| --- | --- | --- | --- | --- |
| `/heritage` | "Erfgoed" | D2 | verkeerde description | uniek maken |
| `/heritage/upcoming` | "Binnenkort" | D2 | verkeerde description | uniek maken |
| `/media` | "Media" | D2 | verkeerde description | uniek maken |
| `/organizations` | "**Uitgelichte kunstenaars**" | D2 | **kop én description horen bij een andere entiteit** | uniek maken (kop + description) |
| `/search` | "Zoekresultaten" | D2 | verkeerde description | uniek maken |

De listing-sectie (`.auction-card-sidebar-section`) heeft op alle vijf routes
"Categorieën" als gedetecteerde kop — dat is het sidebar-filterlabel, niet een
sectiekop. Geen van deze listings heeft een eigen sectiebeschrijving.

#### `/heritage/details` (7 secties)

| Sectie | Kop | Description | Bevinding | Voorstel-type |
| --- | --- | --- | --- | --- |
| `.auction-details-section` | — | — | recordhoofd zonder sectiekop/-description | uniek maken |
| `.product-description` | "Kunstenaar in het kort" | "Geboorte- en sterfdatum worden door de redactie aangevuld." | correcte redactionele placeholder | laten |
| `.home1-auction-slider-section` | "Vergelijkbare records" | — | geen description | uniek maken |

#### `/organizations/details` (5 secties)

Identiek aan `/artists/portfolio` (D5 + D6, kop "Voorbeeld kunstenaar").
**Bevinding:** de organisatie-detailpagina is inhoudelijk een kunstenaarspagina.
Voorstel-type: uniek maken (kop, description en veldenset per Organization).

#### `/privacy` (5 secties)

| Sectie | Kop | Description | Bevinding | Voorstel-type |
| --- | --- | --- | --- | --- |
| `.terms-and-conditions-page` | "Privacyverklaring van Prani Kulturu" | — | de body onder deze kop begint met "1) Bijdragen en kosten…", "2) Beëindiging en intrekking…", "3) Aansprakelijkheid en vrijwaring…" — dat zijn **voorwaardenclausules, geen privacyverklaring** | eigen inhoud vereist |

#### `/stories` en `/stories/details`

| Route | Sectie | Kop | Bevinding | Voorstel-type |
| --- | --- | --- | --- | --- |
| `/stories` | `.articel-section` | "Verhaal uit het archief" | geen sectiebeschrijving; identiek aan `/events` | uniek maken |
| `/stories/details` | `.details-page-wrapper` | "Voorbeeld bijdrager" | body identiek aan `/events/details` | uniek maken |

#### `/terms` (5 secties)

| Sectie | Kop | Description | Bevinding | Voorstel-type |
| --- | --- | --- | --- | --- |
| `.terms-and-conditions-page` | "Laatst bijgewerkt" | "Voorbeeldtekst. De redactie vult dit veld aan zodra de gegevens zijn geverifieerd." | datum "2 februari 2023" is een template-restant; paginatitel is nog de ArtMart-titel (§2.3) | redactionele placeholder + SEO-fix |

#### 404-splatroute (5 secties)

| Sectie | Kop | Description | Bevinding | Voorstel-type |
| --- | --- | --- | --- | --- |
| `.terms-and-conditions-page` | "404 — Pagina niet gevonden" | "De pagina die u zoekt bestaat niet, is hernoemd of is verplaatst…" | correct, HTTP 404 bevestigd | laten |

### 1.3 Uniciteitsdoel

Er zijn **122 secties** geïnventariseerd over 22 routes (`pk-content-audit.json`).
Daarvan zijn er **65 chrome** (`.topbar`, `.header-area`, `.footer-section`) en
**57 inhoudelijk**. Van die 57:

| Status | Aantal |
| --- | --- |
| unieke description | **9** |
| gedupliceerde description | **21** |
| geen description | **27** |

Elke sectie kan een unieke description krijgen: de ArtMart-wrappers hebben
overal een `.section-title`-blok of een equivalente `<p>`-slot, dus er is geen
structuurwijziging nodig — alleen tekstinhoud (conform
`.claude/rules/file-boundaries.md`, BODY_HTML-regel).

### 1.4 Placeholders en nummering

Gemeten met `pk-placeholder-audit.mjs`. Er zijn **tien placeholderfamilies** in
gebruik naast elkaar:

| Familie | Routes | Nummers | Zonder nummer | Bevinding |
| --- | --- | --- | --- | --- |
| `Voorbeeldrecord N` | `/`, `/heritage/details` | 1–9, sluitend | 1 | op `/` komen **4 en 5 elk twee keer** voor (`[2,3,5,1,4,4,5,7,6,8,9]`) |
| `Erfgoedrecord` | `/`, `/heritage/details` | — | 3 | **tweede familie voor hetzelfde contenttype**, ongenummerd, staat in dezelfde slider als `Voorbeeldrecord` |
| `Voorbeeldwerk N` | `/artists/portfolio`, `/organizations/details` | 1–9, sluitend | 0 | consistent |
| `Voorbeeld kunstenaar N` | 6 routes | 1–11, sluitend | **41** | de eerste kaart op `/artists` en `/organizations` is **ongenummerd** ("Voorbeeld kunstenaar 1907–1954"); 41 losse voorkomens zonder nummer |
| `Voorbeeldkunstenaar` (aaneen) | `/artists/portfolio`, `/organizations/details` | — | 2 | **spellingvariant** van de vorige familie |
| `Voorbeeld bijdrager` | `/artists`, `/organizations`, `/events/details`, `/stories/details` | — | 4 | staat **tussen de kunstenaarskaarten** op `/artists` en `/organizations` — familiewissel binnen één grid |
| `Verhaal uit het archief` | `/`, `/events`, `/stories`, `/heritage/details` | — | 5 | ongenummerd; ook op `/events` gebruikt |
| `Voorbeeldtekst` | `/terms`, `/heritage/details` | — | 3 | generiek |
| `… volgt` | 8 routes | — | 36 | correcte redactionele markering |
| `redactie vult/aanvult …` | 8 routes | — | 9 | correcte redactionele markering |

Aanvullende bevinding (gemeten op `/artists`): de kunstenaarskaarten dragen nog
**echte levensjaren van buitenlandse kunstenaars** — `1907–1954`, `1881–1973`,
`1452–1519`, `1904–1989`, `1863–1944` — naast de tekst "(herkomst volgt)". Dat
zijn ArtMart-restanten (Kahlo, Picasso, Da Vinci, Dalí, Munch) op een Surinaamse
erfgoedsite. Severity **MEDIUM** (misleidende data, geen verzonnen Surinaamse
feiten maar wel vreemde feiten).

---

## 2. Spoor 2 — Restpunten-inventaris met bewijs

### 2.1 Logo nog "Artmart" — **HIGH**

| Meting | Waarde |
| --- | --- |
| Header-logo `src` | `/artmart/assets/img/header-logo.svg` |
| Header-logo (dark) `src` | `/artmart/assets/img/header-logo-white.svg` |
| Footer-logo `src` | `/artmart/assets/img/footer-logo.svg` |
| `alt` van alle drie | `""` (leeg) |
| Routes met dit logo | 22 / 22 |

Bewijs: `pk-shot-logo-home.png`, `pk-shot-logo-terms.png`,
`pk-shot-logo-accessibility.png` — de screenshots tonen het woordmerk
**"Artmart"**. Het SVG bevat uitsluitend `<path>`-elementen (geen `<text>`), dus
de merknaam is niet via tekstvervanging te corrigeren; er is een vervangend
logobestand nodig. Bijkomend: `alt=""` maakt het logo onzichtbaar voor
schermlezers terwijl het de sitenaam draagt.

### 2.2 Taalswitcher "English" + talenlijst — **HIGH**

| Meting | Waarde |
| --- | --- |
| Knoplabel `.language-btn` | **"English"** |
| Items `.language-list li` | `English`, `Deutsch`, `Svenska`, `اردو`, `عربي`, `Nederlands` |
| Routes | 22 / 22 |
| Werking | alle items zijn `href="#"` — geen enkele taalwissel is functioneel |
| `<html lang>` | `nl` (correct) |

Bewijs: `pk-shot-taalswitcher-home.png`. De site is NL-first met `lang="nl"`,
maar toont "English" als actieve taal en biedt vijf talen aan die niet bestaan.
TC-PK-003 liet dit bewust staan omdat verwijderen `<li>`-elementen uit
`BODY_HTML` schrapt (structuurwijziging). Voor TC-PK-006 is dit een expliciet
besluit van Delroy: **label naar "Nederlands" zetten** (tekstwijziging, binnen
de BODY_HTML-regel) óf **de hele switcher verwijderen** (structuurwijziging,
vereist een waiver op `.claude/rules/file-boundaries.md`).

### 2.3 SEO-meta per route — **HIGH**

Gemeten per hard load (`pk-restpunten-audit.mjs`).

| Metriek | Waarde |
| --- | --- |
| Routes gemeten | 22 |
| **Unieke `<title>`** | **3** |
| **Unieke `meta[name=description]`** | **3** |
| `og:title` | aanwezig, gelijk aan `<title>` |
| `link[rel=canonical]` | **ontbreekt op alle 22 routes** |
| `meta[name=robots]` | alleen op de 404-route |
| `<html lang>` | `nl` op alle routes |

| Title | Aantal | Routes |
| --- | --- | --- |
| "Prani Kulturu — Digitaal erfgoed uit Suriname" | **20** | alle routes behalve `/terms` en 404 |
| **"Artmart - Art & Archief HTML Template."** | 1 | **`/terms`** |
| "Pagina niet gevonden — Prani Kulturu" | 1 | 404-splat |

De `meta description` volgt exact hetzelfde patroon: 20 routes delen de site-brede
zin, `/terms` draagt de ArtMart-templatetekst, de 404 heeft een eigen zin.

Twee losse bevindingen:
1. **`/terms` lekt de ArtMart-merknaam in de paginatitel** — de enige plek waar
   "Artmart" nog als leesbare tekst in de `<head>` staat. Severity **HIGH**
   (zichtbaar in browsertab, zoekresultaten en deelvoorbeelden).
2. Er is **geen route-specifieke `head()`** buiten `__root.tsx`, `$.tsx` en
   `/terms`. Round G ("SEO metadata pass") uit `03-phased-plan.md` is dus nooit
   uitgevoerd.

### 2.4 `nodeName`-console-fouten op hard load — **HIGH**

Gemeten per route met een verse browsercontext (echte hard load, geen SPA-nav):

| Metriek | Waarde |
| --- | --- |
| Routes met een `nodeName`-pageerror | **22 / 22** |
| Aantal `nodeName`-fouten per route | **1** |
| Totaal `nodeName`-fouten | **22** |
| Overige console-errors | 1 (de verwachte HTTP 404-respons op de 404-route) |
| Mislukte sub-resources (status ≥ 400) | **0** op alle 22 routes |

Foutmelding en herkomst (identiek op elke route):

```
TypeError: Cannot read properties of null (reading 'nodeName')
    at Object.initialize [as create] (/artmart/assets/js/range-slider.js:1696:21)
    at HTMLDocument.<anonymous>       (/artmart/assets/js/range-slider.js:16:16)
    at e                              (/artmart/assets/js/jquery-3.7.1.min.js:2:27028)
```

**Oorzaak:** `range-slider.js` initialiseert zichzelf op `DOMContentLoaded` op een
element dat op geen enkele publieke route bestaat (de prijsfilter-slider uit de
ArtMart-veilingsidebar is bij de commerce-opschoning verdwenen). De fout treedt op
vóór de rest van de init-keten en is dus een echte JS-exception op iedere
paginalading. **`main.js` is niet betrokken** — de stack wijst uitsluitend naar
`range-slider.js`, een apart vendorbestand, en `main.js` blijft ongewijzigd
(hash geverifieerd, §5).

### 2.5 Hashlink-inventaris — bevestigd

| Meting | Waarde |
| --- | --- |
| `href="#"` in alle 30 route-`.tsx`-bestanden (bron) | **281** — bevestigt PK-006 exact |
| `a[href="#"]` live gemeten op de 22 publieke routes (DOM) | **192** |
| Verschil (out-of-scope routes) | **89** |

Reconciliatie van de 89: `account.wishlist` 16 + `account.wishlist-general` 16 +
`wishlist` 12 + `account.orders` 12 + `account.bidding` 12 + `certificate` 7 +
`account.profile` 7 + `account.index` 7 = 89. `a[href^="#"]` levert eveneens 192 —
er zijn dus **geen echte anker-links**; alle hashlinks zijn no-ops.

Spreiding over de publieke routes: `/artists/portfolio` en
`/organizations/details` 15 elk; `/events*`, `/stories*` 11; 404-splat 12;
`/collections`, `/heritage`, `/heritage/upcoming`, `/media`, `/search` 9; `/faq`
7; overige routes 6. Severity **MEDIUM** (a11y/toetsenbord + semantiek), conform
fix-lijst 6 van `PK-CODEX-AUDIT-001`. Geen fix in deze TC.

### 2.6 Extra bevinding — `/accessibility` is een kopie van `/privacy` — **HIGH**

Niet gevraagd in de TC, maar gevonden tijdens spoor 1 en gemeld conform Guardian
Rule 5 (verificatieblokkade/inhoudelijk defect):

| Meting | `/privacy` | `/accessibility` |
| --- | --- | --- |
| Kruimelpad | "Bronnen Privacy" | **"Bronnen Privacy"** |
| Eerste kop | "Privacyverklaring van Prani Kulturu" | **"Privacyverklaring van Prani Kulturu"** |
| Alle koppen | Privacyverklaring / Hoe wij persoonsgegevens verzamelen / Persoonsgegevens verzamelen | **identiek** |
| Lengte hoofdsectie | 2.666 tekens | **2.666 tekens** |
| Eerste 700 tekens | identiek | identiek |

Er is dus **geen toegankelijkheidsverklaring** op de site, terwijl de route
bestaat, in de "Over"-dropdown staat en in de footer wordt gelinkt. Bovendien
bevat `/privacy` zelf geen privacytekst maar voorwaardenclausules
("1) Bijdragen en kosten", "2) Beëindiging en intrekking",
"3) Aansprakelijkheid en vrijwaring"). Bewijs: `pk-shot-accessibility.png`,
`pk-probe-pagetext.mjs`.

### 2.7 Effecten en netwerk — groen

| Meting | Waarde |
| --- | --- |
| `.swiper-initialized` op `/` | **4** (eis uit `verification.md`: ≥ 4) |
| Mislukte requests (≥ 400) op publieke routes | 0 |
| HTTP-status onbekend pad | 404 |
| Zichtbare "Artmart"-tekstnodes in de body | **0** op alle 22 routes |

---

## 3. Spoor 3 — CMS-readiness van de admin

Referentie (leesplicht CLAUDE.md §5, uitgevoerd): `DEVMART_ADMIN_MASTER_TASKS.md`,
`DEVMART_ADMIN_PAGES.md`, `DEVMART_ADMIN_LIBRARY.md`,
`DEVMART_ADMIN_CSS_ISOLATION.md`. Gemeten met `pk-admin-readiness.mjs`; er is
niets aan `/admin` of `public/admin/**` gewijzigd.

### 3.1 Wat aantoonbaar aanwezig is

| Onderdeel | Meting | Oordeel |
| --- | --- | --- |
| `/admin` bereikbaar | HTTP 200, titel "Dashboard · Devmart Admin" | ✅ |
| Shell | `.app-wrapper`, `.app-topbar`, sidebar aanwezig | ✅ |
| Wrapper-div | `.devmart-admin` aanwezig | ✅ |
| Admin-CSS-bundels | 5 stylesheets onder `/admin/assets/…` geladen | ✅ |
| Admin-assetrequests op `/admin` | 13 | ✅ |
| **CSS/JS-isolatie** | op `/`: **0** admin-assetrequests, **0** admin-stylesheets | ✅ contract uit `DEVMART_ADMIN_CSS_ISOLATION.md` gehaald |
| Console-fouten op `/admin` | **0** | ✅ |
| `robots` op `/admin` | `noindex, nofollow` | ✅ |
| Onbekende subroute `/admin/heritage` | HTTP **404** (geen splat-lek) | ✅ |
| Wrapper-library | `AdminChart`, `AdminTable`, `AdminDatepicker`, `AdminScroll`, `AdminPage`, `loadVendor` aanwezig en gebarreld via `@/lib/admin` | ✅ |
| Meta-registry | `src/lib/admin/pages/meta.ts` met één entry (`index`) + uitbreidpatroon | ✅ |

### 3.2 Wat ontbreekt

| Ontbrekend | Bewijs | Impact voor Fase 5 |
| --- | --- | --- |
| **Auth-stub / toegangspoort** | `/admin` geeft HTTP 200 zonder inlog; `input[type=password]` niet aanwezig; de auth-routes zijn in de pre-Akte-2 cleanup verwijderd (`MASTER_TASKS`, Cleanup) | **blokkerend** — een CMS zonder toegangscontrole kan geen redactiegegevens beheren |
| **CRUD-routes** | sidebar bevat exact één item ("Dashboard"); `src/routes/admin/` bevat één bestand (`index.tsx`) | blokkerend voor beheer van de 9 PK-contenttypen |
| **Datalaag** | geen enkele data-fetch in de admin; MySQL/Hostinger-fase is per `phase-gates.md` nog niet begonnen | blokkerend; vereist eigen Lane C-TC's + db-guard |
| **Dashboard-inhoud** | body is een placeholderkaart: "Placeholder — build your dashboard with the Devmart Admin library" | cosmetisch |
| **Darkone-restanten in de footer** | gerenderde tekst bevat letterlijk `document.write(new Date().getFullYear()) © Darkone by StackBros` | cosmetisch, maar vreemde merknaam in de UI |
| **Externe font-CDN** | `/admin` laadt `fonts.googleapis.com` (fix-lijst 8, `PK-CODEX-AUDIT-001`) | privacy/AVG-aandachtspunt bij oplevering |

### 3.3 Oordeel

> **KLAAR-MET-VOORWAARDEN.**

De *fundering* is er en is aantoonbaar solide: de shell rendert foutloos, de
CSS/JS-isolatie is hard geverifieerd (0 admin-bytes op de publieke shell), de
React-wrapperlibrary is intact, en het patroon om een pagina toe te voegen
(route + `meta.ts`-entry, óf React-first met de wrappers) is gedocumenteerd en
werkt. Er is geen herbouw nodig.

De *CMS-functionaliteit* is nul: één route, geen auth, geen data. Voorwaarden
vóór Fase 5 kan starten:

1. **Auth-stub met een echte gate** (Lane C, db-guard verplicht) — `/admin/*`
   mag niet publiek bereikbaar zijn.
2. **Routeplan + `meta.ts`-uitbreiding** voor de negen PK-contenttypen
   (Heritage, Artist, Organization, Event, Media, Story, Collection, Category,
   instellingen) — één beheerroute per type.
3. **Datalaag-TC's per onderdeel** (MySQL/Hostinger), pas ná CUT-5 conform
   `phase-gates.md` regel 4.
4. **Publicatie-lifecycle** (Concept → Review → Goedgekeurd → Gepubliceerd →
   Gearchiveerd) als eerste-klas veld — vereist door de blauwdruk in §4 en nu
   nergens in de UI aanwezig.

---

## 4. Spoor 4 — Dynamic-vs-statisch-blauwdruk (datawiring Fase 5)

`DYNAMIC` = de sectie wordt in Fase 5 gevuld vanuit de admin. `STATISCH` = vaste
template-/chrome-sectie zonder redactioneel beheer. Kolom "PK-contenttype" noemt
het type dat de sectie voedt.

### 4.1 Globale chrome (geldt op alle 22 routes)

| Sectie | Klasse | Classificatie | PK-contenttype |
| --- | --- | --- | --- |
| Topbar | `.topbar` | STATISCH | — (taalswitcher: instellingen) |
| Header + hoofdmenu | `.header-area` | **DYNAMIC** | instellingen → navigatie/menu |
| Kruimelpad | `.top-area` | STATISCH | afgeleid van route + recordtitel |
| Thema-switch | `.tt-style-switch` | STATISCH | — |
| Scroll-to-top | `.circle-container` | STATISCH | — |
| Footer | `.footer-section` | **DYNAMIC** | instellingen → footertekst, kolommen, socials, nieuwsbrief |

### 4.2 Per route

| Route | Sectie | Classificatie | PK-contenttype |
| --- | --- | --- | --- |
| `/` | `.home2-search-bar-section` | STATISCH | — |
| `/` | `.home2-banner-section` (hero) | **DYNAMIC** | instellingen → homepage-hero |
| `/` | `.home1-auction-slider-section` ("Uitgelicht erfgoed") | **DYNAMIC** | **Heritage** (featured-selectie) |
| `/` | `.home2-category-section` ("Ontdek") | **DYNAMIC** | **Category** (7 ingangen) |
| `/` | `.home2-artist-section` | **DYNAMIC** | **Artist** (featured) |
| `/` | `.home1-general-art-slider-section` ("Aankomende evenementen") | **DYNAMIC** | **Event** (aankomend) |
| `/` | `.home2-about-section` + counters | **DYNAMIC** | instellingen → missietekst + 4 statistieken |
| `/` | `.home1-article-section` ("Laatste verhalen") | **DYNAMIC** | **Story** (laatste) |
| `/about` | `.discover-section` | **DYNAMIC** | instellingen → over-blok |
| `/about` | `.home1-artistic-section` ("Onze werkwijze") | **DYNAMIC** | instellingen → pijlers |
| `/about` | `.behiend-us-section` ("Ons verhaal") | **DYNAMIC** | instellingen → stichtingsverhaal |
| `/about` | `.home1-feature-section` ("Waar wij voor staan") | **DYNAMIC** | instellingen → waarden |
| `/about` | `.enquery-section` | STATISCH | CTA naar `/contact` |
| `/accessibility` | `.terms-and-conditions-page` | **DYNAMIC** | instellingen → juridische pagina (toegankelijkheid) |
| `/artists` | `.breadcrumb-section2` | **DYNAMIC** | instellingen → paginakop/-intro |
| `/artists` | `.artist-grid-section` | **DYNAMIC** | **Artist** (lijst + filters) |
| `/artists/portfolio` | `.breadcrumb-section` | **DYNAMIC** | **Artist** (record) |
| `/artists/portfolio` | `.auction-card-sidebar-section` | **DYNAMIC** | **Heritage** / **Media** gekoppeld aan Artist |
| `/collections/$slug` | `.breadcrumb-section2` | **DYNAMIC** | **Collection** (kop + beschrijving) |
| `/collections/$slug` | `.auction-card-sidebar-section` | **DYNAMIC** | **Collection** → gemengde records |
| `/contact` | `.contact-page` | **DYNAMIC** | instellingen → contactgegevens; formulier = Fase 5-inzending |
| `/events` | `.articel-section` | **DYNAMIC** | **Event** (lijst + filters) |
| `/events/details` | `.details-page-wrapper` | **DYNAMIC** | **Event** (record) |
| `/faq` | `.home1-faq-section` | **DYNAMIC** | instellingen → FAQ-items (vraag/antwoord) |
| `/faq` | `.enquery-section` | **DYNAMIC** | instellingen → contactgegevens |
| `/heritage` | `.breadcrumb-section2` | **DYNAMIC** | instellingen → paginakop/-intro |
| `/heritage` | `.auction-card-sidebar-section` | **DYNAMIC** | **Heritage** (lijst + filters + **Category**) |
| `/heritage/upcoming` | `.breadcrumb-section2` | **DYNAMIC** | instellingen → paginakop/-intro |
| `/heritage/upcoming` | `.auction-card-sidebar-section` | **DYNAMIC** | **Heritage** gefilterd op status |
| `/heritage/details` | `.auction-details-section` | **DYNAMIC** | **Heritage** (record + **Media**-galerij) |
| `/heritage/details` | `.product-description` | **DYNAMIC** | **Artist** (gekoppeld) |
| `/heritage/details` | `.home1-auction-slider-section` | **DYNAMIC** | **Heritage** (gerelateerd) |
| `/media` | `.breadcrumb-section2` | **DYNAMIC** | instellingen → paginakop/-intro |
| `/media` | `.auction-card-sidebar-section` | **DYNAMIC** | **Media** (lijst + rechten/attributie) |
| `/organizations` | `.breadcrumb-section2` | **DYNAMIC** | instellingen → paginakop/-intro |
| `/organizations` | `.artist-grid-section` | **DYNAMIC** | **Organization** (lijst) |
| `/organizations/details` | `.breadcrumb-section` | **DYNAMIC** | **Organization** (record) |
| `/organizations/details` | `.auction-card-sidebar-section` | **DYNAMIC** | **Heritage** / **Event** gekoppeld aan Organization |
| `/privacy` | `.terms-and-conditions-page` | **DYNAMIC** | instellingen → juridische pagina (privacy) |
| `/search` | `.breadcrumb-section2` | STATISCH | zoekterm-echo |
| `/search` | `.auction-card-sidebar-section` | **DYNAMIC** | **alle** contenttypen (index) |
| `/stories` | `.articel-section` | **DYNAMIC** | **Story** (lijst + filters) |
| `/stories/details` | `.details-page-wrapper` | **DYNAMIC** | **Story** (record) |
| `/terms` | `.terms-and-conditions-page` | **DYNAMIC** | instellingen → juridische pagina (voorwaarden) |
| 404-splat | `.terms-and-conditions-page` | STATISCH | — |

### 4.3 Samenvatting blauwdruk

| Classificatie | Chrome (§4.1) | Routes (§4.2) | Totaal |
| --- | --- | --- | --- |
| DYNAMIC | 2 | 41 | **43** |
| STATISCH | 4 | 4 | **8** |

Beheerschermen die hieruit volgen voor de admin (Fase 5), gesorteerd op aantal
gevoede secties:

| PK-contenttype | Voedt secties | CRUD-scherm nodig |
| --- | --- | --- |
| **instellingen** | 19 | ja — gegroepeerd (homepage, over, contact, juridisch, FAQ, footer, navigatie, statistieken) |
| **Heritage** | 7 | ja |
| **Artist** | 4 | ja |
| **Story** | 3 | ja |
| **Event** | 3 | ja |
| **Collection** | 2 | ja |
| **Organization** | 2 | ja |
| **Media** | 1 (+ galerij binnen Heritage) | ja |
| **Category** | 1 (+ filterset op 5 listings) | ja |

`/search` → `.auction-card-sidebar-section` wordt gevoed door **alle** typen
tegelijk (zoekindex) en is daarom niet aan één type toegerekend.

Aanvullend, uit `06-content-audit.md` §D.3 en hier bevestigd: elk detailscherm
heeft een **publicatiestatus**, **bron** en **rechten** nodig — die velden komen
nergens in de huidige UI voor en moeten in Fase 5 zowel in de admin als op de
publieke detailpagina's landen.

---

## 5. Verificatie (beschermde paden)

| Gate | Resultaat |
| --- | --- |
| `main.js` SHA-256 | zie §5.1 — gelijk aan `.claude/rules/file-boundaries.md` |
| `/admin` en `public/admin/**` gewijzigd? | nee — alleen gelezen en gemeten |
| `/account.*`, `/wishlist`, `/certificate` | niet bezocht, niet gewijzigd |
| Repo-diff van deze ronde | uitsluitend `docs/prani-kulturu/13-frontend-audit.md` |
| Harness-hygiëne | uitsluitend `pk-*`-bestanden toegevoegd; agida/dpd/w105 onaangeroerd |

### 5.1 Hashcheck

```
sha256  093a349a5bb008806fcffef5887e8ab460c1664801d449ca50c7b79e0b84dfc3
        public/artmart/assets/js/main.js
```

---

## 6. Genummerde fix-lijst voor TC-PK-006

Severity: **HIGH** = blokkeert oplevering/CUT-5-kwaliteit · **MEDIUM** = duidelijk
defect, niet blokkerend · **LOW** = hygiëne.

| # | Severity | Bevinding | Route(s) / sectie | Aard van de fix |
| --- | --- | --- | --- | --- |
| **1** | HIGH | `/accessibility` is een byte-identieke kopie van `/privacy` (2.666 tekens, zelfde koppen, kruimelpad "Bronnen / Privacy") | `/accessibility` → `.terms-and-conditions-page` + `.top-area` | eigen toegankelijkheidsverklaring (inhoud van Delroy) + kruimelpad corrigeren |
| **2** | HIGH | Logo toont het woordmerk "Artmart" op alle 22 routes; `alt=""` | globaal, `.header-logo` + `.footer-logo` | vervangend logobestand (SVG) + zinvolle `alt` |
| **3** | HIGH | Paginatitel `/terms` = "Artmart - Art & Archief HTML Template." | `/terms` `<head>` | route-`head()` met NL-titel + description |
| **4** | HIGH | Slechts 3 unieke titles en 3 unieke meta-descriptions over 22 routes; geen canonical op enige route | alle routes | per-route `head()` (Round G alsnog uitvoeren) + canonical |
| **5** | HIGH | `nodeName`-pageerror op 22/22 routes uit `range-slider.js:1696` (init op een niet-bestaand element) | globaal | conditionele init óf het vendorbestand niet laden op routes zonder prijsslider — **`main.js` niet aanraken** |
| **6** | HIGH | D2: één collectie-description op 7 verschillende archiefroutes, op 5 daarvan inhoudelijk onjuist | `.breadcrumb-section2` op `/artists`, `/heritage`, `/heritage/upcoming`, `/media`, `/organizations`, `/search` (+ `/collections` correct) | per route een unieke intro |
| **7** | HIGH | D3: dezelfde zin op 5 opeenvolgende homepagesecties + op `/contact` | `/` (5 secties), `/contact` `.contact-page` | per sectie een unieke description |
| **8** | HIGH | Taalswitcher toont "English" als actieve taal met 6 niet-werkende talen op een NL-first site | globaal `.language-area` | besluit Delroy: label → "Nederlands" (tekstfix) óf switcher verwijderen (structuurwaiver nodig) |
| **9** | MEDIUM | `/organizations` toont de kop "Uitgelichte kunstenaars"; `/organizations/details` is inhoudelijk een kunstenaarspagina (D5/D6) | `/organizations*` | koppen, descriptions en placeholderfamilie naar Organization |
| **10** | MEDIUM | `/events` gebruikt de placeholderfamilie "Verhaal uit het archief"; `/events/details` is byte-identiek aan `/stories/details` | `/events*` | Event-placeholderfamilie + eventvelden (datum, locatie, organisator) |
| **11** | MEDIUM | Buitenlandse levensjaren op kunstenaarskaarten (1907–1954, 1881–1973, 1452–1519, 1904–1989, 1863–1944) | `/artists`, `/organizations` | vervangen door redactionele placeholder ("levensjaren volgen") |
| **12** | MEDIUM | Placeholdernummering inconsistent: "Voorbeeldrecord 4" en "5" elk 2× op `/`; eerste kaart op `/artists`/`/organizations` ongenummerd; "Voorbeeld bijdrager" tussen kunstenaarskaarten; spellingvariant "Voorbeeldkunstenaar" | `/`, `/artists`, `/organizations`, `/artists/portfolio`, `/organizations/details` | één familie per contenttype, sluitend doorgenummerd |
| **13** | MEDIUM | Twee families voor hetzelfde type: "Voorbeeldrecord N" naast "Erfgoedrecord" (ongenummerd) in dezelfde slider | `/`, `/heritage/details` | familie samenvoegen |
| **14** | MEDIUM | 192 `href="#"`-no-ops op de publieke routes (281 repo-breed, PK-006 bevestigd) | alle routes | classificeren als route / knop / bewuste no-op + toetsenbordsemantiek |
| **15** | MEDIUM | `/privacy` draagt onder de kop "Privacyverklaring" voorwaardenclausules (kosten, beëindiging, aansprakelijkheid) | `/privacy` | echte privacytekst (inhoud van Delroy) |
| **16** | MEDIUM | D4/D5/D6: dubbele descriptions tussen `/` en `/about`, en tussen `/artists/portfolio` en `/organizations/details` | genoemde secties | per sectie unieke tekst |
| **17** | MEDIUM | 16 inhoudelijke secties hebben helemaal geen description | zie §1.2 | elke sectie een eigen description-slot vullen |
| **18** | LOW | Homepage-counters tonen ArtMart-demowaarden 65 / 1.5 / 800 / 1 | `/` `.home2-about-section` | waarden als instelling; tot dan neutrale placeholder |
| **19** | LOW | `/terms` toont "Laatst bijgewerkt 2 februari 2023" (templatedatum) en "Voorbeeldtekst…" | `/terms` | redactionele placeholder of echte datum |
| **20** | LOW | Anglicisme "tangibel" in de description van "Waar wij voor staan" | `/about` `.home1-feature-section` | redactionele correctie |
| **21** | LOW | Admin-footer rendert letterlijk `document.write(new Date().getFullYear()) © Darkone by StackBros` | `/admin` (eigen TC vereist — beschermd pad) | Devmart-footer; **niet** in TC-PK-006 zonder expliciete admin-TC |
| **22** | LOW | `/admin` laadt Google Fonts van een externe CDN | `/admin` (eigen TC vereist) | lokaal font of verwijderen — fix-lijst 8 |

**Volgorde-advies:** 1–8 vóór CUT-5 (zichtbaar voor bezoekers en zoekmachines);
9–17 in dezelfde fixronde als de content-pass; 18–20 als hygiëne; 21–22 in een
aparte admin-TC omdat `/admin` een beschermd pad is
(`.claude/rules/file-boundaries.md`).

---

## 7. Operationele meldingen (Guardian Rule 5, uitzondering)

1. **`.claude/rules/phase-gates.md` noemt CUT-4b als actieve fase**, terwijl
   TC-PK-003 (CUT-4c), TC-PK-004 (CUT-4d) en deze TC (CUT-4e) al zijn
   goedgekeurd. Het fasemodel in dat bestand kent CUT-4d/4e niet. Documentdrift,
   geen uitvoeringsblokkade — vraagt om een besluit van Delroy.
2. **`/admin` is zonder inlog bereikbaar** (HTTP 200, geen auth-gate). Gemeld als
   veiligheidsrisico; niet gefixt (beschermd pad, buiten scope).
3. **Fix 5 hoeft `range-slider.js` zelf niet te wijzigen.** Het bestand wordt
   geladen via de scriptlijsten in `src/components/artmart/frame.tsx:37` en
   `src/components/artmart/artmartInit.ts:32`; de fix hoort daar thuis.
   TC-PK-006 moet beide bestanden expliciet in de File Boundary noemen en
   `public/artmart/assets/js/**` als niet-wijzigbaar bevestigen.

---

## 8. Stop-conditie

Vier auditsporen uitgevoerd, alle bevindingen met gemeten bewijs, fix-lijst met
22 genummerde punten opgesteld, CMS-oordeel **KLAAR-MET-VOORWAARDEN** geveld en
de blauwdruktabel voor Fase 5 vastgelegd. De `pk-*`-scripts blijven in de
harness staan als regressiebasis. **Geen fixes, geen push.** Wachten op Delroy;
de fixronde wordt TC-PK-006.
