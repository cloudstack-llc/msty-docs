// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  routeRules: {
    "/": {
      redirect: "/getting-started/onboarding",
    },
    "/getting-started/download": {
      redirect: {
        to: "https://docs.msty.studio/getting-started/download",
        statusCode: 301
      }
    },
  },
  devtools: { enabled: false },
  extends: ["shadcn-docs-nuxt"],
  compatibilityDate: "2024-07-02",
  modules: ["@nuxthub/core"],
  app: {
    head: {
      script: [
        {
          src: "https://insights.msty.app/js/script.tagged-events.file-downloads.js",
          defer: true,
          "data-domain": "docs.msty.app",
          "file-types": "png,webp,dmg,zip,mp4,exe,deb,AppImage",
        } as any,
      ],
      link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
      title: "Msty Docs",
    },
  },
});
