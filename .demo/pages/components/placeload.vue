<script setup lang="ts">
import composition from '~/documentation/placeload/composition.md?raw'
import shape from '~/documentation/placeload/shape.md?raw'
import text from '~/documentation/placeload/text.md?raw'

definePageMeta({
  title: 'Placeloads',
  documentation: {
    category: 'Display',
    components: ['BasePlaceload'],
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
        <!-- Text placeload -->
        <DocSection title="Text placeload" tag="1.0.0">
          <DocComponent label="Text placeload example">
            <template #demo>
              <div class="max-w-sm space-y-2">
                <BasePlaceload class="h-4 w-full rounded" />
                <BasePlaceload class="h-4 w-[85%] rounded" />
              </div>
            </template>
            <template #code>
              <DocMarkdown :source="text" class="prose max-w-2xl" />
            </template>
          </DocComponent>
        </DocSection>

        <!-- Shape placeload -->
        <DocSection title="Shape placeload" tag="1.0.0">
          <DocComponent label="Shape placeload example">
            <template #demo>
              <div class="flex flex-wrap items-end gap-2">
                <BasePlaceload class="h-10 w-10 rounded" />
                <BasePlaceload class="h-12 w-12 rounded-xl" />
                <BasePlaceload class="h-16 w-16 rounded-full" />
              </div>
            </template>
            <template #code>
              <DocMarkdown :source="shape" class="prose max-w-2xl" />
            </template>
          </DocComponent>
        </DocSection>

        <!-- Composition placeload -->
        <DocSection title="Composition" tag="1.0.0">
          <DocComponent label="Custom placeload example">
            <template #demo>
              <div class="max-w-sm">
                <BaseCard shape="rounded" class="p-4 md:p-6">
                  <div class="flex items-center">
                    <BasePlaceload class="h-10 w-10 rounded-full" />
                    <div class="ml-3 grow space-y-2">
                      <BasePlaceload class="h-3 w-full rounded" />
                      <BasePlaceload class="h-3 w-[85%] rounded" />
                    </div>
                  </div>
                </BaseCard>
              </div>
            </template>
            <template #code>
              <DocMarkdown :source="composition" class="prose max-w-2xl" />
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
