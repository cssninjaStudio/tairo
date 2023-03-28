<template>
  <div class="grid md:grid-cols-2 md:max-w-lg gap-6">
    <BaseInput v-model="fields.first" shape="straight" label="Straight input" />
    <BaseInput v-model="fields.second" shape="rounded" label="Rounded input" />
    <BaseInput v-model="fields.third" shape="curved" label="Curved input" />
    <BaseInput v-model="fields.fourth" shape="full" label="Full input" />
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
