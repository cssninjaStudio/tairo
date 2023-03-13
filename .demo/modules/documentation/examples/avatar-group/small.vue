<script setup lang="ts">
const people = [
  {
    tooltip: 'Clarissa Perez',
    src: '/img/avatars/19.svg',
  },
  {
    tooltip: 'Aaaron Splatter',
    src: '/img/avatars/16.svg',
  },
  {
    tooltip: 'Mike Miller',
    src: '/img/avatars/3.svg',
  },
  {
    tooltip: 'Benedict Kessler',
    src: '/img/avatars/22.svg',
  },
  {
    tooltip: 'Maya Rosselini',
    src: '/img/avatars/2.svg',
  },
]
</script>

<template>
  <BaseAvatarGroup size="sm" :avatars="people" />
</template>
