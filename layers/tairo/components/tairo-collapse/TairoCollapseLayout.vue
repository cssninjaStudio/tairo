<script setup lang="ts">
createLayoutCollapseContext()
</script>

<template>
  <div class="min-h-screen w-full bg-white dark:bg-muted-900">
    <div>
      <slot />
    </div>
    <TairoCollapseBackdrop />
  </div>
</template>
