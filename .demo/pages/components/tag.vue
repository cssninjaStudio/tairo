<script setup lang="ts">
import OutlineDemo from '~/documentation/tag/outline.vue'
import outline from '~/documentation/tag/outline.vue?raw'
import PastelDemo from '~/documentation/tag/pastel.vue'
import pastel from '~/documentation/tag/pastel.vue?raw'
import ShapesDemo from '~/documentation/tag/shapes.vue'
import shapes from '~/documentation/tag/shapes.vue?raw'
import SolidDemo from '~/documentation/tag/solid.vue'
import solid from '~/documentation/tag/solid.vue?raw'

definePageMeta({
  title: 'Tags',
  documentation: {
    category: 'NUI Elements',
    components: ['BaseTag'],
  },
})

function wrapVueMarkdown(source: string) {
  return '```vue\n' + source + '\n```'
}
</script>

<template>
  <div>
    <BaseBreadcrumb />

    <!-- Documentation Layout -->
    <DocLayout>
      <!-- content -->
      <template #content>
        <!-- Tag shapes -->
        <DocSection title="Tag shapes" tag="1.0.0">
          <DocComponent label="Default tag shapes">
            <template #demo>
              <div class="flex flex-wrap items-end gap-1">
                <ShapesDemo />
              </div>
            </template>
            <template #code>
              <AddonMarkdownRemark
                :source="wrapVueMarkdown(shapes)"
                class="prose max-w-full"
              />
            </template>
          </DocComponent>
        </DocSection>

        <!-- Tag solid -->
        <DocSection title="Solid colors" tag="1.0.0">
          <DocComponent label="Tag solid colors">
            <template #demo>
              <div class="flex flex-wrap items-end gap-1">
                <SolidDemo />
              </div>
            </template>
            <template #code>
              <AddonMarkdownRemark
                :source="wrapVueMarkdown(solid)"
                class="prose max-w-full"
              />
            </template>
          </DocComponent>
        </DocSection>

        <!-- Tag outline -->
        <DocSection title="Outline colors" tag="1.0.0">
          <DocComponent label="Tag outline colors">
            <template #demo>
              <div class="flex flex-wrap items-end gap-1">
                <OutlineDemo />
              </div>
            </template>
            <template #code>
              <AddonMarkdownRemark
                :source="wrapVueMarkdown(outline)"
                class="prose max-w-full"
              />
            </template>
          </DocComponent>
        </DocSection>

        <!-- Tag pastel -->
        <DocSection title="Pastel colors" tag="1.0.0">
          <DocComponent label="Tag pastel colors">
            <template #demo>
              <div class="flex flex-wrap items-end gap-1">
                <PastelDemo />
              </div>
            </template>
            <template #code>
              <AddonMarkdownRemark
                :source="wrapVueMarkdown(pastel)"
                class="prose max-w-full"
              />
            </template>
          </DocComponent>
        </DocSection>

        <!-- Tag props -->
        <DocComponentMeta name="BaseTag" />
      </template>
      <!-- Toc -->
      <template #toc>
        <DocToc />
      </template>
    </DocLayout>
  </div>
</template>
