<script setup lang="ts">
useSeoMeta({
  title: 'Blog Categories',
  description: 'This is our blog',
  ogTitle: 'Blog Categories',
  ogDescription: 'This is our blog',
  ogUrl: '',
})
definePageMeta({
  title: 'Blog Categories',
  description: 'This is our blog',
  layout: 'blog',
  color: 'dark',
  colorMode: 'dark',
  auth: false,
})
const { y } = useNinjaWindowScroll()
</script>
<template>
  <div
    class="group/landing dark:bg-muted-900 overflow-hidden bg-white"
    :class="y > 70 ? 'scrolled' : ''"
  >
    <div class="mx-auto max-w-7xl pt-16">
      <LandingNavbar />
      <BlogCategoriesView />
      <LandingFooter />
    </div>
  </div>
</template>
