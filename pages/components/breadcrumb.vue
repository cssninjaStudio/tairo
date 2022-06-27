<script setup lang="ts">
import { breadcrumb, toc } from '@@/documentation/components/breadcrumb/toc'
import {
  arrow,
  chevron,
  dot,
  slash,
} from '@@/documentation/components/breadcrumb'
import {
  itemProperties,
  properties,
} from '@@/documentation/components/breadcrumb/properties'

definePageMeta({
  title: 'Breadcrumbs',
})

const demoBreadcrumbOne = [
  {
    label: 'Home',
    hideLabel: false,
    icon: 'i-lucide-home',
    to: '/',
  },
  {
    label: 'Products',
    hideLabel: false,
    to: '/',
  },
  {
    label: 'Laptops',
    hideLabel: false,
    to: '/',
  },
]

const demoBreadcrumbTwo = [
  {
    label: 'Home',
    hideLabel: false,
    icon: 'i-lucide-home',
    to: '/',
  },
  {
    label: 'Products',
    hideLabel: false,
    icon: 'i-lucide-layout-grid',
    to: '/',
  },
  {
    label: 'Laptops',
    hideLabel: false,
    icon: 'i-lucide-laptop',
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
          <DocComponent label="Breadcrumb dot separator">
            <template #demo>
              <div class="flex flex-col gap-4">
                <BaseBreadcrumb :items="demoBreadcrumbOne" separator="dot" />

                <BaseBreadcrumb :items="demoBreadcrumbTwo" separator="dot" />
              </div>
            </template>
            <template #code>
              <DocCode language="html" :code="dot" />
            </template>
          </DocComponent>
        </DocSection>

        <!-- Breadcrumb slash -->
        <DocSection id="breadcrumb-slash" title="Slash separator" tag="1.0.0">
          <DocComponent label="Breadcrumb slash separator">
            <template #demo>
              <div class="flex flex-col gap-4">
                <BaseBreadcrumb :items="demoBreadcrumbOne" separator="slash" />

                <BaseBreadcrumb :items="demoBreadcrumbTwo" separator="slash" />
              </div>
            </template>
            <template #code>
              <DocCode language="html" :code="slash" />
            </template>
          </DocComponent>
        </DocSection>

        <!-- Breadcrumb chevron -->
        <DocSection
          id="breadcrumb-chevron"
          title="Chevron separator"
          tag="1.0.0"
        >
          <DocComponent label="Breadcrumb chevron separator">
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
            <template #code>
              <DocCode language="html" :code="chevron" />
            </template>
          </DocComponent>
        </DocSection>

        <!-- Breadcrumb arrow -->
        <DocSection id="breadcrumb-arrow" title="Arrow separator" tag="1.0.0">
          <DocComponent label="Breadcrumb arrow separator">
            <template #demo>
              <div class="flex flex-col gap-4">
                <BaseBreadcrumb :items="demoBreadcrumbOne" separator="arrow" />

                <BaseBreadcrumb :items="demoBreadcrumbTwo" separator="arrow" />
              </div>
            </template>
            <template #code>
              <DocCode language="html" :code="arrow" />
            </template>
          </DocComponent>
        </DocSection>

        <!-- Breadcrumb props -->
        <DocProps
          id="breadcrumb-props"
          component="Breadcrumb"
          :properties="properties.props"
          :slots="properties.slots"
        />

        <!-- Breadcrumb item props -->
        <DocProps
          id="breadcrumb-item-props"
          component="Breadcrumb item"
          :properties="itemProperties.props"
          :slots="itemProperties.slots"
        />
      </template>
      <!-- Toc -->
      <template #toc>
        <DocToc :anchors="toc" />
      </template>
    </DocLayout>
  </div>
</template>
