<script setup lang="ts">
import ThemeToggleDemo from '../../../examples/theme-toggle/base.vue'
import themeToggle from '../../../examples/theme-toggle/base.vue?raw'

function wrapVueMarkdown(source: string) {
  return '```vue\n' + source + '\n```'
}
</script>

<template>
  <div>
    <BaseBreadcrumb />

    <DocLayout>
      <template #content>
        <!-- Theme toggle -->
        <DocSection title="Theme toggle" tag="1.0.0">
          <DocComponent label="Theme switcher component">
            <template #demo>
              <div class="flex flex-wrap items-end gap-1">
                <ThemeToggleDemo />
              </div>
            </template>
            <template #code>
              <AddonMarkdownRemark
                :source="wrapVueMarkdown(themeToggle)"
                fullwidth
              />
            </template>
          </DocComponent>
        </DocSection>

        <!-- properties -->
        <DocComponentMeta name="BaseThemeToggle" />
      </template>
      <template #toc>
        <DocToc />
      </template>
    </DocLayout>
  </div>
</template>
