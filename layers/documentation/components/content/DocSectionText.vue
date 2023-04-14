<script setup lang="ts">
const props = defineProps<{
  tag?: string
  title?: string
}>()
</script>

<template>
  <div
    class="border-muted-200 dark:border-muted-800 mb-10 w-full [&:not(first-child)]:border-t [&:not(first-child)]:pt-10"
  >
    <div class="mb-4">
      <BaseHeading
        as="h2"
        size="xl"
        anchor
        weight="medium"
        class="text-muted-800 dark:text-white"
        v-if="props.title"
      >
        <TairoTocAnchor :label="props.title" />
      </BaseHeading>
    </div>
    <BaseProse
      class="prose-sm prose-p:text-muted-500 dark:prose-p:text-muted-400 max-w-[640px]"
    >
      <ContentSlot :use="$slots.default"></ContentSlot>
    </BaseProse>
  </div>
</template>
