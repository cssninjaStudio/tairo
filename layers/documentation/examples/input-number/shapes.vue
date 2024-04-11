<template>
  <div class="grid gap-6 md:max-w-lg md:grid-cols-2">
    <BaseInputNumber
      v-model="fields.first"
      rounded="none"
      label="Rounded: none"
      placeholder="Ex: username"
    />

    <BaseInputNumber
      v-model="fields.second"
      rounded="sm"
      label="Rounded: sm"
      placeholder="Ex: username"
    />

    <BaseInputNumber
      v-model="fields.third"
      rounded="md"
      label="Rounded: md"
      placeholder="Ex: username"
    />

    <BaseInputNumber
      v-model="fields.fourth"
      rounded="lg"
      label="Rounded: lg"
      placeholder="Ex: username"
    />

    <BaseInputNumber
      v-model="fields.fifth"
      rounded="full"
      label="Rounded: full"
      placeholder="Ex: username"
    />
  </div>
</template>

<script setup lang="ts">
const fields = reactive({
  first: 0,
  second: 0,
  third: 0,
  fourth: 0,
  fifth: 0,
})
</script>
