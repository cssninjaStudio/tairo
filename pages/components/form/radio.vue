<script setup lang="ts">
import { base, colors } from '@@/documentation/components/form/radio'
import {
  demoColors,
  radioSelected,
} from '@@/documentation/components/form/radio/data'

import { metaBaseFormRadio } from '#nuxt-component-meta'

definePageMeta({
  title: 'Radios',
  documentation: {
    category: 'Forms',
    components: ['BaseFormRadio'],
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
        <!-- Radio straight -->
        <DocSection title="Radio buttons" tag="1.0.0">
          <DocComponent label="Radio buttons example">
            <template #demo>
              <div class="flex items-end gap-6">
                <div class="flex w-full max-w-sm items-end gap-6">
                  <BaseFormRadio
                    id="demo-options-1"
                    v-model="radioSelected"
                    name="demo_options"
                    label="Option 1"
                    value="option_1"
                    class="text-gray-500"
                  />

                  <BaseFormRadio
                    id="demo-options-2"
                    v-model="radioSelected"
                    name="demo_options"
                    label="Option 2"
                    value="option_2"
                    class="text-gray-500"
                  />

                  <BaseFormRadio
                    id="demo-options-3"
                    v-model="radioSelected"
                    name="demo_options"
                    label="Option 3"
                    value="option_3"
                    class="text-gray-500"
                  />
                </div>

                <!-- State box -->
                <DocState :state="radioSelected" height="80px" />
              </div>
            </template>
            <template #code>
              <DocCode language="html" :code="base" />
            </template>
          </DocComponent>
        </DocSection>

        <!-- Radio colors -->
        <DocSection title="Radio colors" tag="1.0.0">
          <DocComponent label="Radio colors examples">
            <template #demo>
              <div class="flex items-end gap-6">
                <div class="flex w-full max-w-sm flex-wrap items-end gap-6">
                  <BaseFormRadio
                    id="demo-colors-primary"
                    v-model="demoColors"
                    name="demo_colors"
                    label="color"
                    value="primary"
                    class="text-primary-500"
                  />

                  <BaseFormRadio
                    id="demo-colors-lime"
                    v-model="demoColors"
                    name="demo_colors"
                    label="color"
                    value="lime"
                    class="text-lime-500"
                  />

                  <BaseFormRadio
                    id="demo-colors-pink"
                    v-model="demoColors"
                    name="demo_colors"
                    label="color"
                    value="pink"
                    class="text-pink-500"
                  />

                  <BaseFormRadio
                    id="demo-colors-sky"
                    v-model="demoColors"
                    name="demo_colors"
                    label="color"
                    value="sky"
                    class="text-sky-500"
                  />

                  <BaseFormRadio
                    id="demo-colors-yellow"
                    v-model="demoColors"
                    name="demo_colors"
                    label="color"
                    value="yellow"
                    class="text-yellow-500"
                  />

                  <BaseFormRadio
                    id="demo-colors-indigo"
                    v-model="demoColors"
                    name="demo_colors"
                    label="color"
                    value="indigo"
                    class="text-indigo-500"
                  />

                  <BaseFormRadio
                    id="demo-colors-emerald"
                    v-model="demoColors"
                    name="demo_colors"
                    label="color"
                    value="emerald"
                    class="text-emerald-500"
                  />

                  <BaseFormRadio
                    id="demo-colors-fuchsia"
                    v-model="demoColors"
                    name="demo_colors"
                    label="color"
                    value="fuchsia"
                    class="text-fuchsia-500"
                  />

                  <BaseFormRadio
                    id="demo-colors-rose"
                    v-model="demoColors"
                    name="demo_colors"
                    label="color"
                    value="rose"
                    class="text-rose-500"
                  />
                </div>

                <!-- State box -->
                <DocState :state="demoColors" height="80px" />
              </div>
            </template>
            <template #code>
              <DocCode language="html" :code="colors" />
            </template>
          </DocComponent>
        </DocSection>

        <!-- Radio properties -->
        <DocComponentMeta :meta="metaBaseFormRadio" />
      </template>
      <!-- Toc -->
      <template #toc>
        <DocToc />
      </template>
    </DocLayout>
  </div>
</template>
