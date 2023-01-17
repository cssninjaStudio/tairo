<script setup lang="ts">
import circleBadge from '~/documentation/avatar/circle-badge.md?raw'
import circleDot from '~/documentation/avatar/circle-dot.md?raw'
import circleFake from '~/documentation/avatar/circle-fake.md?raw'
import circleFakeBadge from '~/documentation/avatar/circle-fake-badge.md?raw'
import circleFakeColors from '~/documentation/avatar/circle-fake-colors.md?raw'
import circleSize from '~/documentation/avatar/circle-size.md?raw'
import squareBadge from '~/documentation/avatar/square-badge.md?raw'
import squareDot from '~/documentation/avatar/square-dot.md?raw'
import squareFake from '~/documentation/avatar/square-fake.md?raw'
import squareFakeBadge from '~/documentation/avatar/square-fake-badge.md?raw'
import squareFakeColors from '~/documentation/avatar/square-fake-colors.md?raw'
import squareSize from '~/documentation/avatar/square-size.md?raw'

definePageMeta({
  title: 'Avatars',
  documentation: {
    category: 'Display',
    components: ['BaseAvatar'],
  },
})

const demoBreadcrumb = [
  {
    label: 'Home',
    hideLabel: true,
    icon: 'lucide:home',
    to: '/',
  },
  {
    label: 'Components Hub',
    hideLabel: false,
    to: '/',
  },
  {
    label: 'Avatars',
    hideLabel: false,
    to: '/',
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
        <!-- Avatar size -->
        <DocSection title="Avatar sizes" tag="1.0.0">
          <DocComponent label="Circle avatar sizes">
            <template #demo>
              <div class="flex flex-wrap items-end gap-4">
                <BaseAvatar size="xs">
                  <NuxtImg src="/img/avatars/1.svg" />
                </BaseAvatar>
                <BaseAvatar src="/img/avatars/5.svg" />
                <BaseAvatar src="/img/avatars/4.svg" size="md" />
                <BaseAvatar src="/img/avatars/3.svg" size="lg" />
                <BaseAvatar src="/img/avatars/8.svg" size="xl" />
                <BaseAvatar src="/img/avatars/16.svg" size="2xl" />
                <BaseAvatar src="/img/avatars/2.svg" size="3xl" />
                <BaseAvatar src="/img/avatars/20.svg" size="4xl" />
              </div>
            </template>
            <template #code>
              <DocMarkdown :source="circleSize" class="prose max-w-full" />
            </template>
          </DocComponent>
        </DocSection>

        <!-- Avatar square size -->
        <DocSection title="Avatar sizes" tag="1.0.0">
          <DocComponent label="Square avatar sizes">
            <template #demo>
              <div class="flex flex-wrap items-end gap-4">
                <BaseAvatar src="/img/avatars/1.svg" size="xs" shape="square" />
                <BaseAvatar src="/img/avatars/5.svg" shape="square" />
                <BaseAvatar src="/img/avatars/4.svg" size="md" shape="square" />
                <BaseAvatar src="/img/avatars/3.svg" size="lg" shape="square" />
                <BaseAvatar src="/img/avatars/8.svg" size="xl" shape="square" />
                <BaseAvatar
                  src="/img/avatars/16.svg"
                  size="2xl"
                  shape="square"
                />
                <BaseAvatar
                  src="/img/avatars/2.svg"
                  size="3xl"
                  shape="square"
                />
                <BaseAvatar
                  src="/img/avatars/20.svg"
                  size="4xl"
                  shape="square"
                />
              </div>
            </template>
            <template #code>
              <DocMarkdown :source="squareSize" class="prose max-w-full" />
            </template>
          </DocComponent>
        </DocSection>

        <!-- Fallback -->
        <!-- DocSection title="Avatar sizes" tag="1.0.0">
          <DocComponent label="Square avatar sizes">
            <template #demo>
              <div class="flex items-end flex-wrap gap-4">
                <BaseAvatar src="no-file.jpg" size="xs" shape="square" />
                <BaseAvatar src="no-file.jpg" shape="square" />
                <BaseAvatar src="no-file.jpg" size="md" shape="square" />
                <BaseAvatar src="no-file.jpg" size="lg" shape="square" />
                <BaseAvatar src="no-file.jpg" size="xl" shape="square" />
                <BaseAvatar src="no-file.jpg" size="2xl" shape="square" />
                <BaseAvatar src="no-file.jpg" size="3xl" shape="square" />
                <BaseAvatar src="no-file.jpg" size="4xl" shape="square" />
              </div>
            </template>
            <template #code>
              <DocMarkdown :source="squareSize" class="prose max-w-full" />
            </template>
          </DocComponent>
        </DocSection -->

        <!-- Circle dot -->
        <DocSection title="Avatar dot" tag="1.0.0">
          <DocComponent label="Circle avatar dot">
            <template #demo>
              <div class="flex flex-wrap items-end gap-4">
                <BaseAvatar src="/img/avatars/1.svg" size="xs" dot />
                <BaseAvatar src="/img/avatars/5.svg" dot="info" />
                <BaseAvatar src="/img/avatars/4.svg" size="md" dot="warning" />
                <BaseAvatar src="/img/avatars/3.svg" size="lg" dot="pink" />
                <BaseAvatar src="/img/avatars/8.svg" size="xl" dot="danger" />
                <BaseAvatar src="/img/avatars/16.svg" size="2xl" dot="yellow" />
                <BaseAvatar src="/img/avatars/2.svg" size="3xl" dot />
                <BaseAvatar src="/img/avatars/20.svg" size="4xl" dot />
              </div>
            </template>
            <template #code>
              <DocMarkdown :source="circleDot" class="prose max-w-full" />
            </template>
          </DocComponent>
        </DocSection>

        <!-- Square dot -->
        <DocSection title="Avatar dot" tag="1.0.0">
          <DocComponent label="Square avatar dot">
            <template #demo>
              <div class="flex flex-wrap items-end gap-4">
                <BaseAvatar
                  src="/img/avatars/1.svg"
                  size="xs"
                  shape="square"
                  dot
                />
                <BaseAvatar
                  src="/img/avatars/5.svg"
                  shape="square"
                  dot="info"
                />
                <BaseAvatar
                  src="/img/avatars/4.svg"
                  size="md"
                  shape="square"
                  dot="warning"
                />
                <BaseAvatar
                  src="/img/avatars/3.svg"
                  size="lg"
                  shape="square"
                  dot="pink"
                />
                <BaseAvatar
                  src="/img/avatars/8.svg"
                  size="xl"
                  shape="square"
                  dot="danger"
                />
                <BaseAvatar
                  src="/img/avatars/16.svg"
                  size="2xl"
                  shape="square"
                  dot="yellow"
                />
                <BaseAvatar
                  src="/img/avatars/2.svg"
                  size="3xl"
                  shape="square"
                  dot
                />
                <BaseAvatar
                  src="/img/avatars/20.svg"
                  size="4xl"
                  shape="square"
                  dot
                />
              </div>
            </template>
            <template #code>
              <DocMarkdown :source="squareDot" class="prose max-w-full" />
            </template>
          </DocComponent>
        </DocSection>

        <!-- Avatar badge -->
        <DocSection title="Avatar badges" tag="1.0.0">
          <DocComponent label="Circle avatar badges">
            <template #demo>
              <div class="flex flex-wrap items-end gap-4">
                <BaseAvatar
                  src="/img/avatars/1.svg"
                  size="xs"
                  badgeSrc="/img/icons/flags/united-states-of-america.svg"
                />
                <BaseAvatar
                  src="/img/avatars/5.svg"
                  badgeSrc="/img/icons/flags/united-states-of-america.svg"
                />
                <BaseAvatar
                  src="/img/avatars/4.svg"
                  size="md"
                  badgeSrc="/img/icons/flags/united-states-of-america.svg"
                />
                <BaseAvatar
                  src="/img/avatars/3.svg"
                  size="lg"
                  badgeSrc="/img/icons/flags/united-states-of-america.svg"
                />
                <BaseAvatar
                  src="/img/avatars/8.svg"
                  size="xl"
                  badgeSrc="/img/icons/flags/united-states-of-america.svg"
                />
                <BaseAvatar
                  src="/img/avatars/16.svg"
                  size="2xl"
                  badgeSrc="/img/icons/flags/united-states-of-america.svg"
                />
                <BaseAvatar
                  src="/img/avatars/2.svg"
                  size="3xl"
                  badgeSrc="/img/icons/flags/united-states-of-america.svg"
                />
                <BaseAvatar
                  src="/img/avatars/20.svg"
                  size="4xl"
                  badgeSrc="/img/icons/flags/united-states-of-america.svg"
                />
              </div>
            </template>
            <template #code>
              <DocMarkdown :source="circleBadge" class="prose max-w-full" />
            </template>
          </DocComponent>
        </DocSection>

        <!-- Avatar badge -->
        <DocSection title="Avatar badges" tag="1.0.0">
          <DocComponent label="Square avatar badges">
            <template #demo>
              <div class="flex flex-wrap items-end gap-4">
                <BaseAvatar
                  src="/img/avatars/1.svg"
                  size="xs"
                  shape="square"
                  badgeSrc="/img/icons/flags/united-states-of-america.svg"
                />
                <BaseAvatar
                  src="/img/avatars/5.svg"
                  shape="square"
                  badgeSrc="/img/icons/flags/united-states-of-america.svg"
                />
                <BaseAvatar
                  src="/img/avatars/4.svg"
                  size="md"
                  shape="square"
                  badgeSrc="/img/icons/flags/united-states-of-america.svg"
                />
                <BaseAvatar
                  src="/img/avatars/3.svg"
                  size="lg"
                  shape="square"
                  badgeSrc="/img/icons/flags/united-states-of-america.svg"
                />
                <BaseAvatar
                  src="/img/avatars/8.svg"
                  size="xl"
                  shape="square"
                  badgeSrc="/img/icons/flags/united-states-of-america.svg"
                />
                <BaseAvatar
                  src="/img/avatars/16.svg"
                  size="2xl"
                  shape="square"
                  badgeSrc="/img/icons/flags/united-states-of-america.svg"
                />
                <BaseAvatar
                  src="/img/avatars/2.svg"
                  size="3xl"
                  shape="square"
                  badgeSrc="/img/icons/flags/united-states-of-america.svg"
                />
                <BaseAvatar
                  src="/img/avatars/20.svg"
                  size="4xl"
                  shape="square"
                  badgeSrc="/img/icons/flags/united-states-of-america.svg"
                />
              </div>
            </template>
            <template #code>
              <DocMarkdown :source="squareBadge" class="prose max-w-full" />
            </template>
          </DocComponent>
        </DocSection>

        <!-- Fake size -->
        <DocSection title="Fake avatar" tag="1.0.0">
          <DocComponent label="Circle fake sizes">
            <template #demo>
              <div class="flex flex-wrap items-end gap-4">
                <BaseAvatar
                  text="CT"
                  size="xs"
                  class="bg-muted-200 text-muted-800 dark:bg-muted-600 dark:text-muted-300"
                />
                <BaseAvatar
                  text="CT"
                  class="bg-muted-200 text-muted-800 dark:bg-muted-600 dark:text-muted-300"
                />
                <BaseAvatar
                  text="CT"
                  size="md"
                  class="bg-muted-200 text-muted-800 dark:bg-muted-600 dark:text-muted-300"
                />
                <BaseAvatar
                  text="CT"
                  size="lg"
                  class="bg-muted-200 text-muted-800 dark:bg-muted-600 dark:text-muted-300"
                />
                <BaseAvatar
                  text="CT"
                  size="xl"
                  class="bg-muted-200 text-muted-800 dark:bg-muted-600 dark:text-muted-300"
                />
                <BaseAvatar
                  text="CT"
                  size="2xl"
                  class="bg-muted-200 text-muted-800 dark:bg-muted-600 dark:text-muted-300"
                />
                <BaseAvatar
                  text="CT"
                  size="3xl"
                  class="bg-muted-200 text-muted-800 dark:bg-muted-600 dark:text-muted-300"
                />
                <BaseAvatar
                  text="CT"
                  size="4xl"
                  class="bg-muted-200 text-muted-800 dark:bg-muted-600 dark:text-muted-300"
                />
              </div>
            </template>
            <template #code>
              <DocMarkdown :source="circleFake" class="prose max-w-full" />
            </template>
          </DocComponent>
        </DocSection>

        <!-- Fake square size -->
        <DocSection title="Fake avatar" tag="1.0.0">
          <DocComponent label="Square fake sizes">
            <template #demo>
              <div class="flex flex-wrap items-end gap-4">
                <BaseAvatar
                  text="CT"
                  size="xs"
                  shape="square"
                  class="bg-muted-200 text-muted-800 dark:bg-muted-600 dark:text-muted-300"
                />
                <BaseAvatar
                  text="CT"
                  shape="square"
                  class="bg-muted-200 text-muted-800 dark:bg-muted-600 dark:text-muted-300"
                />
                <BaseAvatar
                  text="CT"
                  size="md"
                  shape="square"
                  class="bg-muted-200 text-muted-800 dark:bg-muted-600 dark:text-muted-300"
                />
                <BaseAvatar
                  text="CT"
                  size="lg"
                  shape="square"
                  class="bg-muted-200 text-muted-800 dark:bg-muted-600 dark:text-muted-300"
                />
                <BaseAvatar
                  text="CT"
                  size="xl"
                  shape="square"
                  class="bg-muted-200 text-muted-800 dark:bg-muted-600 dark:text-muted-300"
                />
                <BaseAvatar
                  text="CT"
                  size="2xl"
                  shape="square"
                  class="bg-muted-200 text-muted-800 dark:bg-muted-600 dark:text-muted-300"
                />
                <BaseAvatar
                  text="CT"
                  size="3xl"
                  shape="square"
                  class="bg-muted-200 text-muted-800 dark:bg-muted-600 dark:text-muted-300"
                />
                <BaseAvatar
                  text="CT"
                  size="4xl"
                  shape="square"
                  class="bg-muted-200 text-muted-800 dark:bg-muted-600 dark:text-muted-300"
                />
              </div>
            </template>
            <template #code>
              <DocMarkdown :source="squareFake" class="prose max-w-full" />
            </template>
          </DocComponent>
        </DocSection>

        <!-- Fake badge -->
        <DocSection title="Fake badge" tag="1.0.0">
          <DocComponent label="Circle fake badges">
            <template #demo>
              <div class="flex flex-wrap items-end gap-4">
                <BaseAvatar
                  text="CT"
                  size="xs"
                  badgeSrc="/img/icons/flags/united-states-of-america.svg"
                  class="bg-muted-200 text-muted-800 dark:bg-muted-600 dark:text-muted-300"
                />
                <BaseAvatar
                  text="CT"
                  badgeSrc="/img/icons/flags/united-states-of-america.svg"
                  class="bg-muted-200 text-muted-800 dark:bg-muted-600 dark:text-muted-300"
                />
                <BaseAvatar
                  text="CT"
                  size="md"
                  badgeSrc="/img/icons/flags/united-states-of-america.svg"
                  class="bg-muted-200 text-muted-800 dark:bg-muted-600 dark:text-muted-300"
                />
                <BaseAvatar
                  text="CT"
                  size="lg"
                  badgeSrc="/img/icons/flags/united-states-of-america.svg"
                  class="bg-muted-200 text-muted-800 dark:bg-muted-600 dark:text-muted-300"
                />
                <BaseAvatar
                  text="CT"
                  size="xl"
                  badgeSrc="/img/icons/flags/united-states-of-america.svg"
                  class="bg-muted-200 text-muted-800 dark:bg-muted-600 dark:text-muted-300"
                />
                <BaseAvatar
                  text="CT"
                  size="2xl"
                  badgeSrc="/img/icons/flags/united-states-of-america.svg"
                  class="bg-muted-200 text-muted-800 dark:bg-muted-600 dark:text-muted-300"
                />
                <BaseAvatar
                  text="CT"
                  size="3xl"
                  badgeSrc="/img/icons/flags/united-states-of-america.svg"
                  class="bg-muted-200 text-muted-800 dark:bg-muted-600 dark:text-muted-300"
                />
                <BaseAvatar
                  text="CT"
                  size="4xl"
                  badgeSrc="/img/icons/flags/united-states-of-america.svg"
                  class="bg-muted-200 text-muted-800 dark:bg-muted-600 dark:text-muted-300"
                />
              </div>
            </template>
            <template #code>
              <DocMarkdown :source="circleFakeBadge" class="prose max-w-full" />
            </template>
          </DocComponent>
        </DocSection>

        <!-- Fake square badge -->
        <DocSection title="Fake badge" tag="1.0.0">
          <DocComponent label="Square fake badges">
            <template #demo>
              <div class="flex flex-wrap items-end gap-4">
                <BaseAvatar
                  text="CT"
                  badgeSrc="/img/icons/flags/united-states-of-america.svg"
                  size="xs"
                  shape="square"
                  class="bg-muted-200 text-muted-800 dark:bg-muted-600 dark:text-muted-300"
                />
                <BaseAvatar
                  text="CT"
                  badgeSrc="/img/icons/flags/united-states-of-america.svg"
                  shape="square"
                  class="bg-muted-200 text-muted-800 dark:bg-muted-600 dark:text-muted-300"
                />
                <BaseAvatar
                  text="CT"
                  size="md"
                  badgeSrc="/img/icons/flags/united-states-of-america.svg"
                  shape="square"
                  class="bg-muted-200 text-muted-800 dark:bg-muted-600 dark:text-muted-300"
                />
                <BaseAvatar
                  text="CT"
                  size="lg"
                  badgeSrc="/img/icons/flags/united-states-of-america.svg"
                  shape="square"
                  class="bg-muted-200 text-muted-800 dark:bg-muted-600 dark:text-muted-300"
                />
                <BaseAvatar
                  text="CT"
                  size="xl"
                  badgeSrc="/img/icons/flags/united-states-of-america.svg"
                  shape="square"
                  class="bg-muted-200 text-muted-800 dark:bg-muted-600 dark:text-muted-300"
                />
                <BaseAvatar
                  text="CT"
                  size="2xl"
                  badgeSrc="/img/icons/flags/united-states-of-america.svg"
                  shape="square"
                  class="bg-muted-200 text-muted-800 dark:bg-muted-600 dark:text-muted-300"
                />
                <BaseAvatar
                  text="CT"
                  size="3xl"
                  badgeSrc="/img/icons/flags/united-states-of-america.svg"
                  shape="square"
                  class="bg-muted-200 text-muted-800 dark:bg-muted-600 dark:text-muted-300"
                />
                <BaseAvatar
                  text="CT"
                  size="4xl"
                  badgeSrc="/img/icons/flags/united-states-of-america.svg"
                  shape="square"
                  class="bg-muted-200 text-muted-800 dark:bg-muted-600 dark:text-muted-300"
                />
              </div>
            </template>
            <template #code>
              <DocMarkdown :source="squareFakeBadge" class="prose max-w-full" />
            </template>
          </DocComponent>
        </DocSection>

        <!-- Fake colors -->
        <DocSection title="Fake colors" tag="1.0.0">
          <DocComponent label="Circle fake colors">
            <template #demo>
              <div class="flex flex-wrap items-end gap-2">
                <BaseAvatar
                  text="CT"
                  size="md"
                  class="bg-muted-200 text-muted-800 dark:bg-muted-600 dark:text-muted-300"
                />
                <BaseAvatar
                  text="CT"
                  size="md"
                  class="bg-primary-100 text-primary-500 dark:bg-primary-500 dark:text-white"
                />
                <BaseAvatar
                  text="CT"
                  size="md"
                  class="bg-lime-100 text-lime-500 dark:bg-lime-500 dark:text-white"
                />
                <BaseAvatar
                  text="CT"
                  size="md"
                  class="bg-green-100 text-green-500 dark:bg-green-500 dark:text-white"
                />
                <BaseAvatar
                  text="CT"
                  size="md"
                  class="bg-emerald-100 text-emerald-500 dark:bg-emerald-500 dark:text-white"
                />
                <BaseAvatar
                  text="CT"
                  size="md"
                  class="bg-teal-100 text-teal-500 dark:bg-teal-500 dark:text-white"
                />
                <BaseAvatar
                  text="CT"
                  size="md"
                  class="bg-cyan-100 text-cyan-500 dark:bg-cyan-500 dark:text-white"
                />
                <BaseAvatar
                  text="CT"
                  size="md"
                  class="bg-sky-100 text-sky-500 dark:bg-sky-500 dark:text-white"
                />
                <BaseAvatar
                  text="CT"
                  size="md"
                  class="bg-blue-100 text-blue-500 dark:bg-blue-500 dark:text-white"
                />
                <BaseAvatar
                  text="CT"
                  size="md"
                  class="bg-indigo-100 text-indigo-500 dark:bg-indigo-500 dark:text-white"
                />
                <BaseAvatar
                  text="CT"
                  size="md"
                  class="bg-violet-100 text-violet-500 dark:bg-violet-500 dark:text-white"
                />
                <BaseAvatar
                  text="CT"
                  size="md"
                  class="bg-purple-100 text-purple-500 dark:bg-purple-500 dark:text-white"
                />
                <BaseAvatar
                  text="CT"
                  size="md"
                  class="bg-fuchsia-100 text-fuchsia-500 dark:bg-fuchsia-500 dark:text-white"
                />
                <BaseAvatar
                  text="CT"
                  size="md"
                  class="bg-pink-100 text-pink-500 dark:bg-pink-500 dark:text-white"
                />
                <BaseAvatar
                  text="CT"
                  size="md"
                  class="bg-rose-100 text-rose-500 dark:bg-rose-500 dark:text-white"
                />
                <BaseAvatar
                  text="CT"
                  size="md"
                  class="bg-red-100 text-red-500 dark:bg-red-500 dark:text-white"
                />
                <BaseAvatar
                  text="CT"
                  size="md"
                  class="bg-orange-100 text-orange-500 dark:bg-orange-500 dark:text-white"
                />
                <BaseAvatar
                  text="CT"
                  size="md"
                  class="bg-amber-100 text-amber-500 dark:bg-amber-500 dark:text-white"
                />
                <BaseAvatar
                  text="CT"
                  size="md"
                  class="bg-yellow-100 text-yellow-500 dark:bg-yellow-500 dark:text-white"
                />
              </div>
            </template>
            <template #code>
              <DocMarkdown
                :source="circleFakeColors"
                class="prose max-w-full"
              />
            </template>
          </DocComponent>
        </DocSection>

        <!-- Fake square colors -->
        <DocSection title="Fake colors" tag="1.0.0">
          <DocComponent label="Square fake colors">
            <template #demo>
              <div class="flex flex-wrap items-end gap-2">
                <BaseAvatar
                  size="md"
                  shape="square"
                  class="bg-muted-200 text-muted-800 dark:bg-muted-600 dark:text-muted-300"
                >
                  CT
                </BaseAvatar>
                <BaseAvatar
                  text="CT"
                  size="md"
                  shape="square"
                  class="bg-primary-100 text-primary-500 dark:bg-primary-500 dark:text-white"
                />
                <BaseAvatar
                  text="CT"
                  size="md"
                  shape="square"
                  class="bg-lime-100 text-lime-500 dark:bg-lime-500 dark:text-white"
                />
                <BaseAvatar
                  text="CT"
                  size="md"
                  shape="square"
                  class="bg-green-100 text-green-500 dark:bg-green-500 dark:text-white"
                />
                <BaseAvatar
                  text="CT"
                  size="md"
                  shape="square"
                  class="bg-emerald-100 text-emerald-500 dark:bg-emerald-500 dark:text-white"
                />
                <BaseAvatar
                  text="CT"
                  size="md"
                  shape="square"
                  class="bg-teal-100 text-teal-500 dark:bg-teal-500 dark:text-white"
                />
                <BaseAvatar
                  text="CT"
                  size="md"
                  shape="square"
                  class="bg-cyan-100 text-cyan-500 dark:bg-cyan-500 dark:text-white"
                />
                <BaseAvatar
                  text="CT"
                  size="md"
                  shape="square"
                  class="bg-sky-100 text-sky-500 dark:bg-sky-500 dark:text-white"
                />
                <BaseAvatar
                  text="CT"
                  size="md"
                  shape="square"
                  class="bg-blue-100 text-blue-500 dark:bg-blue-500 dark:text-white"
                />
                <BaseAvatar
                  text="CT"
                  size="md"
                  shape="square"
                  class="bg-indigo-100 text-indigo-500 dark:bg-indigo-500 dark:text-white"
                />
                <BaseAvatar
                  text="CT"
                  size="md"
                  shape="square"
                  class="bg-violet-100 text-violet-500 dark:bg-violet-500 dark:text-white"
                />
                <BaseAvatar
                  text="CT"
                  size="md"
                  shape="square"
                  class="bg-purple-100 text-purple-500 dark:bg-purple-500 dark:text-white"
                />
                <BaseAvatar
                  text="CT"
                  size="md"
                  shape="square"
                  class="bg-fuchsia-100 text-fuchsia-500 dark:bg-fuchsia-500 dark:text-white"
                />
                <BaseAvatar
                  text="CT"
                  size="md"
                  shape="square"
                  class="bg-pink-100 text-pink-500 dark:bg-pink-500 dark:text-white"
                />
                <BaseAvatar
                  text="CT"
                  size="md"
                  shape="square"
                  class="bg-rose-100 text-rose-500 dark:bg-rose-500 dark:text-white"
                />
                <BaseAvatar
                  text="CT"
                  size="md"
                  shape="square"
                  class="bg-red-100 text-red-500 dark:bg-red-500 dark:text-white"
                />
                <BaseAvatar
                  text="CT"
                  size="md"
                  shape="square"
                  class="bg-orange-100 text-orange-500 dark:bg-orange-500 dark:text-white"
                />
                <BaseAvatar
                  text="CT"
                  size="md"
                  shape="square"
                  class="bg-amber-100 text-amber-500 dark:bg-amber-500 dark:text-white"
                />
                <BaseAvatar
                  text="CT"
                  size="md"
                  shape="square"
                  class="bg-yellow-100 text-yellow-500 dark:bg-yellow-500 dark:text-white"
                />
              </div>
            </template>
            <template #code>
              <DocMarkdown
                :source="squareFakeColors"
                class="prose max-w-full"
              />
            </template>
          </DocComponent>
        </DocSection>

        <DocComponentMeta name="BaseAvatar" />
      </template>

      <!-- Toc -->
      <template #toc>
        <DocToc />
      </template>
    </DocLayout>
  </div>
</template>
