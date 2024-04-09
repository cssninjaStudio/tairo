export default defineNuxtSchema({
  appConfig: {
    tairo: {
      title: 'Tairo',
      error: {
        logo: {
          component: 'TairoLogo',
          props: {},
        },
      },
      panels: {
        $schema: {
          type: 'array',
          items: {
            type: 'object',
            required: ['name', 'component'],
            properties: {
              name: { type: 'string' },
              position: {
                type: 'string',
                tsType: '\'left\' | \'right\'',
                $default: 'left',
              },
              size: {
                type: 'string',
                tsType: '\'sm\' | \'md\'',
                $default: 'sm',
              },
              component: { type: 'string' },
              props: { type: 'object' },
              overlay: { type: 'boolean', $default: true },
            },
          },
        },
      },
    },
  },
})
