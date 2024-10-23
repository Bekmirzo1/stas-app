// @ts-check
import withNuxt from "./.nuxt/eslint.config.mjs";

export default withNuxt(
  // Your custom configs here
  {
    rules: {
      "vue/html-self-closing": ["off"],
      "@typescript-eslint/no-explicit-any": ["off"],
      "@typescript-eslint/no-extraneous-class": ["off"],
      "no-restricted-imports": [
        "error",
        {
          // paths: ['[@~]/composables'],
          patterns: ["[@~]/shared/composables/**/*"],
        },
        // {
        //   patterns: ["[@~]/shared/composables/**/*"],
        //   // importNames: ['views'],
        //   // patterns: ["@/views/**/*", "!@/views/**/"],
        // // patterns: ["[@~]/views/**/*"],
        // // patterns: ["[@~]/views/**/*", "![@~]/views/**/"],
        //   // patterns: ["[@~]/"],
        // },
      ],
      "vue/no-v-html": "off",
      // "@typescript-eslint/no-unused-vars": "off",
    },
  },
);
