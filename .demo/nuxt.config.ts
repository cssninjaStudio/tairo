import { existsSync } from 'node:fs'
import { readFile } from 'node:fs/promises'
import { fileURLToPath } from 'node:url'

// This is a regular expression used to extract the example source code from the markdown content.
const docExampleRe = /demo: '#examples\/([\w-]+)\/([\w-]+).vue'\r?\n---\r?\n([\s\S]*?)\r?\n::\r?\n/g

export default defineNuxtConfig({
  compatibilityDate: '2025-03-05',
  future: {
    compatibilityVersion: 4,
  },
  devtools: { enabled: true },

  extends: [
    /**
     * This extends the base Tairo layer.
     *
     * Alternatively you can use the following:
     * ["gh:cssninjaStudio/tairo/layers/tairo#v1.4.0", {
     *    install: true,
     *    giget: { auth: import.meta.env.GITHUB_TOKEN },
     * }]
     *
     * @see https://github.com/unjs/c12#extending-config-layer-from-remote-sources
     *
     * This would allows you to create an empty git repository
     * with only your source code and no demo.
     */
    '../layers/tairo',
  ],

  modules: [
    '@nuxtjs/i18n',
    '@nuxt/image',
    '@nuxt/content',
    'nuxt-component-meta',
  ],
  alias: {
    '#examples': fileURLToPath(new URL('./examples', import.meta.url)),
  },
  content: {
    build: {
      markdown: {
        toc: { depth: 5, searchDepth: 120 },
        highlight: {
          theme: {
            default: 'github-light',
            dark: 'github-dark',
          },
        },
      },
    },
    renderer: {
      anchorLinks: true,
    },
  },
  componentMeta: {
    metaSources: ['@shuriken-ui/nuxt-component-meta'],
    exclude: [
      (component: any) => {
        if (!import.meta.env.ENABLE_DOCUMENTATION) {
          return true
        }

        const hasTairoPrefix = component?.pascalName?.startsWith('Tairo')
        const hasAddonPrefix = component?.pascalName?.startsWith('Addon')
        const isBlacklisted = ['TairoWelcome'].includes(component?.pascalName)

        const isExcluded = !(hasTairoPrefix || hasAddonPrefix)

        return isBlacklisted || isExcluded
      },
    ],
  },

  experimental: {
    viewTransition: true,
    defaults: {
      nuxtLink: {
        prefetchOn: {
          visibility: false,
          interaction: true,
        },
      },
    },
  },
  $development: {
    experimental: {
      appManifest: false,
      defaults: {
        nuxtLink: {
          prefetch: false,
        },
      },
    },
  },

  css: [
    /**
     * Load local font with @fontsource packages
     * @see https://fontsource.org/
     */
    '@fontsource-variable/fira-code/index.css',
    '@fontsource-variable/inter/index.css',
    '@fontsource-variable/karla/index.css',
    /**
     * Load Tailwind CSS
     */
    '~/assets/tailwind.css',
  ],

  typescript: {
    tsConfig: {
      // Here you can customize the generated tsconfig.json file
      // vueCompilerOptions: {
      //   target: 3.4,
      // },
    },
  },

  runtimeConfig: {
    public: {
      // mapbox config
      mapboxToken: '', // set it via NUXT_PUBLIC_MAPBOX_TOKEN env
      siteUrl: '', // set it via NUXT_PUBLIC_SITE_URL
    },
  },

  i18n: {
    baseUrl: '/',
    strategy: 'prefix_except_default',
    defaultLocale: 'en',
    lazy: true,
    locales: [
      { code: 'en', dir: 'ltr', language: 'en-US', file: 'en-US.yaml', name: 'English', isCatchallLocale: true },
      { code: 'fr', dir: 'ltr', language: 'fr-FR', file: 'fr-FR.yaml', name: 'Français' },
      { code: 'es', dir: 'ltr', language: 'es-ES', file: 'es-ES.yaml', name: 'Español' },
      { code: 'de', dir: 'ltr', language: 'de-DE', file: 'de-DE.yaml', name: 'Deutsch' },
      { code: 'ar', dir: 'rtl', language: 'ar-SA', file: 'ar-SA.yaml', name: 'العربية' },
      { code: 'ja', dir: 'ltr', language: 'ja-JP', file: 'ja-JP.yaml', name: '日本語' },
    ],
  },

  routeRules: {
    '/': {
      swr: 3600,
    },
    '/demos': {
      swr: 3600,
    },
    '/auth/**': {
      swr: 3600,
    },
    '/documentation': {
      swr: 3600,
    },
    '/documentation/**': {
      swr: 3600,
    },
    '/dashboards/**': {
      swr: 3600,
    },
    '/layouts/**': {
      swr: 3600,
    },
    '/wizard/**': {
      swr: 3600,
    },
  },

  // nuxt build configuration
  nitro: {
    esbuild: {
      options: {
        target: 'esnext',
      },
    },
  },

  vite: {
    define: {
      // Enable / disable Options API support. Disabling this will result in smaller bundles,
      // but may affect compatibility with 3rd party libraries if they rely on Options API.
      __VUE_OPTIONS_API__: false,
    },
    css: {
      // LightningCSS is a rust based CSS minifier that is faster than the default CSS minifier.
      // @see https://vite.dev/guide/features.html#lightning-css
      // @see https://lightningcss.dev/
      transformer: 'lightningcss',
    },
    build: {
      target: 'esnext',
      cssMinify: 'lightningcss',
    },
    // Defining the optimizeDeps.include option prebuilds the dependencies, this avoid
    // some reloads when navigating between pages during development.
    // It's also useful to track them usage.
    optimizeDeps: {
      include: [
        'scule',
        'klona',
        'v-calendar',
        // AddonApexcharts
        'vue3-apexcharts',
        // AddonInputPhone
        'libphonenumber-js/max',
        'country-codes-list',
        // AddonInputPassword
        '@zxcvbn-ts/core',
        '@zxcvbn-ts/language-common',
        '@zxcvbn-ts/language-en',
        '@zxcvbn-ts/language-fr',
        // AddonMapboxLocationPicker
        'ohash',
        'mapbox-gl',
        '@mapbox/mapbox-gl-geocoder',
        // useTailwindColors
        'colorjs.io',
        // form validation
        '@vee-validate/zod',
        'vee-validate',
        'zod',
        // calendar app
        'vue3-smooth-dnd',
        'date-fns',
        'date-fns/locale',
        // profile edit page
        'imask',
      ],
    },
  },
})
