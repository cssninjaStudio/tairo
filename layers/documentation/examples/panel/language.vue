<template>
  <div>
    <BaseButton @click="open('language')">Open Panel</BaseButton>
  </div>
</template>

<script setup lang="ts">
const { open } = usePanels()
</script>
