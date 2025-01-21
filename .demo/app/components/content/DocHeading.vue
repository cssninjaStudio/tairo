<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    label: string
    level?: number | string
  }>(),
  {
    label: '',
    level: 3,
  },
)
</script>

<template>
  <BaseHeading
    as="h3"
    weight="light"
    size="lg"
    class="not-prose mt-12"
  >
    <TairoTocAnchor
      :label="props.label"
      :level="props.level"
      prefix="•"
      prefix-classes="opacity-30 group-hover/toc:opacity-100 group-focus/toc:opacity-100 group-visible/toc:opacity-100 text-primary-500 absolute -start-3.5 -top-1"
    />
  </BaseHeading>
</template>
