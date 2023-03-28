<template>
  <div class="grid md:grid-cols-2 md:max-w-lg gap-6 mt-6">
    <BaseAutocomplete
      v-model="first"
      :items="frameworks"
      icon="lucide:search"
      shape="curved"
      placeholder="e.g. Nuxt"
      label="Framework"
      label-float
    />
    <BaseAutocomplete
      v-model="second"
      :items="frameworks"
      clearable
      shape="curved"
      placeholder="e.g. Vue.js"
      label="Framework"
      label-float
    />
  </div>
</template>

<script setup lang="ts">
const first = ref('')
const second = ref('')

const frameworks = ref(['Javascript', 'Nuxt', 'Vue.js', 'React.js', 'Angular', 'Alpine.js'])
</script>
