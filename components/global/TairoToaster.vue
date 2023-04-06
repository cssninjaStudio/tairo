<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    title?: string
    message?: string
    color?: 'primary' | 'success' | 'danger' | 'warning' | 'info' | 'muted'
    icon?: string
    closable?: boolean
  }>(),
  {
    title: undefined,
    message: undefined,
    color: 'muted',
    icon: undefined,
  },
)

const state = useNinjaToasterState()
const { percent, closeIn, endAt } = useNinjaToasterProgress()

const wrapperClasses = computed(() => {
  switch (props.color) {
    case 'primary':
      return 'dark:border-primary-800 border-primary-200'
    case 'success':
      return 'dark:border-success-800 border-success-200'
    case 'danger':
      return 'dark:border-danger-800 border-danger-200'
    case 'warning':
      return 'dark:border-warning-800 border-warning-200'
    case 'info':
      return 'dark:border-info-800 border-info-200'
    case 'muted':
    default:
      return 'dark:border-muted-800 border-muted-200'
  }
})
const progressClasses = computed(() => {
  switch (props.color) {
    case 'primary':
      return 'bg-primary-200 dark:bg-primary-900'
    case 'success':
      return 'bg-success-200 dark:bg-success-900'
    case 'danger':
      return 'bg-danger-200 dark:bg-danger-900'
    case 'warning':
      return 'bg-warning-200 dark:bg-warning-900'
    case 'info':
      return 'bg-info-200 dark:bg-info-900'
    case 'muted':
    default:
      return 'bg-muted-200 dark:bg-muted-900'
  }
})
const iconBgClasses = computed(() => {
  switch (props.color) {
    case 'primary':
      return 'bg-primary-50 dark:bg-primary-700'
    case 'success':
      return 'bg-success-50 dark:bg-success-700'
    case 'danger':
      return 'bg-danger-50 dark:bg-danger-700'
    case 'warning':
      return 'bg-warning-50 dark:bg-warning-700'
    case 'info':
      return 'bg-info-50 dark:bg-info-700'
    case 'muted':
    default:
      return 'bg-muted-50 dark:bg-muted-700'
  }
})
const iconClasses = computed(() => {
  switch (props.color) {
    case 'primary':
      return 'text-primary-400 dark:text-primary-50'
    case 'success':
      return 'text-success-400 dark:text-success-50'
    case 'danger':
      return 'text-danger-400 dark:text-danger-50'
    case 'warning':
      return 'text-warning-400 dark:text-warning-50'
    case 'info':
      return 'text-info-400 dark:text-info-50'
    case 'muted':
    default:
      return 'text-muted-400 dark:text-muted-50'
  }
})
</script>

<template>
  <BaseCard
    class="dark:bg-muted-900 pointer-events-auto relative z-[200] flex border bg-white shadow-md"
    :class="wrapperClasses"
  >
    <div class="absolute inset-x-0 bottom-0 h-1">
      <div
        class="h-1 rounded-es-lg"
        :class="progressClasses"
        :style="{
          width: `${percent * 100}%`,
        }"
      ></div>
    </div>

    <div v-if="props.closable" class="absolute end-2 top-2">
      <BaseButtonClose @click="state.close" />
    </div>

    <div
      v-if="props.icon"
      class="flex w-16 items-center justify-center rounded-s-lg"
      :class="iconBgClasses"
    >
      <Icon :name="props.icon" class="h-6 w-6" :class="iconClasses" />
    </div>
    <div class="text-md min-w-[220px] max-w-xl py-4 pe-12 ps-8">
      <strong
        v-if="props.title"
        class="text-semibold font-heading maw-w-lg block truncate"
      >
        {{ props.title }}
      </strong>
      <p
        v-if="props.message"
        class="text-muted-600 dark:text-muted-400 whitespace-pre-wrap"
      >
        {{ props.message }}
      </p>
    </div>
  </BaseCard>
</template>
