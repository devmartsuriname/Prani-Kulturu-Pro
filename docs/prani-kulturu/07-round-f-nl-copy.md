# 07 — Round F: Nederlandse copy + toegankelijkheid

Content + a11y pass, geen structuur- of effect-wijzigingen.

## Uitgevoerd

**Chrome (alle publieke routes, ~30 bestanden)**
- Mega-menu top-level "Kunst" (met `mega-menu2` Shop/Artist/Category/Department) verwijderd.
- "Home 1 / Home 2" submenu weg — Home is nu een enkele link.
- Kunstenaars-mega-menu: echte namen vervangen door "Voorbeeld kunstenaar 1..6", landen door "—".
- "See All" → "Bekijk alles". "About us" → "Over ons". "F.A.Q" → "Veelgestelde vragen".
- Footer "Departments"- en "Support Center"-links verwijderd (dode links).
- Copyright "©2025" → "©2026" (incl. mojibake `Â©`).
- Socials: `aria-label` toegevoegd op alle icon-only social `<a>`.
- Header theme-switch: "Dark/Light" → "Donker/Licht".
- `alt="image"` → `alt=""` op decoratieve template-afbeeldingen.

**Editoriale copy (binnen slot-lengte)**
- `/`: hero-claim NL ("De ontmoetingsplek van Surinaams erfgoed"), CTA-teksten NL.
- `/about`: sectietitels (Missie/Visie/Stichting/Aanpak) NL.
- `/contact`: veldlabels NL (Naam/E-mail/Bericht/Onderwerp/etc).
- `/faq`, `/search`: kop en zoek-labels NL.

**Record placeholders (site-wide, geen verzonnen feiten)**
- Kaart-titels genummerd ("Erfgoedrecord 1", "Erfgoedrecord 2", ...).
- "Artist : ..." → "Kunstenaar: Voorbeeld kunstenaar".
- Commerce-restanten: "Nu kopen" → "Bekijk record"; "Price : ..." verwijderd.

**A11y**
- `<html lang="nl">` in `__root.tsx`.
- `:focus-visible` sage-green outline (was al aanwezig in `prani-brand.css`).
- `@media (prefers-reduced-motion: reduce)` blok toegevoegd aan `prani-brand.css` — animation/transition-durations naar 0.001ms, marquee uit; effects blijven geïnitialiseerd.
- Icon-only knoppen: `aria-label` op socials en menu-close.

## Lengte-discipline

Het dev-script `scripts/roundf-nl-copy.mjs` (verwijderd na uitvoering) hanteerde een assert `nl.length <= en.length + 5`. Bij overtreding werd de vervanging overgeslagen en het proces afgebroken. Eén overtreding gevonden en gecorrigeerd:

- `"No results found"` (16) → `"Geen resultaten gevonden"` (24) ✗ → `"Niets gevonden"` (14) ✓

## Buiten scope (onaangeroerd)

`main.js`, `artmartInit.ts`, `src/styles.css`, branding-tokens, `/admin`, `admin/*`, `account.*` dashboard-bodies, `wishlist.tsx` body, `certificate.tsx` body. Chrome-pass wél op alle bestanden zodat header/footer overal identiek zijn.

## Reproduceerbaarheid

Het script is dev-only en verwijderd. Om dezelfde pass opnieuw uit te voeren: reconstrueer `scripts/roundf-nl-copy.mjs` volgens dit document — regex-transformaties op de escaped-string `BODY_HTML` in elke `src/routes/*.tsx`, met de bovenstaande woordenboek-vervangingen en length-assert.
