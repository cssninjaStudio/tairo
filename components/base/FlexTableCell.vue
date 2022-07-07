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
    class="flex items-center justify-between p-5 font-alt text-sm before:font-sans before:text-xs before:font-medium before:uppercase before:text-muted-400 before:content-[attr(data-content)] md:justify-start md:p-4 md:before:hidden"
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
