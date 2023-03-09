<script setup lang="ts">
import CompositionDemo from '~/documentation/placeload/composition.vue'
import composition from '~/documentation/placeload/composition.vue?raw'
import ShapeDemo from '~/documentation/placeload/shape.vue'
import shape from '~/documentation/placeload/shape.vue?raw'
import TextDemo from '~/documentation/placeload/text.vue'
import text from '~/documentation/placeload/text.vue?raw'

definePageMeta({
  title: 'Placeloads',
  documentation: {
    category: 'NUI Elements',
    components: ['BasePlaceload'],
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
    label: 'Placeload',
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
        <!-- Text placeload -->
        <DocSection title="Text placeload" tag="1.0.0">
          <DocComponent label="Text placeload example">
            <template #demo>
              <TextDemo />
            </template>
            <template #code>
              <DocMarkdown
                :source="wrapVueMarkdown(text)"
                class="prose max-w-full"
              />
            </template>
          </DocComponent>
        </DocSection>

        <!-- Shape placeload -->
        <DocSection title="Shape placeload" tag="1.0.0">
          <DocComponent label="Shape placeload example">
            <template #demo>
              <ShapeDemo />
            </template>
            <template #code>
              <DocMarkdown
                :source="wrapVueMarkdown(shape)"
                class="prose max-w-full"
              />
            </template>
          </DocComponent>
        </DocSection>

        <!-- Composition placeload -->
        <DocSection title="Composition" tag="1.0.0">
          <DocComponent label="Custom placeload example">
            <template #demo>
              <CompositionDemo />
            </template>
            <template #code>
              <DocMarkdown
                :source="wrapVueMarkdown(composition)"
                class="prose max-w-full"
              />
            </template>
          </DocComponent>
        </DocSection>

        <DocComponentMeta name="BasePlaceload" />
      </template>
      <!-- Toc -->
      <template #toc>
        <DocToc />
      </template>
    </DocLayout>
  </div>
</template>
