<script setup lang="ts">
import CompositionDemo from '#examples/placeload/composition.vue'
import composition from '#examples/placeload/composition.vue?raw'
import ShapeDemo from '#examples/placeload/shape.vue'
import shape from '#examples/placeload/shape.vue?raw'
import TextDemo from '#examples/placeload/text.vue'
import text from '#examples/placeload/text.vue?raw'

function wrapVueMarkdown(source: string) {
  return '```vue\n' + source + '\n```'
}
</script>

<template>
  <div>
    <BaseBreadcrumb />

    <DocLayout>
      <template #content>
        <!-- Text placeload -->
        <DocSection title="Text placeload" tag="1.0.0">
          <DocComponent label="Text placeload example">
            <template #demo>
              <TextDemo />
            </template>
            <template #code>
              <AddonMarkdownRemark :source="wrapVueMarkdown(text)" fullwidth />
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
              <AddonMarkdownRemark :source="wrapVueMarkdown(shape)" fullwidth />
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
              <AddonMarkdownRemark
                :source="wrapVueMarkdown(composition)"
                fullwidth
              />
            </template>
          </DocComponent>
        </DocSection>

        <DocComponentMeta name="BasePlaceload" />
      </template>
      <template #toc>
        <DocToc />
      </template>
    </DocLayout>
  </div>
</template>
