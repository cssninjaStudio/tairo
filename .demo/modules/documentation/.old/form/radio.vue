<script setup lang="ts">
import BaseDemo from '../../../examples/radio/base.vue'
import base from '../../../examples/radio/base.vue?raw'
import ColorsDemo from '../../../examples/radio/colors.vue'
import colors from '../../../examples/radio/colors.vue?raw'
import DangerDemo from '../../../examples/radio/danger.vue'
import danger from '../../../examples/radio/danger.vue?raw'
import InfoDemo from '../../../examples/radio/info.vue'
import info from '../../../examples/radio/info.vue?raw'
import MutedDemo from '../../../examples/radio/muted.vue'
import muted from '../../../examples/radio/muted.vue?raw'
import PrimaryDemo from '../../../examples/radio/primary.vue'
import primary from '../../../examples/radio/primary.vue?raw'
import SuccessDemo from '../../../examples/radio/success.vue'
import success from '../../../examples/radio/success.vue?raw'
import WarningDemo from '../../../examples/radio/warning.vue'
import warning from '../../../examples/radio/warning.vue?raw'

function wrapVueMarkdown(source: string) {
  return '```vue\n' + source + '\n```'
}
</script>

<template>
  <div>
    <BaseBreadcrumb />

    <DocLayout>
      <template #content>
        <!-- Radio default -->
        <DocSection title="Radio buttons" tag="1.0.0">
          <DocComponent label="Default color example">
            <template #demo>
              <div class="flex items-end gap-6">
                <div class="flex w-full max-w-sm items-end gap-6">
                  <BaseDemo />
                </div>
              </div>
            </template>
            <template #code>
              <AddonMarkdownRemark :source="wrapVueMarkdown(base)" fullwidth />
            </template>
          </DocComponent>
        </DocSection>

        <!-- Radio Muted -->
        <DocSection title="Muted color" tag="1.0.0">
          <DocComponent label="Muted color example">
            <template #demo>
              <div class="flex items-end gap-6">
                <div class="flex w-full max-w-sm items-end gap-6">
                  <MutedDemo />
                </div>
              </div>
            </template>
            <template #code>
              <AddonMarkdownRemark :source="wrapVueMarkdown(muted)" fullwidth />
            </template>
          </DocComponent>
        </DocSection>

        <!-- Radio Primary -->
        <DocSection title="Primary color" tag="1.0.0">
          <DocComponent label="Primary color example">
            <template #demo>
              <div class="flex items-end gap-6">
                <div class="flex w-full max-w-sm items-end gap-6">
                  <PrimaryDemo />
                </div>
              </div>
            </template>
            <template #code>
              <AddonMarkdownRemark
                :source="wrapVueMarkdown(primary)"
                fullwidth
              />
            </template>
          </DocComponent>
        </DocSection>

        <!-- Radio Info -->
        <DocSection title="Info color" tag="1.0.0">
          <DocComponent label="Info color example">
            <template #demo>
              <div class="flex items-end gap-6">
                <div class="flex w-full max-w-sm items-end gap-6">
                  <InfoDemo />
                </div>
              </div>
            </template>
            <template #code>
              <AddonMarkdownRemark :source="wrapVueMarkdown(info)" fullwidth />
            </template>
          </DocComponent>
        </DocSection>

        <!-- Radio Success -->
        <DocSection title="Success color" tag="1.0.0">
          <DocComponent label="Success color example">
            <template #demo>
              <div class="flex items-end gap-6">
                <div class="flex w-full max-w-sm items-end gap-6">
                  <SuccessDemo />
                </div>
              </div>
            </template>
            <template #code>
              <AddonMarkdownRemark
                :source="wrapVueMarkdown(success)"
                fullwidth
              />
            </template>
          </DocComponent>
        </DocSection>

        <!-- Radio Warning -->
        <DocSection title="Warning color" tag="1.0.0">
          <DocComponent label="Warning color example">
            <template #demo>
              <div class="flex items-end gap-6">
                <div class="flex w-full max-w-sm items-end gap-6">
                  <WarningDemo />
                </div>
              </div>
            </template>
            <template #code>
              <AddonMarkdownRemark
                :source="wrapVueMarkdown(warning)"
                fullwidth
              />
            </template>
          </DocComponent>
        </DocSection>

        <!-- Radio Danger -->
        <DocSection title="Danger color" tag="1.0.0">
          <DocComponent label="Danger color example">
            <template #demo>
              <div class="flex items-end gap-6">
                <div class="flex w-full max-w-sm items-end gap-6">
                  <DangerDemo />
                </div>
              </div>
            </template>
            <template #code>
              <AddonMarkdownRemark
                :source="wrapVueMarkdown(danger)"
                fullwidth
              />
            </template>
          </DocComponent>
        </DocSection>

        <!-- Radio custom colors -->
        <DocSection title="Custom colors" tag="1.0.0">
          <DocComponent label="Custom colors examples">
            <template #demo>
              <div class="flex items-end gap-6">
                <ColorsDemo />
              </div>
            </template>
            <template #code>
              <AddonMarkdownRemark
                :source="wrapVueMarkdown(colors)"
                fullwidth
              />
            </template>
          </DocComponent>
        </DocSection>

        <!-- Radio properties -->
        <DocComponentMeta name="BaseRadio" />
      </template>
      <template #toc>
        <DocToc />
      </template>
    </DocLayout>
  </div>
</template>
