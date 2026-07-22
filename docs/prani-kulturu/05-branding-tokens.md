# 05 — Branding Tokens & Override Strategy (Skeleton)

Execution plan for Round B. No code changes in Round A.

## Color tokens (single source of truth)

| Token | Hex | Usage |
| --- | --- | --- |
| `--pk-primary` | `#6B8E6A` | Primary CTA, active states, focus ring, links |
| `--pk-canvas` | `#FFFFFF` | Page background |
| `--pk-surface` | `#F5F2EE` | Cards, panels, section backgrounds |
| `--pk-border` | `#E8E4DE` | Borders, dividers, input outlines |
| `--pk-muted` | `#9E9589` | Secondary text, metadata, icons |
| `--pk-ink` | `#2C2420` | Body text, headings, high-contrast elements |

No other colors. The only exception permitted by the Styling Guidelines is a
standard error red for form validation feedback (never used for branding or
decoration).

## Typography stack (interim — no webfont install)

- Headings: `Georgia, "Times New Roman", serif`
- Body: `system-ui, -apple-system, "Noto Sans", Arial, sans-serif`

Noto Serif + Inter are re-evaluated once the client confirms licensing;
switching stacks is a one-line change in the override stylesheet.

## Override strategy

Round B creates `public/artmart/assets/css/prani-brand.css` containing:

1. `:root` CSS variables for the tokens above.
2. Overrides for every ArtMart accent utility class and hard-coded color in
   `style.css` (buttons, links, badges, hover states, section headers,
   underlines, focus states) → mapped to `var(--pk-primary)` / neutrals.
3. Heading + body font-family overrides scoped under `.artmart-scope`.
4. Focus-visible ring in `--pk-primary` for WCAG focus states.

This file is appended AFTER `style.css` in `PAGE_CSS` inside
`src/components/artmart/frame.tsx` so the cascade wins without `!important`
where possible.

## Isolation guarantees (unchanged)

- File is served under `/artmart/assets/`, loaded only via `PAGE_CSS` in
  `ArtmartFrame`. `/admin` never links to it.
- `src/styles.css` (Tailwind + shadcn tokens) is NOT touched — the admin
  shell and shadcn primitives keep their tokens intact.
- The `.artmart-scope` wrapper on the ArtmartFrame confines
  font-family / accent overrides to the public frontend subtree.

## Verification in Round B

1. Screenshot `/admin` before/after — must be pixel-identical.
2. Spot-check `/`, `/about`, `/heritage`, `/artists`, `/stories` — every
   template accent color is now Sage Green.
3. Focus ring visible in `--pk-primary` on all interactive elements.
