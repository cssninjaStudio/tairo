<script setup lang="ts">
// import { toc } from '@@/documentation/components/placeholder/toc'
// import { } from '@@/documentation/components/placeholder'

definePageMeta({
  title: 'Placeholders',
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
    label: 'Placeholder',
    hideLabel: false,
    icon: '',
    hideIcon: true,
    to: '/components/placeholder',
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
        <!-- Accordion -->
        <DocSection id="accordion-inclusive" title="Accordion" tag="1.0.0">
          <DocComponent label="Inclusive accordion example">
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
            <template #code></template>
          </DocComponent>
        </DocSection>
      </template>
      <!-- Toc -->
      <template #toc></template>
    </DocLayout>
  </div>
</template>
