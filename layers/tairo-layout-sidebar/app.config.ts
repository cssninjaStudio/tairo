export default defineAppConfig({
  tairo: {
    sidebar: {
      enabled: true,
      startOpen: true,
      logo: {
        component: 'TairoLogo',
        resolve: true,
        props: { class: 'text-primary-600 h-10' },
      },
      items: [],
    },
    circularMenu: {
      enabled: false,
      tools: [],
    },
  },
})
