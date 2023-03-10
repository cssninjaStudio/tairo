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

    // Component meta allow us to generate the API docs from the source code
    // So we can keep the docs in sync with the code
    'nuxt-component-meta',

    // Those modules are here for development only
    '@nuxt/devtools',
    '@cssninja/nuxt-media-viewer',
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
      // We use this to be able to create a link to open vscode from the browser
      // (browse the demo components pages and click on the "Open in VSCode" button)
      dev: process.dev
        ? {}
        : {
            prefix: `vscode-remote/wsl+Ubuntu`,
            src: resolve(__dirname),
          },
    },
  },
  nitro: {
    prerender: {
      crawlLinks: true,
      routes: ['/', '/components'],
    },
  },
  routeRules: {
    '/**': {
      static: true,
      headers: { 'cache-control': `public, maxage=${WEEK}, s-maxage=${WEEK}` },
    },
  },
  mediaViewer: {
    installIpxMiddleware: false,
    hasIpx: false,
  },
  // Component meta allow us to generate the API docs from the source code
  // So we can keep the docs in sync with the code
  componentMeta: {
    exclude: ['nuxt/dist', '@nuxt/ui-templates/dist', 'tairo/.demo/components'],
    debug: 2,
    checkerOptions: {
      forceUseTs: true,
      schema: {
        ignore: [
          'RouteLocationRaw',
          'ComponentData',
          'NuxtComponentMetaNames',
          'RouteLocationPathRaw',
          'RouteLocationNamedRaw',
        ],
      },
    },
  },
})
