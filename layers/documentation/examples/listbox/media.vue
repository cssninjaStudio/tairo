<template>
  <div class="grid gap-6 md:max-w-lg md:grid-cols-2">
    <BaseListbox
      v-model="value"
      label="Assignee"
      :items="people"
      :properties="{
        value: 'id',
        label: 'name',
        sublabel: 'text',
        media: 'media',
      }"
    />
  </div>
</template>

<script setup lang="ts">
const value = ref({
  id: 2,
  name: 'Aaron Splatter',
  text: 'Project Manager',
  media: '/img/avatars/16.svg',
})

const people = [
  {
    id: 1,
    name: 'Clarissa Perez',
    text: 'Sales Manager',
    media: '/img/avatars/19.svg',
  },
  {
    id: 2,
    name: 'Aaron Splatter',
    text: 'Project Manager',
    media: '/img/avatars/16.svg',
  },
  {
    id: 3,
    name: 'Mike Miller',
    text: 'UI/UX Designer',
    media: '/img/avatars/3.svg',
  },
  {
    id: 4,
    name: 'Benedict Kessler',
    text: 'Mobile Developer',
    media: '/img/avatars/22.svg',
  },
  {
    id: 5,
    name: 'Maya Rosselini',
    text: 'Product Manager',
    media: '/img/avatars/2.svg',
  },
]
</script>
