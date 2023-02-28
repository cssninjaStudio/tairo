<script setup lang="ts">
import X2FullDemo from '~/documentation/tabs-slider/full-x2.vue'
import x2Full from '~/documentation/tabs-slider/full-x2.vue?raw'
import X2RoundedDemo from '~/documentation/tabs-slider/rounded-x2.vue'
import x2Rounded from '~/documentation/tabs-slider/rounded-x2.vue?raw'
import X3FullDemo from '~/documentation/tabs-slider/full-x3.vue'
import x3Full from '~/documentation/tabs-slider/full-x3.vue?raw'
import X3RoundedDemo from '~/documentation/tabs-slider/rounded-x2.vue'
import x3Rounded from '~/documentation/tabs-slider/rounded-x3.vue?raw'

definePageMeta({
  title: 'Slider Tabs',
  documentation: {
    category: 'Interaction',
    components: ['BaseTabSlider'],
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
    label: 'Tabs Slider',
    hideLabel: false,
    to: '#/',
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
        <!-- Tabs -->
        <DocSection title="Tabs" tag="1.0.0">
          <DocComponent label="Rounded with two slots example">
            <template #demo>
              <div class="w-full max-w-sm">
                <X2RoundedDemo />
              </div>
            </template>
            <template #code>
              <DocMarkdown
                :source="wrapVueMarkdown(x2Rounded)"
                class="prose max-w-full"
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
              <DocMarkdown
                :source="wrapVueMarkdown(x2Full)"
                class="prose max-w-full"
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
              <DocMarkdown
                :source="wrapVueMarkdown(x3Rounded)"
                class="prose max-w-full"
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
              <DocMarkdown
                :source="wrapVueMarkdown(x3Full)"
                class="prose max-w-full"
              />
            </template>
          </DocComponent>
        </DocSection>

        <!-- Tabs slider props -->
        <DocComponentMeta name="BaseTabSlider" />
      </template>
      <!-- Toc -->
      <template #toc>
        <DocToc />
      </template>
    </DocLayout>
  </div>
</template>
