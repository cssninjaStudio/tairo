<script setup lang="ts">
import { breadcrumb, toc } from '@@/documentation/elements/button/toc'
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
import { properties } from '@@/documentation/elements/button/properties'

definePageMeta({
  title: 'Buttons',
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
                <BaseButton
                  rel=""
                  target=""
                  to="https://google.com"
                  shape="full"
                >
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
                  <BaseIcon name="lucide:moon" class="w-4 h-4 -ml-1" />
                  <span>Button</span>
                </BaseButton>
                <BaseButton shape="rounded" color="primary">
                  <span>Button</span>
                  <BaseIcon name="lucide:arrow-right" class="w-4 h-4 mr-1" />
                </BaseButton>
                <BaseButton shape="rounded" color="success">
                  <BaseIcon name="cib:envato" class="w-4 h-4 -ml-1" />
                  <span>Button</span>
                </BaseButton>
                <BaseButton shape="rounded" color="info">
                  <BaseIcon name="fa:twitter" class="w-4 h-4 -ml-1" />
                  <span>Button</span>
                </BaseButton>
                <BaseButton shape="rounded" color="warning">
                  <BaseIcon name="ion:shapes" class="w-4 h-4 -ml-1" />
                  <span>Button</span>
                </BaseButton>
                <BaseButton shape="rounded" color="danger">
                  <BaseIcon name="ph:heart-duotone" class="w-4 h-4 -ml-1" />
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
                  <BaseIcon name="lucide:edit-3" class="w-3 h-3 -ml-1" />
                  <span>Edit</span>
                </BaseButton>
                <BaseButton shape="rounded" color="default">
                  <BaseIcon name="lucide:eye" class="w-3 h-3 -ml-1" />
                  <span>View</span>
                </BaseButton>
                <BaseButton shape="rounded" color="primary" flavor="outline">
                  <BaseIcon name="lucide:share-2" class="w-3 h-3 -ml-1" />
                  <span>Share</span>
                </BaseButton>
              </div>
            </template>
            <template #code>
              <DocCode language="html" :code="group" />
            </template>
          </DocComponent>
        </DocSection>

        <!-- Button properties -->
        <DocProps
          id="button-props"
          component="Button"
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
