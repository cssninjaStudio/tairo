<script setup lang="ts">
import { breadcrumb, toc } from '@@/documentation/elements/action/toc'
import { group, loading, muted, shapes } from '@@/documentation/elements/action'
import { properties } from '@@/documentation/elements/action/properties'

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
              <div class="flex items-end flex-wrap gap-2">
                <BaseAction shape="straight">Action</BaseAction>
                <BaseAction shape="rounded">Action</BaseAction>
                <BaseAction shape="curved">Action</BaseAction>
                <BaseAction shape="full">Action</BaseAction>
              </div>
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
              <div class="flex items-end flex-wrap gap-2">
                <BaseAction shape="straight" muted>Action</BaseAction>
                <BaseAction shape="rounded" muted>Action</BaseAction>
                <BaseAction shape="curved" muted>Action</BaseAction>
                <BaseAction shape="full" muted>Action</BaseAction>
              </div>
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
              <div class="flex items-end flex-wrap gap-2">
                <BaseAction shape="straight" loading>Action</BaseAction>
                <BaseAction shape="rounded" loading>Action</BaseAction>
                <BaseAction shape="curved" loading>Action</BaseAction>
                <BaseAction shape="full" loading>Action</BaseAction>
              </div>
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
              <div class="flex items-end">
                <BaseAction
                  shape="rounded"
                  class="focus:z-10 rounded-r-none border-r-0"
                >
                  View
                </BaseAction>
                <BaseAction shape="straight" class="focus:z-10">
                  Edit
                </BaseAction>
                <BaseAction
                  shape="rounded"
                  class="focus:z-10 rounded-l-none border-l-0"
                >
                  Share
                </BaseAction>
              </div>
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
