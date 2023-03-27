<script setup lang="ts">
const selectRounded = ref('')
</script>

<template>
  <BaseSelect v-model="selectRounded" shape="rounded" label="Select a hero">
    <option value="">Select a hero</option>
    <option value="Superman">Superman</option>
    <option value="Batman">Batman</option>
    <option value="Iron man">Iron man</option>
    <option value="Magneto">Magneto</option>
    <option value="Cyclops">Cyclops</option>
  </BaseSelect>
</template>
