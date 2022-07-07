<script setup lang="ts">
import { breadcrumb, toc } from '@@/documentation/components/button/toc'
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
} from '@@/documentation/components/button'
import { properties } from '@@/documentation/components/button/properties'

definePageMeta({
  title: 'Buttons',
  documentation: {
    category: 'Interaction',
    components: ['BaseButton'],
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
        <!-- Button shapes -->
        <DocSection id="button-shapes" title="Buttons shapes" tag="1.0.0">
          <DocComponent label="Default button shapes">
            <template #demo>
              <FocusLoop class="flex items-end flex-wrap gap-4">
                <BaseButton shape="straight">Button</BaseButton>
                <BaseButton>Button</BaseButton>
                <BaseButton shape="curved">Button</BaseButton>
                <BaseButton shape="full">Button</BaseButton>
              </FocusLoop>
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
              <FocusLoop class="flex items-end flex-wrap gap-4">
                <BaseButton to="/components/button" shape="straight">
                  Button
                </BaseButton>
                <BaseButton to="/components/button">Button</BaseButton>
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
              </FocusLoop>
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
              <FocusLoop class="flex items-end flex-wrap gap-4">
                <BaseButton>Button</BaseButton>
                <BaseButton color="primary">Button</BaseButton>
                <BaseButton color="success">Button</BaseButton>
                <BaseButton color="info">Button</BaseButton>
                <BaseButton color="warning">Button</BaseButton>
                <BaseButton color="danger">Button</BaseButton>
                <BaseButton muted>Button</BaseButton>
              </FocusLoop>
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
              <FocusLoop class="flex items-end flex-wrap gap-4">
                <BaseButton color="primary" flavor="pastel">Button</BaseButton>
                <BaseButton color="success" flavor="pastel">Button</BaseButton>
                <BaseButton color="info" flavor="pastel">Button</BaseButton>
                <BaseButton color="warning" flavor="pastel">Button</BaseButton>
                <BaseButton color="danger" flavor="pastel">Button</BaseButton>
              </FocusLoop>
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
              <FocusLoop class="flex items-end flex-wrap gap-4">
                <BaseButton color="primary" flavor="outline">Button</BaseButton>
                <BaseButton color="success" flavor="outline">Button</BaseButton>
                <BaseButton color="info" flavor="outline">Button</BaseButton>
                <BaseButton color="warning" flavor="outline">Button</BaseButton>
                <BaseButton color="danger" flavor="outline">Button</BaseButton>
              </FocusLoop>
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
              <FocusLoop class="flex items-end flex-wrap gap-4">
                <BaseButton color="default" loading>Button</BaseButton>
                <BaseButton color="primary" loading>Button</BaseButton>
                <BaseButton color="success" loading>Button</BaseButton>
                <BaseButton color="info" loading>Button</BaseButton>
                <BaseButton color="warning" loading>Button</BaseButton>
                <BaseButton color="danger" loading>Button</BaseButton>
              </FocusLoop>
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
              <FocusLoop class="flex items-end flex-wrap gap-4">
                <BaseButton color="default">
                  <BaseIcon name="lucide:moon" class="w-4 h-4 -ml-1" />
                  <span>Button</span>
                </BaseButton>
                <BaseButton color="primary">
                  <span>Button</span>
                  <BaseIcon name="lucide:arrow-right" class="w-4 h-4 mr-1" />
                </BaseButton>
                <BaseButton color="success">
                  <BaseIcon name="cib:envato" class="w-4 h-4 -ml-1" />
                  <span>Button</span>
                </BaseButton>
                <BaseButton color="info">
                  <BaseIcon name="fa:twitter" class="w-4 h-4 -ml-1" />
                  <span>Button</span>
                </BaseButton>
                <BaseButton color="warning">
                  <BaseIcon name="ion:shapes" class="w-4 h-4 -ml-1" />
                  <span>Button</span>
                </BaseButton>
                <BaseButton color="danger">
                  <BaseIcon name="ph:heart-duotone" class="w-4 h-4 -ml-1" />
                  <span>Button</span>
                </BaseButton>
              </FocusLoop>
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
              <FocusLoop class="flex items-end flex-wrap gap-4">
                <BaseButton color="default" disabled>Button</BaseButton>
                <BaseButton color="primary" disabled>Button</BaseButton>
                <BaseButton color="success" disabled>Button</BaseButton>
                <BaseButton color="info" disabled>Button</BaseButton>
                <BaseButton color="warning" disabled>Button</BaseButton>
                <BaseButton color="danger" disabled>Button</BaseButton>
              </FocusLoop>
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
              <FocusLoop class="flex items-end flex-wrap gap-2">
                <BaseButton color="default">
                  <BaseIcon name="lucide:edit-3" class="w-3 h-3 -ml-1" />
                  <span>Edit</span>
                </BaseButton>
                <BaseButton color="default">
                  <BaseIcon name="lucide:eye" class="w-3 h-3 -ml-1" />
                  <span>View</span>
                </BaseButton>
                <BaseButton color="primary" flavor="outline">
                  <BaseIcon name="lucide:share-2" class="w-3 h-3 -ml-1" />
                  <span>Share</span>
                </BaseButton>
              </FocusLoop>
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
