<script setup lang="ts">
const radioSelected = ref('option_1')
</script>

<template>
  <BaseRadio
    id="demo-success-1"
    v-model="radioSelected"
    name="demo_success"
    label="Option 1"
    value="option_1"
    color="success"
  />

  <BaseRadio
    id="demo-success-2"
    v-model="radioSelected"
    name="demo_success"
    label="Option 2"
    value="option_2"
    color="success"
  />

  <BaseRadio
    id="demo-success-3"
    v-model="radioSelected"
    name="demo_success"
    label="Option 3"
    value="option_3"
    color="success"
  />
</template>
