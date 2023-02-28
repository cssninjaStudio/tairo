<script setup lang="ts">
import AddonDemo from '~/documentation/form/textarea/addon.vue'
import addon from '~/documentation/form/textarea/addon.vue?raw'
import CurvedDemo from '~/documentation/form/textarea/curved.vue'
import curved from '~/documentation/form/textarea/curved.vue?raw'
import DisabledDemo from '~/documentation/form/textarea/disabled.vue'
import disabled from '~/documentation/form/textarea/disabled.vue?raw'
import InvalidDemo from '~/documentation/form/textarea/invalid.vue'
import invalid from '~/documentation/form/textarea/invalid.vue?raw'
import LoadingDemo from '~/documentation/form/textarea/loading.vue'
import loading from '~/documentation/form/textarea/loading.vue?raw'
import RoundedDemo from '~/documentation/form/textarea/rounded.vue'
import rounded from '~/documentation/form/textarea/rounded.vue?raw'
import FocusDemo from '~/documentation/form/textarea/focus.vue'
import focus from '~/documentation/form/textarea/focus.vue?raw'
import StraightDemo from '~/documentation/form/textarea/straight.vue'
import straight from '~/documentation/form/textarea/straight.vue?raw'

definePageMeta({
  title: 'Textarea',
  documentation: {
    category: 'Forms',
    components: ['BaseTextarea'],
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
    label: 'Textarea',
    hideLabel: false,
    to: '#/',
  },
]

const model = `
const textarea = ref('')
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
        <!-- Textarea straight -->
        <DocSection
          id="textarea-straight"
          title="Textarea straight"
          tag="1.0.0"
        >
          <DocComponent label="Straight textarea example">
            <template #demo>
              <div class="flex items-end gap-6">
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

        <!-- Textarea rounded -->
        <DocSection title="Textarea rounded" tag="1.0.0">
          <DocComponent label="Rounded textarea example">
            <template #demo>
              <div class="flex items-end gap-6">
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

        <!-- Textarea curved -->
        <DocSection title="Textarea curved" tag="1.0.0">
          <DocComponent label="Curved textarea example">
            <template #demo>
              <div class="flex items-end gap-6">
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

        <!-- Textarea focus -->
        <DocSection title="Textarea focus" tag="1.0.0">
          <DocComponent label="Primary focus variation">
            <template #demo>
              <div class="flex items-end gap-6">
                <div class="w-full max-w-sm space-y-4">
                  <FocusDemo />
                </div>
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

        <!-- Textarea validation -->
        <DocSection title="Textarea invalid" tag="1.0.0">
          <DocComponent label="Invalid validation variation">
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

        <!-- Textarea loading -->
        <DocSection title="Textarea loading" tag="1.0.0">
          <DocComponent label="Loading state example">
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

        <!-- Textarea disabled -->
        <DocSection
          id="textarea-disabled"
          title="Textarea disabled"
          tag="1.0.0"
        >
          <DocComponent label="Disabled state example">
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

        <!-- Textarea addon -->
        <DocSection title="Textarea addon" tag="1.0.0">
          <DocComponent label="Textarea with custom addon">
            <template #demo>
              <div class="flex items-end gap-6">
                <div class="w-full max-w-sm space-y-4">
                  <AddonDemo />
                </div>
              </div>
            </template>
            <template #code>
              <DocMarkdown
                :source="wrapVueMarkdown(addon)"
                class="prose max-w-full"
              />
            </template>
          </DocComponent>
        </DocSection>

        <!-- Textarea properties -->
        <DocComponentMeta name="BaseTextarea" />
      </template>

      <!-- Toc -->
      <template #toc>
        <DocToc />
      </template>
    </DocLayout>
  </div>
</template>
