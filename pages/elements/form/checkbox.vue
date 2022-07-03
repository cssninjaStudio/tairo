<script setup lang="ts">
import { breadcrumb, toc } from '@@/documentation/elements/form/checkbox/toc'
import {
  circle,
  colors,
  curved,
  rounded,
  straight,
} from '@@/documentation/elements/form/checkbox'
import { properties } from '@@/documentation/elements/form/checkbox/properties'
import {
  demoFour,
  demoOne,
  demoStraight,
  demoThree,
  demoTwo,
} from '@@/documentation/elements/form/checkbox/data'

definePageMeta({
  title: 'Checkbox',
})
</script>

<template>
  <div>
    <!-- BreadCrumb -->
    <BaseBreadcrumb :items="breadcrumb" separator="dot" />

    <!-- Documentation Layout -->
    <DocLayout>
      <!-- content -->
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
                  <BaseFormCheckbox
                    v-model="demoOne"
                    name="demo-1"
                    label="Straight checkbox"
                    shape="straight"
                    class="text-gray-500"
                  />
                </div>
                <!-- State box -->
                <DocState :state="demoOne" height="80px" />
              </div>
            </template>
            <template #code>
              <DocCode language="html" :code="straight" />
            </template>
          </DocComponent>
        </DocSection>

        <!-- Checkbox rounded -->
        <DocSection id="checkbox-rounded" title="Checkbox rounded" tag="1.0.0">
          <DocComponent label="Rounded checkbox example">
            <template #demo>
              <div class="flex items-end gap-6">
                <div class="w-full max-w-sm space-y-4">
                  <BaseFormCheckbox
                    v-model="demoTwo"
                    name="demo-2"
                    label="Rounded checkbox"
                    shape="rounded"
                    class="text-gray-500"
                  />
                </div>
                <!-- State box -->
                <DocState :state="demoTwo" height="80px" />
              </div>
            </template>
            <template #code>
              <DocCode language="html" :code="rounded" />
            </template>
          </DocComponent>
        </DocSection>

        <!-- Checkbox curved -->
        <DocSection id="checkbox-curved" title="Checkbox curved" tag="1.0.0">
          <DocComponent label="Curved checkbox example">
            <template #demo>
              <div class="flex items-end gap-6">
                <div class="w-full max-w-sm space-y-4">
                  <BaseFormCheckbox
                    v-model="demoThree"
                    name="demo-3"
                    label="Curved checkbox"
                    shape="curved"
                    class="text-gray-500"
                  />
                </div>
                <!-- State box -->
                <DocState :state="demoThree" height="80px" />
              </div>
            </template>
            <template #code>
              <DocCode language="html" :code="curved" />
            </template>
          </DocComponent>
        </DocSection>

        <!-- Checkbox circle -->
        <DocSection id="checkbox-circle" title="Checkbox circle" tag="1.0.0">
          <DocComponent label="Circle checkbox example">
            <template #demo>
              <div class="flex items-end gap-6">
                <div class="w-full max-w-sm space-y-4">
                  <BaseFormCheckbox
                    v-model="demoFour"
                    name="demo-4"
                    label="Circle checkbox"
                    shape="circle"
                    class="text-gray-500"
                  />
                </div>
                <!-- State box -->
                <DocState :state="demoFour" height="80px" />
              </div>
            </template>
            <template #code>
              <DocCode language="html" :code="circle" />
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
              <FocusLoop class="flex items-end flex-wrap gap-4">
                <BaseFormCheckbox
                  v-model="demoStraight"
                  name="demo-5"
                  label="Straight"
                  shape="straight"
                  class="text-gray-500"
                />

                <BaseFormCheckbox
                  v-model="demoStraight"
                  name="demo-6"
                  label="Straight"
                  shape="straight"
                  class="text-emerald-500"
                />

                <BaseFormCheckbox
                  v-model="demoStraight"
                  name="demo-7"
                  label="Rounded"
                  shape="rounded"
                  class="text-yellow-500"
                />

                <BaseFormCheckbox
                  v-model="demoStraight"
                  name="demo-8"
                  label="Rounded"
                  shape="rounded"
                  class="text-pink-500"
                />

                <BaseFormCheckbox
                  v-model="demoStraight"
                  name="demo-9"
                  label="Curved"
                  shape="curved"
                  class="text-indigo-500"
                />

                <BaseFormCheckbox
                  v-model="demoStraight"
                  name="demo-10"
                  label="Curved"
                  shape="curved"
                  class="text-primary-500"
                />

                <BaseFormCheckbox
                  v-model="demoStraight"
                  name="demo-11"
                  label="Circle"
                  shape="circle"
                  class="text-amber-500"
                />

                <BaseFormCheckbox
                  v-model="demoStraight"
                  name="demo-12"
                  label="Circle"
                  shape="circle"
                  class="text-rose-500"
                />
              </FocusLoop>
            </template>
            <template #code>
              <DocCode language="html" :code="colors" />
            </template>
          </DocComponent>
        </DocSection>

        <!-- Checkbox properties -->
        <DocProps
          id="checkbox-props"
          component="Checkbox"
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
