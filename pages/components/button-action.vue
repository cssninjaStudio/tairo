<script setup lang="ts">
import { breadcrumb, toc } from '@@/documentation/components/action/toc'
import {
  group,
  loading,
  muted,
  shapes,
} from '@@/documentation/components/action'
import { properties } from '@@/documentation/components/action/properties'

const disabled = ref(true)

definePageMeta({
  title: 'Button Action',
  documentation: {
    category: 'Interaction',
    components: ['BaseButtonAction'],
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
        <!-- Action shapes -->
        <DocSection title="Actions shapes" tag="1.0.0">
          <DocComponent label="Default action shapes">
            <template #demo>
              <FocusLoop class="flex flex-wrap items-end gap-2">
                <BaseButtonAction shape="straight">Action</BaseButtonAction>
                <BaseButtonAction shape="rounded">Action</BaseButtonAction>
                <BaseButtonAction shape="curved">Action</BaseButtonAction>
                <BaseButtonAction shape="full">Action</BaseButtonAction>
              </FocusLoop>
            </template>
            <template #code>
              <DocCode language="html" :code="shapes" />
            </template>
          </DocComponent>
        </DocSection>

        <!-- Action muted -->
        <DocSection title="Muted actions" tag="1.0.0">
          <DocComponent label="Muted action variation">
            <template #demo>
              <FocusLoop class="flex flex-wrap items-end gap-2">
                <BaseButtonAction shape="straight" muted>
                  Action
                </BaseButtonAction>
                <BaseButtonAction shape="rounded" muted>
                  Action
                </BaseButtonAction>
                <BaseButtonAction shape="curved" muted>Action</BaseButtonAction>
                <BaseButtonAction shape="full" muted>Action</BaseButtonAction>
              </FocusLoop>
            </template>
            <template #code>
              <DocCode language="html" :code="muted" />
            </template>
          </DocComponent>
        </DocSection>

        <!-- Action loading -->
        <DocSection title="Loading state" tag="1.0.0">
          <DocComponent label="Action loading variation">
            <template #demo>
              <FocusLoop class="flex flex-wrap items-end gap-2">
                <BaseButtonAction shape="straight" loading>
                  Action
                </BaseButtonAction>
                <BaseButtonAction shape="rounded" loading>
                  Action
                </BaseButtonAction>
                <BaseButtonAction shape="curved" loading>
                  Action
                </BaseButtonAction>
                <BaseButtonAction shape="full" loading>Action</BaseButtonAction>
              </FocusLoop>
            </template>
            <template #code>
              <DocCode language="html" :code="loading" />
            </template>
          </DocComponent>
        </DocSection>
        <!-- Action group -->
        <DocSection title="Actions group" tag="1.0.0">
          <DocComponent label="Actions inside a group">
            <template #demo>
              <FocusLoop class="flex items-end">
                <BaseButtonAction
                  shape="rounded"
                  class="rounded-r-none border-r-0 focus:z-10"
                  @click="disabled = !disabled"
                >
                  View
                </BaseButtonAction>
                <BaseButtonAction shape="straight" class="focus:z-10">
                  <BaseIcon name="ph:pen" class="h-4 w-4" />
                </BaseButtonAction>
                <BaseButtonAction muted shape="straight" class="focus:z-10">
                  Muted
                </BaseButtonAction>
                <BaseButtonAction
                  :disabled="disabled"
                  shape="straight"
                  class="focus:z-10"
                >
                  Disabled
                </BaseButtonAction>
                <BaseButtonAction
                  shape="rounded"
                  class="rounded-l-none border-l-0 focus:z-10"
                >
                  Share
                </BaseButtonAction>
              </FocusLoop>
            </template>
            <template #code>
              <DocCode language="html" :code="group" />
            </template>
          </DocComponent>
        </DocSection>

        <!-- Action properties -->
        <DocProps
          component="BaseButtonAction"
          :properties="properties.props"
          :slots="properties.slots"
        />
      </template>
      <!-- Toc -->
      <template #toc>
        <DocToc />
      </template>
    </DocLayout>
  </div>
</template>
