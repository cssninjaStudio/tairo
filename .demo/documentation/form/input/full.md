```vue
<script setup lang="ts">
const inputFull = ref('')
</script>

<template>
  <BaseInput
    v-model="inputFull"
    shape="full"
    label="Short description"
    placeholder="Enter a few words..."
  />
</template>
```
