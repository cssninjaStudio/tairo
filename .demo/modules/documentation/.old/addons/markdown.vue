<script setup lang="ts">
import MarkdownBaseDemo from '../../../examples/markdown/base.vue'
import markdownBase from '../../../examples/markdown/base.vue?raw'

function wrapVueMarkdown(source: string) {
  return '```vue\n' + source + '\n```'
}
</script>

<template>
  <div>
    <BaseBreadcrumb />

    <DocLayout>
      <template #content>
        <DocSection title="Render Markdown" tag="1.0.0">
          <DocComponent>
            <template #demo>
              <div class="pt-5">
                <MarkdownBaseDemo />
              </div>
            </template>
            <template #code>
              <AddonMarkdownRemark
                :source="wrapVueMarkdown(markdownBase)"
                fullwidth
              />
            </template>

            <BaseProse>
              <p>
                Use this component to render markdown content client-side. It
                uses
                <a href="https://github.com/remarkjs/remark" target="_blank"
                  >remark</a
                >
                and
                <a href="https://github.com/rehypejs/rehype" target="_blank"
                  >rehype</a
                >
                to parse and render the markdown content. It also uses the
                <NuxtLink to="/documentation/ui/prose">BaseProse</NuxtLink>
                to apply the Tailwind CSS <code>prose</code> class
              </p>
            </BaseProse>
          </DocComponent>
        </DocSection>

        <DocComponentMeta name="AddonMarkdownRemark" />
      </template>
      <template #toc>
        <DocToc />
      </template>
    </DocLayout>
  </div>
</template>
