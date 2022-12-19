```vue
<script setup lang="ts">
const mergeValue = ref([20, 50, 80])
const merge = ref(10)
</script>

<template>
  <Slider
    v-model="mergeValue"
    :merge="merge"
    class="rounded-tooltip"
  />
</template>
```
