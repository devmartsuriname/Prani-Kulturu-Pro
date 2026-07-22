# 02 — ArtMart → Prani Kulturu Page Mapping

All NEW routes are duplicates of existing ArtMart layouts (rule 2 preserved —
no restructuring), with content and title swaps only. Route renames listed
below are explicitly approved under rule 2.

| Prani Kulturu page | Route | Source layout |
| --- | --- | --- |
| Home (editorial discovery) | `/` (index.tsx) | ArtMart home2 (current) |
| About | `/about` | about.tsx |
| Contact | `/contact` | contact.tsx |
| FAQ | `/faq` | faq.tsx |
| Privacy | `/privacy` | privacy.tsx |
| Terms | `/terms` | terms.tsx |
| How-to (education) | `/how-to-bid`, `/how-to-sell` | kept, relabelled NL |
| **Heritage listing** | `/heritage` — RENAME from `/auctions` | auctions.index (grid) |
| **Heritage upcoming/featured** | `/heritage/upcoming` — RENAME from `/auctions/upcoming` | auctions.upcoming |
| **Heritage detail** | `/heritage/details` (+ `-2`, `-3` alt layouts) — RENAME from `/auctions/details*` | auctions.details* |
| Art / collection grids | `/art`, `/art/grid`, `/art/variant-2`, `/art/details` | art.* |
| Artists directory | `/artists` | artists.index |
| Artist portfolio detail | `/artists/portfolio` | artists.portfolio |
| **Stories listing** | `/stories` — RENAME from `/articles` | articles.index |
| **Stories standard** | `/stories/standard` — RENAME from `/articles/standard` | articles.standard |
| **Stories detail** | `/stories/details` — RENAME from `/articles/details` | articles.details |
| Certificate | `/certificate` | certificate.tsx |
| Wishlist (public teaser) | `/wishlist` | wishlist.tsx |
| Account area | `/account/*` | account.* (all kept) |
| **Organizations index** | `/organizations` — NEW | duplicate `artists.index` |
| **Organization detail** | `/organizations/details` — NEW | duplicate `artists.portfolio` |
| **Events/Agenda listing** | `/events` — NEW | duplicate `articles.index` grid |
| **Event detail** | `/events/details` — NEW | duplicate `articles.details` |
| **Media library** | `/media` — NEW | duplicate `art.grid` |
| **Global search results** | `/search` — NEW | new page reusing ArtMart section wrappers |
| **Category/theme/collection archive** | `/collections/$slug` — NEW dynamic route | duplicate `art.grid` |
| **Accessibility statement** | `/accessibility` — NEW | duplicate `privacy` layout |
| **404 page** | `/$` splat + `__root` notFound — NEW | new page in ArtMart shell |

## Rename execution note

Route file renames (`auctions.* → heritage.*`, `articles.* → stories.*`)
happen inside the same approved build round that scaffolds the new routes
(Round D). Old paths are not kept as redirects unless requested — Lovable UI
project delivers static template only.
