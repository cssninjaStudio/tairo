<script setup lang="ts">
import LargeDemo from '~/documentation/avatar-group/large.vue'
import large from '~/documentation/avatar-group/large.vue?raw'
import MediumDemo from '~/documentation/avatar-group/medium.vue'
import medium from '~/documentation/avatar-group/medium.vue?raw'
import SmallDemo from '~/documentation/avatar-group/small.vue'
import small from '~/documentation/avatar-group/small.vue?raw'
import TinyDemo from '~/documentation/avatar-group/tiny.vue'
import tiny from '~/documentation/avatar-group/tiny.vue?raw'

definePageMeta({
  title: 'Avatar group',
  documentation: {
    category: 'NUI Elements',
    components: ['BaseAvatarGroup'],
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
    label: 'Avatar group',
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
        <!-- Avatar group -->
        <DocSection title="Avatar group" tag="1.0.0">
          <DocComponent label="Xs avatar group">
            <template #demo>
              <div class="flex flex-wrap items-end gap-4">
                <TinyDemo />
              </div>
            </template>
            <template #code>
              <DocMarkdown
                :source="wrapVueMarkdown(tiny)"
                class="prose max-w-full"
              />
            </template>
          </DocComponent>
        </DocSection>

        <!-- Avatar group -->
        <DocSection title="Avatar group" tag="1.0.0">
          <DocComponent label="Sm avatar group">
            <template #demo>
              <div class="flex flex-wrap items-end gap-4">
                <SmallDemo />
              </div>
            </template>
            <template #code>
              <DocMarkdown
                :source="wrapVueMarkdown(small)"
                class="prose max-w-full"
              />
            </template>
          </DocComponent>
        </DocSection>

        <!-- Avatar group -->
        <DocSection title="Avatar group" tag="1.0.0">
          <DocComponent label="Md avatar group">
            <template #demo>
              <div class="flex flex-wrap items-end gap-4">
                <MediumDemo />
              </div>
            </template>
            <template #code>
              <DocMarkdown
                :source="wrapVueMarkdown(medium)"
                class="prose max-w-full"
              />
            </template>
          </DocComponent>
        </DocSection>

        <!-- Avatar group -->
        <DocSection title="Avatar group" tag="1.0.0">
          <DocComponent label="Lg avatar group">
            <template #demo>
              <div class="flex flex-wrap items-end gap-4">
                <LargeDemo />
              </div>
            </template>
            <template #code>
              <DocMarkdown
                :source="wrapVueMarkdown(large)"
                class="prose max-w-full"
              />
            </template>
          </DocComponent>
        </DocSection>

        <DocComponentMeta name="BaseAvatarGroup" />
      </template>
      <!-- Toc -->
      <template #toc>
        <DocToc />
      </template>
    </DocLayout>
  </div>
</template>
