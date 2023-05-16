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
  nuxtIcon: {},
  nui: {
    defaultShapes: {},
  },
  tairo: {
    title: 'Tairo',
    sidebar: {
      toolbar: {
        showNavBurger: true,
        tools: [
          {
            component: 'DemoThemeToggle',
            props: {
              disableTransitions: true,
            },
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
            component: 'DemoThemeToggle',
            props: {
              class: 'ms-auto',
              disableTransitions: true,
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
      navigation: {
        logo: {
          component: 'TairoLogo',
          props: { class: 'text-primary-600 h-10' },
        },
        items: [
          {
            title: 'Dashboards',
            icon: { name: 'ph:sidebar-duotone', class: 'w-5 h-5' },
            subsidebar: { component: 'DemoSubsidebarDashboards' },
            activePath: '/dashboards',
          },
          {
            title: 'Layouts',
            icon: { name: 'ph:app-window-duotone', class: 'w-5 h-5' },
            subsidebar: { component: 'DemoSubsidebarLayouts' },
            activePath: '/layouts',
          },
          {
            title: 'Chat',
            icon: { name: 'ph:chat-circle-duotone', class: 'w-5 h-5' },
            to: '/dashboards/messaging',
          },
          {
            title: 'Customize',
            icon: { name: 'ph:drop-half-bottom-duotone', class: 'w-5 h-5' },
            click: () => {
              const isOpen = useState('switcher-open', () => false)
              isOpen.value = true
            },
            position: 'end',
          },
          {
            title: 'Search',
            icon: { name: 'ph:magnifying-glass-duotone', class: 'w-5 h-5' },
            click: () => {
              const isOpen = useState('search-open', () => false)
              isOpen.value = true
            },
            position: 'end',
          },
          {
            title: 'Settings',
            icon: { name: 'ph:gear-six-duotone', class: 'w-5 h-5' },
            to: '/layouts/profile-settings',
            position: 'end',
          },
          {
            title: 'My Account',
            component: 'DemoAccountMenu',
            position: 'end',
          },
        ],
      },
    },
    collapse: {
      toolbar: {
        enabled: true,
        showTitle: true,
        showNavBurger: true,
        tools: [
          {
            component: 'DemoThemeToggle',
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
            component: 'DemoThemeToggle',
            props: {
              class: 'ms-auto',
              disableTransitions: true,
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
      navigation: {
        enabled: true,
        header: {
          component: 'DemoCollapseNavigationHeader',
        },
        footer: {
          component: 'DemoCollapseNavigationFooter',
        },
        items: [
          {
            name: 'Dashboards',
            icon: { name: 'ph:sidebar-duotone', class: 'w-5 h-5' },
            activePath: '/dashboards',
            children: [
              {
                name: 'Personal v1',
                to: '/dashboards',
                icon: { name: 'ph:coffee-duotone', class: 'w-4 h-4' },
              },
              {
                name: 'Personal v2',
                to: '/dashboards/personal-2',
                icon: { name: 'ph:chart-pie-slice-duotone', class: 'w-4 h-4' },
              },
              {
                name: 'Personal v3',
                to: '/dashboards/personal-3',
                icon: { name: 'ph:cactus-duotone', class: 'w-4 h-4' },
              },
              {
                name: 'Analytics',
                to: '/dashboards/analytics',
                icon: { name: 'ph:gauge-duotone', class: 'w-4 h-4' },
              },
              {
                name: 'Stocks',
                to: '/dashboards/stocks',
                icon: { name: 'ph:coin-duotone', class: 'w-4 h-4' },
              },
              {
                name: 'Sales',
                to: '/dashboards/sales',
                icon: { name: 'ph:shopping-cart-duotone', class: 'w-4 h-4' },
              },
            ],
          },
          {
            name: 'Layouts',
            icon: { name: 'ph:app-window-duotone', class: 'w-5 h-5' },
            activePath: '/layouts',
            children: [
              {
                name: 'List view v1',
                to: '/layouts',
                icon: { name: 'ph:list-bullets-duotone', class: 'w-4 h-4' },
              },
              {
                name: 'Flex list v1',
                to: '/layouts/flex-list-1',
                icon: { name: 'ph:list-checks-duotone', class: 'w-4 h-4' },
              },
              {
                name: 'Table list v1',
                to: '/layouts/table-list-1',
                icon: { name: 'ph:table-duotone', class: 'w-4 h-4' },
              },
              {
                name: 'Card grid v1',
                to: '/layouts/card-grid-1',
                icon: { name: 'ph:circles-four-duotone', class: 'w-4 h-4' },
              },
            ],
          },
          {
            name: 'Widgets',
            icon: { name: 'ph:nut-duotone', class: 'w-5 h-5' },
            activePath: '/dashboards/widgets',
            children: [
              {
                name: 'UI Widgets',
                to: '/dashboards/widgets',
                icon: { name: 'ph:square-half-duotone', class: 'w-4 h-4' },
              },
              {
                name: 'Creative Widgets',
                to: '/dashboards/widgets/creative',
                icon: {
                  name: 'ph:square-half-bottom-duotone',
                  class: 'w-4 h-4',
                },
              },
              {
                name: 'List Widgets',
                to: '/dashboards/widgets/list',
                icon: { name: 'ph:square-half-duotone', class: 'w-4 h-4' },
              },
            ],
          },
          {
            name: 'Divider',
            divider: true,
          },
          {
            name: 'Wizard',
            icon: { name: 'ph:magic-wand-duotone', class: 'w-5 h-5' },
            to: '/wizard',
          },
          {
            name: 'Customize',
            icon: { name: 'ph:drop-half-bottom-duotone', class: 'w-5 h-5' },
            click: () => {
              const isSwitcherOpen = useState('switcher-open', () => false)
              isSwitcherOpen.value = true
            },
          },
        ],
      },
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
    error: {
      logo: {
        component: 'img',
        props: {
          src: '/img/illustrations/system/404-1.svg',
          class: 'relative z-20 w-full max-w-lg mx-auto',
        },
      },
    },
  },
})
