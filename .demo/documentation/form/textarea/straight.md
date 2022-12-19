```vue
<script setup lang="ts">
const selectStraight = ref('')
</script>

<template>
  <BaseTextarea
    v-model="textareaStraight"
    label="Message"
    shape="straight"
    placeholder="Write a message..."
  />
</template>
```
