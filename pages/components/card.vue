<script setup lang="ts">
import { breadcrumb, toc } from '@@/documentation/components/card/toc'
import {
  elevation,
  elevationHover,
  shapes,
} from '@@/documentation/components/card'
import { properties } from '@@/documentation/components/card/properties'

definePageMeta({
  title: 'Cards',
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
        <!-- Card shapes -->
        <DocSection id="card-shapes" title="Card shapes" tag="1.0.0">
          <DocComponent label="Card shapes example">
            <template #demo>
              <div class="grid md:grid-cols-3 gap-4">
                <BaseCard shape="straight" class="p-6">
                  <BaseHeading
                    as="h4"
                    size="sm"
                    weight="semibold"
                    lead="tight"
                    class="text-slate-800 dark:text-white mb-2"
                  >
                    Iam a card
                  </BaseHeading>
                  <BaseParagraph size="sm" lead="tight" class="text-slate-400">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </BaseParagraph>
                </BaseCard>
                <BaseCard shape="rounded" class="p-6">
                  <BaseHeading
                    as="h4"
                    size="sm"
                    weight="semibold"
                    lead="tight"
                    class="text-slate-800 dark:text-white mb-2"
                  >
                    Iam a card
                  </BaseHeading>
                  <BaseParagraph size="sm" lead="tight" class="text-slate-400">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </BaseParagraph>
                </BaseCard>
                <BaseCard shape="curved" class="p-6">
                  <BaseHeading
                    as="h4"
                    size="sm"
                    weight="semibold"
                    lead="tight"
                    class="text-slate-800 dark:text-white mb-2"
                  >
                    Iam a card
                  </BaseHeading>
                  <BaseParagraph size="sm" lead="tight" class="text-slate-400">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </BaseParagraph>
                </BaseCard>
              </div>
            </template>
            <template #code>
              <DocCode language="html" :code="shapes" />
            </template>
          </DocComponent>
        </DocSection>

        <!-- Card elevation -->
        <DocSection id="card-elevation" title="Card elevation" tag="1.0.0">
          <DocComponent label="Card elevations example">
            <template #demo>
              <div class="grid md:grid-cols-3 gap-4">
                <BaseCard shape="straight" elevated class="p-6">
                  <BaseHeading
                    as="h4"
                    size="sm"
                    weight="semibold"
                    lead="tight"
                    class="text-slate-800 dark:text-white mb-2"
                  >
                    Iam a card
                  </BaseHeading>
                  <BaseParagraph size="sm" lead="tight" class="text-slate-400">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </BaseParagraph>
                </BaseCard>
                <BaseCard shape="rounded" elevated class="p-6">
                  <BaseHeading
                    as="h4"
                    size="sm"
                    weight="semibold"
                    lead="tight"
                    class="text-slate-800 dark:text-white mb-2"
                  >
                    Iam a card
                  </BaseHeading>
                  <BaseParagraph size="sm" lead="tight" class="text-slate-400">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </BaseParagraph>
                </BaseCard>
                <BaseCard shape="curved" elevated class="p-6">
                  <BaseHeading
                    as="h4"
                    size="sm"
                    weight="semibold"
                    lead="tight"
                    class="text-slate-800 dark:text-white mb-2"
                  >
                    Iam a card
                  </BaseHeading>
                  <BaseParagraph size="sm" lead="tight" class="text-slate-400">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </BaseParagraph>
                </BaseCard>
              </div>
            </template>
            <template #code>
              <DocCode language="html" :code="elevation" />
            </template>
          </DocComponent>
        </DocSection>

        <!-- Card elevation hover -->
        <DocSection
          id="card-elevation-hover"
          title="Hover elevation"
          tag="1.0.0"
        >
          <DocComponent label="Hover elevations example">
            <template #demo>
              <div class="grid md:grid-cols-3 gap-4">
                <BaseCard shape="straight" elevated-hover class="p-6">
                  <BaseHeading
                    as="h4"
                    size="sm"
                    weight="semibold"
                    lead="tight"
                    class="text-slate-800 dark:text-white mb-2"
                  >
                    Iam a card
                  </BaseHeading>
                  <BaseParagraph size="sm" lead="tight" class="text-slate-400">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </BaseParagraph>
                </BaseCard>
                <BaseCard shape="rounded" elevated-hover class="p-6">
                  <BaseHeading
                    as="h4"
                    size="sm"
                    weight="semibold"
                    lead="tight"
                    class="text-slate-800 dark:text-white mb-2"
                  >
                    Iam a card
                  </BaseHeading>
                  <BaseParagraph size="sm" lead="tight" class="text-slate-400">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </BaseParagraph>
                </BaseCard>
                <BaseCard shape="curved" elevated-hover class="p-6">
                  <BaseHeading
                    as="h4"
                    size="sm"
                    weight="semibold"
                    lead="tight"
                    class="text-slate-800 dark:text-white mb-2"
                  >
                    Iam a card
                  </BaseHeading>
                  <BaseParagraph size="sm" lead="tight" class="text-slate-400">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </BaseParagraph>
                </BaseCard>
              </div>
            </template>
            <template #code>
              <DocCode language="html" :code="elevationHover" />
            </template>
          </DocComponent>
        </DocSection>

        <!-- Card props -->
        <DocProps
          id="card-props"
          component="Card"
          :properties="properties.props"
          :slots="properties.slots"
        />
      </template>
      <!-- Toc -->
      <template #toc>
        <DocToc :anchors="toc" />
      </template>
    </DocLayout>
  </div>
</template>
