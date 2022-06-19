<script setup lang="ts">
// import { toc } from '@@/documentation/components/tabs/toc'
// import { } from '@@/documentation/components/tabs'

definePageMeta({
  title: 'Nav Tabs',
})

const breadcrumb = [
  {
    label: 'Home',
    hideLabel: true,
    icon: 'i-lucide-home',
    hideIcon: false,
    to: '/',
  },
  {
    label: 'Components',
    hideLabel: false,
    icon: '',
    hideIcon: true,
    to: '/components',
  },
  {
    label: 'Tabs',
    hideLabel: false,
    icon: '',
    hideIcon: true,
    to: '/components/tabs',
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
