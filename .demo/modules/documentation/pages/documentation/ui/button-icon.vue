<script setup lang="ts">
import GroupDemo from '../../../examples/icon-button/group.vue'
import group from '../../../examples/icon-button/group.vue?raw'
import LoadingDemo from '../../../examples/icon-button/loading.vue'
import loading from '../../../examples/icon-button/loading.vue?raw'
import MutedDemo from '../../../examples/icon-button/muted.vue'
import muted from '../../../examples/icon-button/muted.vue?raw'
import PrimaryDemo from '../../../examples/icon-button/primary.vue'
import primary from '../../../examples/icon-button/primary.vue?raw'
import ShapesDemo from '../../../examples/icon-button/shapes.vue'
import shapes from '../../../examples/icon-button/shapes.vue?raw'
import SmallDemo from '../../../examples/icon-button/small.vue'
import small from '../../../examples/icon-button/small.vue?raw'

function wrapVueMarkdown(source: string) {
  return '```vue\n' + source + '\n```'
}
</script>

<template>
  <div>
    <BaseBreadcrumb />

    <DocLayout>
      <template #content>
        <!-- Icon button shapes -->
        <DocSection title="Button shapes" tag="1.0.0">
          <DocComponent label="Default button shapes">
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

        <!-- Icon button small size -->
        <DocSection title="Small size" tag="1.0.0">
          <DocComponent label="Smaller icon buttons">
            <template #demo>
              <BaseFocusLoop class="flex flex-wrap items-end gap-2">
                <SmallDemo />
              </BaseFocusLoop>
            </template>
            <template #code>
              <AddonMarkdownRemark :source="wrapVueMarkdown(small)" fullwidth />
            </template>
          </DocComponent>
        </DocSection>

        <!-- Icon button primary -->
        <DocSection title="Primary color" tag="1.0.0">
          <DocComponent label="Icon button primary color">
            <template #demo>
              <BaseFocusLoop class="flex flex-wrap items-end gap-2">
                <PrimaryDemo />
              </BaseFocusLoop>
            </template>
            <template #code>
              <AddonMarkdownRemark
                :source="wrapVueMarkdown(primary)"
                fullwidth
              />
            </template>
          </DocComponent>
        </DocSection>

        <!-- Icon button muted -->
        <DocSection title="Button muted" tag="1.0.0">
          <DocComponent label="Button muted variation">
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

        <!-- Icon button loading -->
        <DocSection title="Button loading" tag="1.0.0">
          <DocComponent label="Icon button loading">
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

        <!-- Icon button group -->
        <DocSection title="Button group" tag="1.0.0">
          <DocComponent label="icon buttons inside a group">
            <template #demo>
              <BaseFocusLoop class="flex flex-wrap items-end">
                <GroupDemo />
              </BaseFocusLoop>
            </template>
            <template #code>
              <AddonMarkdownRemark :source="wrapVueMarkdown(group)" fullwidth />
            </template>
          </DocComponent>
        </DocSection>

        <!-- properties -->
        <DocComponentMeta name="BaseButtonIcon" />
      </template>
      <template #toc>
        <DocToc />
      </template>
    </DocLayout>
  </div>
</template>
