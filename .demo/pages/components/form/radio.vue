<script setup lang="ts">
import BaseDemo from '~/documentation/form/radio/base.vue'
import base from '~/documentation/form/radio/base.vue?raw'
import ColorsDemo from '~/documentation/form/radio/colors.vue'
import colors from '~/documentation/form/radio/colors.vue?raw'

definePageMeta({
  title: 'Radios',
  documentation: {
    category: 'Forms',
    components: ['BaseRadio'],
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
    label: 'Radio',
    hideLabel: false,
    to: '#/',
  },
]

const model = `
const radio = ref('option_1')
`
</script>

<template>
  <div>
    <!-- BreadCrumb -->
    <BaseBreadcrumb />

    <!-- Documentation Layout -->
    <DocLayout>
      <!-- content -->
      <template #content>
        <!-- Radio straight -->
        <DocSection title="Radio buttons" tag="1.0.0">
          <DocComponent label="Radio buttons example">
            <template #demo>
              <div class="flex items-end gap-6">
                <div class="flex w-full max-w-sm items-end gap-6">
                  <BaseDemo />
                </div>

                <!-- State box -->
                <DocState label="V-Model" :state="model" height="80px" />
              </div>
            </template>
            <template #code>
              <DocMarkdown
                :source="wrapVueMarkdown(base)"
                class="prose max-w-full"
              />
            </template>
          </DocComponent>
        </DocSection>

        <!-- Radio colors -->
        <DocSection title="Radio colors" tag="1.0.0">
          <DocComponent label="Radio colors examples">
            <template #demo>
              <div class="flex items-end gap-6">
                <div class="flex w-full max-w-sm flex-wrap items-end gap-6">
                  <ColorsDemo />
                </div>

                <!-- State box -->
                <DocState label="V-Model" :state="model" height="80px" />
              </div>
            </template>
            <template #code>
              <DocMarkdown
                :source="wrapVueMarkdown(colors)"
                class="prose max-w-full"
              />
            </template>
          </DocComponent>
        </DocSection>

        <!-- Radio properties -->
        <DocComponentMeta name="BaseRadio" />
      </template>
      <!-- Toc -->
      <template #toc>
        <DocToc />
      </template>
    </DocLayout>
  </div>
</template>
