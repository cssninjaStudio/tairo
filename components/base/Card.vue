<script setup lang="ts">
export type CardShape = 'straight' | 'rounded' | 'curved'

export interface CardProps {
  shape?: CardShape
}

const props = withDefaults(defineProps<CardProps>(), {
  shape: 'rounded',
})
</script>

<template>
  <div
    class="relative w-full bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-700"
    :class="[
      props.shape === 'rounded' && 'rounded-md',
      props.shape === 'curved' && 'rounded-lg',
    ]"
  >
    <slot></slot>
  </div>
</template>
