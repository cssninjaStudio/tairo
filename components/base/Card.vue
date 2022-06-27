<script setup lang="ts">
export type CardShape = 'straight' | 'rounded' | 'curved'

export interface CardProps {
  shape?: CardShape
  elevated?: boolean
  elevatedHover?: boolean
}

const props = withDefaults(defineProps<CardProps>(), {
  shape: 'rounded',
})
</script>

<template>
  <div
    class="relative w-full bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-700 transition-all duration-300"
    :class="[
      props.shape === 'rounded' && 'rounded-md',
      props.shape === 'curved' && 'rounded-xl',
      props.elevated && !props.elevatedHover && 'shadow-xl',
      props.elevatedHover && !props.elevated && 'hover:shadow-xl',
    ]"
  >
    <slot></slot>
  </div>
</template>
