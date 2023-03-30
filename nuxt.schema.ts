export default defineNuxtSchema({
  appConfig: {
    tairo: {
      title: 'Tairo',
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
      error: {
        logo: {
          component: 'TairoLogo',
          resolve: true,
          props: {},
        },
      },
      sidebar: {
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
                component: {
                  type: 'object',
                  required: ['name'],
                  properties: {
                    name: { type: 'string' },
                    props: { type: 'object' },
                  },
                },
                subsidebar: {
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
                tsType: "'left' | 'right'",
                $default: 'left',
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
