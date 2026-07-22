# Phase Gates — Prani Kulturu Pro

> Fasemodel en harde gate-regels voor de lokale cutover.
> Autoriteit: Delroy. Aangemaakt onder TC-PK-002.

---

## Fasemodel

| Fase | Inhoud | Task Contract |
| --- | --- | --- |
| **CUT-4b** | Devmart governance-laag in de repo: `CLAUDE.md` + `.claude/rules/`. Verplicht vóór elke code-wijziging. | TC-PK-002 |
| **CUT-4c** | Fixes uit de audit doorvoeren in de repo. | TC-PK-003 |
| **CUT-5** | Review + Codex her-audit + Delroy GO → **eerste push**. | Nieuwe TC |
| **Backend/data** | MySQL-fase (Hostinger). Uitsluitend via nieuwe Task Contracts, per onderdeel. | Nieuwe TC's |

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

**CUT-4b** — governance-laag. Volgende stap: wachten op Delroy voor TC-PK-003.
