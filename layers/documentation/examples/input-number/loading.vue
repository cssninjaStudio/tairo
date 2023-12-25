<template>
  <div class="flex max-w-3xl flex-wrap items-end gap-3">
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
