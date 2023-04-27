<script setup lang="ts">
definePageMeta({
  title: 'Map',
  layout: 'empty',
  preview: {
    title: 'Right map panel',
    description: 'For location based apps',
    categories: ['dashboards'],
    src: '/img/screens/dashboards-map-right.png',
    srcDark: '/img/screens/dashboards-map-right-dark.png',
    order: 24,
  },
})
</script>

<template>
  <div>
    <AddonMapboxPanel reversed />
  </div>
</template>
