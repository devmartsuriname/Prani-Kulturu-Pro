# 10 — Round F.body / F.body.2 (feitelijke reconstructie achteraf)

> Dit document is **achteraf** opgesteld onder TC-PK-003 (werkpakket 6). De
> rondes F.body en F.body.2 zijn destijds uitgevoerd zonder eigen rapport. Er is
> geen ronde-script, geen logbestand en geen aparte commit van die rondes
> bewaard gebleven: de repo begint bij baseline-commit `01daf17`, waarin het
> resultaat van beide rondes al verwerkt zit.
>
> Wat hieronder staat is daarom **uitsluitend afgeleid uit bewijs in de repo**:
> de inhoud van `src/routes/*.tsx` op commit `01daf17` en de inventarisatie in
> [`09-body-copy-audit.md`](09-body-copy-audit.md). Waar iets niet uit dat
> bewijs volgt, staat dat expliciet vermeld. Er is niets gereconstrueerd op
> basis van aanname.

---

## 1. Wat de rondes waren

F.body en F.body.2 waren de body-copy-rondes die volgden op Round F
([`07-round-f-nl-copy.md`](07-round-f-nl-copy.md)). Round F behandelde de
*chrome* (header, footer, menu, labels, knoppen) en de *korte* editoriale copy.
F.body en F.body.2 richtten zich op de **lopende bodytekst** binnen de
`BODY_HTML`-strings van de publieke routes.

Uit het bewijs blijkt dat de rondes tekstnode-gericht werkten: wrappers,
classes en data-attributen zijn in `01daf17` identiek aan de template-export;
alleen tekstinhoud verschilt.

## 2. Wat aantoonbaar is afgerond

Op commit `01daf17` is de bodytekst van de volgende onderdelen volledig
Nederlands en commerce-vrij:

- **`/faq`** — alle vraag- en antwoordblokken (o.a. "Wat is Prani Kulturu?",
  "Welk soort erfgoed vind ik hier terug?", "Hoe draag ik materiaal bij aan het
  archief?", "Wie mag deze records gebruiken en delen?").
- **`/contact`** — introtekst en veldlabels.
- **`/accessibility`** — WCAG-alinea en meldprocedure.
- **`/privacy`** — koppen "Persoonsgegevens verzamelen" en "Hoe wij
  persoonsgegevens verzamelen".
- **Kaart- en recordplaceholders site-breed** — "Erfgoedrecord", "Verhaal uit
  het archief", "Kunstenaar: Voorbeeld kunstenaar", "Bekijk record",
  "Voorbeeldrecord".
- **Sectiekoppen op `/` en `/about`** — o.a. "Uitgelicht erfgoed", "Ontdek onze
  essentie", "Ons verhaal", "Onze werkwijze", "Waar wij voor staan", "Recent
  toegevoegd erfgoed", "Laatste verhalen", "Aankomende evenementen".

De telling in [`09-body-copy-audit.md`](09-body-copy-audit.md) — 1.544
tekstnodes `already-dutch` tegenover 347 `english` en 64 `commerce-remnant` —
beschrijft precies deze toestand: de audit is uitgevoerd ná F.body/F.body.2 en
vóór TC-PK-003.

## 3. Wat aantoonbaar half is blijven liggen

Het duidelijkste bewijs dat de rondes **gedeeltelijk** zijn uitgevoerd, zijn
tekstnodes waarin Nederlandse en Engelse tekst door elkaar staan. Op `01daf17`
zijn dat er acht, allemaal op `/about` en `/terms`:

| route | tekstnode (ingekort) |
| --- | --- |
| `about.tsx` | "At Artmart, we are passionate art enthusiasts … through **dynamische, boeiende initiatieven**. Our platform celebrates …" |
| `about.tsx` | "Prani Kulturu ontsluit Surinaams erfgoed via een gedeeld archief. **committed to:**" |
| `about.tsx` | "A group of passionate art collectors and tech innovators, the company set out to **het culturele archief** more accessible, transparent, and global." |
| `about.tsx` | "**The eerste online traject** was launched in early 2011 … **Dit eerste traject** attracted bidders … participate in **erfgoedmomenten vanuit het gemak** of their homes." |
| `about.tsx` | "In 2021, the platform launched an initiative … enriched the **diversiteit van het archief**." |
| `about.tsx` | "By 2017, the platform had established itself as a leader in the online **erfgoedsector** , attracting an international audience of buyers and sellers." |
| `about.tsx` | "As of 2023, remains committed … With thousands of **succesvolle trajecten** and a vibrant community of art lovers …" |
| `terms.tsx` | "It's important to have your terms and conditions reviewed by legal counsel … Customize the terms to fit the specific requirements of your **Bijdragen**." |

Het patroon is consistent: losse termen zijn wél vervangen ("auction" →
"traject", "art market" → "erfgoedsector", "collection" → "archief",
"consulting business" → "Bijdragen"), maar de omliggende Engelse zin is blijven
staan. Dat wijst op een **woordenboekgestuurde token-vervanging** in plaats van
een zinsgewijze herschrijving. Welke van beide rondes (F.body of F.body.2)
welke term heeft vervangen, is uit het bewijs **niet** vast te stellen.

## 4. Wat niet is vastgesteld

- De exacte scripts, de volgorde van F.body en F.body.2, en de datums.
- De reden waarom `/about` en `/terms` onvolledig zijn gebleven.
- Of de rondes een lengte-assert hanteerden zoals Round F dat deed
  (zie [`07-round-f-nl-copy.md`](07-round-f-nl-copy.md), sectie
  "Lengte-discipline").

Deze punten zijn bewust niet ingevuld: er is geen bron voor.

## 5. Afhandeling

Het volledige restant — de 347 Engelse en 64 commerce-nodes uit
[`09-body-copy-audit.md`](09-body-copy-audit.md), inclusief de acht gemengde
nodes hierboven — is opgeruimd in **TC-PK-003, werkpakket 5**. Zie
[`11-tc-pk-003.md`](11-tc-pk-003.md) voor de uitvoering en het resultaat van de
geautomatiseerde taal- en commerce-sweep.

## 6. Verwijzing naar de audit

- Bevinding **PK-007 / fix-lijst 5** in `PK-CODEX-AUDIT-001` benoemt dit
  contentresidu als openstaand punt.
- Fix-lijst 9 van dezelfde audit benoemt het ontbreken van dít document als
  hygiënepunt; TC-PK-003 werkpakket 6 heft dat op.
