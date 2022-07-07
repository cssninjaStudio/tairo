import type { Component } from 'vue'
import type { RouteLocationRaw } from 'vue-router'
import {
  BaseIcon,
  LazyNavigationSidebarMenuComponents,
  LazyNavigationSidebarMenuComponentsHeader,
  LazyNavigationSidebarMenuDashboards,
  LazyNavigationSidebarMenuHeader,
  LazyNavigationSidebarMenuLayouts,
} from '#components'

export interface LazyNavigationSidebarItem {
  name: string
  icon: Component
  subnav?: Component
  subnavHeader?: Component | false
  to?: RouteLocationRaw
  click?: () => void | Promise<void>
  activePath?: string
  /**
   * @default 'start'
   */
  position?: 'start' | 'end'
}

export const useSidebar = () => {
  const { openPanel } = usePanels()

  const sidebars: LazyNavigationSidebarItem[] = [
    {
      name: 'Dashboards',
      icon: () => h(BaseIcon, { name: 'ph:sidebar-duotone', class: 'w-5 h-5' }),
      subnav: LazyNavigationSidebarMenuDashboards,
      subnavHeader: LazyNavigationSidebarMenuHeader,
      activePath: '/dashboards',
    },
    {
      name: 'Layouts',
      icon: () =>
        h(BaseIcon, { name: 'ph:app-window-duotone', class: 'w-5 h-5' }),
      subnav: LazyNavigationSidebarMenuLayouts,
      subnavHeader: LazyNavigationSidebarMenuHeader,
      activePath: '/layouts',
    },
    {
      name: 'Components',
      icon: () =>
        h(BaseIcon, { name: 'ph:grid-four-duotone', class: 'w-5 h-5' }),
      subnav: LazyNavigationSidebarMenuComponents,
      subnavHeader: LazyNavigationSidebarMenuComponentsHeader,
      activePath: '/components',
    },
    {
      name: 'Chat',
      icon: () =>
        h(BaseIcon, { name: 'ph:chat-circle-duotone', class: 'w-5 h-5' }),
      to: { path: '/' },
    },
    {
      name: 'Panels',
      icon: () =>
        h(BaseIcon, { name: 'ph:square-half-duotone', class: 'w-5 h-5' }),
      click: () => {
        // toggleLayoutModal()
      },
      position: 'end',
    },
    {
      name: 'Search',
      icon: () =>
        h(BaseIcon, { name: 'ph:magnifying-glass-duotone', class: 'w-5 h-5' }),
      click: () => {
        openPanel('search')
      },
      position: 'end',
    },
    {
      name: 'Settings',
      icon: () =>
        h(BaseIcon, { name: 'ph:gear-six-duotone', class: 'w-5 h-5' }),
      to: { path: '/' },
      position: 'end',
    },
  ]

  const route = useRoute()

  // Sidebar
  const sidebar = sidebars.find(
    ({ activePath }) => activePath && route.path.startsWith(activePath)
  )
  const activeSidebarName = useState<string>(
    'sidebar-name',
    () => sidebar?.name || ''
  )
  const activeSidebar = computed(() => {
    if (!activeSidebarName.value) {
      return undefined
    }
    return sidebars.find(({ name }) => name === activeSidebarName.value)
  })
  const isSidebarOpened = useState(
    'sidebar-is-open',
    () => activeSidebar.value !== null
  )

  function toggleSidebar() {
    isSidebarOpened.value = !isSidebarOpened.value
  }

  function toggleActiveSidebar(sidebar: LazyNavigationSidebarItem) {
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
