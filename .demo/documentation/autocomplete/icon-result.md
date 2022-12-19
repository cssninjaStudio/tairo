```vue
<script setup lang="ts">
const companies = [
  {
    id: 1,
    name: 'Airbnb',
    text: 'Booking and travel',
    icon: 'logos:airbnb',
  },
  //...
  {
    id: 5,
    name: 'Figma',
    text: 'Design software',
    icon: 'logos:figma',
  },
]

const selectedCompany = ref('')
</script>

<template>
  <BaseAutocomplete
    v-model="selectedCompany"
    :items="companies"
    icon="ph:buildings"
    shape="rounded"
    placeholder="Select a company"
    label="Company"
    clearable
  />
</template>
```
