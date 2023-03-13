<script setup lang="ts">
function wrapVueMarkdown(source: string) {
  return '```vue\n' + source + '\n```'
}
</script>

<template>
  <div>
    <BaseBreadcrumb />

    <DocLayout>
      <template #content>
        <DocComponentMeta name="TairoSubsidebar" />
        <DocComponentMeta name="TairoSubsidebarHeader" />
      </template>
      <template #toc>
        <DocToc />
      </template>
    </DocLayout>
  </div>
</template>
