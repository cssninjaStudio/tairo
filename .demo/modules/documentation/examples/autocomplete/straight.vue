<template>
  <BaseAutocomplete
    v-model="selectedFramework"
    :items="frameworks"
    shape="straight"
    placeholder="e.g. Vue.js"
    label="Framework"
  />
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
