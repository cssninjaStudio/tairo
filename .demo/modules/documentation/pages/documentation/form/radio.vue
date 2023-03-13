<script setup lang="ts">
import BaseDemo from '../../../examples/form/radio/base.vue'
import base from '../../../examples/form/radio/base.vue?raw'
import ColorsDemo from '../../../examples/form/radio/colors.vue'
import colors from '../../../examples/form/radio/colors.vue?raw'

function wrapVueMarkdown(source: string) {
  return '```vue\n' + source + '\n```'
}

const model = `
const radio = ref('option_1')
`
</script>

<template>
  <div>
    <BaseBreadcrumb />

    <DocLayout>
      <template #content>
        <!-- Radio straight -->
        <DocSection title="Radio buttons" tag="1.0.0">
          <DocComponent label="Radio buttons example">
            <template #demo>
              <div class="flex items-end gap-6">
                <div class="flex w-full max-w-sm items-end gap-6">
                  <BaseDemo />
                </div>
              </div>
            </template>
            <template #code>
              <AddonMarkdownRemark :source="wrapVueMarkdown(base)" fullwidth />
            </template>
          </DocComponent>
        </DocSection>

        <!-- Radio colors -->
        <DocSection title="Radio colors" tag="1.0.0">
          <DocComponent label="Radio colors examples">
            <template #demo>
              <div class="flex items-end gap-6">
                <div class="flex w-full max-w-sm flex-wrap items-end gap-6">
                  <ColorsDemo />
                </div>
              </div>
            </template>
            <template #code>
              <AddonMarkdownRemark
                :source="wrapVueMarkdown(colors)"
                fullwidth
              />
            </template>
          </DocComponent>
        </DocSection>

        <!-- Radio properties -->
        <DocComponentMeta name="BaseRadio" />
      </template>
      <template #toc>
        <DocToc />
      </template>
    </DocLayout>
  </div>
</template>
