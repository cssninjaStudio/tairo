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
    class="m-1 inline-block py-1.5 px-3 font-sans text-xs"
    :class="[
      props.color === 'default' &&
        'border border-muted-300 bg-white text-muted-600 dark:bg-muted-800 dark:border-muted-700 dark:text-muted-300',
      props.color === 'muted' &&
        'text-muted-500 bg-muted-200 dark:text-white dark:bg-muted-700',
      props.color === 'primary' &&
        props.flavor === 'solid' &&
        'bg-primary-400 dark:bg-primary-500 text-white',
      props.color === 'info' &&
        props.flavor === 'solid' &&
        'bg-info-400 dark:bg-info-500   text-white',
      props.color === 'success' &&
        props.flavor === 'solid' &&
        'bg-success-400 dark:bg-success-500  text-white',
      props.color === 'warning' &&
        props.flavor === 'solid' &&
        'bg-warning-400 dark:bg-warning-500 text-white',
      props.color === 'danger' &&
        props.flavor === 'solid' &&
        'bg-danger-400 dark:bg-danger-500 text-white',
      props.color === 'primary' &&
        props.flavor === 'pastel' &&
        'bg-primary-100  text-primary-500 border border-primary-100 dark:border-primary-500 dark:bg-transparent dark:text-primary-500',
      props.color === 'info' &&
        props.flavor === 'pastel' &&
        'bg-info-100  text-info-500 border border-info-100 dark:border-info-500 dark:bg-transparent dark:text-info-500',
      props.color === 'success' &&
        props.flavor === 'pastel' &&
        'bg-success-100  text-success-500 border border-success-100 dark:border-success-500 dark:bg-transparent dark:text-success-500',
      props.color === 'warning' &&
        props.flavor === 'pastel' &&
        'bg-warning-100  text-warning-500 border border-warning-100 dark:border-warning-500 dark:bg-transparent dark:text-warning-500',
      props.color === 'danger' &&
        props.flavor === 'pastel' &&
        'bg-danger-100  text-danger-500 border border-danger-100 dark:border-danger-500 dark:bg-transparent dark:text-danger-500',
      props.color === 'primary' &&
        props.flavor === 'outline' &&
        ' text-primary-500  border border-primary-500 ',
      props.color === 'info' &&
        props.flavor === 'outline' &&
        'text-info-500  border border-info-500',
      props.color === 'success' &&
        props.flavor === 'outline' &&
        'text-success-500  border border-success-500',
      props.color === 'warning' &&
        props.flavor === 'outline' &&
        'text-warning-500  border border-warning-500',
      props.color === 'danger' &&
        props.flavor === 'outline' &&
        'text-danger-500  border border-danger-500',
      props.shape === 'straight' && '',
      props.shape === 'rounded' && 'rounded-md',
      props.shape === 'curved' && 'rounded-xl',
      props.shape === 'full' && 'rounded-full',
    ]"
  >
    <slot></slot>
  </span>
</template>
