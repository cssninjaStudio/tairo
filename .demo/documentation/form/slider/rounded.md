```vue
<script setup lang="ts">
const value = ref(20)
</script>

<template>
  <Slider
    v-model="value"
    class="rounded-tooltip"
  />
</template>
```
