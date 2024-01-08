<template>
  <div class="flex max-w-3xl flex-wrap items-end gap-5">
    <div class="flex-1">
      <BaseAutocomplete
        v-model="fields.first"
        :items="frameworks"
        icon="lucide:search"
        size="sm"
        rounded="md"
        placeholder="e.g. Nuxt"
        label="Framework"
      />
    </div>

    <div class="flex-1">
      <BaseAutocomplete
        v-model="fields.second"
        :items="frameworks"
        icon="lucide:search"
        rounded="md"
        placeholder="e.g. Nuxt"
        label="Framework"
      />
    </div>

    <div class="flex-1">
      <BaseAutocomplete
        v-model="fields.third"
        :items="frameworks"
        icon="lucide:search"
        size="lg"
        rounded="md"
        placeholder="e.g. Nuxt"
        label="Framework"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
const fields = reactive({
  first: '',
  second: '',
  third: '',
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
