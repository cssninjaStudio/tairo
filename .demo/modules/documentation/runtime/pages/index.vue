<script setup lang="ts">
const app = useAppConfig()
const router = useRouter()

const breadcrumb = computed(() => {
  const items: any[] = []
  const indexRoute = router.resolve('/')

  if (indexRoute.meta.breadcrumb === false) {
    // skip breadcrumb item
  } else if (indexRoute.meta.breadcrumb) {
    const breadcrumbItem = indexRoute.meta.breadcrumb
    items.push({
      to: indexRoute.path,
      ...breadcrumbItem,
    })
  } else if (indexRoute.meta.title) {
    items.push({
      label: indexRoute.meta.title as string,
      to: indexRoute.path,
    })
  }

  items.push({
    label: 'Documentation Hub',
    to: '/documentation',
  })

  return items
})
</script>

<template>
  <div>
    <BaseBreadcrumb :items="breadcrumb" />

    <DocLayout>
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
              Tairo is a powerful Nuxt 3 / Tailwind CSS Admin and Webapp UI Kit,
              built with Vue 3 and TypeScript.
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
            <Icon name="logos:nuxt-icon" class="mx-auto mb-2 block h-10 w-10" />
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
              name="file-icons:nuxt"
              class="mx-auto mb-2 block h-10 w-10 scale-95 text-primary-500 dark:text-primary-400"
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

      <DocSection title="Features">
        <template #grid>
          <DocGridIcon name="simple-icons:nuxtdotjs" color="success">
            Nuxt 3
            <template #description>Robust and solid vue app</template>
          </DocGridIcon>
          <DocGridIcon name="teenyicons:typescript-outline" color="yellow">
            Typescript
            <template #description>Types and auto-discovery</template>
          </DocGridIcon>
          <DocGridIcon name="simple-icons:vite" color="primary">
            Vite
            <template #description>Bundling & hot reloading</template>
          </DocGridIcon>
          <DocGridIcon name="simple-icons:tailwindcss" color="sky">
            TailwindCSS
            <template #description>For precise and clean styles</template>
          </DocGridIcon>
          <DocGridIcon name="icon-park-outline:pineapple" color="pink">
            Pinia
            <template #description>For precise and clean styles</template>
          </DocGridIcon>
          <DocGridIcon name="simple-icons:eslint" color="lime">
            ESlint
            <template #description>For standardized code</template>
          </DocGridIcon>
        </template>
      </DocSection>

      <DocComponentList />

      <template #sidebar>
        <DocLayoutToc />
      </template>
    </DocLayout>
  </div>
</template>
