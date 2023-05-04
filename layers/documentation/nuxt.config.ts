import { resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

export default defineNuxtConfig({
  modules: [
    '@nuxt/content',
    'nuxt-component-meta',
    /**
     * @nuxthq/studio is a nuxt layer that register server routes to allow you to
     * edit the documentation in real time via https//nuxt.studio
     */
    process.env.ENABLE_DOCUMENTATION_STUDIO === 'true' && '@nuxthq/studio',
  ],
  alias: {
    '#examples': fileURLToPath(new URL('./examples', import.meta.url)),
  },
  componentMeta: {
    globalsOnly: false,
    exclude: [
      'nuxt/dist',
      '@nuxt/ui-templates/dist',
      (component: any) => {
        const hasTairoPrefix = component?.pascalName?.startsWith('Tairo')
        const hasBasePrefix = component?.pascalName?.startsWith('Base')
        const hasAddonPrefix = component?.pascalName?.startsWith('Addon')
        const isBlacklisted = ['TairoWelcome'].includes(component?.pascalName)

        const isExcluded = !(hasTairoPrefix || hasBasePrefix || hasAddonPrefix)

        return isBlacklisted || isExcluded
      },
    ],
    // debug: 2,
    checkerOptions: {
      forceUseTs: true,
      printer: { newLine: 1 },
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
  hooks: {
    // @ts-ignore - hook registered by nuxt-tailwind via @shuriken-ui/nuxt
    'tailwindcss:config'(config) {
      if (Array.isArray(config.content)) {
        // This add examples/ folder to the tailwind content list
        // making it possible to use tailwind classes inside the examples
        config.content.push(resolve(__dirname, './examples/**/*.{vue,js,ts}'))
      }
    },
  },
  nitro: {
    prerender: {
      routes: ['/documentation'],
    },
  },
  content: {
    sources: {
      content: {
        driver: 'fs',
        prefix: '/documentation', // All contents inside this source will be prefixed with `/documentation`
        base: resolve(__dirname, 'content/documentation'),
      },
    },
  },
})
