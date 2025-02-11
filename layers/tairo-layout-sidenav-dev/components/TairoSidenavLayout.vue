<script setup lang="ts">
import { createLayoutSidenavContext } from '../composables/sidenav'

const context = createLayoutSidenavContext()
</script>

<template>
  <div class="min-h-screen w-full bg-white dark:bg-muted-900">
    <div>
      <slot />
    </div>
    <TairoSidenavBackdrop />
  </div>
</template>
