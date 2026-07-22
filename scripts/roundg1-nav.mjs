// Round G.1 — replace menu-list with 7-item grouped nav.
// Deleted after the round.
import { readdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ROUTES_DIR = "src/routes";
const SKIP = new Set(["__root.tsx", "$.tsx", "admin.tsx", "README.md"]);

const ACTIVE = {
  "index": null,
  "heritage.index": "Erfgoed",
  "heritage.upcoming": "Erfgoed",
  "heritage.details": "Erfgoed",
  "collections.$slug": "Erfgoed",
  "artists.index": "Kunstenaars",
  "artists.portfolio": "Kunstenaars",
  "organizations.index": "Organisaties",
  "organizations.details": "Organisaties",
  "events.index": "Agenda",
  "events.details": "Agenda",
  "stories.index": "Verhalen",
  "stories.details": "Verhalen",
  "media": "Media",
  "about": "Over",
  "contact": "Over",
  "faq": "Over",
  "accessibility": "Over",
  "privacy": "Over",
  "terms": "Over",
  "search": null,
  "wishlist": null,
  "certificate": null,
  "account.index": null,
  "account.profile": null,
  "account.orders": null,
  "account.bidding": null,
  "account.wishlist": null,
  "account.wishlist-general": null,
};

// N = literal two-char escape (\n) to sit inside the JS string constant
const N = "\\n";
const Q = '\\"'; // literal \" inside the JS string constant

function buildMenuHtml(active) {
  const liClass = (label) => active === label ? ` class=${Q}active menu-item-has-children${Q}` : ` class=${Q}menu-item-has-children${Q}`;
  const li = (label, href) => `<li${active === label ? ` class=${Q}active${Q}` : ""}><a href=${Q}${href}${Q}>${label}</a></li>`;

  const parts = [];
  parts.push(`<ul class=${Q}menu-list${Q}>`);
  parts.push(`<li${liClass("Erfgoed")}>`);
  parts.push(`<a class=${Q}drop-down${Q} href=${Q}/heritage${Q}>Erfgoed</a>`);
  parts.push(`<i class=${Q}bi bi-plus dropdown-icon${Q}></i>`);
  parts.push(`<ul class=${Q}sub-menu${Q}>`);
  parts.push(`<li><a href=${Q}/heritage${Q}>Alle erfgoed</a></li>`);
  parts.push(`<li><a href=${Q}/heritage/upcoming${Q}>Binnenkort</a></li>`);
  parts.push(`<li><a href=${Q}/collections/tangible${Q}>Collecties</a></li>`);
  parts.push(`</ul>`);
  parts.push(`</li>`);
  parts.push(li("Kunstenaars", "/artists"));
  parts.push(li("Organisaties", "/organizations"));
  parts.push(li("Agenda", "/events"));
  parts.push(li("Verhalen", "/stories"));
  parts.push(li("Media", "/media"));
  parts.push(`<li${liClass("Over")}>`);
  parts.push(`<a class=${Q}drop-down${Q} href=${Q}/about${Q}>Over</a>`);
  parts.push(`<i class=${Q}bi bi-plus dropdown-icon${Q}></i>`);
  parts.push(`<ul class=${Q}sub-menu${Q}>`);
  parts.push(`<li><a href=${Q}/about${Q}>Over ons</a></li>`);
  parts.push(`<li><a href=${Q}/contact${Q}>Contact</a></li>`);
  parts.push(`<li><a href=${Q}/faq${Q}>Veelgestelde vragen</a></li>`);
  parts.push(`<li><a href=${Q}/accessibility${Q}>Toegankelijkheid</a></li>`);
  parts.push(`<li><a href=${Q}/privacy${Q}>Privacybeleid</a></li>`);
  parts.push(`<li><a href=${Q}/terms${Q}>Voorwaarden</a></li>`);
  parts.push(`</ul>`);
  parts.push(`</li>`);
  parts.push(`</ul>`);
  return parts.join(N);
}

let touched = 0;
for (const f of readdirSync(ROUTES_DIR)) {
  if (SKIP.has(f) || !f.endsWith(".tsx")) continue;
  const key = f.replace(/\.tsx$/, "");
  const active = ACTIVE[key];
  if (active === undefined) { console.log("skip:", f); continue; }
  const p = join(ROUTES_DIR, f);
  const src = readFileSync(p, "utf8");
  // Match escaped-quote menu-list ... </ul>, allow any content incl real newlines
  // Match from menu-list opener up to (but not including) the mobile section
  // that always follows it: either the mobile search-area or the mobile btn-area.
  // Any leftover fragments from earlier corrupted rounds get consumed here.
  const re = /<ul class=\\"menu-list\\">[\s\S]*?(?=<div class=\\"search-area d-lg-none|<div class=\\"btn-area d-lg-none)/g;
  const html = buildMenuHtml(active) + "\\n"; // trailing escaped newline keeps spacing
  const next = src.replace(re, html);
  if (next !== src) {
    writeFileSync(p, next);
    touched++;
    console.log("wrote:", f, "active=", active);
  } else {
    console.log("no-match:", f);
  }
}
console.log("total touched:", touched);
