<script setup lang="ts">
// @todo: implement a file upload input. Can be the base file input or a plugin like V-filepond, or both. We need also some variations for profile picture upload (a square or a circle)

import { breadcrumb, toc } from '@@/documentation/components/form/file/toc'
// import { } from '@@/documentation/components/form/file'

definePageMeta({
  title: 'File inputs',
})
</script>

<template>
  <div>
    <!-- BreadCrumb -->
    <BaseBreadcrumb />

    <!-- Documentation Layout -->
    <DocLayout>
      <!-- content -->
      <template #content></template>
      <!-- Toc -->
      <template #toc></template>
    </DocLayout>
  </div>
</template>
