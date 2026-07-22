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
| **CUT-4f** | Gebundelde frontend-fixronde: fix-lijst 1–20 uit `docs/prani-kulturu/13-frontend-audit.md`. | TC-PK-006 |
| **CUT-5** | Cowork-review + Codex her-audit + Delroy GO → **eerste push**. | Nieuwe TC |
| **CUT-6** | Admin-TC (fix 21–22, beschermd pad) en de EN-fase (6.2, terugkeer taalswitcher). | Nieuwe TC's |
| **Backend/data** | MySQL-fase (Hostinger). Uitsluitend via nieuwe Task Contracts, per onderdeel. | Nieuwe TC's |

Referentie voor de fasenummering: het projectmasterplan (Master v3.5) in
`Prani Kulturu Pro/`. Bij afwijking tussen dit bestand en het masterplan geldt
het masterplan; dit bestand wordt dan bijgewerkt via een eigen Task Contract.

Volgorde is bindend. Fasen worden niet samengevoegd, overgeslagen of
vooruitgelopen.

---

## Harde gate-regels

1. **Geen volgende fase zonder Delroy's expliciete signaal.** Een afgeronde
   fase betekent stoppen en wachten, niet doorlopen.
2. **`git push` is verboden** tot Delroy's GO in CUT-5. Ook `git push --force`,
   tags en branches pushen vallen hieronder. Committen mag alleen lokaal en
   alleen wanneer de TC dat vraagt.
3. **Elke Task Contract eindigt met een verificatiestap** conform
   [`verification.md`](verification.md), inclusief Write Verification.
4. **Geen backend-, data- of MySQL-werk** vóór CUT-5 is afgerond en er een
   nieuwe APPROVED TC voor die fase ligt.
5. **Geen stille faseovergang.** Bij twijfel over de actieve fase: stoppen en
   voorleggen aan Delroy.
6. **Overtreding van een gate** = afkeuring van de volledige output van die
   ronde, geen gedeeltelijke acceptatie.

---

## Actieve fase

**CUT-4f** — gebundelde frontend-fixronde (TC-PK-006). Volgende stap: Cowork-review
en Codex her-audit (CUT-5); daarna Delroy's GO voor de eerste push. Tot die GO
blijft `git push` verboden (gate-regel 2).
