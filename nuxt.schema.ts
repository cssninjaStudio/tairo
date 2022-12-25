export interface TairoSidebarConfig {
  name: string
  icon: string | { name: string; class: string }
  component?: string
  componentHeader?: string | false
  to?: string
  click?: () => void | Promise<void>
  activePath?: string
  /**
   * @default 'start'
   */
  position?: 'start' | 'end'
}

export interface TairoPanelConfig {
  name: string
  component: string
  /**
   * @default 'left'
   */
  position?: 'left' | 'right'
}

export default defineNuxtConfigSchema({
  appConfig: {
    tairo: {
      title: 'Tairo',
      sidebars: {
        $schema: {
          type: 'array',
          items: {
            type: 'object',
            properties: {
              name: { type: 'string' },
            },
          },
        },
      },
      panels: [] as TairoPanelConfig[],
    },
  },
})

// declare module '@nuxt/schema' {
//   interface AppConfigInput {
//     tairo?: {
//       title?: string
//       sidebars?: TairoSidebarConfig[]
//       panels?: TairoPanelConfig[]
//     }
//   }
// }
