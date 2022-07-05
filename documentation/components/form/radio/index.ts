export const base = `
<script setup lang="ts">
const radioSelected = ref('option_1')
</script>

<template>
  <BaseFormRadio
    id="demo-options-1"
    v-model="radioSelected"
    name="demo_options"
    label="Option 1"
    value="option_1"
    class="text-gray-500"
  />

  <BaseFormRadio
    id="demo-options-2"
    v-model="radioSelected"
    name="demo_options"
    label="Option 2"
    value="option_2"
    class="text-gray-500"
  />

  <BaseFormRadio
    id="demo-options-3"
    v-model="radioSelected"
    name="demo_options"
    label="Option 3"
    value="option_3"
    class="text-gray-500"
  />
</template>
`

export const colors = `
<script setup lang="ts">
const demoColors = ref('primary')
</script>

<template>
  <BaseFormRadio
    id="demo-colors-primary"
    v-model="demoColors"
    name="demo_colors"
    label="color"
    value="primary"
    class="text-primary-500"
  />

  <BaseFormRadio
    id="demo-colors-lime"
    v-model="demoColors"
    name="demo_colors"
    label="color"
    value="lime"
    class="text-lime-500"
  />

  <BaseFormRadio
    id="demo-colors-pink"
    v-model="demoColors"
    name="demo_colors"
    label="color"
    value="pink"
    class="text-pink-500"
  />
</template>
`
