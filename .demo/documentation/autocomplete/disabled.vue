<script setup lang="ts">
const frameworks = [
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
]

const selectedFramework = ref('')
</script>

<template>
  <BaseAutocomplete
    v-model="selectedFramework"
    :items="frameworks"
    icon="lucide:search"
    shape="full"
    placeholder="Select a framework"
    label="Framework"
    disabled
  />
</template>
