<script setup lang="ts">
import { breadcrumb, toc } from '@@/documentation/elements/overview/toc'
import {
  dangerColor,
  grayColor,
  infoColor,
  primaryColor,
  slateColor,
  successColor,
  warningColor,
} from '@@/documentation/elements/overview'

definePageMeta({
  title: 'Overview',
})
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
        <div
          id="tairo-overview"
          class="grid md:grid-cols-2 gap-4 xl:gap-8 pb-10 mb-10 border-b border-gray-200 dark:border-slate-800"
        >
          <div>
            <BaseCard shape="rounded" class="p-8">
              <BaseHeading
                as="h2"
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
                <BaseIcon
                  name="lucide:arrow-right"
                  class="w-4 h-4 group-hover:translate-x-2 transition-transform duration-300"
                />
              </NuxtLink>
            </BaseCard>
          </div>
          <div class="grid grid-cols-2 gap-2 xl:gap-6">
            <BaseCard shape="rounded" class="p-8 text-center">
              <BaseIcon
                name="logos:nuxt-icon"
                class="w-10 h-10 block mx-auto mb-2"
              />
              <BaseHeading
                as="h4"
                size="sm"
                weight="semibold"
                class="text-slate-800 dark:text-white"
              >
                Nuxt JS
              </BaseHeading>
            </BaseCard>
            <BaseCard shape="rounded" class="p-8 text-center">
              <BaseIcon
                name="vscode:icons-folder-type-typescript"
                class="w-10 h-10 block mx-auto mb-2"
              />
              <BaseHeading
                as="h4"
                size="sm"
                weight="semibold"
                class="text-slate-800 dark:text-white"
              >
                Typescript
              </BaseHeading>
            </BaseCard>
            <BaseCard shape="rounded" class="p-8 text-center">
              <BaseIcon
                name="logos:tailwindcss-icon"
                class="w-10 h-10 block mx-auto mb-2"
              />
              <BaseHeading
                as="h4"
                size="sm"
                weight="semibold"
                class="text-slate-800 dark:text-white"
              >
                Tailwind CSS
              </BaseHeading>
            </BaseCard>
            <BaseCard shape="rounded" class="p-8 text-center">
              <BaseIcon
                name="logos:unocss"
                class="w-10 h-10 block mx-auto scale-75 dark:invert mb-2"
              />
              <BaseHeading
                as="h4"
                size="sm"
                weight="semibold"
                class="text-slate-800 dark:text-white"
              >
                UnoCSS
              </BaseHeading>
            </BaseCard>
          </div>
        </div>

        <!-- Custom section -->
        <div
          id="tairo-features"
          class="pb-10 mb-10 border-b border-gray-200 dark:border-slate-800"
        >
          <BaseHeading
            as="h2"
            size="xl"
            weight="medium"
            class="text-slate-800 dark:text-white mb-5"
          >
            Features
          </BaseHeading>

          <div class="grid md:grid-cols-3 gap-4">
            <!-- Feature -->
            <BaseCard shape="curved" class="flex items-center p-3">
              <BaseIconBox size="md" class="bg-success-100 text-success-500">
                <BaseIcon name="simple-icons:nuxtdotjs" class="w-6 h-6" />
              </BaseIconBox>
              <div class="ml-3">
                <BaseHeading
                  as="h4"
                  size="sm"
                  weight="semibold"
                  class="text-slate-800 dark:text-white"
                >
                  Nuxt 3
                </BaseHeading>
                <BaseText size="xs" class="text-slate-400">
                  Robust and solid vue app
                </BaseText>
              </div>
            </BaseCard>
            <!-- Feature -->
            <BaseCard shape="curved" class="flex items-center p-3">
              <BaseIconBox size="md" class="bg-yellow-100 text-yellow-500">
                <BaseIcon
                  name="teenyicons:typescript-outline"
                  class="w-6 h-6"
                />
              </BaseIconBox>
              <div class="ml-3">
                <BaseHeading
                  as="h4"
                  size="sm"
                  weight="semibold"
                  class="text-slate-800 dark:text-white"
                >
                  Typescript
                </BaseHeading>
                <BaseText size="xs" class="text-slate-400">
                  Types and auto-discovery
                </BaseText>
              </div>
            </BaseCard>
            <!-- Feature -->
            <BaseCard shape="curved" class="flex items-center p-3">
              <BaseIconBox size="md" class="bg-primary-100 text-primary-500">
                <BaseIcon name="simple-icons:vite" class="w-6 h-6" />
              </BaseIconBox>
              <div class="ml-3">
                <BaseHeading
                  as="h4"
                  size="sm"
                  weight="semibold"
                  class="text-slate-800 dark:text-white"
                >
                  Vite
                </BaseHeading>
                <BaseText size="xs" class="text-slate-400">
                  Bundling & hot reloading
                </BaseText>
              </div>
            </BaseCard>
            <!-- Feature -->
            <BaseCard shape="curved" class="flex items-center p-3">
              <BaseIconBox size="md" class="bg-sky-100 text-sky-500">
                <BaseIcon name="simple-icons:tailwindcss" class="w-6 h-6" />
              </BaseIconBox>
              <div class="ml-3">
                <BaseHeading
                  as="h4"
                  size="sm"
                  weight="semibold"
                  class="text-slate-800 dark:text-white"
                >
                  TailwindCSS
                </BaseHeading>
                <BaseText size="xs" class="text-slate-400">
                  For precise and clean styles
                </BaseText>
              </div>
            </BaseCard>
            <!-- Feature -->
            <BaseCard shape="curved" class="flex items-center p-3">
              <BaseIconBox size="md" class="bg-pink-100 text-pink-500">
                <BaseIcon name="ph:storefront-duotone" class="w-6 h-6" />
              </BaseIconBox>
              <div class="ml-3">
                <BaseHeading
                  as="h4"
                  size="sm"
                  weight="semibold"
                  class="text-slate-800 dark:text-white"
                >
                  Pinia
                </BaseHeading>
                <BaseText size="xs" class="text-slate-400">
                  To handle store data
                </BaseText>
              </div>
            </BaseCard>
            <!-- Feature -->
            <BaseCard shape="curved" class="flex items-center p-3">
              <BaseIconBox size="md" class="bg-lime-100 text-lime-500">
                <BaseIcon name="simple-icons:eslint" class="w-6 h-6" />
              </BaseIconBox>
              <div class="ml-3">
                <BaseHeading
                  as="h4"
                  size="sm"
                  weight="semibold"
                  class="text-slate-800 dark:text-white"
                >
                  ESlint
                </BaseHeading>
                <BaseText size="xs" class="text-slate-400">
                  For standardized code
                </BaseText>
              </div>
            </BaseCard>
          </div>
        </div>

        <!-- Primary color -->
        <DocSection id="primary-color" title="Primary color" tag="1.0.0">
          <DocComponent label="Primary color variations">
            <template #demo>
              <div class="flex items-end flex-wrap gap-2">
                <div
                  class="h-8 w-8 rounded-lg bg-primary-50"
                  tooltip="bg-primary-50"
                ></div>
                <div
                  class="h-8 w-8 rounded-lg bg-primary-100"
                  tooltip="bg-primary-100"
                ></div>
                <div
                  class="h-8 w-8 rounded-lg bg-primary-200"
                  tooltip="bg-primary-200"
                ></div>
                <div
                  class="h-8 w-8 rounded-lg bg-primary-300"
                  tooltip="bg-primary-300"
                ></div>
                <div
                  class="h-8 w-8 rounded-lg bg-primary-400"
                  tooltip="bg-primary-400"
                ></div>
                <div
                  class="h-8 w-8 rounded-lg bg-primary-500"
                  tooltip="bg-primary-500"
                ></div>
                <div
                  class="h-8 w-8 rounded-lg bg-primary-600"
                  tooltip="bg-primary-600"
                ></div>
                <div
                  class="h-8 w-8 rounded-lg bg-primary-700"
                  tooltip="bg-primary-700"
                ></div>
                <div
                  class="h-8 w-8 rounded-lg bg-primary-800"
                  tooltip="bg-primary-800"
                ></div>
                <div
                  class="h-8 w-8 rounded-lg bg-primary-900"
                  tooltip="bg-primary-900"
                ></div>
              </div>
            </template>
            <template #code>
              <DocCode language="html" :code="primaryColor" />
            </template>
          </DocComponent>
        </DocSection>

        <!-- Info color -->
        <DocSection id="info-color" title="Info color" tag="1.0.0">
          <DocComponent label="Info color variations">
            <template #demo>
              <div class="flex items-end flex-wrap gap-2">
                <div
                  class="h-8 w-8 rounded-lg bg-info-50"
                  tooltip="bg-info-50"
                ></div>
                <div
                  class="h-8 w-8 rounded-lg bg-info-100"
                  tooltip="bg-info-100"
                ></div>
                <div
                  class="h-8 w-8 rounded-lg bg-info-200"
                  tooltip="bg-info-200"
                ></div>
                <div
                  class="h-8 w-8 rounded-lg bg-info-300"
                  tooltip="bg-info-300"
                ></div>
                <div
                  class="h-8 w-8 rounded-lg bg-info-400"
                  tooltip="bg-info-400"
                ></div>
                <div
                  class="h-8 w-8 rounded-lg bg-info-500"
                  tooltip="bg-info-500"
                ></div>
                <div
                  class="h-8 w-8 rounded-lg bg-info-600"
                  tooltip="bg-info-600"
                ></div>
                <div
                  class="h-8 w-8 rounded-lg bg-info-700"
                  tooltip="bg-info-700"
                ></div>
                <div
                  class="h-8 w-8 rounded-lg bg-info-800"
                  tooltip="bg-info-800"
                ></div>
                <div
                  class="h-8 w-8 rounded-lg bg-info-900"
                  tooltip="bg-info-900"
                ></div>
              </div>
            </template>
            <template #code>
              <DocCode language="html" :code="infoColor" />
            </template>
          </DocComponent>
        </DocSection>

        <!-- Success color -->
        <DocSection id="success-color" title="Success color" tag="1.0.0">
          <DocComponent label="Success color variations">
            <template #demo>
              <div class="flex items-end flex-wrap gap-2">
                <div
                  class="h-8 w-8 rounded-lg bg-success-50"
                  tooltip="bg-success-50"
                ></div>
                <div
                  class="h-8 w-8 rounded-lg bg-success-100"
                  tooltip="bg-success-100"
                ></div>
                <div
                  class="h-8 w-8 rounded-lg bg-success-200"
                  tooltip="bg-success-200"
                ></div>
                <div
                  class="h-8 w-8 rounded-lg bg-success-300"
                  tooltip="bg-success-300"
                ></div>
                <div
                  class="h-8 w-8 rounded-lg bg-success-400"
                  tooltip="bg-success-400"
                ></div>
                <div
                  class="h-8 w-8 rounded-lg bg-success-500"
                  tooltip="bg-success-500"
                ></div>
                <div
                  class="h-8 w-8 rounded-lg bg-success-600"
                  tooltip="bg-success-600"
                ></div>
                <div
                  class="h-8 w-8 rounded-lg bg-success-700"
                  tooltip="bg-success-700"
                ></div>
                <div
                  class="h-8 w-8 rounded-lg bg-success-800"
                  tooltip="bg-success-800"
                ></div>
                <div
                  class="h-8 w-8 rounded-lg bg-success-900"
                  tooltip="bg-success-900"
                ></div>
              </div>
            </template>
            <template #code>
              <DocCode language="html" :code="successColor" />
            </template>
          </DocComponent>
        </DocSection>

        <!-- Warning color -->
        <DocSection id="warning-color" title="Warning color" tag="1.0.0">
          <DocComponent label="Success color variations">
            <template #demo>
              <div class="flex items-end flex-wrap gap-2">
                <div
                  class="h-8 w-8 rounded-lg bg-warning-50"
                  tooltip="bg-warning-50"
                ></div>
                <div
                  class="h-8 w-8 rounded-lg bg-warning-100"
                  tooltip="bg-warning-100"
                ></div>
                <div
                  class="h-8 w-8 rounded-lg bg-warning-200"
                  tooltip="bg-warning-200"
                ></div>
                <div
                  class="h-8 w-8 rounded-lg bg-warning-300"
                  tooltip="bg-warning-300"
                ></div>
                <div
                  class="h-8 w-8 rounded-lg bg-warning-400"
                  tooltip="bg-warning-400"
                ></div>
                <div
                  class="h-8 w-8 rounded-lg bg-warning-500"
                  tooltip="bg-warning-500"
                ></div>
                <div
                  class="h-8 w-8 rounded-lg bg-warning-600"
                  tooltip="bg-warning-600"
                ></div>
                <div
                  class="h-8 w-8 rounded-lg bg-warning-700"
                  tooltip="bg-warning-700"
                ></div>
                <div
                  class="h-8 w-8 rounded-lg bg-warning-800"
                  tooltip="bg-warning-800"
                ></div>
                <div
                  class="h-8 w-8 rounded-lg bg-warning-900"
                  tooltip="bg-warning-900"
                ></div>
              </div>
            </template>
            <template #code>
              <DocCode language="html" :code="warningColor" />
            </template>
          </DocComponent>
        </DocSection>

        <!-- Danger color -->
        <DocSection id="danger-color" title="Danger color" tag="1.0.0">
          <DocComponent label="Success color variations">
            <template #demo>
              <div class="flex items-end flex-wrap gap-2">
                <div
                  class="h-8 w-8 rounded-lg bg-danger-50"
                  tooltip="bg-danger-50"
                ></div>
                <div
                  class="h-8 w-8 rounded-lg bg-danger-100"
                  tooltip="bg-danger-100"
                ></div>
                <div
                  class="h-8 w-8 rounded-lg bg-danger-200"
                  tooltip="bg-danger-200"
                ></div>
                <div
                  class="h-8 w-8 rounded-lg bg-danger-300"
                  tooltip="bg-danger-300"
                ></div>
                <div
                  class="h-8 w-8 rounded-lg bg-danger-400"
                  tooltip="bg-danger-400"
                ></div>
                <div
                  class="h-8 w-8 rounded-lg bg-danger-500"
                  tooltip="bg-danger-500"
                ></div>
                <div
                  class="h-8 w-8 rounded-lg bg-danger-600"
                  tooltip="bg-danger-600"
                ></div>
                <div
                  class="h-8 w-8 rounded-lg bg-danger-700"
                  tooltip="bg-danger-700"
                ></div>
                <div
                  class="h-8 w-8 rounded-lg bg-danger-800"
                  tooltip="bg-danger-800"
                ></div>
                <div
                  class="h-8 w-8 rounded-lg bg-danger-900"
                  tooltip="bg-danger-900"
                ></div>
              </div>
            </template>
            <template #code>
              <DocCode language="html" :code="dangerColor" />
            </template>
          </DocComponent>
        </DocSection>

        <!-- Slate color -->
        <DocSection id="slate-color" title="Slate color" tag="1.0.0">
          <DocComponent label="Success color variations">
            <template #demo>
              <div class="flex items-end flex-wrap gap-2">
                <div
                  class="h-8 w-8 rounded-lg bg-slate-50"
                  tooltip="bg-slate-50"
                ></div>
                <div
                  class="h-8 w-8 rounded-lg bg-slate-100"
                  tooltip="bg-slate-100"
                ></div>
                <div
                  class="h-8 w-8 rounded-lg bg-slate-200"
                  tooltip="bg-slate-200"
                ></div>
                <div
                  class="h-8 w-8 rounded-lg bg-slate-300"
                  tooltip="bg-slate-300"
                ></div>
                <div
                  class="h-8 w-8 rounded-lg bg-slate-400"
                  tooltip="bg-slate-400"
                ></div>
                <div
                  class="h-8 w-8 rounded-lg bg-slate-500"
                  tooltip="bg-slate-500"
                ></div>
                <div
                  class="h-8 w-8 rounded-lg bg-slate-600"
                  tooltip="bg-slate-600"
                ></div>
                <div
                  class="h-8 w-8 rounded-lg bg-slate-700"
                  tooltip="bg-slate-700"
                ></div>
                <div
                  class="h-8 w-8 rounded-lg bg-slate-800"
                  tooltip="bg-slate-800"
                ></div>
                <div
                  class="h-8 w-8 rounded-lg bg-slate-900"
                  tooltip="bg-slate-900"
                ></div>
              </div>
            </template>
            <template #code>
              <DocCode language="html" :code="slateColor" />
            </template>
          </DocComponent>
        </DocSection>

        <!-- Gray color -->
        <DocSection id="gray-color" title="Gray color" tag="1.0.0">
          <DocComponent label="Success color variations">
            <template #demo>
              <div class="flex items-end flex-wrap gap-2">
                <div
                  class="h-8 w-8 rounded-lg bg-gray-50"
                  tooltip="bg-gray-50"
                ></div>
                <div
                  class="h-8 w-8 rounded-lg bg-gray-100"
                  tooltip="bg-gray-100"
                ></div>
                <div
                  class="h-8 w-8 rounded-lg bg-gray-200"
                  tooltip="bg-gray-200"
                ></div>
                <div
                  class="h-8 w-8 rounded-lg bg-gray-300"
                  tooltip="bg-gray-300"
                ></div>
                <div
                  class="h-8 w-8 rounded-lg bg-gray-400"
                  tooltip="bg-gray-400"
                ></div>
                <div
                  class="h-8 w-8 rounded-lg bg-gray-500"
                  tooltip="bg-gray-500"
                ></div>
                <div
                  class="h-8 w-8 rounded-lg bg-gray-600"
                  tooltip="bg-gray-600"
                ></div>
                <div
                  class="h-8 w-8 rounded-lg bg-gray-700"
                  tooltip="bg-gray-700"
                ></div>
                <div
                  class="h-8 w-8 rounded-lg bg-gray-800"
                  tooltip="bg-gray-800"
                ></div>
                <div
                  class="h-8 w-8 rounded-lg bg-gray-900"
                  tooltip="bg-gray-900"
                ></div>
              </div>
            </template>
            <template #code>
              <DocCode language="html" :code="grayColor" />
            </template>
          </DocComponent>
        </DocSection>
      </template>
      <!-- Toc -->
      <template #toc>
        <DocToc :anchors="toc" />
      </template>
    </DocLayout>
  </div>
</template>
