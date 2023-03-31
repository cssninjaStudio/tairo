<script setup lang="ts">
import DualLeftDemo from '#examples/popover/dual-left.vue'
import dualLeft from '#examples/popover/dual-left.vue?raw'
import DualRightDemo from '#examples/popover/dual-right.vue'
import dualRight from '#examples/popover/dual-right.vue?raw'
import HelpLeftDemo from '#examples/popover/help-left.vue'
import helpLeft from '#examples/popover/help-left.vue?raw'
import HelpRightDemo from '#examples/popover/help-right.vue'
import helpRight from '#examples/popover/help-right.vue?raw'
import MediaLeftDemo from '#examples/popover/media-left.vue'
import mediaLeft from '#examples/popover/media-left.vue?raw'
import MediaRightDemo from '#examples/popover/media-right.vue'
import mediaRight from '#examples/popover/media-right.vue?raw'

function wrapVueMarkdown(source: string) {
  return '```vue\n' + source + '\n```'
}
</script>

<template>
  <div>
    <BaseBreadcrumb />

    <DocLayout>
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
              <AddonMarkdownRemark
                :source="wrapVueMarkdown(helpLeft)"
                fullwidth
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
              <AddonMarkdownRemark
                :source="wrapVueMarkdown(helpRight)"
                fullwidth
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
              <AddonMarkdownRemark
                :source="wrapVueMarkdown(dualLeft)"
                fullwidth
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
              <AddonMarkdownRemark
                :source="wrapVueMarkdown(dualRight)"
                fullwidth
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
              <AddonMarkdownRemark
                :source="wrapVueMarkdown(mediaLeft)"
                fullwidth
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
              <AddonMarkdownRemark
                :source="wrapVueMarkdown(mediaRight)"
                fullwidth
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
      <template #toc>
        <DocToc />
      </template>
    </DocLayout>
  </div>
</template>
