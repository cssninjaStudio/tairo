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
    class="font-alt before:text-muted-400 flex items-center justify-between p-5 text-sm before:font-sans before:text-xs before:font-medium before:uppercase before:content-[attr(data-content)] md:justify-start md:p-4 md:before:hidden"
    :class="[
      props.type === 'grow' && 'md:grow',
      props.type === 'shrink' && 'md:shrink',
      props.type === 'stable' &&
        'sm:w-[90px] md:line-clamp-1 md:w-[110px] md:shrink-0',
      props.light
        ? 'text-muted-500 dark:text-white'
        : 'text-muted-800 dark:text-white',
    ]"
  >
    <slot></slot>
  </div>
</template>
