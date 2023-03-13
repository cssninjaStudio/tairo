<script setup lang="ts">
import CarbonDemo from '../../examples/icons/carbon.vue'
import carbon from '../../examples/icons/carbon.vue?raw'
import CilDemo from '../../examples/icons/cil.vue'
import cil from '../../examples/icons/cil.vue?raw'
import FaDemo from '../../examples/icons/fa.vue'
import fa from '../../examples/icons/fa.vue?raw'
import FabDemo from '../../examples/icons/fab.vue'
import fab from '../../examples/icons/fab.vue?raw'
import IconoirDemo from '../../examples/icons/iconoir.vue'
import iconoir from '../../examples/icons/iconoir.vue?raw'
import IonDemo from '../../examples/icons/ion.vue'
import ion from '../../examples/icons/ion.vue?raw'
import LogosDemo from '../../examples/icons/logos.vue'
import logos from '../../examples/icons/logos.vue?raw'
import LucideDemo from '../../examples/icons/lucide.vue'
import lucide from '../../examples/icons/lucide.vue?raw'
import MaterialDemo from '../../examples/icons/material.vue'
import material from '../../examples/icons/material.vue?raw'
import PhosphorDemo from '../../examples/icons/phosphor.vue'
import phosphor from '../../examples/icons/phosphor.vue?raw'

function wrapVueMarkdown(source: string) {
  return '```vue\n' + source + '\n```'
}
</script>

<template>
  <div>
    <BaseBreadcrumb />

    <DocLayout>
      <template #content>
        <!-- Phosphor -->
        <DocSection title="Phosphor icons" tag="1.0.0">
          <DocComponent label="Phosphor icons example">
            <template #demo>
              <div class="flex items-end gap-4">
                <PhosphorDemo />
              </div>
            </template>
            <template #code>
              <AddonMarkdownRemark
                :source="wrapVueMarkdown(phosphor)"
                fullwidth
              />
            </template>
          </DocComponent>
        </DocSection>

        <!-- Lucide -->
        <DocSection title="Lucide icons" tag="1.0.0">
          <DocComponent label="Lucide icons example">
            <template #demo>
              <div class="flex items-end gap-4">
                <LucideDemo />
              </div>
            </template>
            <template #code>
              <AddonMarkdownRemark
                :source="wrapVueMarkdown(lucide)"
                fullwidth
              />
            </template>
          </DocComponent>
        </DocSection>

        <!-- Carbon -->
        <DocSection title="Carbon icons" tag="1.0.0">
          <DocComponent label="Carbon icons example">
            <template #demo>
              <div class="flex items-end gap-4">
                <CarbonDemo />
              </div>
            </template>
            <template #code>
              <AddonMarkdownRemark
                :source="wrapVueMarkdown(carbon)"
                fullwidth
              />
            </template>
          </DocComponent>
        </DocSection>

        <!-- Ion -->
        <DocSection title="Ion icons" tag="1.0.0">
          <DocComponent label="Ion icons example">
            <template #demo>
              <div class="flex items-end gap-4">
                <IonDemo />
              </div>
            </template>
            <template #code>
              <AddonMarkdownRemark :source="wrapVueMarkdown(ion)" fullwidth />
            </template>
          </DocComponent>
        </DocSection>

        <!-- Iconoir -->
        <DocSection title="Iconoir icons" tag="1.0.0">
          <DocComponent label="Iconoir icons example">
            <template #demo>
              <div class="flex items-end gap-4">
                <IconoirDemo />
              </div>
            </template>
            <template #code>
              <AddonMarkdownRemark
                :source="wrapVueMarkdown(iconoir)"
                fullwidth
              />
            </template>
          </DocComponent>
        </DocSection>

        <!-- Core UI -->
        <DocSection title="Core UI icons" tag="1.0.0">
          <DocComponent label="Core UI icons example">
            <template #demo>
              <div class="flex items-end gap-4">
                <CilDemo />
              </div>
            </template>
            <template #code>
              <AddonMarkdownRemark :source="wrapVueMarkdown(cil)" fullwidth />
            </template>
          </DocComponent>
        </DocSection>

        <!-- Font Awesome solid -->
        <DocSection title="Font Awesome" tag="1.0.0">
          <DocComponent label="Font Awesome icons example">
            <template #demo>
              <div class="flex items-end gap-4">
                <FaDemo />
              </div>
            </template>
            <template #code>
              <AddonMarkdownRemark :source="wrapVueMarkdown(fa)" fullwidth />
            </template>
          </DocComponent>
        </DocSection>

        <!-- Font Awesome brands -->
        <DocSection title="Awesome brands" tag="1.0.0">
          <DocComponent label="Font Awesome brands example">
            <template #demo>
              <div class="flex items-end gap-4">
                <FabDemo />
              </div>
            </template>
            <template #code>
              <AddonMarkdownRemark :source="wrapVueMarkdown(fab)" fullwidth />
            </template>
          </DocComponent>
        </DocSection>

        <!-- Google Material -->
        <DocSection title="Material icons" tag="1.0.0">
          <DocComponent label="Material icons example">
            <template #demo>
              <div class="flex items-end gap-4">
                <MaterialDemo />
              </div>
            </template>
            <template #code>
              <AddonMarkdownRemark
                :source="wrapVueMarkdown(material)"
                fullwidth
              />
            </template>
          </DocComponent>
        </DocSection>

        <!-- Logos -->
        <DocSection title="Logo icons" tag="1.0.0">
          <DocComponent label="Logo icons example">
            <template #demo>
              <div class="flex items-end gap-4">
                <LogosDemo />
              </div>
            </template>
            <template #code>
              <AddonMarkdownRemark :source="wrapVueMarkdown(logos)" fullwidth />
            </template>
          </DocComponent>
        </DocSection>
        <DocComponentMeta name="Icon" />
      </template>
      <template #toc>
        <DocToc />
      </template>
    </DocLayout>
  </div>
</template>
