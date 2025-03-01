<script setup lang="ts">
import { createLayoutTopnavContext } from '../composables/topnav'

const context = createLayoutTopnavContext()
</script>

<template>
  <div class="dark:bg-muted-900 bg-muted-50">
    <slot />
  </div>
</template>
