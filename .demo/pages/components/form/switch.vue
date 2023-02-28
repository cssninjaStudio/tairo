<script setup lang="ts">
// @todo: fix switch checked / unchecked states that don't seem to work properly.

import BallSublabelDemo from '~/documentation/form/switch/ball-sublabel.vue'
import ballSublabel from '~/documentation/form/switch/ball-sublabel.vue?raw'
import BallSwitchDemo from '~/documentation/form/switch/ball-switch.vue'
import ballSwitch from '~/documentation/form/switch/ball-switch.vue?raw'
import ThinSublabelDemo from '~/documentation/form/switch/thin-sublabel.vue'
import thinSublabel from '~/documentation/form/switch/thin-sublabel.vue?raw'
import ThinSwitchDemo from '~/documentation/form/switch/thin-switch.vue'
import thinSwitch from '~/documentation/form/switch/thin-switch.vue?raw'

definePageMeta({
  title: 'Switches',
  documentation: {
    category: 'Forms',
    components: ['BaseSwitchThin', 'BaseSwitchBall'],
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
    label: 'Switch',
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
              <DocMarkdown
                :source="wrapVueMarkdown(thinSwitch)"
                class="prose max-w-full"
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
              <DocMarkdown
                :source="wrapVueMarkdown(thinSublabel)"
                class="prose max-w-full"
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
              <DocMarkdown
                :source="wrapVueMarkdown(ballSwitch)"
                class="prose max-w-full"
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
              <DocMarkdown
                :source="wrapVueMarkdown(ballSublabel)"
                class="prose max-w-full"
              />
            </template>
          </DocComponent>
        </DocSection>

        <!-- Ball switch properties -->
        <DocComponentMeta name="BaseSwitchBall" />
      </template>
      <!-- Toc -->
      <template #toc>
        <DocToc />
      </template>
    </DocLayout>
  </div>
</template>
