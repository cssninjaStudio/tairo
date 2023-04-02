<template>
  <BaseAvatarGroup size="xs" :avatars="people" />
</template>

<script setup lang="ts">
const people = [
  {
    'data-tooltip': 'Clarissa Perez',
    src: '/img/avatars/19.svg',
  },
  {
    'data-tooltip': 'Aaaron Splatter',
    src: '/img/avatars/16.svg',
  },
  {
    'data-tooltip': 'Mike Miller',
    src: '/img/avatars/3.svg',
  },
  {
    'data-tooltip': 'Benedict Kessler',
    src: '/img/avatars/22.svg',
  },
  {
    'data-tooltip': 'Maya Rosselini',
    src: '/img/avatars/2.svg',
  },
]
</script>
