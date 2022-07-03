<script setup lang="ts">
export type MessageTypes = 'info' | 'success' | 'warning' | 'danger'
export type MessageShapes = 'straight' | 'rounded' | 'curved' | 'full'

export interface MessageProps {
  type?: MessageTypes
  shape?: MessageShapes
  message?: string
  icon?: boolean | string
}

const emit = defineEmits<{
  (event: 'close'): void
}>()
const props = withDefaults(defineProps<MessageProps>(), {
  type: 'success',
  shape: 'curved',
})

const icon = computed(() => {
  if (typeof props.icon === 'string') {
    return props.icon
  }

  switch (props.type) {
    case 'info':
      return 'akar-icons:info-fill'
    case 'warning':
      return 'ci:warning'
    case 'danger':
      return 'ph:warning-octagon-fill'
    case 'success':
    default:
      return 'carbon:checkmark-filled'
  }
})

const shapeClass = computed(() => {
  switch (props.shape) {
    case 'straight':
      return ''
    case 'rounded':
      return 'rounded-md'
    case 'full':
      return 'rounded-full'
    case 'curved':
    default:
      return 'rounded-xl'
  }
})
const messageClasses = computed(() => {
  switch (props.type) {
    case 'info':
      return [
        'bg-info-100',
        'dark:bg-info-500/10',
        'border-info-200',
        'dark:border-info-700',
      ]
    case 'warning':
      return [
        'bg-warning-100',
        'dark:bg-warning-500/10',
        'border-warning-200',
        'dark:border-warning-700',
      ]
    case 'danger':
      return [
        'bg-danger-100',
        'dark:bg-danger-500/10',
        'border-danger-200',
        'dark:border-danger-700',
      ]
    case 'success':
    default:
      return [
        'bg-success-100',
        'dark:bg-success-500/10',
        'border-success-200',
        'dark:border-success-700',
      ]
  }
})
const closeButtonClasses = computed(() => {
  switch (props.type) {
    case 'info':
      return [
        'dark:text-info-500',
        'hover:bg-info-300/50',
        'focus:bg-info-300/50',
        '!active:bg-info-300/20',
        'dark:hover:bg-info-500/30',
        'dark:focus:bg-info-500/30',
        '!dark:active:bg-info-500/20',
      ]
    case 'warning':
      return [
        'dark:text-warning-500',
        'hover:bg-warning-300/50',
        'focus:bg-warning-300/50',
        '!active:bg-warning-300/20',
        'dark:hover:bg-warning-500/30',
        'dark:focus:bg-warning-500/30',
        '!dark:active:bg-warning-500/20',
      ]
    case 'danger':
      return [
        'dark:text-danger-500',
        'hover:bg-danger-300/50',
        'focus:bg-danger-300/50',
        '!active:bg-danger-300/20',
        'dark:hover:bg-danger-500/30',
        'dark:focus:bg-danger-500/30',
        '!dark:active:bg-danger-500/20',
      ]
    case 'success':
    default:
      return [
        'dark:text-success-500',
        'hover:bg-success-300/50',
        'focus:bg-success-300/50',
        '!active:bg-success-300/20',
        'dark:hover:bg-success-500/30',
        'dark:focus:bg-success-500/30',
        '!dark:active:bg-success-500/20',
      ]
  }
})
</script>

<template>
  <div
    class="flex items-center p-1 min-h-[3rem] border"
    :class="[shapeClass, ...messageClasses]"
  >
    <div
      v-if="props.icon"
      class="flex items-center justify-center h-10 w-10"
      :class="[
        shapeClass,
        props.type === 'success' && 'bg-success-500',
        props.type === 'info' && 'bg-info-500',
        props.type === 'warning' && 'bg-warning-500',
        props.type === 'danger' && 'bg-danger-500',
      ]"
    >
      <BaseIcon v-if="icon" :name="icon" class="w-5 h-5 text-white" />
    </div>
    <span
      class="font-text text-sm text-slate-800 ml-3"
      :class="[
        props.type === 'success' && 'dark:text-success-500',
        props.type === 'info' && 'dark:text-info-500',
        props.type === 'warning' && 'dark:text-warning-500',
        props.type === 'danger' && 'dark:text-danger-500',
      ]"
    >
      <slot>{{ props.message }}</slot>
    </span>
    <button
      type="button"
      tabindex="0"
      class="flex items-center justify-center text-slate-800 ml-auto mr-2 cursor-pointer p-1 outline-none"
      :class="[shapeClass, ...closeButtonClasses]"
      @click="emit('close')"
      @keydown.space="emit('close')"
    >
      <slot name="close-button">
        <BaseIcon name="lucide:x" class="w-4 h-4" />
      </slot>
    </button>
  </div>
</template>
