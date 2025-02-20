<script setup lang="ts">
import { useLayoutCollapseContext } from '../composables/collapse'

const { isCollapsed } = useLayoutCollapseContext()
</script>

<template>
  <div class="flex items-center h-14 w-full px-4 shrink-0">
    <slot :is-collapsed="isCollapsed" />
  </div>
</template>
