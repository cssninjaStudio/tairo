<script setup lang="ts">
const links = [
  {
    name: 'facebook',
    url: '#',
    icon: 'fa6-brands:facebook-f',
  },
  {
    name: 'twitter',
    url: '#',
    icon: 'fa6-brands:x-twitter',
  },
  {
    name: 'linkedin',
    url: '#',
    icon: 'fa6-brands:linkedin-in',
  },
  {
    name: 'github',
    url: '#',
    icon: 'fa6-brands:github',
  },
]
</script>

<template>
  <div class="flex w-full items-center justify-between gap-3">
    <NuxtLink
      v-for="link in links"
      :key="link.name"
      :to="link.url"
      class="text-muted-400 flex size-9 items-center justify-center rounded-xl transition-all duration-300 hover:text-white hover:shadow-xl"
      :class="[
        link.name === 'facebook'
          && 'hover:bg-indigo-800 hover:shadow-indigo-500/30 dark:hover:shadow-indigo-800/30',
        link.name === 'twitter'
          && 'hover:bg-muted-900 dark:hover:bg-muted-700 hover:shadow-muted-500/30 dark:hover:shadow-muted-800/30',
        link.name === 'linkedin'
          && 'hover:bg-indigo-800 hover:shadow-indigo-500/30 dark:hover:shadow-indigo-800/30',
        link.name === 'github'
          && 'hover:bg-muted-900 dark:hover:bg-muted-700 hover:shadow-muted-500/30 dark:hover:shadow-muted-800/30',
      ]"
    >
      <Icon :name="link.icon" class="size-4" />
    </NuxtLink>
  </div>
</template>
