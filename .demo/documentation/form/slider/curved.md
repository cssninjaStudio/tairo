```vue
<script setup lang="ts">
const value = ref(20)
</script>

<template>
  <Slider
    v-model="value"
    class="curved-tooltip"
  />
</template>
```
