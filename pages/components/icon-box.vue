<script setup lang="ts">
// import { toc } from '@@/documentation/components/icon-box/toc'
// import { } from '@@/documentation/components/icon-box'

definePageMeta({
  title: 'Icon Boxes',
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
    label: 'Icon box',
    hideLabel: false,
    icon: '',
    hideIcon: true,
    to: '/components/icon-box',
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
        <!-- Icon box rounded -->
        <DocSection id="iconbox-rounded-sizes" title="Rounded box" tag="1.0.0">
          <DocComponent label="Rounded boxes sizes">
            <template #demo>
              <div class="flex items-end flex-wrap gap-4">
                <BaseIconBox
                  size="xs"
                  class="bg-gray-200 text-gray-500 dark:bg-gray-800"
                >
                  <i class="i-ph-nut-duotone w-3 h-3"></i>
                </BaseIconBox>
                <BaseIconBox
                  size="sm"
                  class="bg-gray-200 text-gray-500 dark:bg-gray-800"
                >
                  <i class="i-ph-nut-duotone w-4 h-4"></i>
                </BaseIconBox>
                <BaseIconBox
                  size="md"
                  class="bg-gray-200 text-gray-500 dark:bg-gray-800"
                >
                  <i class="i-ph-nut-duotone w-5 h-5"></i>
                </BaseIconBox>
                <BaseIconBox
                  size="lg"
                  class="bg-gray-200 text-gray-500 dark:bg-gray-800"
                >
                  <i class="i-ph-nut-duotone w-6 h-6"></i>
                </BaseIconBox>
                <BaseIconBox
                  size="xl"
                  class="bg-gray-200 text-gray-500 dark:bg-gray-800"
                >
                  <i class="i-ph-nut-duotone w-7 h-7"></i>
                </BaseIconBox>
                <BaseIconBox
                  size="2xl"
                  class="bg-gray-200 text-gray-500 dark:bg-gray-800"
                >
                  <i class="i-ph-nut-duotone w-8 h-8"></i>
                </BaseIconBox>
              </div>
            </template>
            <template #code></template>
          </DocComponent>
        </DocSection>

        <!-- Icon box circle -->
        <DocSection id="iconbox-circle-sizes" title="Circle box" tag="1.0.0">
          <DocComponent label="Circle boxes sizes">
            <template #demo>
              <div class="flex items-end flex-wrap gap-4">
                <BaseIconBox
                  size="xs"
                  shape="circle"
                  class="bg-gray-200 text-gray-500 dark:bg-gray-800"
                >
                  <i class="i-ph-nut-duotone w-3 h-3"></i>
                </BaseIconBox>
                <BaseIconBox
                  size="sm"
                  shape="circle"
                  class="bg-gray-200 text-gray-500 dark:bg-gray-800"
                >
                  <i class="i-ph-nut-duotone w-4 h-4"></i>
                </BaseIconBox>
                <BaseIconBox
                  size="md"
                  shape="circle"
                  class="bg-gray-200 text-gray-500 dark:bg-gray-800"
                >
                  <i class="i-ph-nut-duotone w-5 h-5"></i>
                </BaseIconBox>
                <BaseIconBox
                  size="lg"
                  shape="circle"
                  class="bg-gray-200 text-gray-500 dark:bg-gray-800"
                >
                  <i class="i-ph-nut-duotone w-6 h-6"></i>
                </BaseIconBox>
                <BaseIconBox
                  size="xl"
                  shape="circle"
                  class="bg-gray-200 text-gray-500 dark:bg-gray-800"
                >
                  <i class="i-ph-nut-duotone w-7 h-7"></i>
                </BaseIconBox>
                <BaseIconBox
                  size="2xl"
                  shape="circle"
                  class="bg-gray-200 text-gray-500 dark:bg-gray-800"
                >
                  <i class="i-ph-nut-duotone w-8 h-8"></i>
                </BaseIconBox>
              </div>
            </template>
            <template #code></template>
          </DocComponent>
        </DocSection>

        <!-- Icon box solid -->
        <DocSection id="iconbox-solid" title="Solid colors" tag="1.0.0">
          <DocComponent label="Solid colors example">
            <template #demo>
              <div class="flex items-end flex-wrap gap-2">
                <BaseIconBox
                  size="md"
                  shape="circle"
                  class="bg-white border border-slate-200 text-gray-500 dark:bg-slate-700 dark:border-slate-600"
                >
                  <i class="i-ph-nut-duotone w-5 h-5"></i>
                </BaseIconBox>
                <BaseIconBox
                  size="md"
                  shape="circle"
                  class="bg-gray-200 text-gray-500 dark:bg-gray-800"
                >
                  <i class="i-ph-cat-duotone w-5 h-5"></i>
                </BaseIconBox>
                <BaseIconBox
                  size="md"
                  shape="circle"
                  class="bg-primary-500 text-white"
                >
                  <i class="i-ph-ghost-duotone w-5 h-5"></i>
                </BaseIconBox>
                <BaseIconBox
                  size="md"
                  shape="circle"
                  class="bg-lime-500 text-white"
                >
                  <i class="i-ph-club-duotone w-5 h-5"></i>
                </BaseIconBox>
                <BaseIconBox
                  size="md"
                  shape="circle"
                  class="bg-green-500 text-white"
                >
                  <i class="i-ph-leaf-duotone w-5 h-5"></i>
                </BaseIconBox>
                <BaseIconBox
                  size="md"
                  shape="circle"
                  class="bg-emerald-500 text-white"
                >
                  <i class="i-ph-mountains-duotone w-5 h-5"></i>
                </BaseIconBox>
                <BaseIconBox
                  size="md"
                  shape="circle"
                  class="bg-teal-500 text-white"
                >
                  <i class="i-ph-paint-brush-broad-duotone w-5 h-5"></i>
                </BaseIconBox>
                <BaseIconBox
                  size="md"
                  shape="circle"
                  class="bg-cyan-500 text-white"
                >
                  <i class="i-ph-rocket-duotone w-5 h-5"></i>
                </BaseIconBox>
                <BaseIconBox
                  size="md"
                  shape="circle"
                  class="bg-sky-500 text-white"
                >
                  <i class="i-ph-popcorn-duotone w-5 h-5"></i>
                </BaseIconBox>
                <BaseIconBox
                  size="md"
                  shape="circle"
                  class="bg-blue-500 text-white"
                >
                  <i class="i-ph-flask-duotone w-5 h-5"></i>
                </BaseIconBox>
                <BaseIconBox
                  size="md"
                  shape="circle"
                  class="bg-indigo-500 text-white"
                >
                  <i class="i-ph-drop-duotone w-5 h-5"></i>
                </BaseIconBox>
                <BaseIconBox
                  size="md"
                  shape="circle"
                  class="bg-purple-500 text-white"
                >
                  <i class="i-ph-image-square-duotone w-5 h-5"></i>
                </BaseIconBox>
                <BaseIconBox
                  size="md"
                  shape="circle"
                  class="bg-fuchsia-500 text-white"
                >
                  <i class="i-ph-piano-keys-duotone w-5 h-5"></i>
                </BaseIconBox>
                <BaseIconBox
                  size="md"
                  shape="circle"
                  class="bg-pink-500 text-white"
                >
                  <i class="i-ph-hand-waving-duotone w-5 h-5"></i>
                </BaseIconBox>
                <BaseIconBox
                  size="md"
                  shape="circle"
                  class="bg-rose-500 text-white"
                >
                  <i class="i-ph-lock-duotone w-5 h-5"></i>
                </BaseIconBox>
                <BaseIconBox
                  size="md"
                  shape="circle"
                  class="bg-red-500 text-white"
                >
                  <i class="i-ph-lightning-duotone w-5 h-5"></i>
                </BaseIconBox>
                <BaseIconBox
                  size="md"
                  shape="circle"
                  class="bg-orange-500 text-white"
                >
                  <i class="i-ph-pizza-duotone w-5 h-5"></i>
                </BaseIconBox>
                <BaseIconBox
                  size="md"
                  shape="circle"
                  class="bg-amber-500 text-white"
                >
                  <i class="i-ph-sun-duotone w-5 h-5"></i>
                </BaseIconBox>
                <BaseIconBox
                  size="md"
                  shape="circle"
                  class="bg-yellow-500 text-white"
                >
                  <i class="i-ph-sketch-logo-duotone w-5 h-5"></i>
                </BaseIconBox>
                <BaseIconBox
                  size="md"
                  shape="circle"
                  class="bg-slate-800 text-white"
                >
                  <i class="i-ph-moon-duotone w-5 h-5"></i>
                </BaseIconBox>
              </div>
            </template>
            <template #code></template>
          </DocComponent>
        </DocSection>

        <!-- Icon box pastel -->
        <DocSection id="iconbox-pastel" title="Pastel colors" tag="1.0.0">
          <DocComponent label="Pastel colors example">
            <template #demo>
              <div class="flex items-end flex-wrap gap-2">
                <BaseIconBox
                  size="md"
                  class="bg-primary-100 text-primary-500 dark:bg-primary-500/20 dark:text-primary-400 dark:border-2 dark:border-primary-500"
                >
                  <i class="i-ph-nut-duotone w-5 h-5"></i>
                </BaseIconBox>
                <BaseIconBox
                  size="md"
                  class="bg-lime-100 text-lime-500 dark:bg-lime-500/20 dark:text-lime-400 dark:border-2 dark:border-lime-500"
                >
                  <i class="i-ph-cookie-duotone w-5 h-5"></i>
                </BaseIconBox>
                <BaseIconBox
                  size="md"
                  class="bg-green-100 text-green-500 dark:bg-green-500/20 dark:text-green-400 dark:border-2 dark:border-green-500"
                >
                  <i class="i-ph-armchair-duotone w-5 h-5"></i>
                </BaseIconBox>
                <BaseIconBox
                  size="md"
                  class="bg-emerald-100 text-emerald-500 dark:bg-emerald-500/20 dark:text-emerald-400 dark:border-2 dark:border-emerald-500"
                >
                  <i class="i-ph-confetti-duotone w-5 h-5"></i>
                </BaseIconBox>
                <BaseIconBox
                  size="md"
                  class="bg-teal-100 text-teal-500 dark:bg-teal-500/20 dark:text-teal-400 dark:border-2 dark:border-teal-500"
                >
                  <i class="i-ph-flask-duotone w-5 h-5"></i>
                </BaseIconBox>
                <BaseIconBox
                  size="md"
                  class="bg-cyan-100 text-cyan-500 dark:bg-cyan-500/20 dark:text-cyan-400 dark:border-2 dark:border-cyan-500"
                >
                  <i class="i-ph-lamp-duotone w-5 h-5"></i>
                </BaseIconBox>
                <BaseIconBox
                  size="md"
                  class="bg-sky-100 text-sky-500 dark:bg-sky-500/20 dark:text-sky-400 dark:border-2 dark:border-sky-500"
                >
                  <i class="i-ph-pill-duotone w-5 h-5"></i>
                </BaseIconBox>
                <BaseIconBox
                  size="md"
                  class="bg-blue-100 text-blue-500 dark:bg-blue-500/20 dark:text-blue-400 dark:border-2 dark:border-blue-500"
                >
                  <i class="i-ph-chat-circle-dots-duotone w-5 h-5"></i>
                </BaseIconBox>
                <BaseIconBox
                  size="md"
                  class="bg-indigo-100 text-indigo-500 dark:bg-indigo-500/20 dark:text-indigo-400 dark:border-2 dark:border-indigo-500"
                >
                  <i class="i-ph-popcorn-duotone w-5 h-5"></i>
                </BaseIconBox>
                <BaseIconBox
                  size="md"
                  class="bg-purple-100 text-purple-500 dark:bg-purple-500/20 dark:text-purple-400 dark:border-2 dark:border-purple-500"
                >
                  <i class="i-ph-medal-duotone w-5 h-5"></i>
                </BaseIconBox>
                <BaseIconBox
                  size="md"
                  class="bg-fuchsia-100 text-fuchsia-500 dark:bg-fuchsia-500/20 dark:text-fuchsia-400 dark:border-2 dark:border-fuchsia-500"
                >
                  <i class="i-ph-rocket-duotone w-5 h-5"></i>
                </BaseIconBox>
                <BaseIconBox
                  size="md"
                  class="bg-pink-100 text-pink-500 dark:bg-pink-500/20 dark:text-pink-400 dark:border-2 dark:border-pink-500"
                >
                  <i class="i-ph-kanban-duotone w-5 h-5"></i>
                </BaseIconBox>
                <BaseIconBox
                  size="md"
                  class="bg-rose-100 text-rose-500 dark:bg-rose-500/20 dark:text-rose-400 dark:border-2 dark:border-rose-500"
                >
                  <i class="i-ph-telegram-logo-duotone w-5 h-5"></i>
                </BaseIconBox>
                <BaseIconBox
                  size="md"
                  class="bg-red-100 text-red-500 dark:bg-red-500/20 dark:text-red-400 dark:border-2 dark:border-red-500"
                >
                  <i class="i-ph-fire-duotone w-5 h-5"></i>
                </BaseIconBox>
                <BaseIconBox
                  size="md"
                  class="bg-orange-100 text-orange-500 dark:bg-orange-500/20 dark:text-orange-400 dark:border-2 dark:border-orange-500"
                >
                  <i class="i-ph-sword-duotone w-5 h-5"></i>
                </BaseIconBox>
                <BaseIconBox
                  size="md"
                  class="bg-amber-100 text-amber-500 dark:bg-amber-500/20 dark:text-amber-400 dark:border-2 dark:border-amber-500"
                >
                  <i class="i-ph-timer-duotone w-5 h-5"></i>
                </BaseIconBox>
                <BaseIconBox
                  size="md"
                  class="bg-yellow-100 text-yellow-500 dark:bg-yellow-500/20 dark:text-yellow-400 dark:border-2 dark:border-yellow-500"
                >
                  <i class="i-ph-toggle-left-duotone w-5 h-5"></i>
                </BaseIconBox>
              </div>
            </template>
            <template #code></template>
          </DocComponent>
        </DocSection>

        <!-- Icon box outline -->
        <DocSection id="iconbox-outline" title="Outline colors" tag="1.0.0">
          <DocComponent label="Outline colors example">
            <template #demo>
              <div class="flex items-end flex-wrap gap-2">
                <BaseIconBox
                  size="md"
                  shape="circle"
                  class="text-gray-400 dark:text-gray-500"
                  bordered
                >
                  <i class="i-ph-popcorn-duotone w-5 h-5"></i>
                </BaseIconBox>
                <BaseIconBox
                  size="md"
                  shape="circle"
                  class="text-primary-500"
                  bordered
                >
                  <i class="i-ph-presentation-chart-duotone w-5 h-5"></i>
                </BaseIconBox>
                <BaseIconBox
                  size="md"
                  shape="circle"
                  class="text-lime-500"
                  bordered
                >
                  <i class="i-ph-paint-roller-duotone w-5 h-5"></i>
                </BaseIconBox>
                <BaseIconBox
                  size="md"
                  shape="circle"
                  class="text-green-500"
                  bordered
                >
                  <i class="i-ph-rocket-duotone w-5 h-5"></i>
                </BaseIconBox>
                <BaseIconBox
                  size="md"
                  shape="circle"
                  class="text-emerald-500"
                  bordered
                >
                  <i class="i-ph-package-duotone w-5 h-5"></i>
                </BaseIconBox>
                <BaseIconBox
                  size="md"
                  shape="circle"
                  class="text-teal-500"
                  bordered
                >
                  <i class="i-ph-parachute-duotone w-5 h-5"></i>
                </BaseIconBox>
                <BaseIconBox
                  size="md"
                  shape="circle"
                  class="text-cyan-500"
                  bordered
                >
                  <i class="i-ph-layout-duotone w-5 h-5"></i>
                </BaseIconBox>
                <BaseIconBox
                  size="md"
                  shape="circle"
                  class="text-sky-500"
                  bordered
                >
                  <i class="i-ph-infinity-duotone w-5 h-5"></i>
                </BaseIconBox>
                <BaseIconBox
                  size="md"
                  shape="circle"
                  class="text-blue-500"
                  bordered
                >
                  <i class="i-ph-flask-duotone w-5 h-5"></i>
                </BaseIconBox>
                <BaseIconBox
                  size="md"
                  shape="circle"
                  class="text-indigo-500"
                  bordered
                >
                  <i class="i-ph-sparkle-duotone w-5 h-5"></i>
                </BaseIconBox>
                <BaseIconBox
                  size="md"
                  shape="circle"
                  class="text-purple-500"
                  bordered
                >
                  <i class="i-ph-sword-duotone w-5 h-5"></i>
                </BaseIconBox>
                <BaseIconBox
                  size="md"
                  shape="circle"
                  class="text-fuchsia-500"
                  bordered
                >
                  <i class="i-ph-trophy-duotone w-5 h-5"></i>
                </BaseIconBox>
                <BaseIconBox
                  size="md"
                  shape="circle"
                  class="text-pink-500"
                  bordered
                >
                  <i class="i-ph-lock-duotone w-5 h-5"></i>
                </BaseIconBox>
                <BaseIconBox
                  size="md"
                  shape="circle"
                  class="text-rose-500"
                  bordered
                >
                  <i class="i-ph-nut-duotone w-5 h-5"></i>
                </BaseIconBox>
                <BaseIconBox
                  size="md"
                  shape="circle"
                  class="text-red-500"
                  bordered
                >
                  <i class="i-ph-paw-print-duotone w-5 h-5"></i>
                </BaseIconBox>
                <BaseIconBox
                  size="md"
                  shape="circle"
                  class="text-orange-500"
                  bordered
                >
                  <i class="i-ph-users-four-duotone w-5 h-5"></i>
                </BaseIconBox>
                <BaseIconBox
                  size="md"
                  shape="circle"
                  class="text-amber-500"
                  bordered
                >
                  <i class="i-ph-key-duotone w-5 h-5"></i>
                </BaseIconBox>
                <BaseIconBox
                  size="md"
                  shape="circle"
                  class="text-yellow-500"
                  bordered
                >
                  <i class="i-ph-gear-six-duotone w-5 h-5"></i>
                </BaseIconBox>
                <BaseIconBox
                  size="md"
                  shape="circle"
                  class="text-slate-800 dark:text-slate-500"
                  bordered
                >
                  <i class="i-ph-toilet-paper-duotone w-5 h-5"></i>
                </BaseIconBox>
              </div>
            </template>
            <template #code></template>
          </DocComponent>
        </DocSection>

        <!-- Icon box elevation -->
        <DocSection id="iconbox-elevation" title="Elevation" tag="1.0.0">
          <DocComponent label="Elevation example">
            <template #demo>
              <div class="flex items-end flex-wrap gap-2">
                <BaseIconBox
                  size="md"
                  shape="circle"
                  class="bg-white border border-slate-200 text-gray-500 dark:bg-slate-700 dark:border-slate-600 shadow-lg"
                >
                  <i class="i-ph-nut-duotone w-5 h-5"></i>
                </BaseIconBox>
                <BaseIconBox
                  size="md"
                  shape="circle"
                  class="bg-primary-500 text-white shadow-lg shadow-primary-500/50"
                >
                  <i class="i-ph-ghost-duotone w-5 h-5"></i>
                </BaseIconBox>
                <BaseIconBox
                  size="md"
                  shape="circle"
                  class="bg-lime-500 text-white shadow-lg shadow-lime-500/50"
                >
                  <i class="i-ph-club-duotone w-5 h-5"></i>
                </BaseIconBox>
                <BaseIconBox
                  size="md"
                  shape="circle"
                  class="bg-green-500 text-white shadow-lg shadow-green-500/50"
                >
                  <i class="i-ph-leaf-duotone w-5 h-5"></i>
                </BaseIconBox>
                <BaseIconBox
                  size="md"
                  shape="circle"
                  class="bg-emerald-500 text-white shadow-lg shadow-emerald-500/50"
                >
                  <i class="i-ph-mountains-duotone w-5 h-5"></i>
                </BaseIconBox>
                <BaseIconBox
                  size="md"
                  shape="circle"
                  class="bg-teal-500 text-white shadow-lg shadow-teal-500/50"
                >
                  <i class="i-ph-paint-brush-broad-duotone w-5 h-5"></i>
                </BaseIconBox>
                <BaseIconBox
                  size="md"
                  shape="circle"
                  class="bg-cyan-500 text-white shadow-lg shadow-cyan-500/50"
                >
                  <i class="i-ph-rocket-duotone w-5 h-5"></i>
                </BaseIconBox>
                <BaseIconBox
                  size="md"
                  shape="circle"
                  class="bg-sky-500 text-white shadow-lg shadow-sky-500/50"
                >
                  <i class="i-ph-popcorn-duotone w-5 h-5"></i>
                </BaseIconBox>
                <BaseIconBox
                  size="md"
                  shape="circle"
                  class="bg-blue-500 text-white shadow-lg shadow-blue-500/50"
                >
                  <i class="i-ph-flask-duotone w-5 h-5"></i>
                </BaseIconBox>
                <BaseIconBox
                  size="md"
                  shape="circle"
                  class="bg-indigo-500 text-white shadow-lg shadow-indigo-500/50"
                >
                  <i class="i-ph-drop-duotone w-5 h-5"></i>
                </BaseIconBox>
                <BaseIconBox
                  size="md"
                  shape="circle"
                  class="bg-purple-500 text-white shadow-lg shadow-purple-500/50"
                >
                  <i class="i-ph-image-square-duotone w-5 h-5"></i>
                </BaseIconBox>
                <BaseIconBox
                  size="md"
                  shape="circle"
                  class="bg-fuchsia-500 text-white shadow-lg shadow-fuchsia-500/50"
                >
                  <i class="i-ph-piano-keys-duotone w-5 h-5"></i>
                </BaseIconBox>
                <BaseIconBox
                  size="md"
                  shape="circle"
                  class="bg-pink-500 text-white shadow-lg shadow-pink-500/50"
                >
                  <i class="i-ph-hand-waving-duotone w-5 h-5"></i>
                </BaseIconBox>
                <BaseIconBox
                  size="md"
                  shape="circle"
                  class="bg-rose-500 text-white shadow-lg shadow-rose-500/50"
                >
                  <i class="i-ph-lock-duotone w-5 h-5"></i>
                </BaseIconBox>
                <BaseIconBox
                  size="md"
                  shape="circle"
                  class="bg-red-500 text-white shadow-lg shadow-red-500/50"
                >
                  <i class="i-ph-lightning-duotone w-5 h-5"></i>
                </BaseIconBox>
                <BaseIconBox
                  size="md"
                  shape="circle"
                  class="bg-orange-500 text-white shadow-lg shadow-orange-500/50"
                >
                  <i class="i-ph-pizza-duotone w-5 h-5"></i>
                </BaseIconBox>
                <BaseIconBox
                  size="md"
                  shape="circle"
                  class="bg-amber-500 text-white shadow-lg shadow-amber-500/50"
                >
                  <i class="i-ph-sun-duotone w-5 h-5"></i>
                </BaseIconBox>
                <BaseIconBox
                  size="md"
                  shape="circle"
                  class="bg-yellow-500 text-white shadow-lg shadow-yellow-500/50"
                >
                  <i class="i-ph-sketch-logo-duotone w-5 h-5"></i>
                </BaseIconBox>
                <BaseIconBox
                  size="md"
                  shape="circle"
                  class="bg-slate-800 text-white shadow-lg shadow-slate-500/50"
                >
                  <i class="i-ph-moon-duotone w-5 h-5"></i>
                </BaseIconBox>
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
