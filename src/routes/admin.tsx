import { Outlet, createFileRoute, notFound } from "@tanstack/react-router";

/**
 * Devmart Admin layout route.
 *
 * CSS isolation contract:
 *   - Loads Darkone's compiled bundles ONLY on `/admin/*` via `head.links`.
 *     Sibling routes (e.g. `/`) never fetch a single byte of admin CSS.
 *   - Wraps children in `<div class="devmart-admin">` so future scoped resets
 *     have a stable hook. Uses `display: contents` so Darkone's own
 *     `.app-wrapper` still owns the viewport.
 */
export const Route = createFileRoute("/admin")({
  // TC-PK-011 WP2 (besluit D-20) — de admin is pre-deploy een dataloze preview en
  // mag niet publiek bereikbaar zijn. SSR `beforeLoad` gooit vóór render een echte
  // 404 (geen redirect-maskering), zodat `/admin` én `/admin/*` met status 404
  // antwoorden zonder de admin-UI te renderen. De `robots, noindex, nofollow`-meta
  // in `head` blijft behouden. De `X-Robots-Tag`-header op de 404-respons wordt op
  // edge-niveau in `src/server.ts` gezet (TanStack zendt bij een notFound-throw de
  // route-`head`/`headers` niet uit). Volledige sessie-/rol-auth volgt in Fase 5.3.
  // Darkone-bestanden onder `public/admin/**` en de admin-UI-code blijven
  // ongewijzigd; geen basic-auth/credentials.
  beforeLoad: () => {
    throw notFound();
  },
  head: () => ({
    meta: [{ name: "robots", content: "noindex, nofollow" }],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Play:wght@400;700&display=swap" },
      { rel: "stylesheet", href: "/admin/assets/css/vendor.min.css" },
      { rel: "stylesheet", href: "/admin/assets/css/icons.min.css" },
      { rel: "stylesheet", href: "/admin/assets/css/style.min.css" },
      { rel: "stylesheet", href: "/admin/assets/vendor/jsvectormap/css/jsvectormap.min.css" },
      // Neutralises Tailwind preflight leakage (img display:block etc.)
      // inside `.devmart-admin`. Must load AFTER style.min.css.
      { rel: "stylesheet", href: "/admin/assets/css/devmart-admin-scope.css" },
      { rel: "icon", href: "/admin/assets/images/favicon.ico" },
    ],
  }),
  component: AdminLayout,
});

function AdminLayout() {
  return (
    <div className="devmart-admin" style={{ display: "contents" }}>
      <Outlet />
    </div>
  );
}