export default defineNuxtSchema({
  appConfig: {
    tairo: {
      collapse: {
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
          showNavBurger: false,
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
          header: {
            component: '',
            resolve: true,
            props: {},
          },
          footer: {
            component: '',
            resolve: true,
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
                  children: {
                    type: 'array',
                    items: {
                      type: 'object',
                      required: ['name'],
                      properties: {
                        name: { type: 'string' },
                        to: { type: 'string' },
                        activePath: { type: 'string' },
                        position: { type: 'string', tsType: "'start' | 'end'" },
                        icon: {
                          type: 'object',
                          required: ['name'],
                          properties: {
                            name: { type: 'string' },
                            class: { type: 'string' },
                          },
                        },
                      },
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
