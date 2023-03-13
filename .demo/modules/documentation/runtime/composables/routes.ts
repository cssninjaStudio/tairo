import type { RouteRecordRaw } from 'vue-router'

import { useDocumentationMenu } from './menu'

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

export function useDocumentationRoutes() {
  const router = useRouter()
  const { displayMode, isSearching, filter } = useDocumentationMenu()

  // check all routes that start with /components
  const componentHubRoute = router.resolve('/documentation')
  const routesByCategory = computed(() => {
    const childrens =
      componentHubRoute.matched[0]?.children?.reduce<DocumentationTree>(
        reduceDocumentationTree,
        {},
      )

    Object.keys(childrens).forEach((category) => {
      childrens[category].sort((a, b) => {
        const aName = a.path.toLowerCase()
        const bName = b.path.toLowerCase()

        if (aName < bName) {
          return -1
        }
        if (aName > bName) {
          return 1
        }
        return 0
      })
    })

    return childrens
  })

  const routesFlat = computed(() => {
    return Object.values(routesByCategory.value).reduce(
      (acc, routes) => [...acc, ...routes],
      [],
    )
  })

  // recusively reduce the tree to a flat array of routes
  function reduceDocumentationTree(
    acc: DocumentationTree,
    route: RouteRecordRaw,
  ) {
    if (route.children) {
      route.children.forEach((child) => {
        reduceDocumentationTree(acc, child)
      })
    }

    // skip routes that are explicitly disabled
    if (route.meta?.documentation === false) {
      return acc
    }

    if (!filter.value || !isSearching.value) {
      const category = route.meta?.documentation?.category ?? 'Uncategorized'
      acc[category] = acc[category] ?? []
      acc[category].push(route)

      return acc
    }

    if (displayMode.value === 'category') {
      if (
        route.meta?.title?.toLowerCase().includes(filter.value.toLowerCase())
      ) {
        const category = route.meta?.documentation?.category ?? 'Uncategorized'
        acc[category] = acc[category] ?? []
        acc[category].push(route)
      }
    }

    if (
      route.meta?.documentation?.components?.some((component) =>
        component?.toLowerCase().includes(filter.value.toLowerCase()),
      )
    ) {
      const category = route.meta?.documentation?.category ?? 'Uncategorized'
      acc[category] = acc[category] ?? []
      acc[category].push(route)
    }
    return acc
  }

  return {
    categoryOrders,
    routesByCategory,
    routesFlat,
  }
}
