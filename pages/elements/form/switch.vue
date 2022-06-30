<script setup lang="ts">
// @todo: fix switch checked / unchecked states that don't seem to work properly.

import { breadcrumb, toc } from '@@/documentation/elements/form/switch/toc'
import {
  ballSublabel,
  ballSwitch,
  thinSublabel,
  thinSwitch,
} from '@@/documentation/elements/form/switch'
import {
  ballProperties,
  thinProperties,
} from '@@/documentation/elements/form/switch/properties'

definePageMeta({
  title: 'Switches',
})
</script>

<template>
  <div>
    <!-- BreadCrumb -->
    <BaseBreadcrumb :items="breadcrumb" separator="dot" />

    <!-- Documentation Layout -->
    <DocLayout>
      <!-- content -->
      <template #content>
        <!-- Switch thin -->
        <DocSection id="switch-thin" title="Thin Switch" tag="1.0.0">
          <DocComponent label="Thin switch example">
            <template #demo>
              <div class="flex items-end gap-6">
                <div class="w-full flex flex-wrap gap-8">
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
                </div>
              </div>
            </template>
            <template #code>
              <DocCode language="html" :code="thinSwitch" />
            </template>
          </DocComponent>
        </DocSection>

        <!-- Switch thin -->
        <DocSection id="switch-sublabel" title="Thin Sublabel" tag="1.0.0">
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
        <DocProps
          id="switch-thin-props"
          component="Thin Switch"
          :properties="thinProperties.props"
          :slots="thinProperties.slots"
        />

        <!-- Switch ball -->
        <DocSection id="switch-ball" title="Ball Switch" tag="1.0.0">
          <DocComponent label="Thin switch example">
            <template #demo>
              <div class="flex items-end gap-6">
                <div class="w-full flex flex-wrap gap-8">
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
                </div>
              </div>
            </template>
            <template #code>
              <DocCode language="html" :code="ballSwitch" />
            </template>
          </DocComponent>
        </DocSection>

        <!-- Switch ball -->
        <DocSection id="switch-ball-sublabel" title="Ball Sublabel" tag="1.0.0">
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
        <DocProps
          id="switch-ball-props"
          component="Ball Switch"
          :properties="ballProperties.props"
          :slots="ballProperties.slots"
        />
      </template>
      <!-- Toc -->
      <template #toc>
        <DocToc :anchors="toc" />
      </template>
    </DocLayout>
  </div>
</template>
