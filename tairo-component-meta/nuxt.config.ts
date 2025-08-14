export default defineNuxtConfig({
  compatibilityDate: '2025-08-14',
  modules: ['nuxt-component-meta'],
  extends: ['../layers/tairo'],
  typescript: {
    includeWorkspace: true,
  },
  componentMeta: {
    globalsOnly: false,
    debug: 2,
    exclude: [
      (component: any) => !component.pascalName.startsWith('Tairo'),
    ],
  },
})
