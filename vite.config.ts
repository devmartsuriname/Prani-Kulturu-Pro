// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - TanStack devtools (dev-only, first), tanstackStart, viteReact, tailwindcss, tsConfigPaths,
//     nitro (build-only using cloudflare as a default target), VITE_* env injection, @ path alias,
//     React/TanStack dedupe, error logger plugins, and sandbox detection (port/host/strictPort).
// You can pass additional config via defineConfig({ vite: { ... }, etc... }) if needed.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  // TC-PK-011 WP1 — pin the Nitro build target to a standalone Node server for
  // Hostinger (Node 22). Supported wrapper option (forwarded to nitro/vite);
  // NOT a second Nitro plugin. Overrides the wrapper's default cloudflare-module
  // preset outside a Lovable build. Proof: `.output/nitro.json` reports
  // preset "node_server", with `.output/server/index.mjs` + `.output/public`.
  nitro: { preset: "node_server" },
  tanstackStart: {
    // Redirect TanStack Start's bundled server entry to src/server.ts (our SSR error wrapper).
    // nitro/vite builds from this
    server: { entry: "server" },
  },
});
