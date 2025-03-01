<script setup lang="ts">
const props = defineProps<{
  error: any
}>()
</script>

<template>
  <TairoSidebarLayout>
    <TairoError :error="props.error" />
  </TairoSidebarLayout>
</template>
