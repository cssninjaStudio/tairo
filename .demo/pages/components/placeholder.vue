<script setup lang="ts">
import BaseDemo from '~/documentation/placeholder/base.vue'
import base from '~/documentation/placeholder/base.vue?raw'
import VariationDemo from '~/documentation/placeholder/variation.vue'
import variation from '~/documentation/placeholder/variation.vue?raw'

definePageMeta({
  title: 'Placeholders',
  documentation: {
    category: 'NUI Elements',
    components: ['BasePlaceholderPage'],
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
        <!-- Placeholder -->
        <DocSection title="Placeholder" tag="1.0.0">
          <DocComponent label="Page placeholder example">
            <template #demo>
              <BaseDemo />
            </template>
            <template #code>
              <AddonMarkdownRemark
                :source="wrapVueMarkdown(base)"
                class="prose max-w-full"
              />
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
                class="prose max-w-full"
              />
            </template>
          </DocComponent>
        </DocSection>

        <!-- Placeholder props -->
        <DocComponentMeta name="BasePlaceholderPage" />
      </template>
      <!-- Toc -->
      <template #toc>
        <DocToc />
      </template>
    </DocLayout>
  </div>
</template>
