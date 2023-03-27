<script setup lang="ts">
import OutlineDemo from '../../../examples/tag/outline.vue'
import outline from '../../../examples/tag/outline.vue?raw'
import PastelDemo from '../../../examples/tag/pastel.vue'
import pastel from '../../../examples/tag/pastel.vue?raw'
import ShapesDemo from '../../../examples/tag/shapes.vue'
import shapes from '../../../examples/tag/shapes.vue?raw'
import SolidDemo from '../../../examples/tag/solid.vue'
import solid from '../../../examples/tag/solid.vue?raw'
import ShadowFlatDemo from '../../../examples/tag/shadow-flat.vue'
import shadowFlat from '../../../examples/tag/shadow-flat.vue?raw'
import ShadowHoverDemo from '../../../examples/tag/shadow-hover.vue'
import shadowHover from '../../../examples/tag/shadow-hover.vue?raw'

function wrapVueMarkdown(source: string) {
  return '```vue\n' + source + '\n```'
}
</script>

<template>
  <div>
    <BaseBreadcrumb />

    <DocLayout>
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
                fullwidth
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
              <AddonMarkdownRemark :source="wrapVueMarkdown(solid)" fullwidth />
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
                fullwidth
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
                fullwidth
              />
            </template>
          </DocComponent>
        </DocSection>

        <!-- Flat shadow -->
        <DocSection title="Flat shadow" tag="1.0.0">
          <DocComponent label="Flat shadow examples">
            <template #demo>
              <div class="flex flex-wrap items-end gap-1">
                <ShadowFlatDemo />
              </div>
            </template>
            <template #code>
              <AddonMarkdownRemark
                :source="wrapVueMarkdown(shadowFlat)"
                fullwidth
              />
            </template>
          </DocComponent>
        </DocSection>

        <!-- Hover shadow -->
        <DocSection title="Hover shadow" tag="1.0.0">
          <DocComponent label="Hover shadow examples">
            <template #demo>
              <div class="flex flex-wrap items-end gap-1">
                <ShadowHoverDemo />
              </div>
            </template>
            <template #code>
              <AddonMarkdownRemark
                :source="wrapVueMarkdown(shadowHover)"
                fullwidth
              />
            </template>
          </DocComponent>
        </DocSection>

        <!-- Tag props -->
        <DocComponentMeta name="BaseTag" />
      </template>
      <template #toc>
        <DocToc />
      </template>
    </DocLayout>
  </div>
</template>
