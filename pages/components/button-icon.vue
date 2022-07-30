<script setup lang="ts">
import {
  group,
  loading,
  muted,
  primary,
  shapes,
} from '@@/documentation/components/icon-button'

import { BaseButtonIconMeta } from '#vue-component-meta'

definePageMeta({
  title: 'Button Icon',
  documentation: {
    category: 'Interaction',
    components: ['BaseButtonIcon'],
    composables: ['useButton'],
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
        <!-- Icon button shapes -->
        <DocSection title="Button shapes" tag="1.0.0">
          <DocComponent label="Default button shapes">
            <template #demo>
              <FocusLoop class="flex flex-wrap items-end gap-2">
                <BaseButtonIcon shape="straight">
                  <BaseIcon name="ph:moon-duotone" class="h-5 w-5" />
                </BaseButtonIcon>
                <BaseButtonIcon shape="rounded">
                  <BaseIcon name="ph:github-logo-duotone" class="h-5 w-5" />
                </BaseButtonIcon>
                <BaseButtonIcon shape="curved">
                  <BaseIcon name="ph:game-controller-duotone" class="h-5 w-5" />
                </BaseButtonIcon>
                <BaseButtonIcon shape="full">
                  <BaseIcon name="ph:heart-duotone" class="h-5 w-5" />
                </BaseButtonIcon>
              </FocusLoop>
            </template>
            <template #code>
              <DocCode language="html" :code="shapes" />
            </template>
          </DocComponent>
        </DocSection>

        <!-- Icon button primary -->
        <DocSection title="Primary color" tag="1.0.0">
          <DocComponent label="Icon button primary color">
            <template #demo>
              <FocusLoop class="flex flex-wrap items-end gap-2">
                <BaseButtonIcon shape="straight" primary>
                  <BaseIcon name="ph:moon-duotone" class="h-5 w-5" />
                </BaseButtonIcon>
                <BaseButtonIcon shape="rounded" primary>
                  <BaseIcon name="ph:github-logo-duotone" class="h-5 w-5" />
                </BaseButtonIcon>
                <BaseButtonIcon shape="curved" primary>
                  <BaseIcon name="ph:game-controller-duotone" class="h-5 w-5" />
                </BaseButtonIcon>
                <BaseButtonIcon shape="full" primary>
                  <BaseIcon name="ph:heart-duotone" class="h-5 w-5" />
                </BaseButtonIcon>
              </FocusLoop>
            </template>
            <template #code>
              <DocCode language="html" :code="primary" />
            </template>
          </DocComponent>
        </DocSection>

        <!-- Icon button muted -->
        <DocSection title="Button muted" tag="1.0.0">
          <DocComponent label="Button muted variation">
            <template #demo>
              <FocusLoop class="flex flex-wrap items-end gap-2">
                <BaseButtonIcon shape="straight" muted>
                  <BaseIcon name="ph:moon-duotone" class="h-5 w-5" />
                </BaseButtonIcon>
                <BaseButtonIcon shape="rounded" muted>
                  <BaseIcon name="ph:github-logo-duotone" class="h-5 w-5" />
                </BaseButtonIcon>
                <BaseButtonIcon shape="curved" muted>
                  <BaseIcon name="ph:game-controller-duotone" class="h-5 w-5" />
                </BaseButtonIcon>
                <BaseButtonIcon shape="full" muted>
                  <BaseIcon name="ph:heart-duotone" class="h-5 w-5" />
                </BaseButtonIcon>
              </FocusLoop>
            </template>
            <template #code>
              <DocCode language="html" :code="muted" />
            </template>
          </DocComponent>
        </DocSection>

        <!-- Icon button loading -->
        <DocSection title="Button loading" tag="1.0.0">
          <DocComponent label="Icon button loading">
            <template #demo>
              <FocusLoop class="flex flex-wrap items-end gap-2">
                <BaseButtonIcon shape="straight" loading>
                  <BaseIcon name="ph:moon-duotone" class="h-5 w-5" />
                </BaseButtonIcon>
                <BaseButtonIcon shape="rounded" loading>
                  <BaseIcon name="ph:github-logo-duotone" class="h-5 w-5" />
                </BaseButtonIcon>
                <BaseButtonIcon shape="curved" loading>
                  <BaseIcon name="ph:game-controller-duotone" class="h-5 w-5" />
                </BaseButtonIcon>
                <BaseButtonIcon shape="full" loading>
                  <BaseIcon name="ph:heart-duotone" class="h-5 w-5" />
                </BaseButtonIcon>
              </FocusLoop>
            </template>
            <template #code>
              <DocCode language="html" :code="loading" />
            </template>
          </DocComponent>
        </DocSection>

        <!-- Icon button group -->
        <DocSection title="Button group" tag="1.0.0">
          <DocComponent label="icon buttons inside a group">
            <template #demo>
              <FocusLoop class="flex flex-wrap items-end">
                <BaseButtonIcon
                  shape="curved"
                  class="rounded-r-none border-r-0 focus:z-10"
                >
                  <BaseIcon name="ph:moon-duotone" class="h-5 w-5" />
                </BaseButtonIcon>
                <BaseButtonIcon shape="straight" class="focus:z-10">
                  <BaseIcon name="ph:github-logo-duotone" class="h-5 w-5" />
                </BaseButtonIcon>
                <BaseButtonIcon shape="straight" class="border-l-0 focus:z-10">
                  <BaseIcon name="ph:game-controller-duotone" class="h-5 w-5" />
                </BaseButtonIcon>
                <BaseButtonIcon
                  shape="curved"
                  class="rounded-l-none border-l-0 focus:z-10"
                >
                  <BaseIcon name="ph:heart-duotone" class="h-5 w-5" />
                </BaseButtonIcon>
              </FocusLoop>
            </template>
            <template #code>
              <DocCode language="html" :code="group" />
            </template>
          </DocComponent>
        </DocSection>

        <!-- properties -->
        <DocComponentMeta :meta="BaseButtonIconMeta" />
      </template>
      <!-- Toc -->
      <template #toc>
        <DocToc />
      </template>
    </DocLayout>
  </div>
</template>
