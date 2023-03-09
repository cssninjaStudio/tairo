<script setup lang="ts">
import ArrowDemo from '~/documentation/breadcrumb/arrow.vue'
import arrow from '~/documentation/breadcrumb/arrow.vue?raw'
import ChevronDemo from '~/documentation/breadcrumb/chevron.vue'
import chevron from '~/documentation/breadcrumb/chevron.vue?raw'
import DotDemo from '~/documentation/breadcrumb/dot.vue'
import dot from '~/documentation/breadcrumb/dot.vue?raw'
import SlashDemo from '~/documentation/breadcrumb/slash.vue'
import slash from '~/documentation/breadcrumb/slash.vue?raw'

definePageMeta({
  title: 'Breadcrumbs',
  documentation: {
    category: 'NUI Elements',
    components: ['BaseBreadcrumb'],
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
    label: 'Breadcrumb',
    hideLabel: false,
    to: '#',
  },
]

const demoBreadcrumbOne = [
  {
    label: 'Home',
    hideLabel: false,
    icon: 'lucide:home',
    to: '#',
  },
  {
    label: 'Products',
    hideLabel: false,
    to: '#',
  },
  {
    label: 'Laptops',
    hideLabel: false,
    to: '#',
  },
]

const demoBreadcrumbTwo = [
  {
    label: 'Home',
    hideLabel: false,
    icon: 'lucide:home',
    to: '#',
  },
  {
    label: 'Products',
    hideLabel: false,
    icon: 'lucide:layout-grid',
    to: '#',
  },
  {
    label: 'Laptops',
    hideLabel: false,
    icon: 'lucide:laptop',
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
        <!-- Breadcrumb dot -->
        <DocSection title="Dot separator" tag="1.0.0">
          <DocComponent label="Breadcrumb dot separator">
            <template #demo>
              <div class="flex flex-col gap-4">
                <DotDemo />
              </div>
            </template>
            <template #code>
              <DocMarkdown
                :source="wrapVueMarkdown(dot)"
                class="prose max-w-full"
              />
            </template>
          </DocComponent>
        </DocSection>

        <!-- Breadcrumb slash -->
        <DocSection title="Slash separator" tag="1.0.0">
          <DocComponent label="Breadcrumb slash separator">
            <template #demo>
              <div class="flex flex-col gap-4">
                <SlashDemo />
              </div>
            </template>
            <template #code>
              <DocMarkdown
                :source="wrapVueMarkdown(slash)"
                class="prose max-w-full"
              />
            </template>
          </DocComponent>
        </DocSection>

        <!-- Breadcrumb chevron -->
        <DocSection
          id="breadcrumb-chevron"
          title="Chevron separator"
          tag="1.0.0"
        >
          <DocComponent label="Breadcrumb chevron separator">
            <template #demo>
              <div class="flex flex-col gap-4">
                <ChevronDemo />
              </div>
            </template>
            <template #code>
              <DocMarkdown
                :source="wrapVueMarkdown(chevron)"
                class="prose max-w-full"
              />
            </template>
          </DocComponent>
        </DocSection>

        <!-- Breadcrumb arrow -->
        <DocSection title="Arrow separator" tag="1.0.0">
          <DocComponent label="Breadcrumb arrow separator">
            <template #demo>
              <div class="flex flex-col gap-4">
                <ArrowDemo />
              </div>
            </template>
            <template #code>
              <DocMarkdown
                :source="wrapVueMarkdown(arrow)"
                class="prose max-w-full"
              />
            </template>
          </DocComponent>
        </DocSection>

        <DocComponentMeta name="BaseBreadcrumb" />
      </template>
      <!-- Toc -->
      <template #toc>
        <DocToc />
      </template>
    </DocLayout>
  </div>
</template>
