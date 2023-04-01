<script setup lang="ts">
import MenuDemo from '#examples/tairo/circular-menu.vue'
import menu from '#examples/tairo/circular-menu.vue?raw'

function wrapVueMarkdown(source: string) {
  return '```vue\n' + source + '\n```'
}
</script>

<template>
  <div>
    <BaseBreadcrumb />

    <DocLayout>
      <template #content>
        <!-- Circular menu example -->
        <DocSection title="Circular menu" tag="1.0.0">
          <DocComponent label="Tairo circular menu component">
            <template #demo>
              <div class="flex w-full items-end gap-6">
                <MenuDemo />
              </div>
            </template>
            <template #code>
              <AddonMarkdownRemark :source="wrapVueMarkdown(menu)" fullwidth />
            </template>
          </DocComponent>
        </DocSection>

        <!-- Circular menu properties -->
        <DocComponentMeta name="TairoSidebarCircularMenu" />
      </template>
      <template #toc>
        <DocToc />
      </template>
    </DocLayout>
  </div>
</template>
