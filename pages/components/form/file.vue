<script setup lang="ts">
// import { } from '@@/documentation/components/form/file'



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
        <DocComponentMeta name="BaseInputFile" />
      </template>
      <!-- Toc -->
      <template #toc>
        <DocToc />
      </template>
    </DocLayout>
  </div>
</template>
