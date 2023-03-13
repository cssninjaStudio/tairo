<script setup lang="ts">
import CircleDemo from '../../../examples/form/checkbox/circle.vue'
import circle from '../../../examples/form/checkbox/circle.vue?raw'
import ColorsDemo from '../../../examples/form/checkbox/colors.vue'
import colors from '../../../examples/form/checkbox/colors.vue?raw'
import CurvedDemo from '../../../examples/form/checkbox/curved.vue'
import curved from '../../../examples/form/checkbox/curved.vue?raw'
import RoundedDemo from '../../../examples/form/checkbox/rounded.vue'
import rounded from '../../../examples/form/checkbox/rounded.vue?raw'
import StraightDemo from '../../../examples/form/checkbox/straight.vue'
import straight from '../../../examples/form/checkbox/straight.vue?raw'

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
                <div class="w-full max-w-sm space-y-4">
                  <StraightDemo />
                </div>
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
                <div class="w-full max-w-sm space-y-4">
                  <RoundedDemo />
                </div>
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
                <div class="w-full max-w-sm space-x-2">
                  <CurvedDemo />
                </div>
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
                <div class="w-full max-w-sm space-y-4">
                  <CircleDemo />
                </div>
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

        <!-- Checkbox straight -->
        <DocSection
          id="Checkbox-straight-colors"
          title="Straight colors"
          tag="1.0.0"
        >
          <DocComponent label="Straight checkbox example">
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
