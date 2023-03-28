<template>
  <div class="grid md:grid-cols-2 md:max-w-lg gap-6">
    <BaseAutocomplete
      v-model="value"
      :items="frameworks"
      icon="lucide:search"
      shape="full"
      placeholder="e.g. Nuxt"
      label="Framework"
      loading
    />
  </div>
</template>

<script setup lang="ts">
const value = ref('')

const frameworks = ref(['Javascript', 'Nuxt', 'Vue.js', 'React.js', 'Angular', 'Alpine.js'])
</script>
