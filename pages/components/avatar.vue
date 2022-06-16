<script setup lang="ts">
import { toc } from '@@/documentation/components/avatar/toc'
import { properties } from '@@/documentation/components/avatar/props'
import {
  circleBadge,
  circleDot,
  circleFake,
  circleFakeBadge,
  circleFakeColors,
  circleSize,
  squareBadge,
  squareDot,
  squareFake,
  squareFakeBadge,
  squareFakeColors,
  squareSize,
} from '@@/documentation/components/avatar'

definePageMeta({
  title: 'Avatars',
})
</script>

<template>
  <div>
    <!-- BreadCrumb -->
    <div class="flex items-center font-text mb-6">
      <NuxtLink
        to="/"
        class="block text-slate-500 hover:text-primary-500 transition-colors duration-300"
      >
        <i class="i-lucide-home block w-4 h-4"></i>
      </NuxtLink>
      <span class="px-2 text-slate-500">·</span>
      <NuxtLink
        to="/components"
        class="block text-slate-500 hover:text-primary-500 transition-colors duration-300"
      >
        <span>Components</span>
      </NuxtLink>
      <span class="px-2 text-slate-500">·</span>
      <NuxtLink
        to="/components/avatar"
        class="block text-slate-500 hover:text-primary-500 transition-colors duration-300"
      >
        <span>Avatars</span>
      </NuxtLink>
    </div>

    <!-- Documentation Layout -->
    <DocLayout>
      <!-- content -->
      <template #content>
        <!-- Avatar size -->
        <DocSection id="circle-sizes" title="Avatar sizes" tag="1.0.0">
          <DocComponent label="Circle avatar sizes">
            <template #demo>
              <div class="flex items-end flex-wrap gap-4">
                <BaseAvatar picture="/img/avatars/1.svg" size="xs" />
                <BaseAvatar picture="/img/avatars/5.svg" size="sm" />
                <BaseAvatar picture="/img/avatars/4.svg" size="md" />
                <BaseAvatar picture="/img/avatars/3.svg" size="lg" />
                <BaseAvatar picture="/img/avatars/8.svg" size="xl" />
                <BaseAvatar picture="/img/avatars/16.svg" size="2xl" />
                <BaseAvatar picture="/img/avatars/2.svg" size="3xl" />
                <BaseAvatar picture="/img/avatars/20.svg" size="4xl" />
              </div>
            </template>
            <template #code>
              <DocCode language="html" :code="circleSize" />
            </template>
          </DocComponent>
        </DocSection>

        <!-- Avatar square size -->
        <DocSection id="square-sizes" title="Avatar sizes" tag="1.0.0">
          <DocComponent label="Square avatar sizes">
            <template #demo>
              <div class="flex items-end flex-wrap gap-4">
                <BaseAvatar
                  picture="/img/avatars/1.svg"
                  size="xs"
                  shape="square"
                />
                <BaseAvatar
                  picture="/img/avatars/5.svg"
                  size="sm"
                  shape="square"
                />
                <BaseAvatar
                  picture="/img/avatars/4.svg"
                  size="md"
                  shape="square"
                />
                <BaseAvatar
                  picture="/img/avatars/3.svg"
                  size="lg"
                  shape="square"
                />
                <BaseAvatar
                  picture="/img/avatars/8.svg"
                  size="xl"
                  shape="square"
                />
                <BaseAvatar
                  picture="/img/avatars/16.svg"
                  size="2xl"
                  shape="square"
                />
                <BaseAvatar
                  picture="/img/avatars/2.svg"
                  size="3xl"
                  shape="square"
                />
                <BaseAvatar
                  picture="/img/avatars/20.svg"
                  size="4xl"
                  shape="square"
                />
              </div>
            </template>
            <template #code>
              <DocCode language="html" :code="squareSize" />
            </template>
          </DocComponent>
        </DocSection>

        <!-- Fallback -->
        <!-- DocSection id="fallback-sizes" title="Avatar sizes" tag="1.0.0">
          <DocComponent label="Square avatar sizes">
            <template #demo>
              <div class="flex items-end flex-wrap gap-4">
                <BaseAvatar picture="no-file.jpg" size="xs" shape="square" />
                <BaseAvatar picture="no-file.jpg" size="sm" shape="square" />
                <BaseAvatar picture="no-file.jpg" size="md" shape="square" />
                <BaseAvatar picture="no-file.jpg" size="lg" shape="square" />
                <BaseAvatar picture="no-file.jpg" size="xl" shape="square" />
                <BaseAvatar picture="no-file.jpg" size="2xl" shape="square" />
                <BaseAvatar picture="no-file.jpg" size="3xl" shape="square" />
                <BaseAvatar picture="no-file.jpg" size="4xl" shape="square" />
              </div>
            </template>
            <template #code>
              <DocCode language="html" :code="squareSize" />
            </template>
          </DocComponent>
        </DocSection -->

        <!-- Circle dot -->
        <DocSection id="circle-dot" title="Avatar dot" tag="1.0.0">
          <DocComponent label="Circle avatar dot">
            <template #demo>
              <div class="flex items-end flex-wrap gap-4">
                <BaseAvatar
                  picture="/img/avatars/1.svg"
                  size="xs"
                  dot
                  dot-color="success"
                />
                <BaseAvatar
                  picture="/img/avatars/5.svg"
                  size="sm"
                  dot
                  dot-color="info"
                />
                <BaseAvatar
                  picture="/img/avatars/4.svg"
                  size="md"
                  dot
                  dot-color="warning"
                />
                <BaseAvatar
                  picture="/img/avatars/3.svg"
                  size="lg"
                  dot
                  dot-color="pink"
                />
                <BaseAvatar
                  picture="/img/avatars/8.svg"
                  size="xl"
                  dot
                  dot-color="danger"
                />
                <BaseAvatar
                  picture="/img/avatars/16.svg"
                  size="2xl"
                  dot
                  dot-color="yellow"
                />
                <BaseAvatar
                  picture="/img/avatars/2.svg"
                  size="3xl"
                  dot
                  dot-color="success"
                />
                <BaseAvatar
                  picture="/img/avatars/20.svg"
                  size="4xl"
                  dot
                  dot-color="success"
                />
              </div>
            </template>
            <template #code>
              <DocCode language="html" :code="circleDot" />
            </template>
          </DocComponent>
        </DocSection>

        <!-- Square dot -->
        <DocSection id="square-dot" title="Avatar dot" tag="1.0.0">
          <DocComponent label="Square avatar dot">
            <template #demo>
              <div class="flex items-end flex-wrap gap-4">
                <BaseAvatar
                  picture="/img/avatars/1.svg"
                  size="xs"
                  shape="square"
                  dot
                  dot-color="success"
                />
                <BaseAvatar
                  picture="/img/avatars/5.svg"
                  size="sm"
                  shape="square"
                  dot
                  dot-color="info"
                />
                <BaseAvatar
                  picture="/img/avatars/4.svg"
                  size="md"
                  shape="square"
                  dot
                  dot-color="warning"
                />
                <BaseAvatar
                  picture="/img/avatars/3.svg"
                  size="lg"
                  shape="square"
                  dot
                  dot-color="pink"
                />
                <BaseAvatar
                  picture="/img/avatars/8.svg"
                  size="xl"
                  shape="square"
                  dot
                  dot-color="danger"
                />
                <BaseAvatar
                  picture="/img/avatars/16.svg"
                  size="2xl"
                  shape="square"
                  dot
                  dot-color="yellow"
                />
                <BaseAvatar
                  picture="/img/avatars/2.svg"
                  size="3xl"
                  shape="square"
                  dot
                  dot-color="success"
                />
                <BaseAvatar
                  picture="/img/avatars/20.svg"
                  size="4xl"
                  shape="square"
                  dot
                  dot-color="success"
                />
              </div>
            </template>
            <template #code>
              <DocCode language="html" :code="squareDot" />
            </template>
          </DocComponent>
        </DocSection>

        <!-- Avatar badge -->
        <DocSection id="circle-badge" title="Avatar badges" tag="1.0.0">
          <DocComponent label="Circle avatar badges">
            <template #demo>
              <div class="flex items-end flex-wrap gap-4">
                <BaseAvatar
                  picture="/img/avatars/1.svg"
                  size="xs"
                  badge="/img/icons/flags/united-states-of-america.svg"
                />
                <BaseAvatar
                  picture="/img/avatars/5.svg"
                  size="sm"
                  badge="/img/icons/flags/united-states-of-america.svg"
                />
                <BaseAvatar
                  picture="/img/avatars/4.svg"
                  size="md"
                  badge="/img/icons/flags/united-states-of-america.svg"
                />
                <BaseAvatar
                  picture="/img/avatars/3.svg"
                  size="lg"
                  badge="/img/icons/flags/united-states-of-america.svg"
                />
                <BaseAvatar
                  picture="/img/avatars/8.svg"
                  size="xl"
                  badge="/img/icons/flags/united-states-of-america.svg"
                />
                <BaseAvatar
                  picture="/img/avatars/16.svg"
                  size="2xl"
                  badge="/img/icons/flags/united-states-of-america.svg"
                />
                <BaseAvatar
                  picture="/img/avatars/2.svg"
                  size="3xl"
                  badge="/img/icons/flags/united-states-of-america.svg"
                />
                <BaseAvatar
                  picture="/img/avatars/20.svg"
                  size="4xl"
                  badge="/img/icons/flags/united-states-of-america.svg"
                />
              </div>
            </template>
            <template #code>
              <DocCode language="html" :code="circleBadge" />
            </template>
          </DocComponent>
        </DocSection>

        <!-- Avatar badge -->
        <DocSection id="square-badge" title="Avatar badges" tag="1.0.0">
          <DocComponent label="Square avatar badges">
            <template #demo>
              <div class="flex items-end flex-wrap gap-4">
                <BaseAvatar
                  picture="/img/avatars/1.svg"
                  size="xs"
                  shape="square"
                  badge="/img/icons/flags/united-states-of-america.svg"
                />
                <BaseAvatar
                  picture="/img/avatars/5.svg"
                  size="sm"
                  shape="square"
                  badge="/img/icons/flags/united-states-of-america.svg"
                />
                <BaseAvatar
                  picture="/img/avatars/4.svg"
                  size="md"
                  shape="square"
                  badge="/img/icons/flags/united-states-of-america.svg"
                />
                <BaseAvatar
                  picture="/img/avatars/3.svg"
                  size="lg"
                  shape="square"
                  badge="/img/icons/flags/united-states-of-america.svg"
                />
                <BaseAvatar
                  picture="/img/avatars/8.svg"
                  size="xl"
                  shape="square"
                  badge="/img/icons/flags/united-states-of-america.svg"
                />
                <BaseAvatar
                  picture="/img/avatars/16.svg"
                  size="2xl"
                  shape="square"
                  badge="/img/icons/flags/united-states-of-america.svg"
                />
                <BaseAvatar
                  picture="/img/avatars/2.svg"
                  size="3xl"
                  shape="square"
                  badge="/img/icons/flags/united-states-of-america.svg"
                />
                <BaseAvatar
                  picture="/img/avatars/20.svg"
                  size="4xl"
                  shape="square"
                  badge="/img/icons/flags/united-states-of-america.svg"
                />
              </div>
            </template>
            <template #code>
              <DocCode language="html" :code="squareBadge" />
            </template>
          </DocComponent>
        </DocSection>

        <!-- Fake size -->
        <DocSection id="circle-fake" title="Fake avatar" tag="1.0.0">
          <DocComponent label="Circle fake sizes">
            <template #demo>
              <div class="flex items-end flex-wrap gap-4">
                <BaseAvatar
                  initials="CT"
                  size="xs"
                  class="bg-slate-200 dark:bg-slate-600 text-slate-800 dark:text-slate-300"
                />
                <BaseAvatar
                  initials="CT"
                  size="sm"
                  class="bg-slate-200 dark:bg-slate-600 text-slate-800 dark:text-slate-300"
                />
                <BaseAvatar
                  initials="CT"
                  size="md"
                  class="bg-slate-200 dark:bg-slate-600 text-slate-800 dark:text-slate-300"
                />
                <BaseAvatar
                  initials="CT"
                  size="lg"
                  class="bg-slate-200 dark:bg-slate-600 text-slate-800 dark:text-slate-300"
                />
                <BaseAvatar
                  initials="CT"
                  size="xl"
                  class="bg-slate-200 dark:bg-slate-600 text-slate-800 dark:text-slate-300"
                />
                <BaseAvatar
                  initials="CT"
                  size="2xl"
                  class="bg-slate-200 dark:bg-slate-600 text-slate-800 dark:text-slate-300"
                />
                <BaseAvatar
                  initials="CT"
                  size="3xl"
                  class="bg-slate-200 dark:bg-slate-600 text-slate-800 dark:text-slate-300"
                />
                <BaseAvatar
                  initials="CT"
                  size="4xl"
                  class="bg-slate-200 dark:bg-slate-600 text-slate-800 dark:text-slate-300"
                />
              </div>
            </template>
            <template #code>
              <DocCode language="html" :code="circleFake" />
            </template>
          </DocComponent>
        </DocSection>

        <!-- Fake square size -->
        <DocSection id="square-fake" title="Fake avatar" tag="1.0.0">
          <DocComponent label="Square fake sizes">
            <template #demo>
              <div class="flex items-end flex-wrap gap-4">
                <BaseAvatar
                  initials="CT"
                  size="xs"
                  shape="square"
                  class="bg-slate-200 dark:bg-slate-600 text-slate-800 dark:text-slate-300"
                />
                <BaseAvatar
                  initials="CT"
                  size="sm"
                  shape="square"
                  class="bg-slate-200 dark:bg-slate-600 text-slate-800 dark:text-slate-300"
                />
                <BaseAvatar
                  initials="CT"
                  size="md"
                  shape="square"
                  class="bg-slate-200 dark:bg-slate-600 text-slate-800 dark:text-slate-300"
                />
                <BaseAvatar
                  initials="CT"
                  size="lg"
                  shape="square"
                  class="bg-slate-200 dark:bg-slate-600 text-slate-800 dark:text-slate-300"
                />
                <BaseAvatar
                  initials="CT"
                  size="xl"
                  shape="square"
                  class="bg-slate-200 dark:bg-slate-600 text-slate-800 dark:text-slate-300"
                />
                <BaseAvatar
                  initials="CT"
                  size="2xl"
                  shape="square"
                  class="bg-slate-200 dark:bg-slate-600 text-slate-800 dark:text-slate-300"
                />
                <BaseAvatar
                  initials="CT"
                  size="3xl"
                  shape="square"
                  class="bg-slate-200 dark:bg-slate-600 text-slate-800 dark:text-slate-300"
                />
                <BaseAvatar
                  initials="CT"
                  size="4xl"
                  shape="square"
                  class="bg-slate-200 dark:bg-slate-600 text-slate-800 dark:text-slate-300"
                />
              </div>
            </template>
            <template #code>
              <DocCode language="html" :code="squareFake" />
            </template>
          </DocComponent>
        </DocSection>

        <!-- Fake badge -->
        <DocSection id="circle-fake-badge" title="Fake badge" tag="1.0.0">
          <DocComponent label="Circle fake badges">
            <template #demo>
              <div class="flex items-end flex-wrap gap-4">
                <BaseAvatar
                  initials="CT"
                  size="xs"
                  badge="/img/icons/flags/united-states-of-america.svg"
                  class="bg-slate-200 dark:bg-slate-600 text-slate-800 dark:text-slate-300"
                />
                <BaseAvatar
                  initials="CT"
                  size="sm"
                  badge="/img/icons/flags/united-states-of-america.svg"
                  class="bg-slate-200 dark:bg-slate-600 text-slate-800 dark:text-slate-300"
                />
                <BaseAvatar
                  initials="CT"
                  size="md"
                  badge="/img/icons/flags/united-states-of-america.svg"
                  class="bg-slate-200 dark:bg-slate-600 text-slate-800 dark:text-slate-300"
                />
                <BaseAvatar
                  initials="CT"
                  size="lg"
                  badge="/img/icons/flags/united-states-of-america.svg"
                  class="bg-slate-200 dark:bg-slate-600 text-slate-800 dark:text-slate-300"
                />
                <BaseAvatar
                  initials="CT"
                  size="xl"
                  badge="/img/icons/flags/united-states-of-america.svg"
                  class="bg-slate-200 dark:bg-slate-600 text-slate-800 dark:text-slate-300"
                />
                <BaseAvatar
                  initials="CT"
                  size="2xl"
                  badge="/img/icons/flags/united-states-of-america.svg"
                  class="bg-slate-200 dark:bg-slate-600 text-slate-800 dark:text-slate-300"
                />
                <BaseAvatar
                  initials="CT"
                  size="3xl"
                  badge="/img/icons/flags/united-states-of-america.svg"
                  class="bg-slate-200 dark:bg-slate-600 text-slate-800 dark:text-slate-300"
                />
                <BaseAvatar
                  initials="CT"
                  size="4xl"
                  badge="/img/icons/flags/united-states-of-america.svg"
                  class="bg-slate-200 dark:bg-slate-600 text-slate-800 dark:text-slate-300"
                />
              </div>
            </template>
            <template #code>
              <DocCode language="html" :code="circleFakeBadge" />
            </template>
          </DocComponent>
        </DocSection>

        <!-- Fake square badge -->
        <DocSection id="square-fake-badge" title="Fake badge" tag="1.0.0">
          <DocComponent label="Square fake badges">
            <template #demo>
              <div class="flex items-end flex-wrap gap-4">
                <BaseAvatar
                  initials="CT"
                  size="xs"
                  badge="/img/icons/flags/united-states-of-america.svg"
                  shape="square"
                  class="bg-slate-200 dark:bg-slate-600 text-slate-800 dark:text-slate-300"
                />
                <BaseAvatar
                  initials="CT"
                  size="sm"
                  badge="/img/icons/flags/united-states-of-america.svg"
                  shape="square"
                  class="bg-slate-200 dark:bg-slate-600 text-slate-800 dark:text-slate-300"
                />
                <BaseAvatar
                  initials="CT"
                  size="md"
                  badge="/img/icons/flags/united-states-of-america.svg"
                  shape="square"
                  class="bg-slate-200 dark:bg-slate-600 text-slate-800 dark:text-slate-300"
                />
                <BaseAvatar
                  initials="CT"
                  size="lg"
                  badge="/img/icons/flags/united-states-of-america.svg"
                  shape="square"
                  class="bg-slate-200 dark:bg-slate-600 text-slate-800 dark:text-slate-300"
                />
                <BaseAvatar
                  initials="CT"
                  size="xl"
                  badge="/img/icons/flags/united-states-of-america.svg"
                  shape="square"
                  class="bg-slate-200 dark:bg-slate-600 text-slate-800 dark:text-slate-300"
                />
                <BaseAvatar
                  initials="CT"
                  size="2xl"
                  badge="/img/icons/flags/united-states-of-america.svg"
                  shape="square"
                  class="bg-slate-200 dark:bg-slate-600 text-slate-800 dark:text-slate-300"
                />
                <BaseAvatar
                  initials="CT"
                  size="3xl"
                  badge="/img/icons/flags/united-states-of-america.svg"
                  shape="square"
                  class="bg-slate-200 dark:bg-slate-600 text-slate-800 dark:text-slate-300"
                />
                <BaseAvatar
                  initials="CT"
                  size="4xl"
                  badge="/img/icons/flags/united-states-of-america.svg"
                  shape="square"
                  class="bg-slate-200 dark:bg-slate-600 text-slate-800 dark:text-slate-300"
                />
              </div>
            </template>
            <template #code>
              <DocCode language="html" :code="squareFakeBadge" />
            </template>
          </DocComponent>
        </DocSection>

        <!-- Fake colors -->
        <DocSection id="circle-fake-colors" title="Fake colors" tag="1.0.0">
          <DocComponent label="Circle fake colors">
            <template #demo>
              <div class="flex items-end flex-wrap gap-2">
                <BaseAvatar
                  initials="CT"
                  size="md"
                  class="bg-slate-200 dark:bg-slate-600 text-slate-800 dark:text-slate-300"
                />
                <BaseAvatar
                  initials="CT"
                  size="md"
                  class="bg-primary-100 dark:bg-primary-500 text-primary-500 dark:text-white"
                />
                <BaseAvatar
                  initials="CT"
                  size="md"
                  class="bg-lime-100 dark:bg-lime-500 text-lime-500 dark:text-white"
                />
                <BaseAvatar
                  initials="CT"
                  size="md"
                  class="bg-green-100 dark:bg-green-500 text-green-500 dark:text-white"
                />
                <BaseAvatar
                  initials="CT"
                  size="md"
                  class="bg-emerald-100 dark:bg-emerald-500 text-emerald-500 dark:text-white"
                />
                <BaseAvatar
                  initials="CT"
                  size="md"
                  class="bg-teal-100 dark:bg-teal-500 text-teal-500 dark:text-white"
                />
                <BaseAvatar
                  initials="CT"
                  size="md"
                  class="bg-cyan-100 dark:bg-cyan-500 text-cyan-500 dark:text-white"
                />
                <BaseAvatar
                  initials="CT"
                  size="md"
                  class="bg-sky-100 dark:bg-sky-500 text-sky-500 dark:text-white"
                />
                <BaseAvatar
                  initials="CT"
                  size="md"
                  class="bg-blue-100 dark:bg-blue-500 text-blue-500 dark:text-white"
                />
                <BaseAvatar
                  initials="CT"
                  size="md"
                  class="bg-indigo-100 dark:bg-indigo-500 text-indigo-500 dark:text-white"
                />
                <BaseAvatar
                  initials="CT"
                  size="md"
                  class="bg-violet-100 dark:bg-violet-500 text-violet-500 dark:text-white"
                />
                <BaseAvatar
                  initials="CT"
                  size="md"
                  class="bg-purple-100 dark:bg-purple-500 text-purple-500 dark:text-white"
                />
                <BaseAvatar
                  initials="CT"
                  size="md"
                  class="bg-fuchsia-100 dark:bg-fuchsia-500 text-fuchsia-500 dark:text-white"
                />
                <BaseAvatar
                  initials="CT"
                  size="md"
                  class="bg-pink-100 dark:bg-pink-500 text-pink-500 dark:text-white"
                />
                <BaseAvatar
                  initials="CT"
                  size="md"
                  class="bg-rose-100 dark:bg-rose-500 text-rose-500 dark:text-white"
                />
                <BaseAvatar
                  initials="CT"
                  size="md"
                  class="bg-red-100 dark:bg-red-500 text-red-500 dark:text-white"
                />
                <BaseAvatar
                  initials="CT"
                  size="md"
                  class="bg-orange-100 dark:bg-orange-500 text-orange-500 dark:text-white"
                />
                <BaseAvatar
                  initials="CT"
                  size="md"
                  class="bg-amber-100 dark:bg-amber-500 text-amber-500 dark:text-white"
                />
                <BaseAvatar
                  initials="CT"
                  size="md"
                  class="bg-yellow-100 dark:bg-yellow-500 text-yellow-500 dark:text-white"
                />
              </div>
            </template>
            <template #code>
              <DocCode language="html" :code="circleFakeColors" />
            </template>
          </DocComponent>
        </DocSection>

        <!-- Fake square colors -->
        <DocSection id="square-fake-colors" title="Fake colors" tag="1.0.0">
          <DocComponent label="Square fake colors">
            <template #demo>
              <div class="flex items-end flex-wrap gap-2">
                <BaseAvatar
                  initials="CT"
                  size="md"
                  shape="square"
                  class="bg-slate-200 dark:bg-slate-600 text-slate-800 dark:text-slate-300"
                />
                <BaseAvatar
                  initials="CT"
                  size="md"
                  shape="square"
                  class="bg-primary-100 dark:bg-primary-500 text-primary-500 dark:text-white"
                />
                <BaseAvatar
                  initials="CT"
                  size="md"
                  shape="square"
                  class="bg-lime-100 dark:bg-lime-500 text-lime-500 dark:text-white"
                />
                <BaseAvatar
                  initials="CT"
                  size="md"
                  shape="square"
                  class="bg-green-100 dark:bg-green-500 text-green-500 dark:text-white"
                />
                <BaseAvatar
                  initials="CT"
                  size="md"
                  shape="square"
                  class="bg-emerald-100 dark:bg-emerald-500 text-emerald-500 dark:text-white"
                />
                <BaseAvatar
                  initials="CT"
                  size="md"
                  shape="square"
                  class="bg-teal-100 dark:bg-teal-500 text-teal-500 dark:text-white"
                />
                <BaseAvatar
                  initials="CT"
                  size="md"
                  shape="square"
                  class="bg-cyan-100 dark:bg-cyan-500 text-cyan-500 dark:text-white"
                />
                <BaseAvatar
                  initials="CT"
                  size="md"
                  shape="square"
                  class="bg-sky-100 dark:bg-sky-500 text-sky-500 dark:text-white"
                />
                <BaseAvatar
                  initials="CT"
                  size="md"
                  shape="square"
                  class="bg-blue-100 dark:bg-blue-500 text-blue-500 dark:text-white"
                />
                <BaseAvatar
                  initials="CT"
                  size="md"
                  shape="square"
                  class="bg-indigo-100 dark:bg-indigo-500 text-indigo-500 dark:text-white"
                />
                <BaseAvatar
                  initials="CT"
                  size="md"
                  shape="square"
                  class="bg-violet-100 dark:bg-violet-500 text-violet-500 dark:text-white"
                />
                <BaseAvatar
                  initials="CT"
                  size="md"
                  shape="square"
                  class="bg-purple-100 dark:bg-purple-500 text-purple-500 dark:text-white"
                />
                <BaseAvatar
                  initials="CT"
                  size="md"
                  shape="square"
                  class="bg-fuchsia-100 dark:bg-fuchsia-500 text-fuchsia-500 dark:text-white"
                />
                <BaseAvatar
                  initials="CT"
                  size="md"
                  shape="square"
                  class="bg-pink-100 dark:bg-pink-500 text-pink-500 dark:text-white"
                />
                <BaseAvatar
                  initials="CT"
                  size="md"
                  shape="square"
                  class="bg-rose-100 dark:bg-rose-500 text-rose-500 dark:text-white"
                />
                <BaseAvatar
                  initials="CT"
                  size="md"
                  shape="square"
                  class="bg-red-100 dark:bg-red-500 text-red-500 dark:text-white"
                />
                <BaseAvatar
                  initials="CT"
                  size="md"
                  shape="square"
                  class="bg-orange-100 dark:bg-orange-500 text-orange-500 dark:text-white"
                />
                <BaseAvatar
                  initials="CT"
                  size="md"
                  shape="square"
                  class="bg-amber-100 dark:bg-amber-500 text-amber-500 dark:text-white"
                />
                <BaseAvatar
                  initials="CT"
                  size="md"
                  shape="square"
                  class="bg-yellow-100 dark:bg-yellow-500 text-yellow-500 dark:text-white"
                />
              </div>
            </template>
            <template #code>
              <DocCode language="html" :code="squareFakeColors" />
            </template>
          </DocComponent>
        </DocSection>

        <DocProps
          component="Avatar"
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
