<script setup lang="ts">
import Slider from '@vueform/slider'

import circle from '~/documentation/form/slider/circle.md?raw'
import colors from '~/documentation/form/slider/colors.md?raw'
import curved from '~/documentation/form/slider/curved.md?raw'
import formatTooltip from '~/documentation/form/slider/format-tooltip.md?raw'
import mergeTooltip from '~/documentation/form/slider/merge-tooltip.md?raw'
import multipleHandle from '~/documentation/form/slider/multiple-handle.md?raw'
import rounded from '~/documentation/form/slider/rounded.md?raw'
import straight from '~/documentation/form/slider/straight.md?raw'

const properties = {
  props: [
    {
      name: 'v-model',
      type: 'number',
      required: 'false',
      default: '0',
      values: ['number'],
    },
    {
      name: 'format',
      type: 'string',
      required: 'false',
      default: 'undefined',
      values: ['string'],
    },
    {
      name: 'merge',
      type: 'number',
      required: 'false',
      default: 'undefined',
      values: ['number'],
    },
  ],
  slots: [],
}

const value = ref(20)
const info = ref(38)
const success = ref(84)
const warning = ref(53)
const danger = ref(67)
const multiple = ref([16, 84])
const format = (value: any) => {
  return `${value}%`
}
const mergeValue = ref([20, 50, 80])
const merge = ref(10)

definePageMeta({
  title: 'Sliders',
  documentation: {
    category: 'Addons',
    components: ['Slider'],
  },
})
</script>

<template>
  <div>
    <!-- BreadCrumb -->
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
                  <Slider v-model="value" class="straight-tooltip" />
                </div>
                <!-- State box -->
                <DocState :state="value" height="80px" />
              </div>
            </template>
            <template #code>
              <DocMarkdown :source="straight" class="prose max-w-full" />
            </template>
          </DocComponent>
        </DocSection>

        <!-- Slider rounded -->
        <DocSection title="Rounded tooltip" tag="1.0.0">
          <DocComponent label="Rounded tooltip example">
            <template #demo>
              <div class="flex flex-col gap-6 md:flex-row md:items-end">
                <div class="w-full max-w-sm space-y-4 px-4">
                  <Slider v-model="value" class="rounded-tooltip" />
                </div>
                <!-- State box -->
                <DocState :state="value" height="80px" />
              </div>
            </template>
            <template #code>
              <DocMarkdown :source="rounded" class="prose max-w-full" />
            </template>
          </DocComponent>
        </DocSection>

        <!-- Slider curved -->
        <DocSection title="Curved tooltip" tag="1.0.0">
          <DocComponent label="Curved tooltip example">
            <template #demo>
              <div class="flex flex-col gap-6 md:flex-row md:items-end">
                <div class="w-full max-w-sm space-y-4 px-4">
                  <Slider v-model="value" class="curved-tooltip" />
                </div>
                <!-- State box -->
                <DocState :state="value" height="80px" />
              </div>
            </template>
            <template #code>
              <DocMarkdown :source="curved" class="prose max-w-full" />
            </template>
          </DocComponent>
        </DocSection>

        <!-- Slider circle -->
        <DocSection title="Circle tooltip" tag="1.0.0">
          <DocComponent label="Circle tooltip example">
            <template #demo>
              <div class="flex flex-col gap-6 md:flex-row md:items-end">
                <div class="w-full max-w-sm space-y-4 px-4">
                  <Slider v-model="value" class="circle-tooltip" />
                </div>
                <!-- State box -->
                <DocState :state="value" height="80px" />
              </div>
            </template>
            <template #code>
              <DocMarkdown :source="circle" class="prose max-w-full" />
            </template>
          </DocComponent>
        </DocSection>

        <!-- Slider colors -->
        <DocSection title="Slider colors" tag="1.0.0">
          <DocComponent label="Slider colors example">
            <template #demo>
              <div class="grid gap-4 md:grid-cols-2">
                <div class="px-4 py-6">
                  <Slider v-model="info" class="slider-info circle-tooltip" />
                </div>

                <div class="px-4 py-6">
                  <Slider
                    v-model="success"
                    class="slider-success circle-tooltip"
                  />
                </div>

                <div class="px-4 py-6">
                  <Slider
                    v-model="warning"
                    class="slider-warning circle-tooltip"
                  />
                </div>

                <div class="px-4 py-6">
                  <Slider
                    v-model="danger"
                    class="slider-danger circle-tooltip"
                  />
                </div>
              </div>
            </template>
            <template #code>
              <DocMarkdown :source="colors" class="prose max-w-full" />
            </template>
          </DocComponent>
        </DocSection>

        <!-- Slider multiple -->
        <DocSection title="Multiple handles" tag="1.0.0">
          <DocComponent label="Multiple handles example">
            <template #demo>
              <div class="flex flex-col gap-6 md:flex-row md:items-end">
                <div class="w-full max-w-sm space-y-4 px-4">
                  <Slider v-model="multiple" class="circle-tooltip" />
                </div>
                <!-- State box -->
                <DocState :state="multiple" height="80px" />
              </div>
            </template>
            <template #code>
              <DocMarkdown :source="multipleHandle" class="prose max-w-full" />
            </template>
          </DocComponent>
        </DocSection>

        <!-- Slider format -->
        <DocSection title="Tooltip format" tag="1.0.0">
          <DocComponent label="Tooltip format example">
            <template #demo>
              <div class="flex flex-col gap-6 md:flex-row md:items-end">
                <div class="w-full max-w-sm space-y-4 px-4">
                  <Slider
                    v-model="value"
                    :format="format"
                    class="rounded-tooltip"
                  />
                </div>
                <!-- State box -->
                <DocState :state="value" height="80px" />
              </div>
            </template>
            <template #code>
              <DocMarkdown :source="formatTooltip" class="prose max-w-full" />
            </template>
          </DocComponent>
        </DocSection>

        <!-- Slider merge -->
        <DocSection title="Tooltip merging" tag="1.0.0">
          <DocComponent label="Tooltip merging example">
            <template #demo>
              <div class="flex flex-col gap-6 md:flex-row md:items-end">
                <div class="w-full max-w-sm space-y-4 px-4">
                  <Slider
                    v-model="mergeValue"
                    :merge="merge"
                    class="rounded-tooltip"
                  />
                </div>
                <!-- State box -->
                <DocState :state="mergeValue" height="80px" />
              </div>
            </template>
            <template #code>
              <DocMarkdown :source="mergeTooltip" class="prose max-w-full" />
            </template>
          </DocComponent>
        </DocSection>

        <!-- Slider properties -->
        <DocProps
          component="Slider"
          :properties="properties.props"
          :slots="properties.slots"
        />
      </template>
      <!-- Toc -->
      <template #toc>
        <DocToc />
      </template>
    </DocLayout>
  </div>
</template>
