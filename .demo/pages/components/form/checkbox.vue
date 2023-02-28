<script setup lang="ts">
import CircleDemo from '~/documentation/form/checkbox/circle.vue'
import circle from '~/documentation/form/checkbox/circle.vue?raw'
import ColorsDemo from '~/documentation/form/checkbox/colors.vue'
import colors from '~/documentation/form/checkbox/colors.vue?raw'
import CurvedDemo from '~/documentation/form/checkbox/curved.vue'
import curved from '~/documentation/form/checkbox/curved.vue?raw'
import RoundedDemo from '~/documentation/form/checkbox/rounded.vue'
import rounded from '~/documentation/form/checkbox/rounded.vue?raw'
import StraightDemo from '~/documentation/form/checkbox/straight.vue'
import straight from '~/documentation/form/checkbox/straight.vue?raw'

definePageMeta({
  title: 'Checkbox',
  documentation: {
    category: 'Forms',
    components: ['BaseCheckbox'],
  },
})

function wrapVueMarkdown(source: string) {
  return '```vue\n' + source + '\n```'
}

const demoBreadcrumb = [
  {
    label: 'Home',
    hideLabel: true,
    icon: 'lucide:home',
    to: '/',
  },
  {
    label: 'Components Hub',
    hideLabel: false,
    to: '/components',
  },
  {
    label: 'Checkbox',
    hideLabel: false,
    to: '#/',
  },
]

const booleanModel = `
const checkbox = ref(true)
`
const arrayModel = `
const checkbox = ref(['Option 1'])
`
</script>

<template>
  <div>
    <!-- BreadCrumb -->
    <BaseBreadcrumb :items="demoBreadcrumb" />

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
                  <StraightDemo />
                </div>
                <!-- State box -->
                <DocState label="V-Model" :state="booleanModel" height="80px" />
              </div>
            </template>
            <template #code>
              <DocMarkdown
                :source="wrapVueMarkdown(straight)"
                class="prose max-w-full"
              />
            </template>
          </DocComponent>
        </DocSection>

        <!-- Checkbox rounded -->
        <DocSection title="Checkbox rounded" tag="1.0.0">
          <DocComponent label="Rounded checkbox example">
            <template #demo>
              <div class="flex items-end gap-6">
                <div class="w-full max-w-sm space-y-4">
                  <RoundedDemo />
                </div>
                <!-- State box -->
                <DocState label="V-Model" :state="booleanModel" height="80px" />
              </div>
            </template>
            <template #code>
              <DocMarkdown
                :source="wrapVueMarkdown(rounded)"
                class="prose max-w-full"
              />
            </template>
          </DocComponent>
        </DocSection>

        <!-- Checkbox curved -->
        <DocSection title="Checkbox curved" tag="1.0.0">
          <DocComponent label="Curved checkbox example">
            <template #demo>
              <div class="flex items-start gap-6">
                <div class="w-full max-w-sm space-x-2">
                  <CurvedDemo />
                </div>
                <!-- State box -->
                <DocState label="V-Model" :state="arrayModel" height="80px" />
              </div>
            </template>
            <template #code>
              <DocMarkdown
                :source="wrapVueMarkdown(curved)"
                class="prose max-w-full"
              />
            </template>
          </DocComponent>
        </DocSection>

        <!-- Checkbox circle -->
        <DocSection title="Checkbox circle" tag="1.0.0">
          <DocComponent label="Circle checkbox example">
            <template #demo>
              <div class="flex items-end gap-6">
                <div class="w-full max-w-sm space-y-4">
                  <CircleDemo />
                </div>
                <!-- State box -->
                <DocState label="V-Model" :state="booleanModel" height="80px" />
              </div>
            </template>
            <template #code>
              <DocMarkdown
                :source="wrapVueMarkdown(circle)"
                class="prose max-w-full"
              />
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
              <BaseFocusLoop class="flex flex-wrap items-end gap-4">
                <ColorsDemo />
              </BaseFocusLoop>
            </template>
            <template #code>
              <DocMarkdown
                :source="wrapVueMarkdown(colors)"
                class="prose max-w-full"
              />
            </template>
          </DocComponent>
        </DocSection>

        <!-- Checkbox properties -->
        <DocComponentMeta name="BaseCheckbox" />
      </template>
      <!-- Toc -->
      <template #toc>
        <DocToc />
      </template>
    </DocLayout>
  </div>
</template>
