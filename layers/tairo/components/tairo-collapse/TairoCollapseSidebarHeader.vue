<script setup lang="ts">
const { isCollapsed } = useLayoutCollapseContext()
</script>

<template>
  <div class="flex items-center h-14 w-full px-4 shrink-0">
    <slot :is-collapsed="isCollapsed" />
  </div>
</template>
