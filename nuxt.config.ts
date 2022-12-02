import colors from 'tailwindcss/colors.js'

export default defineNuxtConfig({
  extends: '@cssninja/nuxt-ui',
  modules: ['@nuxt/image-edge', '@pinia/nuxt', 'nuxt-component-meta'],
  tailwindcss: {
    config: {
      content: [],
      theme: {
        extend: {
          colors: {
            muted: colors?.slate,
            primary: colors?.purple,
            info: colors?.sky,
            success: colors?.teal,
            warning: colors?.amber,
            danger: colors?.rose,
          },
          fontFamily: {
            sans: ['Roboto Flex', 'sans-serif'],
            heading: ['Inter', 'sans-serif'],
            alt: ['Karla', 'sans-serif'],
          },
        },
      },
    },
  },
  css: [
    '~/assets/css/modules/variables.css',
    '~/assets/css/modules/slider.css',
    '~/assets/css/keyframes.css',
  ],
  app: {
    head: {
      link: [
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        {
          rel: 'preconnect',
          href: 'https://fonts.gstatic.com',
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
      autoprefixer: {},
    },
  },
  vite: {
    logLevel: 'info',
    build: {
      chunkSizeWarningLimit: Infinity,
      assetsInlineLimit: 4096 * 2,
    },
  },
  typescript: {
    shim: false,
  },
  componentMeta: {
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
