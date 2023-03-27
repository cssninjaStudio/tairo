<script setup lang="ts">
import SubsidebarDemo from '#examples/tairo/subsidebar.vue'
import subsidebar from '#examples/tairo/subsidebar.vue?raw'

function wrapVueMarkdown(source: string) {
  return '```vue\n' + source + '\n```'
}
</script>

<template>
  <div>
    <BaseBreadcrumb />

    <DocLayout>
      <template #content>
        <!-- Tairo subsidebar -->
        <DocSection title="Tairo subsidebar" tag="1.0.0">
          <DocComponent label="Tairo subsidebar component">
            <template #demo>
              <div class="w-full flex items-end gap-6">
                <SubsidebarDemo />
              </div>
            </template>
            <template #code>
              <AddonMarkdownRemark
                :source="wrapVueMarkdown(subsidebar)"
                fullwidth
              />
            </template>
          </DocComponent>
        </DocSection>

        <!-- Tairo subsidebar properties -->
        <DocComponentMeta name="TairoSubsidebar" />
        <DocComponentMeta name="TairoSubsidebarHeader" />
      </template>
      <template #toc>
        <DocToc />
      </template>
    </DocLayout>
  </div>
</template>
