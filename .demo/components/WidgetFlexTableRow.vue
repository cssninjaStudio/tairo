<script setup lang="ts">
const props = defineProps<{
  shape?: 'straight' | 'rounded' | 'curved'
}>()
</script>

<template>
  <BaseCard :shape="props.shape" class="relative py-6 sm:py-2">
    <slot></slot>
    <div class="w-full flex flex-col sm:flex-row sm:items-center">
      <slot name="start"></slot>
      <div class="flex flex-col sm:flex-row sm:items-center gap-2">
        <slot name="end"></slot>
      </div>
    </div>
  </BaseCard>
</template>
