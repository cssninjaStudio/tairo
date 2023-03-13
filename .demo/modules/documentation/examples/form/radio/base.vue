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
    :classes="{
      wrapper: 'text-muted-500',
    }"
  />

  <BaseRadio
    id="demo-options-2"
    v-model="radioSelected"
    name="demo_options"
    label="Option 2"
    value="option_2"
    :classes="{
      wrapper: 'text-muted-500',
    }"
  />

  <BaseRadio
    id="demo-options-3"
    v-model="radioSelected"
    name="demo_options"
    label="Option 3"
    value="option_3"
    :classes="{
      wrapper: 'text-muted-500',
    }"
  />
</template>
