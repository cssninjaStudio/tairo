<script setup lang="ts">
import AddonDemo from '#examples/textarea/addon.vue'
import addon from '#examples/textarea/addon.vue?raw'
import CondensedDemo from '#examples/textarea/condensed.vue'
import condensed from '#examples/textarea/condensed.vue?raw'
import CurvedDemo from '#examples/textarea/curved.vue'
import curved from '#examples/textarea/curved.vue?raw'
import DisabledDemo from '#examples/textarea/disabled.vue'
import disabled from '#examples/textarea/disabled.vue?raw'
import FocusDemo from '#examples/textarea/focus.vue'
import focus from '#examples/textarea/focus.vue?raw'
import InvalidDemo from '#examples/textarea/invalid.vue'
import invalid from '#examples/textarea/invalid.vue?raw'
import LabelFloatDemo from '#examples/textarea/label-float.vue'
import labelFloat from '#examples/textarea/label-float.vue?raw'
import LoadingDemo from '#examples/textarea/loading.vue'
import loading from '#examples/textarea/loading.vue?raw'
import RoundedDemo from '#examples/textarea/rounded.vue'
import rounded from '#examples/textarea/rounded.vue?raw'
import StraightDemo from '#examples/textarea/straight.vue'
import straight from '#examples/textarea/straight.vue?raw'

function wrapVueMarkdown(source: string) {
  return '```vue\n' + source + '\n```'
}

const model = `
const textarea = ref('')
`
</script>

<template>
  <div>
    <BaseBreadcrumb />

    <DocLayout>
      <template #content>
        <!-- Textarea straight -->
        <DocSection
          id="textarea-straight"
          title="Textarea straight"
          tag="1.0.0"
        >
          <DocComponent label="Straight textarea example">
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

        <!-- Textarea rounded -->
        <DocSection title="Textarea rounded" tag="1.0.0">
          <DocComponent label="Rounded textarea example">
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

        <!-- Textarea curved -->
        <DocSection title="Textarea curved" tag="1.0.0">
          <DocComponent label="Curved textarea example">
            <template #demo>
              <div class="flex items-end gap-6">
                <div class="w-full max-w-sm space-y-4">
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

        <!-- Textarea float label -->
        <DocSection title="Floating label" tag="1.0.0">
          <DocComponent label="Material style label example">
            <template #demo>
              <div class="flex items-end gap-6">
                <div class="w-full max-w-sm space-y-4">
                  <LabelFloatDemo />
                </div>
              </div>
            </template>
            <template #code>
              <AddonMarkdownRemark
                :source="wrapVueMarkdown(labelFloat)"
                fullwidth
              />
            </template>
          </DocComponent>
        </DocSection>

        <!-- Textarea condensed -->
        <DocSection title="Textarea condensed" tag="1.0.0">
          <DocComponent label="Smaller textarea example">
            <template #demo>
              <div class="flex items-end gap-6">
                <div class="w-full max-w-sm space-y-4">
                  <CondensedDemo />
                </div>
              </div>
            </template>
            <template #code>
              <AddonMarkdownRemark
                :source="wrapVueMarkdown(condensed)"
                fullwidth
              />
            </template>
          </DocComponent>
        </DocSection>

        <!-- Textarea focus -->
        <DocSection title="Textarea focus" tag="1.0.0">
          <DocComponent label="Primary focus variation">
            <template #demo>
              <div class="flex items-end gap-6">
                <div class="w-full max-w-sm space-y-4">
                  <FocusDemo />
                </div>
              </div>
            </template>
            <template #code>
              <AddonMarkdownRemark :source="wrapVueMarkdown(focus)" fullwidth />
            </template>
          </DocComponent>
        </DocSection>

        <!-- Textarea validation -->
        <DocSection title="Textarea invalid" tag="1.0.0">
          <DocComponent label="Invalid validation variation">
            <template #demo>
              <div class="flex items-end gap-6">
                <div class="w-full max-w-sm space-y-4">
                  <InvalidDemo />
                </div>
              </div>
            </template>
            <template #code>
              <AddonMarkdownRemark
                :source="wrapVueMarkdown(invalid)"
                fullwidth
              />
            </template>
          </DocComponent>
        </DocSection>

        <!-- Textarea loading -->
        <DocSection title="Textarea loading" tag="1.0.0">
          <DocComponent label="Loading state example">
            <template #demo>
              <div class="flex items-end gap-6">
                <div class="w-full max-w-sm space-y-4">
                  <LoadingDemo />
                </div>
              </div>
            </template>
            <template #code>
              <AddonMarkdownRemark
                :source="wrapVueMarkdown(loading)"
                fullwidth
              />
            </template>
          </DocComponent>
        </DocSection>

        <!-- Textarea disabled -->
        <DocSection
          id="textarea-disabled"
          title="Textarea disabled"
          tag="1.0.0"
        >
          <DocComponent label="Disabled state example">
            <template #demo>
              <div class="flex items-end gap-6">
                <div class="w-full max-w-sm space-y-4">
                  <DisabledDemo />
                </div>
              </div>
            </template>
            <template #code>
              <AddonMarkdownRemark
                :source="wrapVueMarkdown(disabled)"
                fullwidth
              />
            </template>
          </DocComponent>
        </DocSection>

        <!-- Textarea addon -->
        <DocSection title="Textarea addon" tag="1.0.0">
          <DocComponent label="Textarea with custom addon">
            <template #demo>
              <div class="flex items-end gap-6">
                <div class="w-full max-w-sm space-y-4">
                  <AddonDemo />
                </div>
              </div>
            </template>
            <template #code>
              <AddonMarkdownRemark :source="wrapVueMarkdown(addon)" fullwidth />
            </template>
          </DocComponent>
        </DocSection>

        <!-- Textarea properties -->
        <DocComponentMeta name="BaseTextarea" />
      </template>

      <template #toc>
        <DocToc />
      </template>
    </DocLayout>
  </div>
</template>
