<script setup lang="ts">
import BaseDemo from '#examples/radio-custom/base.vue'
import base from '#examples/radio-custom/base.vue?raw'

function wrapVueMarkdown(source: string) {
  return '```vue\n' + source + '\n```'
}
</script>

<template>
  <div>
    <BaseBreadcrumb />

    <DocLayout>
      <template #content>
        <!-- Radio custom -->
        <DocSection title="Custom radios" tag="1.0.0">
          <DocComponent label="Custom radios UI example">
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

        <!-- Radio properties -->
        <DocComponentMeta name="BaseRadioHeadless" />
      </template>
      <template #toc>
        <DocToc />
      </template>
    </DocLayout>
  </div>
</template>
