<script setup lang="ts">
import CurvedDemo from '~/documentation/form/input/curved.vue'
import curved from '~/documentation/form/input/curved.vue?raw'
import DisabledDemo from '~/documentation/form/input/disabled.vue'
import disabled from '~/documentation/form/input/disabled.vue?raw'
import FocusDemo from '~/documentation/form/input/focus.vue'
import focus from '~/documentation/form/input/focus.vue?raw'
import FullDemo from '~/documentation/form/input/full.vue'
import full from '~/documentation/form/input/full.vue?raw'
import IconDemo from '~/documentation/form/input/icon.vue'
import icon from '~/documentation/form/input/icon.vue?raw'
import FloatLabelDemo from '~/documentation/form/input/float-label.vue'
import floatLabel from '~/documentation/form/input/float-label.vue?raw'
import CondensedDemo from '~/documentation/form/input/condensed.vue'
import condensed from '~/documentation/form/input/condensed.vue?raw'
import InvalidDemo from '~/documentation/form/input/invalid.vue'
import invalid from '~/documentation/form/input/invalid.vue?raw'
import LoadingDemo from '~/documentation/form/input/loading.vue'
import loading from '~/documentation/form/input/loading.vue?raw'
import RoundedDemo from '~/documentation/form/input/rounded.vue'
import rounded from '~/documentation/form/input/rounded.vue?raw'
import StraightDemo from '~/documentation/form/input/straight.vue'
import straight from '~/documentation/form/input/straight.vue?raw'

definePageMeta({
  title: 'Inputs',
  documentation: {
    category: 'Forms',
    components: ['BaseInput'],
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
    label: 'Input',
    hideLabel: false,
    to: '#/',
  },
]

const model = 'const input = ref<string>'
</script>

<template>
  <div>
    <!-- BreadCrumb -->
    <BaseBreadcrumb :items="demoBreadcrumb" />

    <!-- Documentation Layout -->
    <DocLayout>
      <!-- content -->
      <template #content>
        <!-- Input straight -->
        <DocSection title="Input straight" tag="1.0.0">
          <DocComponent label="Straight input example">
            <template #demo>
              <div class="flex flex-col gap-6 md:flex-row md:items-end">
                <div class="w-full max-w-sm space-y-4">
                  <StraightDemo />
                </div>
                <!-- State box -->
                <DocState label="V-Model" :state="model" height="80px" />
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

        <!-- Input rounded -->
        <DocSection title="Input rounded" tag="1.0.0">
          <DocComponent label="Rounded input example">
            <template #demo>
              <div class="flex flex-col gap-6 md:flex-row md:items-end">
                <div class="w-full max-w-sm space-y-4">
                  <RoundedDemo />
                </div>
                <!-- State box -->
                <DocState label="V-Model" :state="model" height="80px" />
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

        <!-- Input curved -->
        <DocSection title="Input curved" tag="1.0.0">
          <DocComponent label="Curved input example">
            <template #demo>
              <div class="flex flex-col gap-6 md:flex-row md:items-end">
                <div class="w-full max-w-sm space-y-4">
                  <CurvedDemo />
                </div>
                <!-- State box -->
                <DocState label="V-Model" :state="model" height="80px" />
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

        <!-- Input full -->
        <DocSection title="Input full" tag="1.0.0">
          <DocComponent label="Full input example">
            <template #demo>
              <div class="flex flex-col gap-6 md:flex-row md:items-end">
                <div class="w-full max-w-sm space-y-4">
                  <FullDemo />
                </div>
                <!-- State box -->
                <DocState label="V-Model" :state="model" height="80px" />
              </div>
            </template>
            <template #code>
              <DocMarkdown
                :source="wrapVueMarkdown(full)"
                class="prose max-w-full"
              />
            </template>
          </DocComponent>
        </DocSection>

        <!-- Input icon -->
        <DocSection title="Input icon" tag="1.0.0">
          <DocComponent label="Icon input example">
            <template #demo>
              <IconDemo />
            </template>
            <template #code>
              <DocMarkdown
                :source="wrapVueMarkdown(icon)"
                class="prose max-w-full"
              />
            </template>
          </DocComponent>
        </DocSection>

        <!-- Floating labels -->
        <DocSection title="Floating labels" tag="1.0.0">
          <DocComponent label="Material style labels example">
            <template #demo>
              <FloatLabelDemo />
            </template>
            <template #code>
              <DocMarkdown
                :source="wrapVueMarkdown(floatLabel)"
                class="prose max-w-full"
              />
            </template>
          </DocComponent>
        </DocSection>

        <!-- Input condensed -->
        <DocSection title="Condensed inputs" tag="1.0.0">
          <DocComponent label="Smaller inputs example">
            <template #demo>
              <CondensedDemo />
            </template>
            <template #code>
              <DocMarkdown
                :source="wrapVueMarkdown(condensed)"
                class="prose max-w-full"
              />
            </template>
          </DocComponent>
        </DocSection>

        <!-- Input focus -->
        <DocSection title="Colored focus" tag="1.0.0">
          <DocComponent label="Input primary focus example">
            <template #demo>
              <div class="flex flex-col gap-6 md:flex-row md:items-end">
                <div class="w-full max-w-sm space-y-4">
                  <FocusDemo />
                </div>
                <!-- State box -->
                <DocState label="V-Model" :state="model" height="80px" />
              </div>
            </template>
            <template #code>
              <DocMarkdown
                :source="wrapVueMarkdown(focus)"
                class="prose max-w-full"
              />
            </template>
          </DocComponent>
        </DocSection>

        <!-- Input loading -->
        <DocSection title="Loading state" tag="1.0.0">
          <DocComponent label="Input loading state example">
            <template #demo>
              <div class="flex items-end gap-6">
                <div class="w-full max-w-sm space-y-4">
                  <LoadingDemo />
                </div>
              </div>
            </template>
            <template #code>
              <DocMarkdown
                :source="wrapVueMarkdown(loading)"
                class="prose max-w-full"
              />
            </template>
          </DocComponent>
        </DocSection>

        <!-- Input disabled -->
        <DocSection title="Disabled state" tag="1.0.0">
          <DocComponent label="Input disabled state example">
            <template #demo>
              <div class="flex items-end gap-6">
                <div class="w-full max-w-sm space-y-4">
                  <DisabledDemo />
                </div>
              </div>
            </template>
            <template #code>
              <DocMarkdown
                :source="wrapVueMarkdown(disabled)"
                class="prose max-w-full"
              />
            </template>
          </DocComponent>
        </DocSection>

        <!-- Input invalid -->
        <DocSection title="Colored invalid" tag="1.0.0">
          <DocComponent label="Input invalid state example">
            <template #demo>
              <div class="flex items-end gap-6">
                <div class="w-full max-w-sm space-y-4">
                  <InvalidDemo />
                </div>
              </div>
            </template>
            <template #code>
              <DocMarkdown
                :source="wrapVueMarkdown(invalid)"
                class="prose max-w-full"
              />
            </template>
          </DocComponent>
        </DocSection>

        <!-- Input properties -->
        <DocComponentMeta name="BaseInput" />
      </template>
      <!-- Toc -->
      <template #toc>
        <DocToc />
      </template>
    </DocLayout>
  </div>
</template>
