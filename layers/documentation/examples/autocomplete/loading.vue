<template>
  <div class="grid gap-6 md:max-w-lg md:grid-cols-2">
    <BaseAutocomplete
      v-model="fields.first"
      :items="frameworks"
      size="sm"
      rounded="md"
      placeholder="e.g. Nuxt"
      label="Framework"
      loading
    />

    <BaseAutocomplete
      v-model="fields.second"
      :items="frameworks"
      size="sm"
      icon="lucide:search"
      rounded="md"
      placeholder="e.g. Nuxt"
      label="Framework"
      loading
    />

    <BaseAutocomplete
      v-model="fields.third"
      :items="frameworks"
      rounded="md"
      placeholder="e.g. Nuxt"
      label="Framework"
      loading
    />

    <BaseAutocomplete
      v-model="fields.fourth"
      :items="frameworks"
      icon="lucide:search"
      rounded="md"
      placeholder="e.g. Nuxt"
      label="Framework"
      loading
    />

    <BaseAutocomplete
      v-model="fields.fifth"
      :items="frameworks"
      size="lg"
      rounded="md"
      placeholder="e.g. Nuxt"
      label="Framework"
      loading
    />

    <BaseAutocomplete
      v-model="fields.sixth"
      :items="frameworks"
      icon="lucide:search"
      size="lg"
      rounded="md"
      placeholder="e.g. Nuxt"
      label="Framework"
      loading
    />
  </div>
</template>

<script setup lang="ts">
const fields = reactive({
  first: '',
  second: '',
  third: '',
  fourth: '',
  fifth: '',
  sixth: '',
})

const frameworks = ref(['Javascript', 'Nuxt', 'Vue.js', 'React.js', 'Angular', 'Alpine.js'])
</script>
