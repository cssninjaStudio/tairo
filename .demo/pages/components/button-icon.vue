<script setup lang="ts">
import GroupDemo from '~/documentation/icon-button/group.vue'
import group from '~/documentation/icon-button/group.vue?raw'
import LoadingDemo from '~/documentation/icon-button/loading.vue'
import loading from '~/documentation/icon-button/loading.vue?raw'
import MutedDemo from '~/documentation/icon-button/muted.vue'
import muted from '~/documentation/icon-button/muted.vue?raw'
import PrimaryDemo from '~/documentation/icon-button/primary.vue'
import primary from '~/documentation/icon-button/primary.vue?raw'
import ShapesDemo from '~/documentation/icon-button/shapes.vue'
import shapes from '~/documentation/icon-button/shapes.vue?raw'
import SmallDemo from '~/documentation/icon-button/small.vue'
import small from '~/documentation/icon-button/small.vue?raw'

definePageMeta({
  title: 'Button Icon',
  documentation: {
    category: 'NUI Elements',
    components: ['BaseButtonIcon'],
    composables: ['useButton'],
  },
})

function wrapVueMarkdown(source: string) {
  return '```vue\n' + source + '\n```'
}
</script>

<template>
  <div>
    <!-- BreadCrumb -->
    <BaseBreadcrumb />

    <!-- Documentation Layout -->
    <DocLayout>
      <!-- content -->
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
              <DocMarkdown
                :source="wrapVueMarkdown(shapes)"
                class="prose max-w-full"
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
              <DocMarkdown
                :source="wrapVueMarkdown(small)"
                class="prose max-w-full"
              />
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
              <DocMarkdown
                :source="wrapVueMarkdown(primary)"
                class="prose max-w-full"
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
              <DocMarkdown
                :source="wrapVueMarkdown(muted)"
                class="prose max-w-full"
              />
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
              <DocMarkdown
                :source="wrapVueMarkdown(loading)"
                class="prose max-w-full"
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
              <DocMarkdown
                :source="wrapVueMarkdown(group)"
                class="prose max-w-full"
              />
            </template>
          </DocComponent>
        </DocSection>

        <!-- properties -->
        <DocComponentMeta name="BaseButtonIcon" />
      </template>
      <!-- Toc -->
      <template #toc>
        <DocToc />
      </template>
    </DocLayout>
  </div>
</template>
