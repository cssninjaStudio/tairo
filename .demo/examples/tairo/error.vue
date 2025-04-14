<script setup lang="ts">
import type { NuxtError } from '#app'

const props = defineProps<{
  error: NuxtError
}>()
</script>

<template>
  <div class="bg-muted-100 dark:bg-muted-900 min-h-screen pt-8">
    <TairoError :error="props.error">
      <TairoLogo class="text-primary-500 mx-auto h-40 p-6" />
    </TairoError>
  </div>
</template>
