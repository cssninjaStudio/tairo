<script setup lang="ts">
definePageMeta({
  title: 'Nuxt - Tailwind CSS Dashboard System',
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
