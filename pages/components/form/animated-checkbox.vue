<script setup lang="ts">
import {
  breadcrumb,
  toc,
} from '@@/documentation/components/form/animated-checkbox/toc'
import { base } from '@@/documentation/components/form/animated-checkbox'
import { properties } from '@@/documentation/components/form/animated-checkbox/properties'
import { options } from '@@/documentation/components/form/animated-checkbox/data'

definePageMeta({
  title: 'Animated checkbox',
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
        <!-- Animated checkbox -->
        <DocSection
          id="animated-checkbox"
          title="Animated checkbox"
          tag="1.0.0"
        >
          <DocComponent label="A nice and friendly checkbox">
            <template #demo>
              <FocusLoop class="flex items-end flex-wrap gap-4">
                <BaseFormAnimatedCheckbox
                  v-model="options"
                  value="Option 1"
                  class="text-primary-500"
                />
                <BaseFormAnimatedCheckbox
                  v-model="options"
                  value="Option 2"
                  class="text-lime-500"
                />
                <BaseFormAnimatedCheckbox
                  v-model="options"
                  value="Option 3"
                  class="text-green-500"
                />
                <BaseFormAnimatedCheckbox
                  v-model="options"
                  value="Option 4"
                  class="text-emerald-500"
                />
                <BaseFormAnimatedCheckbox
                  v-model="options"
                  value="Option 5"
                  class="text-teal-500"
                />
                <BaseFormAnimatedCheckbox
                  v-model="options"
                  value="Option 6"
                  class="text-cyan-500"
                />
                <BaseFormAnimatedCheckbox
                  v-model="options"
                  value="Option 7"
                  class="text-sky-500"
                />
                <BaseFormAnimatedCheckbox
                  v-model="options"
                  value="Option 8"
                  class="text-blue-500"
                />
                <BaseFormAnimatedCheckbox
                  v-model="options"
                  value="Option 9"
                  class="text-indigo-500"
                />
                <BaseFormAnimatedCheckbox
                  v-model="options"
                  value="Option 10"
                  class="text-purple-500"
                />
                <BaseFormAnimatedCheckbox
                  v-model="options"
                  value="Option 11"
                  class="text-fuchsia-500"
                />
                <BaseFormAnimatedCheckbox
                  v-model="options"
                  value="Option 12"
                  class="text-pink-500"
                />
                <BaseFormAnimatedCheckbox
                  v-model="options"
                  value="Option 13"
                  class="text-rose-500"
                />
                <BaseFormAnimatedCheckbox
                  v-model="options"
                  value="Option 14"
                  class="text-red-500"
                />
                <BaseFormAnimatedCheckbox
                  v-model="options"
                  value="Option 15"
                  class="text-orange-500"
                />
                <BaseFormAnimatedCheckbox
                  v-model="options"
                  value="Option 16"
                  class="text-amber-500"
                />
                <BaseFormAnimatedCheckbox
                  v-model="options"
                  value="Option 17"
                  class="text-yellow-500"
                />
                <BaseFormAnimatedCheckbox
                  v-model="options"
                  value="Option 18"
                  class="text-slate-800 dark:text-slate-200"
                />
                <BaseFormAnimatedCheckbox
                  v-model="options"
                  value="Option 19"
                  class="text-gray-400 dark:text-gray-500"
                />
              </FocusLoop>
            </template>
            <template #code>
              <DocCode language="html" :code="base" />
            </template>
          </DocComponent>
        </DocSection>

        <!-- Animated checkbox properties -->
        <DocProps
          id="animated-checkbox-props"
          component="Animated checkbox"
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
