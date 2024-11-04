import pluginJs from "@eslint/js";
import pluginReact from "eslint-plugin-react";
import tailwind from "eslint-plugin-tailwindcss";
import globals from "globals";
import tseslint from "typescript-eslint";

export default [
  { files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"] }, // Fichiers à analyser
  { languageOptions: { globals: globals.browser } }, // Options de langage
  pluginJs.configs.recommended, // Configuration recommandée pour JavaScript
  ...tseslint.configs.recommended, // Configuration recommandée pour TypeScript
  ...tailwind.configs["flat/recommended"], // Configuration recommandée pour Tailwind CSS
  pluginReact.configs.flat.recommended, // Configuration recommandée pour React
  {
    // Override configuration for specific directories
    overrides: [
      {
        files: ["components/ui/**/*"], // Vérifiez si vous souhaitez appliquer les règles ici
        rules: {
          // Disable all rules for this directory
          all: "off", // Cela désactive toutes les règles pour ces fichiers
        },
      },
    ],
  },
];
