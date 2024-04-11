<template>
  <div class="flex max-w-3xl flex-col flex-wrap gap-3 md:flex-row md:items-end">
    <div class="flex-1">
      <BaseListbox
        v-model="value"
        size="sm"
        rounded="md"
        label="People"
        :items="peopleNames"
        :properties="{
          value: 'id',
          label: 'name',
          sublabel: 'text',
        }"
      />
    </div>

    <div class="flex-1">
      <BaseListbox
        v-model="value"
        size="md"
        rounded="md"
        label="People"
        :items="peopleNames"
        :properties="{
          value: 'id',
          label: 'name',
          sublabel: 'text',
        }"
      />
    </div>

    <div class="flex-1">
      <BaseListbox
        v-model="value"
        size="lg"
        rounded="md"
        label="People"
        :items="peopleNames"
        :properties="{
          value: 'id',
          label: 'name',
          sublabel: 'text',
        }"
      />
    </div>
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
