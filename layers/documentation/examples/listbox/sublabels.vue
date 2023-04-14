<template>
  <div class="grid gap-6 md:max-w-lg md:grid-cols-2">
    <BaseListbox
      v-model="value"
      label="Assignee"
      :items="peopleNames"
      :properties="{
        value: 'id',
        label: 'name',
        sublabel: 'text',
      }"
    />
  </div>
</template>

<script setup lang="ts">
const value = ref({
  id: 3,
  name: 'Mike Miller',
  text: 'UI/UX Designer',
})

const peopleNames = ref([
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
])
</script>
