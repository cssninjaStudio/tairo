import { defineAppConfig } from 'nuxt/app'

export default defineAppConfig({
  tairo: {
    title: 'Tairo',
    sidebars: [
      {
        name: 'Dashboards',
        icon: { name: 'ph:sidebar-duotone', class: 'w-5 h-5' },
        component: 'SidebarMenuDashboards',
        componentHeader: 'SidebarMenuHeader',
        activePath: '/dashboards',
      },
      {
        name: 'Layouts',
        icon: { name: 'ph:app-window-duotone', class: 'w-5 h-5' },
        component: 'SidebarMenuLayouts',
        componentHeader: 'SidebarMenuHeader',
        activePath: '/layouts',
      },
      {
        name: 'Components',
        icon: { name: 'ph:grid-four-duotone', class: 'w-5 h-5' },
        component: 'SidebarMenuComponents',
        componentHeader: 'SidebarMenuComponentsHeader',
        activePath: '/components',
      },
      {
        name: 'Chat',
        icon: { name: 'ph:chat-circle-duotone', class: 'w-5 h-5' },
        to: '/',
      },
      {
        name: 'Panels',
        icon: { name: 'ph:square-half-duotone', class: 'w-5 h-5' },
        // click: () => {
        //   // toggleLayoutModal()
        // },
        position: 'end',
      },
      {
        name: 'Search',
        icon: { name: 'ph:magnifying-glass-duotone', class: 'w-5 h-5' },
        click: () => {
          const { openPanel } = usePanels()
          openPanel('search')
        },
        position: 'end',
      },
      {
        name: 'Settings',
        icon: { name: 'ph:gear-six-duotone', class: 'w-5 h-5' },
        to: '/',
        position: 'end',
      },
    ],
    panels: [
      {
        name: 'language',
        position: 'right',
        component: 'PanelLanguage',
      },
      {
        name: 'activity',
        position: 'right',
        component: 'PanelActivity',
      },
      {
        name: 'search',
        position: 'left',
        component: 'PanelSearch',
      },
    ],
  },
})
