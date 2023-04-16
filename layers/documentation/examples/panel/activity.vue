<template>
  <div>
    <BaseButton @click="open('activity')">Open Panel</BaseButton>
  </div>
</template>

<script setup lang="ts">
const { open } = usePanels()
</script>
