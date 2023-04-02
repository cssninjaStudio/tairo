export default defineNuxtSchema({
  appConfig: {
    tairo: {
      collapse: {
        navigation: {
          enabled: true,
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
                      name: { type: 'string' },
                      props: { type: 'object' },
                    },
                  },
                  click: { type: 'function' },
                },
              },
            },
          },
        },
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
          tools: [],
        },
      },
    },
  },
})
