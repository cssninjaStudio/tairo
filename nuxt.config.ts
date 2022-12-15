import { createResolver, logger } from '@nuxt/kit'

import { name, version } from './package.json'

const { resolve } = createResolver(import.meta.url)

logger.success(`Using ${name} v${version}`)

export default defineNuxtConfig({
  extends: '@cssninja/nuxt-ui',
  modules: ['@nuxt/image-edge', '@pinia/nuxt', 'nuxt-component-meta'],
  css: [
    resolve('./assets/css/modules/variables.css'),
    resolve('./assets/css/modules/slider.css'),
    resolve('./assets/css/modules/apex.css'),
    resolve('./assets/css/keyframes.css'),
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
})
