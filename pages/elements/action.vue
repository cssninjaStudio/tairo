<script setup lang="ts">
import { breadcrumb, toc } from '@@/documentation/elements/action/toc'
import { group, loading, muted, shapes } from '@@/documentation/elements/action'
import { properties } from '@@/documentation/elements/action/properties'

const disabled = ref(true)

definePageMeta({
  title: 'Actions',
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
        <!-- Action shapes -->
        <DocSection id="action-shapes" title="Actions shapes" tag="1.0.0">
          <DocComponent label="Default action shapes">
            <template #demo>
              <FocusLoop class="flex items-end flex-wrap gap-2">
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
        <DocSection id="action-muted" title="Muted actions" tag="1.0.0">
          <DocComponent label="Muted action variation">
            <template #demo>
              <FocusLoop class="flex items-end flex-wrap gap-2">
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
        <DocSection id="action-loading" title="Loading state" tag="1.0.0">
          <DocComponent label="Action loading variation">
            <template #demo>
              <FocusLoop class="flex items-end flex-wrap gap-2">
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
        <DocSection id="action-group" title="Actions group" tag="1.0.0">
          <DocComponent label="Actions inside a group">
            <template #demo>
              <FocusLoop class="flex items-end">
                <BaseButtonAction
                  shape="rounded"
                  class="focus:z-10 rounded-r-none border-r-0"
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
                  class="focus:z-10 rounded-l-none border-l-0"
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
          id="action-props"
          component="Action"
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
