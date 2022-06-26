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
    to: '/',
  },
  {
    label: 'Elements',
    hideLabel: false,
    to: '/elements',
  },
  {
    label: 'File input',
    hideLabel: false,
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
