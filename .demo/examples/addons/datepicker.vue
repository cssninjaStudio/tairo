<script setup lang="ts">
const date = ref(new Date())
</script>

<template>
  <div class="grid grid-cols-1 sm:grid-cols-2">
    <LazyAddonDatepicker v-model="date" />
  </div>
</template>
