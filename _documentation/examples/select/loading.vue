<template>
  <div class="grid gap-6 md:max-w-lg md:grid-cols-2">
    <BaseSelect v-model="value" shape="rounded" label="Select a hero" loading>
      <option value="">Select a hero</option>

      <option value="Superman">Superman</option>

      <option value="Batman">Batman</option>

      <option value="Iron man">Iron man</option>

      <option value="Magneto">Magneto</option>

      <option value="Cyclops">Cyclops</option>
    </BaseSelect>
  </div>
</template>

<script setup lang="ts">
const value = ref('')
</script>
