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
  <div class="w-full flex items-center justify-between gap-3">
    <NuxtLink
      v-for="link in links"
      :key="link.name"
      :to="link.url"
      class="h-9 w-9 flex items-center justify-center rounded-full text-muted-400 hover:text-white hover:bg-primary-500 hover:shadow-xl hover:shadow-primary-500/30 dark:hover:shadow-primary-800/30 transition-all duration-300"
    >
      <Icon :name="link.icon" class="w-4 h-4" />
    </NuxtLink>
  </div>
</template>
