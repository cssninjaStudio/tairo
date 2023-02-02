<script setup lang="ts">
import outline from '~/documentation/tag/outline.md?raw'
import pastel from '~/documentation/tag/pastel.md?raw'
import shapes from '~/documentation/tag/shapes.md?raw'
import solid from '~/documentation/tag/solid.md?raw'

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
        <DocSection title="Tag shapes" tag="1.0.0">
          <DocComponent label="Default tag shapes">
            <template #demo>
              <div class="flex flex-wrap items-end gap-1">
                <BaseTag shape="straight">Label</BaseTag>
                <BaseTag shape="rounded">Label</BaseTag>
                <BaseTag shape="curved">Label</BaseTag>
                <BaseTag shape="full">Label</BaseTag>
              </div>
            </template>
            <template #code>
              <DocMarkdown :source="shapes" class="prose max-w-full" />
            </template>
          </DocComponent>
        </DocSection>

        <!-- Tag solid -->
        <DocSection title="Solid colors" tag="1.0.0">
          <DocComponent label="Tag solid colors">
            <template #demo>
              <div class="flex flex-wrap items-end gap-1">
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
              <DocMarkdown :source="solid" class="prose max-w-full" />
            </template>
          </DocComponent>
        </DocSection>

        <!-- Tag outline -->
        <DocSection title="Outline colors" tag="1.0.0">
          <DocComponent label="Tag outline colors">
            <template #demo>
              <div class="flex flex-wrap items-end gap-1">
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
              <DocMarkdown :source="outline" class="prose max-w-full" />
            </template>
          </DocComponent>
        </DocSection>

        <!-- Tag pastel -->
        <DocSection title="Pastel colors" tag="1.0.0">
          <DocComponent label="Tag pastel colors">
            <template #demo>
              <div class="flex flex-wrap items-end gap-1">
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
              <DocMarkdown :source="pastel" class="prose max-w-full" />
            </template>
          </DocComponent>
        </DocSection>

        <!-- Tag props -->
        <DocComponentMeta name="BaseTag" />
      </template>
      <!-- Toc -->
      <template #toc>
        <DocToc />
      </template>
    </DocLayout>
  </div>
</template>
