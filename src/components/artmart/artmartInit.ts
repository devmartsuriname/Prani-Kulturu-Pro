// ArtMart plugin init controller.
//
// Strategy (Round D.1):
//   1. Vendor scripts + main.js load EXACTLY ONCE per page lifetime. main.js
//      contains window/document-level bindings (scroll, resize, dark-mode
//      toggles, sticky header, language dropdown, click-outside handlers, etc.)
//      that must NOT accumulate across SPA navigations — so we never re-execute
//      main.js.
//   2. On every route mount AFTER the first, we tear down and re-initialize
//      only the per-DOM plugin instances (Swiper, Slick, counterUp,
//      niceSelect, Fancybox, marquee, WOW) whose init targets are the DOM that
//      React just replaced. Options mirror main.js 1:1 — no behavior change.
//   3. main.js stays byte-identical (rule 3).
//
// Isolation: this module is only imported by src/components/artmart/frame.tsx
// which is only imported by ArtMart-shell routes. /admin never touches it.

/* eslint-disable @typescript-eslint/no-explicit-any */

const VENDOR_SCRIPTS = [
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
  "/artmart/assets/js/main.js", // MUST be last; runs global bindings once
];

let vendorPromise: Promise<void> | null = null;
let firstMountDone = false;

function appendScript(src: string): Promise<void> {
  return new Promise((resolve, reject) => {
    const s = document.createElement("script");
    s.src = src;
    s.async = false;
    s.onload = () => resolve();
    s.onerror = () => reject(new Error(`Failed to load ${src}`));
    document.body.appendChild(s);
  });
}

export function loadVendors(): Promise<void> {
  if (typeof window === "undefined") return Promise.resolve();
  if (vendorPromise) return vendorPromise;
  vendorPromise = (async () => {
    for (const src of VENDOR_SCRIPTS) {
      await appendScript(src);
    }
  })();
  return vendorPromise;
}

// Per-DOM plugin option maps — copied verbatim from main.js so behavior is
// identical to the first-load pass done by main.js itself.
const SWIPER_CONFIGS: Array<[string, any]> = [
  [".home1-banner-slider", {
    slidesPerView: 1, speed: 1500, effect: "fade",
    autoplay: { delay: 2500, disableOnInteraction: false },
    pagination: { el: ".swiper-pagination1", clickable: true },
  }],
  [".home1-auction-slider", {
    slidesPerView: 1, speed: 1500, spaceBetween: 25,
    autoplay: { delay: 2500, disableOnInteraction: false },
    navigation: { nextEl: ".auction-slider-next", prevEl: ".auction-slider-prev" },
    breakpoints: {
      280: { slidesPerView: 1 }, 386: { slidesPerView: 1 }, 576: { slidesPerView: 1 },
      768: { slidesPerView: 2 }, 992: { slidesPerView: 3 },
      1200: { slidesPerView: 4, spaceBetween: 15 }, 1400: { slidesPerView: 4 },
    },
  }],
  [".home1-generat-art-slider", {
    slidesPerView: 1, speed: 1500, spaceBetween: 25,
    autoplay: { delay: 2500, disableOnInteraction: false },
    navigation: { nextEl: ".generat-art-slider-next", prevEl: ".generat-art-slider-prev" },
    breakpoints: {
      280: { slidesPerView: 1 }, 386: { slidesPerView: 1 }, 576: { slidesPerView: 1 },
      768: { slidesPerView: 2 }, 992: { slidesPerView: 3 },
      1200: { slidesPerView: 4, spaceBetween: 15 }, 1400: { slidesPerView: 4 },
    },
  }],
  [".home1-upcoming-auction-slider", {
    slidesPerView: 1, speed: 1500, spaceBetween: 25,
    autoplay: { delay: 2500, disableOnInteraction: false },
    navigation: { nextEl: ".upcoming-auction-slider-next", prevEl: ".upcoming-auction-slider-prev" },
    breakpoints: {
      280: { slidesPerView: 1 }, 386: { slidesPerView: 1 }, 576: { slidesPerView: 1 },
      768: { slidesPerView: 2 }, 992: { slidesPerView: 3 },
      1200: { slidesPerView: 4, spaceBetween: 15 }, 1400: { slidesPerView: 4 },
    },
  }],
  [".home1-testimonial-slider", {
    slidesPerView: 1, speed: 1500, spaceBetween: 25,
    autoplay: { delay: 2500, disableOnInteraction: false },
    navigation: { nextEl: ".testimonial-slider-next", prevEl: ".testimonial-slider-prev" },
    breakpoints: {
      280: { slidesPerView: 1 }, 386: { slidesPerView: 1 }, 576: { slidesPerView: 1 },
      768: { slidesPerView: 2 }, 992: { slidesPerView: 2 },
      1200: { slidesPerView: 3, spaceBetween: 15 }, 1400: { slidesPerView: 3 },
    },
  }],
  [".home1-article-slider", {
    slidesPerView: 1, speed: 1500, spaceBetween: 25,
    autoplay: { delay: 2500, disableOnInteraction: false },
    navigation: { nextEl: ".article-slider-next", prevEl: ".article-slider-prev" },
    breakpoints: {
      280: { slidesPerView: 1 }, 386: { slidesPerView: 1 }, 576: { slidesPerView: 1 },
      768: { slidesPerView: 2 }, 992: { slidesPerView: 3 },
      1200: { slidesPerView: 4, spaceBetween: 15 }, 1400: { slidesPerView: 4 },
    },
  }],
  [".auction-details-nav-slider", {
    slidesPerView: 1, speed: 1500, spaceBetween: 15, grabCursor: true,
    autoplay: { delay: 2500, disableOnInteraction: false },
    navigation: { nextEl: ".category-slider-next", prevEl: ".category-slider-prev" },
    breakpoints: {
      280: { slidesPerView: 2 },
      350: { slidesPerView: 3, spaceBetween: 10 },
      576: { slidesPerView: 4, spaceBetween: 15 },
      768: { slidesPerView: 5 },
      992: { slidesPerView: 5, spaceBetween: 15 },
      1200: { slidesPerView: 5 },
      1400: { slidesPerView: 5, spaceBetween: 35 },
    },
  }],
  // Round E.1 addition — not in main.js; initialized by artmartInit only.
  [".home2-artist-slider", {
    slidesPerView: 1, speed: 1500, spaceBetween: 25,
    autoplay: { delay: 2500, disableOnInteraction: false },
    navigation: { nextEl: ".artist-slider-next", prevEl: ".artist-slider-prev" },
    breakpoints: {
      576: { slidesPerView: 1 },
      768: { slidesPerView: 2 },
      1200: { slidesPerView: 4, spaceBetween: 15 },
    },
  }],
];

// Selectors NOT initialized by main.js — must be initialized on first mount too.
const FIRST_MOUNT_ONLY_SELECTORS = [".home2-artist-slider"];


const SLICK_CONFIG = {
  infinite: true, centerMode: false, arrows: true, dots: false,
  autoplay: true, autoplaySpeed: 2500, speed: 800,
  vertical: true, verticalSwiping: true, slidesToShow: 2, slidesToScroll: 1,
  responsive: [
    { breakpoint: 1400, settings: { slidesToShow: 2 } },
    { breakpoint: 1200, settings: { slidesToShow: 1 } },
    { breakpoint: 992, settings: { slidesToShow: 1 } },
    { breakpoint: 768, settings: { arrows: false, slidesToShow: 1 } },
    { breakpoint: 576, settings: { arrows: false, slidesToShow: 1 } },
    { breakpoint: 480, settings: { arrows: false, vertical: false, verticalSwiping: false, slidesToShow: 1 } },
    { breakpoint: 350, settings: { arrows: false, vertical: false, verticalSwiping: false, slidesToShow: 1 } },
  ],
};

function teardown(): void {
  const w = window as any;
  const $ = w.jQuery;
  if (!$) return;
  try {
    document.querySelectorAll(".swiper-initialized").forEach((el: any) => {
      try { el.swiper?.destroy(true, true); } catch { /* noop */ }
    });
  } catch { /* noop */ }
  try {
    document.querySelectorAll(".slick-initialized").forEach((el) => {
      try { $(el).slick("unslick"); } catch { /* noop */ }
    });
  } catch { /* noop */ }
  try { $("[data-fancybox]").off("click.fb-start"); } catch { /* noop */ }
  try { $(".video-player").off("click.fb-start"); } catch { /* noop */ }
  try {
    $(".counter").each(function (this: any) {
      $(this).removeData("counterup-nums").removeData("counterup-func");
    });
  } catch { /* noop */ }
  try {
    // nice-select injects a sibling .nice-select before each <select>;
    // strip them so re-init doesn't duplicate.
    document.querySelectorAll(".nice-select").forEach((el) => el.remove());
  } catch { /* noop */ }
  try {
    // marquee wraps children in .js-marquee-wrapper; unbind + rely on re-init.
    document.querySelectorAll(".marquee_text").forEach((el: any) => {
      try { $(el).marquee("destroy"); } catch { /* noop */ }
    });
  } catch { /* noop */ }
}

function initPluginsOnce(opts?: { only?: string[] }): void {
  const w = window as any;
  const $ = w.jQuery;
  if (!$) return;
  const only = opts?.only;

  // Swiper
  if (w.Swiper) {
    for (const [selector, sopts] of SWIPER_CONFIGS) {
      if (only && !only.includes(selector)) continue;
      try {
        document.querySelectorAll(selector).forEach((el) => {
          try { new w.Swiper(el, sopts); } catch { /* noop */ }
        });
      } catch { /* noop */ }
    }
  }
  if (only) return; // scoped init: only run selected Swiper configs


  // Slick
  try { if ($.fn.slick) $(".slider").slick(SLICK_CONFIG); } catch { /* noop */ }

  // niceSelect
  try { if ($.fn.niceSelect) $("select").niceSelect(); } catch { /* noop */ }

  // counterUp (waypoints-based; safe to re-bind on new nodes)
  try {
    if ($.fn.counterUp) $(".counter").counterUp({ delay: 10, time: 1500 });
  } catch { /* noop */ }

  // Fancybox
  try {
    if ($.fn.fancybox) {
      $('[data-fancybox="gallery"]').fancybox({
        buttons: ["close"], loop: false, protect: true,
      });
      $(".video-player").fancybox({
        buttons: ["close"], loop: false, protect: true,
      });
    }
  } catch { /* noop */ }

  // Marquee
  try {
    if ($.fn.marquee) {
      $(".marquee_text").marquee({
        direction: "left", duration: 25000, gap: 50,
        delayBeforeStart: 0, duplicated: true, startVisible: true,
      });
    }
  } catch { /* noop */ }

  // WOW — construct a fresh instance so new .wow elements are observed.
  try {
    if (w.WOW) {
      const wow = new w.WOW({
        boxClass: "wow", animateClass: "animated",
        offset: 80, mobile: true, live: true,
      });
      wow.init();
      w.wow = wow;
    }
  } catch { /* noop */ }
}

export async function runArtmartInit(): Promise<void> {
  await loadVendors();
  if (!firstMountDone) {
    firstMountDone = true;
    // First mount: main.js already initialized its own selectors. Additionally
    // init selectors main.js does NOT cover (Round E.1: artist carousel).
    await new Promise((r) => requestAnimationFrame(() => r(null)));
    initPluginsOnce({ only: FIRST_MOUNT_ONLY_SELECTORS });
    return;
  }
  teardown();
  await new Promise((r) => requestAnimationFrame(() => r(null)));
  initPluginsOnce();
}

