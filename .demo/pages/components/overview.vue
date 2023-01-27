<script setup lang="ts">
import dangerColor from '~/documentation/overview/danger-color.md?raw'
import infoColor from '~/documentation/overview/info-color.md?raw'
import primaryColor from '~/documentation/overview/primary-color.md?raw'
import mutedColor from '~/documentation/overview/muted-color.md?raw'
import successColor from '~/documentation/overview/success-color.md?raw'
import warningColor from '~/documentation/overview/warning-color.md?raw'

const app = useAppConfig()

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
          class="dark:border-muted-800 mb-10 grid gap-4 border-b border-gray-200 pb-10 md:grid-cols-2 xl:gap-8"
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
                <strong>{{ app.tairo.title }}</strong>
                Overview
              </BaseHeading>
              <BaseParagraph
                size="sm"
                class="text-muted-500 dark:text-muted-400 mb-4"
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
                class="text-primary-500 group mt-7 inline-flex items-center font-sans text-sm font-medium transition-opacity hover:opacity-90"
              >
                <span class="mr-1">Read the documentation</span>
                <Icon
                  name="lucide:arrow-right"
                  class="h-4 w-4 transition-transform duration-300 group-hover:translate-x-2"
                />
              </NuxtLink>
            </BaseCard>
          </div>
          <div class="grid grid-cols-2 gap-2 xl:gap-6">
            <BaseCard shape="rounded" class="p-8 text-center">
              <Icon
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
              <Icon
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
              <Icon
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
              <Icon
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
        <div class="dark:border-muted-800 mb-10 border-b border-gray-200 pb-10">
          <BaseHeading
            as="h2"
            size="xl"
            anchor
            weight="medium"
            class="text-muted-800 mb-5 dark:text-white"
          >
            Features
          </BaseHeading>

          <div class="grid gap-4 md:grid-cols-3">
            <!-- Feature -->
            <BaseCard shape="curved" class="flex items-center p-3">
              <BaseIconBox size="md" class="bg-success-100 text-success-500">
                <Icon name="simple-icons:nuxtdotjs" class="h-6 w-6" />
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
                <Icon name="teenyicons:typescript-outline" class="h-6 w-6" />
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
                <Icon name="simple-icons:vite" class="h-6 w-6" />
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
                <Icon name="simple-icons:tailwindcss" class="h-6 w-6" />
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
                <Icon name="icon-park-outline:pineapple" class="h-6 w-6" />
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
                <Icon name="simple-icons:eslint" class="h-6 w-6" />
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
                  class="bg-primary-50 h-8 w-8 rounded-lg"
                  tooltip="bg-primary-50"
                />
                <div
                  class="bg-primary-100 h-8 w-8 rounded-lg"
                  tooltip="bg-primary-100"
                />
                <div
                  class="bg-primary-200 h-8 w-8 rounded-lg"
                  tooltip="bg-primary-200"
                />
                <div
                  class="bg-primary-300 h-8 w-8 rounded-lg"
                  tooltip="bg-primary-300"
                />
                <div
                  class="bg-primary-400 h-8 w-8 rounded-lg"
                  tooltip="bg-primary-400"
                />
                <div
                  class="bg-primary-500 h-8 w-8 rounded-lg"
                  tooltip="bg-primary-500"
                />
                <div
                  class="bg-primary-600 h-8 w-8 rounded-lg"
                  tooltip="bg-primary-600"
                />
                <div
                  class="bg-primary-700 h-8 w-8 rounded-lg"
                  tooltip="bg-primary-700"
                />
                <div
                  class="bg-primary-800 h-8 w-8 rounded-lg"
                  tooltip="bg-primary-800"
                />
                <div
                  class="bg-primary-900 h-8 w-8 rounded-lg"
                  tooltip="bg-primary-900"
                />
              </div>
            </template>
            <template #code>
              <DocMarkdown :source="primaryColor" class="prose max-w-full" />
            </template>
          </DocComponent>
        </DocSection>

        <!-- Info color -->
        <DocSection title="Info color" tag="1.0.0">
          <DocComponent label="Info color variations">
            <template #demo>
              <div class="flex flex-wrap items-end gap-2">
                <div
                  class="bg-info-50 h-8 w-8 rounded-lg"
                  tooltip="bg-info-50"
                />
                <div
                  class="bg-info-100 h-8 w-8 rounded-lg"
                  tooltip="bg-info-100"
                />
                <div
                  class="bg-info-200 h-8 w-8 rounded-lg"
                  tooltip="bg-info-200"
                />
                <div
                  class="bg-info-300 h-8 w-8 rounded-lg"
                  tooltip="bg-info-300"
                />
                <div
                  class="bg-info-400 h-8 w-8 rounded-lg"
                  tooltip="bg-info-400"
                />
                <div
                  class="bg-info-500 h-8 w-8 rounded-lg"
                  tooltip="bg-info-500"
                />
                <div
                  class="bg-info-600 h-8 w-8 rounded-lg"
                  tooltip="bg-info-600"
                />
                <div
                  class="bg-info-700 h-8 w-8 rounded-lg"
                  tooltip="bg-info-700"
                />
                <div
                  class="bg-info-800 h-8 w-8 rounded-lg"
                  tooltip="bg-info-800"
                />
                <div
                  class="bg-info-900 h-8 w-8 rounded-lg"
                  tooltip="bg-info-900"
                />
              </div>
            </template>
            <template #code>
              <DocMarkdown :source="infoColor" class="prose max-w-full" />
            </template>
          </DocComponent>
        </DocSection>

        <!-- Success color -->
        <DocSection title="Success color" tag="1.0.0">
          <DocComponent label="Success color variations">
            <template #demo>
              <div class="flex flex-wrap items-end gap-2">
                <div
                  class="bg-success-50 h-8 w-8 rounded-lg"
                  tooltip="bg-success-50"
                />
                <div
                  class="bg-success-100 h-8 w-8 rounded-lg"
                  tooltip="bg-success-100"
                />
                <div
                  class="bg-success-200 h-8 w-8 rounded-lg"
                  tooltip="bg-success-200"
                />
                <div
                  class="bg-success-300 h-8 w-8 rounded-lg"
                  tooltip="bg-success-300"
                />
                <div
                  class="bg-success-400 h-8 w-8 rounded-lg"
                  tooltip="bg-success-400"
                />
                <div
                  class="bg-success-500 h-8 w-8 rounded-lg"
                  tooltip="bg-success-500"
                />
                <div
                  class="bg-success-600 h-8 w-8 rounded-lg"
                  tooltip="bg-success-600"
                />
                <div
                  class="bg-success-700 h-8 w-8 rounded-lg"
                  tooltip="bg-success-700"
                />
                <div
                  class="bg-success-800 h-8 w-8 rounded-lg"
                  tooltip="bg-success-800"
                />
                <div
                  class="bg-success-900 h-8 w-8 rounded-lg"
                  tooltip="bg-success-900"
                />
              </div>
            </template>
            <template #code>
              <DocMarkdown :source="successColor" class="prose max-w-full" />
            </template>
          </DocComponent>
        </DocSection>

        <!-- Warning color -->
        <DocSection title="Warning color" tag="1.0.0">
          <DocComponent label="Success color variations">
            <template #demo>
              <div class="flex flex-wrap items-end gap-2">
                <div
                  class="bg-warning-50 h-8 w-8 rounded-lg"
                  tooltip="bg-warning-50"
                />
                <div
                  class="bg-warning-100 h-8 w-8 rounded-lg"
                  tooltip="bg-warning-100"
                />
                <div
                  class="bg-warning-200 h-8 w-8 rounded-lg"
                  tooltip="bg-warning-200"
                />
                <div
                  class="bg-warning-300 h-8 w-8 rounded-lg"
                  tooltip="bg-warning-300"
                />
                <div
                  class="bg-warning-400 h-8 w-8 rounded-lg"
                  tooltip="bg-warning-400"
                />
                <div
                  class="bg-warning-500 h-8 w-8 rounded-lg"
                  tooltip="bg-warning-500"
                />
                <div
                  class="bg-warning-600 h-8 w-8 rounded-lg"
                  tooltip="bg-warning-600"
                />
                <div
                  class="bg-warning-700 h-8 w-8 rounded-lg"
                  tooltip="bg-warning-700"
                />
                <div
                  class="bg-warning-800 h-8 w-8 rounded-lg"
                  tooltip="bg-warning-800"
                />
                <div
                  class="bg-warning-900 h-8 w-8 rounded-lg"
                  tooltip="bg-warning-900"
                />
              </div>
            </template>
            <template #code>
              <DocMarkdown :source="warningColor" class="prose max-w-full" />
            </template>
          </DocComponent>
        </DocSection>

        <!-- Danger color -->
        <DocSection title="Danger color" tag="1.0.0">
          <DocComponent label="Success color variations">
            <template #demo>
              <div class="flex flex-wrap items-end gap-2">
                <div
                  class="bg-danger-50 h-8 w-8 rounded-lg"
                  tooltip="bg-danger-50"
                />
                <div
                  class="bg-danger-100 h-8 w-8 rounded-lg"
                  tooltip="bg-danger-100"
                />
                <div
                  class="bg-danger-200 h-8 w-8 rounded-lg"
                  tooltip="bg-danger-200"
                />
                <div
                  class="bg-danger-300 h-8 w-8 rounded-lg"
                  tooltip="bg-danger-300"
                />
                <div
                  class="bg-danger-400 h-8 w-8 rounded-lg"
                  tooltip="bg-danger-400"
                />
                <div
                  class="bg-danger-500 h-8 w-8 rounded-lg"
                  tooltip="bg-danger-500"
                />
                <div
                  class="bg-danger-600 h-8 w-8 rounded-lg"
                  tooltip="bg-danger-600"
                />
                <div
                  class="bg-danger-700 h-8 w-8 rounded-lg"
                  tooltip="bg-danger-700"
                />
                <div
                  class="bg-danger-800 h-8 w-8 rounded-lg"
                  tooltip="bg-danger-800"
                />
                <div
                  class="bg-danger-900 h-8 w-8 rounded-lg"
                  tooltip="bg-danger-900"
                />
              </div>
            </template>
            <template #code>
              <DocMarkdown :source="dangerColor" class="prose max-w-full" />
            </template>
          </DocComponent>
        </DocSection>

        <!-- Slate color -->
        <DocSection title="Muted color" tag="1.0.0">
          <DocComponent label="Success color variations">
            <template #demo>
              <div class="flex flex-wrap items-end gap-2">
                <div
                  class="bg-muted-50 h-8 w-8 rounded-lg"
                  tooltip="bg-muted-50"
                />
                <div
                  class="bg-muted-100 h-8 w-8 rounded-lg"
                  tooltip="bg-muted-100"
                />
                <div
                  class="bg-muted-200 h-8 w-8 rounded-lg"
                  tooltip="bg-muted-200"
                />
                <div
                  class="bg-muted-300 h-8 w-8 rounded-lg"
                  tooltip="bg-muted-300"
                />
                <div
                  class="bg-muted-400 h-8 w-8 rounded-lg"
                  tooltip="bg-muted-400"
                />
                <div
                  class="bg-muted-500 h-8 w-8 rounded-lg"
                  tooltip="bg-muted-500"
                />
                <div
                  class="bg-muted-600 h-8 w-8 rounded-lg"
                  tooltip="bg-muted-600"
                />
                <div
                  class="bg-muted-700 h-8 w-8 rounded-lg"
                  tooltip="bg-muted-700"
                />
                <div
                  class="bg-muted-800 h-8 w-8 rounded-lg"
                  tooltip="bg-muted-800"
                />
                <div
                  class="bg-muted-900 h-8 w-8 rounded-lg"
                  tooltip="bg-muted-900"
                />
              </div>
            </template>
            <template #code>
              <DocMarkdown :source="mutedColor" class="prose max-w-full" />
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
