import type { TairoPanelConfig, TairoSidebarConfig } from './nuxt.schema'

export default defineAppConfig({
  /**
   * Default are defined in nuxt.schema.ts for best typing and Studio integration
   * This file can be used to leverage HMR while developping this theme
   * Note that this file is not published to npm
   */
})

declare module '@nuxt/schema' {
  interface AppConfigInput {
    tairo?: {
      title?: string
      sidebars?: TairoSidebarConfig[]
      panels?: TairoPanelConfig[]
    }
  }
}
