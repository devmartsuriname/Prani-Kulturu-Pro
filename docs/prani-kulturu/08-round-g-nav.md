# 08 — Round G — Header navigation restructure

## Doel

Header top-level nav bracht de volledige PK-informatiearchitectuur naar boven.
Van 4 template-items (Home · Kunstenaars · Contact · Bronnen) naar 9 PK-items:

`Home · Erfgoed · Kunstenaars · Organisaties · Agenda · Verhalen · Media · Over · Contact`

Zoeken blijft rechts als icoon (link → `/search`). Utility-pagina's (FAQ,
Toegankelijkheid, Privacy, Voorwaarden) zitten onder de "Over" dropdown en
blijven daarnaast in de footer. Contact is een top-level item en verschijnt
niet nog eens in de "Over" dropdown.

## Dropdowns

- **Erfgoed**: Alle erfgoed → `/heritage`, Binnenkort → `/heritage/upcoming`,
  Collecties → `/collections/tangible`.
- **Over**: Over ons, Veelgestelde vragen, Toegankelijkheid, Privacybeleid,
  Voorwaarden.
- Alle andere items: plain link, geen dropdown.

## Uitvoering

Tijdelijk dev-script `scripts/roundg-nav.mjs` (Node, geen runtime-deps):

1. Loop over `src/routes/*.tsx` (skip `__root.tsx`, `admin.tsx`, `$.tsx`).
2. Vindt `<ul class="menu-list">…</ul>` via balanced `<ul>`/`</ul>` walker in de
   escaped-string body, vervangt door één canonieke NL-versie.
3. Zet `active` class op het item dat overeenkomt met het route-pad
   (mapping in het script).
4. Skip search-toggle rewrite (klassen kwamen niet voor in de huidige body's).

Script is verwijderd na de ronde.

## CSS

Één media-query appended aan `public/artmart/assets/css/prani-brand.css` om
de 9 items op 992–1199px in de rij te houden:

```css
@media (max-width: 1199.98px) {
  .main-menu .menu-list { gap: 18px; }
}
```

Geen branding-tokens gewijzigd; `src/styles.css` onaangeroerd.

## Buiten scope

`main.js`, `artmartInit.ts`, `src/styles.css`, branding-tokens, footer-inhoud,
body-secties onder de header, `/admin`, `admin/*`, `account.*` bodies,
`wishlist.tsx`/`certificate.tsx` bodies. Geen route-structuur wijzigingen.
