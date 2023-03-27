<script setup lang="ts">
const radioSelected = ref('option_1')
</script>

<template>
  <BaseRadio
    id="demo-danger-1"
    v-model="radioSelected"
    name="demo_danger"
    label="Option 1"
    value="option_1"
    color="danger"
  />

  <BaseRadio
    id="demo-danger-2"
    v-model="radioSelected"
    name="demo_danger"
    label="Option 2"
    value="option_2"
    color="danger"
  />

  <BaseRadio
    id="demo-danger-3"
    v-model="radioSelected"
    name="demo_danger"
    label="Option 3"
    value="option_3"
    color="danger"
  />
</template>
