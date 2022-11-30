<script setup lang="ts">
import {
  chevron,
  exclusive,
  inclusive,
  plus,
  shapes,
} from '@@/documentation/components/accordion'
import { accordion } from '@@/documentation/components/accordion/data'

definePageMeta({
  title: 'Accordions',
  documentation: {
    category: 'Interaction',
    components: ['BaseAccordion', 'BaseAccordionItem'],
  },
})
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
              <DocCode language="html" :code="inclusive" />
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
              <DocCode language="html" :code="exclusive" />
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
              <DocCode language="html" :code="shapes" />
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
              <DocCode language="html" :code="chevron" />
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
              <DocCode language="html" :code="plus" />
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
