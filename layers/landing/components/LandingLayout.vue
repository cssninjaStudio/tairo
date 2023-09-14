<script setup lang="ts">
const { y } = useNinjaWindowScroll()
</script>

<template>
  <div class="group/landing overflow-hidden" :class="y > 60 ? 'scrolled' : ''">
    <LandingNavbar />

    <slot />

    <TairoPanels />
  </div>
</template>
