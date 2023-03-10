<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    uppercase?: boolean
    spaced?: boolean
  }>(),
  {
    uppercase: false,
    spaced: false,
  },
)
</script>

<template>
  <th
    class="text-muted-700 dark:text-muted-400 text-left font-sans font-semibold tracking-wider"
    :class="[
      props.uppercase ? 'text-xs uppercase' : 'text-sm',
      props.spaced
        ? 'border-muted-200 dark:border-muted-700 last:border-r-none dark:bg-muted-800 border-r bg-white py-5 px-4'
        : 'bg-muted-50 dark:bg-muted-800 py-3',
    ]"
  >
    <slot></slot>
  </th>
</template>
