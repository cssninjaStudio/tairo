<script setup lang="ts">
import { breadcrumb, toc } from '@@/documentation/components/placeload/toc'
import { composition, shape, text } from '@@/documentation/components/placeload'

definePageMeta({
  title: 'Placeloads',
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
        <!-- Text placeload -->
        <DocSection id="placeload-text" title="Text placeload" tag="1.0.0">
          <DocComponent label="Text placeload example">
            <template #demo>
              <div class="max-w-sm space-y-2">
                <BasePlaceload class="h-4 w-full rounded" />
                <BasePlaceload class="h-4 w-[85%] rounded" />
              </div>
            </template>
            <template #code>
              <DocCode language="html" :code="text" />
            </template>
          </DocComponent>
        </DocSection>

        <!-- Shape placeload -->
        <DocSection id="placeload-shape" title="Shape placeload" tag="1.0.0">
          <DocComponent label="Shape placeload example">
            <template #demo>
              <div class="flex items-end flex-wrap gap-2">
                <BasePlaceload class="h-10 w-10 rounded" />
                <BasePlaceload class="h-12 w-12 rounded-xl" />
                <BasePlaceload class="h-16 w-16 rounded-full" />
              </div>
            </template>
            <template #code>
              <DocCode language="html" :code="shape" />
            </template>
          </DocComponent>
        </DocSection>

        <!-- Composition placeload -->
        <DocSection id="placeload-composition" title="Composition" tag="1.0.0">
          <DocComponent label="Custom placeload example">
            <template #demo>
              <div class="max-w-sm">
                <BaseCard shape="rounded" class="p-4 md:p-6">
                  <div class="flex items-center">
                    <BasePlaceload class="h-10 w-10 rounded-full" />
                    <div class="grow space-y-2 ml-3">
                      <BasePlaceload class="h-3 w-full rounded" />
                      <BasePlaceload class="h-3 w-[85%] rounded" />
                    </div>
                  </div>
                </BaseCard>
              </div>
            </template>
            <template #code>
              <DocCode language="html" :code="composition" />
            </template>
          </DocComponent>
        </DocSection>
      </template>
      <!-- Toc -->
      <template #toc>
        <DocToc :anchors="toc" />
      </template>
    </DocLayout>
  </div>
</template>
