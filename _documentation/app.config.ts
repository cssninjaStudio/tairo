export default defineAppConfig({
  tairo: {
    sidebar: {
      items: [
        {
          name: 'Components',
          icon: { name: 'ph:grid-four-duotone', class: 'w-5 h-5' },
          subsidebar: { name: 'DocSubsidebarComponents' },
          activePath: '/documentation',
        },
      ],
    },
  },
})
