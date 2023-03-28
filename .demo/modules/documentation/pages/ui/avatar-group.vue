<script setup lang="ts">
import LargeDemo from '#examples/avatar-group/large.vue'
import large from '#examples/avatar-group/large.vue?raw'
import MediumDemo from '#examples/avatar-group/medium.vue'
import medium from '#examples/avatar-group/medium.vue?raw'
import SmallDemo from '#examples/avatar-group/small.vue'
import small from '#examples/avatar-group/small.vue?raw'
import TinyDemo from '#examples/avatar-group/tiny.vue'
import tiny from '#examples/avatar-group/tiny.vue?raw'

function wrapVueMarkdown(source: string) {
  return '```vue\n' + source + '\n```'
}
</script>

<template>
  <div>
    <BaseBreadcrumb />

    <DocLayout>
      <template #content>
        <!-- Avatar group -->
        <DocSection title="Avatar group" tag="1.0.0">
          <DocComponent label="Xs avatar group">
            <template #demo>
              <div class="flex flex-wrap items-end gap-4">
                <TinyDemo />
              </div>
            </template>
            <template #code>
              <AddonMarkdownRemark :source="wrapVueMarkdown(tiny)" fullwidth />
            </template>
          </DocComponent>
        </DocSection>

        <!-- Avatar group -->
        <DocSection title="Avatar group" tag="1.0.0">
          <DocComponent label="Sm avatar group">
            <template #demo>
              <div class="flex flex-wrap items-end gap-4">
                <SmallDemo />
              </div>
            </template>
            <template #code>
              <AddonMarkdownRemark :source="wrapVueMarkdown(small)" fullwidth />
            </template>
          </DocComponent>
        </DocSection>

        <!-- Avatar group -->
        <DocSection title="Avatar group" tag="1.0.0">
          <DocComponent label="Md avatar group">
            <template #demo>
              <div class="flex flex-wrap items-end gap-4">
                <MediumDemo />
              </div>
            </template>
            <template #code>
              <AddonMarkdownRemark
                :source="wrapVueMarkdown(medium)"
                fullwidth
              />
            </template>
          </DocComponent>
        </DocSection>

        <!-- Avatar group -->
        <DocSection title="Avatar group" tag="1.0.0">
          <DocComponent label="Lg avatar group">
            <template #demo>
              <div class="flex flex-wrap items-end gap-4">
                <LargeDemo />
              </div>
            </template>
            <template #code>
              <AddonMarkdownRemark :source="wrapVueMarkdown(large)" fullwidth />
            </template>
          </DocComponent>
        </DocSection>

        <DocComponentMeta name="BaseAvatarGroup" />
      </template>
      <template #toc>
        <DocToc />
      </template>
    </DocLayout>
  </div>
</template>
