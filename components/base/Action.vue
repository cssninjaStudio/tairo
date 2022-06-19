<script setup lang="ts">
export type ActionShapes = 'straight' | 'rounded' | 'curved' | 'full'

export interface ActionProps {
  shape?: ActionShapes
  to?: string
  loading?: boolean
  disabled?: boolean
  muted?: boolean
}

const props = withDefaults(defineProps<ActionProps>(), {
  flavor: 'solid',
  color: 'default',
  shape: 'rounded',
  to: undefined,
})
</script>

<template>
  <button
    v-if="!props.to"
    type="button"
    :disabled="props.disabled"
    class="relative font-text font-normal inline-flex items-center justify-center outline-none leading-5 no-underline space-x-1 h-8 px-4 py-2 text-sm focus:outline-dashed focus:outline-gray-300 dark:focus:outline-gray-600 focus:outline-offset-2 transition-all duration-300"
    :class="[
      props.loading ? '!text-transparent' : '',
      props.disabled
        ? 'disabled:opacity-60 disabled:cursor-not-allowed hover:shadow-none'
        : '',
      props.muted
        ? 'text-slate-500 bg-slate-200 dark:text-white dark:bg-gray-700 dark:hover:bg-gray-600 hover:bg-slate-100'
        : 'text-gray-700 bg-white border border-gray-300 dark:text-white dark:bg-gray-700 dark:hover:bg-gray-600 dark:border-gray-600 hover:bg-gray-50',
      props.shape === 'straight' && '',
      props.shape === 'rounded' && 'rounded-md',
      props.shape === 'curved' && 'rounded-xl',
      props.shape === 'full' && 'rounded-full',
    ]"
  >
    <slot v-if="!props.loading"></slot>
    <BasePlaceload v-else class="h-3 w-8 rounded" />
  </button>
  <NuxtLink
    v-else
    :to="props.to"
    class="relative font-text font-normal inline-flex items-center justify-center outline-none leading-5 no-underline space-x-1 h-10 px-6 py-2 text-sm focus:outline-dashed focus:outline-gray-300 dark:focus:outline-gray-600 focus:outline-offset-2 transition-all duration-300"
    :class="[
      props.loading ? '!text-transparent' : '',
      props.disabled
        ? 'disabled:opacity-60 disabled:cursor-not-allowed hover:shadow-none'
        : '',
      props.muted
        ? 'text-slate-500 bg-slate-200 dark:text-white dark:bg-gray-700 dark:hover:bg-gray-600 hover:bg-slate-100'
        : 'text-gray-700 bg-white border border-gray-300 dark:text-white dark:bg-gray-700 dark:hover:bg-gray-600 dark:border-gray-600 hover:bg-gray-50',
      props.shape === 'straight' && '',
      props.shape === 'rounded' && 'rounded-md',
      props.shape === 'curved' && 'rounded-xl',
      props.shape === 'full' && 'rounded-full',
    ]"
  >
    <slot v-if="!props.loading"></slot>
    <BasePlaceload v-else class="h-3 w-8 rounded" />
  </NuxtLink>
</template>
