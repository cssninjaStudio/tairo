<script setup lang="ts">
const props = defineProps<{
  label: string
}>()
</script>

<template>
  <BaseHeading as="h3" weight="light" size="lg" class="not-prose mt-12">
    <TairoTocAnchor :label="props.label" level="3" prefix="">
      <template #suffix>
        <Icon name="lucide:hash" class="w-4 h-4 mt-[0.33rem]" />
      </template>
    </TairoTocAnchor>
  </BaseHeading>
</template>
