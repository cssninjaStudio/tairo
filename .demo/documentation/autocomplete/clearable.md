```vue
<script setup lang="ts">
const frameworks = [
  {
    id: 1,
    name: 'Javascript',
  },
  //...
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
    clearable
  />
</template>
```
