<script setup lang="ts">
import { breadcrumb, toc } from '@@/documentation/components/accordion/toc'
import {
  chevron,
  exclusive,
  inclusive,
  plus,
  shapes,
} from '@@/documentation/components/accordion'
import {
  itemProperties,
  properties,
} from '@@/documentation/components/accordion/properties'
import { accordion } from '@@/documentation/components/accordion/data'

definePageMeta({
  title: 'Accordions',
})
</script>

<template>
  <div>
    <!-- BreadCrumb -->
    <BaseBreadcrumb :items="breadcrumb" separator="dot" />

    <!-- Documentation Layout -->
    <DocLayout>
      <!-- content -->
      <template #content>
        <!-- Accordion inclusive -->
        <DocSection id="accordion-inclusive" title="Inclusive type" tag="1.0.0">
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
        <DocSection id="accordion-exclusive" title="Exclusive type" tag="1.0.0">
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
        <DocSection id="accordion-shapes" title="Accordion shapes" tag="1.0.0">
          <DocComponent label="Accordion shapes examples">
            <template #demo>
              <div class="grid md:grid-cols-3 gap-4">
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
        <DocSection id="accordion-chevron" title="Chevron action" tag="1.0.0">
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
        <DocSection id="accordion-plus" title="Plus action" tag="1.0.0">
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

        <!-- Accordion props -->
        <DocProps
          id="accordion-props"
          component="Accordion"
          :properties="properties.props"
          :slots="properties.slots"
        />

        <!-- Accordion item props -->
        <DocProps
          id="accordion-item-props"
          component="Accordion item"
          :properties="itemProperties.props"
          :slots="itemProperties.slots"
        />
      </template>
      <!-- Toc -->
      <template #toc>
        <DocToc :anchors="toc" />
      </template>
    </DocLayout>
  </div>
</template>
