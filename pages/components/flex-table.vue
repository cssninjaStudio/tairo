<script setup lang="ts">
// import { toc } from '@@/documentation/components/flex-table/toc'
// import { } from '@@/documentation/components/flex-table'

definePageMeta({
  title: 'Flex Tables',
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
    label: 'Flext table',
    hideLabel: false,
    icon: '',
    hideIcon: true,
    to: '/components/flex-table',
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
