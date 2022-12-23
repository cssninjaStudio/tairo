```vue {highlight: '6,12,27'}
<script setup lang="ts">
const peopleNames = [
  {
    id: 1,
    name: 'Clarissa Perez',
    text: 'Sales Manager',
  },
  //...
  {
    id: 5,
    name: 'Maya Rosselini',
    text: 'Product Manager',
  },
]

const selectedPersonName = ref(peopleNames[0])
</script>

<template>
  <BaseListbox
    v-model="selectedPersonName"
    label="Assignee"
    :items="peopleNames"
    :properties="{
      value: 'id',
      label: 'name',
      sublabel: 'text',
    }"
  />
</template>
```
