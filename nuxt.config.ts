// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  routeRules: {
    "/": {
      redirect: "/getting-started/onboarding",
    },
  },
  devtools: { enabled: false },
  extends: ["shadcn-docs-nuxt"],
  compatibilityDate: "2024-07-02",
  app: {
    head: {
      script: [
        {
          'src': 'https://insights.msty.app/js/script.tagged-events.file-downloads.js',
          'defer': true,
          'data-domain': 'docs.msty.app',
          'file-types': 'png,webp',
        } as any,
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      ],
      title: 'Msty Docs',
    },
  },
});
