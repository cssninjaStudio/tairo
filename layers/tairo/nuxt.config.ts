import { fileURLToPath } from 'node:url'

export default defineNuxtConfig({
  $meta: {
    name: '@cssninja/tairo',
  },
  modules: [
    '@shuriken-ui/nuxt',
  ],
  alias: {
    '#cssninja/tairo': fileURLToPath(new URL('./assets/tairo.css', import.meta.url)),
  },
})