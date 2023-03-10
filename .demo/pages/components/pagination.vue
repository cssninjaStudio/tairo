<script setup lang="ts">
import CurvedDemo from '~/documentation/pagination/curved.vue'
import curved from '~/documentation/pagination/curved.vue?raw'
import FullDemo from '~/documentation/pagination/full.vue'
import full from '~/documentation/pagination/full.vue?raw'
import RoundedDemo from '~/documentation/pagination/rounded.vue'
import rounded from '~/documentation/pagination/rounded.vue?raw'
import StraightDemo from '~/documentation/pagination/straight.vue'
import straight from '~/documentation/pagination/straight.vue?raw'

definePageMeta({
  title: 'Pagination',
  documentation: {
    category: 'NUI Elements',
    components: ['BasePagination'],
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
        <!-- Pagination straight -->
        <DocSection title="Straight shape" tag="1.0.0">
          <DocComponent label="Straight pagination example">
            <template #demo>
              <StraightDemo />
            </template>
            <template #code>
              <AddonMarkdownRemark
                :source="wrapVueMarkdown(straight)"
                class="prose max-w-full"
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
                class="prose max-w-full"
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
                class="prose max-w-full"
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
              <AddonMarkdownRemark
                :source="wrapVueMarkdown(full)"
                class="prose max-w-full"
              />
            </template>
          </DocComponent>
        </DocSection>

        <!-- Pagination props -->
        <DocComponentMeta name="BasePagination" />
      </template>
      <!-- Toc -->
      <template #toc>
        <DocToc />
      </template>
    </DocLayout>
  </div>
</template>
