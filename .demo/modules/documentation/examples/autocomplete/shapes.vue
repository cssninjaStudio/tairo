<template>
  <div class="grid md:grid-cols-2 md:max-w-lg gap-6">
    <BaseAutocomplete
      v-model="fields.first"
      :items="frameworks"
      shape="straight"
      label="Straight autocomplete"
    />
    <BaseAutocomplete
      v-model="fields.second"
      :items="frameworks"
      shape="rounded"
      label="Rounded autocomplete"
    />
    <BaseAutocomplete
      v-model="fields.thrid"
      :items="frameworks"
      shape="curved"
      label="Curved autocomplete"
    />
    <BaseAutocomplete
      v-model="fields.fourth"
      :items="frameworks"
      shape="full"
      label="Full autocomplete"
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

const frameworks = ref(['Javascript', 'Nuxt', 'Vue.js', 'React.js', 'Angular', 'Alpine.js'])
</script>
