<script setup lang="ts">
import { breadcrumb, toc } from '@@/documentation/elements/icon-button/toc'
import {
  group,
  loading,
  muted,
  primary,
  shapes,
} from '@@/documentation/elements/icon-button'
import { properties } from '@@/documentation/elements/icon-button/properties'

definePageMeta({
  title: 'Icon buttons',
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
        <!-- Icon button shapes -->
        <DocSection id="iconbutton-shapes" title="Button shapes" tag="1.0.0">
          <DocComponent label="Default button shapes">
            <template #demo>
              <FocusLoop class="flex items-end flex-wrap gap-2">
                <BaseButtonIcon shape="straight">
                  <BaseIcon name="ph:moon-duotone" class="w-5 h-5" />
                </BaseButtonIcon>
                <BaseButtonIcon shape="rounded">
                  <BaseIcon name="ph:github-logo-duotone" class="w-5 h-5" />
                </BaseButtonIcon>
                <BaseButtonIcon shape="curved">
                  <BaseIcon name="ph:game-controller-duotone" class="w-5 h-5" />
                </BaseButtonIcon>
                <BaseButtonIcon shape="full">
                  <BaseIcon name="ph:heart-duotone" class="w-5 h-5" />
                </BaseButtonIcon>
              </FocusLoop>
            </template>
            <template #code>
              <DocCode language="html" :code="shapes" />
            </template>
          </DocComponent>
        </DocSection>

        <!-- Icon button primary -->
        <DocSection id="iconbutton-primary" title="Primary color" tag="1.0.0">
          <DocComponent label="Icon button primary color">
            <template #demo>
              <FocusLoop class="flex items-end flex-wrap gap-2">
                <BaseButtonIcon shape="straight" primary>
                  <BaseIcon name="ph:moon-duotone" class="w-5 h-5" />
                </BaseButtonIcon>
                <BaseButtonIcon shape="rounded" primary>
                  <BaseIcon name="ph:github-logo-duotone" class="w-5 h-5" />
                </BaseButtonIcon>
                <BaseButtonIcon shape="curved" primary>
                  <BaseIcon name="ph:game-controller-duotone" class="w-5 h-5" />
                </BaseButtonIcon>
                <BaseButtonIcon shape="full" primary>
                  <BaseIcon name="ph:heart-duotone" class="w-5 h-5" />
                </BaseButtonIcon>
              </FocusLoop>
            </template>
            <template #code>
              <DocCode language="html" :code="primary" />
            </template>
          </DocComponent>
        </DocSection>

        <!-- Icon button muted -->
        <DocSection id="iconbutton-muted" title="Button muted" tag="1.0.0">
          <DocComponent label="Button muted variation">
            <template #demo>
              <FocusLoop class="flex items-end flex-wrap gap-2">
                <BaseButtonIcon shape="straight" muted>
                  <BaseIcon name="ph:moon-duotone" class="w-5 h-5" />
                </BaseButtonIcon>
                <BaseButtonIcon shape="rounded" muted>
                  <BaseIcon name="ph:github-logo-duotone" class="w-5 h-5" />
                </BaseButtonIcon>
                <BaseButtonIcon shape="curved" muted>
                  <BaseIcon name="ph:game-controller-duotone" class="w-5 h-5" />
                </BaseButtonIcon>
                <BaseButtonIcon shape="full" muted>
                  <BaseIcon name="ph:heart-duotone" class="w-5 h-5" />
                </BaseButtonIcon>
              </FocusLoop>
            </template>
            <template #code>
              <DocCode language="html" :code="muted" />
            </template>
          </DocComponent>
        </DocSection>

        <!-- Icon button loading -->
        <DocSection id="iconbutton-loading" title="Button loading" tag="1.0.0">
          <DocComponent label="Icon button loading">
            <template #demo>
              <FocusLoop class="flex items-end flex-wrap gap-2">
                <BaseButtonIcon shape="straight" loading>
                  <BaseIcon name="ph:moon-duotone" class="w-5 h-5" />
                </BaseButtonIcon>
                <BaseButtonIcon shape="rounded" loading>
                  <BaseIcon name="ph:github-logo-duotone" class="w-5 h-5" />
                </BaseButtonIcon>
                <BaseButtonIcon shape="curved" loading>
                  <BaseIcon name="ph:game-controller-duotone" class="w-5 h-5" />
                </BaseButtonIcon>
                <BaseButtonIcon shape="full" loading>
                  <BaseIcon name="ph:heart-duotone" class="w-5 h-5" />
                </BaseButtonIcon>
              </FocusLoop>
            </template>
            <template #code>
              <DocCode language="html" :code="loading" />
            </template>
          </DocComponent>
        </DocSection>

        <!-- Icon button group -->
        <DocSection id="iconbutton-group" title="Button group" tag="1.0.0">
          <DocComponent label="icon buttons inside a group">
            <template #demo>
              <FocusLoop class="flex items-end flex-wrap">
                <BaseButtonIcon
                  shape="curved"
                  class="focus:z-10 rounded-r-none border-r-0"
                >
                  <BaseIcon name="ph:moon-duotone" class="w-5 h-5" />
                </BaseButtonIcon>
                <BaseButtonIcon shape="straight" class="focus:z-10">
                  <BaseIcon name="ph:github-logo-duotone" class="w-5 h-5" />
                </BaseButtonIcon>
                <BaseButtonIcon shape="straight" class="focus:z-10 border-l-0">
                  <BaseIcon name="ph:game-controller-duotone" class="w-5 h-5" />
                </BaseButtonIcon>
                <BaseButtonIcon
                  shape="curved"
                  class="focus:z-10 rounded-l-none border-l-0"
                >
                  <BaseIcon name="ph:heart-duotone" class="w-5 h-5" />
                </BaseButtonIcon>
              </FocusLoop>
            </template>
            <template #code>
              <DocCode language="html" :code="group" />
            </template>
          </DocComponent>
        </DocSection>

        <!-- properties -->
        <DocProps
          id="iconbutton-props"
          component="Icon button"
          :properties="properties.props"
          :slots="properties.slots"
        />
      </template>
      <!-- Toc -->
      <template #toc>
        <DocToc :anchors="toc" />
      </template>
    </DocLayout>
  </div>
</template>
