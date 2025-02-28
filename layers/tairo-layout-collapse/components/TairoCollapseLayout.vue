<script setup lang="ts">
import { createLayoutCollapseContext } from '../composables/collapse'

const context = createLayoutCollapseContext()
</script>

<template>
  <div class="min-h-screen w-full bg-white dark:bg-muted-900">
    <div>
      <slot />
    </div>
    <TairoCollapseBackdrop />
  </div>
</template>
