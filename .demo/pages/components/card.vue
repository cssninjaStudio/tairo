<script setup lang="ts">
import ElevationDemo from '~/documentation/card/elevation.vue'
import elevation from '~/documentation/card/elevation.vue?raw'
import ElevationHoverDemo from '~/documentation/card/elevation-hover.vue'
import elevationHover from '~/documentation/card/elevation-hover.vue?raw'
import ShapesDemo from '~/documentation/card/shapes.vue'
import shapes from '~/documentation/card/shapes.vue?raw'

definePageMeta({
  title: 'Cards',
  documentation: {
    category: 'Display',
    components: ['BaseCard'],
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
    label: 'Card',
    hideLabel: false,
    to: '#/',
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
        <!-- Card shapes -->
        <DocSection title="Card shapes" tag="1.0.0">
          <DocComponent label="Card shapes example">
            <template #demo>
              <div class="grid gap-4 md:grid-cols-3">
                <ShapesDemo />
              </div>
            </template>
            <template #code>
              <DocMarkdown
                :source="wrapVueMarkdown(shapes)"
                class="prose max-w-full"
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
              <DocMarkdown
                :source="wrapVueMarkdown(elevation)"
                class="prose max-w-full"
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
              <DocMarkdown
                :source="wrapVueMarkdown(elevationHover)"
                class="prose max-w-full"
              />
            </template>
          </DocComponent>
        </DocSection>

        <DocComponentMeta name="BaseCard" />
      </template>
      <!-- Toc -->
      <template #toc>
        <DocToc />
      </template>
    </DocLayout>
  </div>
</template>
