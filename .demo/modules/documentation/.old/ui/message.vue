<script setup lang="ts">
import IconsDemo from '#examples/message/icons.vue'
import icons from '#examples/message/icons.vue?raw'
import ShapesDemo from '#examples/message/shapes.vue'
import shapes from '#examples/message/shapes.vue?raw'
import TypesDemo from '#examples/message/types.vue'
import types from '#examples/message/types.vue?raw'

function wrapVueMarkdown(source: string) {
  return '```vue\n' + source + '\n```'
}
</script>

<template>
  <div>
    <BaseBreadcrumb />

    <DocLayout>
      <template #content>
        <!-- Message types -->
        <DocSection title="Message types" tag="1.0.0">
          <DocComponent label="Default message types">
            <template #demo>
              <BaseFocusLoop class="max-w-xs space-y-4">
                <TypesDemo />
              </BaseFocusLoop>
            </template>
            <template #code>
              <AddonMarkdownRemark :source="wrapVueMarkdown(types)" fullwidth />
            </template>
          </DocComponent>
        </DocSection>

        <!-- Message icons -->
        <DocSection title="Message icons" tag="1.0.0">
          <DocComponent label="Message icons example">
            <template #demo>
              <BaseFocusLoop class="max-w-xs space-y-4">
                <IconsDemo />
              </BaseFocusLoop>
            </template>
            <template #code>
              <AddonMarkdownRemark :source="wrapVueMarkdown(icons)" fullwidth />
            </template>
          </DocComponent>
        </DocSection>

        <!-- Message shapes -->
        <DocSection title="Message shapes" tag="1.0.0">
          <DocComponent label="Default message shapes">
            <template #demo>
              <BaseFocusLoop class="max-w-xs space-y-4">
                <ShapesDemo />
              </BaseFocusLoop>
            </template>
            <template #code>
              <AddonMarkdownRemark
                :source="wrapVueMarkdown(shapes)"
                fullwidth
              />
            </template>
          </DocComponent>
        </DocSection>

        <!-- Message properties -->
        <DocComponentMeta name="BaseMessage" />
      </template>
      <template #toc>
        <DocToc />
      </template>
    </DocLayout>
  </div>
</template>
