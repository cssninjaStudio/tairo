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
    class="font-heading py-3 font-semibold tracking-wider text-left text-muted-700 dark:text-muted-400"
    :class="props.uppercase ? 'uppercase text-xs' : 'text-sm'"
  >
    <slot></slot>
  </th>
</template>
