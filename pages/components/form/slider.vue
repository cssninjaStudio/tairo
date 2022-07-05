<script setup lang="ts">
import Slider from '@vueform/slider'
import { breadcrumb, toc } from '@@/documentation/components/form/slider/toc'
import {
  circle,
  colors,
  curved,
  formatTooltip,
  mergeTooltip,
  multipleHandle,
  rounded,
  straight,
} from '@@/documentation/components/form/slider'
import { properties } from '@@/documentation/components/form/slider/properties'
import {
  danger,
  format,
  info,
  merge,
  mergeValue,
  multiple,
  success,
  value,
  warning,
} from '@@/documentation/components/form/slider/data'

definePageMeta({
  title: 'Sliders',
  documentation: {
    category: 'Forms',
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
        <DocSection id="slider-straight" title="Straight tooltip" tag="1.0.0">
          <DocComponent label="Straight tooltip example">
            <template #demo>
              <div class="flex flex-col md:flex-row md:items-end gap-6">
                <div class="w-full max-w-sm space-y-4 px-4">
                  <Slider v-model="value" class="straight-tooltip" />
                </div>
                <!-- State box -->
                <DocState :state="value" height="80px" />
              </div>
            </template>
            <template #code>
              <DocCode language="html" :code="straight" />
            </template>
          </DocComponent>
        </DocSection>

        <!-- Slider rounded -->
        <DocSection id="slider-rounded" title="Rounded tooltip" tag="1.0.0">
          <DocComponent label="Rounded tooltip example">
            <template #demo>
              <div class="flex flex-col md:flex-row md:items-end gap-6">
                <div class="w-full max-w-sm space-y-4 px-4">
                  <Slider v-model="value" class="rounded-tooltip" />
                </div>
                <!-- State box -->
                <DocState :state="value" height="80px" />
              </div>
            </template>
            <template #code>
              <DocCode language="html" :code="rounded" />
            </template>
          </DocComponent>
        </DocSection>

        <!-- Slider curved -->
        <DocSection id="slider-curved" title="Curved tooltip" tag="1.0.0">
          <DocComponent label="Curved tooltip example">
            <template #demo>
              <div class="flex flex-col md:flex-row md:items-end gap-6">
                <div class="w-full max-w-sm space-y-4 px-4">
                  <Slider v-model="value" class="curved-tooltip" />
                </div>
                <!-- State box -->
                <DocState :state="value" height="80px" />
              </div>
            </template>
            <template #code>
              <DocCode language="html" :code="curved" />
            </template>
          </DocComponent>
        </DocSection>

        <!-- Slider circle -->
        <DocSection id="slider-circle" title="Circle tooltip" tag="1.0.0">
          <DocComponent label="Circle tooltip example">
            <template #demo>
              <div class="flex flex-col md:flex-row md:items-end gap-6">
                <div class="w-full max-w-sm space-y-4 px-4">
                  <Slider v-model="value" class="circle-tooltip" />
                </div>
                <!-- State box -->
                <DocState :state="value" height="80px" />
              </div>
            </template>
            <template #code>
              <DocCode language="html" :code="circle" />
            </template>
          </DocComponent>
        </DocSection>

        <!-- Slider colors -->
        <DocSection id="slider-colors" title="Slider colors" tag="1.0.0">
          <DocComponent label="Slider colors example">
            <template #demo>
              <div class="grid md:grid-cols-2 gap-4">
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
              <DocCode language="html" :code="colors" />
            </template>
          </DocComponent>
        </DocSection>

        <!-- Slider multiple -->
        <DocSection id="slider-multiple" title="Multiple handles" tag="1.0.0">
          <DocComponent label="Multiple handles example">
            <template #demo>
              <div class="flex flex-col md:flex-row md:items-end gap-6">
                <div class="w-full max-w-sm space-y-4 px-4">
                  <Slider v-model="multiple" class="circle-tooltip" />
                </div>
                <!-- State box -->
                <DocState :state="multiple" height="80px" />
              </div>
            </template>
            <template #code>
              <DocCode language="html" :code="multipleHandle" />
            </template>
          </DocComponent>
        </DocSection>

        <!-- Slider format -->
        <DocSection id="slider-format" title="Tooltip format" tag="1.0.0">
          <DocComponent label="Tooltip format example">
            <template #demo>
              <div class="flex flex-col md:flex-row md:items-end gap-6">
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
              <DocCode language="html" :code="formatTooltip" />
            </template>
          </DocComponent>
        </DocSection>

        <!-- Slider merge -->
        <DocSection id="slider-merge" title="Tooltip merging" tag="1.0.0">
          <DocComponent label="Tooltip merging example">
            <template #demo>
              <div class="flex flex-col md:flex-row md:items-end gap-6">
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
              <DocCode language="html" :code="mergeTooltip" />
            </template>
          </DocComponent>
        </DocSection>

        <!-- Slider properties -->
        <DocProps
          id="slider-props"
          component="Slider"
          :properties="properties.props"
          :slots="properties.slots"
        />
      </template>
      <!-- Toc -->
      <template #toc>
        <DocToc :anchors="toc" />
      </template>
    </DocLayout>
  </div>
</template>
