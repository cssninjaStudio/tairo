<script setup lang="ts">
const { open } = usePanels()
</script>

<template>
  <div>
    <BaseButton @click="open('activity')">
      Open Panel
    </BaseButton>
  </div>
</template>
