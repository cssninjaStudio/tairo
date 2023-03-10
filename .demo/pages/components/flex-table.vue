<script setup lang="ts">
import CurvedDemo from '~/documentation/flex-table/curved.vue'
import curved from '~/documentation/flex-table/curved.vue?raw'
import RoundedDemo from '~/documentation/flex-table/rounded.vue'
import rounded from '~/documentation/flex-table/rounded.vue?raw'
import StraightDemo from '~/documentation/flex-table/straight.vue'
import straight from '~/documentation/flex-table/straight.vue?raw'

definePageMeta({
  title: 'Flex Tables',
  documentation: {
    category: 'Tairo Elements',
    components: [
      'TairoFlexTable',
      'TairoFlexTableHeading',
      'TairoFlexTableRow',
      'TairoFlexTableCell',
    ],
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
                class="prose max-w-full"
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
                class="prose max-w-full"
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
                class="prose max-w-full"
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
      <!-- Toc -->
      <template #toc>
        <DocToc />
      </template>
    </DocLayout>
  </div>
</template>
