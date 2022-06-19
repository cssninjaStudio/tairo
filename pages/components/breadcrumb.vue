<script setup lang="ts">
// import { toc } from '@@/documentation/components/breadcrumb/toc'
// import { } from '@@/documentation/components/breadcrumb'

definePageMeta({
  title: 'Breadcrumbs',
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
    label: 'Components',
    hideLabel: false,
    icon: '',
    hideIcon: true,
    to: '/components',
  },
  {
    label: 'Colors',
    hideLabel: false,
    icon: '',
    hideIcon: true,
    to: '/components/breadcrumb',
  },
]

const demoBreadcrumbOne = [
  {
    label: 'Home',
    hideLabel: false,
    icon: 'i-lucide-home',
    hideIcon: true,
    to: '/',
  },
  {
    label: 'Products',
    hideLabel: false,
    icon: 'i-lucide-layout-grid',
    hideIcon: true,
    to: '/',
  },
  {
    label: 'Laptops',
    hideLabel: false,
    icon: 'i-lucide-laptop',
    hideIcon: true,
    to: '/',
  },
]

const demoBreadcrumbTwo = [
  {
    label: 'Home',
    hideLabel: false,
    icon: 'i-lucide-home',
    hideIcon: false,
    to: '/',
  },
  {
    label: 'Products',
    hideLabel: false,
    icon: 'i-lucide-layout-grid',
    hideIcon: false,
    to: '/',
  },
  {
    label: 'Laptops',
    hideLabel: false,
    icon: 'i-lucide-laptop',
    hideIcon: false,
    to: '/',
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
        <!-- Breadcrumb dot -->
        <DocSection id="breadcrumb-dot" title="Dot separator" tag="1.0.0">
          <DocComponent label="Breadcrum dot separator">
            <template #demo>
              <div class="flex flex-col gap-4">
                <BaseBreadcrumb :items="demoBreadcrumbOne" separator="dot" />

                <BaseBreadcrumb :items="demoBreadcrumbTwo" separator="dot" />
              </div>
            </template>
            <template #code></template>
          </DocComponent>
        </DocSection>

        <!-- Breadcrumb slash -->
        <DocSection id="breadcrumb-slash" title="Slash separator" tag="1.0.0">
          <DocComponent label="Breadcrum slash separator">
            <template #demo>
              <div class="flex flex-col gap-4">
                <BaseBreadcrumb :items="demoBreadcrumbOne" separator="slash" />

                <BaseBreadcrumb :items="demoBreadcrumbTwo" separator="slash" />
              </div>
            </template>
            <template #code></template>
          </DocComponent>
        </DocSection>

        <!-- Breadcrumb chevron -->
        <DocSection
          id="breadcrumb-chevron"
          title="Chevron separator"
          tag="1.0.0"
        >
          <DocComponent label="Breadcrum slash separator">
            <template #demo>
              <div class="flex flex-col gap-4">
                <BaseBreadcrumb
                  :items="demoBreadcrumbOne"
                  separator="chevron"
                />

                <BaseBreadcrumb
                  :items="demoBreadcrumbTwo"
                  separator="chevron"
                />
              </div>
            </template>
            <template #code></template>
          </DocComponent>
        </DocSection>

        <!-- Breadcrumb arrow -->
        <DocSection id="breadcrumb-arrow" title="Arrow separator" tag="1.0.0">
          <DocComponent label="Breadcrum slash separator">
            <template #demo>
              <div class="flex flex-col gap-4">
                <BaseBreadcrumb :items="demoBreadcrumbOne" separator="arrow" />

                <BaseBreadcrumb :items="demoBreadcrumbTwo" separator="arrow" />
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
