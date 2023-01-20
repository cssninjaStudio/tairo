<script setup lang="ts">
const props = defineProps<{
  label?: string
  hideLabel?: boolean
}>()
</script>

<template>
  <div
    class="relative h-8 sm:h-10 flex items-center justify-end sm:justify-center px-6 sm:px-2"
  >
    <span
      v-if="props.label"
      class="absolute top-1/2 left-8 sm:-top-8 sm:inset-x-0 -translate-y-1/2 sm:translate-y-0 mx-auto text-center font-sans text-[0.6rem] uppercase"
      :class="
        props.hideLabel ? 'sm:hidden' : 'text-muted-500 dark:text-muted-400'
      "
      >{{ props.label }}</span
    >
    <slot></slot>
  </div>
</template>
