<script setup lang="ts">
import DisabledDemo from '~/documentation/button/disabled.vue'
import disabled from '~/documentation/button/group.vue?raw'
import GroupDemo from '~/documentation/button/disabled.vue'
import group from '~/documentation/button/group.vue?raw'
import IconsDemo from '~/documentation/button/icons.vue'
import icons from '~/documentation/button/icons.vue?raw'
import LinksDemo from '~/documentation/button/links.vue'
import links from '~/documentation/button/links.vue?raw'
import LoadingDemo from '~/documentation/button/loading.vue'
import loading from '~/documentation/button/loading.vue?raw'
import OutlineDemo from '~/documentation/button/outline.vue'
import outline from '~/documentation/button/outline.vue?raw'
import PastelDemo from '~/documentation/button/pastel.vue'
import pastel from '~/documentation/button/pastel.vue?raw'
import ShapesDemo from '~/documentation/button/shapes.vue'
import shapes from '~/documentation/button/shapes.vue?raw'
import SolidDemo from '~/documentation/button/solid.vue'
import solid from '~/documentation/button/solid.vue?raw'

definePageMeta({
  title: 'Buttons',
  documentation: {
    category: 'NUI Elements',
    components: ['BaseButton'],
    composables: ['useButton'],
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
        <!-- Button shapes -->
        <DocSection title="Buttons shapes" tag="1.0.0">
          <DocComponent label="Default button shapes">
            <template #demo>
              <BaseFocusLoop class="flex flex-wrap items-end gap-4">
                <ShapesDemo />
              </BaseFocusLoop>
            </template>
            <template #code>
              <AddonMarkdownRemark
                :source="wrapVueMarkdown(shapes)"
                class="prose max-w-full"
              />
            </template>
          </DocComponent>
        </DocSection>

        <!-- Button links -->
        <DocSection title="Link buttons" tag="1.0.0">
          <DocComponent label="Button shaped links">
            <template #demo>
              <BaseFocusLoop class="flex flex-wrap items-end gap-4">
                <LinksDemo />
              </BaseFocusLoop>
            </template>
            <template #code>
              <AddonMarkdownRemark
                :source="wrapVueMarkdown(links)"
                class="prose max-w-full"
              />
            </template>
          </DocComponent>
        </DocSection>

        <!-- Solid colors -->
        <DocSection title="Solid colors" tag="1.0.0">
          <DocComponent label="Solid button colors">
            <template #demo>
              <BaseFocusLoop class="flex flex-wrap items-end gap-4">
                <SolidDemo />
              </BaseFocusLoop>
            </template>
            <template #code>
              <AddonMarkdownRemark
                :source="wrapVueMarkdown(solid)"
                class="prose max-w-full"
              />
            </template>
          </DocComponent>
        </DocSection>

        <!-- Pastel colors -->
        <DocSection title="Pastel colors" tag="1.0.0">
          <DocComponent label="Pastel button colors">
            <template #demo>
              <BaseFocusLoop class="flex flex-wrap items-end gap-4">
                <PastelDemo />
              </BaseFocusLoop>
            </template>
            <template #code>
              <AddonMarkdownRemark
                :source="wrapVueMarkdown(pastel)"
                class="prose max-w-full"
              />
            </template>
          </DocComponent>
        </DocSection>

        <!-- Outline colors -->
        <DocSection title="Outline colors" tag="1.0.0">
          <DocComponent label="Outline button colors">
            <template #demo>
              <BaseFocusLoop class="flex flex-wrap items-end gap-4">
                <OutlineDemo />
              </BaseFocusLoop>
            </template>
            <template #code>
              <AddonMarkdownRemark
                :source="wrapVueMarkdown(outline)"
                class="prose max-w-full"
              />
            </template>
          </DocComponent>
        </DocSection>

        <!-- Loading -->
        <DocSection title="Loading state" tag="1.0.0">
          <DocComponent label="Button placeload insertion">
            <template #demo>
              <BaseFocusLoop class="flex flex-wrap items-end gap-4">
                <LoadingDemo />
              </BaseFocusLoop>
            </template>
            <template #code>
              <AddonMarkdownRemark
                :source="wrapVueMarkdown(loading)"
                class="prose max-w-full"
              />
            </template>
          </DocComponent>
        </DocSection>

        <!-- Icons -->
        <DocSection title="With icons" tag="1.0.0">
          <DocComponent label="Button icons insertion">
            <template #demo>
              <BaseFocusLoop class="flex flex-wrap items-end gap-4">
                <IconsDemo />
              </BaseFocusLoop>
            </template>
            <template #code>
              <AddonMarkdownRemark
                :source="wrapVueMarkdown(icons)"
                class="prose max-w-full"
              />
            </template>
          </DocComponent>
        </DocSection>

        <!-- Disabled -->
        <DocSection title="Disabled state" tag="1.0.0">
          <DocComponent label="Button disabled state">
            <template #demo>
              <BaseFocusLoop class="flex flex-wrap items-end gap-4">
                <DisabledDemo />
              </BaseFocusLoop>
            </template>
            <template #code>
              <AddonMarkdownRemark
                :source="wrapVueMarkdown(disabled)"
                class="prose max-w-full"
              />
            </template>
          </DocComponent>
        </DocSection>

        <!-- Button group -->
        <DocSection title="Button group" tag="1.0.0">
          <DocComponent label="Setting a button group">
            <template #demo>
              <BaseFocusLoop class="flex flex-wrap items-end gap-2">
                <GroupDemo />
              </BaseFocusLoop>
            </template>
            <template #code>
              <AddonMarkdownRemark
                :source="wrapVueMarkdown(group)"
                class="prose max-w-full"
              />
            </template>
          </DocComponent>
        </DocSection>

        <DocComponentMeta name="BaseButton" />
      </template>
      <!-- Toc -->
      <template #toc>
        <DocToc />
      </template>
    </DocLayout>
  </div>
</template>
