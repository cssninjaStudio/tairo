<script setup lang="ts">
export type PopoverIconColors =
  | 'primary'
  | 'info'
  | 'success'
  | 'warning'
  | 'danger'

export interface PopoverContentHelpProps {
  title: string
  subtitle: string
  text: string
  icon: string
  iconColor?: PopoverIconColors
}

const props = withDefaults(defineProps<PopoverContentHelpProps>(), {
  iconColor: 'primary',
})
</script>

<template>
  <div class="w-full flex flex-col gap-1 p-4">
    <div class="relative mb-1">
      <div class="flex w-full">
        <BaseIconBox
          size="xs"
          class="dark:text-white"
          :class="[
            props.iconColor === 'primary' &&
              'bg-primary-100 text-primary-500 dark:bg-primary-600',
            props.iconColor === 'info' &&
              'bg-info-100 text-info-500 dark:bg-info-600',
            props.iconColor === 'success' &&
              'bg-success-100 text-success-500 dark:bg-success-600',
            props.iconColor === 'warning' &&
              'bg-warning-100 text-warning-500 dark:bg-warning-600',
            props.iconColor === 'danger' &&
              'bg-danger-100 text-danger-500 dark:bg-danger-600',
          ]"
        >
          <i class="w-5 h-5" :class="props.icon"></i>
        </BaseIconBox>
        <div class="ml-2">
          <BaseHeading
            as="h4"
            size="xs"
            weight="semibold"
            lead="tight"
            class="text-slate-800 dark:text-white"
          >
            {{ props.title }}
          </BaseHeading>
          <BaseText size="xs" class="text-slate-400">
            {{ props.subtitle }}
          </BaseText>
        </div>
      </div>
    </div>
    <BaseText size="xs" lead="snug" class="text-slate-400">
      {{ props.text }}
    </BaseText>
  </div>
</template>
