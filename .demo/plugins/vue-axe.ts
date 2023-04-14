/**
 * This plugin loads vue-axe only in dev mode
 * and only if the process.env.ENABLE_A11Y_AXE is set to true.
 * Note that it should be defined in vite.define key in nuxt.config.ts, not in .env file.
 *
 * It also loads the VueAxePopup component only if vue-axe is loaded.
 * This component is used on custom app.vue to display the axe popup.
 *
 * @see https://github.com/vue-a11y/vue-axe-next
 */
export default defineNuxtPlugin(async (nuxtApp) => {
  if (process.client && process.dev) {
    if (process.env.ENABLE_A11Y_AXE) {
      // @ts-expect-error - vue-axe is not typed
      const vueAxe = await import('vue-axe').then((m) => m.default)
      nuxtApp.vueApp.use(vueAxe)

      const VueAxePopup = defineAsyncComponent({
        // @ts-expect-error - vue-axe is not typed
        loader: () => import('vue-axe').then((m) => m.VueAxePopup),
      })
      nuxtApp.vueApp.component('VueAxePopup', VueAxePopup)
      return
    }
  }

  // mock empty component to avoid errors
  const VueAxePopup = defineComponent({
    // @ts-ignore
    render: (_, { slots }) => (slots ? slots.default() : null),
  })
  nuxtApp.vueApp.component('VueAxePopup', VueAxePopup)
})
