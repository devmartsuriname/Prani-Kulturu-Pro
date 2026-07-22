# CLAUDE.md — Prani Kulturu Pro

> Devmart governance-laag voor deze repo. Geldt voor elke Claude Code-sessie in
> deze werkmap. De globale Devmart-governance (`~/.claude/CLAUDE.md`) blijft
> leidend; dit bestand vult die aan en overrulet die nooit.
> Aangemaakt onder TC-PK-002 (Lane A, SAFE MODE).

---

## 1. Project

- **Naam:** Prani Kulturu Pro — digitale erfgoedhub voor Suriname
  (Stichting Prani Kulturu).
- **Taal:** NL-first. Alle publieke inhoud is Nederlands.
- **Commerce:** de publieke site is commerce-vrij (geen shop-, prijs- of
  afrekenfunctionaliteit in de publieke routes).
- **Stack:** TanStack Start · React 19 · Vite · Nitro · Tailwind 4 · bun.
- **Doelhosting:** Hostinger + MySQL. **Geen Supabase.**

---

## 2. Control chain (Mode A)

Delroy → Cowork → Task Contract → Delroy keurt goed → Claude Code voert uit.

- Geen werk zonder **APPROVED** Task Contract in
  `Prani Kulturu Pro/11-Task-Contracts/`.
- **Codex is auditor.** Codex schrijft geen productiecode in deze repo.
- Auditrapporten worden vastgelegd in `12-Codex-Audit/`.
- Alleen Delroy keurt goed. Geen andere partij — ook Cowork niet — kan een TC
  goedkeuren of uitbreiden.

---

## 3. Guardian Rules v2.2 (verkort)

1. **Scope discipline** — uitsluitend uitvoeren wat de APPROVED TC expliciet
   vraagt. Geen extra features, refactors of optimalisaties.
2. **Audit trail** — elke schrijfactie eindigt met een Write Verification
   (bestandspaden, wat gewijzigd, hoe geverifieerd).
3. **Authority chain** — alleen Delroy keurt goed en verleent uitzonderingen.
4. **Phase gate** — geen faseovergang zonder expliciet signaal van Delroy.
5. **No suggestions** — geen ongevraagde voorstellen, verbeteringen of
   observaties. Uitzondering: blokkades, veiligheidsrisico's en
   grensoverschrijdingen worden altijd kort gemeld.
6. **DRAFT-label** — alle output is DRAFT tot Delroy "Goedgekeurd" zegt.
7. **Challenge first** — bij tegenstrijdigheid, ontbrekende informatie of
   twijfel: eerst stoppen en één vraag stellen, niet aannemen.

De volledige regels staan in [`.claude/rules/guardian-rules.md`](.claude/rules/guardian-rules.md).

---

## 4. Verwijzing naar `.claude/rules/`

| Bestand | Inhoud |
| --- | --- |
| [`.claude/rules/guardian-rules.md`](.claude/rules/guardian-rules.md) | De 7 Guardian Rules v2.2 voluit |
| [`.claude/rules/phase-gates.md`](.claude/rules/phase-gates.md) | Fasemodel CUT-4b → CUT-4c → CUT-5 en gate-regels |
| [`.claude/rules/file-boundaries.md`](.claude/rules/file-boundaries.md) | Verboden en beschermde bestanden en routes |
| [`.claude/rules/verification.md`](.claude/rules/verification.md) | Acceptatiegates per ronde en commit-conventie |

Bij conflict geldt de volgorde: `~/.claude/CLAUDE.md` → dit bestand →
`.claude/rules/**` → Task Contract.

---

## 5. Documentatie-index (leesplicht)

Deze documentatie is **verplichte leesstof vóór** het genoemde werk. Niet
gelezen = niet beginnen.

| Wanneer | Verplicht lezen |
| --- | --- |
| Vóór **elk** werk aan `/admin` (routes, pagina's, styling, libraries) | alle `docs/DEVMART_ADMIN_*.md` |
| Vóór werk aan **publieke UI, routes of effecten** | `docs/prani-kulturu/` |

### `docs/DEVMART_ADMIN_*.md`

| Bestand | Inhoud |
| --- | --- |
| [`docs/DEVMART_ADMIN_MASTER_TASKS.md`](docs/DEVMART_ADMIN_MASTER_TASKS.md) | Mastertakenlijst en doelstructuur van de admin |
| [`docs/DEVMART_ADMIN_PAGES.md`](docs/DEVMART_ADMIN_PAGES.md) | Admin-pagina's en hun opbouw |
| [`docs/DEVMART_ADMIN_LIBRARY.md`](docs/DEVMART_ADMIN_LIBRARY.md) | Admin-componenten en libraries |
| [`docs/DEVMART_ADMIN_CSS_ISOLATION.md`](docs/DEVMART_ADMIN_CSS_ISOLATION.md) | CSS-isolatie tussen admin en publieke shell |

Let op: `public/admin/**` en `src/routes/admin*` zijn beschermd
(`.claude/rules/file-boundaries.md`). Lezen is verplicht; wijzigen mag
uitsluitend met een eigen APPROVED Task Contract die het pad met naam noemt.

### `docs/prani-kulturu/`

Rondedocumentatie van de lokale cutover: regels, audit, page mapping, gefaseerd
plan, NL-labels, brandingtokens, content- en body-audits en de TC-verslagen.
Vóór werk aan publieke routes, teksten of template-effecten wordt de relevante
rondedocumentatie gelezen, zodat eerdere besluiten niet worden teruggedraaid.

---

## 6. Agents

| Agent | Wanneer |
| --- | --- |
| [`.claude/agents/devmart-reviewer.md`](.claude/agents/devmart-reviewer.md) | Na een uitvoerende ronde: toetst de output tegen de actieve TC (format, scope, boundaries, diff, verificatie, stop-conditie). Oordeel ACCEPT / REJECT / REQUEST REVISION. |
| [`.claude/agents/db-guard.md`](.claude/agents/db-guard.md) | **Verplicht** bij elk HIGH-risk werk aan database, migraties, RLS/permissies, authenticatie, autorisatie, secrets of deployment- en omgevingsconfiguratie — in deze repo dus de hele MySQL/Hostinger-backendfase. Oordeel PASS / HOLD / BLOCK; blokkeert bij twijfel. |

Beide agents adviseren. **Goedkeuren doet alleen Delroy.** Inzet van een agent
vereist dat de actieve Task Contract die agent autoriseert (TC-sectie 3.13), en
wordt gemeld in de sectie "Changes Made" van de output.
