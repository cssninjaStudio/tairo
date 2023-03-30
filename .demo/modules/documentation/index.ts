import { logger } from '@nuxt/kit'

import {
  addComponentsDir,
  defineNuxtModule,
  extendPages,
  installModule,
} from '@nuxt/kit'
import { resolve } from 'path'
import { fileURLToPath } from 'url'

export interface ModuleOptions {}

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name: 'tairo-demo-documentation',
  },
  defaults: {},
  async setup(options, nuxt) {
    if (process.env.ENABLE_DOCUMENTATION !== 'true') {
      logger.info(
        'Tairo Documentation module is disabled, to enable it set ENABLE_DOCUMENTATION env to true',
      )
      return
    } else {
      logger.info(
        'Tairo Documentation module is enabled, this might increase startup time...',
      )
    }

    const runtimeDir = fileURLToPath(new URL('./runtime', import.meta.url))
    nuxt.options.build.transpile.push(runtimeDir)

    nuxt.options.alias ||= {}
    nuxt.options.alias['#examples'] = fileURLToPath(
      new URL('./examples', import.meta.url),
    )

    nuxt.hook('app:resolve', (app) => {
      app.configs.push(resolve(runtimeDir, './app.config.ts'))
    })

    extendPages((pages) => {
      pages.push({
        path: '/documentation/:slug(.*)*',
        file: resolve(__dirname, './runtime/pages/[...slug].vue'),
        alias: [],
        meta: {},
      })
      pages.push({
        path: '/documentation',
        file: resolve(__dirname, './runtime/pages/index.vue'),
        alias: [],
        meta: {
          title: 'Documentation Hub',
        },
      })
    })

    addComponentsDir({
      path: resolve(runtimeDir, 'components/layout'),
      prefix: '',
      global: true,
    })
    addComponentsDir({
      path: resolve(runtimeDir, 'components/content'),
      prefix: '',
      global: true,
    })

    // @ts-ignore - hook registered by nuxt-tailwind via @cssninja/nuxt-ui
    nuxt.hook('tailwindcss:config', (config) => {
      if (Array.isArray(config.content)) {
        config.content.push(resolve(runtimeDir, 'components/**/*.{vue,js,ts}'))
        config.content.push(resolve(__dirname, './pages/**/*.{vue,js,ts}'))
        config.content.push(resolve(__dirname, './examples/**/*.{vue,js,ts}'))
      }
    })

    /**
     * Nuxt-Component-Meta is used to generate the documentation for components
     * It will generate meta data for each component and register useComponentMeta composable
     */
    await installModule(
      '@nuxt/content',
      {
        sources: {
          // Additional sources
          docs: {
            driver: 'fs',
            prefix: '/documentation', // All contents inside this source will be prefixed with `/documentation`
            base: resolve(__dirname, 'content'),
          },
        },
      },
      nuxt,
    )

    /**
     * Enable Nuxt Studio if ENABLE_STUDIO env is set to true
     * @see https://nuxt.studio/
     */
    if (process.env.ENABLE_STUDIO === 'true') {
      logger.info('Nuxt Studio module is enabled')
      await installModule('@nuxthq/studio', {}, nuxt)
    }

    /**
     * Nuxt-Component-Meta is used to generate the documentation for components
     * It will generate meta data for each component and register useComponentMeta composable
     */
    await installModule(
      'nuxt-component-meta',
      {
        exclude: [
          'nuxt/dist',
          '@nuxt/ui-templates/dist',
          (component: any) => {
            const hasTairoPrefix = component?.pascalName?.startsWith('Tairo')
            const hasBasePrefix = component?.pascalName?.startsWith('Base')
            const hasAddonPrefix = component?.pascalName?.startsWith('Addon')
            const isBlacklisted = ['TairoWelcome'].includes(
              component?.pascalName,
            )

            const isExcluded = !(
              hasTairoPrefix ||
              hasBasePrefix ||
              hasAddonPrefix
            )

            return isBlacklisted || isExcluded
          },
        ],
        // debug: 2,
        checkerOptions: {
          // forceUseTs: true,
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
      nuxt,
    )
  },
})
