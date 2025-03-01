import { fileURLToPath } from 'node:url'
import {
  demoRules,
  documentationRules,
  landingRules,
} from './config/routes-rules'

export default defineNuxtConfig({
  compatibilityDate: '2024-11-26',
  future: {
    compatibilityVersion: 4,
  },
  devtools: { enabled: true },

  extends: [
    /**
     * App layers: these are the layers that contains specific features
     * - landing: contains landing pages
     * - documentation: contains all /documentation pages
     */
    '../layers/landing',

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
    '../layers/tairo-layout-sidebar',
    '../layers/tairo-layout-collapse',
    '../layers/tairo-layout-sidenav',
    '../layers/tairo-layout-topnav',
    '../layers/tairo',
  ],

  modules: [
    '@nuxt/content',
    'nuxt-component-meta',
  ],
  alias: {
    '#examples': fileURLToPath(new URL('./examples', import.meta.url)),
  },
  content: {
    build: {
      markdown: {
        toc: { depth: 3, searchDepth: 3 },
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
        const hasTairoPrefix = component?.pascalName?.startsWith('Tairo')
        const hasAddonPrefix = component?.pascalName?.startsWith('Addon')
        const isBlacklisted = ['TairoWelcome'].includes(component?.pascalName)

        const isExcluded = !(hasTairoPrefix || hasAddonPrefix)

        return isBlacklisted || isExcluded
      },
    ],
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

  experimental: {
    // Use the new View Transitions API
    viewTransition: true,
  },

  typescript: {
    tsConfig: {
      // Here you can customize the generated tsconfig.json file
      // vueCompilerOptions: {
      //   target: 3.4,
      // },
    },
  },

  // nuxt behavior configuration
  runtimeConfig: {
    public: {
      // mapbox config
      mapboxToken: '', // set it via NUXT_PUBLIC_MAPBOX_TOKEN env
      siteUrl: '', // set it via NUXT_PUBLIC_SITE_URL
    },
  },

  routeRules: {
    ...demoRules,
    ...landingRules,
    ...documentationRules,
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
      // Splitplane uses Options API, so we need to enable it.
      __VUE_OPTIONS_API__: true,
    },
    build: {
      target: 'esnext',
    },
    // Defining the optimizeDeps.include option prebuilds the dependencies, this avoid
    // some reloads when navigating between pages during development.
    // It's also useful to track them usage.
    optimizeDeps: {
      include: [
        '@headlessui/vue',
        '@headlessui-float/vue',
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
        // AddonMarkdownRemark
        'rehype-external-links',
        'rehype-raw',
        'rehype-sanitize',
        'rehype-stringify',
        '@shikijs/rehype',
        'remark-gfm',
        'remark-parse',
        'remark-rehype',
        'unified',
        // useMultiStepForm
        'vue3-smooth-dnd',
        'mapbox-gl',
        '@mapbox/mapbox-gl-geocoder/dist/mapbox-gl-geocoder.min.js',
        // DocComponentMeta
        // useDocumentationMeta
        // 'scule',
        // form validation
        '@vee-validate/zod',
        'vee-validate',
        'zod',
        // calendar app
        'date-fns',
        'date-fns/locale',
        // profile edit page
        'imask',
      ],
    },
  },
})
