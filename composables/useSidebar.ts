import type { Component } from 'vue'
import type { RouteLocationRaw } from 'vue-router'
import {
  BaseIcon,
  LazyNavigationSidebarMenuComponents,
  LazyNavigationSidebarMenuDashboards,
  LazyNavigationSidebarMenuLayouts,
} from '#components'

export interface NavigationSidebarItem {
  name: string
  icon: Component
  subnav?: Component
  to?: RouteLocationRaw
  click?: () => void | Promise<void>
  activePath?: string
  /**
   * @default 'start'
   */
  position?: 'start' | 'end'
}

export const useSidebar = createSharedComposable(() => {
  const { openPanel } = usePanels()

  // @unocss-include
  const sidebars: NavigationSidebarItem[] = [
    {
      name: 'Dashboards',
      icon: () => h(BaseIcon, { name: 'ph:sidebar-duotone', class: 'w-5 h-5' }),
      subnav: LazyNavigationSidebarMenuDashboards,
      activePath: '/dashboards',
    },
    {
      name: 'Layouts',
      icon: () =>
        h(BaseIcon, { name: 'ph:app-window-duotone', class: 'w-5 h-5' }),
      subnav: LazyNavigationSidebarMenuLayouts,
      activePath: '/layouts',
    },
    {
      name: 'Components',
      icon: () =>
        h(BaseIcon, { name: 'ph:grid-four-duotone', class: 'w-5 h-5' }),
      subnav: LazyNavigationSidebarMenuComponents,
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
        toggleLayoutModal()
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
  // Layout Modal
  const isLayoutModalOpen = ref(false)
  function toggleLayoutModal() {
    isLayoutModalOpen.value = !isLayoutModalOpen.value
  }
  // Sidebar
  const sidebar = sidebars.find(
    ({ activePath }) => activePath && route.path.startsWith(activePath)
  )
  // use shallowRef to avoid deeply reactive watch
  const activeSidebar = shallowRef<NavigationSidebarItem | null>(
    sidebar || null
  )
  const isSidebarOpened = ref(activeSidebar.value !== null)

  function toggleSidebar() {
    isSidebarOpened.value = !isSidebarOpened.value
  }

  function toggleActiveSidebar(sidebar: NavigationSidebarItem) {
    if (sidebar?.click) {
      return sidebar?.click?.()
    }

    if (activeSidebar.value?.name === sidebar.name) {
      toggleSidebar()
    } else {
      activeSidebar.value = sidebar
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
    isLayoutModalOpen,
    toggleLayoutModal,
  }
})
