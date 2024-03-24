<template>
  <div class="flex max-w-3xl flex-col flex-wrap gap-3 md:flex-row md:items-end">
    <div class="flex-1">
      <BaseInputNumber
        v-model="value"
        size="sm"
        rounded="md"
        label="Amount"
        icon="lucide:euro"
        loading
      />
    </div>

    <div class="flex-1">
      <BaseInputNumber
        v-model="value"
        size="md"
        rounded="md"
        label="Amount"
        icon="lucide:euro"
        loading
      />
    </div>

    <div class="flex-1">
      <BaseInputNumber
        v-model="value"
        size="lg"
        rounded="md"
        label="Amount"
        icon="lucide:euro"
        loading
      />
    </div>
  </div>
</template>

<script setup lang="ts">
const value = ref(12.23)
</script>
