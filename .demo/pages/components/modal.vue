<script setup lang="ts">
import FooterAlignDemo from '~/documentation/modal/footer-align.vue'
import footerAlign from '~/documentation/modal/footer-align.vue?raw'
import LargeTierDemo from '~/documentation/modal/large-tier.vue'
import largeTier from '~/documentation/modal/large-tier.vue?raw'
import MediumTierDemo from '~/documentation/modal/medium-tier.vue'
import mediumTier from '~/documentation/modal/medium-tier.vue?raw'
import SmallTierDemo from '~/documentation/modal/small-tier.vue'
import smallTier from '~/documentation/modal/small-tier.vue?raw'

definePageMeta({
  title: 'Modals',
  documentation: {
    category: 'Tairo Elements',
    components: ['TairoModal'],
  },
})

function wrapVueMarkdown(source: string) {
  return '```vue\n' + source + '\n```'
}

const demoBreadcrumb = [
  {
    label: 'Home',
    hideLabel: true,
    icon: 'lucide:home',
    to: '/',
  },
  {
    label: 'Components Hub',
    hideLabel: false,
    to: '/components',
  },
  {
    label: 'Modal',
    hideLabel: false,
    to: '#',
  },
]
</script>

<template>
  <div>
    <!-- BreadCrumb -->
    <BaseBreadcrumb :items="demoBreadcrumb" />

    <!-- Documentation Layout -->
    <DocLayout>
      <!-- content -->
      <template #content>
        <!-- Modal small -->
        <DocSection title="Small tier" tag="1.0.0">
          <DocComponent label="Small modals example">
            <template #demo>
              <SmallTierDemo />
            </template>
            <template #code>
              <DocMarkdown
                :source="wrapVueMarkdown(smallTier)"
                class="prose max-w-full"
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
              <DocMarkdown
                :source="wrapVueMarkdown(mediumTier)"
                class="prose max-w-full"
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
              <DocMarkdown
                :source="wrapVueMarkdown(largeTier)"
                class="prose max-w-full"
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
              <DocMarkdown
                :source="wrapVueMarkdown(footerAlign)"
                class="prose max-w-full"
              />
            </template>
          </DocComponent>
        </DocSection>

        <!-- Modal properties -->
        <DocComponentMeta name="TairoModal" />
      </template>
      <!-- Toc -->
      <template #toc>
        <DocToc />
      </template>
    </DocLayout>
  </div>
</template>
