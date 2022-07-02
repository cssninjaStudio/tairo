<script setup lang="ts">
export type MessageTypes = 'info' | 'success' | 'warning' | 'danger'

export type MessageShapes = 'straight' | 'rounded' | 'curved' | 'full'

export interface MessageProps {
  type?: MessageTypes
  shape?: MessageShapes
  message: string
  icon?: boolean
}

const props = withDefaults(defineProps<MessageProps>(), {
  type: 'success',
  shape: 'curved',
})
</script>

<template>
  <div
    class="flex items-center p-1 min-h-[3rem]"
    :class="[
      props.shape === 'rounded' && 'rounded-md',
      props.shape === 'curved' && 'rounded-xl',
      props.shape === 'full' && 'rounded-full',
      props.type === 'success' &&
        'bg-success-100 dark:bg-success-500/10 border border-success-200 dark:border-success-700',
      props.type === 'info' &&
        'bg-info-100 dark:bg-info-500/10  border border-info-200 dark:border-info-700',
      props.type === 'warning' &&
        'bg-warning-100 dark:bg-warning-500/10  border border-warning-200 dark:border-warning-700',
      props.type === 'danger' &&
        'bg-danger-100 dark:bg-danger-500/10  border border-danger-200 dark:border-danger-700',
    ]"
  >
    <div
      v-if="props.icon"
      class="flex items-center justify-center h-10 w-10"
      :class="[
        props.shape === 'rounded' && 'rounded-lg',
        props.shape === 'curved' && 'rounded-xl',
        props.shape === 'full' && 'rounded-full',
        props.type === 'success' && 'bg-success-500',
        props.type === 'info' && 'bg-info-500',
        props.type === 'warning' && 'bg-warning-500',
        props.type === 'danger' && 'bg-danger-500',
      ]"
    >
      <BaseIcon
        v-if="props.type === 'success'"
        name="carbon:checkmark-filled"
        class="w-5 h-5 text-white"
      />
      <BaseIcon
        v-else-if="props.type === 'info'"
        name="akar-icons:info-fill"
        class="w-5 h-5 text-white"
      />
      <BaseIcon
        v-else-if="props.type === 'warning'"
        name="ci:warning"
        class="w-5 h-5 text-white"
      />
      <BaseIcon
        v-else-if="props.type === 'danger'"
        name="ph:warning-octagon-fill"
        class="w-5 h-5 text-white"
      />
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
      {{ props.message }}
    </span>
    <button
      type="button"
      class="flex items-center justify-center text-slate-800 ml-auto mr-3 cursor-pointer"
      :class="[
        props.type === 'success' && 'dark:text-success-500',
        props.type === 'info' && 'dark:text-info-500',
        props.type === 'warning' && 'dark:text-warning-500',
        props.type === 'danger' && 'dark:text-danger-500',
      ]"
    >
      <BaseIcon name="lucide:x" class="w-4 h-4" />
    </button>
  </div>
</template>
