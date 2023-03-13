<script setup lang="ts">
import BaseDemo from '../../../examples/form/animated-checkbox/base.vue'
import base from '../../../examples/form/animated-checkbox/base.vue?raw'
import BooleanDemo from '../../../examples/form/animated-checkbox/boolean.vue'
import boolean from '../../../examples/form/animated-checkbox/boolean.vue?raw'
import CustomDemo from '../../../examples/form/animated-checkbox/custom.vue'
import custom from '../../../examples/form/animated-checkbox/custom.vue?raw'
import TrueFalseDemo from '../../../examples/form/animated-checkbox/true-false.vue'
import trueFalse from '../../../examples/form/animated-checkbox/true-false.vue?raw'

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

    <DocLayout>
      <template #content>
        <!-- Animated checkbox -->
        <DocSection id="animated-checkbox" title="Checkbox colors" tag="1.0.0">
          <DocComponent label="A nice and friendly checkbox">
            <template #demo>
              <div class="flex flex-col gap-6 md:flex-row md:items-start">
                <BaseFocusLoop class="flex flex-wrap items-end gap-4 w-3/5">
                  <BaseDemo />
                </BaseFocusLoop>
              </div>
            </template>
            <template #code>
              <AddonMarkdownRemark :source="wrapVueMarkdown(base)" fullwidth />
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
              </div>
            </template>
            <template #code>
              <AddonMarkdownRemark
                :source="wrapVueMarkdown(boolean)"
                fullwidth
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
              </div>
            </template>
            <template #code>
              <AddonMarkdownRemark
                :source="wrapVueMarkdown(custom)"
                fullwidth
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
              </div>
            </template>
            <template #code>
              <AddonMarkdownRemark
                :source="wrapVueMarkdown(trueFalse)"
                fullwidth
              />
            </template>
          </DocComponent>
        </DocSection>

        <!-- Animated checkbox properties -->
        <DocComponentMeta name="BaseAnimatedCheckbox" />
      </template>
      <template #toc>
        <DocToc />
      </template>
    </DocLayout>
  </div>
</template>
