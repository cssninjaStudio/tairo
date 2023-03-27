<script setup lang="ts">
const radioSelected = ref('option_1')
</script>

<template>
  <BaseRadio
    id="demo-primary-1"
    v-model="radioSelected"
    name="demo_primary"
    label="Option 1"
    value="option_1"
    color="primary"
  />

  <BaseRadio
    id="demo-primary-2"
    v-model="radioSelected"
    name="demo_primary"
    label="Option 2"
    value="option_2"
    color="primary"
  />

  <BaseRadio
    id="demo-primary-3"
    v-model="radioSelected"
    name="demo_primary"
    label="Option 3"
    value="option_3"
    color="primary"
  />
</template>
