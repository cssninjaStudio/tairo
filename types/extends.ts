import 'vue-router'
// import type { BreadcrumbItem } from '~~/components/base/Breadcrumb.vue'

declare module 'nuxt/dist/pages/runtime/composables' {
  interface PageMeta {
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
