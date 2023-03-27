<script setup lang="ts">
import BaseDemo from '#examples/checkbox-custom/base.vue'
import base from '#examples/checkbox-custom/base.vue?raw'

function wrapVueMarkdown(source: string) {
  return '```vue\n' + source + '\n```'
}
</script>

<template>
  <div>
    <BaseBreadcrumb />

    <DocLayout>
      <template #content>
        <!-- Checkbox custom -->
        <DocSection title="Custom checkbox" tag="1.0.0">
          <DocComponent label="Custom checkbox UI example">
            <template #demo>
              <div class="w-full flex items-end gap-6">
                <BaseDemo />
              </div>
            </template>
            <template #code>
              <AddonMarkdownRemark :source="wrapVueMarkdown(base)" fullwidth />
            </template>
          </DocComponent>
        </DocSection>

        <!-- Checkbox properties -->
        <DocComponentMeta name="BaseCheckboxHeadless" />
      </template>
      <template #toc>
        <DocToc />
      </template>
    </DocLayout>
  </div>
</template>
