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
  const app = useAppConfig()
  const route = useRoute()

  const sidebars = computed(() => {
    if (
      app.tairo.sidebar?.navigation?.enabled === false ||
      app.tairo.sidebar?.navigation?.items?.length === 0
    ) {
      return []
    }
    return app.tairo.sidebar?.navigation?.items
  })

  const currentName = useState('sidebar-name', () => '')
  const isOpen = useState<boolean | undefined>('sidebar-open', () => undefined)

  const hasSubsidebar = computed(() => {
    return sidebars.value?.some((sidebar) => sidebar.subsidebar?.component)
  })

  const current = computed(() => {
    if (!currentName.value) {
      return undefined
    }
    return sidebars.value?.find(({ title }) => title === currentName.value)
  })

  function toggle() {
    // If no sidebar item is selected, open the first one
    if (!currentName.value && !isOpen.value) {
      if (!sidebars.value?.[0]?.title) {
        // No sidebar items defined
        return
      }

      // Select the first sidebar item by default
      currentName.value = sidebars.value[0].title
    }

    isOpen.value = !isOpen.value
  }

  function close(unselect = false) {
    isOpen.value = false
    if (unselect) {
      currentName.value = ''
    }
  }

  function open(name: string) {
    currentName.value = name
    isOpen.value = true
  }

  function detect() {
    if (isOpen.value !== undefined) {
      return
    }
    if (!app.tairo.sidebar?.navigation?.startOpen) {
      isOpen.value = false
      return
    }

    const item = sidebars.value?.find(
      (bar) => bar?.activePath && route.fullPath.startsWith(bar.activePath),
    )
    if (item) {
      currentName.value = item.title
      isOpen.value = Boolean(currentName.value)
    }
    return
  }

  function setup() {
    // Detect sidebar item on server page load
    if (!process.client) {
      detect()
      return
    }

    // Detect sidebar item on client page change
    // page:finish allow to wait for the page to be fully loaded before detecting the sidebar item
    const nuxtApp = useNuxtApp()
    const removeHook = nuxtApp.hook('page:finish', (e) => {
      detect()
      removeHook()
      return
    })

    // register a watcher to close sidebar when screen become extra large
    const { xl } = useTailwindBreakpoints()
    // close sidebar when screen become extra large
    watch(xl, (isXl) => {
      if (!isXl) {
        isOpen.value = false
      }
    })

    // register a watcher to open sidebar when a sidebar item is selected
    watch(
      () => currentName,
      (value) => {
        if (value) {
          // only open sidebar if it's not already open
          // and the screen is not extra large
          if (xl.value) {
            isOpen.value = true
          }
        } else {
          isOpen.value = false
        }
      },
    )
  }

  return {
    sidebars,
    hasSubsidebar,
    current,
    currentName,
    isOpen,
    toggle,
    close,
    open,
    detect,
    setup,
  }
}
