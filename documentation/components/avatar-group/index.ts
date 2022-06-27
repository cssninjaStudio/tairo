export const tiny = `
<script setup lang="ts">
const people = [
  {
    id: 1,
    name: 'Clarissa Perez',
    role: 'Sales Manager',
    picture: '/img/avatars/19.svg',
  },
  ...
  {
    id: 5,
    name: 'Maya Rosselini',
    role: 'Product Manager',
    picture: '/img/avatars/2.svg',
  },
]
</script>

<template>
  <BaseAvatarGroup size="xs" :avatars="people" />
</template>
`

export const small = `
<script setup lang="ts">
const people = [
  {
    id: 1,
    name: 'Clarissa Perez',
    role: 'Sales Manager',
    picture: '/img/avatars/19.svg',
  },
  ...
  {
    id: 5,
    name: 'Maya Rosselini',
    role: 'Product Manager',
    picture: '/img/avatars/2.svg',
  },
]
</script>

<template>
  <BaseAvatarGroup size="sm" :avatars="people" />
</template>
`

export const medium = `
<script setup lang="ts">
const people = [
  {
    id: 1,
    name: 'Clarissa Perez',
    role: 'Sales Manager',
    picture: '/img/avatars/19.svg',
  },
  ...
  {
    id: 5,
    name: 'Maya Rosselini',
    role: 'Product Manager',
    picture: '/img/avatars/2.svg',
  },
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
    id: 1,
    name: 'Clarissa Perez',
    role: 'Sales Manager',
    picture: '/img/avatars/19.svg',
  },
  ...
  {
    id: 5,
    name: 'Maya Rosselini',
    role: 'Product Manager',
    picture: '/img/avatars/2.svg',
  },
]
</script>

<template>
  <BaseAvatarGroup size="lg" :avatars="people" />
</template>
</template>
`
