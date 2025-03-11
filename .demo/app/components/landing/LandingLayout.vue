<script setup lang="ts">
const { y } = useNuiWindowScroll()
</script>

<template>
  <div class="group/landing overflow-hidden" :class="y > 60 ? 'scrolled' : ''">
    <LandingNavbar />

    <slot />
  </div>
</template>
