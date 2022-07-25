<script setup lang="ts">
import { base, variation } from '@@/documentation/components/placeholder'
// import { properties } from '@@/documentation/components/placeholder/properties'

import { BasePlaceholderPageMeta } from 'virtual:vue-component-meta'

definePageMeta({
  title: 'Placeholders',
  documentation: {
    category: 'Interaction',
    components: ['BasePlaceholderPage'],
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
        <!-- Placeholder -->
        <DocSection title="Placeholder" tag="1.0.0">
          <DocComponent label="Page placeholder example">
            <template #demo>
              <BasePlaceholderPage
                title="Looks like you are new!"
                subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Erat enim Polemonis. Duo Reges."
              >
                <template #image>
                  <img
                    src="/img/illustrations/placeholders/people/2.svg"
                    alt="placeholder-image"
                  />
                </template>

                <div class="mt-2 flex justify-center gap-2">
                  <BaseButton color="primary" shape="curved" class="h-11 w-40">
                    Take some action
                  </BaseButton>
                </div>
              </BasePlaceholderPage>
            </template>
            <template #code>
              <DocCode langugage="html" :code="base" />
            </template>
          </DocComponent>
        </DocSection>

        <!-- Placeholder variation -->
        <DocSection title="Placeholder" tag="1.0.0">
          <DocComponent label="Page placeholder example">
            <template #demo>
              <BasePlaceholderPage
                title="Looks like you are new!"
                subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Erat enim Polemonis. Duo Reges."
              >
                <template #image>
                  <img
                    src="/img/illustrations/placeholders/people/1.svg"
                    alt="placeholder-image"
                  />
                </template>

                <div class="mt-2 flex justify-center gap-2">
                  <BaseButton color="default" shape="curved" class="h-11 w-32">
                    Go Home
                  </BaseButton>
                  <BaseButton color="primary" shape="curved" class="h-11 w-32">
                    Edit Profile
                  </BaseButton>
                </div>
              </BasePlaceholderPage>
            </template>
            <template #code>
              <DocCode langugage="html" :code="variation" />
            </template>
          </DocComponent>
        </DocSection>

        <!-- Placeholder props -->
        <DocComponentMeta :meta="BasePlaceholderPageMeta" />
      </template>
      <!-- Toc -->
      <template #toc>
        <DocToc />
      </template>
    </DocLayout>
  </div>
</template>
