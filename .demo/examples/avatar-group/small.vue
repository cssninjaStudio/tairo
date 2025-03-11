<script setup lang="ts">
const people = [
  {
    src: '/img/avatars/19.svg',
  },
  {
    src: '/img/avatars/16.svg',
  },
  {
    src: '/img/avatars/3.svg',
  },
  {
    src: '/img/avatars/22.svg',
  },
  {
    src: '/img/avatars/2.svg',
  },
]
</script>

<template>
  <BaseAvatarGroup size="sm" :avatars="people" />
</template>
