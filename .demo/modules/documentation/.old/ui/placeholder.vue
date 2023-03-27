<script setup lang="ts">
import BaseDemo from '#examples/placeholder/base.vue'
import base from '#examples/placeholder/base.vue?raw'
import VariationDemo from '#examples/placeholder/variation.vue'
import variation from '#examples/placeholder/variation.vue?raw'

function wrapVueMarkdown(source: string) {
  return '```vue\n' + source + '\n```'
}
</script>

<template>
  <div>
    <BaseBreadcrumb />

    <DocLayout>
      <template #content>
        <!-- Placeholder -->
        <DocSection title="Placeholder" tag="1.0.0">
          <DocComponent label="Page placeholder example">
            <template #demo>
              <BaseDemo />
            </template>
            <template #code>
              <AddonMarkdownRemark :source="wrapVueMarkdown(base)" fullwidth />
            </template>
          </DocComponent>
        </DocSection>

        <!-- Placeholder variation -->
        <DocSection title="Placeholder" tag="1.0.0">
          <DocComponent label="Page placeholder example">
            <template #demo>
              <VariationDemo />
            </template>
            <template #code>
              <AddonMarkdownRemark
                :source="wrapVueMarkdown(variation)"
                fullwidth
              />
            </template>
          </DocComponent>
        </DocSection>

        <!-- Placeholder props -->
        <DocComponentMeta name="BasePlaceholderPage" />
      </template>
      <template #toc>
        <DocToc />
      </template>
    </DocLayout>
  </div>
</template>
