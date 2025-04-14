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

const route = useRoute()
const router = useRouter()

const onlyNew = computed({
  get() {
    return Boolean(route.query.new)
  },
  set(value) {
    router.push({
      query: {
        ...route.query,
        new: value ? '1' : undefined,
      },
    })
  },
})
const selectedCategory = computed({
  get() {
    return route.query.category as string || ''
  },
  set(value) {
    router.push({
      query: {
        ...route.query,
        category: value || undefined,
      },
    })
  },
})

const demoPages = computed(() => {
  const match: RouteRecordRaw[] = []

  function traverseRoutes(routes: Readonly<RouteRecordRaw[]>) {
    for (const route of routes) {
      if (route.children) {
        // recurse
        traverseRoutes(route.children)
      }
      else if (
        route.path.includes(':')
        && Array.isArray(route.meta?.preview)
      ) {
        match.push(route)
      }
      else if (!route.path.includes(':') && route.meta?.preview) {
        // has preview data
        match.push(route)
      }
    }
  }

  // start on top route
  traverseRoutes(router.options.routes)

  return match.sort((a, b) => {
    if (a.meta?.preview?.order === undefined)
      return 0
    if (b.meta?.preview?.order === undefined)
      return 0
    if (a.meta.preview?.order < b.meta.preview?.order)
      return -1
    if (a.meta.preview?.order > b.meta.preview?.order)
      return 1
    return 0
  })
})

const categories = computed(() => {
  const categories = new Set<string>()
  let _demos = demoPages.value

  if (onlyNew.value) {
    _demos = _demos.filter(page => page.meta?.preview?.new)
  }

  function extractPreview(preview: any) {
    if (!preview) {
      return
    }
    if (Array.isArray(preview)) {
      for (const item of preview) {
        extractPreview(item)
      }
      return
    }
    if (!preview.categories) {
      return
    }
    if (!Array.isArray(preview.categories)) {
      return
    }
    for (const category of preview.categories) {
      categories.add(category)
    }
  }

  for (const route of _demos) {
    extractPreview(route.meta?.preview)
  }
  return Array.from(categories).sort((a, b) => {
    return a.localeCompare(b)
  })
})

const filteredDemos = computed(() => {
  let _demos = demoPages.value

  if (onlyNew.value) {
    _demos = _demos.filter(page => page.meta?.preview?.new)
  }

  if (selectedCategory.value.length === 0) {
    return _demos
  }

  function filterPreview(preview: any) {
    if (!preview) {
      return false
    }
    if (Array.isArray(preview)) {
      for (const item of preview) {
        if (filterPreview(item)) {
          return true
        }
      }
      return false
    }
    if (!preview.categories) {
      return false
    }
    if (!Array.isArray(preview.categories)) {
      return false
    }
    return preview.categories.some((category: string) =>
      selectedCategory.value.includes(category),
    )
  }

  return _demos.filter((page) => {
    return filterPreview(page.meta?.preview)
  })
})
</script>

<template>
  <div class="dark:bg-muted-900 bg-white py-24">
    <div class="mx-auto w-full max-w-7xl px-4">
      <div class="mb-16 max-w-2xl">
        <BaseText
          class="text-primary-500 mb-2 text-[0.65rem] uppercase tracking-wider"
        >
          Prebuilt pages
        </BaseText>
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
        <BaseRadioGroup
          v-model="selectedCategory"
          class="relative col-span-12 hidden lg:col-span-2 lg:block"
        >
          <ul class="space-y-3 lg:sticky lg:top-28">
            <li class="pb-4">
              <BaseSwitchThin
                v-model="onlyNew"
                variant="primary"
                label="Only new"
              />
            </li>
            <li class="capitalize">
              <BaseRadio
                value=""
                label="All"
              />
            </li>
            <li
              v-for="category in categories"
              :key="category"
              class="capitalize"
            >
              <BaseRadio
                :value="category"
                :label="category"
              />
            </li>
          </ul>
        </BaseRadioGroup>
        <!-- Col -->
        <div class="col-span-12 lg:col-span-10">
          <div class="grid gap-8 sm:grid-cols-2">
            <template
              v-for="page in filteredDemos.slice(0, props.limit)"
              :key="page.name"
            >
              <LandingDemoLink
                v-if="!Array.isArray(page.meta?.preview)"
                :name="page.name"
                :preview="page.meta?.preview"
              />
              <template v-else>
                <LandingDemoLink
                  v-for="preview in page.meta?.preview"
                  :key="preview.title"
                  :name="page.name"
                  :preview="preview"
                />
              </template>
            </template>
          </div>

          <div v-if="props.cta" class="mt-24 flex items-center justify-center">
            <BaseButton
              rounded="lg"
              variant="primary"
              to="/demos"
            >
              View All {{ demoPages.length }} Demos
            </BaseButton>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
