<script setup lang="ts">
import {
  circleSizes,
  elevation,
  outline,
  pastel,
  roundedSizes,
  solid,
} from '@@/documentation/components/iconbox'
import { properties } from '@@/documentation/components/iconbox/properties'

definePageMeta({
  title: 'Icon Boxes',
  documentation: {
    category: 'Display',
    components: ['BaseIconBox'],
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
        <!-- Icon box rounded -->
        <DocSection title="Rounded box" tag="1.0.0">
          <DocComponent label="Rounded boxes sizes">
            <template #demo>
              <div class="flex flex-wrap items-end gap-4">
                <BaseIconBox
                  size="xs"
                  class="bg-gray-200 text-gray-500 dark:bg-gray-800"
                >
                  <BaseIcon name="ph:nut-duotone" class="h-3 w-3" />
                </BaseIconBox>
                <BaseIconBox
                  size="sm"
                  class="bg-gray-200 text-gray-500 dark:bg-gray-800"
                >
                  <BaseIcon name="ph:nut-duotone" class="h-4 w-4" />
                </BaseIconBox>
                <BaseIconBox
                  size="md"
                  class="bg-gray-200 text-gray-500 dark:bg-gray-800"
                >
                  <BaseIcon name="ph:nut-duotone" class="h-5 w-5" />
                </BaseIconBox>
                <BaseIconBox
                  size="lg"
                  class="bg-gray-200 text-gray-500 dark:bg-gray-800"
                >
                  <BaseIcon name="ph:nut-duotone" class="h-6 w-6" />
                </BaseIconBox>
                <BaseIconBox
                  size="xl"
                  class="bg-gray-200 text-gray-500 dark:bg-gray-800"
                >
                  <BaseIcon name="ph:nut-duotone" class="h-7 w-7" />
                </BaseIconBox>
                <BaseIconBox
                  size="2xl"
                  class="bg-gray-200 text-gray-500 dark:bg-gray-800"
                >
                  <BaseIcon name="ph:nut-duotone" class="h-8 w-8" />
                </BaseIconBox>
              </div>
            </template>
            <template #code>
              <DocCode language="html" :code="roundedSizes" />
            </template>
          </DocComponent>
        </DocSection>

        <!-- Icon box circle -->
        <DocSection title="Circle box" tag="1.0.0">
          <DocComponent label="Circle boxes sizes">
            <template #demo>
              <div class="flex flex-wrap items-end gap-4">
                <BaseIconBox
                  size="xs"
                  shape="circle"
                  class="bg-gray-200 text-gray-500 dark:bg-gray-800"
                >
                  <BaseIcon name="ph:nut-duotone" class="h-3 w-3" />
                </BaseIconBox>
                <BaseIconBox
                  size="sm"
                  shape="circle"
                  class="bg-gray-200 text-gray-500 dark:bg-gray-800"
                >
                  <BaseIcon name="ph:nut-duotone" class="h-4 w-4" />
                </BaseIconBox>
                <BaseIconBox
                  size="md"
                  shape="circle"
                  class="bg-gray-200 text-gray-500 dark:bg-gray-800"
                >
                  <BaseIcon name="ph:nut-duotone" class="h-5 w-5" />
                </BaseIconBox>
                <BaseIconBox
                  size="lg"
                  shape="circle"
                  class="bg-gray-200 text-gray-500 dark:bg-gray-800"
                >
                  <BaseIcon name="ph:nut-duotone" class="h-6 w-6" />
                </BaseIconBox>
                <BaseIconBox
                  size="xl"
                  shape="circle"
                  class="bg-gray-200 text-gray-500 dark:bg-gray-800"
                >
                  <BaseIcon name="ph:nut-duotone" class="h-7 w-7" />
                </BaseIconBox>
                <BaseIconBox
                  size="2xl"
                  shape="circle"
                  class="bg-gray-200 text-gray-500 dark:bg-gray-800"
                >
                  <BaseIcon name="ph:nut-duotone" class="h-8 w-8" />
                </BaseIconBox>
              </div>
            </template>
            <template #code>
              <DocCode language="html" :code="circleSizes" />
            </template>
          </DocComponent>
        </DocSection>

        <!-- Icon box solid -->
        <DocSection title="Solid colors" tag="1.0.0">
          <DocComponent label="Solid colors example">
            <template #demo>
              <div class="flex flex-wrap items-end gap-2">
                <BaseIconBox
                  size="md"
                  shape="circle"
                  class="border border-muted-200 bg-white text-gray-500 dark:border-muted-600 dark:bg-muted-700"
                >
                  <BaseIcon name="ph:nut-duotone" class="h-5 w-5" />
                </BaseIconBox>
                <BaseIconBox
                  size="md"
                  shape="circle"
                  class="bg-gray-200 text-gray-500 dark:bg-gray-800"
                >
                  <BaseIcon name="ph:cat-duotone" class="h-5 w-5" />
                </BaseIconBox>
                <BaseIconBox
                  size="md"
                  shape="circle"
                  class="bg-primary-500 text-white"
                >
                  <BaseIcon name="ph:ghost-duotone" class="h-5 w-5" />
                </BaseIconBox>
                <BaseIconBox
                  size="md"
                  shape="circle"
                  class="bg-lime-500 text-white"
                >
                  <BaseIcon name="ph:club-duotone" class="h-5 w-5" />
                </BaseIconBox>
                <BaseIconBox
                  size="md"
                  shape="circle"
                  class="bg-green-500 text-white"
                >
                  <BaseIcon name="ph:leaf-duotone" class="h-5 w-5" />
                </BaseIconBox>
                <BaseIconBox
                  size="md"
                  shape="circle"
                  class="bg-emerald-500 text-white"
                >
                  <BaseIcon name="ph:mountains-duotone" class="h-5 w-5" />
                </BaseIconBox>
                <BaseIconBox
                  size="md"
                  shape="circle"
                  class="bg-teal-500 text-white"
                >
                  <BaseIcon
                    name="ph:paint-brush-broad-duotone"
                    class="h-5 w-5"
                  />
                </BaseIconBox>
                <BaseIconBox
                  size="md"
                  shape="circle"
                  class="bg-cyan-500 text-white"
                >
                  <BaseIcon name="ph:rocket-duotone" class="h-5 w-5" />
                </BaseIconBox>
                <BaseIconBox
                  size="md"
                  shape="circle"
                  class="bg-sky-500 text-white"
                >
                  <BaseIcon name="ph:popcorn-duotone" class="h-5 w-5" />
                </BaseIconBox>
                <BaseIconBox
                  size="md"
                  shape="circle"
                  class="bg-blue-500 text-white"
                >
                  <BaseIcon name="ph:flask-duotone" class="h-5 w-5" />
                </BaseIconBox>
                <BaseIconBox
                  size="md"
                  shape="circle"
                  class="bg-indigo-500 text-white"
                >
                  <BaseIcon name="ph:drop-duotone" class="h-5 w-5" />
                </BaseIconBox>
                <BaseIconBox
                  size="md"
                  shape="circle"
                  class="bg-purple-500 text-white"
                >
                  <BaseIcon name="ph:image-square-duotone" class="h-5 w-5" />
                </BaseIconBox>
                <BaseIconBox
                  size="md"
                  shape="circle"
                  class="bg-fuchsia-500 text-white"
                >
                  <BaseIcon name="ph:piano-keys-duotone" class="h-5 w-5" />
                </BaseIconBox>
                <BaseIconBox
                  size="md"
                  shape="circle"
                  class="bg-pink-500 text-white"
                >
                  <BaseIcon name="ph:hand-waving-duotone" class="h-5 w-5" />
                </BaseIconBox>
                <BaseIconBox
                  size="md"
                  shape="circle"
                  class="bg-rose-500 text-white"
                >
                  <BaseIcon name="ph:lock-duotone" class="h-5 w-5" />
                </BaseIconBox>
                <BaseIconBox
                  size="md"
                  shape="circle"
                  class="bg-red-500 text-white"
                >
                  <BaseIcon name="ph:lightning-duotone" class="h-5 w-5" />
                </BaseIconBox>
                <BaseIconBox
                  size="md"
                  shape="circle"
                  class="bg-orange-500 text-white"
                >
                  <BaseIcon name="ph:pizza-duotone" class="h-5 w-5" />
                </BaseIconBox>
                <BaseIconBox
                  size="md"
                  shape="circle"
                  class="bg-amber-500 text-white"
                >
                  <BaseIcon name="ph:sun-duotone" class="h-5 w-5" />
                </BaseIconBox>
                <BaseIconBox
                  size="md"
                  shape="circle"
                  class="bg-yellow-500 text-white"
                >
                  <BaseIcon name="ph:sketch-logo-duotone" class="h-5 w-5" />
                </BaseIconBox>
                <BaseIconBox
                  size="md"
                  shape="circle"
                  class="bg-muted-800 text-white"
                >
                  <BaseIcon name="ph:moon-duotone" class="h-5 w-5" />
                </BaseIconBox>
              </div>
            </template>
            <template #code>
              <DocCode language="html" :code="solid" />
            </template>
          </DocComponent>
        </DocSection>

        <!-- Icon box pastel -->
        <DocSection title="Pastel colors" tag="1.0.0">
          <DocComponent label="Pastel colors example">
            <template #demo>
              <div class="flex flex-wrap items-end gap-2">
                <BaseIconBox
                  size="md"
                  class="bg-primary-100 text-primary-500 dark:border-2 dark:border-primary-500 dark:bg-primary-500/20 dark:text-primary-400"
                >
                  <BaseIcon name="ph:nut-duotone" class="h-5 w-5" />
                </BaseIconBox>
                <BaseIconBox
                  size="md"
                  class="bg-lime-100 text-lime-500 dark:border-2 dark:border-lime-500 dark:bg-lime-500/20 dark:text-lime-400"
                >
                  <BaseIcon name="ph:cookie-duotone" class="h-5 w-5" />
                </BaseIconBox>
                <BaseIconBox
                  size="md"
                  class="bg-green-100 text-green-500 dark:border-2 dark:border-green-500 dark:bg-green-500/20 dark:text-green-400"
                >
                  <BaseIcon name="ph:armchair-duotone" class="h-5 w-5" />
                </BaseIconBox>
                <BaseIconBox
                  size="md"
                  class="bg-emerald-100 text-emerald-500 dark:border-2 dark:border-emerald-500 dark:bg-emerald-500/20 dark:text-emerald-400"
                >
                  <BaseIcon name="ph:confetti-duotone" class="h-5 w-5" />
                </BaseIconBox>
                <BaseIconBox
                  size="md"
                  class="bg-teal-100 text-teal-500 dark:border-2 dark:border-teal-500 dark:bg-teal-500/20 dark:text-teal-400"
                >
                  <BaseIcon name="ph:flask-duotone" class="h-5 w-5" />
                </BaseIconBox>
                <BaseIconBox
                  size="md"
                  class="bg-cyan-100 text-cyan-500 dark:border-2 dark:border-cyan-500 dark:bg-cyan-500/20 dark:text-cyan-400"
                >
                  <BaseIcon name="ph:lamp-duotone" class="h-5 w-5" />
                </BaseIconBox>
                <BaseIconBox
                  size="md"
                  class="bg-sky-100 text-sky-500 dark:border-2 dark:border-sky-500 dark:bg-sky-500/20 dark:text-sky-400"
                >
                  <BaseIcon name="ph:pill-duotone" class="h-5 w-5" />
                </BaseIconBox>
                <BaseIconBox
                  size="md"
                  class="bg-blue-100 text-blue-500 dark:border-2 dark:border-blue-500 dark:bg-blue-500/20 dark:text-blue-400"
                >
                  <BaseIcon
                    name="ph:chat-circle-dots-duotone"
                    class="h-5 w-5"
                  />
                </BaseIconBox>
                <BaseIconBox
                  size="md"
                  class="bg-indigo-100 text-indigo-500 dark:border-2 dark:border-indigo-500 dark:bg-indigo-500/20 dark:text-indigo-400"
                >
                  <BaseIcon name="ph:popcorn-duotone" class="h-5 w-5" />
                </BaseIconBox>
                <BaseIconBox
                  size="md"
                  class="bg-purple-100 text-purple-500 dark:border-2 dark:border-purple-500 dark:bg-purple-500/20 dark:text-purple-400"
                >
                  <BaseIcon name="ph:medal-duotone" class="h-5 w-5" />
                </BaseIconBox>
                <BaseIconBox
                  size="md"
                  class="bg-fuchsia-100 text-fuchsia-500 dark:border-2 dark:border-fuchsia-500 dark:bg-fuchsia-500/20 dark:text-fuchsia-400"
                >
                  <BaseIcon name="ph:rocket-duotone" class="h-5 w-5" />
                </BaseIconBox>
                <BaseIconBox
                  size="md"
                  class="bg-pink-100 text-pink-500 dark:border-2 dark:border-pink-500 dark:bg-pink-500/20 dark:text-pink-400"
                >
                  <BaseIcon name="ph:kanban-duotone" class="h-5 w-5" />
                </BaseIconBox>
                <BaseIconBox
                  size="md"
                  class="bg-rose-100 text-rose-500 dark:border-2 dark:border-rose-500 dark:bg-rose-500/20 dark:text-rose-400"
                >
                  <BaseIcon name="ph:telegram-logo-duotone" class="h-5 w-5" />
                </BaseIconBox>
                <BaseIconBox
                  size="md"
                  class="bg-red-100 text-red-500 dark:border-2 dark:border-red-500 dark:bg-red-500/20 dark:text-red-400"
                >
                  <BaseIcon name="ph:fire-duotone" class="h-5 w-5" />
                </BaseIconBox>
                <BaseIconBox
                  size="md"
                  class="bg-orange-100 text-orange-500 dark:border-2 dark:border-orange-500 dark:bg-orange-500/20 dark:text-orange-400"
                >
                  <BaseIcon name="ph:sword-duotone" class="h-5 w-5" />
                </BaseIconBox>
                <BaseIconBox
                  size="md"
                  class="bg-amber-100 text-amber-500 dark:border-2 dark:border-amber-500 dark:bg-amber-500/20 dark:text-amber-400"
                >
                  <BaseIcon name="ph:timer-duotone" class="h-5 w-5" />
                </BaseIconBox>
                <BaseIconBox
                  size="md"
                  class="bg-yellow-100 text-yellow-500 dark:border-2 dark:border-yellow-500 dark:bg-yellow-500/20 dark:text-yellow-400"
                >
                  <BaseIcon name="ph:toggle-left-duotone" class="h-5 w-5" />
                </BaseIconBox>
              </div>
            </template>
            <template #code>
              <DocCode language="html" :code="pastel" />
            </template>
          </DocComponent>
        </DocSection>

        <!-- Icon box outline -->
        <DocSection title="Outline colors" tag="1.0.0">
          <DocComponent label="Outline colors example">
            <template #demo>
              <div class="flex flex-wrap items-end gap-2">
                <BaseIconBox
                  size="md"
                  shape="circle"
                  class="text-gray-400 dark:text-gray-500"
                  bordered
                >
                  <BaseIcon name="ph:popcorn-duotone" class="h-5 w-5" />
                </BaseIconBox>
                <BaseIconBox
                  size="md"
                  shape="circle"
                  class="text-primary-500"
                  bordered
                >
                  <BaseIcon
                    name="ph:presentation-chart-duotone"
                    class="h-5 w-5"
                  />
                </BaseIconBox>
                <BaseIconBox
                  size="md"
                  shape="circle"
                  class="text-lime-500"
                  bordered
                >
                  <BaseIcon name="ph:paint-roller-duotone" class="h-5 w-5" />
                </BaseIconBox>
                <BaseIconBox
                  size="md"
                  shape="circle"
                  class="text-green-500"
                  bordered
                >
                  <BaseIcon name="ph:rocket-duotone" class="h-5 w-5" />
                </BaseIconBox>
                <BaseIconBox
                  size="md"
                  shape="circle"
                  class="text-emerald-500"
                  bordered
                >
                  <BaseIcon name="ph:package-duotone" class="h-5 w-5" />
                </BaseIconBox>
                <BaseIconBox
                  size="md"
                  shape="circle"
                  class="text-teal-500"
                  bordered
                >
                  <BaseIcon name="ph:parachute-duotone" class="h-5 w-5" />
                </BaseIconBox>
                <BaseIconBox
                  size="md"
                  shape="circle"
                  class="text-cyan-500"
                  bordered
                >
                  <BaseIcon name="ph:layout-duotone" class="h-5 w-5" />
                </BaseIconBox>
                <BaseIconBox
                  size="md"
                  shape="circle"
                  class="text-sky-500"
                  bordered
                >
                  <BaseIcon name="ph:infinity-duotone" class="h-5 w-5" />
                </BaseIconBox>
                <BaseIconBox
                  size="md"
                  shape="circle"
                  class="text-blue-500"
                  bordered
                >
                  <BaseIcon name="ph:flask-duotone" class="h-5 w-5" />
                </BaseIconBox>
                <BaseIconBox
                  size="md"
                  shape="circle"
                  class="text-indigo-500"
                  bordered
                >
                  <BaseIcon name="ph:sparkle-duotone" class="h-5 w-5" />
                </BaseIconBox>
                <BaseIconBox
                  size="md"
                  shape="circle"
                  class="text-purple-500"
                  bordered
                >
                  <BaseIcon name="ph:sword-duotone" class="h-5 w-5" />
                </BaseIconBox>
                <BaseIconBox
                  size="md"
                  shape="circle"
                  class="text-fuchsia-500"
                  bordered
                >
                  <BaseIcon name="ph:trophy-duotone" class="h-5 w-5" />
                </BaseIconBox>
                <BaseIconBox
                  size="md"
                  shape="circle"
                  class="text-pink-500"
                  bordered
                >
                  <BaseIcon name="ph:lock-duotone" class="h-5 w-5" />
                </BaseIconBox>
                <BaseIconBox
                  size="md"
                  shape="circle"
                  class="text-rose-500"
                  bordered
                >
                  <BaseIcon name="ph:nut-duotone" class="h-5 w-5" />
                </BaseIconBox>
                <BaseIconBox
                  size="md"
                  shape="circle"
                  class="text-red-500"
                  bordered
                >
                  <BaseIcon name="ph:paw-print-duotone" class="h-5 w-5" />
                </BaseIconBox>
                <BaseIconBox
                  size="md"
                  shape="circle"
                  class="text-orange-500"
                  bordered
                >
                  <BaseIcon name="ph:users-four-duotone" class="h-5 w-5" />
                </BaseIconBox>
                <BaseIconBox
                  size="md"
                  shape="circle"
                  class="text-amber-500"
                  bordered
                >
                  <BaseIcon name="ph:key-duotone" class="h-5 w-5" />
                </BaseIconBox>
                <BaseIconBox
                  size="md"
                  shape="circle"
                  class="text-yellow-500"
                  bordered
                >
                  <BaseIcon name="ph:gear-six-duotone" class="h-5 w-5" />
                </BaseIconBox>
                <BaseIconBox
                  size="md"
                  shape="circle"
                  class="text-muted-800 dark:text-muted-500"
                  bordered
                >
                  <BaseIcon name="ph:toilet-paper-duotone" class="h-5 w-5" />
                </BaseIconBox>
              </div>
            </template>
            <template #code>
              <DocCode language="html" :code="outline" />
            </template>
          </DocComponent>
        </DocSection>

        <!-- Icon box elevation -->
        <DocSection title="Elevation" tag="1.0.0">
          <DocComponent label="Elevation example">
            <template #demo>
              <div class="flex flex-wrap items-end gap-2">
                <BaseIconBox
                  size="md"
                  shape="circle"
                  class="border border-muted-200 bg-white text-gray-500 shadow-lg dark:border-muted-600 dark:bg-muted-700"
                >
                  <BaseIcon name="ph:nut-duotone" class="h-5 w-5" />
                </BaseIconBox>
                <BaseIconBox
                  size="md"
                  shape="circle"
                  class="bg-primary-500 text-white shadow-lg shadow-primary-500/50"
                >
                  <BaseIcon name="ph:ghost-duotone" class="h-5 w-5" />
                </BaseIconBox>
                <BaseIconBox
                  size="md"
                  shape="circle"
                  class="bg-lime-500 text-white shadow-lg shadow-lime-500/50"
                >
                  <BaseIcon name="ph:club-duotone" class="h-5 w-5" />
                </BaseIconBox>
                <BaseIconBox
                  size="md"
                  shape="circle"
                  class="bg-green-500 text-white shadow-lg shadow-green-500/50"
                >
                  <BaseIcon name="ph:leaf-duotone" class="h-5 w-5" />
                </BaseIconBox>
                <BaseIconBox
                  size="md"
                  shape="circle"
                  class="bg-emerald-500 text-white shadow-lg shadow-emerald-500/50"
                >
                  <BaseIcon name="ph:mountains-duotone" class="h-5 w-5" />
                </BaseIconBox>
                <BaseIconBox
                  size="md"
                  shape="circle"
                  class="bg-teal-500 text-white shadow-lg shadow-teal-500/50"
                >
                  <BaseIcon
                    name="ph:paint-brush-broad-duotone"
                    class="h-5 w-5"
                  />
                </BaseIconBox>
                <BaseIconBox
                  size="md"
                  shape="circle"
                  class="bg-cyan-500 text-white shadow-lg shadow-cyan-500/50"
                >
                  <BaseIcon name="ph:rocket-duotone" class="h-5 w-5" />
                </BaseIconBox>
                <BaseIconBox
                  size="md"
                  shape="circle"
                  class="bg-sky-500 text-white shadow-lg shadow-sky-500/50"
                >
                  <BaseIcon name="ph:popcorn-duotone" class="h-5 w-5" />
                </BaseIconBox>
                <BaseIconBox
                  size="md"
                  shape="circle"
                  class="bg-blue-500 text-white shadow-lg shadow-blue-500/50"
                >
                  <BaseIcon name="ph:flask-duotone" class="h-5 w-5" />
                </BaseIconBox>
                <BaseIconBox
                  size="md"
                  shape="circle"
                  class="bg-indigo-500 text-white shadow-lg shadow-indigo-500/50"
                >
                  <BaseIcon name="ph:drop-duotone" class="h-5 w-5" />
                </BaseIconBox>
                <BaseIconBox
                  size="md"
                  shape="circle"
                  class="bg-purple-500 text-white shadow-lg shadow-purple-500/50"
                >
                  <BaseIcon name="ph:image-square-duotone" class="h-5 w-5" />
                </BaseIconBox>
                <BaseIconBox
                  size="md"
                  shape="circle"
                  class="bg-fuchsia-500 text-white shadow-lg shadow-fuchsia-500/50"
                >
                  <BaseIcon name="ph:piano-keys-duotone" class="h-5 w-5" />
                </BaseIconBox>
                <BaseIconBox
                  size="md"
                  shape="circle"
                  class="bg-pink-500 text-white shadow-lg shadow-pink-500/50"
                >
                  <BaseIcon name="ph:hand-waving-duotone" class="h-5 w-5" />
                </BaseIconBox>
                <BaseIconBox
                  size="md"
                  shape="circle"
                  class="bg-rose-500 text-white shadow-lg shadow-rose-500/50"
                >
                  <BaseIcon name="ph:lock-duotone" class="h-5 w-5" />
                </BaseIconBox>
                <BaseIconBox
                  size="md"
                  shape="circle"
                  class="bg-red-500 text-white shadow-lg shadow-red-500/50"
                >
                  <BaseIcon name="ph:lightning-duotone" class="h-5 w-5" />
                </BaseIconBox>
                <BaseIconBox
                  size="md"
                  shape="circle"
                  class="bg-orange-500 text-white shadow-lg shadow-orange-500/50"
                >
                  <BaseIcon name="ph:pizza-duotone" class="h-5 w-5" />
                </BaseIconBox>
                <BaseIconBox
                  size="md"
                  shape="circle"
                  class="bg-amber-500 text-white shadow-lg shadow-amber-500/50"
                >
                  <BaseIcon name="ph:sun-duotone" class="h-5 w-5" />
                </BaseIconBox>
                <BaseIconBox
                  size="md"
                  shape="circle"
                  class="bg-yellow-500 text-white shadow-lg shadow-yellow-500/50"
                >
                  <BaseIcon name="ph:sketch-logo-duotone" class="h-5 w-5" />
                </BaseIconBox>
                <BaseIconBox
                  size="md"
                  shape="circle"
                  class="bg-muted-800 text-white shadow-lg shadow-muted-500/50"
                >
                  <BaseIcon name="ph:moon-duotone" class="h-5 w-5" />
                </BaseIconBox>
              </div>
            </template>
            <template #code>
              <DocCode language="html" :code="elevation" />
            </template>
          </DocComponent>
        </DocSection>

        <!-- Icon box props -->
        <DocProps
          component="BaseIconBox"
          :properties="properties.props"
          :slots="properties.slots"
        />
      </template>
      <!-- Toc -->
      <template #toc>
        <DocToc />
      </template>
    </DocLayout>
  </div>
</template>
