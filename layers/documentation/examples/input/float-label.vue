<template>
  <div class="grid gap-6 md:max-w-lg md:grid-cols-2">
    <BaseInput
      v-model="fields.first"
      size="sm"
      rounded="md"
      label="Size: sm"
      placeholder="Ex: username"
      label-float
    />

    <BaseInput
      v-model="fields.second"
      icon="lucide:search"
      size="sm"
      rounded="md"
      label="Size: sm"
      placeholder="Ex: username"
      label-float
    />

    <BaseInput
      v-model="fields.third"
      size="md"
      rounded="md"
      label="Size: md"
      placeholder="Ex: username"
      label-float
    />

    <BaseInput
      v-model="fields.fourth"
      icon="lucide:search"
      size="md"
      rounded="md"
      label="Size: md"
      placeholder="Ex: username"
      label-float
    />

    <BaseInput
      v-model="fields.fifth"
      size="lg"
      rounded="md"
      label="Size: lg"
      placeholder="Ex: username"
      label-float
    />

    <BaseInput
      v-model="fields.sixth"
      icon="lucide:search"
      size="lg"
      rounded="md"
      label="Size: lg"
      placeholder="Ex: username"
      label-float
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
</script>
