import 'vue-router'
import type { BreadcrumbItem } from '~~/components/base/Breadcrumb.vue'

declare module 'nuxt/dist/pages/runtime/composables' {
  interface PageMeta {
    title?: string
    breadcrumb?: BreadcrumbItem | false
    documentation?: {
      category?:
        | 'Uncategorized'
        | 'Content'
        | 'Interaction'
        | 'Display'
        | 'Forms'
      components?: string[]
      composables?: string[]
      interfaces?: string[]
    }
  }
}
