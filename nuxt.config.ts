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
        'vue-scrollto',
        '@vueform/slider',
      ],
    },
  },
})
