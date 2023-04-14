<template>
  <div class="mt-6 grid gap-6 md:max-w-lg md:grid-cols-2">
    <BaseSelect v-model="first" shape="rounded" label="Select a hero" label-float>
      <option value="">Select a hero</option>

      <option value="Superman">Superman</option>

      <option value="Batman">Batman</option>

      <option value="Iron man">Iron man</option>

      <option value="Magneto">Magneto</option>

      <option value="Cyclops">Cyclops</option>
    </BaseSelect>

    <BaseSelect
      v-model="second"
      shape="rounded"
      label="Select a hero"
      icon="icon-park-outline:muscle"
      label-float
    >
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
const first = ref('')
const second = ref('')
</script>
