<template>
  <BaseAutocomplete
    v-model="selectedHobby"
    :items="hobbies"
    icon="ph:buildings"
    shape="rounded"
    placeholder="Select a hobby"
    label="Company"
    clearable
  />
</template>

<script setup lang="ts">
// demo data for the autocomplete
const selectedHobby = ref('')
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
</script>
