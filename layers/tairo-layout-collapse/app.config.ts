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
        enabled: false,
        tools: [],
      },
      toolbar: {
        enabled: true,
        tools: [],
      },
    },
  },
})
