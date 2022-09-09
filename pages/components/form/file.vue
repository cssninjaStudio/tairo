<script setup lang="ts">
// @todo: implement a file upload input. Can be the base file input or a plugin like V-filepond, or both. We need also some variations for profile picture upload (a square or a circle)

// import { } from '@@/documentation/components/form/file'

import { metaBaseInputFile } from '#nuxt-component-meta'

definePageMeta({
  title: 'File inputs',
  documentation: {
    category: 'Forms',
    components: ['BaseInputFile'],
  },
})
</script>

<template>
  <div>
    <!-- BreadCrumb -->
    <BaseBreadcrumb />

    <!-- Documentation Layout -->
    <DocLayout>
      <!-- content -->
      <template #content>
        <!-- Input properties -->
        <DocComponentMeta :meta="metaBaseInputFile" />
      </template>
      <!-- Toc -->
      <template #toc>
        <DocToc />
      </template>
    </DocLayout>
  </div>
</template>
