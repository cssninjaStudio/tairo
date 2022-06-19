<script setup lang="ts">
// import { toc } from '@@/documentation/elements/animated-checkbox/toc'
// import { } from '@@/documentation/elements/animated-checkbox'

definePageMeta({
  title: 'Animated checkbox',
})

const breadcrumb = [
  {
    label: 'Home',
    hideLabel: true,
    icon: 'i-lucide-home',
    hideIcon: false,
    to: '/',
  },
  {
    label: 'Elements',
    hideLabel: false,
    icon: '',
    hideIcon: true,
    to: '/elements',
  },
  {
    label: 'Animated checkbox',
    hideLabel: false,
    icon: '',
    hideIcon: true,
    to: '/form/animated-checkbox',
  },
]

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
  'Option 20',
])
</script>

<template>
  <div>
    <!-- BreadCrumb -->
    <BaseBreadcrumb :items="breadcrumb" separator="dot" />

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
              <div class="flex items-end flex-wrap gap-4">
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
              </div>
            </template>
            <template #code></template>
          </DocComponent>
        </DocSection>
      </template>
      <!-- Toc -->
      <template #toc></template>
    </DocLayout>
  </div>
</template>
