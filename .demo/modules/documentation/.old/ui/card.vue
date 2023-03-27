<script setup lang="ts">
import ElevationHoverDemo from '#examples/card/elevation-hover.vue'
import elevationHover from '#examples/card/elevation-hover.vue?raw'
import ElevationDemo from '#examples/card/elevation.vue'
import elevation from '#examples/card/elevation.vue?raw'
import ShapesDemo from '#examples/card/shapes.vue'
import shapes from '#examples/card/shapes.vue?raw'

function wrapVueMarkdown(source: string) {
  return '```vue\n' + source + '\n```'
}
</script>

<template>
  <div>
    <BaseBreadcrumb />

    <DocLayout>
      <template #content>
        <!-- Card shapes -->
        <DocSection title="Card shapes" tag="1.0.0">
          <DocComponent label="Card shapes example">
            <template #demo>
              <div class="grid gap-4 md:grid-cols-3">
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

        <!-- Card elevation -->
        <DocSection title="Card elevation" tag="1.0.0">
          <DocComponent label="Card elevations example">
            <template #demo>
              <div class="grid gap-4 md:grid-cols-3">
                <ElevationDemo />
              </div>
            </template>
            <template #code>
              <AddonMarkdownRemark
                :source="wrapVueMarkdown(elevation)"
                fullwidth
              />
            </template>
          </DocComponent>
        </DocSection>

        <!-- Card elevation hover -->
        <DocSection
          id="card-elevation-hover"
          title="Hover elevation"
          tag="1.0.0"
        >
          <DocComponent label="Hover elevations example">
            <template #demo>
              <div class="grid gap-4 md:grid-cols-3">
                <ElevationHoverDemo />
              </div>
            </template>
            <template #code>
              <AddonMarkdownRemark
                :source="wrapVueMarkdown(elevationHover)"
                fullwidth
              />
            </template>
          </DocComponent>
        </DocSection>

        <DocComponentMeta name="BaseCard" />
      </template>
      <template #toc>
        <DocToc />
      </template>
    </DocLayout>
  </div>
</template>
