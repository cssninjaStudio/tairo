<script setup lang="ts">
export type BreadcrumbSeparator = 'slash' | 'dot'
export interface BreadcrumbItem {
  label: string
  hideLabel?: boolean
  hideIcon?: boolean
  icon?: string
  to?: any
}
export interface BreadcrumbsProps {
  items: BreadcrumbItem[]
  separator?: BreadcrumbSeparator
  withIcons?: boolean
}

const props = withDefaults(defineProps<BreadcrumbsProps>(), {
  separator: 'dot',
})
</script>

<template>
  <nav
    role="navigation"
    aria-label="breadcrumbs"
    itemtype="https://schema.org/BreadcrumbList"
  >
    <ul class="flex items-center font-text text-sm mb-6">
      <li
        v-for="(item, index) in props.items"
        :key="index"
        class="flex items-center"
      >
        <NuxtLink
          :to="item.to"
          class="block text-slate-500 hover:text-primary-500 transition-colors duration-300"
        >
          <i v-if="item.icon" class="block w-4 h-4" :class="item.icon"></i>
          <span v-if="!item.hideLabel">{{ item.label }}</span>
        </NuxtLink>
        <span
          v-if="props.separator === 'dot' && index < items.length - 1"
          class="px-2 text-slate-500"
        >
          ·
        </span>
        <span
          v-else-if="props.separator === 'slash' && index < items.length - 1"
          class="px-2 text-slate-500"
        >
          /
        </span>
      </li>
    </ul>
  </nav>
</template>
