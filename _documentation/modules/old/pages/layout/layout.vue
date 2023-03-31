<script setup lang="ts">
import WrapperDemo from '#examples/tairo/wrapper.vue'
import wrapper from '#examples/tairo/wrapper.vue?raw'

function wrapVueMarkdown(source: string) {
  return '```vue\n' + source + '\n```'
}
</script>

<template>
  <div>
    <BaseBreadcrumb />

    <DocLayout>
      <template #content>
        <!-- Layout example -->
        <DocSection title="Tairo layout" tag="1.0.0">
          <DocComponent label="Tairo layout component">
            <template #demo>
              <div class="w-full flex items-end gap-6">
                <WrapperDemo />
              </div>
            </template>
            <template #code>
              <AddonMarkdownRemark
                :source="wrapVueMarkdown(wrapper)"
                fullwidth
              />
            </template>
          </DocComponent>
        </DocSection>

        <!-- Layout properties -->
        <DocComponentMeta name="TairoLayout" />
        <DocComponentMeta name="TairoLogo" />
      </template>
      <template #toc>
        <DocToc />
      </template>
    </DocLayout>
  </div>
</template>
