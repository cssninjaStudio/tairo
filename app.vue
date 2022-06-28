<script setup>
import './assets/css/modules/variables.css'
import './assets/css/modules/slider.css'

const route = useRoute()
useHead({
  title: route.meta.title,
  titleTemplate: (titleChunk) => {
    return titleChunk ? `${titleChunk} - Tairo` : 'Tairo'
  },
  link: [
    {
      rel: 'icon',
      type: 'image/x-icon',
      href: '/img/favicon.png',
    },
  ],
})
</script>

<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>
