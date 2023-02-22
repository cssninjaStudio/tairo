<script setup lang="ts">
import chevron from '~/documentation/accordion/chevron.md?raw'
import exclusive from '~/documentation/accordion/exclusive.md?raw'
import inclusive from '~/documentation/accordion/inclusive.md?raw'
import plus from '~/documentation/accordion/plus.md?raw'
import shapes from '~/documentation/accordion/shapes.md?raw'

definePageMeta({
  title: 'Accordions',
  documentation: {
    category: 'Interaction',
    components: ['BaseAccordion', 'BaseAccordionItem'],
  },
})

const accordion = [
  {
    title: 'Accordion Item 1',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quo tandem modo? Inde igitur, inquit, ordiendum est. Primum quid tu dicis breve? Duo Reges: constructio interrete.',
  },
  {
    title: 'Accordion Item 2',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quo tandem modo? Inde igitur, inquit, ordiendum est. Primum quid tu dicis breve? Duo Reges: constructio interrete.',
  },
  {
    title: 'Accordion Item 3',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quo tandem modo? Inde igitur, inquit, ordiendum est. Primum quid tu dicis breve? Duo Reges: constructio interrete.',
  },
]

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
                <BaseAccordion :items="accordion" />
              </div>
            </template>
            <template #code>
              <DocMarkdown :source="inclusive" class="prose max-w-full" />
            </template>
          </DocComponent>
        </DocSection>

        <!-- Accordion exclusive -->
        <DocSection title="Exclusive type" tag="1.0.0">
          <DocComponent label="Exclusive accordion example">
            <template #demo>
              <div class="flex flex-col gap-4">
                <BaseAccordion :items="accordion" exclusive />
              </div>
            </template>
            <template #code>
              <DocMarkdown :source="exclusive" class="prose max-w-full" />
            </template>
          </DocComponent>
        </DocSection>

        <!-- Accordion shapes -->
        <DocSection title="Accordion shapes" tag="1.0.0">
          <DocComponent label="Accordion shapes examples">
            <template #demo>
              <div class="grid gap-4 md:grid-cols-3">
                <BaseAccordion :items="accordion" exclusive shape="straight" />
                <BaseAccordion :items="accordion" shape="rounded" />
                <BaseAccordion :items="accordion" exclusive shape="curved" />
              </div>
            </template>
            <template #code>
              <DocMarkdown :source="shapes" class="prose max-w-full" />
            </template>
          </DocComponent>
        </DocSection>

        <!-- Accordion chevron -->
        <DocSection title="Chevron action" tag="1.0.0">
          <DocComponent label="Chevron accordion example">
            <template #demo>
              <div class="flex flex-col gap-4">
                <BaseAccordion :items="accordion" exclusive action="chevron" />
              </div>
            </template>
            <template #code>
              <DocMarkdown :source="chevron" class="prose max-w-full" />
            </template>
          </DocComponent>
        </DocSection>

        <!-- Accordion plus -->
        <DocSection title="Plus action" tag="1.0.0">
          <DocComponent label="Plus accordion example">
            <template #demo>
              <div class="flex flex-col gap-4">
                <BaseAccordion :items="accordion" action="plus" />
              </div>
            </template>
            <template #code>
              <DocMarkdown :source="plus" class="prose max-w-full" />
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
