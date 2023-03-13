<script setup lang="ts">
import CurvedDemo from '../../../examples/flex-table/curved.vue'
import curved from '../../../examples/flex-table/curved.vue?raw'
import RoundedDemo from '../../../examples/flex-table/rounded.vue'
import rounded from '../../../examples/flex-table/rounded.vue?raw'
import StraightDemo from '../../../examples/flex-table/straight.vue'
import straight from '../../../examples/flex-table/straight.vue?raw'

function wrapVueMarkdown(source: string) {
  return '```vue\n' + source + '\n```'
}
</script>

<template>
  <div>
    <BaseBreadcrumb />

    <DocLayout>
      <template #content>
        <!-- Flex table straight -->
        <DocSection title="Straight shape" tag="1.0.0">
          <DocComponent label="Straight table shape example">
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

        <!-- Flex table rounded -->
        <DocSection title="Rounded shape" tag="1.0.0">
          <DocComponent label="Rounded table shape example">
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

        <!-- Flex table curved -->
        <DocSection title="Curved shape" tag="1.0.0">
          <DocComponent label="Curved table shape example">
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

        <!-- Flex table props -->
        <DocComponentMeta name="TairoFlexTable" />
        <DocComponentMeta name="TairoFlexTableHeading" />
        <DocComponentMeta name="TairoFlexTableRow" />
        <DocComponentMeta name="TairoFlexTableCell" />
      </template>
      <template #toc>
        <DocToc />
      </template>
    </DocLayout>
  </div>
</template>
