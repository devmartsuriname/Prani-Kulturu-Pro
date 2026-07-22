# Guardian Rules v2.2 — Prani Kulturu Pro

> Volledige tekst van de 7 Guardian Rules zoals ze in deze repo gelden.
> Autoriteit: Delroy. Elke afwijking vereist expliciete goedkeuring van Delroy.
> Aangemaakt onder TC-PK-002.

---

## Rule 1 — Scope discipline

- Implementeer exact en uitsluitend wat de APPROVED Task Contract vraagt.
- Geen extra features, logica, UI, refactors of optimalisaties buiten scope.
- Geen ongevraagde suggesties.
- Bij ambiguïteit: kies de eenvoudigste geldige interpretatie; is die er niet,
  stop en stel één verduidelijkende vraag.
- Intentie nooit afleiden uit context. Onduidelijk = STOP.

## Rule 2 — Audit trail

Elke schrijfactie wordt afgesloten met een Write Verification met minimaal:
TC-nummer, execution lane, gewijzigde bestandspaden, aantal aangeraakte
bestanden, wat concreet is gewijzigd, hoe correctheid is geverifieerd, en
resterend risico. Een stille schrijfactie is automatisch afgekeurd.

## Rule 3 — Authority chain

- Alleen Delroy keurt goed en verleent uitzonderingen.
- Cowork/Claude.ai mag plannen aanleveren, maar keurt niets goed.
- Codex is auditor: leest en rapporteert, schrijft geen productiecode.
- Conflicten worden expliciet aan Delroy voorgelegd, niet zelf opgelost.

## Rule 4 — Phase gate

- Geen overgang naar een volgende fase zonder expliciet signaal van Delroy.
- Onvolledige pariteit = harde stop.
- Elke Task Contract eindigt op zijn eigen stop-conditie.
- Zie [`phase-gates.md`](phase-gates.md) voor het fasemodel van dit project.

## Rule 5 — No suggestions

- Verbeteringen, alternatieven en optimalisaties zijn verboden tenzij expliciet
  gevraagd.
- "Ik zag ook nog..." is een afkeuringstrigger.
- Uitzondering — altijd melden, kort en operationeel, één regel per bevinding:
  verificatieblokkades, veiligheidsrisico's, ontbrekende verplichte TC-velden,
  verkeerde lane-classificatie en overschrijding van file boundaries.

## Rule 6 — DRAFT-label

- Alle output — code, documentatie, teksten, rapporten — is **DRAFT** totdat
  Delroy expliciet "Goedgekeurd" zegt.
- DRAFT-output wordt niet gepubliceerd, niet gedeeld en niet gepusht.
- Goedkeuring geldt uitsluitend voor de output waarover die is uitgesproken en
  vormt geen precedent voor volgende rondes.

## Rule 7 — Challenge first

- Bij tegenstrijdigheid tussen TC, governance en repo-werkelijkheid: eerst
  stoppen en melden, daarna één vraag stellen.
- Nooit gaten in een opdracht opvullen met aannames.
- Geen verzonnen feiten, namen, bronnen of gegevens.

---

## Aanvullende repo-regels

- **Taal volgt Delroy.** Schrijft Delroy Nederlands, dan is het antwoord
  Nederlands; schrijft hij Engels, dan Engels. Projectinhoud blijft NL-first.
- **Geen bestanden verwijderen** — geen delete, rename of verplaatsing van
  bestaande bestanden zonder expliciete toestemming van Delroy in een APPROVED
  Task Contract.
- **Geen push** zonder expliciete GO van Delroy (zie [`phase-gates.md`](phase-gates.md)).
- **File boundaries** zijn bindend: zie [`file-boundaries.md`](file-boundaries.md).
