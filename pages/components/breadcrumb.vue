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
import {
  demoBreadcrumbOne,
  demoBreadcrumbTwo,
} from '@@/documentation/components/breadcrumb/data'

definePageMeta({
  title: 'Breadcrumbs',
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
        <!-- Breadcrumb dot -->
        <DocSection id="breadcrumb-dot" title="Dot separator" tag="1.0.0">
          <DocComponent label="Breadcrumb dot separator">
            <template #demo>
              <div class="flex flex-col gap-4">
                <BaseBreadcrumb :items="demoBreadcrumbOne" />

                <BaseBreadcrumb :items="demoBreadcrumbTwo" />
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
                <BaseBreadcrumb :items="demoBreadcrumbOne">/</BaseBreadcrumb>

                <BaseBreadcrumb :items="demoBreadcrumbTwo">/</BaseBreadcrumb>
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
                <BaseBreadcrumb :items="demoBreadcrumbOne">
                  <BaseIcon name="lucide:chevron-right" class="block w-3 h-3" />
                </BaseBreadcrumb>

                <BaseBreadcrumb :items="demoBreadcrumbTwo">
                  <BaseIcon name="lucide:chevron-right" class="block w-3 h-3" />
                </BaseBreadcrumb>
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
                <BaseBreadcrumb :items="demoBreadcrumbOne">
                  <BaseIcon name="lucide:arrow-right" class="block w-3 h-3" />
                </BaseBreadcrumb>

                <BaseBreadcrumb :items="demoBreadcrumbTwo">
                  <BaseIcon name="lucide:arrow-right" class="block w-3 h-3" />
                </BaseBreadcrumb>
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
