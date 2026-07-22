# File Boundaries — Prani Kulturu Pro

> Beschermde bestanden, mappen en routes. Autoriteit: Delroy.
> Aangemaakt onder TC-PK-002.

---

## Verboden zonder aparte APPROVED Task Contract

| Pad / onderwerp | Regel |
| --- | --- |
| `public/artmart/assets/js/main.js` | Moet **byte-identiek** blijven. SHA-256: `093a349a5bb008806fcffef5887e8ab460c1664801d449ca50c7b79e0b84dfc3` |
| `public/admin/**` | Niet aanraken |
| `src/routes/admin*` | Niet aanraken |
| `src/routes/account.*` | Niet aanraken |
| `src/routes/wishlist.tsx` | Niet aanraken |
| `src/routes/certificate.tsx` | Niet aanraken |
| CSS- en branding-tokens | Niet wijzigen |
| Routes toevoegen of verwijderen | Verboden |

Elke wijziging aan bovenstaande vereist een eigen, expliciet goedgekeurde Task
Contract die het pad met naam noemt.

---

## BODY_HTML

- De **structuur blijft intact**: wrappers, classes en data-attributen worden
  niet gewijzigd, hernoemd, toegevoegd of verwijderd.
- Alleen **tekstinhoud** mag wijzigen, en uitsluitend voor zover de APPROVED TC
  die wijziging expliciet dekt.

---

## Inhoudelijke grens

- **Geen verzonnen Surinaamse cultuurfeiten, namen of contactgegevens.**
  Inhoud komt uit door Delroy aangeleverd bronmateriaal of blijft een duidelijk
  gemarkeerde placeholder.

---

## Bij grensoverschrijding

Constateert Claude Code dat een opdracht een grens raakt: **stoppen vóór de
schrijfactie**, de grens in één regel melden en wachten op Delroy. Geen
gedeeltelijke uitvoering, geen "best effort".
