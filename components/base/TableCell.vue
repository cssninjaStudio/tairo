<script setup lang="ts">
export interface TableCellProps {
  light?: boolean
}

const props = withDefaults(defineProps<TableCellProps>(), {
  light: false,
})
</script>

<template>
  <td
    class="whitespace-nowrap py-4 font-alt text-sm"
    :class="
      props.light
        ? 'text-muted-500 dark:text-white'
        : 'font-semibold text-muted-800 dark:text-white'
    "
  >
    <slot></slot>
  </td>
</template>
