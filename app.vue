<script setup lang="ts">
const route = useRoute()
const app = useAppConfig()
useHead({
  title: route.meta.title,
  titleTemplate: (titleChunk) => {
    return titleChunk ? `${titleChunk} - ${app.tairo.title}` : app.tairo.title
  },
  link: [
    {
      rel: 'icon',
      type: 'image/x-icon',
      href: '/img/favicon.png',
    },
  ],
  htmlAttrs: {
    lang: 'en',
  },
})
</script>

<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>
