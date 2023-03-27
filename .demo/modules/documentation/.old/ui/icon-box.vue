<script setup lang="ts">
import CircleSizesDemo from '#examples/iconbox/circle-sizes.vue'
import circleSizes from '#examples/iconbox/circle-sizes.vue?raw'
import CurvedSizesDemo from '#examples/iconbox/curved-sizes.vue'
import curvedSizes from '#examples/iconbox/curved-sizes.vue?raw'
import ElevationDemo from '#examples/iconbox/elevation.vue'
import elevation from '#examples/iconbox/elevation.vue?raw'
import MasksDemo from '#examples/iconbox/masks.vue'
import masks from '#examples/iconbox/masks.vue?raw'
import OutlineBaseDemo from '#examples/iconbox/outline-base.vue'
import outlineBase from '#examples/iconbox/outline-base.vue?raw'
import OutlineDemo from '#examples/iconbox/outline.vue'
import outline from '#examples/iconbox/outline.vue?raw'
import PastelBaseDemo from '#examples/iconbox/pastel-base.vue'
import pastelBase from '#examples/iconbox/pastel-base.vue?raw'
import PastelDemo from '#examples/iconbox/pastel.vue'
import pastel from '#examples/iconbox/pastel.vue?raw'
import RoundedSizesDemo from '#examples/iconbox/rounded-sizes.vue'
import roundedSizes from '#examples/iconbox/rounded-sizes.vue?raw'
import SolidBaseDemo from '#examples/iconbox/solid-base.vue'
import solidBase from '#examples/iconbox/solid-base.vue?raw'
import SolidDemo from '#examples/iconbox/solid.vue'
import solid from '#examples/iconbox/solid.vue?raw'

function wrapVueMarkdown(source: string) {
  return '```vue\n' + source + '\n```'
}
</script>

<template>
  <div>
    <BaseBreadcrumb />

    <DocLayout>
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
              <AddonMarkdownRemark
                :source="wrapVueMarkdown(roundedSizes)"
                fullwidth
              />
            </template>
          </DocComponent>
        </DocSection>

        <!-- Icon box curved -->
        <DocSection title="Curved box" tag="1.0.0">
          <DocComponent label="Curved boxes sizes">
            <template #demo>
              <div class="flex flex-wrap items-end gap-4">
                <CurvedSizesDemo />
              </div>
            </template>
            <template #code>
              <AddonMarkdownRemark
                :source="wrapVueMarkdown(curvedSizes)"
                fullwidth
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
              <AddonMarkdownRemark
                :source="wrapVueMarkdown(circleSizes)"
                fullwidth
              />
            </template>
          </DocComponent>
        </DocSection>

        <!-- Icon box solid -->
        <DocSection title="Solid colors" tag="1.0.0">
          <DocComponent label="Solid colors example">
            <template #demo>
              <div class="flex flex-wrap items-end gap-2">
                <SolidBaseDemo />
              </div>
            </template>
            <template #code>
              <AddonMarkdownRemark
                :source="wrapVueMarkdown(solidBase)"
                fullwidth
              />
            </template>
          </DocComponent>
        </DocSection>

        <!-- Icon box solid custom -->
        <DocSection title="Custom solid colors" tag="1.0.0">
          <DocComponent label="Solid colors variations">
            <template #demo>
              <div class="flex flex-wrap items-end gap-2">
                <SolidDemo />
              </div>
            </template>
            <template #code>
              <AddonMarkdownRemark :source="wrapVueMarkdown(solid)" fullwidth />
            </template>
          </DocComponent>
        </DocSection>

        <!-- Icon box pastel -->
        <DocSection title="Pastel colors" tag="1.0.0">
          <DocComponent label="Pastel colors example">
            <template #demo>
              <div class="flex flex-wrap items-end gap-2">
                <PastelBaseDemo />
              </div>
            </template>
            <template #code>
              <AddonMarkdownRemark
                :source="wrapVueMarkdown(pastelBase)"
                fullwidth
              />
            </template>
          </DocComponent>
        </DocSection>

        <!-- Icon box pastel custom -->
        <DocSection title="Custom pastel colors" tag="1.0.0">
          <DocComponent label="Pastel colors variations">
            <template #demo>
              <div class="flex flex-wrap items-end gap-2">
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

        <!-- Icon box outline -->
        <DocSection title="Outline colors" tag="1.0.0">
          <DocComponent label="Outline colors example">
            <template #demo>
              <div class="flex flex-wrap items-end gap-2">
                <OutlineBaseDemo />
              </div>
            </template>
            <template #code>
              <AddonMarkdownRemark
                :source="wrapVueMarkdown(outlineBase)"
                fullwidth
              />
            </template>
          </DocComponent>
        </DocSection>

        <!-- Icon box outline custon -->
        <DocSection title="Custom outline colors" tag="1.0.0">
          <DocComponent label="Outline colors variations">
            <template #demo>
              <div class="flex flex-wrap items-end gap-2">
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

        <!-- SVG Masks -->
        <DocSection title="Svg masks" tag="1.0.0">
          <DocComponent label="Svg masks presets">
            <template #demo>
              <div class="flex flex-wrap items-end gap-2">
                <MasksDemo />
              </div>
            </template>
            <template #code>
              <AddonMarkdownRemark :source="wrapVueMarkdown(masks)" fullwidth />
            </template>
          </DocComponent>
        </DocSection>

        <!-- Icon box elevation -->
        <DocSection title="Custom shadow" tag="1.0.0">
          <DocComponent label="Manual elevation example">
            <template #demo>
              <div class="flex flex-wrap items-end gap-2">
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

        <!-- Icon box props -->
        <DocComponentMeta name="BaseIconBox" />
      </template>
      <template #toc>
        <DocToc />
      </template>
    </DocLayout>
  </div>
</template>
