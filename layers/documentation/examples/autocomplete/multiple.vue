<template>
  <div class="max-w-sm">
    <BaseAutocomplete
      v-model="value"
      :items="frameworks"
      rounded="md"
      icon="lucide:list-filter"
      placeholder="Search..."
      label="Assignee"
      multiple
    />
  </div>
</template>

<script setup lang="ts">
const value = ref<string[]>(['Nuxt', 'Vue.js'])

const frameworks = ref(['Javascript', 'Nuxt', 'Vue.js', 'React.js', 'Angular', 'Alpine.js'])
</script>
