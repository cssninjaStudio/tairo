<script setup lang="ts">
import GroupDemo from '~/documentation/action/group.vue'
import group from '~/documentation/action/group.vue?raw'
import LoadingDemo from '~/documentation/action/loading.vue'
import loading from '~/documentation/action/loading.vue?raw'
import MutedDemo from '~/documentation/action/muted.vue'
import muted from '~/documentation/action/muted.vue?raw'
import ShapesDemo from '~/documentation/action/shapes.vue'
import shapes from '~/documentation/action/shapes.vue?raw'

definePageMeta({
  title: 'Button Action',
  documentation: {
    category: 'NUI Elements',
    components: ['BaseButtonAction'],
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
        <!-- Action shapes -->
        <DocSection title="Actions shapes" tag="1.0.0">
          <DocComponent label="Default action shapes">
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

        <!-- Action muted -->
        <DocSection title="Muted actions" tag="1.0.0">
          <DocComponent label="Muted action variation">
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

        <!-- Action loading -->
        <DocSection title="Loading state" tag="1.0.0">
          <DocComponent label="Action loading variation">
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
        <!-- Action group -->
        <DocSection title="Actions group" tag="1.0.0">
          <DocComponent label="Actions inside a group">
            <template #demo>
              <BaseFocusLoop class="flex items-end">
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

        <DocComponentMeta name="BaseButtonAction" />
      </template>
      <!-- Toc -->
      <template #toc>
        <DocToc />
      </template>
    </DocLayout>
  </div>
</template>
