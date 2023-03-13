<script setup lang="ts">
// @ts-ignore
import { useDocumentationRoutes } from '#imports'

const app = useAppConfig()

// @ts-ignore
const componentsMeta = await useComponentMeta()
const { routesFlat, routesByCategory, categoryOrders } =
  useDocumentationRoutes()

const meta = ref<string[]>([])
watchEffect(async () => {
  meta.value = Object.keys(componentsMeta.value)?.filter(
    (name) =>
      !['TairoWelcome'].includes(name) &&
      (name.startsWith('Base') ||
        name.startsWith('Tairo') ||
        name.startsWith('Addon')),
  )
})

const componentsFlat = computed(() => {
  return meta.value.map((name) => {
    const route = routesFlat.value.find((route: any) =>
      route.meta?.documentation?.components?.includes(name),
    )
    if (process.dev) {
      if (!route) {
        console.warn(
          `Component ${name} is missing a documentation route. Please add it to the documentation routes.`,
        )
      }
    }
    return {
      name,
      route,
    }
  })
})

const componentsByCategory = computed(() => {
  const categories = Object.keys(routesByCategory.value)
  return categories.map((category) => {
    const components = componentsFlat.value.filter((c) => {
      const route = routesFlat.value.find((route: any) =>
        route.meta?.documentation?.components?.includes(c.name),
      )
      if (!route) return category === 'Uncategorized'
      return (route?.meta?.documentation as any)?.category === category
    })
    return {
      category,
      components,
    }
  })
})

const componentsByCategoryMaped = computed(() => {
  const map: Record<string, any> = {}
  componentsByCategory.value.forEach((c) => {
    map[c.category] = c
  })
  return map
})
</script>

<template>
  <div>
    <BaseBreadcrumb />

    <DocLayout>
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

        <template v-for="category in categoryOrders">
          <div
            v-if="componentsByCategoryMaped[category]?.components?.length"
            :key="category"
          >
            <DocSection :title="componentsByCategoryMaped[category].category">
              <div class="grid gap-5 md:grid-cols-2">
                <BaseCard
                  v-for="component of componentsByCategoryMaped[category]
                    .components"
                  class="group"
                  :class="[
                    !component.route || (!(component?.route?.meta?.documentation as any)?.description && !component?.route?.meta?.description) ? 'opacity-40' : ''
                  ]"
                >
                  <div class="mb-2 flex justify-between p-6">
                    <div class="grow pr-4">
                      <BaseHeading
                        as="h3"
                        size="xl"
                        weight="normal"
                        lead="tight"
                        class="mb-2"
                      >
                        <code class="text-muted-800 dark:text-white"
                          >&lt;<TairoTocAnchor :level="3" prefix="">{{
                            component.name
                          }}</TairoTocAnchor
                          >&gt;</code
                        >
                      </BaseHeading>
                      <BaseParagraph lead="tight" size="sm">
                        <span
                          class="text-muted-400"
                          v-if="(component?.route?.meta?.documentation as any)
                          ?.description ?? component?.route?.meta?.description"
                        >
                          {{
                            (component?.route?.meta?.documentation as any)
                              ?.description ??
                            component?.route?.meta?.description
                          }}
                        </span>
                        <span class="text-danger-400" v-else>
                          No description
                        </span>
                      </BaseParagraph>
                    </div>
                    <template v-if="component.route?.meta?.documentation">
                      <img
                        class="h-20 flex-shrink-0 opacity-60 grayscale transition-all duration-300 group-hover:opacity-100 group-hover:grayscale-0 dark:hidden"
                        v-if="component.route?.meta?.documentation.icon?.src"
                        :src="component.route?.meta?.documentation.icon?.src"
                        :alt="component.name + ' Tairo Documentation'"
                      />
                      <img
                        class="hidden h-20 flex-shrink-0 opacity-60 grayscale transition-all duration-300 group-hover:opacity-100 group-hover:grayscale-0 dark:block"
                        v-if="component.route?.meta?.documentation.icon?.src"
                        :src="
                          component.route?.meta?.documentation.icon?.srcDark ||
                          component.route?.meta?.documentation.icon?.src
                        "
                        :alt="component.name + ' Tairo Documentation'"
                      />
                    </template>
                  </div>
                  <div
                    class="dark:border-muted-700 border-t-2 border-dashed border-gray-300 py-4 px-6"
                  >
                    <NuxtLink
                      v-if="component.route"
                      :to="component.route"
                      class="text-primary-500 font-sans text-sm font-medium opacity-60 transition-opacity duration-300 hover:opacity-100"
                    >
                      View documentation
                    </NuxtLink>
                    <span
                      v-else
                      class="text-danger-500 font-sans text-sm font-medium opacity-60 transition-opacity duration-300 hover:opacity-100"
                    >
                      Missing documentation
                    </span>
                  </div>
                </BaseCard>
              </div>
            </DocSection>
          </div>
        </template>
      </template>
      <template #toc>
        <DocToc />
      </template>
    </DocLayout>
  </div>
</template>
