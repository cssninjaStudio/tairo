<script setup lang="ts">
import BarDemo from '#examples/progress/bar.vue'
import bar from '#examples/progress/bar.vue?raw'
import CircleDemo from '#examples/progress/circle.vue'
import circle from '#examples/progress/circle.vue?raw'
import ColorsDemo from '#examples/progress/colors.vue'
import colors from '#examples/progress/colors.vue?raw'
import IndeterminateDemo from '#examples/progress/indeterminate.vue'
import indeterminate from '#examples/progress/indeterminate.vue?raw'
import SizesDemo from '#examples/progress/sizes.vue'
import sizes from '#examples/progress/sizes.vue?raw'

function wrapVueMarkdown(source: string) {
  return '```vue\n' + source + '\n```'
}
</script>

<template>
  <div>
    <BaseBreadcrumb />

    <DocLayout>
      <template #content>
        <!-- Progress bar -->
        <DocSection title="Progress bar" tag="1.0.0">
          <DocComponent label="Default progress bar">
            <template #demo>
              <BarDemo />
            </template>
            <template #code>
              <AddonMarkdownRemark :source="wrapVueMarkdown(bar)" fullwidth />
            </template>
          </DocComponent>
        </DocSection>

        <!-- Progress circle -->
        <DocSection title="Progress circle" tag="1.0.0">
          <DocComponent label="Default progress circle">
            <template #demo>
              <CircleDemo />
            </template>
            <template #code>
              <AddonMarkdownRemark
                :source="wrapVueMarkdown(circle)"
                fullwidth
              />
            </template>
          </DocComponent>
        </DocSection>

        <!-- Progress sizes -->
        <DocSection title="Progress sizes" tag="1.0.0">
          <DocComponent label="Default progress sizes">
            <template #demo>
              <SizesDemo />
            </template>
            <template #code>
              <AddonMarkdownRemark :source="wrapVueMarkdown(sizes)" fullwidth />
            </template>
          </DocComponent>
        </DocSection>

        <!-- Progress colors -->
        <DocSection title="Progress colors" tag="1.0.0">
          <DocComponent label="Default progress colors">
            <template #demo>
              <ColorsDemo />
            </template>
            <template #code>
              <AddonMarkdownRemark
                :source="wrapVueMarkdown(colors)"
                fullwidth
              />
            </template>
          </DocComponent>
        </DocSection>

        <!-- Progress indeterminate -->
        <DocSection
          id="progress-indeterminate"
          title="Indeterminate"
          tag="1.0.0"
        >
          <DocComponent label="indeterminate progress animation">
            <template #demo>
              <IndeterminateDemo />
            </template>
            <template #code>
              <AddonMarkdownRemark
                :source="wrapVueMarkdown(indeterminate)"
                fullwidth
              />
            </template>
          </DocComponent>
        </DocSection>

        <!-- Progress bar properties -->
        <DocComponentMeta name="BaseProgress" />

        <!-- Progress circle properties -->
        <DocComponentMeta name="BaseProgressCircle" />
      </template>
      <template #toc>
        <DocToc />
      </template>
    </DocLayout>
  </div>
</template>
