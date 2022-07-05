<script setup lang="ts">
import { breadcrumb, toc } from '@@/documentation/components/placeholder/toc'
import { base, variation } from '@@/documentation/components/placeholder'
import { properties } from '@@/documentation/components/placeholder/properties'

definePageMeta({
  title: 'Placeholders',
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
        <DocSection id="placeholder-base" title="Placeholder" tag="1.0.0">
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

                <div class="flex justify-center gap-2 mt-2">
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
        <DocSection id="placeholder-variation" title="Placeholder" tag="1.0.0">
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

                <div class="flex justify-center gap-2 mt-2">
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
        <DocProps
          id="placeholder-props"
          component="Placeholder"
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
