import * as tailwindConfig from './tailwind.config.cjs'
import { resolve } from 'pathe'

export default defineNuxtConfig({
  extends: '..',
  typescript: {
    includeWorkspace: true,
    // shims: false,
    strict: true,
  },
  modules: [
    'nuxt-swiper',
    //
    //'@nuxt/devtools',
    'nuxt-component-meta',
  ],
  app: {
    // keepalive: true,
    layoutTransition: {
      enterActiveClass: 'transition-opacity duration-400 ease-out',
      enterFromClass: 'opacity-0',
      enterToClass: 'opacity-100',
      leaveActiveClass: 'transition-opacity duration-200 ease-in',
      leaveFromClass: 'opacity-100',
      leaveToClass: 'opacity-0',
      // mode: 'out-in',
    },
    pageTransition: {
      enterActiveClass: 'transition-opacity duration-300 ease-out',
      enterFromClass: 'opacity-0',
      enterToClass: 'opacity-100',
      leaveActiveClass: 'transition-opacity duration-200 ease-in',
      leaveFromClass: 'opacity-100',
      leaveToClass: 'opacity-0',
      // mode: 'out-in',
    },
  },
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
    // componentDirs: [
    //   '@cssninja/nuxt-ui/components'
    // ],
    exclude: ['nuxt/dist', '@nuxt/ui-templates/dist', 'tairo/.demo/components'],
    debug: 2,
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
