<script setup lang="ts">
import Slider from '@vueform/slider'

import CircleDemo from '~/documentation/form/slider/circle.vue'
import circle from '~/documentation/form/slider/circle.vue?raw'
import ColorsDemo from '~/documentation/form/slider/colors.vue'
import colors from '~/documentation/form/slider/colors.vue?raw'
import CurvedDemo from '~/documentation/form/slider/curved.vue'
import curved from '~/documentation/form/slider/curved.vue?raw'
import FormatTooltipDemo from '~/documentation/form/slider/format-tooltip.vue'
import formatTooltip from '~/documentation/form/slider/format-tooltip.vue?raw'
import MergeTooltipDemo from '~/documentation/form/slider/merge-tooltip.vue'
import mergeTooltip from '~/documentation/form/slider/merge-tooltip.vue?raw'
import MultipleHandleDemo from '~/documentation/form/slider/multiple-handle.vue'
import multipleHandle from '~/documentation/form/slider/multiple-handle.vue?raw'
import RoundedDemo from '~/documentation/form/slider/rounded.vue'
import rounded from '~/documentation/form/slider/rounded.vue?raw'
import StraightDemo from '~/documentation/form/slider/straight.vue'
import straight from '~/documentation/form/slider/straight.vue?raw'

definePageMeta({
  title: 'Sliders',
  documentation: {
    category: 'Addons',
    components: ['Slider'],
  },
})

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

    <!-- Documentation Layout -->
    <DocLayout>
      <!-- content -->
      <template #content>
        <!-- Slider straight -->
        <DocSection title="Straight tooltip" tag="1.0.0">
          <DocComponent label="Straight tooltip example">
            <template #demo>
              <div class="flex flex-col gap-6 md:flex-row md:items-end">
                <div class="w-full max-w-sm space-y-4 px-4">
                  <StraightDemo />
                </div>
                <!-- State box -->
                <DocState label="V-Model" :state="model" height="80px" />
              </div>
            </template>
            <template #code>
              <AddonMarkdownRemark
                :source="wrapVueMarkdown(straight)"
                class="prose max-w-full"
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
                <!-- State box -->
                <DocState label="V-Model" :state="model" height="80px" />
              </div>
            </template>
            <template #code>
              <AddonMarkdownRemark
                :source="wrapVueMarkdown(rounded)"
                class="prose max-w-full"
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
                <!-- State box -->
                <DocState label="V-Model" :state="model" height="80px" />
              </div>
            </template>
            <template #code>
              <AddonMarkdownRemark
                :source="wrapVueMarkdown(curved)"
                class="prose max-w-full"
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
                <!-- State box -->
                <DocState label="V-Model" :state="model" height="80px" />
              </div>
            </template>
            <template #code>
              <AddonMarkdownRemark
                :source="wrapVueMarkdown(circle)"
                class="prose max-w-full"
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
                class="prose max-w-full"
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
                <!-- State box -->
                <DocState
                  label="V-Model"
                  :state="multipleModel"
                  height="80px"
                />
              </div>
            </template>
            <template #code>
              <AddonMarkdownRemark
                :source="wrapVueMarkdown(multipleHandle)"
                class="prose max-w-full"
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
                <!-- State box -->
                <DocState label="V-Model" :state="model" height="80px" />
              </div>
            </template>
            <template #code>
              <AddonMarkdownRemark
                :source="wrapVueMarkdown(formatTooltip)"
                class="prose max-w-full"
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
                <!-- State box -->
                <DocState
                  label="V-Model"
                  :state="multipleModel"
                  height="80px"
                />
              </div>
            </template>
            <template #code>
              <AddonMarkdownRemark
                :source="wrapVueMarkdown(mergeTooltip)"
                class="prose max-w-full"
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
      <!-- Toc -->
      <template #toc>
        <DocToc />
      </template>
    </DocLayout>
  </div>
</template>
