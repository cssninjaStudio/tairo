/**
 * This file is used to configure the app
 *
 * If you have the "Cannot find name 'defineAppConfig'.ts(2304)" error
 * update the root tsconfig.json file to include the following:
 *
 *  "extends": "./.demo/.nuxt/tsconfig.json"
 *
 */

export default defineAppConfig({
  tairo: {
    title: 'Tairo',
    toolbar: {
      showNavBurger: true,
      tools: [
        {
          component: 'BaseThemeToggle',
        },
        {
          component: 'DemoToolbarLanguage',
        },
        {
          component: 'DemoToolbarNotifications',
        },
        {
          component: 'DemoToolbarActivity',
        },
        {
          component: 'DemoToolbarAccountMenu',
        },
      ],
    },
    circularMenu: {
      enabled: true,
      tools: [
        {
          component: 'BaseThemeToggle',
          props: {
            class: 'ml-auto',
            inverted: true,
          },
        },
        {
          component: 'DemoCircularMenuLanguage',
        },
        {
          component: 'DemoCircularMenuNotifications',
        },
        {
          component: 'DemoCircularMenuActivity',
        },
      ],
    },
    sidebar: {
      logo: {
        component: 'TairoLogo',
        props: { class: 'text-primary-600 h-10' },
      },
      items: [
        {
          name: 'Dashboards',
          icon: { name: 'ph:sidebar-duotone', class: 'w-5 h-5' },
          subsidebar: { name: 'DemoSubsidebarDashboards' },
          activePath: '/dashboards',
        },
        {
          name: 'Layouts',
          icon: { name: 'ph:app-window-duotone', class: 'w-5 h-5' },
          subsidebar: { name: 'DemoSubsidebarLayouts' },
          activePath: '/layouts',
        },
        {
          name: 'Components',
          icon: { name: 'ph:grid-four-duotone', class: 'w-5 h-5' },
          subsidebar: { name: 'DemoSubsidebarComponents' },
          activePath: '/components',
        },
        {
          name: 'Chat',
          icon: { name: 'ph:chat-circle-duotone', class: 'w-5 h-5' },
          to: '/dashboards/messaging',
        },
        {
          name: 'Panels',
          icon: { name: 'ph:square-half-duotone', class: 'w-5 h-5' },
          click: () => {
            alert('clicked on layouts')
          },
          position: 'end',
        },
        {
          name: 'Search',
          icon: { name: 'ph:magnifying-glass-duotone', class: 'w-5 h-5' },
          click: () => {
            const { open } = usePanels()
            open('search')
          },
          position: 'end',
        },
        {
          name: 'Settings',
          icon: { name: 'ph:gear-six-duotone', class: 'w-5 h-5' },
          to: '#',
          position: 'end',
        },
        {
          name: 'My Account',
          component: { name: 'DemoAccountMenu' },
          position: 'end',
        },
      ],
    },
    panels: [
      {
        name: 'language',
        position: 'right',
        component: 'DemoPanelLanguage',
      },
      {
        name: 'activity',
        position: 'right',
        component: 'DemoPanelActivity',
      },
      {
        name: 'search',
        position: 'left',
        component: 'DemoPanelSearch',
      },
      {
        name: 'task',
        position: 'right',
        component: 'DemoPanelTask',
      },
    ],
  },
})
