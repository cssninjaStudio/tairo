<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    /**
     * The title of the help popover.
     */
    title: string

    /**
     * The subtitle of the help popover.
     */
    subtitle: string

    /**
     * The text of the help popover.
     */
    text: string

    /**
     * The name of the icon to display.
     */
    icon: string

    /**
     * The color of the icon.
     */
    iconColor?: 'primary' | 'info' | 'success' | 'warning' | 'danger' | 'yellow'
  }>(),
  {
    iconColor: 'primary',
  },
)
</script>

<template>
  <div class="flex w-full flex-col gap-1 p-4">
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
            props.iconColor === 'yellow' &&
              'bg-yellow-100 text-yellow-400 dark:bg-yellow-500',
          ]"
        >
          <Icon :name="props.icon" class="h-5 w-5" />
        </BaseIconBox>
        <div class="ms-2">
          <BaseHeading
            as="h4"
            size="xs"
            weight="semibold"
            lead="tight"
            class="text-muted-800 dark:text-white"
          >
            {{ props.title }}
          </BaseHeading>
          <BaseText size="xs" class="text-muted-400">
            {{ props.subtitle }}
          </BaseText>
        </div>
      </div>
    </div>
    <BaseText size="xs" lead="snug" class="text-muted-400">
      {{ props.text }}
    </BaseText>
  </div>
</template>
