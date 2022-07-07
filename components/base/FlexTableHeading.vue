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
    class="font-sans font-medium text-xs uppercase text-muted-400 p-4"
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
