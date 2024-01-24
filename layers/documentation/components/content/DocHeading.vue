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
      prefix=""
    >
      <template #suffix>
        <Icon name="lucide:hash" class="mt-[0.33rem] size-4" />
      </template>
    </TairoTocAnchor>
  </BaseHeading>
</template>
