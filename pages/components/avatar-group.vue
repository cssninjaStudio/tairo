<script setup lang="ts">
import {
  large,
  medium,
  small,
  tiny,
} from '@@/documentation/components/avatar-group'
import { people } from '@@/documentation/components/avatar-group/data'

import { BaseAvatarGroupMeta } from 'virtual:vue-component-meta'

definePageMeta({
  title: 'Avatar group',
  documentation: {
    category: 'Display',
    components: ['BaseAvatarGroup'],
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
        <!-- Avatar group -->
        <DocSection title="Avatar group" tag="1.0.0">
          <DocComponent label="Xs avatar group">
            <template #demo>
              <div class="flex flex-wrap items-end gap-4">
                <BaseAvatarGroup size="xs" :avatars="people" />
              </div>
            </template>
            <template #code>
              <DocCode language="html" :code="tiny" />
            </template>
          </DocComponent>
        </DocSection>

        <!-- Avatar group -->
        <DocSection title="Avatar group" tag="1.0.0">
          <DocComponent label="Sm avatar group">
            <template #demo>
              <div class="flex flex-wrap items-end gap-4">
                <BaseAvatarGroup :avatars="people" />
              </div>
            </template>
            <template #code>
              <DocCode language="html" :code="small" />
            </template>
          </DocComponent>
        </DocSection>

        <!-- Avatar group -->
        <DocSection title="Avatar group" tag="1.0.0">
          <DocComponent label="Md avatar group">
            <template #demo>
              <div class="flex flex-wrap items-end gap-4">
                <BaseAvatarGroup size="md" :avatars="people" />
              </div>
            </template>
            <template #code>
              <DocCode language="html" :code="medium" />
            </template>
          </DocComponent>
        </DocSection>

        <!-- Avatar group -->
        <DocSection title="Avatar group" tag="1.0.0">
          <DocComponent label="Lg avatar group">
            <template #demo>
              <div class="flex flex-wrap items-end gap-4">
                <BaseAvatarGroup size="lg" :avatars="people" />
              </div>
            </template>
            <template #code>
              <DocCode language="html" :code="large" />
            </template>
          </DocComponent>
        </DocSection>

        <DocComponentMeta :meta="BaseAvatarGroupMeta" />
      </template>
      <!-- Toc -->
      <template #toc>
        <DocToc />
      </template>
    </DocLayout>
  </div>
</template>
