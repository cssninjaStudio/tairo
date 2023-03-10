<script setup lang="ts">
import BaseDemo from '~/documentation/form/animated-checkbox/base.vue'
import base from '~/documentation/form/animated-checkbox/base.vue?raw'
import BooleanDemo from '~/documentation/form/animated-checkbox/boolean.vue'
import boolean from '~/documentation/form/animated-checkbox/boolean.vue?raw'
import CustomDemo from '~/documentation/form/animated-checkbox/custom.vue'
import custom from '~/documentation/form/animated-checkbox/custom.vue?raw'
import TrueFalseDemo from '~/documentation/form/animated-checkbox/true-false.vue'
import trueFalse from '~/documentation/form/animated-checkbox/true-false.vue?raw'

definePageMeta({
  title: 'Checkbox Animated',
  documentation: {
    category: 'NUI Forms',
    components: ['BaseAnimatedCheckbox'],
  },
})

function wrapVueMarkdown(source: string) {
  return '```vue\n' + source + '\n```'
}

const model = `
const options = ref(['Option 1', 'Option 2'])
`

const vmodel = `
const checked = ref(false)
`
const customVmodel = `
const customValue = ref()
`
</script>

<template>
  <div>
    <BaseBreadcrumb />

    <!-- Documentation Layout -->
    <DocLayout>
      <!-- content -->
      <template #content>
        <!-- Animated checkbox -->
        <DocSection id="animated-checkbox" title="Checkbox colors" tag="1.0.0">
          <DocComponent label="A nice and friendly checkbox">
            <template #demo>
              <div class="flex flex-col gap-6 md:flex-row md:items-start">
                <BaseFocusLoop class="flex flex-wrap items-end gap-4 w-3/5">
                  <BaseDemo />
                </BaseFocusLoop>

                <!-- State box -->
                <DocState
                  label="V-Model"
                  :state="model"
                  height="80px"
                  class="w-2/5"
                />
              </div>
            </template>
            <template #code>
              <AddonMarkdownRemark
                :source="wrapVueMarkdown(base)"
                class="prose max-w-full"
              />
            </template>
          </DocComponent>
        </DocSection>

        <!-- Animated boolean -->
        <DocSection
          id="animated-checkbox-boolean"
          title="Boolean value"
          tag="1.0.0"
        >
          <DocComponent label="Use an array or a boolean as model">
            <template #demo>
              <div class="flex flex-col gap-6 md:flex-row md:items-start">
                <BaseFocusLoop class="flex flex-wrap items-end gap-4 w-3/5">
                  <BooleanDemo />
                </BaseFocusLoop>

                <!-- State box -->
                <DocState
                  label="V-Model"
                  :state="vmodel"
                  height="80px"
                  class="w-2/5"
                />
              </div>
            </template>
            <template #code>
              <AddonMarkdownRemark
                :source="wrapVueMarkdown(boolean)"
                class="prose max-w-full"
              />
            </template>
          </DocComponent>
        </DocSection>

        <!-- Custom value -->
        <DocSection
          id="animated-checkbox-custom"
          title="Custom value"
          tag="1.0.0"
        >
          <DocComponent
            label="Use true-value/false-value to create custom behavior"
          >
            <template #demo>
              <div class="flex flex-col gap-6 md:flex-row md:items-start">
                <div class="flex flex-wrap items-end gap-4 w-3/5">
                  <CustomDemo />
                </div>

                <!-- State box -->
                <DocState
                  label="V-Model"
                  :state="vmodel"
                  height="80px"
                  class="w-2/5"
                />
              </div>
            </template>
            <template #code>
              <AddonMarkdownRemark
                :source="wrapVueMarkdown(custom)"
                class="prose max-w-full"
              />
            </template>
          </DocComponent>
        </DocSection>

        <!-- Animated true-value/false-value -->
        <DocSection
          id="animated-checkbox-true-false"
          title="Static value"
          tag="1.0.0"
        >
          <DocComponent
            label="Use true-value/false-value to create custom behavior"
          >
            <template #demo>
              <div class="flex flex-col gap-6 md:flex-row md:items-start">
                <div class="flex flex-wrap items-end gap-4 w-3/5">
                  <TrueFalseDemo />
                </div>

                <!-- State box -->
                <DocState
                  label="V-Model"
                  :state="customVmodel"
                  height="80px"
                  class="w-2/5"
                />
              </div>
            </template>
            <template #code>
              <AddonMarkdownRemark
                :source="wrapVueMarkdown(trueFalse)"
                class="prose max-w-full"
              />
            </template>
          </DocComponent>
        </DocSection>

        <!-- Animated checkbox properties -->
        <DocComponentMeta name="BaseAnimatedCheckbox" />
      </template>
      <!-- Toc -->
      <template #toc>
        <DocToc />
      </template>
    </DocLayout>
  </div>
</template>
