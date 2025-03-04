import { fileURLToPath } from 'node:url'

export default defineNuxtConfig({
  $meta: {
    name: '@cssninja/tairo',
  },
  modules: [
    '@shuriken-ui/nuxt',
    '@cssninja/nuxt-toaster',
  ],
  alias: {
    '#cssninja-studio/tairo': fileURLToPath(new URL('./assets/tairo.css', import.meta.url)),
  },
})
