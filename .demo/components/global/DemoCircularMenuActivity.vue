<script setup lang="ts">
const { open } = usePanels()
</script>

<template>
  <button
    type="button"
    class="bg-primary-700 flex h-9 w-9 items-center justify-center rounded-full transition-all duration-300"
    @click="open('activity')"
  >
    <Icon name="ph:circles-four-duotone" class="h-5 w-5 text-white" />
  </button>
</template>
