<script setup lang="ts">
const radioSelected = ref('option_1')
</script>

<template>
  <BaseRadio
    id="demo-default-1"
    v-model="radioSelected"
    name="demo_default"
    label="Option 1"
    value="option_1"
  />

  <BaseRadio
    id="demo-default-2"
    v-model="radioSelected"
    name="demo_default"
    label="Option 2"
    value="option_2"
  />

  <BaseRadio
    id="demo-default-3"
    v-model="radioSelected"
    name="demo_options"
    label="Option 3"
    value="option_3"
  />
</template>
