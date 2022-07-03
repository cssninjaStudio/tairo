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
      'text-slate-500',
      'bg-slate-200',
      'border-slate-200',
      'dark:text-white',
      'dark:bg-slate-700/40',
      'dark:border-slate-700/40',
      'dark:hover:bg-slate-700/60',
      'hover:bg-slate-100',
      '!dark:active:border-slate-800',
      '!dark:active:bg-slate-800',
      '!active:bg-slate-200/50',
    ]
  }

  return [
    'text-slate-700',
    'bg-white',
    'border-slate-300',
    'dark:text-white',
    'dark:bg-slate-700',
    'dark:border-slate-600',
    'dark:hover:bg-slate-600',
    'hover:bg-slate-50',
    '!dark:active:bg-slate-700/70',
    '!active:bg-slate-100',
  ]
})

const buttonClasses = computed(() => [
  'relative',
  'font-text',
  'font-normal',
  'inline-flex',
  'items-center',
  'justify-center',
  'outline-none',
  'leading-5',
  'no-underline',
  'space-x-1',
  'h-8',
  'px-4',
  'py-2',
  'text-sm',
  'border',
  'tairo-focus',
  'transition-all',
  'duration-300',
  props.loading && '!text-transparent',
  props.disabled &&
    'disabled:opacity-60 disabled:cursor-not-allowed hover:shadow-none',
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
