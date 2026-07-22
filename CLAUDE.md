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
