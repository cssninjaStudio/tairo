<template>
  <div class="grid sm:grid-cols-2 gap-4">
    <BaseAutocomplete
      v-model="selectedFramework"
      :items="frameworks"
      icon="lucide:search"
      shape="curved"
      placeholder="Select a framework"
      label="Framework"
      label-float
    />
    <BaseAutocomplete
      v-model="selectedFramework"
      :items="frameworks"
      clearable
      shape="curved"
      placeholder="Select a framework"
      label="Framework"
      label-float
    />
  </div>
</template>

<script setup lang="ts">
// demo data for the autocomplete
const selectedFramework = ref('')
const frameworks = ref([
  {
    id: 1,
    name: 'Javascript',
  },
  {
    id: 2,
    name: 'Vue.js',
  },
  {
    id: 3,
    name: 'React.js',
  },
  {
    id: 4,
    name: 'Angular',
  },
  {
    id: 5,
    name: 'Alpine.js',
  },
])
</script>
