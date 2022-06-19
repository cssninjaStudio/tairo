<script setup lang="ts">
import { toc } from '@@/documentation/elements/button/toc'
import {
  disabled,
  group,
  icons,
  links,
  loading,
  outline,
  pastel,
  shapes,
  solid,
} from '@@/documentation/elements/button'

definePageMeta({
  title: 'Buttons',
})

const breadcrumb = [
  {
    label: 'Home',
    hideLabel: true,
    icon: 'i-lucide-home',
    hideIcon: false,
    to: '/',
  },
  {
    label: 'Elements',
    hideLabel: false,
    icon: '',
    hideIcon: true,
    to: '/elements',
  },
  {
    label: 'Button',
    hideLabel: false,
    icon: '',
    hideIcon: true,
    to: '/button',
  },
]
</script>

<template>
  <div>
    <!-- BreadCrumb -->
    <BaseBreadcrumb :items="breadcrumb" separator="dot" />

    <!-- Documentation Layout -->
    <DocLayout>
      <!-- content -->
      <template #content>
        <!-- Button shapes -->
        <DocSection id="button-shapes" title="Buttons shapes" tag="1.0.0">
          <DocComponent label="Default button shapes">
            <template #demo>
              <div class="flex items-end flex-wrap gap-4">
                <BaseButton shape="straight">Button</BaseButton>
                <BaseButton shape="rounded">Button</BaseButton>
                <BaseButton shape="curved">Button</BaseButton>
                <BaseButton shape="full">Button</BaseButton>
              </div>
            </template>
            <template #code>
              <DocCode language="html" :code="shapes" />
            </template>
          </DocComponent>
        </DocSection>

        <!-- Button links -->
        <DocSection id="button-links" title="Link buttons" tag="1.0.0">
          <DocComponent label="Button shaped links">
            <template #demo>
              <div class="flex items-end flex-wrap gap-4">
                <BaseButton to="/elements/button" shape="straight">
                  Button
                </BaseButton>
                <BaseButton to="/elements/button" shape="rounded">
                  Button
                </BaseButton>
                <BaseButton to="https://cssninja.io" shape="curved">
                  Button
                </BaseButton>
                <BaseButton to="https://google.com" shape="full">
                  Button
                </BaseButton>
              </div>
            </template>
            <template #code>
              <DocCode language="html" :code="links" />
            </template>
          </DocComponent>
        </DocSection>

        <!-- Solid colors -->
        <DocSection id="solid-colors" title="Solid colors" tag="1.0.0">
          <DocComponent label="Solid button colors">
            <template #demo>
              <div class="flex items-end flex-wrap gap-4">
                <BaseButton shape="rounded" color="primary">Button</BaseButton>
                <BaseButton shape="rounded" color="success">Button</BaseButton>
                <BaseButton shape="rounded" color="info">Button</BaseButton>
                <BaseButton shape="rounded" color="warning">Button</BaseButton>
                <BaseButton shape="rounded" color="danger">Button</BaseButton>
                <BaseButton shape="rounded" color="muted">Button</BaseButton>
              </div>
            </template>
            <template #code>
              <DocCode language="html" :code="solid" />
            </template>
          </DocComponent>
        </DocSection>

        <!-- Pastel colors -->
        <DocSection id="pastel-colors" title="Pastel colors" tag="1.0.0">
          <DocComponent label="Pastel button colors">
            <template #demo>
              <div class="flex items-end flex-wrap gap-4">
                <BaseButton shape="rounded" color="primary" flavor="pastel">
                  Button
                </BaseButton>
                <BaseButton shape="rounded" color="success" flavor="pastel">
                  Button
                </BaseButton>
                <BaseButton shape="rounded" color="info" flavor="pastel">
                  Button
                </BaseButton>
                <BaseButton shape="rounded" color="warning" flavor="pastel">
                  Button
                </BaseButton>
                <BaseButton shape="rounded" color="danger" flavor="pastel">
                  Button
                </BaseButton>
              </div>
            </template>
            <template #code>
              <DocCode language="html" :code="pastel" />
            </template>
          </DocComponent>
        </DocSection>

        <!-- Outline colors -->
        <DocSection id="outline-colors" title="Outline colors" tag="1.0.0">
          <DocComponent label="Outline button colors">
            <template #demo>
              <div class="flex items-end flex-wrap gap-4">
                <BaseButton shape="rounded" color="primary" flavor="outline">
                  Button
                </BaseButton>
                <BaseButton shape="rounded" color="success" flavor="outline">
                  Button
                </BaseButton>
                <BaseButton shape="rounded" color="info" flavor="outline">
                  Button
                </BaseButton>
                <BaseButton shape="rounded" color="warning" flavor="outline">
                  Button
                </BaseButton>
                <BaseButton shape="rounded" color="danger" flavor="outline">
                  Button
                </BaseButton>
              </div>
            </template>
            <template #code>
              <DocCode language="html" :code="outline" />
            </template>
          </DocComponent>
        </DocSection>

        <!-- Loading -->
        <DocSection id="button-loading" title="Loading state" tag="1.0.0">
          <DocComponent label="Button placeload insertion">
            <template #demo>
              <div class="flex items-end flex-wrap gap-4">
                <BaseButton shape="rounded" color="default" loading>
                  Button
                </BaseButton>
                <BaseButton shape="rounded" color="primary" loading>
                  Button
                </BaseButton>
                <BaseButton shape="rounded" color="success" loading>
                  Button
                </BaseButton>
                <BaseButton shape="rounded" color="info" loading>
                  Button
                </BaseButton>
                <BaseButton shape="rounded" color="warning" loading>
                  Button
                </BaseButton>
                <BaseButton shape="rounded" color="danger" loading>
                  Button
                </BaseButton>
              </div>
            </template>
            <template #code>
              <DocCode language="html" :code="loading" />
            </template>
          </DocComponent>
        </DocSection>

        <!-- Icons -->
        <DocSection id="button-icons" title="With icons" tag="1.0.0">
          <DocComponent label="Button icons insertion">
            <template #demo>
              <div class="flex items-end flex-wrap gap-4">
                <BaseButton shape="rounded" color="default">
                  <i class="i-lucide-moon w-4 h-4 -ml-1"></i>
                  <span>Button</span>
                </BaseButton>
                <BaseButton shape="rounded" color="primary">
                  <span>Button</span>
                  <i class="i-lucide-arrow-right w-4 h-4 mr-1"></i>
                </BaseButton>
                <BaseButton shape="rounded" color="success">
                  <i class="i-cib-envato w-4 h-4 -ml-1"></i>
                  <span>Button</span>
                </BaseButton>
                <BaseButton shape="rounded" color="info">
                  <i class="i-fa-twitter w-4 h-4 -ml-1"></i>
                  <span>Button</span>
                </BaseButton>
                <BaseButton shape="rounded" color="warning">
                  <i class="i-ion-shapes w-4 h-4 -ml-1"></i>
                  <span>Button</span>
                </BaseButton>
                <BaseButton shape="rounded" color="danger">
                  <i class="i-ph-heart-duotone w-4 h-4 -ml-1"></i>
                  <span>Button</span>
                </BaseButton>
              </div>
            </template>
            <template #code>
              <DocCode language="html" :code="icons" />
            </template>
          </DocComponent>
        </DocSection>

        <!-- Disabled -->
        <DocSection id="button-disabled" title="Disabled state" tag="1.0.0">
          <DocComponent label="Button disabled state">
            <template #demo>
              <div class="flex items-end flex-wrap gap-4">
                <BaseButton shape="rounded" color="default" disabled>
                  Button
                </BaseButton>
                <BaseButton shape="rounded" color="primary" disabled>
                  Button
                </BaseButton>
                <BaseButton shape="rounded" color="success" disabled>
                  Button
                </BaseButton>
                <BaseButton shape="rounded" color="info" disabled>
                  Button
                </BaseButton>
                <BaseButton shape="rounded" color="warning" disabled>
                  Button
                </BaseButton>
                <BaseButton shape="rounded" color="danger" disabled>
                  Button
                </BaseButton>
              </div>
            </template>
            <template #code>
              <DocCode language="html" :code="disabled" />
            </template>
          </DocComponent>
        </DocSection>

        <!-- Button group -->
        <DocSection id="button-group" title="Button group" tag="1.0.0">
          <DocComponent label="Setting a button group">
            <template #demo>
              <div class="flex items-end flex-wrap gap-2">
                <BaseButton shape="rounded" color="default">
                  <i class="i-lucide-edit-3 w-3 h-3 -ml-1"></i>
                  <span>Edit</span>
                </BaseButton>
                <BaseButton shape="rounded" color="default">
                  <i class="i-lucide-eye w-3 h-3 -ml-1"></i>
                  <span>View</span>
                </BaseButton>
                <BaseButton shape="rounded" color="primary" flavor="outline">
                  <i class="i-lucide-share-2 w-3 h-3 -ml-1"></i>
                  <span>Share</span>
                </BaseButton>
              </div>
            </template>
            <template #code>
              <DocCode language="html" :code="group" />
            </template>
          </DocComponent>
        </DocSection>
      </template>
      <!-- Toc -->
      <template #toc>
        <DocToc :anchors="toc" />
      </template>
    </DocLayout>
  </div>
</template>
