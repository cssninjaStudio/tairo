<script setup lang="ts">
const links = [
  {
    name: 'Activity',
    url: '/',
    icon: 'lucide:activity',
  },
  {
    name: 'Search',
    url: '/',
    icon: 'lucide:search',
  },
  {
    name: 'Files',
    url: '/',
    icon: 'lucide:file-text',
  },
  {
    name: 'Home',
    url: '/',
    icon: 'lucide:home',
  },
]
</script>

<template>
  <div class="flex w-full items-center justify-between gap-3">
    <NuxtLink
      v-for="link in links"
      :key="link.name"
      :to="link.url"
      class="text-muted-400 hover:bg-primary-500 hover:shadow-primary-500/30 dark:hover:shadow-primary-800/30 flex h-9 w-9 items-center justify-center rounded-full transition-all duration-300 hover:text-white hover:shadow-xl"
    >
      <Icon :name="link.icon" class="h-4 w-4" />
    </NuxtLink>
  </div>
</template>
