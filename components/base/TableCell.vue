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
    class="font-alt py-4 text-sm whitespace-nowrap"
    :class="
      props.light
        ? 'text-muted-500 dark:text-white'
        : 'font-semibold text-muted-800 dark:text-white'
    "
  >
    <slot></slot>
  </td>
</template>
