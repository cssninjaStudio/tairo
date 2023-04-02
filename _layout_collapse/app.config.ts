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
            activePath: '/',
          },
          {
            name: 'Layouts',
            icon: { name: 'ph:app-window-duotone', class: 'w-5 h-5' },
            activePath: '/layouts',
            children: [
              {
                name: 'Collapse',
                to: '#',
                icon: { name: 'ph:sidebar-duotone', class: 'w-5 h-5' },
              },
              {
                name: 'Collapse 2 ',
                to: '#',
                icon: { name: 'ph:sidebar-duotone', class: 'w-5 h-5' },
              },
              {
                name: 'Collapse 3',
                to: '#',
                icon: { name: 'ph:sidebar-duotone', class: 'w-5 h-5' },
              },
            ],
          },
          {
            name: 'Chat',
            icon: { name: 'ph:chat-circle-duotone', class: 'w-5 h-5' },
            to: '/dashboards/messaging',
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
            to: '#',
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
