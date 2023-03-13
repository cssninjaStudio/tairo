<script setup lang="ts">
import DisabledDemo from '../../../examples/listbox/disabled.vue'
import disabled from '../../../examples/listbox/disabled.vue?raw'
import IconDemo from '../../../examples/listbox/icon.vue'
import icon from '../../../examples/listbox/icon.vue?raw'
import LoadingDemo from '../../../examples/listbox/loading.vue'
import loading from '../../../examples/listbox/loading.vue?raw'
import MediaDemo from '../../../examples/listbox/media.vue'
import media from '../../../examples/listbox/media.vue?raw'
import ShapesDemo from '../../../examples/listbox/shapes.vue'
import shapes from '../../../examples/listbox/shapes.vue?raw'
import FloatLabelDemo from '../../../examples/listbox/float-label.vue'
import floatLabel from '../../../examples/listbox/float-label.vue?raw'
import SublabelsDemo from '../../../examples/listbox/sublabels.vue'
import sublabels from '../../../examples/listbox/sublabels.vue?raw'
import MultipleDemo from '../../../examples/listbox/multiple.vue'
import multiple from '../../../examples/listbox/multiple.vue?raw'

function wrapVueMarkdown(source: string) {
  return '```vue\n' + source + '\n```'
}
</script>

<template>
  <div>
    <BaseBreadcrumb />

    <DocLayout>
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
              <AddonMarkdownRemark
                :source="wrapVueMarkdown(shapes)"
                fullwidth
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
              <AddonMarkdownRemark
                :source="wrapVueMarkdown(floatLabel)"
                fullwidth
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
              <AddonMarkdownRemark
                :source="wrapVueMarkdown(sublabels)"
                fullwidth
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
              <AddonMarkdownRemark :source="wrapVueMarkdown(media)" fullwidth />
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
              <AddonMarkdownRemark :source="wrapVueMarkdown(icon)" fullwidth />
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
              <AddonMarkdownRemark
                :source="wrapVueMarkdown(disabled)"
                fullwidth
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
              <AddonMarkdownRemark
                :source="wrapVueMarkdown(loading)"
                fullwidth
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
              <AddonMarkdownRemark
                :source="wrapVueMarkdown(multiple)"
                fullwidth
              />
            </template>
          </DocComponent>
        </DocSection>

        <!-- Listbox properties -->
        <DocComponentMeta name="BaseListbox" />
      </template>
      <template #toc>
        <DocToc />
      </template>
    </DocLayout>
  </div>
</template>
