declare module 'nuxt/dist/pages/runtime/composables' {
  interface PageMeta {
    title?: string
    description?: string
    preview?:
      | {
        title: string
        description: string
        categories?: string[]
        src: string
        srcDark?: string
        order?: number
      }
      | {
        title: string
        description: string
        categories?: string[]
        src: string
        srcDark?: string
        order?: number
        params: Record<string, string>
      }[]
  }
}

declare module 'vue-router' {
  // import 'vue-router';
  interface RouteMeta {
    title?: string
    description?: string
    preview?: {
      title: string
      description: string
      categories?: string[]
      src: string
      srcDark?: string
      order?: number
      new?: boolean
    }
  }
}

export {}
