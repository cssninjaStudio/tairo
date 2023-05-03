declare module 'nuxt/dist/pages/runtime/composables' {
  interface PageMeta {
    title?: string
    description?: string
    breadcrumb?: any
    preview?: {
      title: string
      description: string
      categories?: string[]
      src: string
      srcDark?: string
      order?: number
    }
  }
}

declare module 'vue-router' {
  // import 'vue-router';
  interface RouteMeta {
    title?: string
    description?: string
    breadcrumb?: any
    preview?: {
      title: string
      description: string
      categories?: string[]
      src: string
      srcDark?: string
      order?: number
    }
  }
}

export {}
