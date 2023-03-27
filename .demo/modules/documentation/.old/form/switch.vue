<script setup lang="ts">
// @todo: fix switch checked / unchecked states that don't seem to work properly.

import BallSublabelDemo from '../../../examples/switch/ball-sublabel.vue'
import ballSublabel from '../../../examples/switch/ball-sublabel.vue?raw'
import BallSwitchDemo from '../../../examples/switch/ball-switch.vue'
import ballSwitch from '../../../examples/switch/ball-switch.vue?raw'
import ThinSublabelDemo from '../../../examples/switch/thin-sublabel.vue'
import thinSublabel from '../../../examples/switch/thin-sublabel.vue?raw'
import ThinSwitchDemo from '../../../examples/switch/thin-switch.vue'
import thinSwitch from '../../../examples/switch/thin-switch.vue?raw'

function wrapVueMarkdown(source: string) {
  return '```vue\n' + source + '\n```'
}
</script>

<template>
  <div>
    <BaseBreadcrumb />

    <DocLayout>
      <template #content>
        <!-- Switch thin -->
        <DocSection title="Thin Switch" tag="1.0.0">
          <DocComponent label="Thin switch example">
            <template #demo>
              <div class="flex items-end gap-6">
                <BaseFocusLoop class="flex w-full flex-wrap gap-8">
                  <ThinSwitchDemo />
                </BaseFocusLoop>
              </div>
            </template>
            <template #code>
              <AddonMarkdownRemark
                :source="wrapVueMarkdown(thinSwitch)"
                fullwidth
              />
            </template>
          </DocComponent>
        </DocSection>

        <!-- Switch thin -->
        <DocSection title="Thin Sublabel" tag="1.0.0">
          <DocComponent label="Thin switch example">
            <template #demo>
              <div class="w-full">
                <ThinSublabelDemo />
              </div>
            </template>
            <template #code>
              <AddonMarkdownRemark
                :source="wrapVueMarkdown(thinSublabel)"
                fullwidth
              />
            </template>
          </DocComponent>
        </DocSection>

        <!-- Thin switch properties -->
        <DocComponentMeta name="BaseSwitchThin" />

        <!-- Switch ball -->
        <DocSection title="Ball Switch" tag="1.0.0">
          <DocComponent label="Thin switch example">
            <template #demo>
              <div class="flex items-end gap-6">
                <BaseFocusLoop class="flex w-full flex-wrap gap-8">
                  <BallSwitchDemo />
                </BaseFocusLoop>
              </div>
            </template>
            <template #code>
              <AddonMarkdownRemark
                :source="wrapVueMarkdown(ballSwitch)"
                fullwidth
              />
            </template>
          </DocComponent>
        </DocSection>

        <!-- Switch ball -->
        <DocSection title="Ball Sublabel" tag="1.0.0">
          <DocComponent label="Ball switch example">
            <template #demo>
              <div class="w-full">
                <BallSublabelDemo />
              </div>
            </template>
            <template #code>
              <AddonMarkdownRemark
                :source="wrapVueMarkdown(ballSublabel)"
                fullwidth
              />
            </template>
          </DocComponent>
        </DocSection>

        <!-- Ball switch properties -->
        <DocComponentMeta name="BaseSwitchBall" />
      </template>
      <template #toc>
        <DocToc />
      </template>
    </DocLayout>
  </div>
</template>
