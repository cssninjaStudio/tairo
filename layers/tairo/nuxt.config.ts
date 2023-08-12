import exposeColors from './tailwind/plugin-expose-colors'

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
  modules: ['unplugin-fonts/nuxt', '@cssninja/nuxt-toaster'],
  tailwindcss: {
    config: {
      content: [],
      plugins: [exposeColors],
    },
  },
  app: {
    pageTransition: {
      enterActiveClass: 'transition-opacity duration-200 ease-out',
      enterFromClass: 'opacity-0',
      enterToClass: 'opacity-100',
      leaveActiveClass: 'transition-opacity duration-75 ease-in',
      leaveFromClass: 'opacity-100',
      leaveToClass: 'opacity-0',
    },
  },
})
