<script setup lang="ts">
// import { toc } from '@@/documentation/elements/file/toc'
// import { } from '@@/documentation/elements/file'

definePageMeta({
  title: 'File inputs',
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
    label: 'File input',
    hideLabel: false,
    icon: '',
    hideIcon: true,
    to: '/form/file',
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
