<template>
  <div class="flex max-w-3xl flex-col flex-wrap gap-3 md:flex-row md:items-end">
    <div class="flex-1">
      <BaseInput
        v-model="fields.first"
        contrast="muted"
        size="sm"
        rounded="md"
        label="Size: sm"
        placeholder="Ex: username"
      />
    </div>

    <div class="flex-1">
      <BaseInput
        v-model="fields.second"
        contrast="muted"
        size="md"
        rounded="md"
        label="Size: md"
        placeholder="Ex: username"
      />
    </div>

    <div class="flex-1">
      <BaseInput
        v-model="fields.third"
        contrast="muted"
        size="lg"
        rounded="md"
        label="Size: lg"
        placeholder="Ex: username"
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
</script>
