```vue
<script setup lang="ts">
const progressCircle = ref(25)
</script>

<template>
  <BaseProgressCircle
    title="Upload progress"
    :size="45"
    :value="progressCircle"
    class="text-primary-500"
  />
</template>
```
