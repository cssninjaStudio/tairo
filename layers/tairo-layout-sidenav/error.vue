<script setup lang="ts">
const props = defineProps<{
  error: any
}>()
</script>

<template>
  <TairoSidenavLayout>
    <TairoError :error="props.error" />
  </TairoSidenavLayout>
</template>
