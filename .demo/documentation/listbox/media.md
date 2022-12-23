```vue {highlight: '7,14,30'}
<script setup lang="ts">
const people = [
  {
    id: 1,
    name: 'Clarissa Perez',
    text: 'Sales Manager',
    media: '/img/avatars/19.svg',
  },
  //...
  {
    id: 5,
    name: 'Maya Rosselini',
    text: 'Product Manager',
    media: '/img/avatars/2.svg',
  },
]

const selectedPerson = ref(people[2])
</script>

<template>
  <BaseListbox
    v-model="selectedPerson"
    label="Assignee"
    :items="people"
    :properties="{
      value: 'id',
      label: 'name',
      sublabel: 'text',
      media: 'media',
    }"
  />
</template>
```
