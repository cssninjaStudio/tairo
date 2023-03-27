<script setup lang="ts">
import TocDemo from '../../../examples/tairo/toc.vue'
import toc from '../../../examples/tairo/toc.vue?raw'

function wrapVueMarkdown(source: string) {
  return '```vue\n' + source + '\n```'
}
</script>

<template>
  <div>
    <BaseBreadcrumb />

    <DocLayout>
      <template #content>
        <!-- Tairo toc -->
        <DocSection title="Tairo toc" tag="1.0.0">
          <DocComponent label="Table of contents component">
            <template #demo>
              <div class="w-full flex items-end gap-6">
                <TocDemo />
              </div>
            </template>
            <template #code>
              <AddonMarkdownRemark :source="wrapVueMarkdown(toc)" fullwidth />
            </template>
          </DocComponent>
        </DocSection>

        <!-- Tairo toc properties -->
        <DocComponentMeta name="TairoTocAnchor" />
      </template>
      <template #toc>
        <DocToc />
      </template>
    </DocLayout>
  </div>
</template>
