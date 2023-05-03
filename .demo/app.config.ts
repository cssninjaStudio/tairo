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
            title: 'Panels',
            icon: { name: 'ph:square-half-duotone', class: 'w-5 h-5' },
            click: () => {
              alert('clicked on layouts')
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
