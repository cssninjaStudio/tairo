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
              <div class="flex items-end flex-wrap gap-2">
                <BaseIconButton shape="straight">
                  <i class="i-ph-moon-duotone w-5 h-5"></i>
                </BaseIconButton>
                <BaseIconButton shape="rounded">
                  <i class="i-ph-github-logo-duotone w-5 h-5"></i>
                </BaseIconButton>
                <BaseIconButton shape="curved">
                  <i class="i-ph-game-controller-duotone w-5 h-5"></i>
                </BaseIconButton>
                <BaseIconButton shape="full">
                  <i class="i-ph-heart-duotone w-5 h-5"></i>
                </BaseIconButton>
              </div>
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
              <div class="flex items-end flex-wrap gap-2">
                <BaseIconButton shape="straight" primary>
                  <i class="i-ph-moon-duotone w-5 h-5"></i>
                </BaseIconButton>
                <BaseIconButton shape="rounded" primary>
                  <i class="i-ph-github-logo-duotone w-5 h-5"></i>
                </BaseIconButton>
                <BaseIconButton shape="curved" primary>
                  <i class="i-ph-game-controller-duotone w-5 h-5"></i>
                </BaseIconButton>
                <BaseIconButton shape="full" primary>
                  <i class="i-ph-heart-duotone w-5 h-5"></i>
                </BaseIconButton>
              </div>
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
              <div class="flex items-end flex-wrap gap-2">
                <BaseIconButton shape="straight" muted>
                  <i class="i-ph-moon-duotone w-5 h-5"></i>
                </BaseIconButton>
                <BaseIconButton shape="rounded" muted>
                  <i class="i-ph-github-logo-duotone w-5 h-5"></i>
                </BaseIconButton>
                <BaseIconButton shape="curved" muted>
                  <i class="i-ph-game-controller-duotone w-5 h-5"></i>
                </BaseIconButton>
                <BaseIconButton shape="full" muted>
                  <i class="i-ph-heart-duotone w-5 h-5"></i>
                </BaseIconButton>
              </div>
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
              <div class="flex items-end flex-wrap gap-2">
                <BaseIconButton shape="straight" loading>
                  <i class="i-ph-moon-duotone w-5 h-5"></i>
                </BaseIconButton>
                <BaseIconButton shape="rounded" loading>
                  <i class="i-ph-github-logo-duotone w-5 h-5"></i>
                </BaseIconButton>
                <BaseIconButton shape="curved" loading>
                  <i class="i-ph-game-controller-duotone w-5 h-5"></i>
                </BaseIconButton>
                <BaseIconButton shape="full" loading>
                  <i class="i-ph-heart-duotone w-5 h-5"></i>
                </BaseIconButton>
              </div>
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
              <div class="flex items-end flex-wrap">
                <BaseIconButton
                  shape="curved"
                  class="focus:z-10 rounded-r-none border-r-0"
                >
                  <i class="i-ph-moon-duotone w-5 h-5"></i>
                </BaseIconButton>
                <BaseIconButton shape="straight" class="focus:z-10">
                  <i class="i-ph-github-logo-duotone w-5 h-5"></i>
                </BaseIconButton>
                <BaseIconButton shape="straight" class="focus:z-10 border-l-0">
                  <i class="i-ph-game-controller-duotone w-5 h-5"></i>
                </BaseIconButton>
                <BaseIconButton
                  shape="curved"
                  class="focus:z-10 rounded-l-none border-l-0"
                >
                  <i class="i-ph-heart-duotone w-5 h-5"></i>
                </BaseIconButton>
              </div>
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
