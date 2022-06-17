<script setup lang="ts">
export type ButtonFlavors = 'solid' | 'outline' | 'pastel'
export type ButtonColors =
  | 'default'
  | 'primary'
  | 'info'
  | 'success'
  | 'warning'
  | 'danger'
  | 'muted'
export type ButtonShapes = 'straight' | 'rounded' | 'curved' | 'full'

export interface ButtonProps {
  flavor?: ButtonFlavors
  color?: ButtonColors
  shape?: ButtonShapes
  to?: string
  loading?: boolean
  disabled?: boolean
}

const props = withDefaults(defineProps<ButtonProps>(), {
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
    class="relative font-text font-normal inline-flex items-center justify-center outline-none leading-5 no-underline space-x-1 h-10 px-6 py-2 text-sm focus:outline-dashed focus:outline-gray-300 dark:focus:outline-gray-600 focus:outline-offset-2 transition-all duration-300"
    :class="[
      props.loading ? '!text-transparent' : '',
      props.disabled
        ? 'disabled:opacity-60 disabled:cursor-not-allowed hover:shadow-none'
        : '',
      props.color === 'default' &&
        'text-gray-700 bg-white border border-gray-300 dark:text-white dark:bg-gray-700 dark:hover:bg-gray-600 dark:border-gray-600 hover:bg-gray-50',
      props.color === 'muted' &&
        'text-slate-500 bg-slate-200 dark:text-white dark:bg-gray-700 dark:hover:bg-gray-600 hover:bg-slate-100',
      props.color === 'primary' &&
        props.flavor === 'solid' &&
        'bg-primary-400 dark:bg-primary-500 hover:bg-primary-500 dark:hover:bg-primary-600 text-white hover:shadow-lg hover:shadow-primary-500/50 dark:hover:shadow-primary-800/20',
      props.color === 'info' &&
        props.flavor === 'solid' &&
        'bg-sky-400 dark:bg-sky-500 hover:bg-sky-500 dark:hover:bg-sky-600 text-white hover:shadow-lg hover:shadow-sky-500/50 dark:hover:shadow-sky-800/20',
      props.color === 'success' &&
        props.flavor === 'solid' &&
        'bg-teal-400 dark:bg-teal-500 hover:bg-teal-500 dark:hover:bg-teal-600 text-white hover:shadow-lg hover:shadow-teal-500/50 dark:hover:shadow-teal-800/20',
      props.color === 'warning' &&
        props.flavor === 'solid' &&
        'bg-amber-400 dark:bg-amber-500 hover:bg-amber-500 dark:hover:bg-amber-600 text-white hover:shadow-lg hover:shadow-amber-500/50 dark:hover:shadow-amber-800/20',
      props.color === 'danger' &&
        props.flavor === 'solid' &&
        'bg-rose-400 dark:bg-rose-500 hover:bg-rose-500 dark:hover:bg-rose-600 text-white hover:shadow-lg hover:shadow-rose-500/50 dark:hover:shadow-rose-800/20',
      props.color === 'primary' &&
        props.flavor === 'pastel' &&
        'bg-primary-100 hover:bg-primary-200 text-primary-500 border-2 border-primary-100 dark:border-primary-500 dark:bg-transparent dark:text-primary-500 dark:hover:bg-primary-500/10',
      props.color === 'info' &&
        props.flavor === 'pastel' &&
        'bg-sky-100 hover:bg-sky-200 text-sky-500 border-2 border-sky-100 dark:border-sky-500 dark:bg-transparent dark:text-sky-500 dark:hover:bg-sky-500/10',
      props.color === 'success' &&
        props.flavor === 'pastel' &&
        'bg-teal-100 hover:bg-teal-200 text-teal-500 border-2 border-teal-100 dark:border-teal-500 dark:bg-transparent dark:text-teal-500 dark:hover:bg-teal-500/10',
      props.color === 'warning' &&
        props.flavor === 'pastel' &&
        'bg-amber-100 hover:bg-amber-200 text-amber-500 border-2 border-amber-100 dark:border-amber-500 dark:bg-transparent dark:text-amber-500 dark:hover:bg-amber-500/10',
      props.color === 'danger' &&
        props.flavor === 'pastel' &&
        'bg-rose-100 hover:bg-rose-200 text-rose-500 border-2 border-rose-100 dark:border-rose-500 dark:bg-transparent dark:text-rose-500 dark:hover:bg-rose-500/10',
      props.color === 'primary' &&
        props.flavor === 'outline' &&
        ' text-primary-500 hover:text-white border-2 border-primary-500 hover:bg-primary-500',
      props.color === 'info' &&
        props.flavor === 'outline' &&
        'text-sky-500 hover:text-white border-2 border-sky-500 hover:bg-sky-500',
      props.color === 'success' &&
        props.flavor === 'outline' &&
        'text-teal-500 hover:text-white border-2 border-teal-500 hover:bg-teal-500',
      props.color === 'warning' &&
        props.flavor === 'outline' &&
        'text-amber-500 hover:text-white border-2 border-amber-500 hover:bg-amber-500',
      props.color === 'danger' &&
        props.flavor === 'outline' &&
        'text-rose-500 hover:text-white border-2 border-rose-500 hover:bg-rose-500',
      props.shape === 'straight' && '',
      props.shape === 'rounded' && 'rounded-md',
      props.shape === 'curved' && 'rounded-xl',
      props.shape === 'full' && 'rounded-full',
    ]"
  >
    <slot v-if="!props.loading"></slot>
    <BasePlaceload v-else class="h-4 w-12 rounded" />
  </button>
  <NuxtLink
    v-else
    :to="props.to"
    class="relative font-text font-normal inline-flex items-center justify-center outline-none leading-5 no-underline space-x-1 h-10 px-6 py-2 text-sm focus:outline-dashed focus:outline-gray-300 dark:focus:outline-gray-600 focus:outline-offset-2 transition-all duration-300"
    :class="[
      props.color === 'default' &&
        'text-gray-700 bg-white border border-gray-300 dark:text-white dark:bg-gray-700 dark:hover:bg-gray-600 dark:border-gray-600 hover:bg-gray-50',
      props.shape === 'straight' && '',
      props.shape === 'rounded' && 'rounded-md',
      props.shape === 'curved' && 'rounded-xl',
      props.shape === 'full' && 'rounded-full',
    ]"
  >
    <slot></slot>
  </NuxtLink>
</template>
