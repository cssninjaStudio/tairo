<script setup>
const route = useRoute()
useHead({
  title: route.meta.title,
  titleTemplate: (titleChunk) => {
    return titleChunk ? `${titleChunk} - Tairo` : 'Tairo' // @todo: use app config
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
