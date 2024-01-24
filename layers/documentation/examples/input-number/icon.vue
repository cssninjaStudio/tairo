<template>
  <div class="grid gap-6 md:max-w-lg md:grid-cols-2">
    <BaseInputNumber
      v-model="fields.first"
      rounded="md"
      label="Your rating"
      icon-increment="lucide:chevron-right"
      icon-decrement="lucide:chevron-left"
      icon="lucide:star"
      :min="0"
      :max="5"
    />

    <BaseInputNumber
      v-model="fields.second"
      rounded="md"
      label="Priority"
      icon-increment="lucide:alarm-plus"
      icon-decrement="lucide:alarm-minus"
      icon="lucide:bell"
      :min="0"
      :max="5"
    />
  </div>
</template>

<script setup lang="ts">
const fields = reactive({
  first: undefined as number | undefined,
  second: undefined as number | undefined,
})
</script>
