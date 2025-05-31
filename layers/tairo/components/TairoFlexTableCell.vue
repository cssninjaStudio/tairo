<script setup lang="ts">
export type FlexTableCellType = 'grow' | 'shrink' | 'stable'

export interface FlexTableCellProps {
  type?: FlexTableCellType
  light?: boolean
  clamp?: false | 1 | 2 | 3 | 4 | 5 | 6
}

const props = withDefaults(defineProps<FlexTableCellProps>(), {
  type: 'stable',
  clamp: 1,
})

const clampMap = {
  1: 'line-clamp-1',
  2: 'line-clamp-2',
  3: 'line-clamp-3',
  4: 'line-clamp-4',
  5: 'line-clamp-5',
  6: 'line-clamp-6',
}
</script>

<template>
  <div
    class="font-sans before:text-muted-400 flex items-center justify-between p-5 text-sm before:font-sans before:text-xs before:font-medium before:uppercase before:content-[attr(data-content)] md:justify-start md:p-4 md:before:hidden"
    :class="[
      props.type === 'grow' && 'md:grow',
      props.type === 'shrink' && 'md:shrink',
      props.type === 'stable' && 'sm:w-[90px] md:w-[110px] md:shrink-0',
      props.type === 'stable' && props.clamp && clampMap[props.clamp],
      props.light
        ? 'text-muted-500 dark:text-white'
        : 'text-muted-800 dark:text-white',
    ]"
  >
    <slot />
  </div>
</template>
