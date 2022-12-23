```vue {highlight: '18..19,33'}
<script setup lang="ts">
const people = [
  {
    id: 1,
    name: 'Clarissa Perez',
    text: 'Sales Manager',
    media: '/img/avatars/19.svg',
  },
  // ...
  {
    id: 5,
    name: 'Maya Rosselini',
    text: 'Product Manager',
    media: '/img/avatars/2.svg',
  },
]

// the v-model should be an array
const selectedPersonMutliple = ref([])
</script>

<template>
  <BaseListbox
    v-model="selectedPersonMutliple"
    label="Assignee"
    :items="people"
    :properties="{
      value: 'id',
      label: 'name',
      sublabel: 'text',
      media: 'media',
    }"
    multiple
  />
</template>
```
