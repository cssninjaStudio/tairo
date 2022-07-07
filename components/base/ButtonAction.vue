<script setup lang="ts">
import type { RouteLocationRaw } from 'vue-router'

export type ActionShapes = 'straight' | 'rounded' | 'curved' | 'full'

export interface ActionProps {
  type?: 'button' | 'submit' | 'reset'
  to?: RouteLocationRaw
  disabled?: boolean
  rel?: string
  target?: string

  shape?: ActionShapes
  loading?: boolean
  muted?: boolean
}

const props = withDefaults(defineProps<ActionProps>(), {
  flavor: 'solid',
  color: 'default',
  shape: 'rounded',
  to: undefined,
  type: undefined,
})

const shapeClass = computed(() => {
  switch (props.shape) {
    case 'straight':
      return ''
    case 'curved':
      return 'rounded-xl'
    case 'full':
      return 'rounded-full'
    case 'rounded':
    default:
      return 'rounded-md'
  }
})

const colorClass = computed(() => {
  if (props.muted) {
    return [
      'text-muted-500',
      'bg-muted-200',
      'border-muted-200',
      'dark:text-white',
      'dark:bg-muted-700/40',
      'dark:border-muted-700/40',
      'dark:hover:enabled:bg-muted-700/60',
      'hover:enabled:bg-muted-100',
      'dark:active:enabled:border-muted-800',
      'dark:active:enabled:bg-muted-800',
      'active:enabled:bg-muted-200/50',
    ]
  }

  return [
    'text-muted-700',
    'bg-white',
    'border-muted-300',
    'dark:text-white',
    'dark:bg-muted-700',
    'dark:border-muted-600',
    'dark:hover:enabled:bg-muted-600',
    'hover:enabled:bg-muted-50',
    'dark:active:enabled:bg-muted-700/70',
    'active:enabled:bg-muted-100',
  ]
})

const buttonClasses = computed(() => [
  'relative',
  'font-sans font-normal text-sm',
  'inline-flex items-center justify-center',
  'leading-5 no-underline',
  'h-8',
  'px-4 py-2 space-x-1',
  'border',
  'ninja-focus',
  'transition-colors transition-shadow duration-300',
  props.loading && '!text-transparent',
  props.disabled &&
    'disabled:opacity-60 disabled:cursor-not-allowed hover:enabled:shadow-none',
  ...colorClass.value,
  shapeClass.value,
])

const { attributes, is } = useButton(props)
</script>

<template>
  <component :is="is" v-bind="attributes" :class="buttonClasses">
    <slot v-if="!props.loading"></slot>
    <BasePlaceload v-else class="h-3 w-8 rounded" />
  </component>
</template>
