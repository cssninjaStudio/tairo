import { resolve } from 'path'
import { fileURLToPath } from 'url'
import {
  defineNuxtModule,
  addImportsDir,
  addComponentsDir,
  extendPages,
  installModule,
} from '@nuxt/kit'
import { routes } from './routes'

export interface ModuleOptions {}

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name: 'tairo-demo-documentation',
  },
  defaults: {},
  async setup(options, nuxt) {
    const runtimeDir = fileURLToPath(new URL('./runtime', import.meta.url))
    nuxt.options.build.transpile.push(runtimeDir)

    nuxt.hook('app:resolve', (app) => {
      app.configs.push(resolve(runtimeDir, './app.config.ts'))
    })

    extendPages((pages) => {
      pages.push(routes)
    })

    // addPlugin(resolve(runtimeDir, 'plugin'))
    // addImportsDir(resolve(runtimeDir, 'composables'))
    // addImportsDir(resolve(runtimeDir, 'utils'))

    addComponentsDir({
      path: resolve(runtimeDir, 'components'),
      prefix: '',
      global: true,
    })

    nuxt.hook('tailwindcss:config', (config) => {
      if (Array.isArray(config.content)) {
        config.content.push(resolve(runtimeDir, 'components/**/*.{vue,js,ts}'))
        config.content.push(resolve(__dirname, './pages/**/*.{vue,js,ts}'))
        config.content.push(resolve(__dirname, './examples/**/*.{vue,js,ts}'))
      }
    })

    await installModule('nuxt-component-meta', {
      exclude: [
        'nuxt/dist',
        '@nuxt/ui-templates/dist',
        (component: any) => {
          const hasTairoPrefix = component?.pascalName?.startsWith('Tairo')
          const hasBasePrefix = component?.pascalName?.startsWith('Base')
          const hasAddonPrefix = component?.pascalName?.startsWith('Addon')
          return !(hasTairoPrefix || hasBasePrefix || hasAddonPrefix)
        },
      ],
      debug: 2,
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
    })
  },
})
