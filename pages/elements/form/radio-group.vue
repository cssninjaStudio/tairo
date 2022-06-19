<script setup lang="ts">
// import { toc } from '@@/documentation/elements/radio-group/toc'
// import { } from '@@/documentation/elements/radio-group'

definePageMeta({
  title: 'Radio groups',
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
    label: 'Elements',
    hideLabel: false,
    icon: '',
    hideIcon: true,
    to: '/elements',
  },
  {
    label: 'Radio group',
    hideLabel: false,
    icon: '',
    hideIcon: true,
    to: '/form/radio-group',
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
