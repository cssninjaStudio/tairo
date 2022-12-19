```vue
<script setup lang="ts">
export const topics = [
  {
    icon: 'ph:popcorn-duotone',
    title: 'Marketing',
    link: '/',
  },
  //...
  {
    icon: 'ph:buildings-duotone',
    title: 'Enterprise',
    link: '/',
  },
]
</script>

<template>
  <CarouselIcons
    :slides-to-show="6"
    :slides="topics"
  />
</template>
```
