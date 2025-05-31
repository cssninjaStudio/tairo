<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    title?: string
    text?: string
    image: string
    imageDark?: string
    rounded?: 'none' | 'sm' | 'md' | 'lg'
  }>(),
  {
    title: undefined,
    text: undefined,
    imageDark: undefined,
    rounded: 'sm',
  },
)
</script>

<template>
  <div>
    <DemoPicture
      :src="props.image"
      :image-dark="props.imageDark"
      :height="300"
      :width="300"
      :rounded="props.rounded"
    />
    <div class="mt-3">
      <BaseHeading
        as="h3"
        size="md"
        weight="medium"
        lead="tight"
        class="text-muted-900 mb-1 dark:text-white"
      >
        <span>{{ props.title }}</span>
      </BaseHeading>
      <BaseParagraph size="xs">
        <span class="text-muted-600 dark:text-muted-400">{{ props.text }}</span>
      </BaseParagraph>
    </div>
  </div>
</template>
