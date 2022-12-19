```vue
<script setup lang="ts">
const selectStraight = ref('')
</script>

<template>
  <BaseTextarea
    v-model="textareaCurved"
    label="Message"
    shape="curved"
    placeholder="Write a message..."
  />
</template>
```
