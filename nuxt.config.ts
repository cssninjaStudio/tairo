import { createResolver, logger } from '@nuxt/kit'

import { name, version } from './package.json'

const { resolve } = createResolver(import.meta.url)

logger.success(`Using ${name} v${version}`)

const envModules = {
  ui: process?.env?.THEME_DEV_UI_PATH || '@cssninja/nuxt-ui',
}

export default defineNuxtConfig({
  extends: envModules.ui,
  modules: ['nuxt-config-schema', '@nuxt/image-edge'],
  alias: {
    '@': '/<rootDir>',
  },
  css: [
    resolve('./assets/css/modules/variables.css'),
    resolve('./assets/css/modules/slider.css'),
    resolve('./assets/css/modules/popper.css'),
    resolve('./assets/css/modules/apex.css'), // @todo: this should be lazy loaded
    resolve('./assets/css/modules/vcalendar.css'),
    resolve('./assets/css/keyframes.css'),
  ],
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
    define: {
      'process.env': {
        VSCODE_TEXTMATE_DEBUG: false,
      },
    },
  },
})
