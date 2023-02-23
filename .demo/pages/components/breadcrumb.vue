<script setup lang="ts">
import arrow from '~/documentation/breadcrumb/arrow.md?raw'
import chevron from '~/documentation/breadcrumb/chevron.md?raw'
import dot from '~/documentation/breadcrumb/dot.md?raw'
import slash from '~/documentation/breadcrumb/slash.md?raw'

definePageMeta({
  title: 'Breadcrumbs',
  documentation: {
    category: 'Content',
    components: ['BaseBreadcrumb'],
  },
})

const demoBreadcrumb = [
  {
    label: 'Home',
    hideLabel: true,
    icon: 'lucide:home',
    to: '#/',
  },
  {
    label: 'Components Hub',
    hideLabel: false,
    to: '#/',
  },
  {
    label: 'Breadcrumbs',
    hideLabel: false,
    to: '#/',
  },
]

const demoBreadcrumbOne = [
  {
    label: 'Home',
    hideLabel: false,
    icon: 'lucide:home',
    to: '#/',
  },
  {
    label: 'Products',
    hideLabel: false,
    to: '#/',
  },
  {
    label: 'Laptops',
    hideLabel: false,
    to: '#/',
  },
]

const demoBreadcrumbTwo = [
  {
    label: 'Home',
    hideLabel: false,
    icon: 'lucide:home',
    to: '#/',
  },
  {
    label: 'Products',
    hideLabel: false,
    icon: 'lucide:layout-grid',
    to: '#/',
  },
  {
    label: 'Laptops',
    hideLabel: false,
    icon: 'lucide:laptop',
    to: '#/',
  },
]
</script>

<template>
  <div>
    <!-- BreadCrumb -->
    <BaseBreadcrumb :items="demoBreadcrumb" />

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
              <DocMarkdown :source="dot" class="prose max-w-full" />
            </template>
          </DocComponent>
        </DocSection>

        <!-- Breadcrumb slash -->
        <DocSection title="Slash separator" tag="1.0.0">
          <DocComponent label="Breadcrumb slash separator">
            <template #demo>
              <div class="flex flex-col gap-4">
                <BaseBreadcrumb :items="demoBreadcrumbOne">/</BaseBreadcrumb>

                <BaseBreadcrumb :items="demoBreadcrumbTwo">/</BaseBreadcrumb>
              </div>
            </template>
            <template #code>
              <DocMarkdown :source="slash" class="prose max-w-full" />
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
                  <Icon name="lucide:chevron-right" class="block h-3 w-3" />
                </BaseBreadcrumb>

                <BaseBreadcrumb :items="demoBreadcrumbTwo">
                  <Icon name="lucide:chevron-right" class="block h-3 w-3" />
                </BaseBreadcrumb>
              </div>
            </template>
            <template #code>
              <DocMarkdown :source="chevron" class="prose max-w-full" />
            </template>
          </DocComponent>
        </DocSection>

        <!-- Breadcrumb arrow -->
        <DocSection title="Arrow separator" tag="1.0.0">
          <DocComponent label="Breadcrumb arrow separator">
            <template #demo>
              <div class="flex flex-col gap-4">
                <BaseBreadcrumb :items="demoBreadcrumbOne">
                  <Icon name="lucide:arrow-right" class="block h-3 w-3" />
                </BaseBreadcrumb>

                <BaseBreadcrumb :items="demoBreadcrumbTwo">
                  <Icon name="lucide:arrow-right" class="block h-3 w-3" />
                </BaseBreadcrumb>
              </div>
            </template>
            <template #code>
              <DocMarkdown :source="arrow" class="prose max-w-full" />
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
