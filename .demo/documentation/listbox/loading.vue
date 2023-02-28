{highlight: '29'}

<script setup lang="ts">
const peopleNames = [
  {
    id: 1,
    name: 'Clarissa Perez',
    text: 'Sales Manager',
  },
  {
    id: 2,
    name: 'Aaron Splatter',
    text: 'Project Manager',
  },
  {
    id: 3,
    name: 'Mike Miller',
    text: 'UI/UX Designer',
  },
  {
    id: 4,
    name: 'Benedict Kessler',
    text: 'Mobile Developer',
  },
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
    loading
  />
</template>
