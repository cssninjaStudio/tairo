<script setup lang="ts">
const links = [
  {
    name: 'Kendra W.',
    url: '/',
    image: '/img/avatars/10.svg',
  },
  {
    name: 'Jake H.',
    url: '/',
    image: '/img/avatars/8.svg',
  },
  {
    name: 'Hermann M.',
    url: '/',
    image: '/img/avatars/16.svg',
  },
  {
    name: 'Clarissa M.',
    url: '/',
    image: '/img/avatars/5.svg',
  },
]
</script>

<template>
  <div class="w-full flex items-center justify-between gap-3">
    <NuxtLink
      v-for="link in links"
      :key="link.name"
      :to="link.url"
      class="group h-9 w-9 flex items-center justify-center transition-all duration-300"
    >
      <BaseAvatar
        :src="link.image"
        size="xs"
        class="grayscale opacity-60 group-hover:scale-110 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300"
        :tooltip="link.name"
      />
    </NuxtLink>
  </div>
</template>
