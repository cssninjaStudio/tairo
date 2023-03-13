import { resolve } from 'pathe'

const WEEK = 60 * 60 * 24 * 7

export default defineNuxtConfig({
  extends: [
    // This extends the base Tairo config
    '..',
  ],
  typescript: {
    includeWorkspace: true,
    strict: true,
  },
  modules: [
    // Swiper is a nuxt module that allows us to use swiper in nuxt
    // wich is a carousel component used in the demo
    'nuxt-swiper',

    process.env.ENABLE_DOCUMENTATION
      ? resolve(__dirname, './modules/documentation/module.ts')
      : () => {},

    // Those modules are here for development only
    // '@nuxt/devtools',
    // '@cssninja/nuxt-media-viewer',
  ],
  vite: {
    // This is required for shiki to work (used to render markdown code blocks)
    define: {
      'process.env.VSCODE_TEXTMATE_DEBUG': false,
    },
  },
  linkChecker: {
    failOn404: true,
  },
  unhead: {
    seoOptimise: true,
  },
  runtimeConfig: {
    public: {
      // nuxt-seo-kit config
      siteUrl: process.env.NUXT_PUBLIC_SITE_URL || 'https://example.com',
      siteName: 'Tairo',
      siteDescription:
        'The most advanced Nuxt 3 and Tailwind CSS dashboard template',
      language: 'en',
    },
  },
  nitro: {
    prerender: {
      crawlLinks: true,
      routes: ['/'],
    },
  },
  routeRules: {
    '/**': {
      static: true,
      headers: { 'cache-control': `public, maxage=${WEEK}, s-maxage=${WEEK}` },
    },
  },
})
