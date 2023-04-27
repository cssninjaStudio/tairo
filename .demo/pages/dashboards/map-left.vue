<script setup lang="ts">
definePageMeta({
  title: 'Map',
  layout: 'empty',
  preview: {
    title: 'Left map panel',
    description: 'For location based apps',
    categories: ['dashboards'],
    src: '/img/screens/dashboards-map-left.png',
    srcDark: '/img/screens/dashboards-map-left-dark.png',
    order: 23,
  },
})
</script>

<template>
  <div>
    <AddonMapboxPanel />
  </div>
</template>
