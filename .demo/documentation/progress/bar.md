```vue
<script setup lang="ts">
const progress = ref(25)
</script>

<template>
  <BaseProgress
    title="Upload progress"
    size="sm"
    :value="progress"
    color="primary"
  />
</template>
```
