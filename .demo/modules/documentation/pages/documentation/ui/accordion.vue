<script setup lang="ts">
import ChevronDemo from '../../../examples/accordion/chevron.vue'
import chevronRaw from '../../../examples/accordion/chevron.vue?raw'
import ExclusiveDemo from '../../../examples/accordion/exclusive.vue'
import exclusiveRaw from '../../../examples/accordion/exclusive.vue?raw'
import InclusiveDemo from '../../../examples/accordion/inclusive.vue'
import inclusiveRaw from '../../../examples/accordion/inclusive.vue?raw'
import PlusDemo from '../../../examples/accordion/plus.vue'
import plusRaw from '../../../examples/accordion/plus.vue?raw'
import ShapesDemo from '../../../examples/accordion/shapes.vue'
import shapesRaw from '../../../examples/accordion/shapes.vue?raw'

function wrapVueMarkdown(source: string) {
  return '```vue\n' + source + '\n```'
}
</script>

<template>
  <div>
    <BaseBreadcrumb />

    <DocLayout>
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
              <AddonMarkdownRemark
                :source="wrapVueMarkdown(inclusiveRaw)"
                fullwidth
              />
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
              <AddonMarkdownRemark
                :source="wrapVueMarkdown(exclusiveRaw)"
                fullwidth
              />
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
              <AddonMarkdownRemark
                :source="wrapVueMarkdown(shapesRaw)"
                fullwidth
              />
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
              <AddonMarkdownRemark
                :source="wrapVueMarkdown(chevronRaw)"
                fullwidth
              />
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
              <AddonMarkdownRemark
                :source="wrapVueMarkdown(plusRaw)"
                fullwidth
              />
            </template>
          </DocComponent>
        </DocSection>

        <DocComponentMeta name="BaseAccordion" />
      </template>
      <template #toc>
        <DocToc />
      </template>
    </DocLayout>
  </div>
</template>
