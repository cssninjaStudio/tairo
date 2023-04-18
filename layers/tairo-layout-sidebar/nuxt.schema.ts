export default defineNuxtSchema({
  appConfig: {
    tairo: {
      sidebar: {
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
                  resolve: { type: 'boolean', $default: true },
                  props: { type: 'object' },
                },
              },
            },
          },
        },
        toolbar: {
          enabled: true,
          showTitle: true,
          showNavBurger: false,
          tools: {
            $schema: {
              type: 'array',
              items: {
                type: 'object',
                required: ['name'],
                properties: {
                  component: { type: 'string' },
                  resolve: { type: 'boolean', $default: true },
                  props: { type: 'object' },
                },
              },
            },
          },
        },
        navigation: {
          enabled: true,
          startOpen: true,
          logo: {
            component: 'TairoLogo',
            resolve: true,
            props: {},
          },
          items: {
            $schema: {
              type: 'array',
              items: {
                type: 'object',
                required: ['title'],
                properties: {
                  title: { type: 'string' },

                  order: { type: 'number', $default: 10 },
                  activePath: { type: 'string' },
                  position: {
                    type: 'string',
                    tsType: "'start' | 'end'",
                    $default: 'start',
                  },

                  component: { type: 'string' },
                  resolve: { type: 'boolean', $default: true },
                  props: { type: 'object' },

                  icon: {
                    type: 'object',
                    required: ['name'],
                    properties: {
                      name: { type: 'string' },
                      resolve: { type: 'boolean', $default: true },
                      class: { type: 'string' },
                    },
                  },
                  to: { type: 'string' },
                  click: { type: 'function' },

                  subsidebar: {
                    type: 'object',
                    required: ['name'],
                    properties: {
                      component: { type: 'string' },
                      resolve: { type: 'boolean', $default: true },
                      props: { type: 'object' },
                    },
                  },
                },
              },
            },
          },
        },
      },
    },
  },
})
