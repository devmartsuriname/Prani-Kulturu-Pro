import js from "@eslint/js";
import eslintPluginPrettier from "eslint-plugin-prettier/recommended";
import globals from "globals";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import tseslint from "typescript-eslint";

export default tseslint.config(
  {
    // Scopebegrenzing (TC-PK-003 WP4). Zonder deze ignores loopt `bun run lint`
    // ook over de statische ThemeForest-template en de buildoutput; dat duurde
    // meer dan tien minuten en levert geen bruikbare bevindingen op.
    ignores: [
      "dist",
      ".output",
      ".vinxi",
      ".wrangler",
      // Statische vendor-/templatebomen: geen projectbroncode.
      "public/**",
      // Door de TanStack-routergenerator geschreven, niet handmatig onderhouden.
      "src/routeTree.gen.ts",
      // Documentatie en tooling-metadata.
      "docs/**",
      ".lovable/**",
      ".agents/**",
    ],
  },
  {
    extends: [js.configs.recommended, ...tseslint.configs.recommended],
    files: ["**/*.{ts,tsx}"],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    plugins: {
      "react-hooks": reactHooks,
      "react-refresh": reactRefresh,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      "no-restricted-imports": [
        "error",
        {
          paths: [
            {
              name: "server-only",
              message:
                "TanStack Start does not use the Next.js `server-only` package. Rename the module to `*.server.ts` or mark it with `@tanstack/react-start/server-only`.",
            },
          ],
        },
      ],
      "react-refresh/only-export-components": ["warn", { allowConstantExport: true }],
      "@typescript-eslint/no-unused-vars": "off",
    },
  },
  // Prettier draait uitsluitend over broncode, niet over CSS/JSON/Markdown.
  { ...eslintPluginPrettier, files: ["**/*.{ts,tsx}"] },
  {
    // Routebestanden bevatten één machinaal gegenereerde BODY_HTML-regel van
    // tienduizenden tekens. Die regel mag niet worden geherformatteerd — de
    // inhoud is de geporte template. Daarom hier geen prettier-regel.
    files: ["src/routes/**/*.tsx"],
    rules: { "prettier/prettier": "off" },
  },
  {
    // shadcn/ui-scaffold: exporteert per bestand bewust ook varianten en
    // hulpfuncties naast het component. Wordt niet handmatig onderhouden.
    files: ["src/components/ui/**/*.tsx"],
    rules: { "react-refresh/only-export-components": "off" },
  },
  {
    // ArtMart-framebestand exporteert naast het component ook de CSS/JS-lijsten
    // en de init-hook die de routebestanden gebruiken.
    files: ["src/components/artmart/**/*.{ts,tsx}"],
    rules: { "react-refresh/only-export-components": "off" },
  },
  {
    // frame.tsx hoort bij de geporte templatelaag en valt buiten de
    // bestandsgrens van TC-PK-003; niet herformatteren.
    files: ["src/components/artmart/frame.tsx"],
    rules: { "prettier/prettier": "off" },
  },
  {
    // Admin-vendorbrug: valt buiten de scope van TC-PK-003 (admin blijft
    // ongemoeid). Wordt hier alleen buiten de lintregels gehouden, niet gewijzigd.
    files: ["src/lib/admin/**/*.{ts,tsx}"],
    // De bestanden bevatten al eigen eslint-disable-regels; die worden hier niet
    // als "ongebruikt" gemeld nu de regels op mapniveau uit staan.
    linterOptions: { reportUnusedDisableDirectives: "off" },
    rules: {
      "prettier/prettier": "off",
      "@typescript-eslint/no-explicit-any": "off",
      "react-hooks/exhaustive-deps": "off",
    },
  },
);
