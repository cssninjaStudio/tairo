<script setup lang="ts">
definePageMeta({
  title: 'Prebuilt pages',
  layout: 'empty',
  displayHome: false,
})
</script>

<template>
  <div class="dark:bg-muted-900 bg-white pt-16">
    <LandingNavbar />
    <LandingDemos :cta="false" />
    <LandingCta />
    <LandingFooter />
  </div>
</template>
