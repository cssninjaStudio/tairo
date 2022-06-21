<script setup lang="ts">
export interface TableHeadingProps {
  uppercase?: boolean
}

const props = withDefaults(defineProps<TableHeadingProps>(), {
  uppercase: false,
})
</script>

<template>
  <th
    class="font-main py-3 font-semibold tracking-wider text-left text-gray-700 dark:text-gray-400"
    :class="props.uppercase ? 'uppercase text-xs' : 'text-sm'"
  >
    <slot></slot>
  </th>
</template>
