// https://nuxt.com/docs/api/configuration/nuxt-config
const development: boolean = process.env.NODE_ENV !== "production";
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  app: {
    baseURL: development ? "/" : "/sites/taskayev2/",
    // baseURL: "/",
  },
  devtools: { enabled: false },
  srcDir: "src/",
  modules: ["@nuxt/eslint", "@nuxtjs/device", "@pinia/nuxt",],
  typescript: {
    tsConfig: {
      compilerOptions: {
        paths: {
          "@": ["src/"],
          "@/*": ["src/*"],
        },
      },
    },
  },
  imports: {
    dirs: [
      'shared/composables'
    ]
  },
  components: {
    global: true,
    dirs: [
      {
        path: "@/shared/components/",
        pathPrefix: false,
        extensions: [".vue"],
      },
    ],
  },
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          api: 'modern-compiler',
          additionalData: '@use "@/shared/assets/scss/abstract" as *; @use "@/shared/assets/scss/common" as *;'
          // additionalData: '@use "@/app/scss/style.scss" as *;'
          // additionalData: '@use "@/app/scss/style.scss";'
          // additionalData: '@forward "@/app/scss/style.scss";'
        },
      },
    },
  },
})
