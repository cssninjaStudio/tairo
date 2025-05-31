<script setup lang="ts">
const props = defineProps<{
  title?: string
  description?: string
  transparent?: boolean
}>()
</script>

<template>
  <div
    class="px-8 py-12 text-center"
    :class="!props.transparent && 'bg-muted-200/80 dark:bg-muted-950/80'"
  >
    <div class="mx-auto w-full max-w-lg">
      <h3 class="font-heading text-muted-900 mb-2 text-lg dark:text-white">
        {{ props.title }}
      </h3>
      <p class="text-muted-500 dark:text-muted-400 font-sans">
        {{ props.description }}
      </p>
    </div>
    <slot />
  </div>
</template>
