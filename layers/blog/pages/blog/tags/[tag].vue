<script setup lang="ts">
useSeoMeta({
  title: 'Blog Tags',
  description: 'This is our blog',
  ogTitle: 'Blog Tags',
  ogDescription: 'This is our blog',
  /* ogImage: '/images/meta/ideas.png', */
  ogUrl: '',
})
definePageMeta({
  title: 'Blog Tags',
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
      <BlogTagsView />
      <LandingFooter />
    </div>
  </div>
</template>
