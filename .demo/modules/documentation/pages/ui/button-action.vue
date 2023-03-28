<script setup lang="ts">
import GroupDemo from '#examples/action/group.vue'
import group from '#examples/action/group.vue?raw'
import LoadingDemo from '#examples/action/loading.vue'
import loading from '#examples/action/loading.vue?raw'
import MutedDemo from '#examples/action/muted.vue'
import muted from '#examples/action/muted.vue?raw'
import ShapesDemo from '#examples/action/shapes.vue'
import shapes from '#examples/action/shapes.vue?raw'

function wrapVueMarkdown(source: string) {
  return '```vue\n' + source + '\n```'
}
</script>

<template>
  <div>
    <BaseBreadcrumb />

    <DocLayout>
      <template #content>
        <!-- Action shapes -->
        <DocSection title="Actions shapes" tag="1.0.0">
          <DocComponent label="Default action shapes">
            <template #demo>
              <BaseFocusLoop class="flex flex-wrap items-end gap-2">
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

        <!-- Action muted -->
        <DocSection title="Muted actions" tag="1.0.0">
          <DocComponent label="Muted action variation">
            <template #demo>
              <BaseFocusLoop class="flex flex-wrap items-end gap-2">
                <MutedDemo />
              </BaseFocusLoop>
            </template>
            <template #code>
              <AddonMarkdownRemark :source="wrapVueMarkdown(muted)" fullwidth />
            </template>
          </DocComponent>
        </DocSection>

        <!-- Action loading -->
        <DocSection title="Loading state" tag="1.0.0">
          <DocComponent label="Action loading variation">
            <template #demo>
              <BaseFocusLoop class="flex flex-wrap items-end gap-2">
                <LoadingDemo />
              </BaseFocusLoop>
            </template>
            <template #code>
              <AddonMarkdownRemark
                :source="wrapVueMarkdown(loading)"
                fullwidth
              />
            </template>
          </DocComponent>
        </DocSection>
        <!-- Action group -->
        <DocSection title="Actions group" tag="1.0.0">
          <DocComponent label="Actions inside a group">
            <template #demo>
              <BaseFocusLoop class="flex items-end">
                <GroupDemo />
              </BaseFocusLoop>
            </template>
            <template #code>
              <AddonMarkdownRemark :source="wrapVueMarkdown(group)" fullwidth />
            </template>
          </DocComponent>
        </DocSection>

        <DocComponentMeta name="BaseButtonAction" />
      </template>
      <template #toc>
        <DocToc />
      </template>
    </DocLayout>
  </div>
</template>
