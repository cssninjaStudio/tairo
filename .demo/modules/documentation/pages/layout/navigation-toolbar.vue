<script setup lang="ts">
import ToolbarDemo from '#examples/tairo/toolbar.vue'
import toolbar from '#examples/tairo/toolbar.vue?raw'

function wrapVueMarkdown(source: string) {
  return '```vue\n' + source + '\n```'
}
</script>

<template>
  <div>
    <BaseBreadcrumb />

    <DocLayout>
      <template #content>
        <!-- Tairo toolbar -->
        <DocSection title="Tairo toolbar" tag="1.0.0">
          <DocComponent label="Tairo toolbar component">
            <template #demo>
              <div class="w-full flex items-end gap-6">
                <ToolbarDemo />
              </div>
            </template>
            <template #code>
              <AddonMarkdownRemark
                :source="wrapVueMarkdown(toolbar)"
                fullwidth
              />
            </template>
          </DocComponent>
        </DocSection>

        <!-- Tairo subsidebar properties -->
        <DocComponentMeta name="TairoNavigationToolbar" />
        <DocComponentMeta name="TairoNavigationBurger" />
      </template>
      <template #toc>
        <DocToc />
      </template>
    </DocLayout>
  </div>
</template>
