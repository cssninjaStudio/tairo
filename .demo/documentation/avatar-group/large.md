```vue
<template>
  <script setup lang="ts">
    const people = [
      {
        tooltip: 'Clarissa Perez',
        src: '/img/avatars/19.svg',
      },
      ...{
        tooltip: 'Maya Rosselini',
        src: '/img/avatars/2.svg',
      },
    ]
  </script>

  <template>
    <BaseAvatarGroup
      size="lg"
      :avatars="people"
    />
  </template>
</template>
```
