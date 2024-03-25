<template>
  <div class="flex max-w-4xl flex-col flex-wrap gap-3 md:flex-row md:items-end">
    <div class="flex-1">
      <BaseListbox
        v-model="value"
        size="sm"
        rounded="md"
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

    <div class="flex-1">
      <BaseListbox
        v-model="value"
        size="md"
        rounded="md"
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

    <div class="flex-1">
      <BaseListbox
        v-model="value"
        size="lg"
        rounded="md"
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
