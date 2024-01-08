<template>
  <div class="grid gap-6 md:max-w-4xl md:grid-cols-3">
    <BaseInput
      v-model="fields.first"
      rounded="none"
      label="Rounded: none"
      placeholder="Ex: username"
    />

    <BaseInput
      v-model="fields.second"
      rounded="sm"
      label="Rounded: sm"
      placeholder="Ex: username"
    />

    <BaseInput
      v-model="fields.third"
      rounded="md"
      label="Rounded: md"
      placeholder="Ex: username"
    />

    <BaseInput
      v-model="fields.fourth"
      rounded="lg"
      label="Rounded: lg"
      placeholder="Ex: username"
    />

    <BaseInput
      v-model="fields.fourth"
      rounded="full"
      label="Rounded: full"
      placeholder="Ex: username"
    />
  </div>
</template>

<script setup lang="ts">
const fields = reactive({
  first: '',
  second: '',
  third: '',
  fourth: '',
})
</script>
