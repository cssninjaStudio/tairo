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
      'text-muted-500',
      'bg-muted-200',
      'border-muted-200',
      'dark:text-white',
      'dark:bg-muted-700',
      'dark:border-muted-700',
      'dark:hover:enabled:bg-muted-600',
      'dark:focus-visible:bg-muted-600',
      'hover:enabled:bg-muted-100',
      'focus-visible:bg-muted-100',
      'active:enabled:bg-muted-200',
      'dark:active:enabled:bg-muted-700',
    ]
  }

  if (props.color === 'default') {
    return [
      'text-muted-700',
      'bg-white',
      'border',
      'border-muted-300',
      'dark:text-white',
      'dark:bg-muted-700',
      'dark:border-muted-600',
      'dark:border-muted-600',
      'dark:hover:enabled:bg-muted-600',
      'dark:focus-visible:bg-muted-600',
      'dark:active:enabled:bg-muted-700',
      'hover:enabled:bg-muted-50',
      'focus-visible:bg-muted-50',
      'active:enabled:bg-white',
    ]
  }

  if (props.flavor === 'solid') {
    switch (props.color) {
      case 'info':
        return [
          'bg-info-400',
          'dark:bg-info-500',
          'text-white',
          'hover:enabled:bg-info-500',
          'dark:hover:enabled:bg-info-600',
          'hover:enabled:shadow-lg',
          'hover:enabled:shadow-info-500/50',
          'dark:hover:enabled:shadow-info-800/20',
          'focus-visible:outline-info-400/70',
          'focus-within:outline-info-400/70',
          'focus-visible:bg-info-500',
          'active:enabled:bg-info-400',
          'dark:focus-visible:outline-info-400/70',
          'dark:focus-within:outline-info-400/70',
          'dark:focus-visible:bg-info-600',
          'dark:active:enabled:bg-info-500',
        ]
      case 'success':
        return [
          'bg-success-400',
          'dark:bg-success-500',
          'hover:enabled:bg-success-500',
          'dark:hover:enabled:bg-success-600',
          'text-white',
          'hover:enabled:shadow-lg',
          'hover:enabled:shadow-success-500/50',
          'dark:hover:enabled:shadow-success-800/20',
          'focus-visible:outline-success-400/70',
          'focus-within:outline-success-400/70',
          'focus-visible:bg-success-500',
          'active:enabled:bg-success-400',
          'dark:focus-visible:outline-success-400/70',
          'dark:focus-within:outline-success-400/70',
          'dark:focus-visible:bg-success-600',
          'dark:active:enabled:bg-success-500',
        ]
      case 'warning':
        return [
          'bg-warning-400',
          'dark:bg-warning-500',
          'hover:enabled:bg-warning-500',
          'dark:hover:enabled:bg-warning-600',
          'text-white',
          'hover:enabled:shadow-lg',
          'hover:enabled:shadow-warning-500/50',
          'dark:hover:enabled:shadow-warning-800/20',
          'focus-visible:outline-warning-400/70',
          'focus-within:outline-warning-400/70',
          'focus-visible:bg-warning-500',
          'active:enabled:bg-warning-400',
          'dark:focus-visible:outline-warning-400',
          'dark:focus-within:outline-warning-400',
          'dark:focus-visible:bg-warning-600',
          'dark:active:enabled:bg-warning-500',
        ]
      case 'danger':
        return [
          'bg-danger-400',
          'dark:bg-danger-500',
          'hover:enabled:bg-danger-500',
          'dark:hover:enabled:bg-danger-600',
          'text-white',
          'hover:enabled:shadow-lg',
          'hover:enabled:shadow-danger-500/50',
          'dark:hover:enabled:shadow-danger-800/20',
          'focus-visible:outline-danger-400/70',
          'focus-within:outline-danger-400/70',
          'focus-visible:bg-danger-500',
          'active:enabled:bg-danger-400',
          'dark:focus-visible:outline-danger-400',
          'dark:focus-within:outline-danger-400',
          'dark:focus-visible:bg-danger-600',
          'dark:active:enabled:bg-danger-500',
        ]
      case 'primary':
      default:
        return [
          'bg-primary-400',
          'dark:bg-primary-500',
          'hover:enabled:bg-primary-500',
          'dark:hover:enabled:bg-primary-600',
          'text-white',
          'hover:enabled:shadow-lg',
          'hover:enabled:shadow-primary-500/50',
          'dark:hover:enabled:shadow-primary-800/20',
          'focus-visible:outline-primary-400/70',
          'focus-within:outline-primary-400/70',
          'focus-visible:bg-primary-500',
          'active:enabled:bg-primary-400',
          'dark:focus-visible:outline-primary-400',
          'dark:focus-within:outline-primary-400',
          'dark:focus-visible:bg-primary-600',
          'dark:active:enabled:bg-primary-500',
        ]
    }
  } else if (props.flavor === 'pastel') {
    switch (props.color) {
      case 'info':
        return [
          'bg-info-100',
          'hover:enabled:bg-info-200',
          'text-info-500',
          'border-2',
          'border-info-100',
          'dark:border-info-500',
          'dark:bg-transparent',
          'dark:text-info-500',
          'dark:hover:enabled:bg-info-500/10',
          'focus-visible:outline-info-400/70',
          'focus-within:outline-info-400/70',
          'focus-visible:bg-info-200',
          'active:enabled:bg-info-100',
          'dark:focus-visible:outline-info-400/70',
          'dark:focus-within:outline-info-400/70',
          'dark:focus-visible:bg-info-500/10',
          'dark:active:enabled:bg-transparent',
        ]
      case 'success':
        return [
          'bg-success-100',
          'hover:enabled:bg-success-200',
          'text-success-500',
          'border-2',
          'border-success-100',
          'dark:border-success-500',
          'dark:bg-transparent',
          'dark:text-success-500',
          'dark:hover:enabled:bg-success-500/10',
          'focus-visible:outline-success-400/70',
          'focus-within:outline-success-400/70',
          'focus-visible:bg-success-200',
          'active:enabled:bg-success-100',
          'dark:focus-visible:outline-success-400/70',
          'dark:focus-within:outline-success-400/70',
          'dark:focus-visible:bg-success-500/10',
          'dark:active:enabled:bg-transparent',
        ]
      case 'warning':
        return [
          'bg-warning-100',
          'hover:enabled:bg-warning-200',
          'text-warning-500',
          'border-2',
          'border-warning-100',
          'dark:border-warning-500',
          'dark:bg-transparent',
          'dark:text-warning-500',
          'dark:hover:enabled:bg-warning-500/10',
          'focus-visible:outline-warning-400/70',
          'focus-within:outline-warning-400/70',
          'focus-visible:bg-warning-200',
          'active:enabled:bg-warning-100',
          'dark:focus-visible:outline-warning-400/70',
          'dark:focus-within:outline-warning-400/70',
          'dark:focus-visible:bg-warning-500/10',
          'dark:active:enabled:bg-transparent',
        ]
      case 'danger':
        return [
          'bg-danger-100',
          'hover:enabled:bg-danger-200',
          'text-danger-500',
          'border-2',
          'border-danger-100',
          'dark:border-danger-500',
          'dark:bg-transparent',
          'dark:text-danger-500',
          'dark:hover:enabled:bg-danger-500/10',
          'focus-visible:outline-danger-400/70',
          'focus-within:outline-danger-400/70',
          'focus-visible:bg-danger-200',
          'active:enabled:bg-danger-100',
          'dark:focus-visible:outline-danger-400/70',
          'dark:focus-within:outline-danger-400/70',
          'dark:focus-visible:bg-danger-500/10',
          'dark:active:enabled:bg-transparent',
        ]
      case 'primary':
      default:
        return [
          'bg-primary-100',
          'hover:enabled:bg-primary-200',
          'text-primary-500',
          'border-2',
          'border-primary-100',
          'dark:border-primary-500',
          'dark:bg-transparent',
          'dark:text-primary-500',
          'dark:hover:enabled:bg-primary-500/10',
          'focus-visible:outline-primary-400/70',
          'focus-within:outline-primary-400/70',
          'focus-visible:bg-primary-200',
          'active:enabled:bg-primary-100',
          'dark:focus-visible:outline-primary-400/70',
          'dark:focus-within:outline-primary-400/70',
          'dark:focus-visible:bg-primary-500/10',
          'dark:active:enabled:bg-transparent',
        ]
    }
  } else if (props.flavor === 'outline') {
    switch (props.color) {
      case 'info':
        return [
          'text-info-500',
          'hover:enabled:text-white',
          'border-2',
          'border-info-500',
          'hover:enabled:bg-info-500',
          'focus-within:outline-info-400/70',
          'focus-visible:outline-info-400/70',
          'focus-visible:bg-info-500',
          'focus-visible:text-white',
          'active:enabled:text-info-500',
          'active:enabled:bg-transparent',
        ]
      case 'success':
        return [
          'text-success-500',
          'hover:enabled:text-white',
          'border-2',
          'border-success-500',
          'hover:enabled:bg-success-500',
          'focus-within:outline-success-400/70',
          'focus-visible:outline-success-400/70',
          'focus-visible:bg-success-500',
          'focus-visible:text-white',
          'active:enabled:text-success-500',
          'active:enabled:bg-transparent',
        ]
      case 'warning':
        return [
          'text-warning-500',
          'hover:enabled:text-white',
          'border-2',
          'border-warning-500',
          'hover:enabled:bg-warning-500',
          'focus-within:outline-warning-400/70',
          'focus-visible:outline-warning-400/70',
          'focus-visible:bg-warning-500',
          'focus-visible:text-white',
          'active:enabled:text-warning-500',
          'active:enabled:bg-transparent',
        ]
      case 'danger':
        return [
          'text-danger-500',
          'hover:enabled:text-white',
          'border-2',
          'border-danger-500',
          'hover:enabled:bg-danger-500',
          'focus-within:outline-danger-400/70',
          'focus-visible:outline-danger-400/70',
          'focus-visible:bg-danger-500',
          'focus-visible:text-white',
          'active:enabled:text-danger-500',
          'active:enabled:bg-transparent',
        ]
      case 'primary':
      default:
        return [
          'text-primary-500',
          'hover:enabled:text-white',
          'border-2',
          'border-primary-500',
          'hover:enabled:bg-primary-500',
          'focus-within:outline-primary-400/70',
          'focus-visible:outline-primary-400/70',
          'focus-visible:bg-primary-500',
          'focus-visible:text-white',
          'active:enabled:text-primary-500',
          'active:enabled:bg-transparent',
        ]
    }
  }

  return []
})
const buttonClasses = computed(() => [
  'relative',
  'font-sans font-normal text-sm no-underline',
  'inline-flex justify-center items-center',
  'leading-5',
  'h-10',
  'px-5 py-2 space-x-1',
  'ninja-focus',
  'transition-colors transition-shadow',
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
