<template>
  <div class="flex max-w-3xl flex-col flex-wrap gap-3 md:flex-row md:items-end">
    <div class="flex-1">
      <BaseListbox
        v-model="values"
        size="sm"
        rounded="md"
        label="Hobbies"
        :items="people"
        :properties="{
          value: 'id',
          label: 'name',
          sublabel: 'text',
          media: 'media',
        }"
        multiple
      />
    </div>

    <div class="flex-1">
      <BaseListbox
        v-model="values"
        size="md"
        rounded="md"
        label="Hobbies"
        :items="people"
        :properties="{
          value: 'id',
          label: 'name',
          sublabel: 'text',
          media: 'media',
        }"
        multiple
      />
    </div>

    <div class="flex-1">
      <BaseListbox
        v-model="values"
        size="lg"
        rounded="md"
        label="Hobbies"
        :items="people"
        :properties="{
          value: 'id',
          label: 'name',
          sublabel: 'text',
          media: 'media',
        }"
        multiple
      />
    </div>
  </div>
</template>

<script setup lang="ts">
// the v-model should be an array
const values = ref([])

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
