<script setup lang="ts">
import {
  default as DisabledDemo,
  default as GroupDemo,
} from '#examples/button/disabled.vue'
import {
  default as disabled,
  default as group,
} from '#examples/button/group.vue?raw'
import IconsDemo from '#examples/button/icons.vue'
import icons from '#examples/button/icons.vue?raw'
import LinksDemo from '#examples/button/links.vue'
import links from '#examples/button/links.vue?raw'
import LoadingDemo from '#examples/button/loading.vue'
import loading from '#examples/button/loading.vue?raw'
import OutlineCondensedDemo from '#examples/button/outline-condensed.vue'
import outlineCondensed from '#examples/button/outline-condensed.vue?raw'
import OutlineDemo from '#examples/button/outline.vue'
import outline from '#examples/button/outline.vue?raw'
import PastelCondensedDemo from '#examples/button/pastel-condensed.vue'
import pastelCondensed from '#examples/button/pastel-condensed.vue?raw'
import PastelDemo from '#examples/button/pastel.vue'
import pastel from '#examples/button/pastel.vue?raw'
import ShadowFlatDemo from '#examples/button/shadow-flat.vue'
import shadowFlat from '#examples/button/shadow-flat.vue?raw'
import ShadowHoverDemo from '#examples/button/shadow-hover.vue'
import shadowHover from '#examples/button/shadow-hover.vue?raw'
import ShapesDemo from '#examples/button/shapes.vue'
import shapes from '#examples/button/shapes.vue?raw'
import SolidCondensedDemo from '#examples/button/solid-condensed.vue'
import solidCondensed from '#examples/button/solid-condensed.vue?raw'
import SolidDemo from '#examples/button/solid.vue'
import solid from '#examples/button/solid.vue?raw'

function wrapVueMarkdown(source: string) {
  return '```vue\n' + source + '\n```'
}
</script>

<template>
  <div>
    <BaseBreadcrumb />

    <DocLayout>
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
                fullwidth
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
              <AddonMarkdownRemark :source="wrapVueMarkdown(links)" fullwidth />
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
              <AddonMarkdownRemark :source="wrapVueMarkdown(solid)" fullwidth />
            </template>
          </DocComponent>
        </DocSection>

        <!-- Solid condensed colors -->
        <DocSection title="Solid condensed" tag="1.0.0">
          <DocComponent label="Smaller solid button colors">
            <template #demo>
              <BaseFocusLoop class="flex flex-wrap items-end gap-4">
                <SolidCondensedDemo />
              </BaseFocusLoop>
            </template>
            <template #code>
              <AddonMarkdownRemark
                :source="wrapVueMarkdown(solidCondensed)"
                fullwidth
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
                fullwidth
              />
            </template>
          </DocComponent>
        </DocSection>

        <!-- Pastel condensed colors -->
        <DocSection title="Pastel condensed" tag="1.0.0">
          <DocComponent label="Smaller pastel button colors">
            <template #demo>
              <BaseFocusLoop class="flex flex-wrap items-end gap-4">
                <PastelCondensedDemo />
              </BaseFocusLoop>
            </template>
            <template #code>
              <AddonMarkdownRemark
                :source="wrapVueMarkdown(pastelCondensed)"
                fullwidth
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
                fullwidth
              />
            </template>
          </DocComponent>
        </DocSection>

        <!-- Outline condensed colors -->
        <DocSection title="Outline condensed colors" tag="1.0.0">
          <DocComponent label="Smaller outline button colors">
            <template #demo>
              <BaseFocusLoop class="flex flex-wrap items-end gap-4">
                <OutlineCondensedDemo />
              </BaseFocusLoop>
            </template>
            <template #code>
              <AddonMarkdownRemark
                :source="wrapVueMarkdown(outlineCondensed)"
                fullwidth
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
                fullwidth
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
              <AddonMarkdownRemark :source="wrapVueMarkdown(icons)" fullwidth />
            </template>
          </DocComponent>
        </DocSection>

        <!-- Shadow flat -->
        <DocSection title="Flat shadow" tag="1.0.0">
          <DocComponent label="Button with shadow">
            <template #demo>
              <BaseFocusLoop class="flex flex-wrap items-end gap-4">
                <ShadowFlatDemo />
              </BaseFocusLoop>
            </template>
            <template #code>
              <AddonMarkdownRemark
                :source="wrapVueMarkdown(shadowFlat)"
                fullwidth
              />
            </template>
          </DocComponent>
        </DocSection>

        <!-- Shadow hover -->
        <DocSection title="Hover shadow" tag="1.0.0">
          <DocComponent label="Button with shadow on hover">
            <template #demo>
              <BaseFocusLoop class="flex flex-wrap items-end gap-4">
                <ShadowHoverDemo />
              </BaseFocusLoop>
            </template>
            <template #code>
              <AddonMarkdownRemark
                :source="wrapVueMarkdown(shadowHover)"
                fullwidth
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
                fullwidth
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
              <AddonMarkdownRemark :source="wrapVueMarkdown(group)" fullwidth />
            </template>
          </DocComponent>
        </DocSection>

        <DocComponentMeta name="BaseButton" />
      </template>
      <template #toc>
        <DocToc />
      </template>
    </DocLayout>
  </div>
</template>
