<script setup lang="ts">
const { isMobileOpen } = createLayoutTopnavContext()
</script>

<template>
  <div class="dark:bg-muted-900 bg-muted-50">
    <slot v-bind="{ isMobileOpen }" />
  </div>
</template>
