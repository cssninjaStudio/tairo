<script setup lang="ts">
import SidebarDemo from '../../../examples/tairo/layout.vue'
import sidebar from '../../../examples/tairo/layout.vue?raw'

function wrapVueMarkdown(source: string) {
  return '```vue\n' + source + '\n```'
}
</script>

<template>
  <div>
    <BaseBreadcrumb />

    <DocLayout>
      <template #content>
        <!-- Tairo sidebar -->
        <DocSection title="Tairo sidebar" tag="1.0.0">
          <DocComponent label="Tairo sidebar component">
            <template #demo>
              <div class="w-full flex items-end gap-6">
                <SidebarDemo />
              </div>
            </template>
            <template #code>
              <AddonMarkdownRemark
                :source="wrapVueMarkdown(sidebar)"
                fullwidth
              />
            </template>
          </DocComponent>
        </DocSection>

        <!-- Tairo sidebar properties -->
        <DocComponentMeta name="TairoNavigationSidebar" />
        <DocComponentMeta name="TairoNavigationSidebarItem" />
      </template>
      <template #toc>
        <DocToc />
      </template>
    </DocLayout>
  </div>
</template>
