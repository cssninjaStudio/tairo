<script setup lang="ts">
import DangerColorDemo from '~/documentation/overview/danger-color.vue'
import dangerColor from '~/documentation/overview/danger-color.vue?raw'
import InfoColorDemo from '~/documentation/overview/info-color.vue'
import infoColor from '~/documentation/overview/info-color.vue?raw'
import PrimaryColorDemo from '~/documentation/overview/primary-color.vue'
import primaryColor from '~/documentation/overview/primary-color.vue?raw'
import MutedColorDemo from '~/documentation/overview/muted-color.vue'
import mutedColor from '~/documentation/overview/muted-color.vue?raw'
import SuccessColorDemo from '~/documentation/overview/success-color.vue'
import successColor from '~/documentation/overview/success-color.vue?raw'
import WarningColorDemo from '~/documentation/overview/warning-color.vue'
import warningColor from '~/documentation/overview/warning-color.vue?raw'

definePageMeta({
  title: 'Components Hub',
})

const app = useAppConfig()

function wrapVueMarkdown(source: string) {
  return '```vue\n' + source + '\n```'
}
</script>

<template>
  <div>
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
                weight="medium"
                :anchor="{ prefix: '' }"
                class="text-muted-800 dark:text-white mb-5"
              >
                <TairoTocAnchor>
                  <strong>{{ app.tairo.title }}</strong>
                  Overview
                </TairoTocAnchor>
              </BaseHeading>
              <BaseParagraph
                size="sm"
                class="text-muted-500 dark:text-muted-400 mb-4"
              >
                Tairo is a powerful Nuxt 3 / Tailwind CSS Admin and Webapp UI
                Kit, built with Vue 3 and TypeScript.
              </BaseParagraph>
              <BaseText size="sm" class="text-muted-400 dark:text-muted-400">
                Tairo provides everything you need to build a modern web app or
                admin application. All basic components are built with Tailwind
                CSS and powered by Nuxt 3.
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
                name="logos:vue"
                class="mx-auto mb-2 block h-10 w-10 scale-75 dark:invert"
              />
              <BaseHeading
                as="h4"
                size="sm"
                weight="semibold"
                class="text-muted-800 dark:text-white"
              >
                Nuxt UI
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
            <TairoTocAnchor>Features</TairoTocAnchor>
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
                <PrimaryColorDemo />
              </div>
            </template>
            <template #code>
              <AddonMarkdownRemark
                :source="wrapVueMarkdown(primaryColor)"
                class="prose max-w-full"
              />
            </template>
          </DocComponent>
        </DocSection>

        <!-- Info color -->
        <DocSection title="Info color" tag="1.0.0">
          <DocComponent label="Info color variations">
            <template #demo>
              <div class="flex flex-wrap items-end gap-2">
                <InfoColorDemo />
              </div>
            </template>
            <template #code>
              <AddonMarkdownRemark
                :source="wrapVueMarkdown(infoColor)"
                class="prose max-w-full"
              />
            </template>
          </DocComponent>
        </DocSection>

        <!-- Success color -->
        <DocSection title="Success color" tag="1.0.0">
          <DocComponent label="Success color variations">
            <template #demo>
              <div class="flex flex-wrap items-end gap-2">
                <SuccessColorDemo />
              </div>
            </template>
            <template #code>
              <AddonMarkdownRemark
                :source="wrapVueMarkdown(successColor)"
                class="prose max-w-full"
              />
            </template>
          </DocComponent>
        </DocSection>

        <!-- Warning color -->
        <DocSection title="Warning color" tag="1.0.0">
          <DocComponent label="Success color variations">
            <template #demo>
              <div class="flex flex-wrap items-end gap-2">
                <WarningColorDemo />
              </div>
            </template>
            <template #code>
              <AddonMarkdownRemark
                :source="wrapVueMarkdown(warningColor)"
                class="prose max-w-full"
              />
            </template>
          </DocComponent>
        </DocSection>

        <!-- Danger color -->
        <DocSection title="Danger color" tag="1.0.0">
          <DocComponent label="Success color variations">
            <template #demo>
              <div class="flex flex-wrap items-end gap-2">
                <DangerColorDemo />
              </div>
            </template>
            <template #code>
              <AddonMarkdownRemark
                :source="wrapVueMarkdown(dangerColor)"
                class="prose max-w-full"
              />
            </template>
          </DocComponent>
        </DocSection>

        <!-- Slate color -->
        <DocSection title="Muted color" tag="1.0.0">
          <DocComponent label="Success color variations">
            <template #demo>
              <div class="flex flex-wrap items-end gap-2">
                <MutedColorDemo />
              </div>
            </template>
            <template #code>
              <AddonMarkdownRemark
                :source="wrapVueMarkdown(mutedColor)"
                class="prose max-w-full"
              />
            </template>
          </DocComponent>
        </DocSection>

        <div>
          <BaseHeading
            as="h2"
            size="xl"
            anchor
            weight="medium"
            class="text-muted-800 dark:text-white mb-5"
          >
            <TairoTocAnchor>Components list</TairoTocAnchor>
          </BaseHeading>

          <div class="grid gap-5 md:grid-cols-2">
            <!-- Hub Card -->
            <BaseCard class="group">
              <div class="mb-2 flex justify-between p-6">
                <div class="grow pr-4">
                  <BaseHeading
                    size="xl"
                    weight="normal"
                    lead="tight"
                    class="mb-2"
                  >
                    <span class="text-muted-800 dark:text-white">Content</span>
                  </BaseHeading>
                  <BaseParagraph lead="tight" size="sm">
                    <span class="text-muted-400">
                      Get familiar with the {{ app.tairo.title }} content
                      styles. Code examples included.
                    </span>
                  </BaseParagraph>
                </div>
                <NuxtImg
                  class="h-20 flex-shrink-0 opacity-60 grayscale transition-all duration-300 group-hover:opacity-100 group-hover:grayscale-0 dark:hidden"
                  src="/img/illustrations/components/lists.svg"
                  alt="Component image"
                />
                <NuxtImg
                  class="hidden h-20 flex-shrink-0 opacity-60 grayscale transition-all duration-300 group-hover:opacity-100 group-hover:grayscale-0 dark:block"
                  src="/img/illustrations/components/lists-dark.svg"
                  alt="Component image"
                />
              </div>
              <div
                class="dark:border-muted-700 border-t-2 border-dashed border-gray-300 py-4 px-6"
              >
                <NuxtLink
                  to="/components/typography"
                  class="text-primary-500 font-sans text-sm font-medium opacity-60 transition-opacity duration-300 hover:opacity-100"
                >
                  Get Started
                </NuxtLink>
              </div>
            </BaseCard>
            <!-- Hub Card -->
            <BaseCard class="group">
              <div class="mb-2 flex justify-between p-6">
                <div class="grow pr-4">
                  <BaseHeading
                    size="xl"
                    weight="normal"
                    lead="tight"
                    class="mb-2"
                  >
                    <span class="text-muted-800 dark:text-white">Tags</span>
                  </BaseHeading>
                  <BaseParagraph lead="tight" size="sm">
                    <span class="text-muted-400">
                      Get familiar with the {{ app.tairo.title }} tag styles.
                      Code examples included.
                    </span>
                  </BaseParagraph>
                </div>
                <NuxtImg
                  class="h-20 flex-shrink-0 opacity-60 grayscale transition-all duration-300 group-hover:opacity-100 group-hover:grayscale-0 dark:hidden"
                  src="/img/illustrations/components/tags.svg"
                  alt="Component image"
                />
                <NuxtImg
                  class="hidden h-20 flex-shrink-0 opacity-60 grayscale transition-all duration-300 group-hover:opacity-100 group-hover:grayscale-0 dark:block"
                  src="/img/illustrations/components/tags-dark.svg"
                  alt="Component image"
                />
              </div>
              <div
                class="dark:border-muted-700 border-t-2 border-dashed border-gray-300 py-4 px-6"
              >
                <NuxtLink
                  to="/components/tag"
                  class="text-primary-500 font-sans text-sm font-medium opacity-60 transition-opacity duration-300 hover:opacity-100"
                >
                  Get Started
                </NuxtLink>
              </div>
            </BaseCard>
            <!-- Hub Card -->
            <BaseCard class="group">
              <div class="mb-2 flex justify-between p-6">
                <div class="grow pr-4">
                  <BaseHeading
                    size="xl"
                    weight="normal"
                    lead="tight"
                    class="mb-2"
                  >
                    <span class="text-muted-800 dark:text-white">Tabs</span>
                  </BaseHeading>
                  <BaseParagraph lead="tight" size="sm">
                    <span class="text-muted-400">
                      Get familiar with the Tairo tab styles. Code examples
                      included.
                    </span>
                  </BaseParagraph>
                </div>
                <NuxtImg
                  class="h-20 flex-shrink-0 opacity-60 grayscale transition-all duration-300 group-hover:opacity-100 group-hover:grayscale-0 dark:hidden"
                  src="/img/illustrations/components/tabs.svg"
                  alt="Component image"
                />
                <NuxtImg
                  class="hidden h-20 flex-shrink-0 opacity-60 grayscale transition-all duration-300 group-hover:opacity-100 group-hover:grayscale-0 dark:block"
                  src="/img/illustrations/components/tabs-dark.svg"
                  alt="Component image"
                />
              </div>
              <div
                class="dark:border-muted-700 border-t-2 border-dashed border-gray-300 py-4 px-6"
              >
                <NuxtLink
                  to="/components/tabs"
                  class="text-primary-500 font-sans text-sm font-medium opacity-60 transition-opacity duration-300 hover:opacity-100"
                >
                  Get Started
                </NuxtLink>
              </div>
            </BaseCard>
            <!-- Hub Card -->
            <BaseCard class="group">
              <div class="mb-2 flex justify-between p-6">
                <div class="grow pr-4">
                  <BaseHeading
                    size="xl"
                    weight="normal"
                    lead="tight"
                    class="mb-2"
                  >
                    <span class="text-muted-800 dark:text-white">Cards</span>
                  </BaseHeading>
                  <BaseParagraph lead="tight" size="sm">
                    <span class="text-muted-400">
                      Get familiar with the Tairo card styles. Code examples
                      included.
                    </span>
                  </BaseParagraph>
                </div>
                <NuxtImg
                  class="h-20 flex-shrink-0 opacity-60 grayscale transition-all duration-300 group-hover:opacity-100 group-hover:grayscale-0 dark:hidden"
                  src="/img/illustrations/components/cards.svg"
                  alt="Component image"
                />
                <NuxtImg
                  class="hidden h-20 flex-shrink-0 opacity-60 grayscale transition-all duration-300 group-hover:opacity-100 group-hover:grayscale-0 dark:block"
                  src="/img/illustrations/components/cards-dark.svg"
                  alt="Component image"
                />
              </div>
              <div
                class="dark:border-muted-700 border-t-2 border-dashed border-gray-300 py-4 px-6"
              >
                <NuxtLink
                  to="/components/card"
                  class="text-primary-500 font-sans text-sm font-medium opacity-60 transition-opacity duration-300 hover:opacity-100"
                >
                  Get Started
                </NuxtLink>
              </div>
            </BaseCard>
            <!-- Hub Card -->
            <BaseCard class="group">
              <div class="mb-2 flex justify-between p-6">
                <div class="grow pr-4">
                  <BaseHeading
                    size="xl"
                    weight="normal"
                    lead="tight"
                    class="mb-2"
                  >
                    <span class="text-muted-800 dark:text-white">Avatars</span>
                  </BaseHeading>
                  <BaseParagraph lead="tight" size="sm">
                    <span class="text-muted-400">
                      Get familiar with the Tairo avatar styles. Code examples
                      included.
                    </span>
                  </BaseParagraph>
                </div>
                <NuxtImg
                  class="h-20 flex-shrink-0 opacity-60 grayscale transition-all duration-300 group-hover:opacity-100 group-hover:grayscale-0 dark:hidden"
                  src="/img/illustrations/components/avatar.svg"
                  alt="Component image"
                />
                <NuxtImg
                  class="hidden h-20 flex-shrink-0 opacity-60 grayscale transition-all duration-300 group-hover:opacity-100 group-hover:grayscale-0 dark:block"
                  src="/img/illustrations/components/avatar-dark.svg"
                  alt="Component image"
                />
              </div>
              <div
                class="dark:border-muted-700 border-t-2 border-dashed border-gray-300 py-4 px-6"
              >
                <NuxtLink
                  to="/components/avatar"
                  class="text-primary-500 font-sans text-sm font-medium opacity-60 transition-opacity duration-300 hover:opacity-100"
                >
                  Get Started
                </NuxtLink>
              </div>
            </BaseCard>
            <!-- Hub Card -->
            <BaseCard class="group">
              <div class="mb-2 flex justify-between p-6">
                <div class="grow pr-4">
                  <BaseHeading
                    size="xl"
                    weight="normal"
                    lead="tight"
                    class="mb-2"
                  >
                    <span class="text-muted-800 dark:text-white">
                      Accordions
                    </span>
                  </BaseHeading>
                  <BaseParagraph lead="tight" size="sm">
                    <span class="text-muted-400">
                      Get familiar with the Tairo accordions styles. Code
                      examples included.
                    </span>
                  </BaseParagraph>
                </div>
                <NuxtImg
                  class="h-20 flex-shrink-0 opacity-60 grayscale transition-all duration-300 group-hover:opacity-100 group-hover:grayscale-0 dark:hidden"
                  src="/img/illustrations/components/accordion.svg"
                  alt="Component image"
                />
                <NuxtImg
                  class="hidden h-20 flex-shrink-0 opacity-60 grayscale transition-all duration-300 group-hover:opacity-100 group-hover:grayscale-0 dark:block"
                  src="/img/illustrations/components/accordion-dark.svg"
                  alt="Component image"
                />
              </div>
              <div
                class="dark:border-muted-700 border-t-2 border-dashed border-gray-300 py-4 px-6"
              >
                <NuxtLink
                  to="/components/accordion"
                  class="text-primary-500 font-sans text-sm font-medium opacity-60 transition-opacity duration-300 hover:opacity-100"
                >
                  Get Started
                </NuxtLink>
              </div>
            </BaseCard>
            <!-- Hub Card -->
            <BaseCard class="group">
              <div class="mb-2 flex justify-between p-6">
                <div class="grow pr-4">
                  <BaseHeading
                    size="xl"
                    weight="normal"
                    lead="tight"
                    class="mb-2"
                  >
                    <span class="text-muted-800 dark:text-white">
                      Breadcrumbs
                    </span>
                  </BaseHeading>
                  <BaseParagraph lead="tight" size="sm">
                    <span class="text-muted-400">
                      Get familiar with the Tairo breadcrumb styles. Code
                      examples included.
                    </span>
                  </BaseParagraph>
                </div>
                <NuxtImg
                  class="h-20 flex-shrink-0 opacity-60 grayscale transition-all duration-300 group-hover:opacity-100 group-hover:grayscale-0 dark:hidden"
                  src="/img/illustrations/components/breadcrumb.svg"
                  alt="Component image"
                />
                <NuxtImg
                  class="hidden h-20 flex-shrink-0 opacity-60 grayscale transition-all duration-300 group-hover:opacity-100 group-hover:grayscale-0 dark:block"
                  src="/img/illustrations/components/breadcrumb-dark.svg"
                  alt="Component image"
                />
              </div>
              <div
                class="dark:border-muted-700 border-t-2 border-dashed border-gray-300 py-4 px-6"
              >
                <NuxtLink
                  to="/components/breadcrumb"
                  class="text-primary-500 font-sans text-sm font-medium opacity-60 transition-opacity duration-300 hover:opacity-100"
                >
                  Get Started
                </NuxtLink>
              </div>
            </BaseCard>
            <!-- Hub Card -->
            <BaseCard class="group">
              <div class="mb-2 flex justify-between p-6">
                <div class="grow pr-4">
                  <BaseHeading
                    size="xl"
                    weight="normal"
                    lead="tight"
                    class="mb-2"
                  >
                    <span class="text-muted-800 dark:text-white">Icon Box</span>
                  </BaseHeading>
                  <BaseParagraph lead="tight" size="sm">
                    <span class="text-muted-400">
                      Get familiar with the Tairo icon boxes styles. Code
                      examples included.
                    </span>
                  </BaseParagraph>
                </div>
                <NuxtImg
                  class="h-20 flex-shrink-0 opacity-60 grayscale transition-all duration-300 group-hover:opacity-100 group-hover:grayscale-0 dark:hidden"
                  src="/img/illustrations/components/icon-box.svg"
                  alt="Component image"
                />
                <NuxtImg
                  class="hidden h-20 flex-shrink-0 opacity-60 grayscale transition-all duration-300 group-hover:opacity-100 group-hover:grayscale-0 dark:block"
                  src="/img/illustrations/components/icon-box-dark.svg"
                  alt="Component image"
                />
              </div>
              <div
                class="dark:border-muted-700 border-t-2 border-dashed border-gray-300 py-5 px-6"
              >
                <NuxtLink
                  to="/components/icon-box"
                  class="text-primary-500 font-sans text-sm font-medium opacity-60 transition-opacity duration-300 hover:opacity-100"
                >
                  Get Started
                </NuxtLink>
              </div>
            </BaseCard>
            <!-- Hub Card -->
            <BaseCard class="group">
              <div class="mb-2 flex justify-between p-6">
                <div class="grow pr-4">
                  <BaseHeading
                    size="xl"
                    weight="normal"
                    lead="tight"
                    class="mb-2"
                  >
                    <span class="text-muted-800 dark:text-white">
                      Flex Table
                    </span>
                  </BaseHeading>
                  <BaseParagraph lead="tight" size="sm">
                    <span class="text-muted-400">
                      Get familiar with the Tairo flex table styles. Code
                      examples included.
                    </span>
                  </BaseParagraph>
                </div>
                <NuxtImg
                  class="h-20 flex-shrink-0 opacity-60 grayscale transition-all duration-300 group-hover:opacity-100 group-hover:grayscale-0 dark:hidden"
                  src="/img/illustrations/components/table.svg"
                  alt="Component image"
                />
                <NuxtImg
                  class="hidden h-20 flex-shrink-0 opacity-60 grayscale transition-all duration-300 group-hover:opacity-100 group-hover:grayscale-0 dark:block"
                  src="/img/illustrations/components/table-dark.svg"
                  alt="Component image"
                />
              </div>
              <div
                class="dark:border-muted-700 border-t-2 border-dashed border-gray-300 py-5 px-6"
              >
                <NuxtLink
                  to="/components/flex-table"
                  class="text-primary-500 font-sans text-sm font-medium opacity-60 transition-opacity duration-300 hover:opacity-100"
                >
                  Get Started
                </NuxtLink>
              </div>
            </BaseCard>
            <!-- Hub Card -->
            <BaseCard class="group">
              <div class="mb-2 flex justify-between p-6">
                <div class="grow pr-4">
                  <BaseHeading
                    size="xl"
                    weight="normal"
                    lead="tight"
                    class="mb-2"
                  >
                    <span class="text-muted-800 dark:text-white">Snacks</span>
                  </BaseHeading>
                  <BaseParagraph lead="tight" size="sm">
                    <span class="text-muted-400">
                      Get familiar with the Tairo snack styles. Code examples
                      included.
                    </span>
                  </BaseParagraph>
                </div>
                <NuxtImg
                  class="h-20 flex-shrink-0 opacity-60 grayscale transition-all duration-300 group-hover:opacity-100 group-hover:grayscale-0 dark:hidden"
                  src="/img/illustrations/components/snacks.svg"
                  alt="Component image"
                />
                <NuxtImg
                  class="hidden h-20 flex-shrink-0 opacity-60 grayscale transition-all duration-300 group-hover:opacity-100 group-hover:grayscale-0 dark:block"
                  src="/img/illustrations/components/snacks-dark.svg"
                  alt="Component image"
                />
              </div>
              <div
                class="dark:border-muted-700 border-t-2 border-dashed border-gray-300 py-5 px-6"
              >
                <NuxtLink
                  to="/components/snack"
                  class="text-primary-500 font-sans text-sm font-medium opacity-60 transition-opacity duration-300 hover:opacity-100"
                >
                  Get Started
                </NuxtLink>
              </div>
            </BaseCard>
            <BaseCard class="group">
              <div class="mb-2 flex justify-between p-6">
                <div class="grow pr-4">
                  <BaseHeading
                    size="xl"
                    weight="normal"
                    lead="tight"
                    class="mb-2"
                  >
                    <span class="text-muted-800 dark:text-white">Buttons</span>
                  </BaseHeading>
                  <BaseParagraph lead="tight" size="sm">
                    <span class="text-muted-400">
                      Get familiar with the {{ app.tairo.title }} button styles.
                      Code examples included.
                    </span>
                  </BaseParagraph>
                </div>
                <NuxtImg
                  class="h-20 flex-shrink-0 opacity-60 grayscale transition-all duration-300 group-hover:opacity-100 group-hover:grayscale-0 dark:hidden"
                  src="/img/illustrations/components/buttons.svg"
                  alt="Component image"
                />
                <NuxtImg
                  class="hidden h-20 flex-shrink-0 opacity-60 grayscale transition-all duration-300 group-hover:opacity-100 group-hover:grayscale-0 dark:block"
                  src="/img/illustrations/components/buttons-dark.svg"
                  alt="Component image"
                />
              </div>
              <div
                class="dark:border-muted-700 border-t-2 border-dashed border-gray-300 py-4 px-6"
              >
                <NuxtLink
                  to="/components/button"
                  class="text-primary-500 font-sans text-sm font-medium opacity-60 transition-opacity duration-300 hover:opacity-100"
                >
                  Get Started
                </NuxtLink>
              </div>
            </BaseCard>
            <!-- Hub Card -->
            <BaseCard class="group">
              <div class="mb-2 flex justify-between p-6">
                <div class="grow pr-4">
                  <BaseHeading
                    size="xl"
                    weight="normal"
                    lead="tight"
                    class="mb-2"
                  >
                    <span class="text-muted-800 dark:text-white">Icons</span>
                  </BaseHeading>
                  <BaseParagraph lead="tight" size="sm">
                    <span class="text-muted-400">
                      Get familiar with the {{ app.tairo.title }} icon
                      libraries. Code examples included.
                    </span>
                  </BaseParagraph>
                </div>
                <NuxtImg
                  class="h-20 flex-shrink-0 opacity-60 grayscale transition-all duration-300 group-hover:opacity-100 group-hover:grayscale-0 dark:hidden"
                  src="/img/illustrations/components/icons.svg"
                  alt="Component image"
                />
                <NuxtImg
                  class="hidden h-20 flex-shrink-0 opacity-60 grayscale transition-all duration-300 group-hover:opacity-100 group-hover:grayscale-0 dark:block"
                  src="/img/illustrations/components/icons-dark.svg"
                  alt="Component image"
                />
              </div>
              <div
                class="dark:border-muted-700 border-t-2 border-dashed border-gray-300 py-4 px-6"
              >
                <NuxtLink
                  to="/components/addons/icons"
                  class="text-primary-500 font-sans text-sm font-medium opacity-60 transition-opacity duration-300 hover:opacity-100"
                >
                  Get Started
                </NuxtLink>
              </div>
            </BaseCard>
            <!-- Hub Card -->
            <BaseCard class="group">
              <div class="mb-2 flex justify-between p-6">
                <div class="grow pr-4">
                  <BaseHeading
                    size="xl"
                    weight="normal"
                    lead="tight"
                    class="mb-2"
                  >
                    <span class="text-muted-800 dark:text-white">
                      Dropdowns
                    </span>
                  </BaseHeading>
                  <BaseParagraph lead="tight" size="sm">
                    <span class="text-muted-400">
                      Get familiar with the Tairo dropdown styles. Code examples
                      included.
                    </span>
                  </BaseParagraph>
                </div>
                <NuxtImg
                  class="h-20 flex-shrink-0 opacity-60 grayscale transition-all duration-300 group-hover:opacity-100 group-hover:grayscale-0 dark:hidden"
                  src="/img/illustrations/components/dropdown.svg"
                  alt="Component image"
                />
                <NuxtImg
                  class="hidden h-20 flex-shrink-0 opacity-60 grayscale transition-all duration-300 group-hover:opacity-100 group-hover:grayscale-0 dark:block"
                  src="/img/illustrations/components/dropdown-dark.svg"
                  alt="Component image"
                />
              </div>
              <div
                class="dark:border-muted-700 border-t-2 border-dashed border-gray-300 py-4 px-6"
              >
                <NuxtLink
                  to="/components/dropdown"
                  class="text-primary-500 font-sans text-sm font-medium opacity-60 transition-opacity duration-300 hover:opacity-100"
                >
                  Get Started
                </NuxtLink>
              </div>
            </BaseCard>
            <!-- Hub Card -->
            <BaseCard class="group">
              <div class="mb-2 flex justify-between p-6">
                <div class="grow pr-4">
                  <BaseHeading
                    size="xl"
                    weight="normal"
                    lead="tight"
                    class="mb-2"
                  >
                    <span class="text-muted-800 dark:text-white">Modals</span>
                  </BaseHeading>
                  <BaseParagraph lead="tight" size="sm">
                    <span class="text-muted-400">
                      Get familiar with the Tairo modal styles. Code examples
                      included.
                    </span>
                  </BaseParagraph>
                </div>
                <NuxtImg
                  class="h-20 flex-shrink-0 opacity-60 grayscale transition-all duration-300 group-hover:opacity-100 group-hover:grayscale-0 dark:hidden"
                  src="/img/illustrations/components/modal.svg"
                  alt="Component image"
                />
                <NuxtImg
                  class="hidden h-20 flex-shrink-0 opacity-60 grayscale transition-all duration-300 group-hover:opacity-100 group-hover:grayscale-0 dark:block"
                  src="/img/illustrations/components/modal-dark.svg"
                  alt="Component image"
                />
              </div>
              <div
                class="dark:border-muted-700 border-t-2 border-dashed border-gray-300 py-4 px-6"
              >
                <NuxtLink
                  to="/components/modal"
                  class="text-primary-500 font-sans text-sm font-medium opacity-60 transition-opacity duration-300 hover:opacity-100"
                >
                  Get Started
                </NuxtLink>
              </div>
            </BaseCard>
            <!-- Hub Card -->
            <BaseCard class="group">
              <div class="mb-2 flex justify-between p-6">
                <div class="grow pr-4">
                  <BaseHeading
                    size="xl"
                    weight="normal"
                    lead="tight"
                    class="mb-2"
                  >
                    <span class="text-muted-800 dark:text-white">Progress</span>
                  </BaseHeading>
                  <BaseParagraph lead="tight" size="sm">
                    <span class="text-muted-400">
                      Get familiar with the Tairo progress bar styles. Code
                      examples included.
                    </span>
                  </BaseParagraph>
                </div>
                <NuxtImg
                  class="h-20 flex-shrink-0 opacity-60 grayscale transition-all duration-300 group-hover:opacity-100 group-hover:grayscale-0 dark:hidden"
                  src="/img/illustrations/components/progress.svg"
                  alt="Component image"
                />
                <NuxtImg
                  class="hidden h-20 flex-shrink-0 opacity-60 grayscale transition-all duration-300 group-hover:opacity-100 group-hover:grayscale-0 dark:block"
                  src="/img/illustrations/components/progress-dark.svg"
                  alt="Component image"
                />
              </div>
              <div
                class="dark:border-muted-700 border-t-2 border-dashed border-gray-300 py-4 px-6"
              >
                <NuxtLink
                  to="/components/progress"
                  class="text-primary-500 font-sans text-sm font-medium opacity-60 transition-opacity duration-300 hover:opacity-100"
                >
                  Get Started
                </NuxtLink>
              </div>
            </BaseCard>
            <!-- Hub Card -->
            <BaseCard class="group">
              <div class="mb-2 flex justify-between p-6">
                <div class="grow pr-4">
                  <BaseHeading
                    size="xl"
                    weight="normal"
                    lead="tight"
                    class="mb-2"
                  >
                    <span class="text-muted-800 dark:text-white">Forms</span>
                  </BaseHeading>
                  <BaseParagraph lead="tight" size="sm">
                    <span class="text-muted-400">
                      Get familiar with the Tairo form elements. Code examples
                      included.
                    </span>
                  </BaseParagraph>
                </div>
                <NuxtImg
                  class="h-20 flex-shrink-0 opacity-60 grayscale transition-all duration-300 group-hover:opacity-100 group-hover:grayscale-0 dark:hidden"
                  src="/img/illustrations/components/forms.svg"
                  alt="Component image"
                />
                <NuxtImg
                  class="hidden h-20 flex-shrink-0 opacity-60 grayscale transition-all duration-300 group-hover:opacity-100 group-hover:grayscale-0 dark:block"
                  src="/img/illustrations/components/forms-dark.svg"
                  alt="Component image"
                />
              </div>
              <div
                class="dark:border-muted-700 border-t-2 border-dashed border-gray-300 py-4 px-6"
              >
                <NuxtLink
                  to="/components/form/input"
                  class="text-primary-500 font-sans text-sm font-medium opacity-60 transition-opacity duration-300 hover:opacity-100"
                >
                  Get Started
                </NuxtLink>
              </div>
            </BaseCard>
            <!-- Hub Card -->
            <BaseCard class="group">
              <div class="mb-2 flex justify-between p-6">
                <div class="grow pr-4">
                  <BaseHeading
                    size="xl"
                    weight="normal"
                    lead="tight"
                    class="mb-2"
                  >
                    <span class="text-muted-800 dark:text-white">
                      Checkboxes
                    </span>
                  </BaseHeading>
                  <BaseParagraph lead="tight" size="sm">
                    <span class="text-muted-400">
                      Get familiar with the Tairo checkboxes styles. Code
                      examples included.
                    </span>
                  </BaseParagraph>
                </div>
                <NuxtImg
                  class="h-20 flex-shrink-0 opacity-60 grayscale transition-all duration-300 group-hover:opacity-100 group-hover:grayscale-0 dark:hidden"
                  src="/img/illustrations/components/checkboxes.svg"
                  alt="Component image"
                />
                <NuxtImg
                  class="hidden h-20 flex-shrink-0 opacity-60 grayscale transition-all duration-300 group-hover:opacity-100 group-hover:grayscale-0 dark:block"
                  src="/img/illustrations/components/checkboxes-dark.svg"
                  alt="Component image"
                />
              </div>
              <div
                class="dark:border-muted-700 border-t-2 border-dashed border-gray-300 py-4 px-6"
              >
                <NuxtLink
                  to="/components/form/checkbox"
                  class="text-primary-500 font-sans text-sm font-medium opacity-60 transition-opacity duration-300 hover:opacity-100"
                >
                  Get Started
                </NuxtLink>
              </div>
            </BaseCard>
            <!-- Hub Card -->
            <BaseCard class="group">
              <div class="mb-2 flex justify-between p-6">
                <div class="grow pr-4">
                  <BaseHeading
                    size="xl"
                    weight="normal"
                    lead="tight"
                    class="mb-2"
                  >
                    <span class="text-muted-800 dark:text-white">Switches</span>
                  </BaseHeading>
                  <BaseParagraph lead="tight" size="sm">
                    <span class="text-muted-400">
                      Get familiar with the Tairo switch styles. Code examples
                      included.
                    </span>
                  </BaseParagraph>
                </div>
                <NuxtImg
                  class="h-20 flex-shrink-0 opacity-60 grayscale transition-all duration-300 group-hover:opacity-100 group-hover:grayscale-0 dark:hidden"
                  src="/img/illustrations/components/switches.svg"
                  alt="Component image"
                />
                <NuxtImg
                  class="hidden h-20 flex-shrink-0 opacity-60 grayscale transition-all duration-300 group-hover:opacity-100 group-hover:grayscale-0 dark:block"
                  src="/img/illustrations/components/switches-dark.svg"
                  alt="Component image"
                />
              </div>
              <div
                class="dark:border-muted-700 border-t-2 border-dashed border-gray-300 py-5 px-6"
              >
                <NuxtLink
                  to="/components/form/switch"
                  class="text-primary-500 font-sans text-sm font-medium opacity-60 transition-opacity duration-300 hover:opacity-100"
                >
                  Get Started
                </NuxtLink>
              </div>
            </BaseCard>
          </div>
        </div>
      </template>
      <!-- Toc -->
      <template #toc>
        <DocToc />
      </template>
    </DocLayout>
  </div>
</template>
