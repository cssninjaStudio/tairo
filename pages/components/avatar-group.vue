<script setup lang="ts">
// import { toc } from '@@/documentation/components/avatar-group/toc'
// import { } from '@@/documentation/components/avatar-group'

definePageMeta({
  title: 'Avatar group',
})

const breadcrumb = [
  {
    label: 'Home',
    hideLabel: true,
    icon: 'i-lucide-home',
    to: '/',
  },
  {
    label: 'Components',
    hideLabel: false,
    to: '/components',
  },
  {
    label: 'Avatar group',
    hideLabel: false,
    to: '/components/avatar-group',
  },
]

const people = [
  {
    id: 1,
    name: 'Clarissa Perez',
    role: 'Sales Manager',
    picture: '/img/avatars/19.svg',
  },
  {
    id: 2,
    name: 'Aaaron Splatter',
    role: 'Project Manager',
    picture: '/img/avatars/16.svg',
  },
  {
    id: 3,
    name: 'Mike Miller',
    role: 'UI/UX Designer',
    picture: '/img/avatars/3.svg',
  },
  {
    id: 4,
    name: 'Benedict Kessler',
    role: 'Mobile Developer',
    picture: '/img/avatars/22.svg',
  },
  {
    id: 5,
    name: 'Maya Rosselini',
    role: 'Product Manager',
    picture: '/img/avatars/2.svg',
  },
]
</script>

<template>
  <div>
    <!-- BreadCrumb -->
    <BaseBreadcrumb :items="breadcrumb" separator="dot" />

    <!-- Documentation Layout -->
    <DocLayout>
      <!-- content -->
      <template #content>
        <!-- Avatar group -->
        <DocSection id="avatar-group-xs" title="Avatar group" tag="1.0.0">
          <DocComponent label="Xs avatar group">
            <template #demo>
              <div class="flex items-end flex-wrap gap-4">
                <BaseAvatarGroup size="xs" :avatars="people" />
              </div>
            </template>
            <template #code></template>
          </DocComponent>
        </DocSection>

        <!-- Avatar group -->
        <DocSection id="avatar-group-sm" title="Avatar group" tag="1.0.0">
          <DocComponent label="Sm avatar group">
            <template #demo>
              <div class="flex items-end flex-wrap gap-4">
                <BaseAvatarGroup size="sm" :avatars="people" />
              </div>
            </template>
            <template #code></template>
          </DocComponent>
        </DocSection>

        <!-- Avatar group -->
        <DocSection id="avatar-group-md" title="Avatar group" tag="1.0.0">
          <DocComponent label="Md avatar group">
            <template #demo>
              <div class="flex items-end flex-wrap gap-4">
                <BaseAvatarGroup size="md" :avatars="people" />
              </div>
            </template>
            <template #code></template>
          </DocComponent>
        </DocSection>

        <!-- Avatar group -->
        <DocSection id="avatar-group-lg" title="Avatar group" tag="1.0.0">
          <DocComponent label="Lg avatar group">
            <template #demo>
              <div class="flex items-end flex-wrap gap-4">
                <BaseAvatarGroup size="lg" :avatars="people" />
              </div>
            </template>
            <template #code></template>
          </DocComponent>
        </DocSection>
      </template>
      <!-- Toc -->
      <template #toc></template>
    </DocLayout>
  </div>
</template>
