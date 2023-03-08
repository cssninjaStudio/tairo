<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    uppercase?: boolean
    spaced?: boolean
  }>(),
  {
    uppercase: false,
    spaced: false,
  }
)
</script>

<template>
  <th
    class="text-muted-700 dark:text-muted-400 text-left font-sans font-semibold tracking-wider"
    :class="[
      props.uppercase ? 'text-xs uppercase' : 'text-sm',
      props.spaced
        ? 'border-r border-muted-200 dark:border-muted-700 last:border-r-none py-5 px-4 bg-white dark:bg-muted-800'
        : 'py-3 bg-muted-50 dark:bg-muted-800',
    ]"
  >
    <slot></slot>
  </th>
</template>
