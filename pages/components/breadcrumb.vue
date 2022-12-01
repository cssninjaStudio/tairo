<script setup lang="ts">
import {
  arrow,
  chevron,
  dot,
  slash,
} from '@@/documentation/components/breadcrumb'
import {
  demoBreadcrumbOne,
  demoBreadcrumbTwo,
} from '@@/documentation/components/breadcrumb/data'



definePageMeta({
  title: 'Breadcrumbs',
  documentation: {
    category: 'Content',
    components: ['BaseBreadcrumb'],
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
        <!-- Breadcrumb dot -->
        <DocSection title="Dot separator" tag="1.0.0">
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
        <DocSection title="Slash separator" tag="1.0.0">
          <DocComponent label="Breadcrumb slash separator">
            <template #demo>
              <div class="flex flex-col gap-4">
                <BaseBreadcrumb :items="demoBreadcrumbOne"> / </BaseBreadcrumb>

                <BaseBreadcrumb :items="demoBreadcrumbTwo"> / </BaseBreadcrumb>
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
                  <BaseIcon name="lucide:chevron-right" class="block h-3 w-3" />
                </BaseBreadcrumb>

                <BaseBreadcrumb :items="demoBreadcrumbTwo">
                  <BaseIcon name="lucide:chevron-right" class="block h-3 w-3" />
                </BaseBreadcrumb>
              </div>
            </template>
            <template #code>
              <DocCode language="html" :code="chevron" />
            </template>
          </DocComponent>
        </DocSection>

        <!-- Breadcrumb arrow -->
        <DocSection title="Arrow separator" tag="1.0.0">
          <DocComponent label="Breadcrumb arrow separator">
            <template #demo>
              <div class="flex flex-col gap-4">
                <BaseBreadcrumb :items="demoBreadcrumbOne">
                  <BaseIcon name="lucide:arrow-right" class="block h-3 w-3" />
                </BaseBreadcrumb>

                <BaseBreadcrumb :items="demoBreadcrumbTwo">
                  <BaseIcon name="lucide:arrow-right" class="block h-3 w-3" />
                </BaseBreadcrumb>
              </div>
            </template>
            <template #code>
              <DocCode language="html" :code="arrow" />
            </template>
          </DocComponent>
        </DocSection>

        <DocComponentMeta name="BaseBreadcrumb" />
      </template>
      <!-- Toc -->
      <template #toc>
        <DocToc />
      </template>
    </DocLayout>
  </div>
</template>
