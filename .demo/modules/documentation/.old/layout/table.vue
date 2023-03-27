<script setup lang="ts">
import CurvedDemo from '#examples/table/curved.vue'
import curved from '#examples/table/curved.vue?raw'
import MediaCurvedDemo from '#examples/table/media-curved.vue'
import mediaCurved from '#examples/table/media-curved.vue?raw'
import MediaRoundedDemo from '#examples/table/media-rounded.vue'
import mediaRounded from '#examples/table/media-rounded.vue?raw'
import MediaStraightDemo from '#examples/table/media-straight.vue'
import mediaStraight from '#examples/table/media-straight.vue?raw'
import RoundedDemo from '#examples/table/rounded.vue'
import rounded from '#examples/table/rounded.vue?raw'
import StraightDemo from '#examples/table/straight.vue'
import straight from '#examples/table/straight.vue?raw'

function wrapVueMarkdown(source: string) {
  return '```vue\n' + source + '\n```'
}
</script>

<template>
  <div>
    <BaseBreadcrumb />

    <DocLayout>
      <template #content>
        <!-- Straight table -->
        <DocSection title="Straight shape" tag="1.0.0">
          <DocComponent label="Straight table example">
            <template #demo>
              <div class="w-full">
                <StraightDemo />
              </div>
            </template>
            <template #code>
              <AddonMarkdownRemark
                :source="wrapVueMarkdown(straight)"
                fullwidth
              />
            </template>
          </DocComponent>
        </DocSection>

        <!-- Rounded table -->
        <DocSection title="Rounded shape" tag="1.0.0">
          <DocComponent label="Rounded table example">
            <template #demo>
              <div class="w-full">
                <RoundedDemo />
              </div>
            </template>
            <template #code>
              <AddonMarkdownRemark
                :source="wrapVueMarkdown(rounded)"
                fullwidth
              />
            </template>
          </DocComponent>
        </DocSection>

        <!-- Curved table -->
        <DocSection title="Curved shape" tag="1.0.0">
          <DocComponent label="Curved table example">
            <template #demo>
              <div class="w-full">
                <CurvedDemo />
              </div>
            </template>
            <template #code>
              <AddonMarkdownRemark
                :source="wrapVueMarkdown(curved)"
                fullwidth
              />
            </template>
          </DocComponent>
        </DocSection>

        <!-- Straight media table -->
        <DocSection
          id="table-media-straight"
          title="Straight media"
          tag="1.0.0"
        >
          <DocComponent label="Media straight table example">
            <template #demo>
              <div class="w-full">
                <MediaStraightDemo />
              </div>
            </template>
            <template #code>
              <AddonMarkdownRemark
                :source="wrapVueMarkdown(mediaStraight)"
                fullwidth
              />
            </template>
          </DocComponent>
        </DocSection>

        <!-- Rounded media table -->
        <DocSection title="Rounded media" tag="1.0.0">
          <DocComponent label="Media rounded table example">
            <template #demo>
              <div class="w-full">
                <MediaRoundedDemo />
              </div>
            </template>
            <template #code>
              <AddonMarkdownRemark
                :source="wrapVueMarkdown(mediaRounded)"
                fullwidth
              />
            </template>
          </DocComponent>
        </DocSection>

        <!-- Curved media table -->
        <DocSection title="Curved media" tag="1.0.0">
          <DocComponent label="Media curved table example">
            <template #demo>
              <div class="w-full">
                <MediaCurvedDemo />
              </div>
            </template>
            <template #code>
              <AddonMarkdownRemark
                :source="wrapVueMarkdown(mediaCurved)"
                fullwidth
              />
            </template>
          </DocComponent>
        </DocSection>

        <!-- Table props -->
        <DocComponentMeta name="TairoTable" />

        <!-- Heading props -->
        <DocComponentMeta name="TairoTableHeading" />

        <!-- Row props -->
        <DocComponentMeta name="TairoTableRow" />

        <!-- Cell props -->
        <DocComponentMeta name="TairoTableCell" />
      </template>
      <template #toc>
        <DocToc />
      </template>
    </DocLayout>
  </div>
</template>
