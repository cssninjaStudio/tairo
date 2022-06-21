<script setup lang="ts">
// import { toc } from '@@/documentation/components/snack/toc'
// import { } from '@@/documentation/components/snack'

definePageMeta({
  title: 'Snacks',
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
    label: 'Snack',
    hideLabel: false,
    icon: '',
    hideIcon: true,
    to: '/components/snack',
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
        <!-- Snack -->
        <DocSection id="snack-base" title="Snack" tag="1.0.0">
          <DocComponent label="Snack base example">
            <template #demo>
              <div class="flex items-end flex-wrap gap-4">
                <BaseSnack label="React" />
                <BaseSnack label="Angular" />
                <BaseSnack label="Vue" />
                <BaseSnack label="Html" />
                <BaseSnack label="Python" />
              </div>
            </template>
            <template #code></template>
          </DocComponent>
        </DocSection>

        <!-- Snack -->
        <DocSection id="snack-base-light" title="Snack" tag="1.0.0">
          <DocComponent label="Snack base example">
            <template #demo>
              <div class="flex items-end flex-wrap gap-4">
                <BaseSnack label="React" light />
                <BaseSnack label="Angular" light />
                <BaseSnack label="Vue" light />
                <BaseSnack label="Html" light />
                <BaseSnack label="Python" light />
              </div>
            </template>
            <template #code></template>
          </DocComponent>
        </DocSection>

        <!-- Snack small -->
        <DocSection id="snack-small" title="Snack" tag="1.0.0">
          <DocComponent label="Snack base small example">
            <template #demo>
              <div class="flex items-end flex-wrap gap-4">
                <BaseSnack label="React" small />
                <BaseSnack label="Angular" small />
                <BaseSnack label="Vue" small />
                <BaseSnack label="Html" small />
                <BaseSnack label="Python" small />
              </div>
            </template>
            <template #code></template>
          </DocComponent>
        </DocSection>

        <!-- Snack -->
        <DocSection id="snack-icon" title="Snack" tag="1.0.0">
          <DocComponent label="Snack icons example">
            <template #demo>
              <div class="flex items-end flex-wrap gap-4">
                <BaseSnack label="React" icon="i-logos-react" />
                <BaseSnack label="Angular" icon="i-logos-angular-icon" />
                <BaseSnack label="Vue" icon="i-logos-vue" />
                <BaseSnack label="Html" icon="i-logos-html5" />
                <BaseSnack label="Python" icon="i-logos-python" />
              </div>
            </template>
            <template #code></template>
          </DocComponent>
        </DocSection>

        <!-- Snack -->
        <DocSection id="snack-icon-light" title="Snack" tag="1.0.0">
          <DocComponent label="Snack icons example">
            <template #demo>
              <div class="flex items-end flex-wrap gap-4">
                <BaseSnack label="React" icon="i-logos-react" light />
                <BaseSnack label="Angular" icon="i-logos-angular-icon" light />
                <BaseSnack label="Vue" icon="i-logos-vue" light />
                <BaseSnack label="Html" icon="i-logos-html5" light />
                <BaseSnack label="Python" icon="i-logos-python" light />
              </div>
            </template>
            <template #code></template>
          </DocComponent>
        </DocSection>

        <!-- Snack -->
        <DocSection id="snack-icon-small" title="Snack" tag="1.0.0">
          <DocComponent label="Snack icons small example">
            <template #demo>
              <div class="flex items-end flex-wrap gap-4">
                <BaseSnack label="React" icon="i-logos-react" small />
                <BaseSnack label="Angular" icon="i-logos-angular-icon" small />
                <BaseSnack label="Vue" icon="i-logos-vue" small />
                <BaseSnack label="Html" icon="i-logos-html5" small />
                <BaseSnack label="Python" icon="i-logos-python" small />
              </div>
            </template>
            <template #code></template>
          </DocComponent>
        </DocSection>

        <!-- Snack -->
        <DocSection id="snack-image" title="Snack" tag="1.0.0">
          <DocComponent label="Snack images example">
            <template #demo>
              <div class="flex items-end flex-wrap gap-4">
                <BaseSnack label="Lana" image="/img/avatars/4.svg" />
                <BaseSnack label="Harry" image="/img/avatars/7.svg" />
                <BaseSnack label="Mike" image="/img/avatars/3.svg" />
                <BaseSnack label="Maya" image="/img/avatars/2.svg" />
                <BaseSnack label="John" image="/img/avatars/11.svg" />
              </div>
            </template>
            <template #code></template>
          </DocComponent>
        </DocSection>

        <!-- Snack -->
        <DocSection id="snack-image-light" title="Snack" tag="1.0.0">
          <DocComponent label="Snack images example">
            <template #demo>
              <div class="flex items-end flex-wrap gap-4">
                <BaseSnack label="Lana" image="/img/avatars/4.svg" light />
                <BaseSnack label="Harry" image="/img/avatars/7.svg" light />
                <BaseSnack label="Mike" image="/img/avatars/3.svg" light />
                <BaseSnack label="Maya" image="/img/avatars/2.svg" light />
                <BaseSnack label="John" image="/img/avatars/11.svg" light />
              </div>
            </template>
            <template #code></template>
          </DocComponent>
        </DocSection>

        <!-- Snack -->
        <DocSection id="snack-image-small" title="Snack" tag="1.0.0">
          <DocComponent label="Snack images small example">
            <template #demo>
              <div class="flex items-end flex-wrap gap-4">
                <BaseSnack label="Lana" image="/img/avatars/4.svg" small />
                <BaseSnack label="Harry" image="/img/avatars/7.svg" small />
                <BaseSnack label="Mike" image="/img/avatars/3.svg" small />
                <BaseSnack label="Maya" image="/img/avatars/2.svg" small />
                <BaseSnack label="John" image="/img/avatars/11.svg" small />
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
