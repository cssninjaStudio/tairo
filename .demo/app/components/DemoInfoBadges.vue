<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    title?: string
    text?: string
    image: string
    badgeSmall?: string
    badgeMedium?: string
  }>(),
  {
    title: undefined,
    text: undefined,
    badgeSmall: undefined,
    badgeMedium: undefined,
  },
)
</script>

<template>
  <div class="flex flex-col h-full">
    <div class="relative mb-4">
      <img
        class="mx-auto size-48 rounded-full"
        :src="props.image"
        :alt="props.title"
      >
      <img
        class="dark:border-muted-800 absolute start-2 top-2 size-14 rounded-full border-2 border-white"
        :src="props.badgeSmall"
        :alt="props.title"
      >
      <img
        class="dark:border-muted-800 absolute bottom-2 end-2 size-16 rounded-full border-2 border-white"
        :src="props.badgeMedium"
        :alt="props.title"
      >
    </div>
    <div class="text-center mt-auto">
      <slot>
        <BaseHeading
          v-if="props.title"
          as="h3"
          size="md"
          weight="medium"
          lead="tight"
          class="text-muted-900 mb-1 dark:text-white"
        >
          <span>{{ props.title }}</span>
        </BaseHeading>
        <BaseParagraph v-if="props.text" size="xs">
          <span class="text-muted-600 dark:text-muted-400">{{ props.text }}</span>
        </BaseParagraph>
      </slot>
    </div>
  </div>
</template>
