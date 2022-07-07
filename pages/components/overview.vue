<script setup lang="ts">
import { breadcrumb, toc } from '@@/documentation/components/overview/toc'
import {
  dangerColor,
  grayColor,
  infoColor,
  primaryColor,
  slateColor,
  successColor,
  warningColor,
} from '@@/documentation/components/overview'

definePageMeta({
  title: 'Overview',
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
        <!-- Custom section -->
        <div
          class="mb-10 grid gap-4 border-b border-gray-200 pb-10 dark:border-muted-800 md:grid-cols-2 xl:gap-8"
        >
          <div>
            <BaseCard shape="rounded" class="p-8">
              <BaseHeading
                as="h2"
                size="2xl"
                weight="bold"
                :anchor="{ prefix: '' }"
                class="text-muted-800 dark:text-white"
              >
                <strong>Tairo</strong>
                Overview
              </BaseHeading>
              <BaseParagraph
                size="sm"
                class="mb-4 text-muted-500 dark:text-muted-400"
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Erat
                enim Polemonis.
              </BaseParagraph>
              <BaseText size="sm" class="text-muted-400 dark:text-muted-400">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Erat
                enim Polemonis. Duo Reges: constructio interrete. Philosophi
                autem in suis lectulis plerumque moriuntur.
              </BaseText>

              <NuxtLink
                to="https://docs.cssninja.io/tairo"
                class="group mt-7 inline-flex items-center font-sans text-sm font-medium text-primary-500 transition-opacity hover:opacity-90"
              >
                <span class="mr-1">Read the documentation</span>
                <BaseIcon
                  name="lucide:arrow-right"
                  class="h-4 w-4 transition-transform duration-300 group-hover:translate-x-2"
                />
              </NuxtLink>
            </BaseCard>
          </div>
          <div class="grid grid-cols-2 gap-2 xl:gap-6">
            <BaseCard shape="rounded" class="p-8 text-center">
              <BaseIcon
                name="logos:nuxt-icon"
                class="mx-auto mb-2 block h-10 w-10"
              />
              <BaseHeading
                as="h4"
                size="sm"
                weight="semibold"
                class="text-muted-800 dark:text-white"
              >
                Nuxt JS
              </BaseHeading>
            </BaseCard>
            <BaseCard shape="rounded" class="p-8 text-center">
              <BaseIcon
                name="vscode-icons:folder-type-typescript"
                class="mx-auto mb-2 block h-10 w-10"
              />
              <BaseHeading
                as="h4"
                size="sm"
                weight="semibold"
                class="text-muted-800 dark:text-white"
              >
                Typescript
              </BaseHeading>
            </BaseCard>
            <BaseCard shape="rounded" class="p-8 text-center">
              <BaseIcon
                name="logos:tailwindcss-icon"
                class="mx-auto mb-2 block h-10 w-10"
              />
              <BaseHeading
                as="h4"
                size="sm"
                weight="semibold"
                class="text-muted-800 dark:text-white"
              >
                Tailwind CSS
              </BaseHeading>
            </BaseCard>
            <BaseCard shape="rounded" class="p-8 text-center">
              <BaseIcon
                name="logos:unocss"
                class="mx-auto mb-2 block h-10 w-10 scale-75 dark:invert"
              />
              <BaseHeading
                as="h4"
                size="sm"
                weight="semibold"
                class="text-muted-800 dark:text-white"
              >
                UnoCSS
              </BaseHeading>
            </BaseCard>
          </div>
        </div>

        <!-- Custom section -->
        <div class="mb-10 border-b border-gray-200 pb-10 dark:border-muted-800">
          <BaseHeading
            as="h2"
            size="xl"
            anchor
            weight="medium"
            class="mb-5 text-muted-800 dark:text-white"
          >
            Features
          </BaseHeading>

          <div class="grid gap-4 md:grid-cols-3">
            <!-- Feature -->
            <BaseCard shape="curved" class="flex items-center p-3">
              <BaseIconBox size="md" class="bg-success-100 text-success-500">
                <BaseIcon name="simple-icons:nuxtdotjs" class="h-6 w-6" />
              </BaseIconBox>
              <div class="ml-3">
                <BaseHeading
                  as="h4"
                  size="sm"
                  weight="semibold"
                  class="text-muted-800 dark:text-white"
                >
                  Nuxt 3
                </BaseHeading>
                <BaseText size="xs" class="text-muted-400">
                  Robust and solid vue app
                </BaseText>
              </div>
            </BaseCard>
            <!-- Feature -->
            <BaseCard shape="curved" class="flex items-center p-3">
              <BaseIconBox size="md" class="bg-yellow-100 text-yellow-500">
                <BaseIcon
                  name="teenyicons:typescript-outline"
                  class="h-6 w-6"
                />
              </BaseIconBox>
              <div class="ml-3">
                <BaseHeading
                  as="h4"
                  size="sm"
                  weight="semibold"
                  class="text-muted-800 dark:text-white"
                >
                  Typescript
                </BaseHeading>
                <BaseText size="xs" class="text-muted-400">
                  Types and auto-discovery
                </BaseText>
              </div>
            </BaseCard>
            <!-- Feature -->
            <BaseCard shape="curved" class="flex items-center p-3">
              <BaseIconBox size="md" class="bg-primary-100 text-primary-500">
                <BaseIcon name="simple-icons:vite" class="h-6 w-6" />
              </BaseIconBox>
              <div class="ml-3">
                <BaseHeading
                  as="h4"
                  size="sm"
                  weight="semibold"
                  class="text-muted-800 dark:text-white"
                >
                  Vite
                </BaseHeading>
                <BaseText size="xs" class="text-muted-400">
                  Bundling & hot reloading
                </BaseText>
              </div>
            </BaseCard>
            <!-- Feature -->
            <BaseCard shape="curved" class="flex items-center p-3">
              <BaseIconBox size="md" class="bg-sky-100 text-sky-500">
                <BaseIcon name="simple-icons:tailwindcss" class="h-6 w-6" />
              </BaseIconBox>
              <div class="ml-3">
                <BaseHeading
                  as="h4"
                  size="sm"
                  weight="semibold"
                  class="text-muted-800 dark:text-white"
                >
                  TailwindCSS
                </BaseHeading>
                <BaseText size="xs" class="text-muted-400">
                  For precise and clean styles
                </BaseText>
              </div>
            </BaseCard>
            <!-- Feature -->
            <BaseCard shape="curved" class="flex items-center p-3">
              <BaseIconBox size="md" class="bg-pink-100 text-pink-500">
                <BaseIcon name="ph:storefront-duotone" class="h-6 w-6" />
              </BaseIconBox>
              <div class="ml-3">
                <BaseHeading
                  as="h4"
                  size="sm"
                  weight="semibold"
                  class="text-muted-800 dark:text-white"
                >
                  Pinia
                </BaseHeading>
                <BaseText size="xs" class="text-muted-400">
                  To handle store data
                </BaseText>
              </div>
            </BaseCard>
            <!-- Feature -->
            <BaseCard shape="curved" class="flex items-center p-3">
              <BaseIconBox size="md" class="bg-lime-100 text-lime-500">
                <BaseIcon name="simple-icons:eslint" class="h-6 w-6" />
              </BaseIconBox>
              <div class="ml-3">
                <BaseHeading
                  as="h4"
                  size="sm"
                  weight="semibold"
                  class="text-muted-800 dark:text-white"
                >
                  ESlint
                </BaseHeading>
                <BaseText size="xs" class="text-muted-400">
                  For standardized code
                </BaseText>
              </div>
            </BaseCard>
          </div>
        </div>

        <!-- Primary color -->
        <DocSection title="Primary color" tag="1.0.0">
          <DocComponent label="Primary color variations">
            <template #demo>
              <div class="flex flex-wrap items-end gap-2">
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
        <DocSection title="Info color" tag="1.0.0">
          <DocComponent label="Info color variations">
            <template #demo>
              <div class="flex flex-wrap items-end gap-2">
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
        <DocSection title="Success color" tag="1.0.0">
          <DocComponent label="Success color variations">
            <template #demo>
              <div class="flex flex-wrap items-end gap-2">
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
        <DocSection title="Warning color" tag="1.0.0">
          <DocComponent label="Success color variations">
            <template #demo>
              <div class="flex flex-wrap items-end gap-2">
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
        <DocSection title="Danger color" tag="1.0.0">
          <DocComponent label="Success color variations">
            <template #demo>
              <div class="flex flex-wrap items-end gap-2">
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
        <DocSection title="Muted color" tag="1.0.0">
          <DocComponent label="Success color variations">
            <template #demo>
              <div class="flex flex-wrap items-end gap-2">
                <div
                  class="h-8 w-8 rounded-lg bg-muted-50"
                  tooltip="bg-muted-50"
                ></div>
                <div
                  class="h-8 w-8 rounded-lg bg-muted-100"
                  tooltip="bg-muted-100"
                ></div>
                <div
                  class="h-8 w-8 rounded-lg bg-muted-200"
                  tooltip="bg-muted-200"
                ></div>
                <div
                  class="h-8 w-8 rounded-lg bg-muted-300"
                  tooltip="bg-muted-300"
                ></div>
                <div
                  class="h-8 w-8 rounded-lg bg-muted-400"
                  tooltip="bg-muted-400"
                ></div>
                <div
                  class="h-8 w-8 rounded-lg bg-muted-500"
                  tooltip="bg-muted-500"
                ></div>
                <div
                  class="h-8 w-8 rounded-lg bg-muted-600"
                  tooltip="bg-muted-600"
                ></div>
                <div
                  class="h-8 w-8 rounded-lg bg-muted-700"
                  tooltip="bg-muted-700"
                ></div>
                <div
                  class="h-8 w-8 rounded-lg bg-muted-800"
                  tooltip="bg-muted-800"
                ></div>
                <div
                  class="h-8 w-8 rounded-lg bg-muted-900"
                  tooltip="bg-muted-900"
                ></div>
              </div>
            </template>
            <template #code>
              <DocCode language="html" :code="slateColor" />
            </template>
          </DocComponent>
        </DocSection>
      </template>
      <!-- Toc -->
      <template #toc>
        <DocToc />
      </template>
    </DocLayout>
  </div>
</template>
