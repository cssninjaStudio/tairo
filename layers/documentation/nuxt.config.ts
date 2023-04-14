import { resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
// const WEEK = 60 * 60 * 24 * 7

export default defineNuxtConfig({
  modules: [
    '@nuxt/content',
    'nuxt-component-meta',
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
        // config.content.push(resolve(runtimeDir, 'components/**/*.{vue,js,ts}'))
        // config.content.push(resolve(__dirname, './pages/**/*.{vue,js,ts}'))
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
