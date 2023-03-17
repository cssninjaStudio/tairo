<script setup lang="ts">
const radioSelected = ref('option_1')
</script>

<template>
  <BaseRadio
    id="demo-warning-1"
    v-model="radioSelected"
    name="demo_warning"
    label="Option 1"
    value="option_1"
    color="warning"
  />

  <BaseRadio
    id="demo-warning-2"
    v-model="radioSelected"
    name="demo_warning"
    label="Option 2"
    value="option_2"
    color="warning"
  />

  <BaseRadio
    id="demo-warning-3"
    v-model="radioSelected"
    name="demo_warning"
    label="Option 3"
    value="option_3"
    color="warning"
  />
</template>
