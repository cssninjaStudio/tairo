<script setup lang="ts">
// import { toc } from '@@/documentation/elements/autocomplete/toc'
// import { } from '@@/documentation/elements/autocomplete'

definePageMeta({
  title: 'Autocomplete',
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
    label: 'Autocomplete',
    hideLabel: false,
    icon: '',
    hideIcon: true,
    to: '/elements/autocomplete',
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
        <!-- Autocomplete -->
        <DocSection id="autocomplete-base" title="Autocomplete" tag="1.0.0">
          <DocComponent label="Autocomplete example">
            <template #demo>
              <div class="flex items-end max-w-xs">
                <BaseFormAutocomplete />
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
