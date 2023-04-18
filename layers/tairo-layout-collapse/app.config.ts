export default defineAppConfig({
  tairo: {
    collapse: {
      navigation: {
        enabled: true,
        header: {
          component: '',
          resolve: true,
        },
        footer: {
          component: '',
          resolve: true,
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
        showNavBurger: false,
        tools: [],
      },
    },
  },
})
