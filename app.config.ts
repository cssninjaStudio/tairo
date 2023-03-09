export default defineAppConfig({
  tairo: {
    title: 'Tairo',
    toolbar: {
      enabled: true,
      showTitle: true,
      showNavBurger: false,
      tools: [],
    },
    sidebar: {
      enabled: true,
      logo: {
        component: 'TairoLogo',
        props: { class: 'text-primary-600 h-10' },
      },
      items: [],
    },
    circularMenu: {
      enabled: false,
      tools: [],
    },
    panels: [],
  },
})
