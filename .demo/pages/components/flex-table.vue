<script setup lang="ts">
import CurvedDemo from '~/documentation/flex-table/curved.vue'
import curved from '~/documentation/flex-table/curved.vue?raw'
import RoundedDemo from '~/documentation/flex-table/rounded.vue'
import rounded from '~/documentation/flex-table/rounded.vue?raw'
import StraightDemo from '~/documentation/flex-table/straight.vue'
import straight from '~/documentation/flex-table/straight.vue?raw'

definePageMeta({
  title: 'Flex Tables',
  documentation: {
    category: 'Display',
    components: [
      'BaseFlexTable',
      'BaseFlexTableHeading',
      'BaseFlexTableRow',
      'BaseFlexTableCell',
    ],
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
    label: 'Flex Table',
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
        <!-- Flex table straight -->
        <DocSection title="Straight shape" tag="1.0.0">
          <DocComponent label="Straight table shape example">
            <template #demo>
              <div class="w-full">
                <StraightDemo />
              </div>
            </template>
            <template #code>
              <DocMarkdown
                :source="wrapVueMarkdown(straight)"
                class="prose max-w-full"
              />
            </template>
          </DocComponent>
        </DocSection>

        <!-- Flex table rounded -->
        <DocSection title="Rounded shape" tag="1.0.0">
          <DocComponent label="Rounded table shape example">
            <template #demo>
              <div class="w-full">
                <RoundedDemo />
              </div>
            </template>
            <template #code>
              <DocMarkdown
                :source="wrapVueMarkdown(rounded)"
                class="prose max-w-full"
              />
            </template>
          </DocComponent>
        </DocSection>

        <!-- Flex table curved -->
        <DocSection title="Curved shape" tag="1.0.0">
          <DocComponent label="Curved table shape example">
            <template #demo>
              <div class="w-full">
                <CurvedDemo />
              </div>
            </template>
            <template #code>
              <DocMarkdown
                :source="wrapVueMarkdown(curved)"
                class="prose max-w-full"
              />
            </template>
          </DocComponent>
        </DocSection>

        <!-- Flex table props -->
        <DocComponentMeta name="BaseFlexTable" />
        <DocComponentMeta name="BaseFlexTableHeading" />
        <DocComponentMeta name="BaseFlexTableRow" />
        <DocComponentMeta name="BaseFlexTableCell" />
      </template>
      <!-- Toc -->
      <template #toc>
        <DocToc />
      </template>
    </DocLayout>
  </div>
</template>
