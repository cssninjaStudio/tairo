<template>
  <div class="max-w-sm">
    <BaseAutocomplete
      v-model="value"
      :items="hobbies"
      :display-value="(item: Hobby) => item.name"
      :filter-items="filterItems"
      icon="ph:buildings"
      rounded="md"
      placeholder="Select a hobby"
      label="Company"
      clearable
      :properties="{
        value: 'id',
        label: 'name',
        sublabel: 'text',
        icon: 'icon',
      }"
    />
  </div>
</template>

<script setup lang="ts">
interface Hobby {
  id: number
  name: string
  text: string
  icon: string
}

const value = ref<Hobby>()
const hobbies = ref<Hobby[]>([
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
