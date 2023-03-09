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
  title: 'Overview',
})

const app = useAppConfig()

function wrapVueMarkdown(source: string) {
  return '```vue\n' + source + '\n```'
}

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
    to: '/components',
  },
  {
    label: 'Overview',
    hideLabel: false,
    to: '#',
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
                <strong>{{ app.tairo.title }}</strong>
                Overview
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
                <PrimaryColorDemo />
              </div>
            </template>
            <template #code>
              <DocMarkdown
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
              <DocMarkdown
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
              <DocMarkdown
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
              <DocMarkdown
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
              <DocMarkdown
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
              <DocMarkdown
                :source="wrapVueMarkdown(mutedColor)"
                class="prose max-w-full"
              />
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
