```vue
<script setup lang="ts">
const multiple = ref([16, 84])
</script>

<template>
  <Slider
    v-model="multiple"
    class="circle-tooltip"
  />
</template>
```
