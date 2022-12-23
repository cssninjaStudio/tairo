import * as tailwindConfig from './tailwind.config.cjs'
import { resolve } from 'pathe'

export default defineNuxtConfig({
  extends: '..',
  typescript: {
    includeWorkspace: true,
  },
  modules: ['nuxt-component-meta'],
  tailwindcss: {
    config: tailwindConfig,
  },
  runtimeConfig: {
    public: {
      dev: process.dev
        ? {}
        : {
            prefix: `vscode-remote/wsl+Ubuntu`,
            src: resolve(__dirname),
          },
    },
  },
  componentMeta: {
    exclude: ['nuxt/dist', '@nuxt/ui-templates/dist', 'tairo/.demo/components'],
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
