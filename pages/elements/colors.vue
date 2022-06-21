<script setup lang="ts">
// import { toc } from '@@/documentation/elements/colors/toc'
// import { } from '@@/documentation/elements/colors'

definePageMeta({
  title: 'Colors',
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
    label: 'Elements',
    hideLabel: false,
    icon: '',
    hideIcon: true,
    to: '/elements',
  },
  {
    label: 'Colors',
    hideLabel: false,
    icon: '',
    hideIcon: true,
    to: '/elements/colors',
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
        <!-- Custom section -->
        <div class="grid md:grid-cols-2 gap-8">
          <div>
            <BaseCard shape="rounded" class="p-8">
              <BaseHeading
                tag="h2"
                size="2xl"
                weight="bold"
                class="text-slate-800 dark:text-white"
              >
                Tairo Overview
              </BaseHeading>
              <BaseParagraph
                size="sm"
                class="text-slate-500 dark:text-slate-400 mb-4"
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Erat
                enim Polemonis.
              </BaseParagraph>
              <BaseText size="sm" class="text-slate-400 dark:text-slate-400">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Erat
                enim Polemonis. Duo Reges: constructio interrete. Philosophi
                autem in suis lectulis plerumque moriuntur.
              </BaseText>

              <NuxtLink
                to="https://docs.cssninja.io/tairo"
                class="group inline-flex items-center font-text font-medium text-sm text-primary-500 mt-7 hover:opacity-90 transition-opacity"
              >
                <span class="mr-1">Read the documentation</span>
                <i
                  class="i-lucide-arrow-right w-4 h-4 group-hover:translate-x-2 transition-transform duration-300"
                ></i>
              </NuxtLink>
            </BaseCard>
          </div>
          <div class="grid md:grid-cols-2 gap-6">
            <BaseCard shape="rounded" class="p-8 text-center">
              <i class="i-logos-nuxt-icon w-10 h-10 block mx-auto mb-2"></i>
              <BaseHeading
                tag="h4"
                size="sm"
                weight="semibold"
                class="text-slate-800 dark:text-white"
              >
                Nuxt JS
              </BaseHeading>
            </BaseCard>
            <BaseCard shape="rounded" class="p-8 text-center">
              <i
                class="i-vscode-icons-folder-type-typescript w-10 h-10 block mx-auto mb-2"
              ></i>
              <BaseHeading
                tag="h4"
                size="sm"
                weight="semibold"
                class="text-slate-800 dark:text-white"
              >
                Typescript
              </BaseHeading>
            </BaseCard>
            <BaseCard shape="rounded" class="p-8 text-center">
              <i
                class="i-logos-tailwindcss-icon w-10 h-10 block mx-auto mb-2"
              ></i>
              <BaseHeading
                tag="h4"
                size="sm"
                weight="semibold"
                class="text-slate-800 dark:text-white"
              >
                Tailwind CSS
              </BaseHeading>
            </BaseCard>
            <BaseCard shape="rounded" class="p-8 text-center">
              <i
                class="i-logos-unocss w-10 h-10 block mx-auto scale-75 dark:invert mb-2"
              ></i>
              <BaseHeading
                tag="h4"
                size="sm"
                weight="semibold"
                class="text-slate-800 dark:text-white"
              >
                UnoCSS
              </BaseHeading>
            </BaseCard>
          </div>
        </div>
      </template>
      <!-- Toc -->
      <template #toc></template>
    </DocLayout>
  </div>
</template>
