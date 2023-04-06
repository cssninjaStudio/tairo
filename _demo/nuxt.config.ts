import { resolve } from 'node:path'

// const WEEK = 60 * 60 * 24 * 7

export default defineNuxtConfig({
  extends: [
    /**
     * This extends the base Tairo layer.
     *
     * Alternatively you can use the following:
     * 'github:cssninjaStudio/tairo#v1.0.0'
     *
     * And set GIGET_AUTH=<github_token> in your .env file
     *
     * This would allows you to create an empty git repository
     * with only your source code and no demo.
     */
    '..',
    '../_layout_sidebar',
    '../_layout_collapse',

    process.env.ENABLE_DOCUMENTATION === 'true'
      ? resolve(__dirname, '../_documentation')
      : undefined,
  ],
  typescript: {
    includeWorkspace: true,
    strict: true,
  },
  modules: [
    // Swiper is a nuxt module that allows us to use swiper in nuxt
    // wich is a carousel component used in the demo
    'nuxt-swiper',

    // Use the devtools module to debug nuxt 3
    '@nuxt/devtools',
  ],
  runtimeConfig: {
    public: {
      // mapbox config
      mapboxToken: process.env.NUXT_PUBLIC_MAPBOX_TOKEN,
      // nuxt-seo-kit config
      siteUrl: process.env.NUXT_PUBLIC_SITE_URL || 'https://example.com',
      siteName: 'Tairo',
      siteDescription:
        'The most advanced Nuxt 3 and Tailwind CSS dashboard template',
      language: 'en',
    },
  },
  linkChecker: {
    failOn404: true,
  },
  unhead: {
    seoOptimise: true,
  },
  app: {
    head: {
      link: [
        {
          rel: 'icon',
          type: 'image/x-icon',
          href: '/img/favicon.png',
        },
      ],
    },
  },
  sourcemap: process.env.NODE_ENV !== 'production',
  vite: {
    define: {
      // This is required for shiki to work (used to render markdown code blocks)
      'process.env.VSCODE_TEXTMATE_DEBUG': false,
      // This enables vue-axe to work (used to check a11y - see _demo/plugins/vue-axe.ts)
      'process.env.ENABLE_A11Y_AXE': false,
    },
    optimizeDeps: {
      // disabled: false,
    },
    build: {
      target: 'esnext',
      // commonjsOptions: { include: [] },
    },
  },
  hooks: {
    'vite:extendConfig'(config, { isClient }) {
      if (process.env.NODE_ENV !== 'development' && isClient) {
        // @ts-ignore
        config.build.rollupOptions.output.entryFileNames = '_nuxt/e/[hash].js'
        // @ts-ignore
        config.build.rollupOptions.output.chunkFileNames = '_nuxt/c/[hash].js'
        // @ts-ignore
        config.build.rollupOptions.output.assetFileNames =
          '_nuxt/a/[hash][extname]'
      }
    },
  },
  nitro: {
    prerender: {
      crawlLinks: true,
      routes: ['/', '/dashboards', '/layouts'],
    },
    esbuild: {
      options: {
        target: 'esnext',
      },
    },
  },
  routeRules: {
    '/**': {
      prerender: true,
    },
  },
})
