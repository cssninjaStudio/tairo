<script setup lang="ts">
import group from '~/documentation/icon-button/group.md?raw'
import loading from '~/documentation/icon-button/loading.md?raw'
import muted from '~/documentation/icon-button/muted.md?raw'
import primary from '~/documentation/icon-button/primary.md?raw'
import shapes from '~/documentation/icon-button/shapes.md?raw'
import small from '~/documentation/icon-button/small.md?raw'

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
              <DocMarkdown :source="shapes" class="prose max-w-full" />
            </template>
          </DocComponent>
        </DocSection>

        <!-- Icon button small size -->
        <DocSection title="Small size" tag="1.0.0">
          <DocComponent label="Smaller icon buttons">
            <template #demo>
              <BaseFocusLoop class="flex flex-wrap items-end gap-2">
                <BaseButtonIcon shape="straight" small>
                  <Icon name="ph:moon-duotone" class="h-5 w-5" />
                </BaseButtonIcon>
                <BaseButtonIcon shape="rounded" small>
                  <Icon name="ph:github-logo-duotone" class="h-5 w-5" />
                </BaseButtonIcon>
                <BaseButtonIcon shape="curved" small>
                  <Icon name="ph:game-controller-duotone" class="h-5 w-5" />
                </BaseButtonIcon>
                <BaseButtonIcon shape="full" small>
                  <Icon name="ph:heart-duotone" class="h-5 w-5" />
                </BaseButtonIcon>
              </BaseFocusLoop>
            </template>
            <template #code>
              <DocMarkdown :source="small" class="prose max-w-full" />
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
              <DocMarkdown :source="primary" class="prose max-w-full" />
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
              <DocMarkdown :source="muted" class="prose max-w-full" />
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
              <DocMarkdown :source="loading" class="prose max-w-full" />
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
              <DocMarkdown :source="group" class="prose max-w-full" />
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
