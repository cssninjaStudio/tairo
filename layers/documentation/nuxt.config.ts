import { fileURLToPath } from 'node:url'

export default defineNuxtConfig({
  modules: ['@nuxt/content', 'nuxt-component-meta'],
  alias: {
    '#examples': fileURLToPath(new URL('./examples', import.meta.url)),
  },
  componentMeta: {
    metaSources: ['@shuriken-ui/nuxt/component-meta'],
    exclude: [
      (component: any) => {
        const hasTairoPrefix = component?.pascalName?.startsWith('Tairo')
        const hasAddonPrefix = component?.pascalName?.startsWith('Addon')
        const isBlacklisted = ['TairoWelcome'].includes(component?.pascalName)

        const isExcluded = !(hasTairoPrefix || hasAddonPrefix)

        return isBlacklisted || isExcluded
      },
    ],
  },
  hooks: {
    // @ts-ignore - hook registered by nuxt-tailwind via @shuriken-ui/nuxt
    'tailwindcss:config'(config) {
      if (Array.isArray(config.content)) {
        // This add examples/ folder to the tailwind content list
        // making it possible to use tailwind classes inside the examples
        config.content.push(
          fileURLToPath(new URL('./examples', import.meta.url))
          + '/**/*.{vue,js,ts}',
        )
      }
    },
  },
  content: {
    sources: {
      content: {
        driver: 'fs',
        prefix: '/documentation', // All contents inside this source will be prefixed with `/documentation`
        base: fileURLToPath(
          new URL('./content/documentation', import.meta.url),
        ),
      },
    },
  },
})
