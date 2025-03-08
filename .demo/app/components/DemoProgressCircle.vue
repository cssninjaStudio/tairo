<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    title?: string
    text?: string
    image: string
    value?: number
    shape?: 'straight' | 'rounded' | 'curved'
  }>(),
  {
    value: 0,
    title: undefined,
    text: undefined,
    shape: 'rounded',
  },
)
</script>

<template>
  <div class="flex flex-col items-center">
    <div class="relative">
      <BaseProgressCircle
        :model-value="props.value"
        :size="140"
        :max="100"
        :thickness="1"
        variant="primary"
      />
      <div
        class="absolute start-1/2 top-1/2 size-16 -translate-x-1/2 -translate-y-1/2"
      >
        <BaseAvatar :src="props.image" size="lg" />
      </div>
    </div>
    <div class="text-center">
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
