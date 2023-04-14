export default defineAppConfig({
  tairo: {
    sidebar: {
      items: [
        {
          name: 'Documentation',
          icon: { name: 'ph:grid-four-duotone', class: 'w-5 h-5' },
          subsidebar: { name: 'DocSubsidebarDocumentation' },
          activePath: '/documentation',
        },
      ],
    },
  },
})
