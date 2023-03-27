<script setup lang="ts">
import CircleDemo from '../../../examples/checkbox/circle.vue'
import circle from '../../../examples/checkbox/circle.vue?raw'
import ColorsDemo from '../../../examples/checkbox/colors.vue'
import colors from '../../../examples/checkbox/colors.vue?raw'
import CurvedDemo from '../../../examples/checkbox/curved.vue'
import curved from '../../../examples/checkbox/curved.vue?raw'
import MultipleValueDemo from '../../../examples/checkbox/multiple-value.vue'
import multipleValue from '../../../examples/checkbox/multiple-value.vue?raw'
import RoundedDemo from '../../../examples/checkbox/rounded.vue'
import rounded from '../../../examples/checkbox/rounded.vue?raw'
import StraightDemo from '../../../examples/checkbox/straight.vue'
import straight from '../../../examples/checkbox/straight.vue?raw'
import TrueFalseDemo from '../../../examples/checkbox/true-false.vue'
import trueFalse from '../../../examples/checkbox/true-false.vue?raw'

function wrapVueMarkdown(source: string) {
  return '```vue\n' + source + '\n```'
}
</script>

<template>
  <div>
    <BaseBreadcrumb />

    <DocLayout>
      <template #content>
        <!-- Checkbox straight -->
        <DocSection
          id="checkbox-straight"
          title="Checkbox straight"
          tag="1.0.0"
        >
          <DocComponent label="Straight checkbox example">
            <template #demo>
              <div class="flex items-end gap-6">
                <StraightDemo />
              </div>
            </template>
            <template #code>
              <AddonMarkdownRemark
                :source="wrapVueMarkdown(straight)"
                fullwidth
              />
            </template>
          </DocComponent>
        </DocSection>

        <!-- Checkbox rounded -->
        <DocSection title="Checkbox rounded" tag="1.0.0">
          <DocComponent label="Rounded checkbox example">
            <template #demo>
              <div class="flex items-end gap-6">
                <RoundedDemo />
              </div>
            </template>
            <template #code>
              <AddonMarkdownRemark
                :source="wrapVueMarkdown(rounded)"
                fullwidth
              />
            </template>
          </DocComponent>
        </DocSection>

        <!-- Checkbox curved -->
        <DocSection title="Checkbox curved" tag="1.0.0">
          <DocComponent label="Curved checkbox example">
            <template #demo>
              <div class="flex items-start gap-6">
                <CurvedDemo />
              </div>
            </template>
            <template #code>
              <AddonMarkdownRemark
                :source="wrapVueMarkdown(curved)"
                fullwidth
              />
            </template>
          </DocComponent>
        </DocSection>

        <!-- Checkbox circle -->
        <DocSection title="Checkbox circle" tag="1.0.0">
          <DocComponent label="Circle checkbox example">
            <template #demo>
              <div class="flex items-end gap-6">
                <CircleDemo />
              </div>
            </template>
            <template #code>
              <AddonMarkdownRemark
                :source="wrapVueMarkdown(circle)"
                fullwidth
              />
            </template>
          </DocComponent>
        </DocSection>

        <!-- Multiple values -->
        <DocSection title="Multiple values" tag="1.0.0">
          <DocComponent label="Binding multiple values as v-model">
            <template #demo>
              <BaseFocusLoop class="flex flex-wrap items-end gap-4">
                <MultipleValueDemo />
              </BaseFocusLoop>
            </template>
            <template #code>
              <AddonMarkdownRemark
                :source="wrapVueMarkdown(multipleValue)"
                fullwidth
              />
            </template>
          </DocComponent>
        </DocSection>

        <!-- True False -->
        <DocSection title="True / false value" tag="1.0.0">
          <DocComponent label="Using true value as v-model">
            <template #demo>
              <BaseFocusLoop class="flex flex-wrap items-end gap-4">
                <TrueFalseDemo />
              </BaseFocusLoop>
            </template>
            <template #code>
              <AddonMarkdownRemark
                :source="wrapVueMarkdown(trueFalse)"
                fullwidth
              />
            </template>
          </DocComponent>
        </DocSection>

        <!-- Custom colors -->
        <DocSection title="Custom colors" tag="1.0.0">
          <DocComponent label="Custom colors example">
            <template #demo>
              <BaseFocusLoop class="flex flex-wrap items-end gap-4">
                <ColorsDemo />
              </BaseFocusLoop>
            </template>
            <template #code>
              <AddonMarkdownRemark
                :source="wrapVueMarkdown(colors)"
                fullwidth
              />
            </template>
          </DocComponent>
        </DocSection>

        <DocComponentMeta name="BaseCheckbox" />
      </template>
      <template #toc>
        <DocToc />
      </template>
    </DocLayout>
  </div>
</template>
