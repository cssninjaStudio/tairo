<script setup lang="ts">
import { useLayoutTopnavContext } from '../composables/topnav'

const { isMobileOpen } = useLayoutTopnavContext()
</script>

<template>
  <div class="flex flex-col dark:bg-muted-950 border-muted-200 dark:border-muted-800 fixed start-0 top-0 z-40 w-full border-b bg-white transition-all duration-300">
    <slot />
  </div>
</template>
