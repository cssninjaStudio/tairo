```vue
<script setup lang="ts">
const frameworks = [
  {
    id: 1,
    name: 'Javascript',
  },
  //...
  {
    id: 5,
    name: 'Alpine.js',
  },
]

const selectedFramework = ref(frameworks[0])
</script>

<template>
  <BaseComboBox
    v-model="selectedFramework"
    label="Framework"
    :items="frameworks"
    shape="rounded"
    disabled
  />
</template>
```
