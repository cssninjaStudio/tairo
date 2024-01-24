<template>
  <div class="grid gap-6 md:max-w-xl md:grid-cols-2">
    <BaseListbox
      v-model="value"
      label="Framework"
      size="sm"
      :items="frameworks"
      placeholder="Select a framework"
      rounded="md"
      label-float
    />

    <BaseListbox
      v-model="objectValue"
      size="sm"
      rounded="md"
      label="People"
      :items="people"
      :properties="{
        value: 'id',
        label: 'name',
        sublabel: 'text',
        media: 'media',
      }"
      label-float
    />

    <BaseListbox
      v-model="value"
      label="Framework"
      size="md"
      :items="frameworks"
      placeholder="Select a framework"
      rounded="md"
      label-float
    />

    <BaseListbox
      v-model="objectValue"
      size="md"
      rounded="md"
      label="People"
      :items="people"
      :properties="{
        value: 'id',
        label: 'name',
        sublabel: 'text',
        media: 'media',
      }"
      label-float
    />

    <BaseListbox
      v-model="value"
      label="Framework"
      size="lg"
      :items="frameworks"
      placeholder="Select a framework"
      rounded="md"
      label-float
    />

    <BaseListbox
      v-model="objectValue"
      size="lg"
      rounded="md"
      label="People"
      :items="people"
      :properties="{
        value: 'id',
        label: 'name',
        sublabel: 'text',
        media: 'media',
      }"
      label-float
    />
  </div>
</template>

<script setup lang="ts">
import { fr } from 'date-fns/locale'

const value = ref()

const frameworks = ['Javascript', 'Vue.js', 'React.js', 'Angular', 'Alpine.js']

const objectValue = ref({
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
