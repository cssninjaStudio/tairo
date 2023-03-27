<script setup lang="ts">
import BaseDemo from '#examples/input-file/base.vue'
import base from '#examples/input-file/base.vue?raw'
import CurvedDemo from '#examples/input-file/curved.vue'
import curved from '#examples/input-file/curved.vue?raw'
import FullDemo from '#examples/input-file/full.vue'
import full from '#examples/input-file/full.vue?raw'
import RoundedDemo from '#examples/input-file/rounded.vue'
import rounded from '#examples/input-file/rounded.vue?raw'

function wrapVueMarkdown(source: string) {
  return '```vue\n' + source + '\n```'
}
</script>

<template>
  <div>
    <BaseBreadcrumb />

    <DocLayout>
      <template #content>
        <!-- Straight input -->
        <DocSection title="Straight input" tag="1.0.0">
          <DocComponent label="Straight input example">
            <template #demo>
              <div class="w-full max-w-xs">
                <BaseDemo />
              </div>
            </template>
            <template #code>
              <AddonMarkdownRemark :source="wrapVueMarkdown(base)" fullwidth />
            </template>
          </DocComponent>
        </DocSection>

        <!-- Rounded input -->
        <DocSection title="Rounded input" tag="1.0.0">
          <DocComponent label="Rounded input example">
            <template #demo>
              <div class="w-full max-w-xs">
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

        <!-- Curved input -->
        <DocSection title="Curved input" tag="1.0.0">
          <DocComponent label="Curved input example">
            <template #demo>
              <div class="w-full max-w-xs">
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

        <!-- Full input -->
        <DocSection title="Full input" tag="1.0.0">
          <DocComponent label="Full input example">
            <template #demo>
              <div class="w-full max-w-xs">
                <FullDemo />
              </div>
            </template>
            <template #code>
              <AddonMarkdownRemark :source="wrapVueMarkdown(full)" fullwidth />
            </template>
          </DocComponent>
        </DocSection>

        <DocComponentMeta name="BaseInputFile" />
      </template>
      <template #toc>
        <DocToc />
      </template>
    </DocLayout>
  </div>
</template>
