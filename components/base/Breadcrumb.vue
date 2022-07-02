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
  items: BreadcrumbItem[]
  separator?: BreadcrumbSeparator
  withIcons?: boolean
}

const props = withDefaults(defineProps<BreadcrumbsProps>(), {
  separator: 'dot',
})
</script>

<template>
  <nav>
    <ul class="flex items-center font-text text-sm mb-6">
      <li
        v-for="(item, index) in props.items"
        :key="index"
        class="flex items-center"
      >
        <NuxtLink
          :to="item.to"
          class="flex items-center gap-x-1 text-slate-500 hover:text-primary-500 transition-colors duration-300"
        >
          <BaseIcon v-if="item.icon" :name="item.icon" class="block w-4 h-4" />
          <span :class="[item.hideLabel && 'sr-only']">{{ item.label }}</span>
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
        <span
          v-else-if="props.separator === 'chevron' && index < items.length - 1"
          class="px-2 text-slate-500"
        >
          <BaseIcon name="lucide:chevron-right" class="block w-3 h-3" />
        </span>
        <span
          v-else-if="props.separator === 'arrow' && index < items.length - 1"
          class="px-2 text-slate-500"
        >
          <BaseIcon name="lucide:arrow-right" class="block w-3 h-3" />
        </span>
      </li>
    </ul>
  </nav>
</template>
