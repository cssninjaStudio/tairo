<script setup lang="ts">
// @todo: fix switch checked / unchecked states that don't seem to work properly.

import {
  ballSublabel,
  ballSwitch,
  thinSublabel,
  thinSwitch,
} from '@@/documentation/form/switch'

definePageMeta({
  title: 'Switches',
  documentation: {
    category: 'Forms',
    components: ['BaseSwitchThin', 'BaseSwitchBall'],
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
                <BaseFocusLoop class="flex w-full flex-wrap gap-8">
                  <BaseSwitchThin
                    id="demo-thin-1"
                    :checked="true"
                    label="Primary"
                    color="primary"
                  />
                  <BaseSwitchThin
                    id="demo-thin-2"
                    :checked="true"
                    label="Info"
                    color="info"
                  />
                  <BaseSwitchThin
                    id="demo-thin-3"
                    :checked="true"
                    label="Success"
                    color="success"
                  />
                  <BaseSwitchThin
                    id="demo-thin-4"
                    :checked="true"
                    label="Warning"
                    color="warning"
                  />
                  <BaseSwitchThin
                    id="demo-thin-5"
                    :checked="true"
                    label="Danger"
                    color="danger"
                  />
                </BaseFocusLoop>
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
                <BaseSwitchThin
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
        <DocComponentMeta name="BaseSwitchThin" />

        <!-- Switch ball -->
        <DocSection title="Ball Switch" tag="1.0.0">
          <DocComponent label="Thin switch example">
            <template #demo>
              <div class="flex items-end gap-6">
                <BaseFocusLoop class="flex w-full flex-wrap gap-8">
                  <BaseSwitchBall
                    id="demo-ball-1"
                    :checked="true"
                    label="Primary"
                    color="primary"
                  />
                  <BaseSwitchBall
                    id="demo-ball-2"
                    :checked="true"
                    label="Info"
                    color="info"
                  />
                  <BaseSwitchBall
                    id="demo-ball-3"
                    :checked="true"
                    label="Success"
                    color="success"
                  />
                  <BaseSwitchBall
                    id="demo-ball-4"
                    :checked="true"
                    label="Warning"
                    color="warning"
                  />
                  <BaseSwitchBall
                    id="demo-ball-5"
                    :checked="true"
                    label="Danger"
                    color="danger"
                  />
                </BaseFocusLoop>
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
                <BaseSwitchBall
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
        <DocComponentMeta name="BaseSwitchBall" />
      </template>
      <!-- Toc -->
      <template #toc>
        <DocToc />
      </template>
    </DocLayout>
  </div>
</template>
