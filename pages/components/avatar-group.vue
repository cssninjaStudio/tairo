<script setup lang="ts">
// import { toc } from '@@/documentation/components/avatar-group/toc'
// import { } from '@@/documentation/components/avatar-group'

definePageMeta({
  title: 'Colors',
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
    label: 'Avatar group',
    hideLabel: false,
    icon: '',
    hideIcon: true,
    to: '/components/avatar-group',
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
