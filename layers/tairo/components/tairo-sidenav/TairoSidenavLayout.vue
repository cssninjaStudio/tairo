<script setup lang="ts">
createLayoutSidenavContext()
</script>

<template>
  <div class="min-h-screen w-full bg-white dark:bg-muted-900">
    <div>
      <slot />
    </div>
    <TairoSidenavBackdrop />
  </div>
</template>
