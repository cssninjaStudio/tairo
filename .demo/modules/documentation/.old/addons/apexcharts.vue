<script setup lang="ts">
import BaseDemo from '../../../examples/apexcharts/base.vue'
import base from '../../../examples/apexcharts/base.vue?raw'

function wrapVueMarkdown(source: string) {
  return '```vue\n' + source + '\n```'
}
</script>

<template>
  <div>
    <BaseBreadcrumb />

    <DocLayout>
      <template #content>
        <!-- Chart example -->
        <DocSection title="Chart example" tag="1.0.0">
          <DocComponent label="Area chart example">
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

        <!-- Chart properties -->
        <DocComponentMeta name="AddonApexcharts" />
      </template>
      <template #toc>
        <DocToc />
      </template>
    </DocLayout>
  </div>
</template>
