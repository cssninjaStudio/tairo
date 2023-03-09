declare module '*?raw' {
  const snippet: string
  export default snippet
}

declare module 'nuxt/dist/pages/runtime/composables' {
  interface PageMeta {
    title?: string
    breadcrumb?: any
    documentation?: {
      category?:
        | 'Uncategorized'
        // | 'Content'
        // | 'Interaction'
        // | 'Display'
        // | 'Forms'
        // | 'Addons'
        | 'NUI Forms'
        | 'NUI Elements'
        | 'Tairo Elements'
        | 'Demo Elements'
      components?: string[]
      composables?: string[]
      interfaces?: string[]
    }
  }
}

declare module 'vue-router' {
  // import 'vue-router';
  interface RouteMeta {
    title?: string
    breadcrumb?: any
    documentation?: {
      category?:
        | 'Uncategorized'
        | 'Content'
        | 'Interaction'
        | 'Display'
        | 'Forms'
        | 'Addons'
      components?: string[]
      composables?: string[]
      interfaces?: string[]
    }
  }
}

export {}
