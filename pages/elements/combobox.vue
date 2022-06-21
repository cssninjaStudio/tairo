<script setup lang="ts">
// import { toc } from '@@/documentation/elements/combobox/toc'
// import { } from '@@/documentation/elements/combobox'

definePageMeta({
  title: 'Combobox',
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
    label: 'Combobox',
    hideLabel: false,
    icon: '',
    hideIcon: true,
    to: '/elements/combobox',
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
        <!-- Combo box -->
        <DocSection id="combo-box" title="Combo box" tag="1.0.0">
          <DocComponent label="Combo box example">
            <template #demo>
              <div class="flex items-end max-w-xs">
                <BaseFormComboBox />
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
