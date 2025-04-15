export default defineNuxtConfig({
  compatibilityDate: '2025-03-05',
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
