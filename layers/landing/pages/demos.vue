<script setup lang="ts">
definePageMeta({
  title: 'Prebuilt pages',
  layout: 'empty',
})
</script>

<template>
  <div class="pt-16">
    <LandingNavbar />
    <LandingDemos :cta="false" />
    <LandingCta />
    <LandingFooter />
  </div>
</template>
