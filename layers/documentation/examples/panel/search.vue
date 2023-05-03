<template>
  <div>
    <BaseButton @click="open('search')">Open Panel</BaseButton>
  </div>
</template>

<script setup lang="ts">
const { open } = usePanels()
</script>
