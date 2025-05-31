<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    light?: boolean
    spaced?: boolean
  }>(),
  {
    light: false,
    spaced: false,
  },
)
</script>

<template>
  <td
    class="font-sans whitespace-nowrap text-sm"
    :class="[
      props.light
        ? 'text-muted-500 dark:text-white'
        : 'text-muted-800 dark:text-white',
      props.spaced ? 'p-4' : 'py-4',
    ]"
  >
    <slot />
  </td>
</template>
