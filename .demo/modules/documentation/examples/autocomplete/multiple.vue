<template>
  <div class="grid md:grid-cols-2 md:max-w-lg gap-6">
    <BaseAutocomplete
      v-model="value"
      :items="frameworks"
      shape="rounded"
      icon="ph:users-three"
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
