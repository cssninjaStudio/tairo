<script setup lang="ts">
import ProseDemo from '../../../examples/typography/prose.vue'
import prose from '../../../examples/typography/prose.vue?raw'

function wrapVueMarkdown(source: string) {
  return '```vue\n' + source + '\n```'
}
</script>

<template>
  <div>
    <BaseBreadcrumb />

    <DocLayout>
      <template #content>
        <DocSection title="BaseProse" tag="1.0.0">
          <DocComponent>
            <BaseProse>
              BaseProse uses Taildwind CSS <code>prose</code> that features the
              <code>muted</code> color. It allows to display appropriate colors
              when using dark mode. (this text uses <code>BaseProse</code>)
            </BaseProse>
            <template #demo>
              <div class="flex flex-col space-y-3">
                <ProseDemo />
              </div>
            </template>
            <template #code>
              <AddonMarkdownRemark :source="wrapVueMarkdown(prose)" fullwidth />
            </template>
          </DocComponent>
        </DocSection>

        <DocComponentMeta name="BaseProse" />
      </template>
      <template #toc>
        <DocToc />
      </template>
    </DocLayout>
  </div>
</template>
