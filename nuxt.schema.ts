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

export default defineNuxtSchema({
  appConfig: {
    tairo: {
      title: 'Tairo',
      sidebars: [] as TairoSidebarConfig[],
      panels: [] as TairoPanelConfig[],
    },
  },
})
