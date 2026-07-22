// Artmart template frame — injects the ported HTML body from the ThemeForest
// Artmart HTML template. Loaded on every /artmart route. Kept 1:1 with the
// source template; do NOT hand-edit body markup — re-run /tmp/port_artmart.py.
import { useEffect, type ReactNode } from "react";
import { loadVendors, runArtmartInit } from "./artmartInit";

export const PAGE_CSS: string[] = [
  "/artmart/assets/css/bootstrap.min.css",
  "/artmart/assets/css/bootstrap-icons.css",
  "/artmart/assets/css/swiper-bundle.min.css",
  "/artmart/assets/css/nice-select.css",
  "/artmart/assets/css/animate.min.css",
  "/artmart/assets/css/jquery.fancybox.min.css",
  "/artmart/assets/css/boxicons.min.css",
  "/artmart/assets/css/magnific-popup.css",
  "/artmart/assets/css/slick.css",
  "/artmart/assets/css/slick-theme.css",
  "/artmart/assets/css/style.css",
  "/artmart/assets/css/prani-brand.css",
];

// Kept for compatibility with any external reader; route files no longer
// consume PAGE_SCRIPTS directly — they call useArtmartInit() instead which
// loads vendors + main.js exactly once per page lifetime.
export const PAGE_SCRIPTS: string[] = [
  "/artmart/assets/js/jquery-3.7.1.min.js",
  "/artmart/assets/js/popper.min.js",
  "/artmart/assets/js/bootstrap.min.js",
  "/artmart/assets/js/swiper-bundle.min.js",
  "/artmart/assets/js/slick.min.js",
  "/artmart/assets/js/waypoints.min.js",
  "/artmart/assets/js/jquery.counterup.min.js",
  "/artmart/assets/js/jquery.nice-select.min.js",
  "/artmart/assets/js/jquery.fancybox.min.js",
  "/artmart/assets/js/wow.min.js",
  "/artmart/assets/js/jquery.marquee.min.js",
  "/artmart/assets/js/range-slider.js",
  "/artmart/assets/js/main.js",
];

export function useArtmartInit(): void {
  useEffect(() => {
    let cancelled = false;
    loadVendors().then(() => {
      if (!cancelled) void runArtmartInit();
    }).catch(() => { /* individual init failures already swallowed inside */ });
    return () => { cancelled = true; };
  }, []);
}

export function ArtmartFrame({ html }: { html: string }): ReactNode {
  return (
    <div
      className="artmart-scope"
      style={{ display: "contents" }}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}
