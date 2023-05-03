<script setup lang="ts">
const props = defineProps<{
  error: any
}>()
</script>

<template>
  <div class="bg-muted-100 dark:bg-muted-900 min-h-screen pt-8">
    <TairoError :error="props.error" />
  </div>
</template>
