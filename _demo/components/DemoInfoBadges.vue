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
  <div>
    <div class="relative mb-4">
      <img
        class="mx-auto h-48 w-48 rounded-full"
        :src="props.image"
        :alt="props.title"
      />
      <img
        class="dark:border-muted-800 absolute start-2 top-2 h-14 w-14 rounded-full border-2 border-white"
        :src="props.badgeSmall"
        :alt="props.title"
      />
      <img
        class="dark:border-muted-800 absolute bottom-2 end-2 h-16 w-16 rounded-full border-2 border-white"
        :src="props.badgeMedium"
        :alt="props.title"
      />
    </div>
    <div class="text-center">
      <BaseHeading
        as="h3"
        size="md"
        weight="medium"
        lead="tight"
        class="text-muted-800 mb-1 dark:text-white"
      >
        <span>{{ props.title }}</span>
      </BaseHeading>
      <BaseParagraph size="xs">
        <span class="text-muted-400">{{ props.text }}</span>
      </BaseParagraph>
    </div>
  </div>
</template>
