<script setup lang="ts">
import BarDemo from '~/documentation/progress/bar.vue'
import bar from '~/documentation/progress/bar.vue?raw'
import CircleDemo from '~/documentation/progress/circle.vue'
import circle from '~/documentation/progress/circle.vue?raw'
import ColorsDemo from '~/documentation/progress/colors.vue'
import colors from '~/documentation/progress/colors.vue?raw'
import IndeterminateDemo from '~/documentation/progress/indeterminate.vue'
import indeterminate from '~/documentation/progress/indeterminate.vue?raw'
import SizesDemo from '~/documentation/progress/sizes.vue'
import sizes from '~/documentation/progress/sizes.vue?raw'

definePageMeta({
  title: 'Progress',
  documentation: {
    category: 'NUI Elements',
    components: ['BaseProgress', 'BaseProgressCircle'],
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
        <!-- Progress bar -->
        <DocSection title="Progress bar" tag="1.0.0">
          <DocComponent label="Default progress bar">
            <template #demo>
              <BarDemo />
            </template>
            <template #code>
              <AddonMarkdownRemark
                :source="wrapVueMarkdown(bar)"
                class="prose max-w-full"
              />
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
                class="prose max-w-full"
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
              <AddonMarkdownRemark
                :source="wrapVueMarkdown(sizes)"
                class="prose max-w-full"
              />
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
                class="prose max-w-full"
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
                class="prose max-w-full"
              />
            </template>
          </DocComponent>
        </DocSection>

        <!-- Progress bar properties -->
        <DocComponentMeta name="BaseProgress" />

        <!-- Progress circle properties -->
        <DocComponentMeta name="BaseProgressCircle" />
      </template>
      <!-- Toc -->
      <template #toc>
        <DocToc />
      </template>
    </DocLayout>
  </div>
</template>
