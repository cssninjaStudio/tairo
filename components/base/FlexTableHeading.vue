<script setup lang="ts">
export type FlexTableHeadingType = 'grow' | 'shrink' | 'stable'

export interface FlexTableHeadingProps {
  type?: FlexTableHeadingType
}

const props = withDefaults(defineProps<FlexTableHeadingProps>(), {
  type: 'stable',
})
</script>

<template>
  <div
    class="p-4 font-sans text-xs font-medium uppercase text-muted-400"
    :class="[
      props.type === 'grow' && 'md:grow',
      props.type === 'shrink' && 'md:shrink',
      props.type === 'stable' &&
        'md:shrink-0 sm:w-[90px] md:w-[110px] md:line-clamp-1',
    ]"
  >
    <slot></slot>
  </div>
</template>
