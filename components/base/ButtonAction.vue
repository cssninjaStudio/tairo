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

const buttonClasses = computed(() => [
  'relative font-text font-normal inline-flex items-center justify-center outline-none leading-5 no-underline space-x-1 h-8 px-4 py-2 text-sm focus:outline-dashed focus:outline-slate-300 dark:focus:outline-slate-600 focus:outline-offset-2 transition-all duration-300',
  props.loading ? '!text-transparent' : '',
  props.disabled
    ? 'disabled:opacity-60 disabled:cursor-not-allowed hover:shadow-none'
    : '',
  props.muted
    ? 'text-slate-500 bg-slate-200 dark:text-white dark:bg-slate-700 dark:hover:bg-slate-600 hover:bg-slate-100'
    : 'text-slate-700 bg-white border border-slate-300 dark:text-white dark:bg-slate-700 dark:hover:bg-slate-600 dark:border-slate-600 hover:bg-slate-50',
  props.shape === 'straight' && '',
  props.shape === 'rounded' && 'rounded-md',
  props.shape === 'curved' && 'rounded-xl',
  props.shape === 'full' && 'rounded-full',
])

const { attributes, is } = useButton(props)
</script>

<template>
  <component :is="is" v-bind="attributes" :class="buttonClasses">
    <slot v-if="!props.loading"></slot>
    <BasePlaceload v-else class="h-3 w-8 rounded" />
  </component>
</template>
