<script setup lang="ts">
export type TagFlavors = 'solid' | 'outline' | 'pastel'
export type TagColors =
  | 'default'
  | 'primary'
  | 'info'
  | 'success'
  | 'warning'
  | 'danger'
  | 'muted'
export type TagShapes = 'straight' | 'rounded' | 'curved' | 'full'

export interface TagProps {
  flavor?: TagFlavors
  color?: TagColors
  shape?: TagShapes
}

const props = withDefaults(defineProps<TagProps>(), {
  flavor: 'solid',
  color: 'default',
  shape: 'rounded',
})
</script>

<template>
  <span
    class="inline-block font-text text-xs py-1.5 px-3 m-1"
    :class="[
      props.color === 'default' &&
        'border border-slate-300 bg-white text-slate-600 dark:bg-slate-800 dark:border-slate-700 dark:text-slate-300',
      props.color === 'muted' &&
        'text-slate-500 bg-slate-200 dark:text-white dark:bg-slate-700',
      props.color === 'primary' &&
        props.flavor === 'solid' &&
        'bg-primary-400 dark:bg-primary-500 text-white hover:shadow-lg',
      props.color === 'info' &&
        props.flavor === 'solid' &&
        'bg-sky-400 dark:bg-sky-500   text-white hover:shadow-lg',
      props.color === 'success' &&
        props.flavor === 'solid' &&
        'bg-teal-400 dark:bg-teal-500  text-white hover:shadow-lg',
      props.color === 'warning' &&
        props.flavor === 'solid' &&
        'bg-amber-400 dark:bg-amber-500 text-white hover:shadow-lg',
      props.color === 'danger' &&
        props.flavor === 'solid' &&
        'bg-rose-400 dark:bg-rose-500 text-white hover:shadow-lg',
      props.color === 'primary' &&
        props.flavor === 'pastel' &&
        'bg-primary-100  text-primary-500 border border-primary-100 dark:border-primary-500 dark:bg-transparent dark:text-primary-500',
      props.color === 'info' &&
        props.flavor === 'pastel' &&
        'bg-sky-100  text-sky-500 border border-sky-100 dark:border-sky-500 dark:bg-transparent dark:text-sky-500',
      props.color === 'success' &&
        props.flavor === 'pastel' &&
        'bg-teal-100  text-teal-500 border border-teal-100 dark:border-teal-500 dark:bg-transparent dark:text-teal-500',
      props.color === 'warning' &&
        props.flavor === 'pastel' &&
        'bg-amber-100  text-amber-500 border border-amber-100 dark:border-amber-500 dark:bg-transparent dark:text-amber-500',
      props.color === 'danger' &&
        props.flavor === 'pastel' &&
        'bg-rose-100  text-rose-500 border border-rose-100 dark:border-rose-500 dark:bg-transparent dark:text-rose-500',
      props.color === 'primary' &&
        props.flavor === 'outline' &&
        ' text-primary-500  border border-primary-500 ',
      props.color === 'info' &&
        props.flavor === 'outline' &&
        'text-sky-500  border border-sky-500',
      props.color === 'success' &&
        props.flavor === 'outline' &&
        'text-teal-500  border border-teal-500',
      props.color === 'warning' &&
        props.flavor === 'outline' &&
        'text-amber-500  border border-amber-500',
      props.color === 'danger' &&
        props.flavor === 'outline' &&
        'text-rose-500  border border-rose-500',
      props.shape === 'straight' && '',
      props.shape === 'rounded' && 'rounded-md',
      props.shape === 'curved' && 'rounded-xl',
      props.shape === 'full' && 'rounded-full',
    ]"
  >
    <slot></slot>
  </span>
</template>
