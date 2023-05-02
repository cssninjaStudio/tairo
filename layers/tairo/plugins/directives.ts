export default defineNuxtPlugin(async (nuxtApp) => {
  /**
   * Register a global v-focus directive.
   *
   * This directive is used to focus an element when it is mounted.
   */
  nuxtApp.vueApp.directive('focus', {
    mounted(el: HTMLInputElement) {
      el.focus()
    },
  })
})
