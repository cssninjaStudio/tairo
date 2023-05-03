<template>
  <div class="grid gap-6 md:max-w-lg md:grid-cols-2">
    <BaseAutocomplete
      v-model="fields.first"
      :items="frameworks"
      icon="lucide:search"
      shape="full"
      placeholder="e.g. Nuxt"
      label="Framework"
    />

    <BaseAutocomplete
      v-model="fields.second"
      :items="people"
      icon="lucide:user"
      shape="full"
      placeholder="e.g. Clarissa"
      label="Manager"
      clearable
    />
  </div>
</template>

<script setup lang="ts">
const fields = reactive({
  first: '',
  second: '',
  thrid: '',
  fourth: '',
})

const frameworks = ref(['Javascript', 'Vue.js', 'React.js', 'Angular', 'Alpine.js'])
const people = ref([
  'Clarissa Perez',
  'Aaron Splatter',
  'Mike Miller',
  'Benedict Kessler',
  'Maya Rosselini',
])
</script>
