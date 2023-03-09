export default defineAppConfig({
  tairo: {
    title: 'Tairo Quickstarter',
    toolbar: {
      enabled: true,
      showTitle: true,
      showNavBurger: false,
      tools: [],
    },
    sidebar: {
      enabled: false,
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
