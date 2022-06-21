<script setup lang="ts">
// import { toc } from '@@/documentation/components/card/toc'
// import { } from '@@/documentation/components/card'

definePageMeta({
  title: 'Cards',
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
    label: 'Card',
    hideLabel: false,
    icon: '',
    hideIcon: true,
    to: '/components/card',
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
        <!-- Card -->
        <DocSection id="card-straight" title="Card" tag="1.0.0">
          <DocComponent label="Inclusive accordion example">
            <template #demo>
              <div class="grid grid-cols-2 gap-4">
                <BaseCard shape="straight" class="p-6">Iam a card</BaseCard>
                <BaseCard shape="straight" class="p-6">Iam a card</BaseCard>
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
