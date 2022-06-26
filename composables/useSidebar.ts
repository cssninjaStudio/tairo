import type { Component } from 'vue'
import type { RouteLocationRaw } from 'vue-router'
// Lazy prefix is introduced by nuxt, it wrap the component with defineAsyncComponent
import {
  LazyNavigationSidebarMenuComponents,
  LazyNavigationSidebarMenuDashboards,
  LazyNavigationSidebarMenuElements,
  LazyNavigationSidebarMenuLayouts,
} from '~~/.nuxt/components'

export interface NavigationSidebarItem {
  name: string
  icon: Component
  subnav?: Component
  to?: RouteLocationRaw
  activePath?: string
}

const sidebars: NavigationSidebarItem[] = [
  {
    name: 'Dashboards',
    icon: () => h('i', { class: 'i-ph-sidebar-duotone w-5 h-5' }),
    subnav: LazyNavigationSidebarMenuDashboards,
    activePath: '/dashboards',
  },
  {
    name: 'Layouts',
    icon: () => h('i', { class: 'i-ph-app-window-duotone w-5 h-5' }),
    subnav: LazyNavigationSidebarMenuLayouts,
    activePath: '/layouts',
  },
  {
    name: 'Elements',
    icon: () => h('i', { class: 'i-ph-nut-duotone w-5 h-5' }),
    subnav: LazyNavigationSidebarMenuElements,
    activePath: '/elements',
  },
  {
    name: 'Components',
    icon: () => h('i', { class: 'i-ph-grid-four-duotone w-5 h-5' }),
    subnav: LazyNavigationSidebarMenuComponents,
    activePath: '/components',
  },
  {
    name: 'Components',
    icon: () => h('i', { class: 'i-ph-chat-circle-duotone w-5 h-5' }),
    to: { path: '/' },
  },
]

export const useSidebar = createSharedComposable(() => {
  const route = useRoute()
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
  }
})
