```vue
<script setup lang="ts">
const inputStraight = ref('')
</script>

<template>
  <BaseInput
    v-model="inputStraight"
    shape="straight"
    label="Short description"
    placeholder="Enter a few words..."
  />
</template>
```
