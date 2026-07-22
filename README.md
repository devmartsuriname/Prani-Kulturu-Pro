# Prani Kulturu Pro

**Status: DRAFT — repo-setup fase. Nog geen code gecommit; audit door Codex gaat vooraf aan de eerste code-commit.**

Digitale erfgoedhub voor Suriname (Stichting Prani Kulturu). Ontsluit materieel en immaterieel Surinaams cultureel erfgoed: erfgoedrecords, kunstenaars, organisaties, agenda, media, verhalen en collecties.

## Stack

- TanStack Start + TanStack Router (flat-file routes in `src/routes/`)
- React 19 · Vite · Nitro server-runtime
- Tailwind CSS 4 + shadcn/ui (TypeScript)
- UI-basis: ArtMart HTML-template, 1:1 geporteerd — effecten/animaties exact behouden (`public/artmart/assets/js/main.js` is byte-identiek; init via `src/components/artmart/artmartInit.ts`)
- Runtime/packagemanager: **bun** (`bun install` / `bun dev`)
- Doelplatform: Hostinger Business (Node.js/Nitro) + **MySQL** — geen Supabase
- Domein: pranikulturu.org

## Governance (Devmart Guardian Rules v2.2)

- Delroy (Devmart Suriname) is de enige die output goedkeurt; al het werk is DRAFT tot expliciete goedkeuring.
- Elke wijziging loopt via een **Task Contract** — die leven in de projectfolder (`Prani Kulturu Pro/11-Task-Contracts/`), niet in deze repo.
- Alleen broncode + essentiële repo-docs (`docs/`) horen in git; governance-documentatie, audits en werkbestanden staan in de Devmart-Workspace projectfolder.
- ArtMart-effecten zijn een harde regel: `main.js` blijft byte-identiek; geen wijzigingen aan `artmartInit.ts`/`frame.tsx` zonder Task Contract.
- `/admin` (Darkone-assets) en de account-/wishlist-/certificate-pagina's zijn scaffolding voor een latere marketplace-fase — niet aanraken zonder Task Contract.

## Workflow

1. Cowork (planning & governance) stelt een Task Contract DRAFT op.
2. Delroy keurt goed.
3. Uitvoering door Claude Code; **Codex is auditor** (code-audit vóór de eerste commit en bij oplevermomenten).
4. Resultaat + audit terug naar Delroy; pas na "Goedgekeurd" volgt de volgende fase.

## Herkomst

UI gebouwd in Lovable (project "Prani Kulturu Pro"), geëxporteerd op 2026-07-21. De export (`Code Base Export/Prani Kulturu Pro.zip` in de projectfolder) is de enige bron voor de eerste code-commit — ongewijzigd, ná de Codex-audit.
