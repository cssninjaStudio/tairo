<script setup lang="ts">
import { breadcrumb, toc } from '@@/documentation/components/avatar-group/toc'
import {
  large,
  medium,
  small,
  tiny,
} from '@@/documentation/components/avatar-group'
import { properties } from '@@/documentation/components/avatar-group/properties'

definePageMeta({
  title: 'Avatar group',
})

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
            <template #code>
              <DocCode language="html" :code="tiny" />
            </template>
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
            <template #code>
              <DocCode language="html" :code="small" />
            </template>
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
            <template #code>
              <DocCode language="html" :code="medium" />
            </template>
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
            <template #code>
              <DocCode language="html" :code="large" />
            </template>
          </DocComponent>
        </DocSection>

        <!-- Avatar group toc -->
        <DocProps
          id="avatar-group-props"
          component="Avatar group"
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
