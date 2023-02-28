<script setup lang="ts">
const demoOne = ref(true)
</script>

<template>
  <BaseCheckbox
    v-model="demoOne"
    name="demo-1"
    label="Straight checkbox"
    shape="straight"
    class="text-gray-500"
  />
</template>
