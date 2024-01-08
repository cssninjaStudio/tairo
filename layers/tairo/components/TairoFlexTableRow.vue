<script setup lang="ts">
const props = defineProps<{
  /**
   * The radius of the row.
   */
  rounded?: 'none' | 'sm' | 'md' | 'lg'
}>()
</script>

<template>
  <div
    class="border-muted-200 dark:border-muted-700 dark:bg-muted-800 flex flex-col border bg-white md:flex-row md:items-center md:justify-between"
    :class="[
      props.rounded === 'sm' && 'rounded-md',
      props.rounded === 'md' && 'rounded-lg',
      props.rounded === 'lg' && 'rounded-xl',
    ]"
  >
    <slot />
  </div>
</template>
