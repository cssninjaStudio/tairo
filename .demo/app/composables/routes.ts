export async function useDocumentationRoutes() {
  const { data } = await useAsyncData('doc-nav', () => {
    return queryCollection('docs')
      .select('path', 'title', 'description', 'components', 'icon')
      .all()
  })

  const docRoutes = computed(() => {
    return data.value ?? []
  })

  return {
    docRoutes,
  }
}
