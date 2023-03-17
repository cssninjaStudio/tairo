<script setup lang="ts">
const radioSelected = ref('option_1')
</script>

<template>
  <BaseRadio
    id="demo-muted-1"
    v-model="radioSelected"
    name="demo_muted"
    label="Option 1"
    value="option_1"
    color="muted"
  />

  <BaseRadio
    id="demo-muted-2"
    v-model="radioSelected"
    name="demo_muted"
    label="Option 2"
    value="option_2"
    color="muted"
  />

  <BaseRadio
    id="demo-muted-3"
    v-model="radioSelected"
    name="demo_muted"
    label="Option 3"
    value="option_3"
    color="muted"
  />
</template>
