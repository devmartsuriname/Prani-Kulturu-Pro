# 03 — Phased UI Plan

Each phase is one approval round. Every round starts with a short delta plan,
then execution, then stop.

## Round A — Rules + Documentation (this round)

- Write PK rules to `AGENTS.md`.
- Create `docs/prani-kulturu/00-rules.md`, `01-audit.md`, `02-page-mapping.md`,
  `03-phased-plan.md`, `04-dutch-labels.md` (skeleton), `05-branding-tokens.md`
  (skeleton).
- No route/component/style/asset/config changes.

## Round B — Branding swap (Sage Green + neutrals)

- Add `public/artmart/assets/css/prani-brand.css` overriding ArtMart accent
  tokens to `#6B8E6A` + warm neutrals.
- Append it AFTER `style.css` in `PAGE_CSS` in
  `src/components/artmart/frame.tsx`.
- Do NOT touch `src/styles.css` (shadcn tokens stay for admin/shell).
- No webfont install; heading stack `Georgia, serif`, body stack
  `system-ui, "Noto Sans", Arial, sans-serif`.
- Verify `/admin` visually unchanged.

## Round C — Dutch label pass (nav + global chrome)

- Header/menu, footer, buttons and section titles on Home, About, Contact,
  FAQ → Dutch (from `04-dutch-labels.md`).
- Long-form body copy stays template English but marked
  `<!-- NL-COPY-PENDING -->` for Round F.

## Round D — New routes + section renames

- Rename `auctions.*` → `heritage.*` and `articles.*` → `stories.*` per
  approved mapping.
- Add new routes: `organizations.*`, `events.*`, `media`, `search`,
  `collections/$slug`, `accessibility`, `/$` 404.
- Duplicate ArtMart layouts per the mapping table; wire into nav.
- Content = clearly labelled placeholders; ArtMart section wrappers preserved
  so animations still initialize.

## Round E — Homepage editorial recomposition

- On `/`, rearrange ArtMart home2 sections into PK order: hero → featured
  heritage → discovery entrances (Heritage / Artists / Organizations /
  Events) → featured artists → upcoming events → latest stories.
- Preserve all sliders, counters, lightboxes.

## Round F — Dutch long-form copy + accessibility polish

- Replace `NL-COPY-PENDING` blocks with Dutch copy provided by the client.
- Set `lang="nl"` on `<html>`, alt-text audit, focus-ring in Sage Green,
  `prefers-reduced-motion` respected.

## Round G — SEO metadata pass

- Per-route `head()` with PK title/description/OG.
- No `og:image` on `__root`. Sitemap doc updated.

## Round H — Handoff documentation

- `docs/prani-kulturu/handoff.md` listing every placeholder location, every
  rule kept, plus the export checklist for the external team taking over
  backend/data.
