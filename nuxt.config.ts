// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-05-15",
  devtools: { enabled: true },
  future: {
    compatibilityVersion: 4,
  },
  css: ["~/assets/css/main.css"],
  modules: ["@nuxt/ui", "@nuxt/eslint", "@nuxt/devtools", "@nuxtjs/mdc"],

  runtimeConfig: {
    openaiApiKey: "",
  },
  vite: {
    optimizeDeps: {
      include: ["debug"],
    },
  },
  mdc: {
    highlight: {
      theme: "material-theme-palenight",
      langs: ["html", "markdown", "vue", "typescript", "javascript"],
    },
  },
});
