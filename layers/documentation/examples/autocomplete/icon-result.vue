<template>
  <div class="grid gap-6 md:max-w-lg md:grid-cols-2">
    <BaseAutocomplete
      v-model="value"
      :items="hobbies"
      :display-value="(item) => item.name"
      :filter-items="filterItems"
      icon="ph:buildings"
      shape="rounded"
      placeholder="Select a hobby"
      label="Company"
      clearable
    />
  </div>
</template>

<script setup lang="ts">
const value = ref('')
const hobbies = ref([
  {
    id: 1,
    name: 'Movies',
    text: 'Cinema & shows',
    icon: 'ph:sword-duotone',
  },
  {
    id: 2,
    name: 'Travel',
    text: 'Tourism & travel',
    icon: 'ph:airplane-duotone',
  },
  {
    id: 3,
    name: 'Drinks',
    text: 'Wines & fine drinks',
    icon: 'ph:brandy-duotone',
  },
  {
    id: 4,
    name: 'Arts',
    text: 'Paintings & scultpure',
    icon: 'ph:paint-brush-duotone',
  },
  {
    id: 5,
    name: 'Karaoke',
    text: 'singing with friends',
    icon: 'ph:microphone-stage-duotone',
  },
])

function filterItems(query?: string, items?: any[]) {
  if (!query || !items) {
    return items ?? []
  }

  // search by name or text
  return items.filter((item) => {
    const nameMatches = item?.name?.toLowerCase().includes(query.toLowerCase())
    const textMatches = item?.text?.toLowerCase().includes(query.toLowerCase())
    return nameMatches || textMatches
  })
}
</script>
