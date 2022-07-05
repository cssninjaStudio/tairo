export const useDocumentationMenu = createSharedComposable(() => {
  const displayMode = ref<'category' | 'component'>('category')
  const isSearching = ref(false)
  const filter = ref('')

  const reset = () => {
    isSearching.value = false
    filter.value = ''
  }

  return {
    displayMode,
    isSearching,
    filter,
    reset,
  }
})
