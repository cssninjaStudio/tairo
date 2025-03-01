<script setup lang="ts">
const props = defineProps<{
  error: any
}>()
</script>

<template>
  <TairoTopnavLayout>
    <TairoError :error="props.error" />
  </TairoTopnavLayout>
</template>
