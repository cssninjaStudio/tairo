<script setup lang="ts">
const props = defineProps<{
  error: any
}>()
</script>

<template>
  <TairoSidebarLayoutDev>
    <TairoError :error="props.error" />
  </TairoSidebarLayoutDev>
</template>
