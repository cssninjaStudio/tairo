<script setup lang="ts">
const props = defineProps<{
  error: any
}>()

const app = useAppConfig()
</script>

<template>
  <TairoSidebarLayout :sidebar="false">
    <template #toolbar-title>{{ app.tairo.title }}</template>

    <TairoError :error="props.error" />
  </TairoSidebarLayout>
</template>
