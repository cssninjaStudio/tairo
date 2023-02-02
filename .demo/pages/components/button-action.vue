<script setup lang="ts">
import group from '~/documentation/action/group.md?raw'
import loading from '~/documentation/action/loading.md?raw'
import muted from '~/documentation/action/muted.md?raw'
import shapes from '~/documentation/action/shapes.md?raw'

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
              <BaseFocusLoop class="flex flex-wrap items-end gap-2">
                <BaseButtonAction shape="straight">Action</BaseButtonAction>
                <BaseButtonAction shape="rounded">Action</BaseButtonAction>
                <BaseButtonAction shape="curved">Action</BaseButtonAction>
                <BaseButtonAction shape="full">Action</BaseButtonAction>
              </BaseFocusLoop>
            </template>
            <template #code>
              <DocMarkdown :source="shapes" class="prose max-w-full" />
            </template>
          </DocComponent>
        </DocSection>

        <!-- Action muted -->
        <DocSection title="Muted actions" tag="1.0.0">
          <DocComponent label="Muted action variation">
            <template #demo>
              <BaseFocusLoop class="flex flex-wrap items-end gap-2">
                <BaseButtonAction shape="straight" color="muted">
                  Action
                </BaseButtonAction>
                <BaseButtonAction shape="rounded" color="muted">
                  Action
                </BaseButtonAction>
                <BaseButtonAction shape="curved" color="muted">
                  Action
                </BaseButtonAction>
                <BaseButtonAction shape="full" color="muted">
                  Action
                </BaseButtonAction>
              </BaseFocusLoop>
            </template>
            <template #code>
              <DocMarkdown :source="muted" class="prose max-w-full" />
            </template>
          </DocComponent>
        </DocSection>

        <!-- Action loading -->
        <DocSection title="Loading state" tag="1.0.0">
          <DocComponent label="Action loading variation">
            <template #demo>
              <BaseFocusLoop class="flex flex-wrap items-end gap-2">
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
              </BaseFocusLoop>
            </template>
            <template #code>
              <DocMarkdown :source="loading" class="prose max-w-full" />
            </template>
          </DocComponent>
        </DocSection>
        <!-- Action group -->
        <DocSection title="Actions group" tag="1.0.0">
          <DocComponent label="Actions inside a group">
            <template #demo>
              <BaseFocusLoop class="flex items-end">
                <BaseButtonAction
                  shape="rounded"
                  class="rounded-r-none border-r-0 focus:z-10"
                  @click="disabled = !disabled"
                >
                  View
                </BaseButtonAction>
                <BaseButtonAction shape="straight" class="focus:z-10">
                  <Icon name="ph:pen" class="h-4 w-4" />
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
              </BaseFocusLoop>
            </template>
            <template #code>
              <DocMarkdown :source="group" class="prose max-w-full" />
            </template>
          </DocComponent>
        </DocSection>

        <DocComponentMeta name="BaseButtonAction" />
      </template>
      <!-- Toc -->
      <template #toc>
        <DocToc />
      </template>
    </DocLayout>
  </div>
</template>
