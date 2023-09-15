export default defineNuxtSchema({
  appConfig: {
    tairo: {
      topnav: {
        circularMenu: {
          enabled: true,
          tools: {
            $schema: {
              type: 'array',
              items: {
                type: 'object',
                required: ['name'],
                properties: {
                  component: { type: 'string' },
                  props: { type: 'object' },
                },
              },
            },
          },
        },
        toolbar: {
          enabled: true,
          showTitle: true,
          tools: {
            $schema: {
              type: 'array',
              items: {
                type: 'object',
                required: ['name'],
                properties: {
                  component: { type: 'string' },
                  props: { type: 'object' },
                },
              },
            },
          },
        },
        navigation: {
          enabled: true,
          logo: {
            component: 'TairoLogo',
            props: {},
          },
          header: {
            component: undefined,
            props: {},
          },
          items: {
            $schema: {
              type: 'array',
              items: {
                type: 'object',
                required: ['name'],
                properties: {
                  name: { type: 'string' },
                  to: { type: 'string' },
                  activePath: { type: 'string' },
                  position: { type: 'string', tsType: "'start' | 'end'" },
                  divider: { type: 'boolean' },
                  icon: {
                    type: 'object',
                    required: ['name'],
                    properties: {
                      name: { type: 'string' },
                      class: { type: 'string' },
                    },
                  },
                  component: {
                    type: 'object',
                    required: ['name'],
                    properties: {
                      component: { type: 'string' },
                      props: { type: 'object' },
                    },
                  },
                  click: { type: 'function' },
                },
              },
            },
          },
        },
      },
    },
  },
})
