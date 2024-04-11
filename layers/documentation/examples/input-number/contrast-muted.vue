<template>
  <div class="flex max-w-3xl flex-col flex-wrap gap-3 md:flex-row md:items-end">
    <div class="flex-1">
      <BaseInputNumber
        v-model="fields.first"
        contrast="muted"
        size="sm"
        rounded="md"
        label="Rounded: md"
        placeholder="Ex: username"
      />
    </div>

    <div class="flex-1">
      <BaseInputNumber
        v-model="fields.second"
        contrast="muted"
        size="md"
        rounded="md"
        label="Rounded: md"
        placeholder="Ex: username"
      />
    </div>

    <div class="flex-1">
      <BaseInputNumber
        v-model="fields.third"
        contrast="muted"
        size="lg"
        rounded="md"
        label="Rounded: md"
        placeholder="Ex: username"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
const fields = reactive({
  first: 0,
  second: 0,
  third: 0,
})
</script>
