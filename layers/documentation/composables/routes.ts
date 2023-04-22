export async function useDocumentationRoutes() {
  const { data } = await useAsyncData('doc-nav', () => {
    return queryContent('/documentation')
      .only(['_path', 'title', 'description', 'components', 'icon'])
      .find()
  })

  const docRoutesByCategory = computed(() => {
    const byCategory: Record<string, typeof data.value> = {}

    if (!data.value) {
      return byCategory
    }

    for (const page of data.value) {
      const category = page?.category ?? 'Uncategorized'
      byCategory[category] ||= []
      byCategory[category]?.push(page)
    }

    return byCategory
  })

  const docRoutes = computed(() => {
    return data.value ?? []
  })

  return {
    docRoutes,
  }
}
