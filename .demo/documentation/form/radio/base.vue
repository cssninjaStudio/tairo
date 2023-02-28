<script setup lang="ts">
const radioSelected = ref('option_1')
</script>

<template>
  <BaseRadio
    id="demo-options-1"
    v-model="radioSelected"
    name="demo_options"
    label="Option 1"
    value="option_1"
    class="text-gray-500"
  />

  <BaseRadio
    id="demo-options-2"
    v-model="radioSelected"
    name="demo_options"
    label="Option 2"
    value="option_2"
    class="text-gray-500"
  />

  <BaseRadio
    id="demo-options-3"
    v-model="radioSelected"
    name="demo_options"
    label="Option 3"
    value="option_3"
    class="text-gray-500"
  />
</template>
