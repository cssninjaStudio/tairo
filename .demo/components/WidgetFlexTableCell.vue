<script setup lang="ts">
const props = defineProps<{
  label?: string
  hideLabel?: boolean
  tabletHidden?: boolean
}>()
</script>

<template>
  <div
    class="relative h-8 sm:h-10 flex items-center justify-end sm:justify-center px-6 sm:px-2"
    :class="props.tabletHidden && 'ptablet:hidden'"
  >
    <span
      v-if="props.label"
      class="absolute top-1/2 left-8 sm:-top-10 sm:inset-x-0 -translate-y-1/2 sm:translate-y-0 mx-auto text-center font-sans text-xs font-medium uppercase text-muted-400"
      :class="props.hideLabel ? 'sm:hidden' : ''"
    >
      {{ props.label }}
    </span>
    <slot></slot>
  </div>
</template>
