<script setup lang="ts">
import ButtonCloseDemo from '../../../examples/button-close/base.vue'
import buttonClose from '../../../examples/button-close/base.vue?raw'
import ButtonCloseMutedDemo from '../../../examples/button-close/muted.vue'
import buttonCloseMuted from '../../../examples/button-close/muted.vue?raw'
import ButtonClosePrimaryDemo from '../../../examples/button-close/primary.vue'
import buttonClosePrimary from '../../../examples/button-close/primary.vue?raw'

function wrapVueMarkdown(source: string) {
  return '```vue\n' + source + '\n```'
}
</script>

<template>
  <div>
    <BaseBreadcrumb />

    <DocLayout>
      <template #content>
        <!-- Close button -->
        <DocSection title="Close button" tag="1.0.0">
          <DocComponent label="Close button element">
            <template #demo>
              <BaseFocusLoop class="flex flex-wrap items-end gap-2">
                <ButtonCloseDemo />
              </BaseFocusLoop>
            </template>
            <template #code>
              <AddonMarkdownRemark
                :source="wrapVueMarkdown(buttonClose)"
                fullwidth
              />
            </template>
          </DocComponent>
        </DocSection>

        <!-- Close button muted -->
        <DocSection title="Muted button" tag="1.0.0">
          <DocComponent label="Muted color variation">
            <template #demo>
              <BaseFocusLoop class="flex flex-wrap items-end gap-2">
                <ButtonCloseMutedDemo />
              </BaseFocusLoop>
            </template>
            <template #code>
              <AddonMarkdownRemark
                :source="wrapVueMarkdown(buttonCloseMuted)"
                fullwidth
              />
            </template>
          </DocComponent>
        </DocSection>

        <!-- Close button primary -->
        <DocSection title="Primary button" tag="1.0.0">
          <DocComponent label="Primary color variation">
            <template #demo>
              <BaseFocusLoop class="flex flex-wrap items-end gap-2">
                <ButtonClosePrimaryDemo />
              </BaseFocusLoop>
            </template>
            <template #code>
              <AddonMarkdownRemark
                :source="wrapVueMarkdown(buttonClosePrimary)"
                fullwidth
              />
            </template>
          </DocComponent>
        </DocSection>

        <!-- properties -->
        <DocComponentMeta name="BaseButtonClose" />
      </template>
      <template #toc>
        <DocToc />
      </template>
    </DocLayout>
  </div>
</template>
