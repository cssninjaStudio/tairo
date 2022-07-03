<script setup lang="ts">
import type { RouteLocationRaw } from 'vue-router'

export type ButtonFlavors = 'solid' | 'outline' | 'pastel'
export type ButtonColors =
  | 'default'
  | 'primary'
  | 'info'
  | 'success'
  | 'warning'
  | 'danger'
export type ButtonShapes = 'straight' | 'rounded' | 'curved' | 'full'

export interface ButtonProps {
  type?: 'button' | 'submit' | 'reset'
  to?: RouteLocationRaw
  disabled?: boolean
  rel?: string
  target?: string

  flavor?: ButtonFlavors
  color?: ButtonColors
  shape?: ButtonShapes
  loading?: boolean
  muted?: boolean
}

const props = withDefaults(defineProps<ButtonProps>(), {
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
const colorClasses = computed(() => {
  if (props.muted) {
    return [
      'border',
      'text-slate-500',
      'bg-slate-200',
      'border-slate-200',
      'dark:text-white',
      'dark:bg-slate-700',
      'dark:border-slate-700',
      'dark:hover:bg-slate-600',
      'dark:focus:bg-slate-600',
      'hover:bg-slate-100',
      'focus:bg-slate-100',
    ]
  }

  if (props.color === 'default') {
    return [
      'text-slate-700',
      'bg-white',
      'border',
      'border-slate-300',
      'dark:text-white',
      'dark:bg-slate-700',
      'dark:border-slate-600',
      'dark:border-slate-600',
      'dark:hover:bg-slate-600',
      'dark:focus:bg-slate-600',
      '!dark:active:bg-slate-700/90',
      'hover:bg-slate-50',
      'focus:bg-slate-50',
      '!active:bg-slate-100',
    ]
  }

  if (props.flavor === 'solid') {
    switch (props.color) {
      case 'info':
        return [
          'bg-sky-400',
          'dark:bg-sky-500',
          'text-white',
          'dark:text-white',
          'hover:bg-sky-500',
          'dark:hover:bg-sky-600',
          'hover:shadow-lg',
          'hover:shadow-sky-500/50',
          'dark:hover:shadow-sky-800/20',
        ]
      case 'success':
        return [
          'bg-teal-400',
          'dark:bg-teal-500',
          'hover:bg-teal-500',
          'dark:hover:bg-teal-600',
          'text-white',
          'hover:shadow-lg',
          'hover:shadow-teal-500/50',
          'dark:hover:shadow-teal-800/20',
        ]
      case 'warning':
        return [
          'bg-amber-400',
          'dark:bg-amber-500',
          'hover:bg-amber-500',
          'dark:hover:bg-amber-600',
          'text-white',
          'hover:shadow-lg',
          'hover:shadow-amber-500/50',
          'dark:hover:shadow-amber-800/20',
        ]
      case 'danger':
        return [
          'bg-rose-400',
          'dark:bg-rose-500',
          'hover:bg-rose-500',
          'dark:hover:bg-rose-600',
          'text-white',
          'hover:shadow-lg',
          'hover:shadow-rose-500/50',
          'dark:hover:shadow-rose-800/20',
        ]
      case 'primary':
      default:
        return [
          'bg-primary-400',
          'dark:bg-primary-500',
          'hover:bg-primary-500',
          'dark:hover:bg-primary-600',
          'text-white',
          'hover:shadow-lg',
          'hover:shadow-primary-500/50',
          'dark:hover:shadow-primary-800/20',
        ]
    }
  } else if (props.flavor === 'pastel') {
    switch (props.color) {
      case 'info':
        return [
          'bg-sky-100',
          'hover:bg-sky-200',
          'text-sky-500',
          'border-2',
          'border-sky-100',
          'dark:border-sky-500',
          'dark:bg-transparent',
          'dark:text-sky-500',
          'dark:hover:bg-sky-500/10',
        ]
      case 'success':
        return [
          'bg-teal-100',
          'hover:bg-teal-200',
          'text-teal-500',
          'border-2',
          'border-teal-100',
          'dark:border-teal-500',
          'dark:bg-transparent',
          'dark:text-teal-500',
          'dark:hover:bg-teal-500/10',
        ]
      case 'warning':
        return [
          'bg-amber-100',
          'hover:bg-amber-200',
          'text-amber-500',
          'border-2',
          'border-amber-100',
          'dark:border-amber-500',
          'dark:bg-transparent',
          'dark:text-amber-500',
          'dark:hover:bg-amber-500/10',
        ]
      case 'danger':
        return [
          'bg-rose-100',
          'hover:bg-rose-200',
          'text-rose-500',
          'border-2',
          'border-rose-100',
          'dark:border-rose-500',
          'dark:bg-transparent',
          'dark:text-rose-500',
          'dark:hover:bg-rose-500/10',
        ]
      case 'primary':
      default:
        return [
          'bg-primary-100',
          'hover:bg-primary-200',
          'text-primary-500',
          'border-2',
          'border-primary-100',
          'dark:border-primary-500',
          'dark:bg-transparent',
          'dark:text-primary-500',
          'dark:hover:bg-primary-500/10',
        ]
    }
  } else if (props.flavor === 'outline') {
    switch (props.color) {
      case 'info':
        return [
          'text-sky-500',
          'hover:text-white',
          'border-2',
          'border-sky-500',
          'hover:bg-sky-500',
        ]
      case 'success':
        return [
          'text-teal-500',
          'hover:text-white',
          'border-2',
          'border-teal-500',
          'hover:bg-teal-500',
        ]
      case 'warning':
        return [
          'text-amber-500',
          'hover:text-white',
          'border-2',
          'border-amber-500',
          'hover:bg-amber-500',
        ]
      case 'danger':
        return [
          'text-rose-500',
          'hover:text-white',
          'border-2',
          'border-rose-500',
          'hover:bg-rose-500',
        ]
      case 'primary':
      default:
        return [
          'text-primary-500',
          'hover:text-white',
          'border-2',
          'border-primary-500',
          'hover:bg-primary-500',
        ]
    }
  }

  return []
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
  'h-10',
  'px-5',
  'py-2',
  'text-sm',
  'focus:outline-dashed',
  'focus:outline-slate-300',
  'dark:focus:outline-slate-600',
  'focus:outline-offset-2',
  'transition-all',
  'duration-300',
  props.loading && '!text-transparent',
  props.disabled &&
    'disabled:opacity-60 disabled:cursor-not-allowed hover:shadow-none',
  shapeClass.value,
  ...colorClasses.value,
])

const { attributes, is } = useButton(props)
</script>

<template>
  <component :is="is" v-bind="attributes" :class="buttonClasses">
    <slot v-if="!props.loading"></slot>
    <BasePlaceload v-else class="h-4 w-12 rounded" />
  </component>
</template>
