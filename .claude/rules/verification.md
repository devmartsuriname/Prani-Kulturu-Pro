# Verificatie & Commit-conventie — Prani Kulturu Pro

> Vaste acceptatiegates per ronde. Autoriteit: Delroy.
> Aangemaakt onder TC-PK-002.

---

## Acceptatiegates per ronde

Elke ronde wordt pas aangeboden aan Delroy wanneer alle onderstaande gates
zijn uitgevoerd en het resultaat is gerapporteerd.

1. **Build + typecheck + lint schoon** — geen errors, geen nieuwe warnings.
2. **`bun audit` zonder nieuwe HIGH** — nieuwe HIGH-bevindingen zijn een harde
   stop; melden aan Delroy, niet zelf oplossen.
3. **main.js-hashcheck** — SHA-256 van `public/artmart/assets/js/main.js` is
   nog steeds
   `093a349a5bb008806fcffef5887e8ab460c1664801d449ca50c7b79e0b84dfc3`.
4. **Effecten-check** — sliders initialiseren correct en gedragen zich gelijk
   **vóór én na** SPA-navigatie. Ook overige template-effecten (transities,
   lightboxes, counters) blijven werken.
5. **Taal- en commerce-sweep** — alle zichtbare tekstnodes op de publieke
   routes zijn Nederlands en commerce-vrij. Uitgesloten van de sweep:
   `account.*`, `wishlist`, `certificate`, `admin`.

Een gate die niet uitgevoerd kan worden, wordt als blokkade gemeld — nooit
stilzwijgend overgeslagen.

---

## Commit-conventie

- Elke commit verwijst naar zijn **TC-nummer + werkpakket**.
- Vorm: `TC-PK-###: <werkpakket — korte omschrijving>`.
- Voorbeeld: `TC-PK-002: Devmart governance-laag (.claude/, CLAUDE.md)`.
- Onderwerpsregel imperatief, zonder punt aan het eind.
- Nooit committen zonder bevestiging van Delroy wanneer de TC dat niet expliciet
  toestaat. **Nooit pushen** vóór de GO in CUT-5 (zie
  [`phase-gates.md`](phase-gates.md)).

---

## Write Verification

Elke ronde met schrijfacties eindigt met een Write Verification: TC-nummer,
lane, gewijzigde bestandspaden, aantal aangeraakte bestanden, wat concreet is
gewijzigd, uitgevoerde verificatie, resterend risico.
