<script setup lang="ts">
definePageMeta({
  title: 'File inputs',
  documentation: {
    category: 'NUI Forms',
    components: ['BaseInputFile'],
  },
})

function wrapVueMarkdown(source: string) {
  return '```vue\n' + source + '\n```'
}
</script>

<template>
  <div>
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
