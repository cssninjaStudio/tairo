<script setup lang="ts">
export type FlexRowShapes = 'straight' | 'rounded' | 'curved' | undefined

export interface FlexRowProps {
  shape: FlexRowShapes
}

const props = defineProps<FlexRowProps>()
</script>

<template>
  <div
    class="flex flex-col md:flex-row md:items-center md:justify-between bg-white border border-gray-300"
    :class="[
      props.shape === 'rounded' && 'rounded-md',
      props.shape === 'curved' && 'rounded-xl',
    ]"
  >
    <slot></slot>
  </div>
</template>
