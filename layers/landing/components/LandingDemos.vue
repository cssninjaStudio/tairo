<script setup lang="ts">
import type { RouteRecordRaw } from 'vue-router'

const props = withDefaults(
  defineProps<{
    limit?: number
    cta?: boolean
  }>(),
  {
    limit: undefined,
    cta: true,
  },
)

const selectedCategory = ref('')

const router = useRouter()

const demoPages = computed(() => {
  const match: RouteRecordRaw[] = []

  function traverseRoutes(routes: Readonly<RouteRecordRaw[]>) {
    for (const route of routes) {
      if (route.children) {
        // recurse
        traverseRoutes(route.children)
      } else if (route.path.includes(':')) {
        // skip dynamic route
        continue
      } else if (route.meta?.preview) {
        // has preview data
        match.push(route)
      }
    }
  }

  // start on top route
  traverseRoutes(router.options.routes)

  return match.sort((a, b) => {
    if (a.meta?.preview?.order === undefined) return 0
    if (b.meta?.preview?.order === undefined) return 0
    if (a.meta.preview?.order < b.meta.preview?.order) return -1
    if (a.meta.preview?.order > b.meta.preview?.order) return 1
    return 0
  })
})

const categories = computed(() => {
  const categories = new Set<string>()
  for (const route of demoPages.value) {
    if (!route.meta?.preview?.categories) {
      continue
    }
    if (!Array.isArray(route.meta?.preview?.categories)) {
      continue
    }
    for (const category of route.meta.preview.categories) {
      categories.add(category)
    }
  }
  return Array.from(categories).sort((a, b) => {
    return a.localeCompare(b)
  })
})

const filteredDemos = computed(() => {
  if (selectedCategory.value.length === 0) {
    return demoPages.value
  }
  return demoPages.value.filter((page) => {
    if (!page.meta?.preview?.categories) {
      return false
    }
    if (!Array.isArray(page.meta?.preview?.categories)) {
      return false
    }
    return page.meta.preview.categories.some((category) =>
      selectedCategory.value.includes(category),
    )
  })
})
</script>

<template>
  <div class="dark:bg-muted-900 bg-white py-24">
    <div class="mx-auto w-full max-w-7xl px-4">
      <div class="mb-16 max-w-2xl">
        <BaseText
          class="text-primary-500 mb-2 text-[0.65rem] uppercase tracking-wider"
          >Prebuilt pages</BaseText
        >
        <BaseHeading
          as="h2"
          size="4xl"
          weight="light"
          lead="tight"
          class="text-muted-800 mx-auto mb-4 dark:text-white"
        >
          {{ demoPages.length }}+ Amazing demos
        </BaseHeading>
        <BaseParagraph
          size="lg"
          class="text-muted-500 dark:text-muted-100 mx-auto mb-4"
        >
          Tairo ships with {{ demoPages.length }}+ prebuilt pages, including
          dashboard and app examples, as well as collections like lists, grids,
          profile and personal pages and many other authentication and utility
          pages.
        </BaseParagraph>
      </div>

      <div class="grid grid-cols-12 gap-6">
        <!-- Col -->
        <div
          class="ltablet:col-span-2 ltablet:block relative col-span-12 hidden lg:col-span-2 lg:block"
        >
          <ul class="space-y-3 lg:sticky lg:top-28">
            <li class="capitalize">
              <BaseRadio
                v-model="selectedCategory"
                value=""
                color="primary"
                label="All"
              />
            </li>
            <li
              v-for="category in categories"
              :key="category"
              class="capitalize"
            >
              <BaseRadio
                v-model="selectedCategory"
                :value="category"
                color="primary"
                :label="category"
              />
            </li>
          </ul>
        </div>
        <!-- Col -->
        <div class="ltablet:col-span-10 col-span-12 lg:col-span-10">
          <div class="grid gap-8 sm:grid-cols-2">
            <NuxtLink
              :to="{ name: page.name }"
              v-for="page in filteredDemos.slice(0, props.limit)"
              :key="page.name"
              class="group relative block"
            >
              <div>
                <NuxtImg
                  class="border-muted-200 block rounded-lg border motion-safe:transition-opacity motion-safe:duration-200 motion-safe:group-hover:opacity-75"
                  :class="page.meta?.preview?.srcDark ? 'dark:hidden' : ''"
                  :src="page.meta?.preview?.src"
                  :alt="`Tairo - ${page.meta?.preview?.title}`"
                  height="271"
                  width="487"
                  sizes="sm:100vw md:50vw lg:974px"
                  format="webp"
                  loading="lazy"
                  decoding="async"
                />
                <NuxtImg
                  v-if="page.meta?.preview?.srcDark"
                  class="border-muted-800 hidden rounded-lg border motion-safe:transition-opacity motion-safe:duration-200 motion-safe:group-hover:opacity-75 dark:block"
                  :src="page.meta?.preview?.srcDark"
                  :alt="`Tairo - ${page.meta?.preview?.title}`"
                  height="271"
                  width="487"
                  sizes="sm:100vw md:50vw lg:974px"
                  format="webp"
                  loading="lazy"
                  decoding="async"
                />
                <div class="absolute inset-x-0 -bottom-2 mx-auto max-w-[85%]">
                  <BaseCard
                    shape="curved"
                    class="flex items-center p-4"
                    elevated
                  >
                    <div>
                      <BaseHeading
                        as="h3"
                        size="sm"
                        weight="medium"
                        lead="none"
                        class="text-muted-800 mx-auto dark:text-white"
                        >{{ page.meta?.preview?.title }}</BaseHeading
                      >
                      <BaseText
                        size="xs"
                        class="text-muted-500 dark:text-muted-400"
                        >{{ page.meta?.preview?.description }}</BaseText
                      >
                    </div>
                    <div
                      class="bg-primary-500/10 text-primary-500 me-2 ms-auto flex h-8 w-8 items-center justify-center rounded-full motion-safe:opacity-0 motion-safe:transition-opacity motion-safe:duration-300 motion-safe:group-hover:opacity-100"
                    >
                      <Icon
                        name="lucide:arrow-right"
                        class="h-4 w-4 motion-safe:-translate-x-2 motion-safe:transition-transform motion-safe:duration-300 motion-safe:group-hover:translate-x-0 motion-reduce:translate-x-0"
                      />
                    </div>
                  </BaseCard>
                </div>
              </div>
            </NuxtLink>
          </div>

          <div v-if="props.cta" class="mt-24 flex items-center justify-center">
            <BaseButton
              shape="curved"
              color="primary"
              flavor="outline"
              to="/demos"
              >View All {{ demoPages.length }} Demos</BaseButton
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
