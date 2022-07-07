<script setup lang="ts">
export type FlexRowShapes = 'straight' | 'rounded' | 'curved' | undefined

export interface FlexRowProps {
  shape: FlexRowShapes
}

const props = defineProps<FlexRowProps>()
</script>

<template>
  <div
    class="flex flex-col border border-muted-300 bg-white md:flex-row md:items-center md:justify-between"
    :class="[
      props.shape === 'rounded' && 'rounded-md',
      props.shape === 'curved' && 'rounded-xl',
    ]"
  >
    <slot></slot>
  </div>
</template>
