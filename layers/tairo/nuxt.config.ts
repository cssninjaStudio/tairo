import { addComponent, createResolver } from '@nuxt/kit'

export default defineNuxtConfig({
  $meta: {
    name: '@cssninja/tairo',
  },
  modules: [
    '@shuriken-ui/nuxt',
    (_, nuxt) => {
      const resolver = createResolver(import.meta.url)

      // Override the NuxtWelcome component with TairoWelcome
      if (nuxt.options.dev) {
        addComponent({
          name: 'NuxtWelcome',
          priority: 11,
          filePath: resolver.resolve('./components/TairoWelcome.vue'),
        })
      }
    },
  ],
})
