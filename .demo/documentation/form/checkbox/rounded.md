```vue
<script setup lang="ts">
const inputRounded = ref('')
</script>

<template>
  <BaseCheckbox
    v-model="demoTwo"
    name="demo-2"
    label="Rounded checkbox"
    shape="rounded"
    class="text-gray-500"
  />
</template>
```
