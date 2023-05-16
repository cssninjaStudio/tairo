<script setup lang="ts">
definePageMeta({
  title: 'Prebuilt dashboards pages',
  description:
    'Explore 100+ prebuilt pages, including dashboards and app examples. Kickstart your project with Nuxt and Tailwind CSS.',
  layout: 'empty',
})

const { y } = useNinjaWindowScroll()
</script>

<template>
  <div class="group/landing overflow-hidden" :class="y > 60 ? 'scrolled' : ''">
    <div class="dark:bg-muted-900 bg-white pt-16">
      <LandingNavbar />
      <LandingDemos :cta="false" />
      <LandingCta />
      <LandingFooter />
    </div>
  </div>
</template>
