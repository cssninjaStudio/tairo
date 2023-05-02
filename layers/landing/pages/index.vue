<script setup lang="ts">
definePageMeta({
  title: 'The Nuxt & Tailwind CSS dashboard system',
  description:
    'Nuxt & Tailwind CSS dashboard system template that comes with 100+ prebuilt pages and 40+ custom UI components.',
  breadcrumb: {
    label: 'Tairo',
  },
  layout: 'empty',
})
</script>

<template>
  <div>
    <LandingNavbar />
    <LandingHero />
    <LandingCustomizer />
    <LandingDemos :limit="12" />
    <LandingLayers />
    <LandingFeatures />
    <LandingBenefits />
    <LandingCta />
    <LandingContent />
    <LandingFooter />
  </div>
</template>
