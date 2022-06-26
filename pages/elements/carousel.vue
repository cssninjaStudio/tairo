<script setup lang="ts">
// import { toc } from '@@/documentation/elements/carousel/toc'
// import { } from '@@/documentation/elements/carousel'

definePageMeta({
  title: 'Carousel',
})

const breadcrumb = [
  {
    label: 'Home',
    hideLabel: true,
    icon: 'i-lucide-home',
    to: '/',
  },
  {
    label: 'Elements',
    hideLabel: false,
    to: '/elements',
  },
  {
    label: 'Carousel',
    hideLabel: false,
    to: '/elements/carousel',
  },
]
</script>

<template>
  <div>
    <!-- BreadCrumb -->
    <BaseBreadcrumb :items="breadcrumb" separator="dot" />

    <!-- Documentation Layout -->
    <DocLayout>
      <!-- content -->
      <template #content></template>
      <!-- Toc -->
      <template #toc></template>
    </DocLayout>
  </div>
</template>
