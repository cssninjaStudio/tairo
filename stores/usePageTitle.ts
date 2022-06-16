import { ref } from 'vue'
import { acceptHMRUpdate, defineStore } from 'pinia'

export const usePageTitle = defineStore('pagetitle', () => {
  const pageTitle = ref('Welcome')

  function setPageTitle(value: string) {
    pageTitle.value = value
  }

  return {
    pageTitle,
    setPageTitle,
  } as const
})

/**
 * Pinia supports Hot Module replacement so you can edit your stores and
 * interact with them directly in your app without reloading the page.
 *
 * @see https://pinia.esm.dev/cookbook/hot-module-replacement.html
 * @see https://vitejs.dev/guide/api-hmr.html
 */
if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(usePageTitle, import.meta.hot))
}
