<script setup lang="ts">
import CircleDemo from '../../../examples/slider/circle.vue'
import circle from '../../../examples/slider/circle.vue?raw'
import ColorsDemo from '../../../examples/slider/colors.vue'
import colors from '../../../examples/slider/colors.vue?raw'
import CurvedDemo from '../../../examples/slider/curved.vue'
import curved from '../../../examples/slider/curved.vue?raw'
import FormatTooltipDemo from '../../../examples/slider/format-tooltip.vue'
import formatTooltip from '../../../examples/slider/format-tooltip.vue?raw'
import MergeTooltipDemo from '../../../examples/slider/merge-tooltip.vue'
import mergeTooltip from '../../../examples/slider/merge-tooltip.vue?raw'
import MultipleHandleDemo from '../../../examples/slider/multiple-handle.vue'
import multipleHandle from '../../../examples/slider/multiple-handle.vue?raw'
import RoundedDemo from '../../../examples/slider/rounded.vue'
import rounded from '../../../examples/slider/rounded.vue?raw'
import StraightDemo from '../../../examples/slider/straight.vue'
import straight from '../../../examples/slider/straight.vue?raw'

function wrapVueMarkdown(source: string) {
  return '```vue\n' + source + '\n```'
}

const model = `
const value = ref(20)
`
const multipleModel = `
const value = ref([16, 84])
`
</script>

<template>
  <div>
    <BaseBreadcrumb />

    <DocLayout>
      <template #content>
        <!-- Slider straight -->
        <DocSection title="Straight tooltip" tag="1.0.0">
          <DocComponent label="Straight tooltip example">
            <template #demo>
              <div class="flex flex-col gap-6 md:flex-row md:items-end">
                <div class="w-full max-w-sm space-y-4 px-4">
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

        <!-- Slider rounded -->
        <DocSection title="Rounded tooltip" tag="1.0.0">
          <DocComponent label="Rounded tooltip example">
            <template #demo>
              <div class="flex flex-col gap-6 md:flex-row md:items-end">
                <div class="w-full max-w-sm space-y-4 px-4">
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

        <!-- Slider curved -->
        <DocSection title="Curved tooltip" tag="1.0.0">
          <DocComponent label="Curved tooltip example">
            <template #demo>
              <div class="flex flex-col gap-6 md:flex-row md:items-end">
                <div class="w-full max-w-sm space-y-4 px-4">
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

        <!-- Slider circle -->
        <DocSection title="Circle tooltip" tag="1.0.0">
          <DocComponent label="Circle tooltip example">
            <template #demo>
              <div class="flex flex-col gap-6 md:flex-row md:items-end">
                <div class="w-full max-w-sm space-y-4 px-4">
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

        <!-- Slider colors -->
        <DocSection title="Slider colors" tag="1.0.0">
          <DocComponent label="Slider colors example">
            <template #demo>
              <div class="grid gap-4 md:grid-cols-2">
                <ColorsDemo />
              </div>
            </template>
            <template #code>
              <AddonMarkdownRemark
                :source="wrapVueMarkdown(colors)"
                fullwidth
              />
            </template>
          </DocComponent>
        </DocSection>

        <!-- Slider multiple -->
        <DocSection title="Multiple handles" tag="1.0.0">
          <DocComponent label="Multiple handles example">
            <template #demo>
              <div class="flex flex-col gap-6 md:flex-row md:items-end">
                <div class="w-full max-w-sm space-y-4 px-4">
                  <MultipleHandleDemo />
                </div>
              </div>
            </template>
            <template #code>
              <AddonMarkdownRemark
                :source="wrapVueMarkdown(multipleHandle)"
                fullwidth
              />
            </template>
          </DocComponent>
        </DocSection>

        <!-- Slider format -->
        <DocSection title="Tooltip format" tag="1.0.0">
          <DocComponent label="Tooltip format example">
            <template #demo>
              <div class="flex flex-col gap-6 md:flex-row md:items-end">
                <div class="w-full max-w-sm space-y-4 px-4">
                  <FormatTooltipDemo />
                </div>
              </div>
            </template>
            <template #code>
              <AddonMarkdownRemark
                :source="wrapVueMarkdown(formatTooltip)"
                fullwidth
              />
            </template>
          </DocComponent>
        </DocSection>

        <!-- Slider merge -->
        <DocSection title="Tooltip merging" tag="1.0.0">
          <DocComponent label="Tooltip merging example">
            <template #demo>
              <div class="flex flex-col gap-6 md:flex-row md:items-end">
                <div class="w-full max-w-sm space-y-4 px-4">
                  <MergeTooltipDemo />
                </div>
              </div>
            </template>
            <template #code>
              <AddonMarkdownRemark
                :source="wrapVueMarkdown(mergeTooltip)"
                fullwidth
              />
            </template>
          </DocComponent>
        </DocSection>

        <!-- Slider properties -->
        <!-- <DocProps
          component="Slider"
          :properties="properties.props"
          :slots="properties.slots"
        /> -->
      </template>
      <template #toc>
        <DocToc />
      </template>
    </DocLayout>
  </div>
</template>
