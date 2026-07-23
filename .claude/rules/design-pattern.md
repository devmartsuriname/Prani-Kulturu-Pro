# Design Pattern (D-19) — Prani Kulturu Pro

> Bindende ontwerpregel. Autoriteit: Delroy. Vastgelegd onder TC-PK-007 (CUT-4g).

---

## D-19 — Geen custom UI; alles uit de ArtMart-template

Elke wijziging aan de publieke frontend gebruikt **bestaande ArtMart-blokken,
-patronen, -classes, -typografie en -effecten** uit de gekochte template. Custom
invulling mag **uitsluitend binnen** dat patroon (tekst, NL-labels, placeholders,
herschikking van bestaande blokken).

- **Referentie (leidend):** `https://demo.egenslab.com/html/artmart/preview/`
- **Bij twijfel wint het demo-patroon.** Wijkt een instructie aantoonbaar van de
  demo af, dan is dat een expliciete, gemotiveerde uitzondering in de Task
  Contract (met waiver) — anders geldt de demo.
- **Verboden:** nieuwe/eigen componenten, eigen CSS-componentregels, verzonnen
  layouts, of markup die niet uit de template komt.
- **Toegestaan mits binnen het patroon:** herbruik van template-blokken
  (kaarten, sidebar-widgets, accordeon, tabs, sliders, badges), NL-teksten en
  gemarkeerde placeholders.

## Reikwijdte

Geldt voor alle publieke routes en gedeelde shell (`src/routes/*.tsx`,
`src/components/artmart/**`). Beschermde paden en byte-identieke bestanden blijven
onder [`file-boundaries.md`](file-boundaries.md); effect-CSS/JS
(`public/artmart/assets/js/**`, main.js, vendors) blijft ongemoeid.

## Toepassingsvoorbeelden (TC-PK-007)

- Event-kaart en event-detail zijn opgebouwd uit het bestaande `auction-card`-
  en detail-blok — geen nieuwe kaartcomponent.
- Zoek/filter-sidebars hergebruiken de ArtMart `sidebar-area` /
  `single-widgets` / `checkbox-container`-widgets; alleen labels en waarden zijn
  NL en contentspecifiek.
- Het lege `<strong>` in `.btn-hover` blijft leeg (ripple-fill), exact zoals de
  demo — niet vullen met tekst.
