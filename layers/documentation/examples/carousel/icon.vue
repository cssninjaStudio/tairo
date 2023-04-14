<template>
  <AddonCarouselIcons :slides-to-show="6" :slides="topics" />
</template>

<script setup lang="ts">
const topics = [
  {
    icon: 'ph:megaphone-simple-duotone',
    title: 'Marketing',
    link: '/',
  },
  {
    icon: 'ph:chart-bar-duotone',
    title: 'Analytics',
    link: '/',
  },
  {
    icon: 'ph:storefront-duotone',
    title: 'Ecommerce',
    link: '/',
  },
  {
    icon: 'ph:rocket-duotone',
    title: 'Startups',
    link: '/',
  },
  {
    icon: 'ph:bank-duotone',
    title: 'Funding',
    link: '/',
  },
  {
    icon: 'ph:app-window-duotone',
    title: 'SEO',
    link: '/',
  },
  {
    icon: 'ph:sketch-logo-duotone',
    title: 'Product',
    link: '/',
  },
  {
    icon: 'ph:heartbeat-duotone',
    title: 'Health',
    link: '/',
  },
  {
    icon: 'ph:pen-nib-duotone',
    title: 'Content',
    link: '/',
  },
  {
    icon: 'ph:briefcase-duotone',
    title: 'Business',
    link: '/',
  },
  {
    icon: 'ph:leaf-duotone',
    title: 'Ecology',
    link: '/',
  },
  {
    icon: 'ph:flask-duotone',
    title: 'Experiments',
    link: '/',
  },
  {
    icon: 'ph:users-three-duotone',
    title: 'Jobs',
    link: '/',
  },
  {
    icon: 'ph:buildings-duotone',
    title: 'Enterprise',
    link: '/',
  },
]
</script>
