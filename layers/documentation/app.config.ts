export default defineAppConfig({
  tairo: {
    sidebar: {
      navigation: {
        items: [
          {
            title: 'Documentation',
            icon: { name: 'ph:grid-four-duotone', class: 'w-5 h-5' },
            subsidebar: { component: 'DocSubsidebarDocumentation' },
            activePath: '/documentation',
          },
        ],
      },
    },
  },
})
