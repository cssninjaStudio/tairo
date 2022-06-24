export const base = `
<script setup lang="ts">
const options = ref([
  'Option 1',
  'Option 2',
  'Option 3',
  'Option 4',
])
</script>

<template>
  <BaseFormAnimatedCheckbox
    v-model="options"
    value="Option 1"
    class="text-primary-500"
  />
  <BaseFormAnimatedCheckbox
    v-model="options"
    value="Option 2"
    class="text-lime-500"
  />
  <BaseFormAnimatedCheckbox
    v-model="options"
    value="Option 3"
    class="text-green-500"
  />
  <BaseFormAnimatedCheckbox
    v-model="options"
    value="Option 4"
    class="text-emerald-500"
  />
</template>
`
