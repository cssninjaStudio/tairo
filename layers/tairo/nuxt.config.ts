import { createResolver } from '@nuxt/kit'

const { resolve } = createResolver(import.meta.url)

export default defineNuxtConfig({
  extends: [
    /**
     * @shuriken-ui/nuxt is a nuxt layer that register a set of basic components (all prefixed with Base*)
     * plus a set of modules:
     *  - @nuxtjs/tailwindcss
     *  - @nuxtjs/color-mode
     *  - nuxt-icon
     *
     * You can clone the repository and make DEV_SHURIKEN_UI_PATH point to the cloned folder
     * to allow you to make changes to the UI and see them in real time.
     *
     * You can also create any component with same name to override the default one.
     *
     * @see https://github.com/shuriken-ui/nuxt
     */
    process.env?.DEV_SHURIKEN_UI_PATH || '@shuriken-ui/nuxt',
  ],
  modules: [
    'unplugin-fonts/nuxt',
    '@nuxt/image-edge',
    '@cssninja/nuxt-toaster',
  ],
  app: {
    layoutTransition: {
      enterActiveClass: 'transition-opacity duration-400 ease-out',
      enterFromClass: 'opacity-0',
      enterToClass: 'opacity-100',
      leaveActiveClass: 'transition-opacity duration-200 ease-in',
      leaveFromClass: 'opacity-100',
      leaveToClass: 'opacity-0',
    },
    pageTransition: {
      enterActiveClass: 'transition-opacity duration-300 ease-out',
      enterFromClass: 'opacity-0',
      enterToClass: 'opacity-100',
      leaveActiveClass: 'transition-opacity duration-200 ease-in',
      leaveFromClass: 'opacity-100',
      leaveToClass: 'opacity-0',
    },
  },
})
