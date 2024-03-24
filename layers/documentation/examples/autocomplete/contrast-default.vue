<template>
  <div class="flex max-w-3xl flex-col flex-wrap gap-3 md:flex-row md:items-end">
    <div class="flex-1">
      <BaseAutocomplete
        v-model="fields.first"
        :items="frameworks"
        contrast="default-contrast"
        size="sm"
        rounded="md"
        label="Size: sm"
        placeholder="Ex: javascript"
      />
    </div>

    <div class="flex-1">
      <BaseAutocomplete
        v-model="fields.second"
        :items="frameworks"
        contrast="default-contrast"
        size="md"
        rounded="md"
        label="Size: md"
        placeholder="Ex: javascript"
      />
    </div>

    <div class="flex-1">
      <BaseAutocomplete
        v-model="fields.third"
        :items="frameworks"
        contrast="default-contrast"
        size="lg"
        rounded="md"
        label="Size: lg"
        placeholder="Ex: javascript"
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

const frameworks = ref(['Javascript', 'Nuxt', 'Vue.js', 'React.js', 'Angular', 'Alpine.js'])
</script>
