export default defineAppConfig({
  tairo: {
    collapse: {
      navigation: {
        enabled: true,
        logo: {
          component: 'TairoLogo',
          resolve: true,
          props: { class: 'text-primary-600 h-10' },
        },
        items: [
          {
            name: 'Dashboards',
            icon: { name: 'ph:sidebar-duotone', class: 'w-5 h-5' },
            to: '/dashboards',
          },
          {
            name: 'Documentation',
            icon: { name: 'ph:app-window-duotone', class: 'w-5 h-5' },
            activePath: '/documentation',
            children: [
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
  },
})
