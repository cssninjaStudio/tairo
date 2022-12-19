```vue
<script setup lang="ts">
const value = ref(20)
</script>

<template>
  <Slider
    v-model="value"
    class="slider-info circle-tooltip"
  />
  <Slider
    v-model="value"
    class="slider-success circle-tooltip"
  />
  <Slider
    v-model="value"
    class="slider-warning circle-tooltip"
  />
  <Slider
    v-model="value"
    class="slider-danger circle-tooltip"
  />
</template>
```
