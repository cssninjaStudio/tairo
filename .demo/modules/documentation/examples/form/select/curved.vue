<script setup lang="ts">
const selectCurved = ref('')
</script>

<template>
  <BaseSelect
    v-model="selectCurved"
    shape="curved"
    label="Select a hero"
  >
    <option value="">Select a hero</option>
    <option value="Superman">Superman</option>
    <option value="Batman">Batman</option>
    <option value="Iron man">Iron man</option>
    <option value="Magneto">Magneto</option>
    <option value="Cyclops">Cyclops</option>
  </BaseSelect>
</template>
