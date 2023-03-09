import { resolve } from 'pathe'

export default defineNuxtConfig({
  extends: '..',
  typescript: {
    includeWorkspace: true,
    strict: true,
  },
  modules: [
    // Swiper is a nuxt module that allows us to use swiper in nuxt
    // wich is a carousel component used in the demo
    'nuxt-swiper',

    // Component meta allow us to generate the API docs from the source code
    // So we can keep the docs in sync with the code
    'nuxt-component-meta',
  ],
  vite: {
    // This is required for shiki to work (used to render markdown code blocks)
    define: {
      'process.env.VSCODE_TEXTMATE_DEBUG': false,
    },
  },
  runtimeConfig: {
    public: {
      // We use this to be able to create a link to open vscode from the browser
      // (browse the demo components pages and click on the "Open in VSCode" button)
      dev: process.dev
        ? {}
        : {
            prefix: `vscode-remote/wsl+Ubuntu`,
            src: resolve(__dirname),
          },
    },
  },
  // Component meta allow us to generate the API docs from the source code
  // So we can keep the docs in sync with the code
  componentMeta: {
    exclude: ['nuxt/dist', '@nuxt/ui-templates/dist', 'tairo/.demo/components'],
    debug: 2,
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
