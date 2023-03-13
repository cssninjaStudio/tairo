export default defineAppConfig({
  tairo: {
    title: 'Tairo',
    toolbar: {
      enabled: true,
      showTitle: true,
      showNavBurger: false,
      tools: [],
    },
    error: {
      logo: {
        component: 'TairoLogo',
        props: { class: 'text-primary-500 mx-auto h-40 p-6' },
      },
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
