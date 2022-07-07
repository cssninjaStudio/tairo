<script setup lang="ts">
export type ProgressColors =
  | 'primary'
  | 'info'
  | 'success'
  | 'warning'
  | 'danger'

export type ProgressShapes = 'straight' | 'rounded' | 'curved' | 'full'
export type ProgressSizes = 'xs' | 'sm' | 'md' | 'lg' | 'xl'

export interface ProgressProps {
  color?: ProgressColors
  shape?: ProgressShapes
  size?: ProgressSizes
  value?: number
  max?: number
}

const props = withDefaults(defineProps<ProgressProps>(), {
  color: 'primary',
  shape: 'full',
  size: 'sm',
  max: 100,
})
const value = computed(() => {
  const { value, max } = props

  if (max === 0) {
    return 0
  }
  return typeof value === 'number' ? (value / max) * 100 : null
})
</script>

<template>
  <div
    role="progressbar"
    :aria-valuenow="value"
    :aria-valuemax="props.max"
    class="relative w-full bg-muted-200 dark:bg-muted-700 overflow-hidden"
    :class="[
      props.size === 'xs' && 'h-1',
      props.size === 'sm' && 'h-2',
      props.size === 'md' && 'h-3',
      props.size === 'lg' && 'h-4',
      props.size === 'xl' && 'h-5',
      props.shape === 'rounded' && 'rounded',
      props.shape === 'curved' && 'rounded-md',
      props.shape === 'full' && 'rounded-full',
    ]"
  >
    <div
      class="absolute top-0 left-0 h-full transition-all duration-300"
      :class="[
        props.color === 'primary' && 'bg-primary-500',
        props.color === 'success' && 'bg-success-500',
        props.color === 'info' && 'bg-info-500',
        props.color === 'warning' && 'bg-warning-500',
        props.color === 'danger' && 'bg-danger-500',
        props.shape === 'rounded' && 'rounded',
        props.shape === 'curved' && 'rounded-md',
        props.shape === 'full' && 'rounded-full',
        value === null && 'animate-indeterminate w-full',
      ]"
      :style="value !== null ? `width: ${value}%` : ''"
    >
      {{ value }}
    </div>
  </div>
</template>
