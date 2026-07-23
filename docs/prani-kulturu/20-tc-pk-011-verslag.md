# TC-PK-011 — Deploy-alignment + Hostinger (Nitro node_server, /admin-404, Node 22-gate, artifact)

> **Status: DRAFT** tot Delroy "Goedgekeurd" zegt. Lane C (HIGH-risk) · EXTENDED MODE · Mode A.
> Fase: CUT-6 (deploy). Bron-TC:
> `11-Task-Contracts/TC-PK-011-deploy-hostinger-v2-APPROVED.md` (APPROVED 2026-07-23).
> Datum uitvoering: 2026-07-23. Node bij build+test: **v22.23.1** (binnen `>=22.12 <23`).

---

## 1. Samenvatting

De publieke frontend is deploybaar gemaakt als **standalone Node-server**
(Nitro-preset `node_server`) voor **Hostinger op Node 22**, met `/admin`
server-side afgeschermd (echte 404 + `X-Robots-Tag: noindex, nofollow`), een
volledige buildgate op Node 22, en één **reproduceerbaar `.output`-artifact**
(broncommit + SHA-256) met bijbehorende deploy-runbook.

**Resultaat: acceptatietest 1–8 volledig groen.** devmart-reviewer: **ACCEPT**;
db-guard: **PASS**. Vier code-commits (WP0–WP3) + één docs-commit (WP5) — **geen
push** (WP6 is Delroy-gated). WP7 (Hostinger-deploy + DNS) is Delroy/infra.

Alle 8 Codex-voorwaarden uit PK-CODEX-AUDIT-002 zijn geadresseerd.

---

## 2. Werkpakketten

### WP0 — Governance-sync (`.claude/rules/phase-gates.md`)
`phase-gates.md` gesynct met **Master v3.9**: fasemodel bijgewerkt (CUT-4f/4g +
frontend-afronding TC-PK-007…010 **DONE**; **CUT-5** = eerste push ✔ uitgevoerd
2026-07-23 t/m TC-PK-008 `5a1fb4c`; **CUT-5b/TC-PK-012** Codex her-audit **DONE**
= GO-MET-VOORWAARDEN; **CUT-6** = deploy/TC-PK-011; **CUT-7** = admin-fix + EN-fase;
**Fase 5** = backend). Referentie v3.5→v3.9. Gate-regel 2 (push) omgezet naar
GO-gebaseerd; gate-regel 4 (backend) naar "ná CUT-6 + nieuwe Fase 5-TC". Actieve
fase = CUT-6. Doel behaald: conflictvrije, actuele fasegate voor db-guard.

### WP1 — Nitro-preset (`vite.config.ts`)
`nitro: { preset: "node_server" }` toegevoegd als **wrapperoptie** binnen de
bestaande `defineConfig` van `@lovable.dev/vite-tanstack-config` (geverifieerd
als ondersteunde optie: object met `preset?: string`, geldt buiten een
Lovable-build). **Geen tweede Nitro-plugin.** Bewijs: `.output/nitro.json` toont
`preset: "node-server"` (Nitro's canonieke id voor de `node_server`-alias),
`serverEntry: server/index.mjs`, `publicDir: public`, preview-commando
`node ./server/index.mjs` — **geen** Cloudflare/Wrangler-startpad.

### WP2 — `/admin` server-side 404 (`src/routes/admin.tsx` + `src/server.ts`)
- `admin.tsx`: SSR `beforeLoad` → `throw notFound()` — een **echte 404 vóór
  render** (geen redirect-maskering) voor `/admin` én alle `/admin/*`
  (parent-layout-`beforeLoad` draait vóór child). De `robots, noindex, nofollow`-
  meta in `head` is **behouden**. Darkone-bestanden onder `public/admin/**` en de
  admin-UI-code (`AdminLayout`, `head.links`) **ongewijzigd**. Geen basic-auth,
  geen credentials.
- `server.ts`: edge-prefixcheck zet `X-Robots-Tag: noindex, nofollow` op exact
  `/admin` + prefix `/admin/` (geen vals-positief op `/administrator`).

> **Waiver (Delroy, 2026-07-23).** WP2 scopet in de TC op *alleen* `admin.tsx`.
> Tijdens uitvoering bleek dat **geen enkele route-level TanStack-API (v1.168)**
> `noindex, nofollow` in de `/admin`-404-respons krijgt: bij een `notFound`-throw
> worden de route-`head`, `setResponseHeader` (beforeLoad én loader),
> `notFound({ headers })` en de route-`headers`-optie **niet** uitgezonden
> (5 mechanismen getest en bewezen falend). De enige betrouwbare, schone route
> voor de header op álle `/admin`(+`/admin/*`)-responses is een prefixcheck in
> `src/server.ts`. Delroy heeft die uitbreiding buiten de admin.tsx-scope
> **expliciet goedgekeurd** (keuze "Waiver: header in src/server.ts").

### WP3 — Node 22 pinnen (`package.json`)
`engines.node` = `">=22.12 <23"` (Vite 8 vereist ≥ 22.12; Node 18 valt af). Build
én runtime getest op Node **v22.23.1**.

### WP4 — Volledige gate op Node 22
Zie §3 (gate-output) en §4 (acceptatietest). Alle stappen groen.

### WP5 — Artifact + runbook + verslag
- Artifact gearchiveerd:
  `Prani Kulturu Pro/09-Deliverables/TC-PK-011/pk-tc-pk-011-output-bc05bb4.tar.gz`
  (19,7 MB). **Broncommit** `bc05bb4fdc5c445d7c1852048257aab8feb5dbd6`,
  **archief-SHA-256** `978c5949d9ba71b49eeec0571251fec2751618113996eaf9b76d5434d7815947`.
- Runbook: [`19-tc-pk-011-deploy-runbook.md`](19-tc-pk-011-deploy-runbook.md)
  (Hostinger Node.js Web App / "Other", Passenger niet aangenomen, `PORT`/
  `NODE_ENV`, upload, rollback, loglocatie, health/smoke, DNS/SSL).
- Dit verslag. Runbook + verslag zitten in dezelfde commitset als WP0–WP3
  (één pushcommitset).

---

## 3. Gate-output (Node v22.23.1)

| Stap | Resultaat |
| --- | --- |
| Frozen install (`bun install --frozen-lockfile`) | ✔ 565 packages, no changes |
| Build (`bun run build`) | ✔ groen; `.output/nitro.json` preset `node-server`, `server/index.mjs` + `public/` |
| Typecheck (`bunx tsc --noEmit`) | ✔ 0 errors |
| Lint (`bun run lint`) | ✔ 0/0 |
| `bun audit` (actueel) | ✔ **No vulnerabilities found** (geen nieuwe HIGH) |
| Node-server-output starten (`node .output/server/index.mjs`) | ✔ luistert op `PORT` |
| HTTP-smoke | ✔ zie §4.4 |
| `main.js`-SHA-256 (`.output/public`) | ✔ `093a349a…dfc3` (match; bron identiek) |

---

## 4. Acceptatietest 1–8 (hard = Codex-voorwaarden)

**1. Nitro-outputvorm — GROEN.** `.output/nitro.json` → `preset: "node-server"`
(canonieke id van de `node_server`-alias); `.output/server/index.mjs` +
`.output/public` aanwezig; preview-commando `node ./server/index.mjs`; geen
Cloudflare/Wrangler-startpad.

**2. Node 22 — GROEN.** `engines.node = ">=22.12 <23"`; build + runtime op
v22.23.1 groen.

**3. `/admin` server-side 404 — GROEN.** `/admin`, `/admin/`, `/admin/dashboard`,
`/admin/anything/deep` = **404** vóór render (geen redirect, geen admin-UI in de
body). `X-Robots-Tag: noindex, nofollow` aanwezig op /admin + alle /admin/*;
`robots`-meta in `head` behouden. Darkone-bestanden ongewijzigd.

**4. Gate groen — GROEN.** Frozen install, build, tsc, lint, actuele `bun audit`
(0 vulns), output starten, HTTP-smoke — zie §3 en §4.4.

**5. `main.js` byte-identiek — GROEN.** SHA-256 in `.output/public/artmart/assets/js/main.js`
= `093a349a…dfc3`; bron identiek; vendor-JS + `public/admin/**` git-clean.

**6. Reproduceerbaar artifact + runbook + verslag — GROEN.** Artifact gearchiveerd
met broncommit + SHA-256 (§2 WP5); runbook + verslag in dezelfde commitset;
rollback + DNS/SSL + health/smoke in de runbook.

**7. Fasegate gesynct — GROEN.** `phase-gates.md` = Master v3.9; db-guard **PASS**
op de fasegate.

**8. Sub-agents — GROEN.** devmart-reviewer **ACCEPT**; db-guard **PASS**.

### 4.4 HTTP-smoke (samenvatting)

- Publieke routefamilies + `/login` + `/register` = **200** (23 routes getest,
  incl. `/heritage/details`, `/events/details`, `/artists/portfolio`,
  `/organizations/details`, `/stories/details`, `/collections/:slug`).
- `/artmart/assets/js/main.js` = **200**.
- Onbekend pad = **404**.
- `/admin`, `/admin/`, `/admin/dashboard`, `/admin/anything/deep` = **404**
  met `X-Robots-Tag: noindex, nofollow`.
- Geen valse `X-Robots-Tag` op `/`, `/administrator`, onbekende paden.

---

## 5. Sub-agent-verdicts (advies; Delroy beslist)

- **db-guard — PASS.** Autorisatie (CUT-6-fase, server.ts-waiver gedekt), geen
  schema/migraties/SQL, geen auth-/sessie-/tokenwijziging, geen credentials/secrets,
  `/admin`-grens sluitend voor alle subpaden, edge-header zonder vals-positief,
  Darkone/admin-UI ongemoeid. Geen HOLD/BLOCK.
- **devmart-reviewer — ACCEPT.** Elke gewijzigde regel TC-vereist en verklaard;
  scope-discipline PASS; file-boundaries PASS (incl. server.ts-waiver);
  diff-integriteit PASS; geen forbidden pad; stop-conditie PASS (geen push).
  Twee verificatie-items ter bevestiging: (1) TodoWrite (8 WP's) is gebruikt en
  de sub-agents zijn geautoriseerd via TC-3.13; (2) db-guard is hier op WP0+WP2
  ingezet zoals de TC expliciet vereist (niet de Fase 5-DB-scope). Beide gedekt.

---

## 6. Write Verification

- **Task:** TC-PK-011 v2 — Deploy-alignment + Hostinger
- **TC ID:** TC-PK-011
- **Execution lane:** Lane C (HIGH-risk), EXTENDED MODE, Mode A
- **Approval:** Delroy "Goedgekeurd" 2026-07-23; server.ts-waiver Delroy 2026-07-23
- **Uitvoering:** 2026-07-23
- **Gewijzigde bestanden (5):**
  - `.claude/rules/phase-gates.md` (WP0) — commit `6e1f0fc`
  - `vite.config.ts` (WP1) — commit `cdb527e`
  - `src/routes/admin.tsx` + `src/server.ts` (WP2) — commit `82b098e`
  - `package.json` (WP3) — commit `bc05bb4`
  - `docs/prani-kulturu/19-tc-pk-011-deploy-runbook.md` + `20-tc-pk-011-verslag.md` (WP5) — WP5-commit
- **Artifact (niet in git; gitignored `.output`):**
  `09-Deliverables/TC-PK-011/pk-tc-pk-011-output-bc05bb4.tar.gz` —
  broncommit `bc05bb4…`, SHA-256 `978c5949…5947`.
- **Wat gewijzigd:** Nitro node_server-preset; `/admin` echte 404 + X-Robots-Tag
  noindex; Node 22 in engines; fasegate gesynct; artifact + runbook + verslag.
- **Verificatie:** volledige gate op Node 22 (§3), HTTP-smoke (§4.4), main.js
  SHA-256-match, db-guard PASS, devmart-reviewer ACCEPT.
- **Hook failures:** geen.
- **Scope creep:** geen. Eén geautoriseerde uitbreiding: `src/server.ts` voor de
  X-Robots-Tag-header (Delroy-waiver, §2 WP2).
- **Resterend risico:** Laag. Hostinger-entrypad/poort worden in WP7 in het
  paneel bevestigd (runbook §3); Passenger niet aangenomen.

---

## 7. Stop-conditie

WP0–WP5 klaar; commits WP0–WP3 + WP5-docs gezet; **geen push** (WP6 = Delroy's
push-GO). Acceptatietest 1–8 groen. Artifact + runbook geleverd. Vervolg:
Cowork-verificatie → **Delroy push-GO (WP6)** → Hostinger-deploy + DNS (WP7) →
live op pranikulturu.org → post-deploy-verificatie → Fase 5.
