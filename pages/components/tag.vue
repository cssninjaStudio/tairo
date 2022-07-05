<script setup lang="ts">
import { breadcrumb, toc } from '@@/documentation/components/tag/toc'
import { outline, pastel, shapes, solid } from '@@/documentation/components/tag'
import { properties } from '@@/documentation/components/tag/properties'

definePageMeta({
  title: 'Tags',
  documentation: {
    category: 'Display',
    components: ['BaseTag'],
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
        <!-- Tag shapes -->
        <DocSection id="tag-shapes" title="Tag shapes" tag="1.0.0">
          <DocComponent label="Default tag shapes">
            <template #demo>
              <div class="flex items-end flex-wrap gap-1">
                <BaseTag shape="straight">Label</BaseTag>
                <BaseTag shape="rounded">Label</BaseTag>
                <BaseTag shape="curved">Label</BaseTag>
                <BaseTag shape="full">Label</BaseTag>
              </div>
            </template>
            <template #code>
              <DocCode language="html" :code="shapes" />
            </template>
          </DocComponent>
        </DocSection>

        <!-- Tag solid -->
        <DocSection id="tag-solid" title="Solid colors" tag="1.0.0">
          <DocComponent label="Tag solid colors">
            <template #demo>
              <div class="flex items-end flex-wrap gap-1">
                <BaseTag shape="rounded" color="default">Label</BaseTag>
                <BaseTag shape="rounded" muted>Label</BaseTag>
                <BaseTag shape="rounded" color="primary">Label</BaseTag>
                <BaseTag shape="rounded" color="success">Label</BaseTag>
                <BaseTag shape="rounded" color="info">Label</BaseTag>
                <BaseTag shape="rounded" color="warning">Label</BaseTag>
                <BaseTag shape="rounded" color="danger">Label</BaseTag>
              </div>
            </template>
            <template #code>
              <DocCode language="html" :code="solid" />
            </template>
          </DocComponent>
        </DocSection>

        <!-- Tag outline -->
        <DocSection id="tag-outline" title="Outline colors" tag="1.0.0">
          <DocComponent label="Tag outline colors">
            <template #demo>
              <div class="flex items-end flex-wrap gap-1">
                <BaseTag shape="rounded" color="primary" flavor="outline">
                  Label
                </BaseTag>
                <BaseTag shape="rounded" color="success" flavor="outline">
                  Label
                </BaseTag>
                <BaseTag shape="rounded" color="info" flavor="outline">
                  Label
                </BaseTag>
                <BaseTag shape="rounded" color="warning" flavor="outline">
                  Label
                </BaseTag>
                <BaseTag shape="rounded" color="danger" flavor="outline">
                  Label
                </BaseTag>
              </div>
            </template>
            <template #code>
              <DocCode language="html" :code="outline" />
            </template>
          </DocComponent>
        </DocSection>

        <!-- Tag pastel -->
        <DocSection id="tag-pastel" title="Pastel colors" tag="1.0.0">
          <DocComponent label="Tag pastel colors">
            <template #demo>
              <div class="flex items-end flex-wrap gap-1">
                <BaseTag shape="rounded" color="primary" flavor="pastel">
                  Label
                </BaseTag>
                <BaseTag shape="rounded" color="success" flavor="pastel">
                  Label
                </BaseTag>
                <BaseTag shape="rounded" color="info" flavor="pastel">
                  Label
                </BaseTag>
                <BaseTag shape="rounded" color="warning" flavor="pastel">
                  Label
                </BaseTag>
                <BaseTag shape="rounded" color="danger" flavor="pastel">
                  Label
                </BaseTag>
              </div>
            </template>
            <template #code>
              <DocCode language="html" :code="pastel" />
            </template>
          </DocComponent>
        </DocSection>

        <!-- Tag props -->
        <DocProps
          id="tag-props"
          component="Tag"
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
