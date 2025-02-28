<script setup lang="ts">
const props = defineProps<{
  error: any
}>()
</script>

<template>
  <TairoCollapseLayout>
    <TairoError :error="props.error" />
  </TairoCollapseLayout>
</template>
