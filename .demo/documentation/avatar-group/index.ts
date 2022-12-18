export const tiny = `
<script setup lang="ts">
const people = [
  '/img/avatars/19.svg',
  // ...
  '/img/avatars/2.svg',
]
</script>

<template>
  <BaseAvatarGroup size="xs" :avatars="people" />
</template>
`

export const small = `
<script setup lang="ts">
const people = [
  '/img/avatars/19.svg',
  // ...
  '/img/avatars/2.svg',
]
</script>

<template>
  <BaseAvatarGroup size="sm" :avatars="people" />
</template>
`

export const medium = `
<script setup lang="ts">
const people = [
  '/img/avatars/19.svg',
  // ...
  '/img/avatars/2.svg',
]
</script>

<template>
  <BaseAvatarGroup size="md" :avatars="people" />
</template>
`

export const large = `
<template>
<script setup lang="ts">
const people = [
  {
    tooltip: 'Clarissa Perez',
    src: '/img/avatars/19.svg',
  },
  ...
  {
    tooltip: 'Maya Rosselini',
    src: '/img/avatars/2.svg',
  },
]
</script>

<template>
  <BaseAvatarGroup size="lg" :avatars="people" />
</template>
</template>
`
