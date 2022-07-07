<script setup lang="ts">
import type { RouteLocationRaw } from 'vue-router'

export type BreadcrumbSeparator = 'slash' | 'dot' | 'chevron' | 'arrow'
export interface BreadcrumbItem {
  label: string
  hideLabel?: boolean
  icon?: string
  to?: RouteLocationRaw
}
export interface BreadcrumbsProps {
  items?: BreadcrumbItem[]
}

const props = withDefaults(defineProps<BreadcrumbsProps>(), {})
const route = useRoute()
const router = useRouter()

const items = computed(() => {
  if (props.items) {
    return props.items
  }

  const breadcrumbItems: BreadcrumbItem[] = []
  const indexRoute = router.resolve('/')

  if (indexRoute.meta.breadcrumb === false) {
    // skip breadcrumb item
  } else if (indexRoute.meta.breadcrumb) {
    const breadcrumbItem = indexRoute.meta.breadcrumb
    breadcrumbItems.push({
      to: indexRoute.path,
      ...breadcrumbItem,
    })
  } else if (indexRoute.meta.title) {
    breadcrumbItems.push({
      label: indexRoute.meta.title,
      to: indexRoute.path,
    })
  }

  route.matched.forEach((route) => {
    if (route.meta.breadcrumb === false) {
      // skip breadcrumb item
    } else if (route.meta.breadcrumb) {
      const breadcrumbItem = route.meta.breadcrumb
      breadcrumbItems.push({
        to: route.path,
        ...breadcrumbItem,
      })
    } else if (route.meta.title) {
      breadcrumbItems.push({
        label: route.meta.title,
        to: route.path,
      })
    }
  })

  return breadcrumbItems
})
</script>

<template>
  <nav>
    <ul class="mb-6 flex items-center font-sans text-sm">
      <li v-for="(item, index) in items" :key="index" class="flex items-center">
        <NuxtLink
          :to="item.to"
          class="flex items-center gap-x-1 text-muted-500 transition-colors duration-300 hover:text-primary-500"
        >
          <BaseIcon v-if="item.icon" :name="item.icon" class="block h-4 w-4" />
          <span :class="[item.hideLabel && 'sr-only']">{{ item.label }}</span>
        </NuxtLink>
        <span v-if="index < items.length - 1" class="px-2 text-muted-500">
          <slot>·</slot>
        </span>
      </li>
    </ul>
  </nav>
</template>
