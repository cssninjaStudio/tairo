<script setup lang="ts">
import FooterAlignDemo from '#examples/modal/footer-align.vue'
import footerAlign from '#examples/modal/footer-align.vue?raw'
import LargeTierDemo from '#examples/modal/large-tier.vue'
import largeTier from '#examples/modal/large-tier.vue?raw'
import MediumTierDemo from '#examples/modal/medium-tier.vue'
import mediumTier from '#examples/modal/medium-tier.vue?raw'
import SmallTierDemo from '#examples/modal/small-tier.vue'
import smallTier from '#examples/modal/small-tier.vue?raw'

function wrapVueMarkdown(source: string) {
  return '```vue\n' + source + '\n```'
}
</script>

<template>
  <div>
    <BaseBreadcrumb />

    <DocLayout>
      <template #content>
        <!-- Modal small -->
        <DocSection title="Small tier" tag="1.0.0">
          <DocComponent label="Small modals example">
            <template #demo>
              <SmallTierDemo />
            </template>
            <template #code>
              <AddonMarkdownRemark
                :source="wrapVueMarkdown(smallTier)"
                fullwidth
              />
            </template>
          </DocComponent>
        </DocSection>

        <!-- Modal medium -->
        <DocSection title="Medium tier" tag="1.0.0">
          <DocComponent label="Medium modals example">
            <template #demo>
              <MediumTierDemo />
            </template>
            <template #code>
              <AddonMarkdownRemark
                :source="wrapVueMarkdown(mediumTier)"
                fullwidth
              />
            </template>
          </DocComponent>
        </DocSection>

        <!-- Modal large -->
        <DocSection title="Large tier" tag="1.0.0">
          <DocComponent label="Large modals example">
            <template #demo>
              <LargeTierDemo />
            </template>
            <template #code>
              <AddonMarkdownRemark
                :source="wrapVueMarkdown(largeTier)"
                fullwidth
              />
            </template>
          </DocComponent>
        </DocSection>

        <!-- Modal footer -->
        <DocSection title="Modal footer" tag="1.0.0">
          <DocComponent label="Footer options example">
            <template #demo>
              <FooterAlignDemo />
            </template>
            <template #code>
              <AddonMarkdownRemark
                :source="wrapVueMarkdown(footerAlign)"
                fullwidth
              />
            </template>
          </DocComponent>
        </DocSection>

        <!-- Modal properties -->
        <DocComponentMeta name="TairoModal" />
      </template>
      <template #toc>
        <DocToc />
      </template>
    </DocLayout>
  </div>
</template>
