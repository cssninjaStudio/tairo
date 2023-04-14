<template>
  <BaseFocusLoop class="grid gap-6 md:max-w-lg md:grid-cols-2">
    <BaseSelect v-model="options.first" shape="straight" label="Straight select">
      <option value="">Select a hero</option>

      <option value="Superman">Superman</option>

      <option value="Batman">Batman</option>

      <option value="Iron man">Iron man</option>

      <option value="Magneto">Magneto</option>

      <option value="Cyclops">Cyclops</option>
    </BaseSelect>

    <BaseSelect v-model="options.second" shape="rounded" label="Rounded select">
      <option value="">Select a hero</option>

      <option value="Superman">Superman</option>

      <option value="Batman">Batman</option>

      <option value="Iron man">Iron man</option>

      <option value="Magneto">Magneto</option>

      <option value="Cyclops">Cyclops</option>
    </BaseSelect>

    <BaseSelect v-model="options.third" shape="curved" label="Curved select">
      <option value="">Select a hero</option>

      <option value="Superman">Superman</option>

      <option value="Batman">Batman</option>

      <option value="Iron man">Iron man</option>

      <option value="Magneto">Magneto</option>

      <option value="Cyclops">Cyclops</option>
    </BaseSelect>

    <BaseSelect v-model="options.fourth" shape="full" label="Full select">
      <option value="">Select a hero</option>

      <option value="Superman">Superman</option>

      <option value="Batman">Batman</option>

      <option value="Iron man">Iron man</option>

      <option value="Magneto">Magneto</option>

      <option value="Cyclops">Cyclops</option>
    </BaseSelect>
  </BaseFocusLoop>
</template>

<script setup lang="ts">
const options = reactive({
  first: '',
  second: '',
  third: '',
  fourth: '',
})
</script>
