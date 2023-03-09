<script setup lang="ts">
import BaseDemo from '~/documentation/snack/base.vue'
import base from '~/documentation/snack/base.vue?raw'
import BaseLightDemo from '~/documentation/snack/base-light.vue'
import baseLight from '~/documentation/snack/base-light.vue?raw'
import IconDemo from '~/documentation/snack/icon.vue'
import icon from '~/documentation/snack/icon.vue?raw'
import IconLightDemo from '~/documentation/snack/icon-light.vue'
import iconLight from '~/documentation/snack/icon-light.vue?raw'
import IconSmallDemo from '~/documentation/snack/icon-small.vue'
import iconSmall from '~/documentation/snack/icon-small.vue?raw'
import ImageDemo from '~/documentation/snack/image.vue'
import image from '~/documentation/snack/image.vue?raw'
import ImageLightDemo from '~/documentation/snack/image-light.vue'
import imageLight from '~/documentation/snack/image-light.vue?raw'
import ImageSmallDemo from '~/documentation/snack/image-small.vue'
import imageSmall from '~/documentation/snack/image-small.vue?raw'
import SmallDemo from '~/documentation/snack/small.vue'
import small from '~/documentation/snack/small.vue?raw'

definePageMeta({
  title: 'Snacks',
  documentation: {
    category: 'NUI Elements',
    components: ['BaseSnack'],
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
    label: 'Snack',
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
        <!-- Snack -->
        <DocSection title="Snack" tag="1.0.0">
          <DocComponent label="Snack base example">
            <template #demo>
              <div class="flex flex-wrap items-end gap-4">
                <BaseDemo />
              </div>
            </template>
            <template #code>
              <DocMarkdown
                :source="wrapVueMarkdown(base)"
                class="prose max-w-full"
              />
            </template>
          </DocComponent>
        </DocSection>

        <!-- Snack -->
        <DocSection title="Snack" tag="1.0.0">
          <DocComponent label="Snack base example">
            <template #demo>
              <div class="flex flex-wrap items-end gap-4">
                <BaseLightDemo />
              </div>
            </template>
            <template #code>
              <DocMarkdown
                :source="wrapVueMarkdown(baseLight)"
                class="prose max-w-full"
              />
            </template>
          </DocComponent>
        </DocSection>

        <!-- Snack small -->
        <DocSection title="Snack" tag="1.0.0">
          <DocComponent label="Snack base small example">
            <template #demo>
              <div class="flex flex-wrap items-end gap-4">
                <SmallDemo />
              </div>
            </template>
            <template #code>
              <DocMarkdown
                :source="wrapVueMarkdown(small)"
                class="prose max-w-full"
              />
            </template>
          </DocComponent>
        </DocSection>

        <!-- Snack -->
        <DocSection title="Snack" tag="1.0.0">
          <DocComponent label="Snack icons example">
            <template #demo>
              <div class="flex flex-wrap items-end gap-4">
                <IconDemo />
              </div>
            </template>
            <template #code>
              <DocMarkdown
                :source="wrapVueMarkdown(icon)"
                class="prose max-w-full"
              />
            </template>
          </DocComponent>
        </DocSection>

        <!-- Snack -->
        <DocSection title="Snack" tag="1.0.0">
          <DocComponent label="Snack icons example">
            <template #demo>
              <div class="flex flex-wrap items-end gap-4">
                <IconLightDemo />
              </div>
            </template>
            <template #code>
              <DocMarkdown
                :source="wrapVueMarkdown(iconLight)"
                class="prose max-w-full"
              />
            </template>
          </DocComponent>
        </DocSection>

        <!-- Snack -->
        <DocSection title="Snack" tag="1.0.0">
          <DocComponent label="Snack icons small example">
            <template #demo>
              <div class="flex flex-wrap items-end gap-4">
                <IconSmallDemo />
              </div>
            </template>
            <template #code>
              <DocMarkdown
                :source="wrapVueMarkdown(iconSmall)"
                class="prose max-w-full"
              />
            </template>
          </DocComponent>
        </DocSection>

        <!-- Snack -->
        <DocSection title="Snack" tag="1.0.0">
          <DocComponent label="Snack images example">
            <template #demo>
              <div class="flex flex-wrap items-end gap-4">
                <ImageDemo />
              </div>
            </template>
            <template #code>
              <DocMarkdown
                :source="wrapVueMarkdown(image)"
                class="prose max-w-full"
              />
            </template>
          </DocComponent>
        </DocSection>

        <!-- Snack -->
        <DocSection title="Snack" tag="1.0.0">
          <DocComponent label="Snack images example">
            <template #demo>
              <div class="flex flex-wrap items-end gap-4">
                <ImageLightDemo />
              </div>
            </template>
            <template #code>
              <DocMarkdown
                :source="wrapVueMarkdown(imageLight)"
                class="prose max-w-full"
              />
            </template>
          </DocComponent>
        </DocSection>

        <!-- Snack -->
        <DocSection title="Snack" tag="1.0.0">
          <DocComponent label="Snack images small example">
            <template #demo>
              <div class="flex flex-wrap items-end gap-4">
                <ImageSmallDemo />
              </div>
            </template>
            <template #code>
              <DocMarkdown
                :source="wrapVueMarkdown(imageSmall)"
                class="prose max-w-full"
              />
            </template>
          </DocComponent>
        </DocSection>

        <!-- Snack props -->
        <DocComponentMeta name="BaseSnack" />
      </template>
      <!-- Toc -->
      <template #toc>
        <DocToc />
      </template>
    </DocLayout>
  </div>
</template>
