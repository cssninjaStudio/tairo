```vue
<script setup lang="ts">
const selectStraight = ref('')
</script>

<template>
  <BaseTextarea
    v-model="textareaRounded"
    label="Message"
    shape="rounded"
    placeholder="Write a message..."
  />
</template>
```
