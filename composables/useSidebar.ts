import type { RouteLocationRaw } from 'vue-router'

import type { TairoSidebarConfig } from '../nuxt.schema'

export interface SidebarItem {
  name: string
  icon: {
    name: string
    class?: string
  }
  component?: string
  componentHeader?: string | false
  to?: RouteLocationRaw
  click?: () => void | Promise<void>
  activePath?: string
  /**
   * @default 'start'
   */
  position?: 'start' | 'end'
}

/**
 * Composable to manage navigation of the sidebar layout
 *
 * You can define sidebar items in your app.config.ts
 *
 * ```ts
 * export default defineAppConfig({
 *   tairo: {
 *     sidebars: [
 *       {
 *         name: 'Dashboards',
 *         icon: { name: 'ph:sidebar-duotone', class: 'w-5 h-5' },
 *
 *         // You can define an active path to highlight the item
 *         activePath: '/dashboards',
 *
 *         // You can chose to display a subsidebar by defining a component name
 *         // It should be registered in the app as a global component
 *         component: 'SidebarMenuDashboards',
 *         componentHeader: 'SidebarMenuHeader',
 *
 *         // Or you can define a route to navigate to*
 *         to: '/dashboards',
 *
 *         // Or you can define a click handler (eg. to open a panel)
 *         click: () => {
 *           const { open } = usePanels()
 *           open('panel-name')
 *         },
 *       },
 *     ],
 *   },
 * })
 * ```
 */
export const useSidebar = () => {
  const route = useRoute()
  const app = useAppConfig()

  const sidebars = computed(
    () =>
      (app.tairo.sidebars as TairoSidebarConfig[]).map((sidebar) => ({
        ...sidebar,
        position: sidebar.position ?? 'start',
        icon:
          typeof sidebar.icon === 'string'
            ? { name: sidebar.icon, class: 'w-5 h-5' }
            : sidebar.icon,
      })) ?? [],
  )

  const isOpen = useState('sidebar-open', () => false)
  const currentName = useState('sidebar-name', () => '')

  const current = computed(() => {
    if (!currentName.value) {
      return undefined
    }
    return sidebars.value?.find(({ name }) => name === currentName.value)
  })

  function toggle() {
    isOpen.value = !isOpen.value
  }

  watch(
    () => route.path,
    () => {
      const item = sidebars.value?.find(
        ({ activePath }) => activePath && route.fullPath.startsWith(activePath),
      )
      currentName.value = item?.name || ''
    },
    { immediate: true },
  )

  watchEffect(() => {
    if (currentName.value) {
      isOpen.value = true
    } else {
      isOpen.value = false
    }
  })

  return {
    sidebars,
    current,
    currentName,
    isOpen,
    toggle,
  }
}
