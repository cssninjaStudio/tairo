<script setup lang="ts">
export type IconBoxSizes = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl'
export type IconBoxShapes = 'rounded' | 'circle'

export interface IconBoxProps {
  shape?: IconBoxShapes
  size?: IconBoxSizes
  bordered?: boolean
}

const props = withDefaults(defineProps<IconBoxProps>(), {
  shape: 'rounded',
  size: 'xs',
})
</script>

<template>
  <div
    class="relative inline-flex items-center justify-center"
    :class="[
      props.size === 'xs' && 'w-8 h-8',
      props.size === 'sm' && 'w-10 h-10',
      props.size === 'md' && 'w-12 h-12',
      props.size === 'lg' && 'w-16 h-16',
      props.size === 'xl' && 'w-20 h-20',
      props.size === '2xl' && 'w-24 h-24',
      props.shape === 'circle' && 'rounded-full',
      props.shape === 'rounded' && props.size === 'xs' && 'rounded-lg',
      props.shape === 'rounded' && props.size === 'sm' && 'rounded-lg',
      props.shape === 'rounded' && props.size === 'md' && 'rounded-xl',
      props.shape === 'rounded' && props.size === 'lg' && 'rounded-xl',
      props.shape === 'rounded' && props.size === 'xl' && 'rounded-2xl',
      props.shape === 'rounded' && props.size === '2xl' && 'rounded-3xl',
      props.bordered && 'border-2 border-current',
    ]"
  >
    <slot></slot>
  </div>
</template>
