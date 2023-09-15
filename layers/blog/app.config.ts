/**
 * This file is used to configure the app
 *
 * If you have the "Cannot find name 'defineAppConfig'.ts(2304)" error
 * update the root tsconfig.json file to include the following:
 *
 *  "extends": "./.app/.nuxt/tsconfig.json"
 *
 */

export default defineAppConfig({
  nuxtIcon: {},
  nui: {
    defaultShapes: {},
  },
  tairo: {
    title: 'HorizonHub',
    sidebar: {
      enabled: true,
      startOpen: true,
      circularMenu: {
        enabled: false,
        tools: []
      },
      toolbar: {
        enabled: true,
        showTitle: true,
        showNavBurger: true,
        tools: [
          {
            component: 'ThemeToggle',
            props: {
              class: 'ms-auto',
              disableTransitions: true,
              inverted: true,
            },
          },
          {
            component: 'NavigationToolbarAccountMenu',
          },
        ]
      },
      navigation: {
        enabled: true,
        startOpen: false,
        logo: {
          component: "TairoLogo",
          resolve: true,
          props: {
            class: "text-primary-600 h-10"
          }
        },
        items: [
          {
            // Title displayed in the sidebar
            title: 'Dashboards',
            // Icon displayed in the sidebar
            // see https://icones.js.org/
            icon: { name: 'ph:sidebar-duotone', class: 'w-5 h-5' },
            // Path where the item is considered active
            activePath: '/dashboard',
            // Subsidebar global component to display
            // when clicking on the item
            // subsidebar: { },
            // OR Path to navigate to when clicking on the item
            to: '/dashboard',
            // OR Custom action to trigger
            // when clicking on the item
            click: () => {
              const { close } = useSidebar()
              close()
            },
          },
          {
            // Title displayed in the sidebar
            title: 'Ideas',
            // Icon displayed in the sidebar
            // see https://icones.js.org/
            icon: { name: 'ph:lightbulb-duotone', class: 'w-5 h-5' },
            // Path where the item is considered active
            // activePath: '/ideas',
            // Subsidebar global component to display
            // when clicking on the item
            // subsidebar: { component: 'SideBarsSubSideBarsIdeas' },
            // OR Path to navigate to when clicking on the item
            to: '/dashboard/ideas',
            // OR Custom action to trigger
            // when clicking on the item
            click: () => {
              const { close } = useSidebar()
              close()
            },
          },
          // This is for DUX ==========================================================
          // {
          //   // Title displayed in the sidebar
          //   title: 'Projects',
          //   // Icon displayed in the sidebar
          //   // see https://icones.js.org/
          //   icon: { name: 'ph:kanban-duotone', class: 'w-5 h-5' },
          //   // Path where the item is considered active
          //   // activePath: '/ideas',
          //   // Subsidebar global component to display
          //   // when clicking on the item
          //   // subsidebar: { component: 'SideBarsSubSideBarsIdeas' },
          //   // OR Path to navigate to when clicking on the item
          //   to: '/dashboard/projects',
          //   // OR Custom action to trigger
          //   // when clicking on the item
          //   click: () => {
          //     const { close } = useSidebar()
          //     close()
          //   },
          // },
          {
            // Title displayed in the sidebar
            title: 'Checkout',
            // Icon displayed in the sidebar
            // see https://icones.js.org/
            icon: { name: 'ph:storefront-duotone', class: 'w-5 h-5' },
            // Path where the item is considered active
            // activePath: '/ideas',
            // Subsidebar global component to display
            // when clicking on the item
            // OR Path to navigate to when clicking on the item
            to: '/dashboard/checkout',
            // OR Custom action to trigger
            // when clicking on the item
            click: () => {
              const { close } = useSidebar()
              close()
            },
          },
          {
            // Title displayed in the sidebar
            title: 'Feedback',
            // Icon displayed in the sidebar
            // see https://icones.js.org/
            icon: { name: 'heroicons:inbox-arrow-down', class: 'w-5 h-5' },
            // Path where the item is considered active
            // activePath: '/ideas',
            // Subsidebar global component to display
            // when clicking on the item
            // OR Path to navigate to when clicking on the item
            to: '/dashboard/feedback/inbox',
            // OR Custom action to trigger
            // when clicking on the item
            click: () => {
              const { close } = useSidebar()
              close()
            },
          },
          {
            title: 'My Account',
            component: 'AccountMenu',
            position: 'end',
          },
        ]
      }
    },
    error: {
      logo: {
        component: "TairoLogo",
        resolve: true,
        props: {
          class: "text-primary-500 mx-auto h-40 p-6"
        }
      }
    },
    panels: []
  },
})
