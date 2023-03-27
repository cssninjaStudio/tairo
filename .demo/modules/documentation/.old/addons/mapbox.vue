<script setup lang="ts">
import BaseDemo from '../../../examples/map/base.vue'
import base from '../../../examples/map/base.vue?raw'

function wrapVueMarkdown(source: string) {
  return '```vue\n' + source + '\n```'
}
</script>

<template>
  <div>
    <BaseBreadcrumb />

    <DocLayout>
      <template #content>
        <!-- Map example -->
        <DocSection title="Mapbox panel" tag="1.0.0">
          <DocComponent label="Map panel image preview">
            <template #demo>
              <div class="w-full flex items-end gap-6">
                <BaseDemo />
              </div>
            </template>
            <template #code>
              <AddonMarkdownRemark :source="wrapVueMarkdown(base)" fullwidth />
            </template>
          </DocComponent>
        </DocSection>

        <!-- Chart properties -->
        <DocComponentMeta name="AddonMapboxPanel" />
      </template>
      <template #toc>
        <DocToc />
      </template>
    </DocLayout>
  </div>
</template>
