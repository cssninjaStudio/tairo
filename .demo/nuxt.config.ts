import {
  demoRules,
  documentationRules,
  landingRules,
} from './config/routes-rules'

export default defineNuxtConfig({
  devtools: { enabled: true },

  extends: [
    /**
     * App layers: these are the layers that contains specific features
     * - landing: contains landing pages
     * - documentation: contains all /documentation pages
     */
    '../layers/landing',
    import.meta.env.ENABLE_DOCUMENTATION && '../layers/documentation',

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
    '../layers/tairo-layout-topnav',
    '../layers/tairo-layout-iconnav',
    '../layers/tairo',
  ],

  modules: [
    /**
     * Swiper is a nuxt module that allows us to use swiper in nuxt
     * wich is a carousel component used in the demo
     * @see https://github.com/cpreston321/nuxt-swiper
     */
    'nuxt-swiper',
  ],

  css: [
    '~/assets/css/colors.css',
    '@fontsource-variable/fira-code/index.css',
    '@fontsource-variable/inter/index.css',
    '@fontsource-variable/karla/index.css',
  ],

  app: {
    // pageTransition: {
    //   mode: 'out-in',
    //   enterActiveClass: 'transition-opacity duration-200 ease-out',
    //   enterFromClass: 'opacity-0',
    //   enterToClass: 'opacity-100',
    //   leaveActiveClass: 'transition-opacity duration-75 ease-in',
    //   leaveFromClass: 'opacity-100',
    //   leaveToClass: 'opacity-0',
    // },
    // layoutTransition: {
    //   mode: 'out-in',
    //   enterActiveClass: 'transition-opacity duration-200 ease-out',
    //   enterFromClass: 'opacity-0',
    //   enterToClass: 'opacity-100',
    //   leaveActiveClass: 'transition-opacity duration-200 ease-in',
    //   leaveFromClass: 'opacity-100',
    //   leaveToClass: 'opacity-0',
    // },
  },

  features: {
    inlineStyles: false,
  },

  experimental: {
    // Write early hints when using node server.
    writeEarlyHints: true,
    // Render JSON payloads with support for revivifying complex types.
    renderJsonPayloads: true,
    // Render tags in of the head in a more performant way
    headNext: true,
    // Use the new View Transitions API
    viewTransition: true,

    defaults: {
      useAsyncData: {
        // Use shallowRef in asyncData/fetch data
        deep: false,
      },
    },
  },

  typescript: {
    tsConfig: {
      // Here you can customize the generated tsconfig.json file
      vueCompilerOptions: {
        target: 3.4,
      },
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
    ...(import.meta.env.ENABLE_DOCUMENTATION ? documentationRules : {}),
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
      // This enables vue-axe to work (used to check a11y - see .demo/plugins/vue-axe.ts)
      'import.meta.env.ENABLE_A11Y_AXE': import.meta.env.ENABLE_A11Y_AXE,

      // Enable / disable Options API support. Disabling this will result in smaller bundles,
      // but may affect compatibility with 3rd party libraries if they rely on Options API.
      // Splitplane uses Options API, so we need to enable it.
      '__VUE_OPTIONS_API__': true,
    },
    build: {
      target: 'esnext',
    },
    // Defining the optimizeDeps.include option prebuilds the dependencies, this avoid
    // some reloads when navigating between pages during development.
    // It's also useful to track them usage.
    optimizeDeps: {
      include: [
        '@headlessui-float/vue',
        'scule',
        'klona',
        '@vueform/slider',
        'v-calendar',
        // AddonCarouselIcon
        // AddonCarouselTeam
        'vue3-carousel',
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
        'splitpanes',
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
