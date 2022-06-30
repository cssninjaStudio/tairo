<script setup>
// @todo: add and implement a datepicker / timepicker library
// @todo: Add vue tippy as it is far more performant than headless UI popover
// @todo: Add navigation guards (often requested by customers)
// @todo: setup an authentication system
// @todo: setup a useApi composable like in Vuero (with example), with jsonServer ?
// @todo: add v-inputMask to handle special fields like credit card
// @todo: check if Vuero Apex charts component works in Tairo
// @todo: implement notifications library (like notyf or anything else more relevant)
// @todo: implement a Video plugin (ex: https://github.com/LarchLiu/vue3-video-player)
// @todo: implement lightbox library (see if there are better options than what we have in Vuero)
// @todo: question - should we use the <DarkImage /> component like we have in Vulk?
// @todo: think about and implement a solution to use real images without slowing or making our release process a nightmare on Envato (via placeholder etc...). Needs discussion

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
