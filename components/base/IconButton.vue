<script setup lang="ts">
import type { RouteLocationRaw } from 'vue-router'
export type IconButtonShapes = 'straight' | 'rounded' | 'curved' | 'full'

export interface IconButtonProps {
  shape?: IconButtonShapes
  to?: RouteLocationRaw
  loading?: boolean
  disabled?: boolean
  primary?: boolean
  muted?: boolean
}

const props = withDefaults(defineProps<IconButtonProps>(), {
  flavor: 'solid',
  color: 'default',
  shape: 'rounded',
  to: undefined,
})

const NuxtLink = defineNuxtLink({})
const iconButtonClasses = computed(() => [
  props.loading ? '!text-transparent' : '',
  props.disabled
    ? 'disabled:opacity-60 disabled:cursor-not-allowed hover:shadow-none'
    : '',
  props.muted &&
    !props.primary &&
    'text-slate-500 bg-slate-200 dark:text-white dark:bg-slate-700 dark:hover:bg-slate-600 hover:bg-slate-100',

  props.primary &&
    !props.muted &&
    'text-primary-500 border-2 border-primary-500 hover:bg-primary-500/20',
  !props.primary &&
    !props.muted &&
    'text-slate-700 bg-white border border-slate-300 dark:text-white dark:bg-slate-700 dark:hover:bg-slate-600 dark:border-slate-600 hover:bg-slate-50',
  props.shape === 'straight' && '',
  props.shape === 'rounded' && 'rounded-md',
  props.shape === 'curved' && 'rounded-xl',
  props.shape === 'full' && 'rounded-full',
])

const attributes = computed(() => {
  return {
    to: props.disabled ? undefined : props.to,
    disabled: props.disabled,
    class: iconButtonClasses.value,
  }
})
</script>

<template>
  <component
    :is="props.to ? NuxtLink : 'button'"
    v-bind="attributes"
    class="relative font-text font-normal inline-flex items-center justify-center outline-none leading-5 no-underline space-x-1 h-10 w-10 p-2 text-sm focus:outline-dashed focus:outline-slate-300 dark:focus:outline-slate-600 focus:outline-offset-2 transition-all duration-300"
  >
    <slot v-if="!props.loading"></slot>
    <BasePlaceload v-else class="h-4 w-4 rounded-md" />
  </component>
</template>
