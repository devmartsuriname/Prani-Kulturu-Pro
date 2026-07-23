# TC-PK-011 — Deploy-runbook Hostinger (Nitro node_server, Node 22)

> **Status: DRAFT** tot Delroy "Goedgekeurd" zegt. Lane C (HIGH-risk) · EXTENDED MODE · Mode A.
> Fase: CUT-6 (deploy naar pranikulturu.org). Bron-TC:
> `11-Task-Contracts/TC-PK-011-deploy-hostinger-v2-APPROVED.md`.
> Datum: 2026-07-23.
> **Geen credentials in dit document.** Wachtwoorden, API-sleutels en
> databasegegevens staan uitsluitend in Hostinger/hPanel en Delroy's kluis.

---

## 0. Uitgangspunt

De publieke frontend wordt gedeployd als **standalone Node-server** (Nitro-preset
`node_server`) op **Hostinger Business**, **Node 22**. Er wordt **niet** op de
server een ongepinde install/build gedraaid: er wordt één **lokaal getest,
reproduceerbaar `.output`-artifact** geüpload (broncommit + SHA-256 vastgelegd,
zie §7). Backend/MySQL is **Fase 5** en valt buiten deze runbook.

| Item | Waarde |
| --- | --- |
| Hosting | Hostinger Business (V-01 bevestigd): 50 GB disk, 3 GB RAM, 2 cores, server USA/AZ |
| Node | **22** (Vite 8 vereist ≥ 22.12; `package.json` `engines` = `>=22.12 <23`) |
| Runtime | Nitro `node_server` — `.output/server/index.mjs` + `.output/public` |
| Startcommando | `node ./server/index.mjs` (bron: `.output/nitro.json` → `commands.preview`) |
| Poort | via `PORT`-omgevingsvariabele (Nitro node-server luistert op `process.env.PORT`) |
| Omgeving | `NODE_ENV=production` |
| Domein | `pranikulturu.org` (DNS/SSL — §8) |

> **Passenger niet als aanname.** Hostinger's Node.js-app-manager kan Phusion
> Passenger gebruiken, maar dat wordt hier **niet** verondersteld. Volg de
> feitelijke velden in hPanel (§3) en gebruik het opgegeven **startbestand /
> entrypad**; controleer in het paneel welk mechanisme actief is.

---

## 1. Artifact (input van de deploy)

- **Archief:** `Prani Kulturu Pro/09-Deliverables/TC-PK-011/pk-tc-pk-011-output-bc05bb4.tar.gz`
- **Broncommit:** `bc05bb4fdc5c445d7c1852048257aab8feb5dbd6` (TC-PK-011 WP3; bevat WP1–WP3-code)
- **Archief-SHA-256:** `978c5949d9ba71b49eeec0571251fec2751618113996eaf9b76d5434d7815947`
- **Inhoud:** de volledige `.output/`-map (Nitro node-server + statische `public/`).

**Integriteitscontrole vóór upload** (lokaal of op de server):

```bash
sha256sum pk-tc-pk-011-output-bc05bb4.tar.gz
# moet zijn: 978c5949d9ba71b49eeec0571251fec2751618113996eaf9b76d5434d7815947
```

Reproduceren vanaf bron (optioneel, alleen als een verse build nodig is):

```bash
git checkout bc05bb4
# Node 22 actief (bijv. via nvm/fnm) — verplicht:
node -v            # v22.x (>=22.12 <23)
bun install --frozen-lockfile
bun run build
# resultaat: .output/ met nitro.json preset "node-server"
```

> De **archief-SHA-256** dekt het geteste artifact één-op-één. Een verse build
> is functioneel gelijk maar niet byte-identiek (`nitro.json` bevat een
> build-timestamp); gebruik daarom bij twijfel het gearchiveerde artifact.

---

## 2. Voorbereiding

1. Bevestig **Node 22** als runtime in het Hostinger Node.js-app-paneel.
2. Zorg dat de map-/appstructuur leeg of op een bekende vorige versie staat
   (rollback-referentie — §6).
3. Houd het artifact + de SHA-256 bij de hand (§1).

---

## 3. Hostinger — Node.js Web App aanmaken/instellen

In hPanel → **Websites → Node.js** (of het "Other"/generieke Node-app-type):

1. **Node-versie:** 22.
2. **Application root:** de map waarin de `.output`-inhoud komt (bijv.
   `domains/pranikulturu.org/app` of het door hPanel voorgestelde pad).
3. **Application startup file / entrypad:** het Nitro-serverentry
   → **`server/index.mjs`** (relatief aan de map waarin je `.output` uitpakt),
   ofwel `.output/server/index.mjs` als je `.output` als geheel plaatst. Neem
   het pad exact over zoals het paneel het verwacht — **Passenger niet aannemen**.
4. **Omgevingsvariabelen:**
   - `NODE_ENV=production`
   - `PORT` → gebruik de door Hostinger toegewezen poort/variabele; de Nitro
     node-server luistert automatisch op `process.env.PORT`. Zet géén vaste
     poort die met het paneel botst.
5. **Startcommando** (indien het paneel er expliciet om vraagt):
   `node ./server/index.mjs` (conform `.output/nitro.json` → `commands.preview`).

---

## 4. Upload van het artifact

1. Upload `pk-tc-pk-011-output-bc05bb4.tar.gz` naar de application root.
2. Verifieer de SHA-256 (§1) **op de server** vóór uitpakken.
3. Pak uit zodat de structuur wordt:
   ```
   <application-root>/
   ├── server/            (uit .output/server)
   ├── public/            (uit .output/public)
   └── nitro.json
   ```
   of, als je `.output/` als geheel plaatst, wijs het entrypad dan naar
   `.output/server/index.mjs` (§3.3).
4. **Geen `npm install` / `bun install` op de server nodig** — het artifact is
   standalone (Nitro bundelt de serverafhankelijkheden in `.output/server`).

---

## 5. Starten + health/smoke

1. Start/Herstart de Node-app via het paneel.
2. **Health (lokaal op de server of via tijdelijk domein):**
   ```bash
   curl -s -o /dev/null -w "%{http_code}\n" http://127.0.0.1:$PORT/
   # verwacht: 200
   ```
3. **Smoke (op het tijdelijke domein, vóór DNS-omschakeling):**
   - Publieke routes = **200**: `/`, `/heritage`, `/heritage/upcoming`,
     `/events`, `/artists`, `/artists/portfolio`, `/organizations`, `/stories`,
     `/about`, `/contact`, `/faq`, `/media`, `/search`, `/privacy`, `/terms`,
     `/accessibility`, `/login`, `/register`.
   - Onbekend pad = **404** (bv. `/onbekend-pad-xyz`).
   - `/admin`, `/admin/`, `/admin/<iets>` = **404** met responsheader
     `X-Robots-Tag: noindex, nofollow`.
   - Asset laadt = **200**: `/artmart/assets/js/main.js`.
   - `main.js`-SHA-256 = `093a349a5bb008806fcffef5887e8ab460c1664801d449ca50c7b79e0b84dfc3`.
4. **Loglocatie:** de Node-app-logs in hPanel (Node.js-app → Logs) en/of het
   `stderr/stdout`-logbestand dat het paneel toont. Controleer bij een 500 eerst
   deze logs (de app rendert een NL-foutpagina; de oorzaak staat in de log).

---

## 6. Rollback

Bij een falende smoke of live-incident:

1. **Stop** de nieuwe app-versie in hPanel.
2. **Herstel het vorige artifact/commit:** vervang de application root door de
   vorige `.output`-versie (bewaar altijd de voorgaande `.tar.gz` mét zijn
   broncommit + SHA-256) en start opnieuw.
3. Als er nog geen vorige live-versie is (eerste deploy): schakel **DNS/SSL niet
   om** zolang de smoke op het tijdelijke domein niet 100% groen is — dan is er
   niets om naar terug te rollen en blijft de oude situatie staan.
4. Log het rollbackbesluit (datum, reden, teruggezette commit/SHA-256) in het
   TC-PK-011-verslag of een vervolg-TC.

---

## 7. Reproduceerbaarheid / traceerbaarheid

| Veld | Waarde |
| --- | --- |
| Broncommit | `bc05bb4fdc5c445d7c1852048257aab8feb5dbd6` |
| Archief | `pk-tc-pk-011-output-bc05bb4.tar.gz` |
| Archief-SHA-256 | `978c5949d9ba71b49eeec0571251fec2751618113996eaf9b76d5434d7815947` |
| `main.js`-SHA-256 (in `.output/public`) | `093a349a5bb008806fcffef5887e8ab460c1664801d449ca50c7b79e0b84dfc3` |
| Nitro-preset | `node-server` (`.output/nitro.json`) |
| Node bij build+test | v22.23.1 (binnen `>=22.12 <23`) |

---

## 8. DNS / SSL

1. **Vóór omschakeling:** volledige smoke (§5) groen op een **tijdelijk domein**
   / preview-URL.
2. **DNS:** wijs `pranikulturu.org` (A/AAAA of CNAME conform Hostinger-instructie)
   naar de Hostinger-app. Houd rekening met TTL-propagatie.
3. **SSL:** activeer/verleng het SSL-certificaat (Let's Encrypt via hPanel) voor
   `pranikulturu.org` en `www.pranikulturu.org`. Forceer HTTPS-redirect.
4. **Na omschakeling:** herhaal de smoke (§5) op het live domein + controleer een
   geldig certificaat (`https://pranikulturu.org` zonder browserwaarschuwing).
5. **`/admin`-controle live:** bevestig 404 + `X-Robots-Tag: noindex, nofollow`.
   (Optioneel, later: een Hostinger-padregel die `/admin` + `/admin/*`
   server-niveau 403/404 geeft — aanbeveling, niet in de app.)

---

## 9. Wat expliciet NIET in deze fase hoort

- Geen echte auth/sessies/rollen, geen MySQL/backend, geen CMS — dat is **Fase 5**.
- Geen credentials in repo of runbook.
- Geen wijziging aan `main.js`, vendor-JS of `public/admin/**`-inhoud.
