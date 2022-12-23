<script setup lang="ts">
import large from '~/documentation/avatar-group/large.md?raw'
import medium from '~/documentation/avatar-group/medium.md?raw'
import small from '~/documentation/avatar-group/small.md?raw'
import tiny from '~/documentation/avatar-group/tiny.md?raw'

const people = [
  {
    tooltip: 'Clarissa Perez',
    src: '/img/avatars/19.svg',
  },
  {
    tooltip: 'Aaaron Splatter',
    src: '/img/avatars/16.svg',
  },
  {
    tooltip: 'Mike Miller',
    src: '/img/avatars/3.svg',
  },
  {
    tooltip: 'Benedict Kessler',
    src: '/img/avatars/22.svg',
  },
  {
    tooltip: 'Maya Rosselini',
    src: '/img/avatars/2.svg',
  },
]

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
              <DocMarkdown :source="tiny" class="prose max-w-full" />
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
              <DocMarkdown :source="small" class="prose max-w-full" />
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
              <DocMarkdown :source="medium" class="prose max-w-full" />
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
              <DocMarkdown :source="large" class="prose max-w-full" />
            </template>
          </DocComponent>
        </DocSection>

        <DocComponentMeta name="BaseAvatarGroup" />
      </template>
      <!-- Toc -->
      <template #toc>
        <DocToc />
      </template>
    </DocLayout>
  </div>
</template>
