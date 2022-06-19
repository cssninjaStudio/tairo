<script setup lang="ts">
// import { toc } from '@@/documentation/components/icon-box/toc'
// import { } from '@@/documentation/components/icon-box'

definePageMeta({
  title: 'Icon Boxes',
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
    label: 'Icon box',
    hideLabel: false,
    icon: '',
    hideIcon: true,
    to: '/components/icon-box',
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
