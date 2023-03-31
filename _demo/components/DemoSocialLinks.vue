<script setup lang="ts">
const links = [
  {
    name: 'facebook',
    url: '/',
    icon: 'fa6-brands:facebook-f',
  },
  {
    name: 'twitter',
    url: '/',
    icon: 'fa6-brands:twitter',
  },
  {
    name: 'linkedin',
    url: '/',
    icon: 'fa6-brands:linkedin-in',
  },
  {
    name: 'github',
    url: '/',
    icon: 'fa6-brands:github',
  },
]
</script>

<template>
  <div class="w-full flex items-center justify-between gap-3">
    <NuxtLink
      v-for="link in links"
      :key="link.name"
      :to="link.url"
      class="h-9 w-9 flex items-center justify-center rounded-xl text-muted-400 hover:text-white hover:shadow-xl transition-all duration-300"
      :class="[
        link.name === 'facebook' &&
          'hover:bg-indigo-800 hover:shadow-indigo-500/30 dark:hover:shadow-indigo-800/30',
        link.name === 'twitter' &&
          'hover:bg-sky-500 hover:shadow-sky-500/30 dark:hover:shadow-sky-800/30',
        link.name === 'linkedin' &&
          'hover:bg-indigo-800 hover:shadow-indigo-500/30 dark:hover:shadow-indigo-800/30',
        link.name === 'github' &&
          'hover:bg-muted-900 dark:hover:bg-muted-700 hover:shadow-muted-500/30 dark:hover:shadow-muted-800/30',
      ]"
    >
      <Icon :name="link.icon" class="w-4 h-4" />
    </NuxtLink>
  </div>
</template>
