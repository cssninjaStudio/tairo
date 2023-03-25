import { createResolver } from '@nuxt/kit'

const { resolve } = createResolver(import.meta.url)

export default defineNuxtConfig({
  extends: [
    /**
     * @cssninja/nuxt-ui is a nuxt layer that register a set of basic components (all prefixed with Base*)
     * plus a set of modules:
     *  - @nuxtjs/tailwindcss
     *  - @nuxtjs/color-mode
     *  - @nuxtjs/color-mode
     *  - nuxt-icon
     *
     * You can clone the repository and make THEME_DEV_UI_PATH point to the cloned folder
     * to allow you to make changes to the UI and see them in real time.
     *
     * You can also create any component with same name to override the default one.
     *
     * @see https://github.com/cssninjaStudio/nuxt-ui
     * @see https://nuxt.com/docs/getting-started/layers
     */
    process.env?.THEME_DEV_UI_PATH || '@cssninja/nuxt-ui',

    /**
     * This is an additional layer that adds SEO features.
     *
     * Can be used either to prevent indexing,
     * or to add custom meta tags to improve referencing.
     * @see https://github.com/harlan-zw/nuxt-seo-kit
     */
    'nuxt-seo-kit',
  ],
  modules: ['@nuxt/image-edge', resolve('./modules/purge-comments')],
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
