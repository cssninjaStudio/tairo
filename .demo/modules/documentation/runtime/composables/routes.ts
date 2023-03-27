import type { RouteRecordRaw } from 'vue-router'

type DocumentationTree = Record<string, RouteRecordRaw[]>

const categoryOrders = [
  'Uncategorized',
  'Layout Elements',
  'Base UI Elements',
  'Base Forms',
  'Addons',
  // 'Content',
  // 'Interaction',
  // 'Display',
  // 'Forms',
  // 'Addons',
] as const

export async function useDocumentationRoutes() {
  const { data } = await useAsyncData('doc-nav', () => {
    return queryContent('/documentation')
      .only(['_path', 'title', 'description', 'category', 'components', 'icon'])
      .sort({ _path: 1 })
      .find()
  })

  const docRoutesByCategory = computed(() => {
    const byCategory: Record<string, typeof data.value> = {}

    if (!data.value) {
      return byCategory
    }

    for (const page of data.value) {
      const category = page.category ?? 'Uncategorized'
      byCategory[category] ||= []
      byCategory[category]!.push(page)
    }

    return byCategory
  })

  const docRoutes = computed(() => {
    return data.value ?? []
  })

  return {
    categoryOrders,
    docRoutesByCategory,
    docRoutes,
  }
}
