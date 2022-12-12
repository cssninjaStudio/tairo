import * as tailwindConfig from './tailwind.config.cjs'

export default defineNuxtConfig({
  extends: '..',
  typescript: {
    includeWorkspace: true,
  },
  modules: ['nuxt-component-meta'],
  tailwindcss: {
    config: tailwindConfig,
  },
  // app: {
  //   head: {
  //     link: [
  //       { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
  //       {
  //         rel: 'preconnect',
  //         href: 'https://fonts.gstatic.com',
  //       },
  //       {
  //         rel: 'stylesheet',
  //         href: 'https://fonts.googleapis.com/css2?family=Inter:wght@200..800&family=Karla:wght@200..800&family=Roboto+Flex:wght@200..800&display=swap',
  //       },
  //     ],
  //   },
  // },
  componentMeta: {
    checkerOptions: {
      forceUseTs: true,
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
})
