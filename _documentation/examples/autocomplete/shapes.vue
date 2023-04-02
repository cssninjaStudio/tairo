<template>
  <div class="grid gap-6 md:max-w-lg md:grid-cols-2">
    <BaseAutocomplete
      v-model="fields.first"
      :items="frameworks"
      shape="straight"
      label="Straight autocomplete"
      placeholder="Ex: javascript"
    />

    <BaseAutocomplete
      v-model="fields.second"
      :items="frameworks"
      shape="rounded"
      label="Rounded autocomplete"
      placeholder="Ex: javascript"
    />

    <BaseAutocomplete
      v-model="fields.thrid"
      :items="frameworks"
      shape="curved"
      label="Curved autocomplete"
      placeholder="Ex: javascript"
    />

    <BaseAutocomplete
      v-model="fields.fourth"
      :items="frameworks"
      shape="full"
      label="Full autocomplete"
      placeholder="Ex: javascript"
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
