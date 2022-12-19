```vue
<script setup lang="ts">
const inputRounded = ref('')
</script>

<template>
  <BaseCheckbox
    v-model="demoOne"
    name="demo-1"
    label="Straight checkbox"
    shape="straight"
    class="text-gray-500"
  />
</template>
```
