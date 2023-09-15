export default defineAppConfig({
  tairo: {
    topnav: {
      navigation: {
        enabled: true,
        logo: {
          component: 'TairoLogo',
          props: { class: 'text-primary-500 h-10 w-10' },
        },
        header: {
          component: undefined,
        },
        items: [],
      },
      circularMenu: {
        enabled: true,
        tools: [],
      },
      toolbar: {
        enabled: true,
        showTitle: false,
        tools: [],
      },
    },
  },
})
