<script setup lang="ts">
import DisabledDemo from '~/documentation/listbox/disabled.vue'
import disabled from '~/documentation/listbox/disabled.vue?raw'
import IconDemo from '~/documentation/listbox/icon.vue'
import icon from '~/documentation/listbox/icon.vue?raw'
import LoadingDemo from '~/documentation/listbox/loading.vue'
import loading from '~/documentation/listbox/loading.vue?raw'
import MediaDemo from '~/documentation/listbox/media.vue'
import media from '~/documentation/listbox/media.vue?raw'
import ShapesDemo from '~/documentation/listbox/shapes.vue'
import shapes from '~/documentation/listbox/shapes.vue?raw'
import FloatLabelDemo from '~/documentation/listbox/float-label.vue'
import floatLabel from '~/documentation/listbox/float-label.vue?raw'
import SublabelsDemo from '~/documentation/listbox/sublabels.vue'
import sublabels from '~/documentation/listbox/sublabels.vue?raw'
import MultipleDemo from '~/documentation/listbox/multiple.vue'
import multiple from '~/documentation/listbox/multiple.vue?raw'

definePageMeta({
  title: 'Listbox',
  documentation: {
    category: 'NUI Forms',
    components: ['BaseListbox'],
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
    label: 'Listbox',
    hideLabel: false,
    to: '#',
  },
]
</script>

<template>
  <div>
    <!-- BreadCrumb -->
    <BaseBreadcrumb :items="demoBreadcrumb" />

    <!-- Documentation Layout -->
    <DocLayout>
      <!-- content -->
      <template #content>
        <!-- Listbox shapes -->
        <DocSection title="Listbox shapes" tag="1.0.0">
          <DocComponent label="Listbox shapes example">
            <template #demo>
              <div class="grid gap-4 md:grid-cols-2">
                <ShapesDemo />
              </div>
            </template>
            <template #code>
              <DocMarkdown
                :source="wrapVueMarkdown(shapes)"
                class="prose max-w-full"
              />
            </template>
          </DocComponent>
        </DocSection>

        <!-- Listbox float label -->
        <DocSection title="Floating label" tag="1.0.0">
          <DocComponent label="Material style labels example">
            <template #demo>
              <div class="grid gap-x-4 gap-y-8 md:grid-cols-2">
                <FloatLabelDemo />
              </div>
            </template>
            <template #code>
              <DocMarkdown
                :source="wrapVueMarkdown(floatLabel)"
                class="prose max-w-full"
              />
            </template>
          </DocComponent>
        </DocSection>

        <!-- Listbox sublabels -->
        <DocSection title="Listbox with sublabels" tag="1.0.0">
          <DocComponent label="Text with sublabels example">
            <template #demo>
              <div class="flex max-w-xs items-end">
                <SublabelsDemo />
              </div>
            </template>
            <template #code>
              <DocMarkdown
                :source="wrapVueMarkdown(sublabels)"
                class="prose max-w-full"
              />
            </template>
          </DocComponent>
        </DocSection>

        <!-- Listbox media -->
        <DocSection title="Listbox with media" tag="1.0.0">
          <DocComponent label="Select media example">
            <template #demo>
              <div class="flex max-w-xs items-end">
                <MediaDemo />
              </div>
            </template>
            <template #code>
              <DocMarkdown
                :source="wrapVueMarkdown(media)"
                class="prose max-w-full"
              />
            </template>
          </DocComponent>
        </DocSection>

        <!-- Listbox icon -->
        <DocSection title="Listbox with icon" tag="1.0.0">
          <DocComponent label="Listbox icon example">
            <template #demo>
              <div class="flex max-w-xs items-end">
                <IconDemo />
              </div>
            </template>
            <template #code>
              <DocMarkdown
                :source="wrapVueMarkdown(icon)"
                class="prose max-w-full"
              />
            </template>
          </DocComponent>
        </DocSection>

        <!-- Listbox disabled -->
        <DocSection title="Disabled state" tag="1.0.0">
          <DocComponent label="Disabled state example">
            <template #demo>
              <div class="flex max-w-xs items-end">
                <DisabledDemo />
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

        <!-- Listbox loading -->
        <DocSection title="Loading state" tag="1.0.0">
          <DocComponent label="Loading state example">
            <template #demo>
              <div class="flex max-w-xs items-end">
                <LoadingDemo />
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

        <!-- Listbox multiple -->
        <DocSection title="Multiple selection" tag="1.0.0">
          <DocComponent label="Select multiple example">
            <template #demo>
              <div class="flex max-w-xs items-end">
                <MultipleDemo />
              </div>
            </template>
            <template #code>
              <DocMarkdown
                :source="wrapVueMarkdown(multiple)"
                class="prose max-w-full"
              />
            </template>
          </DocComponent>
        </DocSection>

        <!-- Listbox properties -->
        <DocComponentMeta name="BaseListbox" />
      </template>
      <!-- Toc -->
      <template #toc>
        <DocToc />
      </template>
    </DocLayout>
  </div>
</template>
