<script setup lang="ts">
import DangerColorDemo from '../../examples/overview/danger-color.vue'
import dangerColor from '../../examples/overview/danger-color.vue?raw'
import InfoColorDemo from '../../examples/overview/info-color.vue'
import infoColor from '../../examples/overview/info-color.vue?raw'
import PrimaryColorDemo from '../../examples/overview/primary-color.vue'
import primaryColor from '../../examples/overview/primary-color.vue?raw'
import MutedColorDemo from '../../examples/overview/muted-color.vue'
import mutedColor from '../../examples/overview/muted-color.vue?raw'
import SuccessColorDemo from '../../examples/overview/success-color.vue'
import successColor from '../../examples/overview/success-color.vue?raw'
import WarningColorDemo from '../../examples/overview/warning-color.vue'
import warningColor from '../../examples/overview/warning-color.vue?raw'

function wrapVueMarkdown(source: string) {
  return '```vue\n' + source + '\n```'
}
</script>

<template>
  <div>
    <BaseBreadcrumb />

    <DocLayout>
      <template #content>
        <!-- Primary color -->
        <DocSection title="Primary color" tag="1.0.0">
          <DocComponent label="Primary color variations">
            <template #demo>
              <div class="flex flex-wrap items-end gap-2">
                <PrimaryColorDemo />
              </div>
            </template>
            <template #code>
              <AddonMarkdownRemark
                :source="wrapVueMarkdown(primaryColor)"
                fullwidth
              />
            </template>
          </DocComponent>
        </DocSection>

        <!-- Info color -->
        <DocSection title="Info color" tag="1.0.0">
          <DocComponent label="Info color variations">
            <template #demo>
              <div class="flex flex-wrap items-end gap-2">
                <InfoColorDemo />
              </div>
            </template>
            <template #code>
              <AddonMarkdownRemark
                :source="wrapVueMarkdown(infoColor)"
                fullwidth
              />
            </template>
          </DocComponent>
        </DocSection>

        <!-- Success color -->
        <DocSection title="Success color" tag="1.0.0">
          <DocComponent label="Success color variations">
            <template #demo>
              <div class="flex flex-wrap items-end gap-2">
                <SuccessColorDemo />
              </div>
            </template>
            <template #code>
              <AddonMarkdownRemark
                :source="wrapVueMarkdown(successColor)"
                fullwidth
              />
            </template>
          </DocComponent>
        </DocSection>

        <!-- Warning color -->
        <DocSection title="Warning color" tag="1.0.0">
          <DocComponent label="Success color variations">
            <template #demo>
              <div class="flex flex-wrap items-end gap-2">
                <WarningColorDemo />
              </div>
            </template>
            <template #code>
              <AddonMarkdownRemark
                :source="wrapVueMarkdown(warningColor)"
                fullwidth
              />
            </template>
          </DocComponent>
        </DocSection>

        <!-- Danger color -->
        <DocSection title="Danger color" tag="1.0.0">
          <DocComponent label="Success color variations">
            <template #demo>
              <div class="flex flex-wrap items-end gap-2">
                <DangerColorDemo />
              </div>
            </template>
            <template #code>
              <AddonMarkdownRemark
                :source="wrapVueMarkdown(dangerColor)"
                fullwidth
              />
            </template>
          </DocComponent>
        </DocSection>

        <!-- Slate color -->
        <DocSection title="Muted color" tag="1.0.0">
          <DocComponent label="Success color variations">
            <template #demo>
              <div class="flex flex-wrap items-end gap-2">
                <MutedColorDemo />
              </div>
            </template>
            <template #code>
              <AddonMarkdownRemark
                :source="wrapVueMarkdown(mutedColor)"
                fullwidth
              />
            </template>
          </DocComponent>
        </DocSection>
      </template>
      <template #toc>
        <DocToc />
      </template>
    </DocLayout>
  </div>
</template>
