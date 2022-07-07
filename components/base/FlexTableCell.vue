<script setup lang="ts">
export type FlexTableCellType = 'grow' | 'shrink' | 'stable'

export interface FlexTableCellProps {
  type?: FlexTableCellType
  light?: boolean
}

const props = withDefaults(defineProps<FlexTableCellProps>(), {
  type: 'stable',
})
</script>

<template>
  <div
    class="font-alt text-sm flex items-center justify-between md:justify-start p-5 md:p-4 before:content-[attr(data-content)] md:before:hidden before:font-sans before:font-medium before:text-xs before:uppercase before:text-muted-400"
    :class="[
      props.type === 'grow' && 'md:grow',
      props.type === 'shrink' && 'md:shrink',
      props.type === 'stable' &&
        'md:shrink-0 sm:w-[90px] md:w-[110px] md:line-clamp-1',
      props.light
        ? 'text-muted-500 dark:text-white'
        : 'font-semibold text-muted-800 dark:text-white',
    ]"
  >
    <slot></slot>
  </div>
</template>
