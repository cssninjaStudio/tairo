import type { RouteLocationRaw } from 'vue-router'

export interface TairoSidebarResolvedConfig {
  name: string
  icon: {
    name: string
    class?: string
  }
  component?: {
    name: string
    props?: any
  }
  subsidebar?: {
    name: string
    props?: any
  }
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
 *     sidebar: {
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
 *           // You can chose to display a subsidebar by defining a component name
 *           // It should be registered in the app as a global component
 *           subsidebar: { name: 'SidebarMenuDashboards', props: {} },
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
export function useSidebar() {
  const route = useRoute()
  const app = useAppConfig()

  const sidebars = computed(() => {
    if (
      (app.tairo.sidebar as any)?.enabled === false ||
      app.tairo.sidebar?.items?.length === 0
    ) {
      return []
    }
    return app.tairo.sidebar?.items?.map(
      (sidebar) =>
        <TairoSidebarResolvedConfig>{
          ...sidebar,
          position: sidebar.position ?? 'start',
        },
    )
  })

  const isOpen = useState('sidebar-open', () => false)
  const currentName = useState('sidebar-name', () => {
    const item = sidebars.value?.find(
      ({ activePath }) => activePath && route.fullPath.startsWith(activePath),
    )
    return item?.name || ''
  })

  const hasSubsidebar = computed(() => {
    return sidebars.value?.some((sidebar) => sidebar.subsidebar?.name)
  })

  const current = computed(() => {
    if (!currentName.value) {
      return undefined
    }
    return sidebars.value?.find(({ name }) => name === currentName.value)
  })

  function toggle() {
    // If no sidebar item is selected, open the first one
    if (!currentName.value && !isOpen.value) {
      if (!sidebars.value?.[0]?.name) {
        // No sidebar items defined
        return
      }

      // Select the first sidebar item by default
      currentName.value = sidebars.value[0].name
    }

    isOpen.value = !isOpen.value
  }

  watchEffect(() => {
    if (currentName.value) {
      isOpen.value = true
    } else {
      isOpen.value = false
    }
  })

  if (process.client) {
    const { xl } = useTailwindBreakpoints()
    watch(xl, (isXl) => {
      if (!isXl) {
        isOpen.value = false
      }
    })
  }

  return {
    sidebars,
    hasSubsidebar,
    current,
    currentName,
    isOpen,
    toggle,
  }
}
