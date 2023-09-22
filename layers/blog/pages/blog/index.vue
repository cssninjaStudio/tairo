<script setup lang="ts">
useSeoMeta({
  title: 'Blog',
  description: 'This is our blog',
  ogTitle: 'Blog',
  ogDescription: 'This is our blog',
  /* ogImage: '/images/meta/ideas.png', */
  ogUrl: '',
})
definePageMeta({
  title: 'Blog',
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
    <div class="mx-auto max-w-7xl">
      <header>
        <BlogHeader />
      </header>
      <section class="grid grid-cols-4">
        <BlogPosts class="col-span-3" />
        <BlogPostSideBar class="mt-28" />
      </section>
    </div>
  </div>
</template>
