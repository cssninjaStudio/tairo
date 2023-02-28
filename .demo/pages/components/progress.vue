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
    category: 'Display',
    components: ['BaseProgress', 'BaseProgressCircle'],
  },
})

function wrapVueMarkdown(source: string) {
  return '```vue\n' + source + '\n```'
}

const demoBreadcrumb = [
  {
    label: 'Home',
    hideLabel: true,
    icon: 'lucide:home',
    to: '/',
  },
  {
    label: 'Components Hub',
    hideLabel: false,
    to: '/components',
  },
  {
    label: 'Progress Bar',
    hideLabel: false,
    to: '#/',
  },
]
</script>

<template>
  <div>
    <!-- BreadCrumb -->
    <BaseBreadcrumb :items="demoBreadcrumb" />

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
              <DocMarkdown
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
              <DocMarkdown
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
              <DocMarkdown
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
              <DocMarkdown
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
              <DocMarkdown
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
