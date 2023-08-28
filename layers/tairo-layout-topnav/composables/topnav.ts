import type { RouteLocationRaw } from 'vue-router'

export interface TairoTopnavResolvedConfig {
  name: string
  divider?: boolean
  icon: {
    name: string
    class?: string
  }
  children?: any[]
  component?: {
    name: string
    props?: any
  }
  to?: RouteLocationRaw
  click?: () => void | Promise<void>
  activePath?: string
}

/**
 * Composable to manage navigation of the sidebar layout
 *
 * You can define sidebar items in your app.config.ts
 *
 * ```ts
 * export default defineAppConfig({
 *   tairo: {
 *     topnav: {
 *       items: {
 *           name: 'Dashboards',
 *
 *           // You can define an active path to highlight the item
 *           activePath: '/dashboards',
 *
 *           // You can define an icon to display in the sidebar
 *           icon: { name: 'ph:sidebar-duotone', class: 'w-5 h-5' },
 *
 *           // Or use a component
 *           // It should be registered in the app as a global component
 *           component: { name: 'BaseThemeToggle', props: {} },
 *
 *           // Or you can define a route to navigate to
 *           to: '/dashboards',
 *
 *           // Or you can define a click handler (eg. to open a panel)
 *           click: () => {
 *             const { open } = usePanels()
 *             open('panel-name')
 *           },
 *         },
 *       ],
 *     },
 *   },
 * })
 * ```
 */
export function useTopnav() {
  const route = useRoute()
  const app = useAppConfig()

  const menuItems = computed(() => {
    if (
      app.tairo.topnav?.navigation?.enabled === false ||
      app.tairo.topnav?.navigation?.items?.length === 0
    ) {
      return []
    }
    return app.tairo.topnav?.navigation?.items?.map(
      (navigation) =>
        <TairoTopnavResolvedConfig>{
          ...navigation,
        },
    )
  })

  const isMobileOpen = useState('collapse-open', () => false)

  const activeMenuItem = computed(() => {
    return menuItems.value?.find((item) => {
      if (item.activePath) {
        return route.path.startsWith(item.activePath)
      }
      if (item.to) {
        return route.path.startsWith(item.to.toString())
      }
      return false
    })
  })
  const selectedMenuItem = useState(
    'topnav-selected-menu-item',
    () => activeMenuItem.value,
  )
  watch(activeMenuItem, (item) => {
    selectedMenuItem.value = item
  })

  if (process.client) {
    const { lg, xl } = useTailwindBreakpoints()
    /*watch(xl, (isXl) => {
      if (!isXl) {
        isOpen.value = false
      }
    })*/
  }

  return {
    menuItems,
    activeMenuItem,
    selectedMenuItem,
    isMobileOpen,
  }
}
