<template>
  <div class="grid gap-6 md:max-w-lg md:grid-cols-2">
    <BaseListbox
      v-model="value"
      label="Hobbies"
      :items="hobbies"
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
const value = ref({
  id: 2,
  name: 'Travel',
  text: 'Tourism & travel',
  icon: 'ph:airplane-duotone',
})

const hobbies = [
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
]
</script>
