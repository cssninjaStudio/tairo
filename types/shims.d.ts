declare module '*?raw' {
  const snippet: string
  export default snippet
}

declare module 'nuxt/dist/pages/runtime/composables' {
  interface PageMeta {
    title?: string
    breadcrumb?: any
    documentation?:
      | false
      | {
          description?: string
          category?:
            | 'Uncategorized'
            // | 'Content'
            // | 'Interaction'
            // | 'Display'
            // | 'Forms'
            // | 'Addons'
            | 'Base Forms'
            | 'Base UI Elements'
            | 'Layout Elements'
            | 'Addons'
          components?: string[]
          composables?: string[]
          icon?: {
            src?: string
            srcDark?: string
          }
        }
  }
}

declare module 'vue-router' {
  // import 'vue-router';
  interface RouteMeta {
    title?: string
    breadcrumb?: any
    documentation?:
      | false
      | {
          description?: string
          category?:
            | 'Uncategorized'
            | 'Content'
            | 'Interaction'
            | 'Display'
            | 'Forms'
            | 'Addons'
          components?: string[]
          composables?: string[]
          icon?: {
            src?: string
            srcDark?: string
          }
        }
  }
}

export {}
