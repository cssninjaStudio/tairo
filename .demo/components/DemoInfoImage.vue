<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    title?: string
    text?: string
    image: string
    imageDark?: string
    shape?: 'straight' | 'rounded' | 'curved'
  }>(),
  {
    title: undefined,
    text: undefined,
    imageDark: undefined,
    shape: 'rounded',
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
      :shape="props.shape"
    />
    <div class="mt-3">
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
