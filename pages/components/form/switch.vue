<script setup lang="ts">
// @todo: fix switch checked / unchecked states that don't seem to work properly.

import {
  ballSublabel,
  ballSwitch,
  thinSublabel,
  thinSwitch,
} from '@@/documentation/components/form/switch'

import {
  BaseFormSwitchBallMeta,
  BaseFormSwitchThinMeta,
} from '#vue-component-meta'

definePageMeta({
  title: 'Switches',
  documentation: {
    category: 'Forms',
    components: ['BaseFormSwitchThin', 'BaseFormSwitchBall'],
  },
})
</script>

<template>
  <div>
    <!-- BreadCrumb -->
    <BaseBreadcrumb />

    <!-- Documentation Layout -->
    <DocLayout>
      <!-- content -->
      <template #content>
        <!-- Switch thin -->
        <DocSection title="Thin Switch" tag="1.0.0">
          <DocComponent label="Thin switch example">
            <template #demo>
              <div class="flex items-end gap-6">
                <FocusLoop class="flex w-full flex-wrap gap-8">
                  <BaseFormSwitchThin
                    id="demo-thin-1"
                    :checked="true"
                    label="Primary"
                    color="primary"
                  />
                  <BaseFormSwitchThin
                    id="demo-thin-2"
                    :checked="true"
                    label="Info"
                    color="info"
                  />
                  <BaseFormSwitchThin
                    id="demo-thin-3"
                    :checked="true"
                    label="Success"
                    color="success"
                  />
                  <BaseFormSwitchThin
                    id="demo-thin-4"
                    :checked="true"
                    label="Warning"
                    color="warning"
                  />
                  <BaseFormSwitchThin
                    id="demo-thin-5"
                    :checked="true"
                    label="Danger"
                    color="danger"
                  />
                </FocusLoop>
              </div>
            </template>
            <template #code>
              <DocCode language="html" :code="thinSwitch" />
            </template>
          </DocComponent>
        </DocSection>

        <!-- Switch thin -->
        <DocSection title="Thin Sublabel" tag="1.0.0">
          <DocComponent label="Thin switch example">
            <template #demo>
              <div class="w-full">
                <BaseFormSwitchThin
                  id="demo-thin-6"
                  :checked="true"
                  label="Primary"
                  sublabel="This is a primary switch"
                  color="primary"
                />
              </div>
            </template>
            <template #code>
              <DocCode language="html" :code="thinSublabel" />
            </template>
          </DocComponent>
        </DocSection>

        <!-- Thin switch properties -->
        <DocComponentMeta :meta="BaseFormSwitchThinMeta" />

        <!-- Switch ball -->
        <DocSection title="Ball Switch" tag="1.0.0">
          <DocComponent label="Thin switch example">
            <template #demo>
              <div class="flex items-end gap-6">
                <FocusLoop class="flex w-full flex-wrap gap-8">
                  <BaseFormSwitchBall
                    id="demo-ball-1"
                    :checked="true"
                    label="Primary"
                    color="primary"
                  />
                  <BaseFormSwitchBall
                    id="demo-ball-2"
                    :checked="true"
                    label="Info"
                    color="info"
                  />
                  <BaseFormSwitchBall
                    id="demo-ball-3"
                    :checked="true"
                    label="Success"
                    color="success"
                  />
                  <BaseFormSwitchBall
                    id="demo-ball-4"
                    :checked="true"
                    label="Warning"
                    color="warning"
                  />
                  <BaseFormSwitchBall
                    id="demo-ball-5"
                    :checked="true"
                    label="Danger"
                    color="danger"
                  />
                </FocusLoop>
              </div>
            </template>
            <template #code>
              <DocCode language="html" :code="ballSwitch" />
            </template>
          </DocComponent>
        </DocSection>

        <!-- Switch ball -->
        <DocSection title="Ball Sublabel" tag="1.0.0">
          <DocComponent label="Ball switch example">
            <template #demo>
              <div class="w-full">
                <BaseFormSwitchBall
                  id="demo-ball-6"
                  :checked="true"
                  label="Primary"
                  sublabel="This is a primary switch"
                  color="primary"
                />
              </div>
            </template>
            <template #code>
              <DocCode language="html" :code="ballSublabel" />
            </template>
          </DocComponent>
        </DocSection>

        <!-- Ball switch properties -->
        <DocComponentMeta :meta="BaseFormSwitchBallMeta" />
      </template>
      <!-- Toc -->
      <template #toc>
        <DocToc />
      </template>
    </DocLayout>
  </div>
</template>
