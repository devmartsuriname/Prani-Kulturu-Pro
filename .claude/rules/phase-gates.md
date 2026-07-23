# Phase Gates — Prani Kulturu Pro

> Fasemodel en harde gate-regels voor de lokale cutover.
> Autoriteit: Delroy. Aangemaakt onder TC-PK-002.

---

## Fasemodel

| Fase | Inhoud | Task Contract |
| --- | --- | --- |
| **CUT-4b** | Devmart governance-laag in de repo: `CLAUDE.md` + `.claude/rules/`. Verplicht vóór elke code-wijziging. | TC-PK-002 |
| **CUT-4c** | Fixes uit de Codex-audit doorvoeren in de repo. | TC-PK-003 |
| **CUT-4d** | Repo-hygiëne: admin-docs geactualiseerd, Lovable-metadata verwijderd, `routeTree.gen.ts` vastgelegd. | TC-PK-004 |
| **CUT-4e** | Frontend smoke- en content-audit + CMS-readiness-blauwdruk (report-only). | TC-PK-005 |
| **CUT-4f** | Gebundelde frontend-fixronde: fix-lijst 1–20 uit `docs/prani-kulturu/13-frontend-audit.md`. **DONE.** | TC-PK-006 |
| **CUT-4g** | Parity-audit + polish: events-module, `/faq`, dark mode, zoek/filter-sidebars. **DONE.** | TC-PK-007 |
| **Frontend-afronding** | Beelden (84 bestanden, TC-PK-008); visual-fixronde na Cowork smoke-check (TC-PK-009); account/login pre-deploy — "Mijn account" → `/login`, losse `/login` + `/register`, account-dashboard-redirect, `/wishlist` leeg (TC-PK-010). **Alle DONE.** | TC-PK-008 … TC-PK-010 |
| **CUT-5** | Cowork-review + Codex her-audit + Delroy GO → **eerste push**. ✔ **UITGEVOERD 2026-07-23** (origin/main t/m TC-PK-008, `5a1fb4c`; TC-PK-009/010 lokaal, nog niet gepusht). | — |
| **CUT-5b** | Codex her-audit over de complete repo (read-only, deploy-readiness). ✔ **DONE 2026-07-23** — PK-CODEX-AUDIT-002: GO-MET-VOORWAARDEN (0 BLOCKER, 4 HIGH, 5 MEDIUM, 4 LOW). | TC-PK-012 |
| **CUT-6** | **Deploy-alignment + Hostinger.** Nitro `node_server`-preset via wrapperconfig (`defineConfig`) + `.output/nitro.json`-bewijs; **`/admin` server-side 404** vóór render (`noindex, nofollow` behouden); volledige buildgate op **Node 22**; één reproduceerbaar `.output`-artifact (broncommit + SHA-256); runbook + verslag. Push (Delroy-GO) → Hostinger-deploy + DNS `pranikulturu.org`. | TC-PK-011 |
| **CUT-7** | Admin-TC (fix 21–22, beschermd pad) en de EN-fase (terugkeer taalswitcher). | Nieuwe TC's |
| **Backend/data — Fase 5** | Architectuur-TC → auth (twee gescheiden logins) → MySQL (Hostinger) → API → admin module-voor-module. Uitsluitend via nieuwe Task Contracts, per onderdeel. Build én runtime op **Node 22**. | Nieuwe TC's |

Referentie voor de fasenummering: het projectmasterplan (Master v3.9) in
`Prani Kulturu Pro/`. Bij afwijking tussen dit bestand en het masterplan geldt
het masterplan; dit bestand wordt dan bijgewerkt via een eigen Task Contract.

Volgorde is bindend. Fasen worden niet samengevoegd, overgeslagen of
vooruitgelopen.

---

## Harde gate-regels

1. **Geen volgende fase zonder Delroy's expliciete signaal.** Een afgeronde
   fase betekent stoppen en wachten, niet doorlopen.
2. **`git push` is verboden zonder Delroy's expliciete GO.** De eerste push
   (CUT-5) is gedaan t/m TC-PK-008 (`5a1fb4c`); de lokale commits TC-PK-009,
   TC-PK-010 en TC-PK-011 worden pas gepusht ná Delroy's push-GO (TC-PK-011 WP6).
   Ook `git push --force`, tags en branches pushen vallen hieronder. Committen
   mag alleen lokaal en alleen wanneer de TC dat vraagt.
3. **Elke Task Contract eindigt met een verificatiestap** conform
   [`verification.md`](verification.md), inclusief Write Verification.
4. **Geen backend-, data- of MySQL-werk** vóór CUT-6 (deploy) is afgerond en er
   een nieuwe APPROVED TC voor Fase 5 ligt.
5. **Geen stille faseovergang.** Bij twijfel over de actieve fase: stoppen en
   voorleggen aan Delroy.
6. **Overtreding van een gate** = afkeuring van de volledige output van die
   ronde, geen gedeeltelijke acceptatie.

---

## Actieve fase

**CUT-6 — deploy-alignment + Hostinger (TC-PK-011).** CUT-5 (eerste push) en CUT-5b
(Codex her-audit, TC-PK-012) zijn uitgevoerd; TC-PK-010 is DONE. Claude Code voert
TC-PK-011 WP0–WP5 uit (Nitro `node_server`, `/admin` server-side 404, buildgate op
Node 22, reproduceerbaar `.output`-artifact, runbook + verslag) en **stopt**. De push
van de lokale commits (WP6) gebeurt uitsluitend ná Delroy's expliciete push-GO; de
Hostinger-deploy + DNS (WP7) doet Delroy. Tot die push-GO blijft `git push` verboden
(gate-regel 2).
