<script setup lang="ts">
import ChevronDemo from '~/documentation/accordion/chevron.vue'
import chevronRaw from '~/documentation/accordion/chevron.vue?raw'
import ExclusiveDemo from '~/documentation/accordion/exclusive.vue'
import exclusiveRaw from '~/documentation/accordion/exclusive.vue?raw'
import InclusiveDemo from '~/documentation/accordion/inclusive.vue'
import inclusiveRaw from '~/documentation/accordion/inclusive.vue?raw'
import PlusDemo from '~/documentation/accordion/plus.vue'
import plusRaw from '~/documentation/accordion/plus.vue?raw'
import ShapesDemo from '~/documentation/accordion/shapes.vue'
import shapesRaw from '~/documentation/accordion/shapes.vue?raw'

definePageMeta({
  title: 'Accordions',
  documentation: {
    category: 'Interaction',
    components: ['BaseAccordion', 'BaseAccordionItem'],
  },
})

function wrapVueMarkdown(source: string) {
  return '```vue\n' + source + '\n```'
}
</script>

<template>
  <div>
    <!-- BreadCrumb -->
    <BaseBreadcrumb />

    <!-- Documentation Layout -->
    <DocLayout>
      <!-- content -->
      <template #content>
        <!-- Accordion inclusive -->
        <DocSection title="Inclusive type" tag="1.0.0">
          <DocComponent label="Inclusive accordion example">
            <template #demo>
              <div class="flex flex-col gap-4">
                <InclusiveDemo />
              </div>
            </template>
            <template #code>
              <DocMarkdown :source="wrapVueMarkdown(inclusiveRaw)" class="prose max-w-full" />
            </template>
          </DocComponent>
        </DocSection>

        <!-- Accordion exclusive -->
        <DocSection title="Exclusive type" tag="1.0.0">
          <DocComponent label="Exclusive accordion example">
            <template #demo>
              <div class="flex flex-col gap-4">
                <ExclusiveDemo />
              </div>
            </template>
            <template #code>
              <DocMarkdown :source="wrapVueMarkdown(exclusiveRaw)" class="prose max-w-full" />
            </template>
          </DocComponent>
        </DocSection>

        <!-- Accordion shapes -->
        <DocSection title="Accordion shapes" tag="1.0.0">
          <DocComponent label="Accordion shapes examples">
            <template #demo>
              <div class="grid gap-4 md:grid-cols-3">
                <ShapesDemo />
              </div>
            </template>
            <template #code>
              <DocMarkdown :source="wrapVueMarkdown(shapesRaw)" class="prose max-w-full" />
            </template>
          </DocComponent>
        </DocSection>

        <!-- Accordion chevron -->
        <DocSection title="Chevron action" tag="1.0.0">
          <DocComponent label="Chevron accordion example">
            <template #demo>
              <div class="flex flex-col gap-4">
                <ChevronDemo />
              </div>
            </template>
            <template #code>
              <DocMarkdown :source="wrapVueMarkdown(chevronRaw)" class="prose max-w-full" />
            </template>
          </DocComponent>
        </DocSection>

        <!-- Accordion plus -->
        <DocSection title="Plus action" tag="1.0.0">
          <DocComponent label="Plus accordion example">
            <template #demo>
              <div class="flex flex-col gap-4">
                <PlusDemo />
              </div>
            </template>
            <template #code>
              <DocMarkdown :source="wrapVueMarkdown(plusRaw)" class="prose max-w-full" />
            </template>
          </DocComponent>
        </DocSection>

        <DocComponentMeta name="BaseAccordion" />
      </template>
      <!-- Toc -->
      <template #toc>
        <DocToc />
      </template>
    </DocLayout>
  </div>
</template>
