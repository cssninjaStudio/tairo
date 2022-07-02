import presetIcons from '@unocss/preset-icons'
import presetUno from '@unocss/preset-uno'
import { colors } from '@unocss/preset-mini/colors'
import presetTypography from '@unocss/preset-typography'
import presetWebFonts from '@unocss/preset-web-fonts'
import { defineNuxtConfig } from 'nuxt'

export default defineNuxtConfig({
  modules: [
    '@vueuse/nuxt',
    '@pinia/nuxt',
    '@unocss/nuxt',
    '@nuxtjs/color-mode',
  ],
  colorMode: {
    classSuffix: '',
  },
  typescript: {
    shim: false,
    strict: true,
  },
  build: {
    // transpile: [''],
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  app: {
    head: {
      link: [{ rel: 'stylesheet', href: '/assets/css/tailwind.css' }],
    },
  },
  vueuse: {
    ssrHandlers: true,
  },
  unocss: {
    preflight: true,
    theme: {
      screens: {
        xs: { max: '639px' },
        sm: '640px',
        md: '768px',
        lg: '1025px',
        xl: '1280px',
        xxl: '1536px',
        ptablet: {
          raw: '(min-width: 768px) and (max-width: 1024px) and (orientation: portrait)',
        },
        ltablet: {
          raw: '(min-width: 768px) and (max-width: 1024px) and (orientation: landscape)',
        },
      },
      colors: {
        primary: colors?.violet,
        info: colors?.sky,
        success: colors?.teal,
        warning: colors?.amber,
        danger: colors?.rose,
      },
      fontFamily: {
        main: ['inter', 'sans-serif'],
        sub: ['karla', 'sans-serif'],
        text: ['Roboto', 'sans-serif'],
      },
      plugins: [],
    },
    // safelist: ['w-24', 'h-24'],
    presets: [
      presetUno(),
      presetIcons(),
      presetTypography(),
      presetWebFonts({
        provider: 'google',
        fonts: {
          // these will extend the default theme
          text: {
            name: 'Roboto',
            weights: [400, 500, 600],
          },
          // custom ones
          main: {
            name: 'Inter',
            weights: [300, 400, 600, 700, 800, 900],
          },
          sub: {
            name: 'Karla',
            weights: [300, 400, 600, 700],
          },
        },
      }),
    ],
  },
  vite: {
    logLevel: 'info',
    build: {
      chunkSizeWarningLimit: Infinity,
      assetsInlineLimit: 4096 * 2,
    },
    optimizeDeps: {
      include: [
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
