<script setup lang="ts">
import BaseDemo from '../../../examples/snack/base.vue'
import base from '../../../examples/snack/base.vue?raw'
import BaseLightDemo from '../../../examples/snack/base-light.vue'
import baseLight from '../../../examples/snack/base-light.vue?raw'
import IconDemo from '../../../examples/snack/icon.vue'
import icon from '../../../examples/snack/icon.vue?raw'
import IconLightDemo from '../../../examples/snack/icon-light.vue'
import iconLight from '../../../examples/snack/icon-light.vue?raw'
import IconSmallDemo from '../../../examples/snack/icon-small.vue'
import iconSmall from '../../../examples/snack/icon-small.vue?raw'
import ImageDemo from '../../../examples/snack/image.vue'
import image from '../../../examples/snack/image.vue?raw'
import ImageLightDemo from '../../../examples/snack/image-light.vue'
import imageLight from '../../../examples/snack/image-light.vue?raw'
import ImageSmallDemo from '../../../examples/snack/image-small.vue'
import imageSmall from '../../../examples/snack/image-small.vue?raw'
import SmallDemo from '../../../examples/snack/small.vue'
import small from '../../../examples/snack/small.vue?raw'

function wrapVueMarkdown(source: string) {
  return '```vue\n' + source + '\n```'
}
</script>

<template>
  <div>
    <BaseBreadcrumb />

    <DocLayout>
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
              <AddonMarkdownRemark :source="wrapVueMarkdown(base)" fullwidth />
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
              <AddonMarkdownRemark
                :source="wrapVueMarkdown(baseLight)"
                fullwidth
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
              <AddonMarkdownRemark :source="wrapVueMarkdown(small)" fullwidth />
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
              <AddonMarkdownRemark :source="wrapVueMarkdown(icon)" fullwidth />
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
              <AddonMarkdownRemark
                :source="wrapVueMarkdown(iconLight)"
                fullwidth
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
              <AddonMarkdownRemark
                :source="wrapVueMarkdown(iconSmall)"
                fullwidth
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
              <AddonMarkdownRemark :source="wrapVueMarkdown(image)" fullwidth />
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
              <AddonMarkdownRemark
                :source="wrapVueMarkdown(imageLight)"
                fullwidth
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
              <AddonMarkdownRemark
                :source="wrapVueMarkdown(imageSmall)"
                fullwidth
              />
            </template>
          </DocComponent>
        </DocSection>

        <!-- Snack props -->
        <DocComponentMeta name="BaseSnack" />
      </template>
      <template #toc>
        <DocToc />
      </template>
    </DocLayout>
  </div>
</template>
