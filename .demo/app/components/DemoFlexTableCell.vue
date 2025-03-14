<script setup lang="ts">
const props = defineProps<{
  label?: string
  hideLabel?: boolean
}>()
</script>

<template>
  <div
    class="relative flex h-8 items-center justify-end px-6 sm:h-10 sm:justify-center sm:px-2"
  >
    <span
      v-if="props.label"
      class="text-muted-400 absolute start-0 top-1/2 mx-auto -translate-y-1/2 text-center font-sans text-xs font-medium uppercase sm:inset-x-0 sm:-top-10 sm:translate-y-0"
      :class="props.hideLabel ? 'sm:hidden' : ''"
    >
      {{ props.label }}
    </span>
    <slot />
  </div>
</template>
