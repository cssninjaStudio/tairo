<script setup lang="ts">
import DualLeftDemo from '~/documentation/popover/dual-left.vue'
import dualLeft from '~/documentation/popover/dual-left.vue?raw'
import DualRightDemo from '~/documentation/popover/dual-right.vue'
import dualRight from '~/documentation/popover/dual-right.vue?raw'
import HelpLeftDemo from '~/documentation/popover/help-left.vue'
import helpLeft from '~/documentation/popover/help-left.vue?raw'
import HelpRightDemo from '~/documentation/popover/help-right.vue'
import helpRight from '~/documentation/popover/help-right.vue?raw'
import MediaLeftDemo from '~/documentation/popover/media-left.vue'
import mediaLeft from '~/documentation/popover/media-left.vue?raw'
import MediaRightDemo from '~/documentation/popover/media-right.vue'
import mediaRight from '~/documentation/popover/media-right.vue?raw'

definePageMeta({
  title: 'Popover',
  documentation: {
    category: 'Tairo Elements',
    components: [
      'TairoPopover',
      'TairoPopoverContentHelp',
      'TairoPopoverContentDual',
      'TairoPopoverContentMedia',
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
    label: 'Popover',
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
        <!-- Popover -->
        <DocSection title="Help left" tag="1.0.0">
          <DocComponent label="Click the elements below">
            <template #demo>
              <div class="flex flex-wrap items-end gap-6">
                <HelpLeftDemo />
              </div>
            </template>
            <template #code>
              <DocMarkdown
                :source="wrapVueMarkdown(helpLeft)"
                class="prose max-w-full"
              />
            </template>
          </DocComponent>
        </DocSection>

        <!-- Popover -->
        <DocSection title="Help right" tag="1.0.0">
          <DocComponent label="Click the elements below">
            <template #demo>
              <div class="flex items-end justify-end gap-6">
                <HelpRightDemo />
              </div>
            </template>
            <template #code>
              <DocMarkdown
                :source="wrapVueMarkdown(helpRight)"
                class="prose max-w-full"
              />
            </template>
          </DocComponent>
        </DocSection>

        <!-- Popover -->
        <DocSection title="Dual left" tag="1.0.0">
          <DocComponent label="Click the elements below">
            <template #demo>
              <div class="flex items-end gap-6">
                <DualLeftDemo />
              </div>
            </template>
            <template #code>
              <DocMarkdown
                :source="wrapVueMarkdown(dualLeft)"
                class="prose max-w-full"
              />
            </template>
          </DocComponent>
        </DocSection>

        <!-- Popover -->
        <DocSection title="Dual right" tag="1.0.0">
          <DocComponent label="Click the elements below">
            <template #demo>
              <div class="flex items-end justify-end gap-6">
                <DualRightDemo />
              </div>
            </template>
            <template #code>
              <DocMarkdown
                :source="wrapVueMarkdown(dualRight)"
                class="prose max-w-full"
              />
            </template>
          </DocComponent>
        </DocSection>

        <!-- Popover -->
        <DocSection title="Media left" tag="1.0.0">
          <DocComponent label="Click the elements below">
            <template #demo>
              <div class="flex items-end gap-6">
                <MediaLeftDemo />
              </div>
            </template>
            <template #code>
              <DocMarkdown
                :source="wrapVueMarkdown(mediaLeft)"
                class="prose max-w-full"
              />
            </template>
          </DocComponent>
        </DocSection>

        <!-- Popover -->
        <DocSection title="Media right" tag="1.0.0">
          <DocComponent label="Click the elements below">
            <template #demo>
              <div class="flex items-end justify-end gap-6">
                <MediaRightDemo />
              </div>
            </template>
            <template #code>
              <DocMarkdown
                :source="wrapVueMarkdown(mediaRight)"
                class="prose max-w-full"
              />
            </template>
          </DocComponent>
        </DocSection>

        <!-- Popover properties -->
        <DocComponentMeta name="TairoPopover" />

        <!-- Help properties -->
        <DocComponentMeta name="TairoPopoverContentHelp" />

        <!-- Dual properties -->
        <DocComponentMeta name="TairoPopoverContentDual" />

        <!-- Media properties -->
        <DocComponentMeta name="TairoPopoverContentMedia" />
      </template>
      <!-- Toc -->
      <template #toc>
        <DocToc />
      </template>
    </DocLayout>
  </div>
</template>
