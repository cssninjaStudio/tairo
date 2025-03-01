<script setup lang="ts">
const links = [
  {
    name: 'Kendra W.',
    url: '#',
    image: '/img/avatars/10.svg',
  },
  {
    name: 'Jake H.',
    url: '#',
    image: '/img/avatars/8.svg',
  },
  {
    name: 'Hermann M.',
    url: '#',
    image: '/img/avatars/16.svg',
  },
  {
    name: 'Clarissa M.',
    url: '#',
    image: '/img/avatars/5.svg',
  },
]
</script>

<template>
  <div class="flex w-full items-center justify-between gap-3">
    <BaseTooltip
      v-for="link in links"
      :key="link.name"
      :content="link.name"
    >
      <span class="group flex size-9 items-center justify-center transition-all duration-300">
        <TairoImageZoom class="rounded-full opacity-60 grayscale transition-all duration-300 focus:grayscale-0 group-hover:scale-110 group-hover:opacity-100 group-hover:grayscale-0 group-focus:grayscale-0" :src="link.image" />
      </span>
    </BaseTooltip>
  </div>
</template>
