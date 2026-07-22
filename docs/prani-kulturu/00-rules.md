# 00 — Hard Rules (Prani Kulturu)

Binding rules for the Lovable agent on this project. Mirrored into `AGENTS.md`.

1. **UI only.** Never create or modify backend logic, databases, Lovable Cloud,
   Supabase, authentication, API calls, or data wiring. All content stays
   static template data or clearly marked placeholders.
2. **ArtMart template is used 1:1.** Never remove, rename or restructure
   existing routes, sections or components without explicit approval.
3. **All ArtMart animations, transitions, sliders, lightboxes, counters and
   effects are preserved exactly.**
4. **`/admin` and `public/admin/assets/**` are untouched** — never modified.
5. **Account pages stay and will be used** — `account.*`, `wishlist.tsx`,
   `certificate.tsx`.
6. **Branding: one primary color — Sage Green `#6B8E6A`** — with warm neutrals
   `#FFFFFF`, `#F5F2EE`, `#E8E4DE`, `#9E9589`, `#2C2420`. No other colors.
   No webfont installation until licensing is confirmed (interim: Georgia +
   system sans / Arial).
7. **Dutch-first** for labels and navigation.
8. **Round-based workflow.** Plan → "Goedgekeurd" → execute → stop.

## Documents that are reference-only (never implemented in this project)

- `prani_kulturu_tech_stack.md` — describes the post-export Hostinger / MySQL /
  REST / custom auth stack. Out of scope for Lovable.
- `prani_kulturu_schema.md` — describes the post-export MySQL schema. Out of
  scope for Lovable.

These describe what the external team builds after code export. The Lovable
project delivers UI only.
