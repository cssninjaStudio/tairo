<template>
  <div class="grid gap-6 md:max-w-lg md:grid-cols-2">
    <BaseInputNumber
      v-model="fields.first"
      shape="straight"
      label="Straight input"
      placeholder="Ex: username"
    />

    <BaseInputNumber
      v-model="fields.second"
      shape="rounded"
      label="Rounded input"
      placeholder="Ex: username"
    />

    <BaseInputNumber
      v-model="fields.third"
      shape="curved"
      label="Curved input"
      placeholder="Ex: username"
    />

    <BaseInputNumber
      v-model="fields.fourth"
      shape="full"
      label="Full input"
      placeholder="Ex: username"
    />
  </div>
</template>

<script setup lang="ts">
const fields = reactive({
  first: 0,
  second: 0,
  third: 0,
  fourth: 0,
})
</script>
