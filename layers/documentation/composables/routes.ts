export async function useDocumentationRoutes() {
  const { data } = await useAsyncData('doc-nav', () => {
    return queryContent('/documentation')
      .only(['_path', 'title', 'description', 'components', 'icon'])
      .find()
  })

  const docRoutes = computed(() => {
    return data.value ?? []
  })

  return {
    docRoutes,
  }
}
