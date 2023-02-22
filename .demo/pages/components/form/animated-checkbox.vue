<script setup lang="ts">
import base from '~/documentation/form/animated-checkbox/base.md?raw'

definePageMeta({
  title: 'Animated checkbox',
  documentation: {
    category: 'Forms',
    components: ['BaseAnimatedCheckbox'],
  },
})

const options = ref([
  'Option 1',
  'Option 2',
  'Option 3',
  'Option 4',
  'Option 5',
  'Option 6',
  'Option 7',
  'Option 8',
  'Option 9',
  'Option 10',
  'Option 11',
  'Option 12',
  'Option 13',
  'Option 14',
  'Option 15',
  'Option 16',
  'Option 17',
  'Option 18',
  'Option 19',
])

const checked = ref(false)
const customValue = ref()
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
          title="Animated checkbox colors"
          tag="1.0.0"
        >
          <DocComponent label="A nice and friendly checkbox">
            <template #demo>
              <div class="flex flex-col gap-6 md:flex-row md:items-start">
                <BaseFocusLoop class="flex flex-wrap items-end gap-4 w-3/5">
                  <BaseAnimatedCheckbox
                    v-model="options"
                    value="Option 1"
                    class="text-primary-500"
                  />
                  <BaseAnimatedCheckbox
                    v-model="options"
                    value="Option 2"
                    class="text-lime-500"
                  />
                  <BaseAnimatedCheckbox
                    v-model="options"
                    value="Option 3"
                    class="text-green-500"
                  />
                  <BaseAnimatedCheckbox
                    v-model="options"
                    value="Option 4"
                    class="text-emerald-500"
                  />
                  <BaseAnimatedCheckbox
                    v-model="options"
                    value="Option 5"
                    class="text-teal-500"
                  />
                  <BaseAnimatedCheckbox
                    v-model="options"
                    value="Option 6"
                    class="text-cyan-500"
                  />
                  <BaseAnimatedCheckbox
                    v-model="options"
                    value="Option 7"
                    class="text-sky-500"
                  />
                  <BaseAnimatedCheckbox
                    v-model="options"
                    value="Option 8"
                    class="text-blue-500"
                  />
                  <BaseAnimatedCheckbox
                    v-model="options"
                    value="Option 9"
                    class="text-indigo-500"
                  />
                  <BaseAnimatedCheckbox
                    v-model="options"
                    value="Option 10"
                    class="text-purple-500"
                  />
                  <BaseAnimatedCheckbox
                    v-model="options"
                    value="Option 11"
                    class="text-fuchsia-500"
                  />
                  <BaseAnimatedCheckbox
                    v-model="options"
                    value="Option 12"
                    class="text-pink-500"
                  />
                  <BaseAnimatedCheckbox
                    v-model="options"
                    value="Option 13"
                    class="text-rose-500"
                  />
                  <BaseAnimatedCheckbox
                    v-model="options"
                    value="Option 14"
                    class="text-red-500"
                  />
                  <BaseAnimatedCheckbox
                    v-model="options"
                    value="Option 15"
                    class="text-orange-500"
                  />
                  <BaseAnimatedCheckbox
                    v-model="options"
                    value="Option 16"
                    class="text-amber-500"
                  />
                  <BaseAnimatedCheckbox
                    v-model="options"
                    value="Option 17"
                    class="text-yellow-500"
                  />
                  <BaseAnimatedCheckbox
                    v-model="options"
                    value="Option 18"
                    class="text-muted-800 dark:text-muted-200"
                  />
                  <BaseAnimatedCheckbox
                    v-model="options"
                    value="Option 19"
                    class="text-gray-400 dark:text-gray-500"
                  />
                </BaseFocusLoop>

                <!-- State box -->
                <DocState :state="options" height="80px" class="w-2/5" />
              </div>
            </template>
            <template #code>
              <DocMarkdown :source="base" class="prose max-w-full" />
            </template>
          </DocComponent>
        </DocSection>

        <!-- Animated boolean -->
        <DocSection
          id="animated-checkbox"
          title="Animated checkbox with boolean value"
          tag="1.0.0"
        >
          <DocComponent label="Use an array or a boolean as model">
            <template #demo>
              <div class="flex flex-col gap-6 md:flex-row md:items-start">
                <BaseFocusLoop class="flex flex-wrap items-end gap-4 w-3/5">
                  <BaseAnimatedCheckbox
                    v-model="checked"
                    class="text-primary-500"
                  />
                </BaseFocusLoop>

                <!-- State box -->
                <DocState :state="checked" height="80px" class="w-2/5" />
              </div>
            </template>
            <template #code>
              <DocMarkdown :source="base" class="prose max-w-full" />
            </template>
          </DocComponent>
        </DocSection>

        <!-- Animated boolean -->
        <DocSection
          id="animated-checkbox"
          title="Animated checkbox with custom value"
          tag="1.0.0"
        >
          <DocComponent
            label="Use true-value/false-value to create custom behavior"
          >
            <template #demo>
              <div class="flex flex-col gap-6 md:flex-row md:items-start">
                <div class="flex flex-wrap items-end gap-4 w-3/5">
                  <BaseAnimatedCheckbox
                    v-model="customValue"
                    :true-value="'checked'"
                    :false-value="'not-checked'"
                    class="text-primary-500"
                  />
                </div>

                <!-- State box -->
                <DocState :state="customValue" height="80px" class="w-2/5" />
              </div>
            </template>
            <template #code>
              <DocMarkdown :source="base" class="prose max-w-full" />
            </template>
          </DocComponent>
        </DocSection>

        <!-- Animated true-value/false-value -->
        <DocSection
          id="animated-checkbox"
          title="Animated checkbox with static value"
          tag="1.0.0"
        >
          <DocComponent
            label="Use true-value/false-value to create custom behavior"
          >
            <template #demo>
              <div class="flex flex-col gap-6 md:flex-row md:items-start">
                <div class="flex flex-wrap items-end gap-4 w-3/5">
                  <BaseAnimatedCheckbox class="text-primary-500" />
                  <BaseAnimatedCheckbox
                    :model-value="true"
                    class="text-primary-500"
                  />
                  <BaseAnimatedCheckbox
                    :model-value="true"
                    disabled
                    class="text-primary-500"
                  />
                </div>

                <!-- State box -->
                <DocState :state="checked" height="80px" class="w-2/5" />
              </div>
            </template>
            <template #code>
              <DocMarkdown :source="base" class="prose max-w-full" />
            </template>
          </DocComponent>
        </DocSection>

        <!-- Animated checkbox properties -->
        <DocComponentMeta name="BaseAnimatedCheckbox" />
      </template>
      <!-- Toc -->
      <template #toc>
        <DocToc />
      </template>
    </DocLayout>
  </div>
</template>
