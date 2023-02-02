<script setup lang="ts">
import disabled from '~/documentation/button/disabled.md?raw'
import group from '~/documentation/button/group.md?raw'
import icons from '~/documentation/button/icons.md?raw'
import links from '~/documentation/button/links.md?raw'
import loading from '~/documentation/button/loading.md?raw'
import outline from '~/documentation/button/outline.md?raw'
import pastel from '~/documentation/button/pastel.md?raw'
import shapes from '~/documentation/button/shapes.md?raw'
import solid from '~/documentation/button/solid.md?raw'

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
        <DocSection title="Buttons shapes" tag="1.0.0">
          <DocComponent label="Default button shapes">
            <template #demo>
              <BaseFocusLoop class="flex flex-wrap items-end gap-4">
                <BaseButton shape="straight">Button</BaseButton>
                <BaseButton>Button</BaseButton>
                <BaseButton shape="curved">Button</BaseButton>
                <BaseButton shape="full">Button</BaseButton>
              </BaseFocusLoop>
            </template>
            <template #code>
              <DocMarkdown :source="shapes" class="prose max-w-full" />
            </template>
          </DocComponent>
        </DocSection>

        <!-- Button links -->
        <DocSection title="Link buttons" tag="1.0.0">
          <DocComponent label="Button shaped links">
            <template #demo>
              <BaseFocusLoop class="flex flex-wrap items-end gap-4">
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
              </BaseFocusLoop>
            </template>
            <template #code>
              <DocMarkdown :source="links" class="prose max-w-full" />
            </template>
          </DocComponent>
        </DocSection>

        <!-- Solid colors -->
        <DocSection title="Solid colors" tag="1.0.0">
          <DocComponent label="Solid button colors">
            <template #demo>
              <BaseFocusLoop class="flex flex-wrap items-end gap-4">
                <BaseButton>Button</BaseButton>
                <BaseButton color="primary">Button</BaseButton>
                <BaseButton color="success">Button</BaseButton>
                <BaseButton color="info">Button</BaseButton>
                <BaseButton color="warning">Button</BaseButton>
                <BaseButton color="danger">Button</BaseButton>
                <BaseButton muted>Button</BaseButton>
              </BaseFocusLoop>
            </template>
            <template #code>
              <DocMarkdown :source="solid" class="prose max-w-full" />
            </template>
          </DocComponent>
        </DocSection>

        <!-- Pastel colors -->
        <DocSection title="Pastel colors" tag="1.0.0">
          <DocComponent label="Pastel button colors">
            <template #demo>
              <BaseFocusLoop class="flex flex-wrap items-end gap-4">
                <BaseButton color="primary" flavor="pastel">Button</BaseButton>
                <BaseButton color="success" flavor="pastel">Button</BaseButton>
                <BaseButton color="info" flavor="pastel">Button</BaseButton>
                <BaseButton color="warning" flavor="pastel">Button</BaseButton>
                <BaseButton color="danger" flavor="pastel">Button</BaseButton>
              </BaseFocusLoop>
            </template>
            <template #code>
              <DocMarkdown :source="pastel" class="prose max-w-full" />
            </template>
          </DocComponent>
        </DocSection>

        <!-- Outline colors -->
        <DocSection title="Outline colors" tag="1.0.0">
          <DocComponent label="Outline button colors">
            <template #demo>
              <BaseFocusLoop class="flex flex-wrap items-end gap-4">
                <BaseButton color="primary" flavor="outline">Button</BaseButton>
                <BaseButton color="success" flavor="outline">Button</BaseButton>
                <BaseButton color="info" flavor="outline">Button</BaseButton>
                <BaseButton color="warning" flavor="outline">Button</BaseButton>
                <BaseButton color="danger" flavor="outline">Button</BaseButton>
              </BaseFocusLoop>
            </template>
            <template #code>
              <DocMarkdown :source="outline" class="prose max-w-full" />
            </template>
          </DocComponent>
        </DocSection>

        <!-- Loading -->
        <DocSection title="Loading state" tag="1.0.0">
          <DocComponent label="Button placeload insertion">
            <template #demo>
              <BaseFocusLoop class="flex flex-wrap items-end gap-4">
                <BaseButton color="default" loading>Button</BaseButton>
                <BaseButton color="primary" loading>Button</BaseButton>
                <BaseButton color="success" loading>Button</BaseButton>
                <BaseButton color="info" loading>Button</BaseButton>
                <BaseButton color="warning" loading>Button</BaseButton>
                <BaseButton color="danger" loading>Button</BaseButton>
              </BaseFocusLoop>
            </template>
            <template #code>
              <DocMarkdown :source="loading" class="prose max-w-full" />
            </template>
          </DocComponent>
        </DocSection>

        <!-- Icons -->
        <DocSection title="With icons" tag="1.0.0">
          <DocComponent label="Button icons insertion">
            <template #demo>
              <BaseFocusLoop class="flex flex-wrap items-end gap-4">
                <BaseButton color="default">
                  <Icon name="lucide:moon" class="-ml-1 h-4 w-4" />
                  <span>Button</span>
                </BaseButton>
                <BaseButton color="primary">
                  <span>Button</span>
                  <Icon name="lucide:arrow-right" class="mr-1 h-4 w-4" />
                </BaseButton>
                <BaseButton color="success">
                  <Icon name="cib:envato" class="-ml-1 h-4 w-4" />
                  <span>Button</span>
                </BaseButton>
                <BaseButton color="info">
                  <Icon name="fa:twitter" class="-ml-1 h-4 w-4" />
                  <span>Button</span>
                </BaseButton>
                <BaseButton color="warning">
                  <Icon name="ion:shapes" class="-ml-1 h-4 w-4" />
                  <span>Button</span>
                </BaseButton>
                <BaseButton color="danger">
                  <Icon name="ph:heart-duotone" class="-ml-1 h-4 w-4" />
                  <span>Button</span>
                </BaseButton>
              </BaseFocusLoop>
            </template>
            <template #code>
              <DocMarkdown :source="icons" class="prose max-w-full" />
            </template>
          </DocComponent>
        </DocSection>

        <!-- Disabled -->
        <DocSection title="Disabled state" tag="1.0.0">
          <DocComponent label="Button disabled state">
            <template #demo>
              <BaseFocusLoop class="flex flex-wrap items-end gap-4">
                <BaseButton color="default" disabled>Button</BaseButton>
                <BaseButton color="primary" disabled>Button</BaseButton>
                <BaseButton color="success" disabled>Button</BaseButton>
                <BaseButton color="info" disabled>Button</BaseButton>
                <BaseButton color="warning" disabled>Button</BaseButton>
                <BaseButton color="danger" disabled>Button</BaseButton>
              </BaseFocusLoop>
            </template>
            <template #code>
              <DocMarkdown :source="disabled" class="prose max-w-full" />
            </template>
          </DocComponent>
        </DocSection>

        <!-- Button group -->
        <DocSection title="Button group" tag="1.0.0">
          <DocComponent label="Setting a button group">
            <template #demo>
              <BaseFocusLoop class="flex flex-wrap items-end gap-2">
                <BaseButton color="default">
                  <Icon name="lucide:edit-3" class="-ml-1 h-3 w-3" />
                  <span>Edit</span>
                </BaseButton>
                <BaseButton color="default">
                  <Icon name="lucide:eye" class="-ml-1 h-3 w-3" />
                  <span>View</span>
                </BaseButton>
                <BaseButton color="primary" flavor="outline">
                  <Icon name="lucide:share-2" class="-ml-1 h-3 w-3" />
                  <span>Share</span>
                </BaseButton>
              </BaseFocusLoop>
            </template>
            <template #code>
              <DocMarkdown :source="group" class="prose max-w-full" />
            </template>
          </DocComponent>
        </DocSection>

        <DocComponentMeta name="BaseButton" />
      </template>
      <!-- Toc -->
      <template #toc>
        <DocToc />
      </template>
    </DocLayout>
  </div>
</template>
