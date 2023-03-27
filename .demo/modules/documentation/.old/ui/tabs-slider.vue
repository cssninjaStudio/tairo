<script setup lang="ts">
import X2FullDemo from '../../../examples/tabs-slider/full-x2.vue'
import x2Full from '../../../examples/tabs-slider/full-x2.vue?raw'
import X2RoundedDemo from '../../../examples/tabs-slider/rounded-x2.vue'
import x2Rounded from '../../../examples/tabs-slider/rounded-x2.vue?raw'
import X3FullDemo from '../../../examples/tabs-slider/full-x3.vue'
import x3Full from '../../../examples/tabs-slider/full-x3.vue?raw'
import X3RoundedDemo from '../../../examples/tabs-slider/rounded-x3.vue'
import x3Rounded from '../../../examples/tabs-slider/rounded-x3.vue?raw'

function wrapVueMarkdown(source: string) {
  return '```vue\n' + source + '\n```'
}
</script>

<template>
  <div>
    <BaseBreadcrumb />

    <DocLayout>
      <template #content>
        <!-- Tabs -->
        <DocSection title="Tabs" tag="1.0.0">
          <DocComponent label="Rounded with two slots example">
            <template #demo>
              <div class="w-full max-w-sm">
                <X2RoundedDemo />
              </div>
            </template>
            <template #code>
              <AddonMarkdownRemark
                :source="wrapVueMarkdown(x2Rounded)"
                fullwidth
              />
            </template>
          </DocComponent>
        </DocSection>

        <!-- Tabs -->
        <DocSection title="Tabs" tag="1.0.0">
          <DocComponent label="Full with two slots example">
            <template #demo>
              <div class="w-full max-w-sm">
                <X2FullDemo />
              </div>
            </template>
            <template #code>
              <AddonMarkdownRemark
                :source="wrapVueMarkdown(x2Full)"
                fullwidth
              />
            </template>
          </DocComponent>
        </DocSection>

        <!-- Tabs -->
        <DocSection title="Tabs" tag="1.0.0">
          <DocComponent label="Rounded with three slots example">
            <template #demo>
              <div class="w-full max-w-sm">
                <X3RoundedDemo />
              </div>
            </template>
            <template #code>
              <AddonMarkdownRemark
                :source="wrapVueMarkdown(x3Rounded)"
                fullwidth
              />
            </template>
          </DocComponent>
        </DocSection>

        <!-- Tabs -->
        <DocSection title="Tabs" tag="1.0.0">
          <DocComponent label="Full with three slots example">
            <template #demo>
              <div class="w-full max-w-sm">
                <X3FullDemo />
              </div>
            </template>
            <template #code>
              <AddonMarkdownRemark
                :source="wrapVueMarkdown(x3Full)"
                fullwidth
              />
            </template>
          </DocComponent>
        </DocSection>

        <!-- Tabs slider props -->
        <DocComponentMeta name="BaseTabSlider" />
      </template>
      <template #toc>
        <DocToc />
      </template>
    </DocLayout>
  </div>
</template>
