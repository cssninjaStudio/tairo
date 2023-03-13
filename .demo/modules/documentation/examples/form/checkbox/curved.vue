<script setup lang="ts">
const demoThree = ref(['Option 1'])
</script>

<template>
  <BaseCheckbox
    v-model="demoThree"
    value="Option 1"
    name="demo-3-1"
    label="Curved checkbox"
    shape="curved"
    :classes="{ wrapper: 'text-gray-500' }"
  />
  <BaseCheckbox
    v-model="demoThree"
    value="Option 2"
    name="demo-3-2"
    label="Curved checkbox"
    shape="curved"
    :classes="{ wrapper: 'text-gray-500' }"
  />
</template>
