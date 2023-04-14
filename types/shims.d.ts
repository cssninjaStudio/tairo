declare module 'nuxt/dist/pages/runtime/composables' {
  interface PageMeta {
    title?: string
    breadcrumb?: any
  }
}

declare module 'vue-router' {
  // import 'vue-router';
  interface RouteMeta {
    title?: string
    breadcrumb?: any
  }
}

export {}
