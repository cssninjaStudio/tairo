<script setup lang="ts">
// import { toc } from '@@/documentation/elements/popover/toc'
// import { } from '@@/documentation/elements/popover'

definePageMeta({
  title: 'Popover',
})

const breadcrumb = [
  {
    label: 'Home',
    hideLabel: true,
    icon: 'i-lucide-home',
    hideIcon: false,
    to: '/',
  },
  {
    label: 'Elements',
    hideLabel: false,
    icon: '',
    hideIcon: true,
    to: '/elements',
  },
  {
    label: 'Popover',
    hideLabel: false,
    icon: '',
    hideIcon: true,
    to: '/elements/popover',
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
        <!-- Popover -->
        <DocSection id="popover-base" title="Popover box" tag="1.0.0">
          <DocComponent label="Popover example">
            <template #demo>
              <div class="flex items-end max-w-xs">
                <BasePopover />
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
