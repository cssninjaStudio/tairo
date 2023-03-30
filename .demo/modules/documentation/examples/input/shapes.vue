<template>
  <div class="grid md:grid-cols-2 md:max-w-lg gap-6">
    <BaseInput
      v-model="fields.first"
      shape="straight"
      label="Straight input"
      placeholder="Ex: username"
    />
    <BaseInput
      v-model="fields.second"
      shape="rounded"
      label="Rounded input"
      placeholder="Ex: username"
    />
    <BaseInput
      v-model="fields.third"
      shape="curved"
      label="Curved input"
      placeholder="Ex: username"
    />
    <BaseInput v-model="fields.fourth" shape="full" label="Full input" placeholder="Ex: username" />
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
