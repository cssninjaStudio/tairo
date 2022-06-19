<script setup lang="ts">
export type IconButtonShapes = 'straight' | 'rounded' | 'curved' | 'full'

export interface IconButtonProps {
  shape?: IconButtonShapes
  to?: string
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
</script>

<template>
  <button
    v-if="!props.to"
    type="button"
    :disabled="props.disabled"
    class="relative font-text font-normal inline-flex items-center justify-center outline-none leading-5 no-underline space-x-1 h-10 w-10 p-2 text-sm focus:outline-dashed focus:outline-gray-300 dark:focus:outline-gray-600 focus:outline-offset-2 transition-all duration-300"
    :class="[
      props.loading ? '!text-transparent' : '',
      props.disabled
        ? 'disabled:opacity-60 disabled:cursor-not-allowed hover:shadow-none'
        : '',
      props.muted &&
        !props.primary &&
        'text-slate-500 bg-slate-200 dark:text-white dark:bg-gray-700 dark:hover:bg-gray-600 hover:bg-slate-100',

      props.primary &&
        !props.muted &&
        'text-primary-500 border-2 border-primary-500 hover:bg-primary-500/20',
      !props.primary &&
        !props.muted &&
        'text-gray-700 bg-white border border-gray-300 dark:text-white dark:bg-gray-700 dark:hover:bg-gray-600 dark:border-gray-600 hover:bg-gray-50',
      props.shape === 'straight' && '',
      props.shape === 'rounded' && 'rounded-md',
      props.shape === 'curved' && 'rounded-xl',
      props.shape === 'full' && 'rounded-full',
    ]"
  >
    <slot v-if="!props.loading"></slot>
    <BasePlaceload v-else class="h-4 w-4 rounded-md" />
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
      props.muted &&
        !props.primary &&
        'text-slate-500 bg-slate-200 dark:text-white dark:bg-gray-700 dark:hover:bg-gray-600 hover:bg-slate-100',

      props.primary &&
        !props.muted &&
        'text-primary-500 border-2 border-primary-500 hover:bg-primary-500/20',
      !props.primary &&
        !props.muted &&
        'text-gray-700 bg-white border border-gray-300 dark:text-white dark:bg-gray-700 dark:hover:bg-gray-600 dark:border-gray-600 hover:bg-gray-50',
      props.shape === 'straight' && '',
      props.shape === 'rounded' && 'rounded-md',
      props.shape === 'curved' && 'rounded-xl',
      props.shape === 'full' && 'rounded-full',
    ]"
  >
    <slot v-if="!props.loading"></slot>
    <BasePlaceload v-else class="h-4 w-4 rounded-md" />
  </NuxtLink>
</template>
