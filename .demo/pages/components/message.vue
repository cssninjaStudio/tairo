<script setup lang="ts">
import IconsDemo from '~/documentation/message/icons.vue'
import icons from '~/documentation/message/icons.vue?raw'
import ShapesDemo from '~/documentation/message/shapes.vue'
import shapes from '~/documentation/message/shapes.vue?raw'
import TypesDemo from '~/documentation/message/types.vue'
import types from '~/documentation/message/types.vue?raw'

definePageMeta({
  title: 'Messages',
  documentation: {
    category: 'NUI Elements',
    components: ['BaseMessage'],
  },
})

function wrapVueMarkdown(source: string) {
  return '```vue\n' + source + '\n```'
}
</script>

<template>
  <div>
    <BaseBreadcrumb />

    <!-- Documentation Layout -->
    <DocLayout>
      <!-- content -->
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
              <AddonMarkdownRemark
                :source="wrapVueMarkdown(types)"
                class="prose max-w-full"
              />
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
              <AddonMarkdownRemark
                :source="wrapVueMarkdown(icons)"
                class="prose max-w-full"
              />
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
                class="prose max-w-full"
              />
            </template>
          </DocComponent>
        </DocSection>

        <!-- Message properties -->
        <DocComponentMeta name="BaseMessage" />
      </template>
      <!-- Toc -->
      <template #toc>
        <DocToc />
      </template>
    </DocLayout>
  </div>
</template>
