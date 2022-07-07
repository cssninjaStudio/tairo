import { defineNuxtConfig } from 'nuxt'

export default defineNuxtConfig({
  modules: [
    '@vueuse/nuxt',
    '@pinia/nuxt',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/color-mode',
  ],
  colorMode: {
    classSuffix: '',
  },
  css: [
    '~/assets/css/tooltips.css',
    '~/assets/css/slimscroll.css',
    '~/assets/css/keyframes.css',
  ],
  app: {
    head: {
      link: [
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        {
          rel: 'preconnect',
          href: 'https://fonts.gstatic.com',
          crossorigin: true,
        },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Inter:wght@200..800&family=Karla:wght@200..800&family=Roboto+Flex:wght@200..800&display=swap',
        },
      ],
    },
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  vueuse: {
    ssrHandlers: true,
  },
  typescript: {
    shim: false,
    strict: true,
  },
  vite: {
    logLevel: 'info',
    build: {
      chunkSizeWarningLimit: Infinity,
      assetsInlineLimit: 4096 * 2,
    },
    optimizeDeps: {
      include: [
        '@iconify/vue/dist/offline',
        '@iconify/vue',
        '@headlessui/vue',
        'vue',
        'pinia',
        'ufo',
        'vue3-carousel',
        'vue-prism-component',
        'prismjs',
        '@vueform/slider',
      ],
    },
  },
})
