<template>
  <div class="grid gap-6 md:max-w-lg md:grid-cols-2">
    <BaseInputNumber
      v-model="value"
      shape="rounded"
      label="Amount"
      icon="lucide:euro"
      disabled
    />
  </div>
</template>

<script setup lang="ts">
const value = ref(12.23)
</script>
