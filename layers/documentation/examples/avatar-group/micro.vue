<template>
  <BaseAvatarGroup size="xxs" :avatars="people" />
</template>

<script setup lang="ts">
const people = [
  {
    'data-nui-tooltip': 'Clarissa Perez',
    'src': '/img/avatars/19.svg',
  },
  {
    'data-nui-tooltip': 'Aaaron Splatter',
    'src': '/img/avatars/16.svg',
  },
  {
    'data-nui-tooltip': 'Mike Miller',
    'src': '/img/avatars/3.svg',
  },
  {
    'data-nui-tooltip': 'Benedict Kessler',
    'src': '/img/avatars/22.svg',
  },
  {
    'data-nui-tooltip': 'Maya Rosselini',
    'src': '/img/avatars/2.svg',
  },
]
</script>
