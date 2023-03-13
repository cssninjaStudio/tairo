<script setup lang="ts">
const demoTwo = ref(true)
</script>

<template>
  <BaseCheckbox
    v-model="demoTwo"
    name="demo-2"
    label="Rounded checkbox"
    shape="rounded"
    class="text-gray-500"
  />
</template>
