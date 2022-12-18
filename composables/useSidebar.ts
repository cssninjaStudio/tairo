import type { ConcreteComponent, Component } from 'vue'
import type { RouteLocationRaw } from 'vue-router'

import type { TairoSidebarConfig } from '../nuxt.schema'
import { Icon } from '#components'

export interface SidebarItem {
  name: string
  icon: Component
  component?: Component | ConcreteComponent | string
  componentHeader?: Component | ConcreteComponent | string
  to?: RouteLocationRaw
  click?: () => void | Promise<void>
  activePath?: string
  /**
   * @default 'start'
   */
  position?: 'start' | 'end'
}

export const useSidebar = () => {
  const app = useAppConfig()
  const route = useRoute()

  const sidebars = (app.tairo.sidebars as TairoSidebarConfig[]).map(
    (sidebar) => {
      const item: SidebarItem = {
        name: sidebar.name,
        to: sidebar.to,
        activePath: sidebar.activePath,
        click: sidebar.click,
        position: sidebar.position ?? 'start',
        icon: () =>
          h(
            Icon,
            typeof sidebar.icon === 'string'
              ? { name: sidebar.icon, class: 'w-5 h-5' }
              : sidebar.icon,
          ),
        component: sidebar.component
          ? resolveComponent(sidebar.component)
          : undefined,
        componentHeader: sidebar.componentHeader
          ? resolveComponent(sidebar.componentHeader)
          : undefined,
      }
      return item
    },
  )

  // Sidebar
  const sidebar = sidebars.find(
    ({ activePath }) => activePath && route.path.startsWith(activePath),
  )
  const activeSidebarName = useState<string>(
    'sidebar-name',
    () => sidebar?.name || '',
  )
  const activeSidebar = computed(() => {
    if (!activeSidebarName.value) {
      return undefined
    }
    return sidebars.find(({ name }) => name === activeSidebarName.value)
  })
  const isSidebarOpened = useState(
    'sidebar-is-open',
    () => activeSidebar.value !== null,
  )

  function toggleSidebar() {
    isSidebarOpened.value = !isSidebarOpened.value
  }

  function toggleActiveSidebar(sidebar: SidebarItem) {
    if (sidebar?.click) {
      return sidebar?.click?.()
    }

    if (activeSidebar.value?.name === sidebar.name) {
      toggleSidebar()
    } else {
      activeSidebarName.value = sidebar.name
    }
  }

  watchEffect(() => {
    if (activeSidebar.value) {
      isSidebarOpened.value = true
    } else {
      isSidebarOpened.value = false
    }
  })

  return {
    sidebars: markRaw(sidebars), // markRaw is used to prevent Vue to set reactive if used in template
    activeSidebar,
    isSidebarOpened,
    toggleSidebar,
    toggleActiveSidebar,
  }
}
