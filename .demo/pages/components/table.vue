<script setup lang="ts">
import CurvedDemo from '~/documentation/table/curved.vue'
import curved from '~/documentation/table/curved.vue?raw'
import MediaCurvedDemo from '~/documentation/table/media-curved.vue'
import mediaCurved from '~/documentation/table/media-curved.vue?raw'
import MediaRoundedDemo from '~/documentation/table/media-rounded.vue'
import mediaRounded from '~/documentation/table/media-rounded.vue?raw'
import MediaStraightDemo from '~/documentation/table/media-straight.vue'
import mediaStraight from '~/documentation/table/media-straight.vue?raw'
import RoundedDemo from '~/documentation/table/rounded.vue'
import rounded from '~/documentation/table/rounded.vue?raw'
import StraightDemo from '~/documentation/table/straight.vue'
import straight from '~/documentation/table/straight.vue?raw'

definePageMeta({
  title: 'Tables',
  documentation: {
    category: 'Tairo Elements',
    components: [
      'TairoTable',
      'TairoTableHeading',
      'TairoTableRow',
      'TairoTableCell',
    ],
  },
})

function wrapVueMarkdown(source: string) {
  return '```vue\n' + source + '\n```'
}

const demoBreadcrumb = [
  {
    label: 'Home',
    hideLabel: true,
    icon: 'lucide:home',
    to: '/',
  },
  {
    label: 'Components Hub',
    hideLabel: false,
    to: '/components',
  },
  {
    label: 'Table',
    hideLabel: false,
    to: '#',
  },
]
</script>

<template>
  <div>
    <!-- BreadCrumb -->
    <BaseBreadcrumb :items="demoBreadcrumb" />

    <!-- Documentation Layout -->
    <DocLayout>
      <!-- content -->
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
              <DocMarkdown
                :source="wrapVueMarkdown(straight)"
                class="prose max-w-full"
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
              <DocMarkdown
                :source="wrapVueMarkdown(rounded)"
                class="prose max-w-full"
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
              <DocMarkdown
                :source="wrapVueMarkdown(curved)"
                class="prose max-w-full"
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
              <DocMarkdown
                :source="wrapVueMarkdown(mediaStraight)"
                class="prose max-w-full"
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
              <DocMarkdown
                :source="wrapVueMarkdown(mediaRounded)"
                class="prose max-w-full"
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
              <DocMarkdown
                :source="wrapVueMarkdown(mediaCurved)"
                class="prose max-w-full"
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
      <!-- Toc -->
      <template #toc>
        <DocToc />
      </template>
    </DocLayout>
  </div>
</template>
