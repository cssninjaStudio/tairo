<script setup lang="ts">
import WrapperDemo from '../../../examples/tairo/wrapper.vue'
import wrapper from '../../../examples/tairo/wrapper.vue?raw'

function wrapVueMarkdown(source: string) {
  return '```vue\n' + source + '\n```'
}
</script>

<template>
  <div>
    <BaseBreadcrumb />

    <DocLayout>
      <template #content>
        <!-- Wrapper example -->
        <DocSection title="Tairo wrapper" tag="1.0.0">
          <DocComponent label="Tairo wrapper component">
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

        <!-- Wrapper properties -->
        <DocComponentMeta name="TairoContentWrapper" />
        <DocComponentMeta name="TairoContentWrapperTabbed" />
      </template>
      <template #toc>
        <DocToc />
      </template>
    </DocLayout>
  </div>
</template>
