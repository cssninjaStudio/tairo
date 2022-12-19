```vue
<script setup lang="ts">
const demoColors = ref('primary')
</script>

<template>
  <BaseRadio
    id="demo-colors-primary"
    v-model="demoColors"
    name="demo_colors"
    label="color"
    value="primary"
    class="text-primary-500"
  />

  <BaseRadio
    id="demo-colors-lime"
    v-model="demoColors"
    name="demo_colors"
    label="color"
    value="lime"
    class="text-lime-500"
  />

  <BaseRadio
    id="demo-colors-pink"
    v-model="demoColors"
    name="demo_colors"
    label="color"
    value="pink"
    class="text-pink-500"
  />
</template>
```
