# 06 — Content Audit (Round F.audit)

Read-only audit of every public route and every ArtMart section within it,
mapped against the Prani Kulturu (PK) content model. **No app files changed
this round.** The only write is this document. Route state reflects the port
after Rounds C / D / D.1 / E / E.1.

Legend for "current content":
- **NL-labels** — Dutch chrome/labels applied (Round C), body copy still
  behind `<!-- NL-COPY-PENDING -->`.
- **Placeholder** — verbatim ArtMart demo copy / imagery.
- **Auction remnant** — commerce/auction wording or UI that violates the
  no-commerce rule.
- **English long-form** — `NL-COPY-PENDING` prose not yet translated.

Actions: `translate-NL` | `repurpose` | `fill-real-content` | `remove` | `add`.

---

## A. Global chrome (audited once, applies to every public route)

| location | section wrapper | current content | desired PK content type | key fields/blocks | action |
| --- | --- | --- | --- | --- | --- |
| all | `.header-area .main-menu` (mega-menu) | NL-labels applied for top items (Kunstenaars, Kunst, Bronnen, Contact); submenu still shows `Home 1 / Home 2`, `Artist Name`, `Category` (Painting, Sculpture, Print, Street Art), `Department` (Post War, Contemporary Art), `Shop catalog`, "See All", plus two `auction-card` promos with `Live` / `upcoming` batches, `data-countdown`, `Current Bidding : $200.00 / $280.00` | Navigation + curated highlights (Erfgoed / Kunstenaars / Organisaties / Agenda / Verhalen / Media / Zoeken) | Top-level: Home, Erfgoed, Kunstenaars, Organisaties, Agenda, Verhalen, Media, Over, Contact. Mega-menu highlights: featured heritage record, featured artist, featured story — no prices, no countdowns | translate-NL + repurpose (drop "Home 1/Home 2", "Shop catalog", art-market category axes; replace auction promo cards with heritage/story highlights; remove `Current Bidding` + `data-countdown`) |
| all | `.footer-section` | NL-labels + ArtMart footer columns (Quick Links, Contact, Newsletter), payment-method icons (visa/mastercard/amex/maestro) | Institutional footer for a heritage foundation | Columns: Over PK, Ontdek (Erfgoed/Kunstenaars/Organisaties/Agenda), Meedoen (Bijdragen/Contact), Juridisch (Privacy/Voorwaarden/Toegankelijkheid). Newsletter optional. Socials. Copyright + KvK/ANBI slot | translate-NL + repurpose (remove payment icons, replace column titles/links, remove any "shop"/"buy" wording) |
| all | `.tt-style-switch` (dark/light) | ArtMart light/dark toggle | Optional UI toggle | – | keep as-is (visual only) |
| all | `.circle-container` (scroll-to-top) | ArtMart scroll-top | – | – | keep |
| all | `.home2-search-bar-section` (on `/`) | ArtMart quick-search UI, English placeholder | Site-wide search entrypoint | Search input → `/search`, category chips = cultural domains | translate-NL + repurpose |

---

## B. Route-by-route table

### `/` (`index.tsx`) — 7 sections (post Round E.1)

| section wrapper | current content | desired PK content type | key fields/blocks | action |
| --- | --- | --- | --- | --- |
| `.home2-banner-section` (Hero) | Placeholder art-market hero copy, English | Editorial hero for PK | Kicker, H1 (mission-line NL), lede (1-2 zinnen), primary CTA → `/heritage`, secondary CTA → `/about`, hero image (rights-cleared) | translate-NL + fill-real-content |
| `.home1-auction-slider-section` ("Uitgelicht erfgoed") | Auction slider cards: `data-countdown`, `Current Bidding : $…`, `Live/upcoming` batch | Featured Heritage records (editorial highlight) | Card: title, kort excerpt, cultural domain badge, hero image, `Meer lezen` → `/heritage/details` | repurpose (remove countdown, price, bid label, Live/upcoming batch; keep slider effect) |
| `.home2-category-section` ("Ontdek") | 7 mosaic tiles → `/heritage`, `/artists`, `/organizations`, `/events`, `/media`, `/stories`, `/collections/erfgoed` (Round E.1) | Discovery entrances | Tile: label, image, href — labels are correct; images still ArtMart demo | fill-real-content (swap 7 demo images for PK-owned imagery; labels/hrefs OK) |
| `.home2-artist-section .home2-artist-slider` ("Uitgelichte kunstenaars", carousel 4) | 4 artist cards, English names (Frida Kahlo etc.), placeholder portraits | Featured Artists (Kunstenaar) | Card: name, cultural domain, region, portrait, link → `/artists/portfolio` | fill-real-content (real Surinamese artists w/ portraits + rights) |
| `.home1-general-art-slider-section` ("Aankomende evenementen") | ArtMart "general art" slider — art thumbnails + artist names | Upcoming Events (Agenda) | Card: title, date, location, organizer, image, link → `/events/details` | repurpose (rewire card fields to Event; remove any price/artist tagline) |
| `.home2-about-section` ("Ontdek onze essentie") | ArtMart about + `.counter` block (stats), English long-form under NL-COPY-PENDING | PK mission band + stats | Kort mission NL, 3-4 counters (records, kunstenaars, organisaties, evenementen) | translate-NL + fill-real-content (counter targets managed via admin) |
| `.home1-article-section` ("Laatste verhalen") | Article slider, English titles, generic tags | Latest Stories (Verhaal) | Card: date, category (verhaal/nieuws/interview), title, excerpt, author, hero, link → `/stories/details` | repurpose + fill-real-content |
| **Home gap** | – | Editorial image/text story band | Wide image + long lede + link into a hero story | **add** (flag §D.1) |
| **Home gap** | – | Media highlight strip | Row of 4-6 media thumbnails w/ attribution → `/media` | **add** (flag §D.1) |
| **Home gap** | – | Organization / partner highlight | Logo/text row → `/organizations` | **add** (flag §D.1) |
| **Home gap** | – | Closing "meedoen / contact" CTA | Band with CTA → `/contact` | **add** (flag §D.1) |

### `/about`

| section | current | PK type | key fields | action |
| --- | --- | --- | --- | --- |
| `.behiend-us-section` | English about copy | About PK (Story-like editorial) | Missie, visie, geschiedenis stichting | translate-NL + fill-real-content |
| `.home1-artistic-section` | Art-market copy | Werkgebieden PK | 3-4 pijlers (Erfgoed, Verhalen, Educatie, Community) | repurpose + translate-NL |
| `.discover-section` | Placeholder | Wat je kunt ontdekken | Links naar Erfgoed/Kunstenaars/Agenda | translate-NL |
| `.home1-feature-section` | Feature grid | Waarden / werkwijze | 3-4 waarden-blokken | repurpose |
| `.home1-testimonial-section` | **Buyer testimonials** (auction remnant) | Getuigenissen partners/artiesten | Naam, functie, organisatie, quote | repurpose (remove buyer framing) |
| `.enquery-section` | Contact strip | Contact CTA | Link → `/contact` | translate-NL |

### `/heritage` (`heritage.index.tsx`)

| section | current | PK type | key fields | action |
| --- | --- | --- | --- | --- |
| `.breadcrumb-section` | "Auctions" breadcrumb likely translated | – | Titel: Erfgoed | translate-NL check |
| `.auction-card-sidebar-section` | Auction cards with `Current Bid`, price, `Add to Wishlist`, sidebar met price-range, artist filter, "Auction status" | Heritage archive listing | Card: title, cultural domain, category, region, thumbnail, status (Concept/Publiek), link → `/heritage/details`. Sidebar filters: cultureel domein, categorie, regio, tijdvak, materiaal, publicatiestatus. Search + sort (nieuwste, alfabetisch) | repurpose (drop price/bid/countdown/wishlist; swap filters from art-market → PK taxonomy) |
| `.footer-section` | Global | – | – | – |
| **Gap** | – | Featured/lead flag on listing | – | **add** (flag §D.3) |
| **Gap** | – | Cultural-domain filter as first-class axis | – | **add** (flag §D.3) |

### `/heritage/upcoming` (`heritage.upcoming.tsx`)

| section | current | PK type | key fields | action |
| --- | --- | --- | --- | --- |
| `.breadcrumb-section` | "Upcoming Auctions" | – | Titel: Binnenkort gepubliceerd | translate-NL |
| `.auction-card-sidebar-section` | Same as `/heritage` with countdown timers | Heritage: aankomend / in review | Zelfde als `/heritage`, filter `status = In review / Gepland` | repurpose (remove countdown; consider merging into `/heritage` with a filter — **flag Delroy**) |

### `/heritage/details`, `/heritage/details-2`, `/heritage/details-3`

Three near-identical ArtMart auction-detail layouts.

| section | current | PK type | key fields | action |
| --- | --- | --- | --- | --- |
| `.auction-details-section` | Auction detail: **big price, "Current Bid", bid-history table, "Place a Bid" form, countdown timer, `Add to Wishlist`, `Buy Now`-styled CTAs, "Certificate of Authenticity" upsell** | Heritage record page | Hero, titel, cultureel domein badge, categorie, tijdvak, herkomst, samenvatting, body (rich text), bronvermelding, rechtenstatus, authenticiteitsnotitie, media-galerij (met alt/caption/attributie), gerelateerde records rail, gerelateerde kunstenaars/organisaties, "Meld correctie / info" formulier | repurpose (remove all bid/price/wishlist/certificate blocks; keep gallery + tabs skeleton) |
| `.home1-auction-slider-section` ("Verwante records") | Auction slider | Related Heritage rail | Zelfde als hero cards, sans price | repurpose |
| **Note** | 3 detail variants exist | 1 canonical detail page | – | **flag Delroy**: keep only one variant, other twee als layout-varianten schrappen (rule 2 waiver nodig) |

### `/artists` (`artists.index.tsx`)

| section | current | PK type | key fields | action |
| --- | --- | --- | --- | --- |
| `.breadcrumb-section` | "Artists" | – | Kunstenaars | translate-NL |
| `.artist-grid-section` | Grid of artist cards, English names, generic tags | Artist directory | Card: naam, cultureel domein, discipline, regio, portret, link → `/artists/portfolio`. Filters: domein, discipline, regio, alfabet | translate-NL + fill-real-content |

### `/artists/portfolio` (`artists.portfolio.tsx`)

| section | current | PK type | key fields | action |
| --- | --- | --- | --- | --- |
| `.breadcrumb-section` | "Artist Portfolio" | – | – | translate-NL |
| `.biography-section` + `.biography-right-section` | English artist bio placeholder | Artist profile | Portret, naam, discipline(s), cultureel domein, regio, korte bio, lange bio, contact/inquiry knop, socials | translate-NL + fill-real-content |
| `.awards-section` | ArtMart awards timeline | Loopbaan / erkenning | Jaar, titel, organisatie | repurpose |
| `.auction-card-sidebar-section` ("Werken van deze kunstenaar") | Auction-card grid met price/bid | Portfolio: gerelateerde Heritage / Media / Verhalen | Card: titel, domein, thumbnail — géén prijs | repurpose (remove price/bid) |
| **Gap** | – | Record-linked contact/inquiry form | – | **add** (flag §D.3) |

### `/organizations` (`organizations.index.tsx`)

| section | current | PK type | key fields | action |
| --- | --- | --- | --- | --- |
| `.breadcrumb-section` | "Organizations" | – | Organisaties | translate-NL |
| `.artist-grid-section` (reused van artists) | Placeholder artist cards | Organization directory | Card: naam, korte omschrijving, locatie, logo, link → `/organizations/details`. Filters: type organisatie, regio, cultureel domein | repurpose + fill-real-content |

### `/organizations/details` (`organizations.details.tsx`)

| section | current | PK type | key fields | action |
| --- | --- | --- | --- | --- |
| `.breadcrumb-section` | Generic | – | – | translate-NL |
| `.biography-section` + `.biography-right-section` | Artist-bio layout | Organization profile | Naam, missie, beschrijving, locatie, contact, website, socials, oprichtingsjaar, logo | repurpose |
| `.awards-section` | Awards | Mijlpalen / projecten | – | repurpose |
| `.auction-card-sidebar-section` | Auction cards | Gerelateerde Heritage/Events/Stories | – | repurpose (no price) |

### `/events` (`events.index.tsx`)

| section | current | PK type | key fields | action |
| --- | --- | --- | --- | --- |
| `.articel-section` (article grid, reused) | Article cards with English titles | Event directory | Card: datum (start–eind), titel, locatie, organisator, hero, link → `/events/details`. Filters: maand, regio, type, organisator. Toggle: lijst / kalender | repurpose + fill-real-content |
| **Gap** | – | Kalender-view + iCal download | – | **add** (flag §D.3) |

### `/events/details` (`events.details.tsx`)

| section | current | PK type | key fields | action |
| --- | --- | --- | --- | --- |
| (article-detail wrappers) | Article detail placeholder | Event detail | Hero, titel, datum + tijd, locatie (kaart optie), organisator, beschrijving (rich text), gerelateerde kunstenaars/organisaties/heritage, "Voeg toe aan agenda" (iCal), toegang/kosten notitie (informational only, geen ticket) | repurpose + translate-NL |
| **Gap** | – | NO ticketing (hard rule) | – | ensure no ticket CTA sneaks in |

### `/media` (`media.tsx`)

| section | current | PK type | key fields | action |
| --- | --- | --- | --- | --- |
| `.breadcrumb-section` | "Art Grid" style | – | Media | translate-NL |
| `.auction-card-sidebar-section` | Auction cards with price/bid | Media library | Card: thumbnail, type (foto/video/audio/document/interview), titel, cultureel domein, korte attributie. Filters: type, cultureel domein, jaar, rechten/licentie, bron. Detail modal/page: bestand, alt-tekst, caption, copyright, licentie, bron, uploader, transcript (audio/video) | repurpose (drop price/bid; add rights column) |
| **Gap** | – | Media viewer met captions/attribution/alt/transcripts | – | **add** (flag §D.3) |

### `/stories` (`stories.index.tsx`)

| section | current | PK type | key fields | action |
| --- | --- | --- | --- | --- |
| `.articel-section` | Article grid, English | Story directory | Card: type (verhaal/nieuws/interview/educatie/projectupdate), datum, auteur, titel, lede, hero, featured badge, link → `/stories/details`. Filters: type, cultureel domein, auteur, jaar. Featured lead-story bovenaan | translate-NL + fill-real-content + add featured flag |

### `/stories/standard` (`stories.standard.tsx`)

| section | current | PK type | key fields | action |
| --- | --- | --- | --- | --- |
| `.article-standard-section` | Alternative list layout | Zelfde directory, list-view variant | – | keep as `/stories?view=list` optie — **flag Delroy** of dit als eigen route blijft |

### `/stories/details` (`stories.details.tsx`)

| section | current | PK type | key fields | action |
| --- | --- | --- | --- | --- |
| (article-detail wrappers) | Article detail placeholder, English | Story detail | Hero, kicker (type), titel, lede, auteur, datum, body (rich text), bronnen, gerelateerde records rail (Heritage/Artists/Organizations/Events/Media), tags, share, "Meld correctie" | translate-NL + fill-real-content |
| **Gap** | – | Related-content rail | – | **add** (flag §D.3) |

### `/collections/$slug` (`collections.$slug.tsx`)

| section | current | PK type | key fields | action |
| --- | --- | --- | --- | --- |
| `.breadcrumb-section` | Generic | – | Collectie: {naam} | translate-NL |
| `.auction-card-sidebar-section` | Auction listing | Curated Collection archive | Header: titel, beschrijving, curator, status. Grid: gemixte records (Heritage/Media/Stories) met type-badge. Filters: type, cultureel domein | repurpose |
| **Gap** | – | Category/theme archive (distinct from Collections) | – | **add** (flag §D.2) |

### `/contact` (`contact.tsx`)

| section | current | PK type | key fields | action |
| --- | --- | --- | --- | --- |
| `.enquery-section` | Contact form (name/email/subject/message) + info | Contact submission | Naam, e-mail, type vraag (Algemeen / Bijdragen aan archief / Correctie melden / Pers / Educatie / Samenwerking), gerelateerd record (optioneel), bericht, akkoord privacy. Contactinfo: stichting, adres SR, e-mail, socials | translate-NL + add inquiry-type + related-record veld |

### `/faq` (`faq.tsx`)

| section | current | PK type | key fields | action |
| --- | --- | --- | --- | --- |
| `.home1-faq-section` | Accordion, English about auctions/bidding | Veelgestelde vragen over PK | Categorieën: Over PK, Bijdragen, Rechten & gebruik, Educatie, Toegankelijkheid | translate-NL + fill-real-content (all bidding Q's rewritten) |
| `.enquery-section` | Contact strip | – | – | translate-NL |

### `/search` (`search.tsx`)

| section | current | PK type | key fields | action |
| --- | --- | --- | --- | --- |
| `.breadcrumb-section` | "Search Results" | – | Zoekresultaten | translate-NL |
| `.auction-card-sidebar-section` | Auction-style results with price/bid | Global search results | Zoekbalk, tab-filter per content type (Alle / Erfgoed / Kunstenaars / Organisaties / Agenda / Media / Verhalen / Collecties), resultaatkaarten met type-badge, sidebar-filters cultureel domein + jaar | repurpose |

### `/accessibility` (`accessibility.tsx`)

| section | current | PK type | key fields | action |
| --- | --- | --- | --- | --- |
| (privacy-layout body) | Placeholder toegankelijkheidsverklaring | Accessibility statement | WCAG 2.2 AA-verklaring, contact voor klachten, verbeterplan, datum laatste beoordeling | fill-real-content (client input) |

### `/privacy` (`privacy.tsx`)

| section | current | PK type | key fields | action |
| --- | --- | --- | --- | --- |
| (long body) | ArtMart lorem privacy text (English) | Privacy statement voor stichting | Verwerkingen, grondslagen, bewaartermijnen, rechten betrokkenen, cookies, contact FG | translate-NL + fill-real-content |

### `/terms` (`terms.tsx`)

| section | current | PK type | key fields | action |
| --- | --- | --- | --- | --- |
| (long body) | ArtMart terms (auction/marketplace) | Voorwaarden + content-use (rechten hergebruik) | Gebruiksvoorwaarden site, licentie op user-submissies, hergebruik/attributie regels, disclaimer, klachtenprocedure | repurpose + translate-NL + fill-real-content |

### `/how-to-bid` (`how-to-bid.tsx`)

Auction remnant page. See §D.5.

### `/how-to-sell` (`how-to-sell.tsx`)

Auction remnant page. See §D.5.

### `/certificate` (`certificate.tsx`)

Auction remnant (Certificate of Authenticity). Rule 5 says the page stays — its content still needs a PK reading. See §D.5.

### `/wishlist` (`wishlist.tsx`)

Rule 5 says stays. Currently pure auction wishlist met "Place a Bid" per rij. Language flagged in §D.4.

### `account.*` (all six)

Rule 5: stay untouched. Audited for language only.

| route | section | current | flag |
| --- | --- | --- | --- |
| `/account` (`account.index.tsx`) | `.dashboard-section` | Bidding-oriented dashboard | Language flag §D.4 |
| `/account/profile` | `.dashboard-section` | Profiel form | OK (translate-NL later) |
| `/account/orders` | `.dashboard-section` | Order/purchase history | Language flag §D.4 (rename Bestellingen → n.v.t. voor PK) |
| `/account/bidding` | `.dashboard-section` | Actieve bids | Language flag §D.4 (kept per rule 5) |
| `/account/wishlist` | `.dashboard-section` | Wishlist met "Place a Bid" | Language flag §D.4 |
| `/account/wishlist-general` | `.dashboard-section` | Zelfde | Language flag §D.4 |

### `/$` splat 404 (`$.tsx`)

| section | current | PK type | key fields | action |
| --- | --- | --- | --- | --- |
| (footer + minimal body) | Renders footer only, no visible 404 UI in ArtMart shell | 404-pagina in ArtMart shell | Titel "Pagina niet gevonden", korte tekst, primaire CTA → `/`, secundaire → `/search` | fill-real-content (**flag §D.2**: current pagina is leeg) |

### ArtMart catalog leftovers (not in PK nav)

| route | current | PK mapping proposal |
| --- | --- | --- |
| `/art` (`art.index.tsx`) | Art catalog landing | Geen PK-equivalent — flag Delroy: remove |
| `/art/grid` (`art.grid.tsx`) | Grid met price/bid | Duplicate van `/heritage` layout — flag Delroy: remove |
| `/art/details` (`art.details.tsx`) | Auction detail | Duplicate van `/heritage/details` — flag Delroy: remove |
| `/art/variant-2` (`art.variant-2.tsx`) | Variant grid | Flag Delroy: remove |

Mega-menu link `Algemene kunst → /art/grid` should be dropped when these routes go.

---

## C. Placeholder status per route (quick reference)

- **NL-labels applied, English body pending**: all routes above (Round C did chrome, not body copy).
- **Fully placeholder imagery**: all routes — no PK-owned imagery yet, everything is ArtMart demo art/portraits.
- **Real-content ready today**: none. Every text block on every public route is either template lorem or ArtMart marketing copy.

---

## D. Flag lists

### D.1 Home editorial gaps vs intended PK home

Not present on `/` today (Round E.1 order is Hero → Uitgelicht erfgoed → Ontdek → Uitgelichte kunstenaars → Aankomende evenementen → Ontdek onze essentie → Laatste verhalen). Missing bands, and the closest ArtMart wrapper that could host each if added later (no add executed this round):

1. **Editorial image/text story band** (hero-story) — closest wrapper: `.home1-artistic-section` (image + text split from `/about`).
2. **Media highlight strip** — closest wrapper: `.home1-general-art-slider-section` reconfigured as media thumbs, or a new `.home2-category-section`-style mosaic.
3. **Organization / partner highlight** — closest wrapper: `.home2-artist-section` (card row / carousel) rebranded to organisaties/partners.
4. **Closing contact / participation CTA** — closest wrapper: `.enquery-section` (used on `/about`, `/contact`, `/faq`).

### D.2 Missing pages

| PK need | current | status |
| --- | --- | --- |
| Privacy statement | `/privacy` exists | present (content placeholder) |
| Terms / content-use | `/terms` exists | present (content is auction-marketplace terms — needs rewrite) |
| Accessibility statement | `/accessibility` exists | present (placeholder) |
| Routable 404 | `/$` exists | route present but **renders no visible 404 UI** — needs content |
| Category / theme archive (distinct from `/collections/$slug`) | – | **missing** (needs `/categorieen` or `/themas/$slug`) |
| Cultural-domain archive (distinct axis) | – | **missing** (needs `/domein/$slug`) |
| Sitemap page | – | **missing** (optional) |
| Colofon / over de stichting (org info, KvK/ANBI) | partly in `/about` | **missing as standalone** — flag Delroy |

### D.3 Content-type gaps across the app

1. **Cultural domain as first-class filter** (distinct from category and tags): missing on `/heritage`, `/artists`, `/organizations`, `/events`, `/media`, `/stories`, `/search`. Sidebars today expose art-market axes (price, artist, medium).
2. **Featured / lead flag per listing page**: missing everywhere. `/stories` in particular should surface a lead story above the grid.
3. **Related-content rail on detail pages**: only `/heritage/details*` has a related slider (auction cards). Missing on `/artists/portfolio`, `/organizations/details`, `/events/details`, `/stories/details`, `/media` detail.
4. **Media viewer met captions/attribution/alt/transcripts**: `/media` is a plain grid; no detail viewer, no rights block, no transcript slot for audio/video.
5. **Record-linked contact/inquiry**: `/contact` form has no `related record` selector; detail pages have no inline "Meld correctie / stel vraag" CTA.
6. **Source / rights / approval status surfacing**: every detail page must show bron, rechten, publicatiestatus (per lifecycle Draft→Review→Approved→Published→Archived). Not present anywhere in the UI today.
7. **Search facets**: `/search` today is a re-skinned auction grid; needs type-tabs (Alle / Erfgoed / Kunstenaars / …).

### D.4 Commerce / auction remnants in CONTENT (violate no-commerce rule)

One bullet per occurrence: `route → section wrapper → literal phrase / block`.

- Global → header mega-menu (`.mega-menu2 .auction-card-area`) → `Live` / `upcoming` batch, `data-countdown` timer, `Current Bidding : $200.00`, `Current Bidding : $280.00`.
- Global → footer → payment-method icons (visa/mastercard/amex/maestro).
- `/` → `.home1-auction-slider-section` → auction-card `data-countdown` timers, `Current Bid` labels, price tags, `Live`/`upcoming` batches (on the "Uitgelicht erfgoed" cards).
- `/` → `.home1-general-art-slider-section` → price tags per card (repurposed as "Aankomende evenementen").
- `/` → `.home1-article-section` → article cards clean, but excerpts still English.
- `/about` → `.home1-testimonial-section` → **buyer testimonials** (client acknowledgment) framing.
- `/heritage` → `.auction-card-sidebar-section` → `Current Bid`, price, `Add to Wishlist`, `countdown-timer`, sidebar filter `Price range`, sidebar filter `Auction status`.
- `/heritage/upcoming` → `.auction-card-sidebar-section` → same as above, plus `Upcoming Auctions` breadcrumb wording.
- `/heritage/details`, `/heritage/details-2`, `/heritage/details-3` → `.auction-details-section` → **`Current Bid`, bid-history table, `Place a Bid` form, `Buy Now` CTA, `Add to Wishlist`, countdown timer, `Certificate of Authenticity` upsell block, price**.
- `/heritage/details*` → `.home1-auction-slider-section` (related rail) → same auction card price/bid.
- `/artists/portfolio` → `.auction-card-sidebar-section` (werken van kunstenaar) → price + `Current Bid`.
- `/organizations/details` → `.auction-card-sidebar-section` → price + `Current Bid`.
- `/collections/$slug` → `.auction-card-sidebar-section` → price + `Current Bid`.
- `/search` → `.auction-card-sidebar-section` → price + `Current Bid` + auction filters.
- `/media` → `.auction-card-sidebar-section` → price + `Current Bid` (needs rights block instead).
- `/events/details` → article-detail body copy references buying/attending fee — flag for review.
- `/how-to-bid` → entire page (`.how-to-bid-section`) → auction-bidding tutorial, `Auction Ends` copy. See §D.5.
- `/how-to-sell` → entire page (`.how-to-sell-section`) → seller onboarding. See §D.5.
- `/certificate` → entire page (`.certificate-section`) → Certificate of Authenticity purchase flow. Kept per rule 5, language flagged.
- `/wishlist` → `.wishlist-section` → `Place a Bid` per row, price column. Kept per rule 5, language flagged.
- `/account` → `.dashboard-section` → bidding-summary tiles.
- `/account/bidding` → `.dashboard-section` → active bids table.
- `/account/orders` → `.dashboard-section` → "Bestellingen" / purchase history.
- `/account/wishlist` + `/account/wishlist-general` → `.dashboard-section` → `Place a Bid` per row, price.

### D.5 ArtMart catalog identity without PK mapping

Per-page proposal (no removal executed):

| route | current identity | proposal |
| --- | --- | --- |
| `/art` | Art catalog landing | **flag Delroy: remove** (no PK equivalent — `/heritage` covers it) |
| `/art/grid` | Auction grid | **flag Delroy: remove** (duplicate of `/heritage`); mega-menu link `Algemene kunst → /art/grid` must be dropped in the same round |
| `/art/details` | Auction detail | **flag Delroy: remove** (duplicate of `/heritage/details`) |
| `/art/variant-2` | Grid variant | **flag Delroy: remove** |
| `/how-to-bid` | Auction bidding guide | **flag Delroy: remove** (no bidding on PK) OR repurpose → `/bijdragen` (hoe stuur je materiaal in) |
| `/how-to-sell` | Seller onboarding | **flag Delroy: remove** OR repurpose → `/bijdragen/organisaties` |
| `/certificate` | Certificate purchase flow | **stays as future account-commerce (rule 5)** — language flagged, no PK repurpose planned |
| `/wishlist` | Wishlist met bid CTA | **stays as future account-commerce (rule 5)** — language flagged |
| `/heritage/details-2`, `/heritage/details-3` | Extra layout variants | **flag Delroy**: keep 1 canonical detail; other 2 als variants schrappen (rule 2 waiver nodig) |
| `/stories/standard` | Alt list-view layout | **flag Delroy**: keep als `/stories` view-toggle OF eigen route houden |

Residual "Auction / Artwork / Artist" wording in kept pages (mega-menu `Shop catalog`, `Artist Name`, `Department`, footer payment icons, hero copy on `/`, `/about` testimonials) — flagged for Delroy's translate-NL vs repurpose call per line during Round F content pass.

---

## E. Summary

**Biggest content gaps (top 5, ranked):**

1. **Cultural-domain as first-class filter** across every listing (`/heritage`, `/artists`, `/organizations`, `/events`, `/media`, `/stories`, `/search`) — currently absent; today's sidebars are art-market axes (price, medium, artist).
2. **Rights / attribution / transcript surfacing on `/media`** — no media viewer, no rights block, no alt/caption/attribution UI; blocks safe publication of any real media.
3. **Related-content rail on every detail page** (`/artists/portfolio`, `/organizations/details`, `/events/details`, `/stories/details`, `/media` detail) — only heritage-details currently has a related slider, and it's still auction-branded.
4. **Home editorial bands missing** — no editorial story band, no media highlight, no organization/partner highlight, no closing participation CTA (see §D.1).
5. **Publication-lifecycle & source visibility everywhere** — Draft/Review/Approved/Published/Archived + bron + rechten are core PK fields but appear nowhere in the current UI on any detail page.

**Biggest off-brand / commerce remnants (top 5, ranked):**

1. **Heritage detail pages (`/heritage/details`, `-2`, `-3`)** — full auction UI: Current Bid, bid history, Place-a-Bid form, countdown timer, Certificate-of-Authenticity upsell, Buy Now, Add to Wishlist. Directly contradicts no-commerce rule.
2. **Global mega-menu auction promo** (`.mega-menu2 .auction-card-area`) — Live/upcoming batches, `data-countdown`, `Current Bidding : $200.00 / $280.00` on every page including `/`, `/about`, `/contact`, `/heritage`, `/stories`, `/media`, `/search`, `/accessibility`, `/privacy`, `/terms`.
3. **Auction-card price + Current-Bid across `/heritage`, `/heritage/upcoming`, `/artists/portfolio`, `/organizations/details`, `/collections/$slug`, `/search`, `/media`** — every listing card still shows price + bid, on pages that are supposed to be non-commercial archive pages.
4. **`/about` client-acknowledgment testimonials** — buyer-framed testimonials on a foundation about-page.
5. **`/how-to-bid` + `/how-to-sell` + footer payment icons** — auction/marketplace instructional pages and Visa/Mastercard/Amex/Maestro icons on every page footer, on a heritage-foundation site.

Stop. Awaiting Delroy's decisions per §D.4 and §D.5 (especially: fate of `/art*`, `/how-to-bid`, `/how-to-sell`; consolidation of `/heritage/details-2/-3`; rewrite scope for mega-menu auction promo + footer payment icons) before any Round F content work is planned.
