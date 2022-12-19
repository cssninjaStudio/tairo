```vue
<script setup lang="ts">
const value = ref(20)
const format = (value: any) => `${value}%`
</script>

<template>
  <Slider
    v-model="value"
    :format="format"
    class="rounded-tooltip"
  />
</template>
```
