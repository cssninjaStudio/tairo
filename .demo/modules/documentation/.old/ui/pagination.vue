<script setup lang="ts">
import CurvedDemo from '../../../examples/pagination/curved.vue'
import curved from '../../../examples/pagination/curved.vue?raw'
import FullDemo from '../../../examples/pagination/full.vue'
import full from '../../../examples/pagination/full.vue?raw'
import RoundedDemo from '../../../examples/pagination/rounded.vue'
import rounded from '../../../examples/pagination/rounded.vue?raw'
import StraightDemo from '../../../examples/pagination/straight.vue'
import straight from '../../../examples/pagination/straight.vue?raw'

function wrapVueMarkdown(source: string) {
  return '```vue\n' + source + '\n```'
}
</script>

<template>
  <div>
    <BaseBreadcrumb />

    <DocLayout>
      <template #content>
        <!-- Pagination straight -->
        <DocSection title="Straight shape" tag="1.0.0">
          <DocComponent label="Straight pagination example">
            <template #demo>
              <StraightDemo />
            </template>
            <template #code>
              <AddonMarkdownRemark
                :source="wrapVueMarkdown(straight)"
                fullwidth
              />
            </template>
          </DocComponent>
        </DocSection>

        <!-- Pagination rounded -->
        <DocSection title="Rounded shape" tag="1.0.0">
          <DocComponent label="Rounded pagination example">
            <template #demo>
              <RoundedDemo />
            </template>
            <template #code>
              <AddonMarkdownRemark
                :source="wrapVueMarkdown(rounded)"
                fullwidth
              />
            </template>
          </DocComponent>
        </DocSection>

        <!-- Pagination curved -->
        <DocSection title="Curved shape" tag="1.0.0">
          <DocComponent label="Curved pagination example">
            <template #demo>
              <CurvedDemo />
            </template>
            <template #code>
              <AddonMarkdownRemark
                :source="wrapVueMarkdown(curved)"
                fullwidth
              />
            </template>
          </DocComponent>
        </DocSection>

        <!-- Pagination full -->
        <DocSection title="Full shape" tag="1.0.0">
          <DocComponent label="Full pagination example">
            <template #demo>
              <FullDemo />
            </template>
            <template #code>
              <AddonMarkdownRemark :source="wrapVueMarkdown(full)" fullwidth />
            </template>
          </DocComponent>
        </DocSection>

        <!-- Pagination props -->
        <DocComponentMeta name="BasePagination" />
      </template>
      <template #toc>
        <DocToc />
      </template>
    </DocLayout>
  </div>
</template>
