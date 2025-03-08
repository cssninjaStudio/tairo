<script setup lang="ts">
const links = [
  {
    name: 'Activity',
    url: '#',
    icon: 'solar:heart-pulse-2-linear',
  },
  {
    name: 'Search',
    url: '#',
    icon: 'solar:minimalistic-magnifer-linear',
  },
  {
    name: 'Files',
    url: '#',
    icon: 'solar:document-linear',
  },
  {
    name: 'Home',
    url: '#',
    icon: 'solar:home-smile-angle-linear',
  },
]
</script>

<template>
  <div class="flex w-full items-center justify-between gap-3">
    <NuxtLink
      v-for="link in links"
      :key="link.name"
      :to="link.url"
      class="text-muted-400 hover:bg-primary-500 hover:shadow-primary-500/30 dark:hover:shadow-primary-800/30 flex size-9 items-center justify-center rounded-full transition-all duration-300 hover:text-white hover:shadow-xl"
    >
      <Icon :name="link.icon" class="size-5" />
    </NuxtLink>
  </div>
</template>
