<script setup lang="ts">
import CircleSizesDemo from '~/documentation/iconbox/circle-sizes.vue'
import circleSizes from '~/documentation/iconbox/circle-sizes.vue?raw'
import ElevationDemo from '~/documentation/iconbox/elevation.vue'
import elevation from '~/documentation/iconbox/elevation.vue?raw'
import OutlineDemo from '~/documentation/iconbox/outline.vue'
import outline from '~/documentation/iconbox/outline.vue?raw'
import PastelDemo from '~/documentation/iconbox/pastel.vue'
import pastel from '~/documentation/iconbox/pastel.vue?raw'
import RoundedSizesDemo from '~/documentation/iconbox/rounded-sizes.vue'
import roundedSizes from '~/documentation/iconbox/rounded-sizes.vue?raw'
import SolidDemo from '~/documentation/iconbox/solid.vue'
import solid from '~/documentation/iconbox/solid.vue?raw'

definePageMeta({
  title: 'Icon Boxes',
  documentation: {
    category: 'NUI Elements',
    components: ['BaseIconBox'],
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
    label: 'Icon Box',
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
        <!-- Icon box rounded -->
        <DocSection title="Rounded box" tag="1.0.0">
          <DocComponent label="Rounded boxes sizes">
            <template #demo>
              <div class="flex flex-wrap items-end gap-4">
                <RoundedSizesDemo />
              </div>
            </template>
            <template #code>
              <DocMarkdown
                :source="wrapVueMarkdown(roundedSizes)"
                class="prose max-w-full"
              />
            </template>
          </DocComponent>
        </DocSection>

        <!-- Icon box circle -->
        <DocSection title="Circle box" tag="1.0.0">
          <DocComponent label="Circle boxes sizes">
            <template #demo>
              <div class="flex flex-wrap items-end gap-4">
                <CircleSizesDemo />
              </div>
            </template>
            <template #code>
              <DocMarkdown
                :source="wrapVueMarkdown(circleSizes)"
                class="prose max-w-full"
              />
            </template>
          </DocComponent>
        </DocSection>

        <!-- Icon box solid -->
        <DocSection title="Solid colors" tag="1.0.0">
          <DocComponent label="Solid colors example">
            <template #demo>
              <div class="flex flex-wrap items-end gap-2">
                <SolidDemo />
              </div>
            </template>
            <template #code>
              <DocMarkdown
                :source="wrapVueMarkdown(solid)"
                class="prose max-w-full"
              />
            </template>
          </DocComponent>
        </DocSection>

        <!-- Icon box pastel -->
        <DocSection title="Pastel colors" tag="1.0.0">
          <DocComponent label="Pastel colors example">
            <template #demo>
              <div class="flex flex-wrap items-end gap-2">
                <PastelDemo />
              </div>
            </template>
            <template #code>
              <DocMarkdown
                :source="wrapVueMarkdown(pastel)"
                class="prose max-w-full"
              />
            </template>
          </DocComponent>
        </DocSection>

        <!-- Icon box outline -->
        <DocSection title="Outline colors" tag="1.0.0">
          <DocComponent label="Outline colors example">
            <template #demo>
              <div class="flex flex-wrap items-end gap-2">
                <OutlineDemo />
              </div>
            </template>
            <template #code>
              <DocMarkdown
                :source="wrapVueMarkdown(outline)"
                class="prose max-w-full"
              />
            </template>
          </DocComponent>
        </DocSection>

        <!-- Icon box elevation -->
        <DocSection title="Elevation" tag="1.0.0">
          <DocComponent label="Elevation example">
            <template #demo>
              <div class="flex flex-wrap items-end gap-2">
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

        <!-- Icon box props -->
        <DocComponentMeta name="BaseIconBox" />
      </template>
      <!-- Toc -->
      <template #toc>
        <DocToc />
      </template>
    </DocLayout>
  </div>
</template>
