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
          component: 'BaseThemeToggle',
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
            const isOpen = useState('search-open', () => false)
            // const { open } = usePanels()
            // open('search')
            isOpen.value = true
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
    collapse: {
      navigation: {
        enabled: true,
        header: {
          component: 'DemoCollapseNavigationHeader',
          resolve: true,
        },
        footer: {
          component: 'DemoCollapseNavigationFooter',
          resolve: true,
        },
        items: [
          {
            name: 'Dashboards',
            icon: { name: 'ph:sidebar-duotone', class: 'w-5 h-5' },
            to: '/toto',
          },
          {
            name: 'Documentation',
            icon: { name: 'ph:app-window-duotone', class: 'w-5 h-5' },
            activePath: '/documentation',
            children: [
              {
                name: 'Toto',
                to: '/toto',
                icon: { name: 'ph:sidebar-duotone', class: 'w-4 h-4' },
              },
              {
                name: 'Collapse',
                to: '/documentation/shuriken-ui/forms/listbox',
                icon: { name: 'ph:sidebar-duotone', class: 'w-4 h-4' },
              },
              {
                name: 'Collapse 2 ',
                to: '/documentation/shuriken-ui/forms/input',
                icon: { name: 'ph:sidebar-duotone', class: 'w-4 h-4' },
              },
              // {
              //   name: 'Collapse 3',
              //   to: '#link-3',
              //   icon: { name: 'ph:sidebar-duotone', class: 'w-5 h-5' },
              // },
            ],
          },
          {
            name: 'List Widgets',
            icon: { name: 'ph:chat-circle-duotone', class: 'w-5 h-5' },
            to: '/dashboards/widgets/list',
          },
          {
            name: 'Search',
            icon: { name: 'ph:magnifying-glass-duotone', class: 'w-5 h-5' },
            click: () => {
              const { open } = usePanels()
              open('search')
            },
          },
          {
            name: 'Divider',
            divider: true,
          },
          {
            name: 'Settings',
            icon: { name: 'ph:gear-six-duotone', class: 'w-5 h-5' },
            to: '/dashboards/analytics',
          },
        ],
      },
      circularMenu: {
        enabled: false,
        tools: [],
      },
      toolbar: {
        enabled: true,
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
        resolve: false,
        props: {
          src: '/img/illustrations/system/404-1.svg',
          class: 'relative z-20 w-full max-w-lg mx-auto',
        },
      },
    },
  },
  nuxtIcon: {},
  nui: {
    defaultShapes: {},
  },
})
