<script setup lang="ts">
import CondensedDemo from '#examples/input/condensed.vue'
import condensed from '#examples/input/condensed.vue?raw'
import CurvedDemo from '#examples/input/curved.vue'
import curved from '#examples/input/curved.vue?raw'
import DisabledDemo from '#examples/input/disabled.vue'
import disabled from '#examples/input/disabled.vue?raw'
import FloatLabelDemo from '#examples/input/float-label.vue'
import floatLabel from '#examples/input/float-label.vue?raw'
import FocusDemo from '#examples/input/focus.vue'
import focus from '#examples/input/focus.vue?raw'
import FullDemo from '#examples/input/full.vue'
import full from '#examples/input/full.vue?raw'
import IconDemo from '#examples/input/icon.vue'
import icon from '#examples/input/icon.vue?raw'
import InvalidDemo from '#examples/input/invalid.vue'
import invalid from '#examples/input/invalid.vue?raw'
import LoadingDemo from '#examples/input/loading.vue'
import loading from '#examples/input/loading.vue?raw'
import RoundedDemo from '#examples/input/rounded.vue'
import rounded from '#examples/input/rounded.vue?raw'
import StraightDemo from '#examples/input/straight.vue'
import straight from '#examples/input/straight.vue?raw'

function wrapVueMarkdown(source: string) {
  return '```vue\n' + source + '\n```'
}

const model = 'const input = ref<string>'
</script>

<template>
  <div>
    <BaseBreadcrumb />

    <DocLayout>
      <template #content>
        <!-- Input straight -->
        <DocSection title="Input straight" tag="1.0.0">
          <DocComponent label="Straight input example">
            <template #demo>
              <div class="flex flex-col gap-6 md:flex-row md:items-end">
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

        <!-- Input rounded -->
        <DocSection title="Input rounded" tag="1.0.0">
          <DocComponent label="Rounded input example">
            <template #demo>
              <div class="flex flex-col gap-6 md:flex-row md:items-end">
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

        <!-- Input curved -->
        <DocSection title="Input curved" tag="1.0.0">
          <DocComponent label="Curved input example">
            <template #demo>
              <div class="flex flex-col gap-6 md:flex-row md:items-end">
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

        <!-- Input full -->
        <DocSection title="Input full" tag="1.0.0">
          <DocComponent label="Full input example">
            <template #demo>
              <div class="flex flex-col gap-6 md:flex-row md:items-end">
                <div class="w-full max-w-sm space-y-4">
                  <FullDemo />
                </div>
              </div>
            </template>
            <template #code>
              <AddonMarkdownRemark :source="wrapVueMarkdown(full)" fullwidth />
            </template>
          </DocComponent>
        </DocSection>

        <!-- Input icon -->
        <DocSection title="Input icon" tag="1.0.0">
          <DocComponent label="Icon input example">
            <template #demo>
              <IconDemo />
            </template>
            <template #code>
              <AddonMarkdownRemark :source="wrapVueMarkdown(icon)" fullwidth />
            </template>
          </DocComponent>
        </DocSection>

        <!-- Floating labels -->
        <DocSection title="Floating labels" tag="1.0.0">
          <DocComponent label="Material style labels example">
            <template #demo>
              <FloatLabelDemo />
            </template>
            <template #code>
              <AddonMarkdownRemark
                :source="wrapVueMarkdown(floatLabel)"
                fullwidth
              />
            </template>
          </DocComponent>
        </DocSection>

        <!-- Input condensed -->
        <DocSection title="Condensed inputs" tag="1.0.0">
          <DocComponent label="Smaller inputs example">
            <template #demo>
              <CondensedDemo />
            </template>
            <template #code>
              <AddonMarkdownRemark
                :source="wrapVueMarkdown(condensed)"
                fullwidth
              />
            </template>
          </DocComponent>
        </DocSection>

        <!-- Input focus -->
        <DocSection title="Colored focus" tag="1.0.0">
          <DocComponent label="Input primary focus example">
            <template #demo>
              <div class="flex flex-col gap-6 md:flex-row md:items-end">
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

        <!-- Input loading -->
        <DocSection title="Loading state" tag="1.0.0">
          <DocComponent label="Input loading state example">
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

        <!-- Input disabled -->
        <DocSection title="Disabled state" tag="1.0.0">
          <DocComponent label="Input disabled state example">
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

        <!-- Input invalid -->
        <DocSection title="Colored invalid" tag="1.0.0">
          <DocComponent label="Input invalid state example">
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

        <!-- Input properties -->
        <DocComponentMeta name="BaseInput" />
      </template>
      <template #toc>
        <DocToc />
      </template>
    </DocLayout>
  </div>
</template>
