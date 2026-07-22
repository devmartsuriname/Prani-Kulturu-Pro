# 01 — Repository Audit vs. PK Documents

## Alignment (green)

- Stack matches PK Tech Stack: TanStack Start + React 19 + Tailwind 4 +
  shadcn/ui + TypeScript, flat-file routes under `src/routes/`.
- ArtMart port is complete: 28 routes present, `public/artmart/assets/**`
  isolated, CSS bleed to `/admin` already prevented via `ArtmartFrame` +
  per-route `head().links`.
- Account environment intact: `account.index/profile/bidding/orders/
  wishlist/wishlist-general.tsx`, plus `wishlist.tsx` and `certificate.tsx`.
- Admin shell untouched (`admin.tsx` + `admin/index.tsx`, Darkone assets
  isolated under `public/admin/assets/**`).

## Conflicts, gaps and risks

1. **Homepage variant.** `/` renders ArtMart home2. PK docs describe an
   editorial home (hero, featured heritage, discovery entrances, featured
   artists, upcoming events, latest stories). This is a content recomposition
   on the existing home2 layout, not a route change (Round E).
2. **Missing routes vs. PK PRD.** `organizations` (index + details), global
   search results, category/theme/collection archives, accessibility
   statement, and a routable 404 page. Current 404 is handled inside
   `__root.tsx` `notFoundComponent` — PK asks for a routable page too.
3. **Branding drift.** ArtMart `style.css` ships its own accent colors
   throughout. Sage-Green swap requires a scoped override stylesheet loaded
   AFTER `style.css` on ArtMart routes only. Must not leak into `/admin`
   (already isolated) or the shadcn tokens in `src/styles.css` (Round B).
4. **Fonts.** PK asks Noto Serif + Inter. Rule 6 forbids webfont installation
   until licensing is confirmed. Interim: `Georgia, serif` for headings and
   `system-ui, "Noto Sans", Arial, sans-serif` for body. Open decision.
5. **Language.** All ArtMart body copy is English. Dutch label pass is a
   dedicated round (Round C); long-form Dutch copy comes in Round F.
6. **Naming amendment (approved).** Per PK PRD, section URLs align with PK
   terminology, not ArtMart:
   - `/auctions*` → `/heritage*` (listing, upcoming, details + `-2` / `-3`
     alt layouts)
   - `/articles*` → `/stories*` (listing, standard, details)
   - `/events*` — new (was already planned NEW)
   All other paths (about, contact, faq, privacy, terms, how-to pages,
   `art.*`, `artists.*`, `account.*`, `wishlist`, `certificate`) stay
   unchanged. Actual file renames happen in a later approved build round.
7. **Reference-only documents.** Tech Stack + Schema Design describe
   post-export Hostinger/MySQL/REST/Auth. Rule 1 makes them non-implementable
   in Lovable.
8. **Legacy plan file.** `.lovable/plan.md` documents the original ArtMart
   1:1 port. Kept as historical record; the active plan lives under
   `docs/prani-kulturu/`.
