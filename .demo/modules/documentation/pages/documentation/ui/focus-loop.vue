<script setup lang="ts">
import FocusLoopDemo from '../../../examples/focus-loop/base.vue'
import focusLoop from '../../../examples/focus-loop/base.vue?raw'

function wrapVueMarkdown(source: string) {
  return '```vue\n' + source + '\n```'
}
</script>

<template>
  <div>
    <BaseBreadcrumb />

    <DocLayout>
      <template #content>
        <!-- Focus loop -->
        <DocSection title="Focus loop" tag="1.0.0">
          <DocComponent label="Setting a focus loop">
            <template #demo>
              <BaseFocusLoop class="flex flex-wrap items-end gap-2">
                <FocusLoopDemo />
              </BaseFocusLoop>
            </template>
            <template #code>
              <AddonMarkdownRemark
                :source="wrapVueMarkdown(focusLoop)"
                fullwidth
              />
            </template>
          </DocComponent>
        </DocSection>

        <!-- properties -->
        <DocComponentMeta name="BaseFocusLoop" />
      </template>
      <template #toc>
        <DocToc />
      </template>
    </DocLayout>
  </div>
</template>
