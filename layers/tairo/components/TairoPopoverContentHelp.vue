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
    iconColor?: 'default'
    | 'none'
    | 'dark'
    | 'light'
    | 'muted'
    | 'black'
    | 'primary'
    | 'info'
    | 'success'
    | 'warning'
    | 'danger'
    | 'default-contrast'
    | 'muted-contrast'
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
          variant="pastel"
          rounded="none"
          mask="blob"
          class="dark:text-white"
          :color="props.iconColor"
        >
          <Icon :name="props.icon" class="size-5" />
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
    <BaseText
      size="xs"
      lead="snug"
      class="text-muted-400"
    >
      {{ props.text }}
    </BaseText>
  </div>
</template>
