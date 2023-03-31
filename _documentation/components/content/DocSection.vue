<script setup lang="ts">
const props = defineProps<{
  tag?: string
  title?: string
}>()
</script>

<template>
  <DocLayoutSection :title="props.title" :tag="props.tag">
    <BaseCard class="mb-4 p-6" v-if="'default' in $slots">
      <BaseProse class="prose-sm">
        <ContentSlot :use="$slots.default"></ContentSlot>
      </BaseProse>
    </BaseCard>

    <div v-if="'grid' in $slots" class="grid gap-4 md:grid-cols-3">
      <ContentSlot :use="$slots.grid"></ContentSlot>
    </div>
  </DocLayoutSection>
</template>
