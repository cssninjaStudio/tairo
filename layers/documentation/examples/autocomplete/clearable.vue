<template>
  <div class="grid gap-6 md:max-w-lg md:grid-cols-2">
    <BaseAutocomplete
      v-model="first"
      :items="frameworks"
      :clear-value="''"
      icon="lucide:search"
      shape="full"
      placeholder="e.g. Nuxt"
      label="Framework"
      clearable
    />

    <BaseAutocomplete
      v-model="second"
      :items="people"
      :display-value="(item) => item.name"
      icon="lucide:search"
      shape="full"
      placeholder="e.g. Aaron"
      label="Manager"
      clearable
    />
  </div>
</template>

<script setup lang="ts">
const first = ref('Angular')
const second = ref({
  id: 2,
  name: 'Aaron Splatter',
  text: 'Project Manager',
  media: '/img/avatars/16.svg',
})

const frameworks = ref(['Javascript', 'Nuxt', 'Vue.js', 'React.js', 'Angular', 'Alpine.js'])

const people = ref([
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
])
</script>
