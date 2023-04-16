<script setup lang="ts">
definePageMeta({
  title: 'Tairo',
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
