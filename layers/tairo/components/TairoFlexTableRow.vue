<script setup lang="ts">
const props = defineProps<{
  /**
   * The shape of the row.
   */
  shape?: 'straight' | 'rounded' | 'curved'
}>()
</script>

<template>
  <div
    class="border-muted-200 dark:border-muted-700 dark:bg-muted-800 flex flex-col border bg-white md:flex-row md:items-center md:justify-between"
    :class="[
      props.shape === 'rounded' && 'rounded-md',
      props.shape === 'curved' && 'rounded-xl',
    ]"
  >
    <slot></slot>
  </div>
</template>
