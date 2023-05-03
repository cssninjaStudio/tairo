<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    hoverable?: boolean
  }>(),
  {
    hoverable: true,
  },
)
</script>

<template>
  <tr
    :class="[
      props.hoverable
        ? 'hover:bg-muted-50 dark:hover:bg-muted-900 transition-colors duration-300'
        : '',
    ]"
  >
    <slot></slot>
  </tr>
</template>
