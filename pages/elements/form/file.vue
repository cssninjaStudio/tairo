<script setup lang="ts">
import { breadcrumb, toc } from '@@/documentation/elements/form/file/toc'
// import { } from '@@/documentation/elements/form/file'

definePageMeta({
  title: 'File inputs',
})
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
