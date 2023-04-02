<template>
  <div class="grid gap-6 md:max-w-lg md:grid-cols-2">
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
