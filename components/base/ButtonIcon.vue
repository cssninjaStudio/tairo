<script setup lang="ts">
import type { RouteLocationRaw } from 'vue-router'
export type IconButtonShapes = 'straight' | 'rounded' | 'curved' | 'full'

export interface IconButtonProps {
  type?: 'button' | 'submit' | 'reset'
  to?: RouteLocationRaw
  disabled?: boolean
  rel?: string
  target?: string

  shape?: IconButtonShapes
  loading?: boolean
  primary?: boolean
  muted?: boolean
}

const props = withDefaults(defineProps<IconButtonProps>(), {
  flavor: 'solid',
  color: 'default',
  shape: 'rounded',
  to: undefined,
  type: undefined,
})

const iconButtonClasses = computed(() => [
  props.loading ? '!text-transparent' : '',
  props.disabled
    ? 'disabled:opacity-60 disabled:cursor-not-allowed hover:shadow-none'
    : '',
  props.muted &&
    !props.primary &&
    'text-muted-500 bg-muted-200 dark:text-white dark:bg-muted-700 dark:hover:bg-muted-600 hover:bg-muted-100',

  props.primary &&
    !props.muted &&
    'text-primary-500 border-2 border-primary-500 hover:bg-primary-500/20',
  !props.primary &&
    !props.muted &&
    'text-muted-700 bg-white border border-muted-300 dark:text-white dark:bg-muted-700 dark:hover:bg-muted-600 dark:border-muted-600 hover:bg-muted-50',
  props.shape === 'straight' && '',
  props.shape === 'rounded' && 'rounded-md',
  props.shape === 'curved' && 'rounded-xl',
  props.shape === 'full' && 'rounded-full',
])

const { attributes, is } = useButton(props)
</script>

<template>
  <component
    :is="is"
    v-bind="attributes"
    :class="iconButtonClasses"
    class="ninja-focus relative inline-flex h-10 w-10 items-center justify-center space-x-1 p-2 font-sans text-sm font-normal leading-5 no-underline outline-none transition-all duration-300"
  >
    <slot v-if="!props.loading"></slot>
    <BasePlaceload v-else class="h-4 w-4 rounded-md" />
  </component>
</template>
