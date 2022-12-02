<script setup lang="ts">
import {
  group,
  loading,
  muted,
  primary,
  shapes,
} from '@@/documentation/components/icon-button'



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
              <BaseFocusLoop class="flex flex-wrap items-end gap-2">
                <BaseButtonIcon shape="straight">
                  <Icon name="ph:moon-duotone" class="h-5 w-5" />
                </BaseButtonIcon>
                <BaseButtonIcon shape="rounded">
                  <Icon name="ph:github-logo-duotone" class="h-5 w-5" />
                </BaseButtonIcon>
                <BaseButtonIcon shape="curved">
                  <Icon name="ph:game-controller-duotone" class="h-5 w-5" />
                </BaseButtonIcon>
                <BaseButtonIcon shape="full">
                  <Icon name="ph:heart-duotone" class="h-5 w-5" />
                </BaseButtonIcon>
              </BaseFocusLoop>
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
              <BaseFocusLoop class="flex flex-wrap items-end gap-2">
                <BaseButtonIcon shape="straight" primary>
                  <Icon name="ph:moon-duotone" class="h-5 w-5" />
                </BaseButtonIcon>
                <BaseButtonIcon shape="rounded" primary>
                  <Icon name="ph:github-logo-duotone" class="h-5 w-5" />
                </BaseButtonIcon>
                <BaseButtonIcon shape="curved" primary>
                  <Icon name="ph:game-controller-duotone" class="h-5 w-5" />
                </BaseButtonIcon>
                <BaseButtonIcon shape="full" primary>
                  <Icon name="ph:heart-duotone" class="h-5 w-5" />
                </BaseButtonIcon>
              </BaseFocusLoop>
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
              <BaseFocusLoop class="flex flex-wrap items-end gap-2">
                <BaseButtonIcon shape="straight" muted>
                  <Icon name="ph:moon-duotone" class="h-5 w-5" />
                </BaseButtonIcon>
                <BaseButtonIcon shape="rounded" muted>
                  <Icon name="ph:github-logo-duotone" class="h-5 w-5" />
                </BaseButtonIcon>
                <BaseButtonIcon shape="curved" muted>
                  <Icon name="ph:game-controller-duotone" class="h-5 w-5" />
                </BaseButtonIcon>
                <BaseButtonIcon shape="full" muted>
                  <Icon name="ph:heart-duotone" class="h-5 w-5" />
                </BaseButtonIcon>
              </BaseFocusLoop>
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
              <BaseFocusLoop class="flex flex-wrap items-end gap-2">
                <BaseButtonIcon shape="straight" loading>
                  <Icon name="ph:moon-duotone" class="h-5 w-5" />
                </BaseButtonIcon>
                <BaseButtonIcon shape="rounded" loading>
                  <Icon name="ph:github-logo-duotone" class="h-5 w-5" />
                </BaseButtonIcon>
                <BaseButtonIcon shape="curved" loading>
                  <Icon name="ph:game-controller-duotone" class="h-5 w-5" />
                </BaseButtonIcon>
                <BaseButtonIcon shape="full" loading>
                  <Icon name="ph:heart-duotone" class="h-5 w-5" />
                </BaseButtonIcon>
              </BaseFocusLoop>
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
              <BaseFocusLoop class="flex flex-wrap items-end">
                <BaseButtonIcon
                  shape="curved"
                  class="rounded-r-none border-r-0 focus:z-10"
                >
                  <Icon name="ph:moon-duotone" class="h-5 w-5" />
                </BaseButtonIcon>
                <BaseButtonIcon shape="straight" class="focus:z-10">
                  <Icon name="ph:github-logo-duotone" class="h-5 w-5" />
                </BaseButtonIcon>
                <BaseButtonIcon shape="straight" class="border-l-0 focus:z-10">
                  <Icon name="ph:game-controller-duotone" class="h-5 w-5" />
                </BaseButtonIcon>
                <BaseButtonIcon
                  shape="curved"
                  class="rounded-l-none border-l-0 focus:z-10"
                >
                  <Icon name="ph:heart-duotone" class="h-5 w-5" />
                </BaseButtonIcon>
              </BaseFocusLoop>
            </template>
            <template #code>
              <DocCode language="html" :code="group" />
            </template>
          </DocComponent>
        </DocSection>

        <!-- properties -->
        <DocComponentMeta name="BaseButtonIcon" />
      </template>
      <!-- Toc -->
      <template #toc>
        <DocToc />
      </template>
    </DocLayout>
  </div>
</template>
