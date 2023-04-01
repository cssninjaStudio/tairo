<script setup lang="ts">
const props = defineProps<{
  prefix?: string
}>()

const meta = ref<string[]>([])

const componentsMeta = await useComponentMeta()
const {
  docRoutes: routesFlat,
  docRoutesByCategory: routesByCategory,
  categoryOrders,
} = await useDocumentationRoutes()

// filter unwanted components
watchEffect(() => {
  meta.value = Object.keys(componentsMeta.value)?.filter((name) => {
    if (!props.prefix) return true

    return name.startsWith(props.prefix)
  })
})

// map component meta to documentation routes
const componentsPagesMap = computed(() => {
  return meta.value.map((name) => {
    const route = routesFlat.value.find((route: any) =>
      route.components?.includes(name),
    )
    return {
      name,
      route,
    }
  })
})

// filter components without documentation routes
const componentsWithoutPages = computed(() => {
  return componentsPagesMap.value.filter((c) => {
    const route = routesFlat.value.find((route: any) =>
      route.components?.includes(c.name),
    )
    return !route
  })
})

// map components/meta with category
const componentsPagesByCategory = computed(() => {
  const categories = Object.keys(routesByCategory.value)

  return categories.map((category) => {
    const components = componentsPagesMap.value.filter((c) => {
      const route = routesFlat.value.find((route: any) =>
        route.components?.includes(c.name),
      )
      return route?.category === category
    })

    return {
      category,
      components,
    }
  })
})

// group components/meta by category
const componentsByCategoryMaped = computed(() => {
  const map: Record<string, any> = {}
  for (const category of componentsPagesByCategory.value) {
    map[category.category] = category
  }
  return map
})
</script>

<template>
  <div>
    <div v-if="categoryOrders">
      <div v-for="category in categoryOrders" :key="category">
        <DocLayoutSection
          v-if="
            category in componentsByCategoryMaped &&
            componentsByCategoryMaped[category].components.length
          "
          :title="componentsByCategoryMaped[category].category"
        >
          <div class="grid gap-5 md:grid-cols-2">
            <NuxtLink
              v-for="component of componentsByCategoryMaped[category]
                .components"
              :key="component.name"
              class="nui-focus group rounded-md"
              :to="component.route._path"
            >
              <BaseCard>
                <div class="mb-2 flex justify-between p-6">
                  <div class="flex h-full grow flex-col justify-between pr-4">
                    <span
                      class="text-muted-800 mb-2 line-clamp-1 block w-full max-w-[240px] text-lg dark:text-white"
                      >{{ component?.route?.title }}</span
                    >
                    <span
                      v-if="component?.route?.description"
                      class="text-muted-400 mb-2 text-sm"
                    >
                      {{ component?.route?.description }}
                    </span>
                    <span
                      class="text-primary-500 font-sans text-sm font-medium opacity-60 transition-opacity duration-300 group-hover:opacity-100 group-focus:opacity-100"
                    >
                      View documentation
                    </span>
                  </div>
                  <template v-if="component.route?.icon">
                    <img
                      v-if="component.route?.icon?.src"
                      class="h-16 shrink-0 opacity-60 grayscale transition-all duration-300 group-hover:opacity-100 group-hover:grayscale-0 dark:hidden"
                      :src="component.route?.icon?.src"
                      :alt="component.name + ' Tairo Documentation'"
                    />
                    <img
                      v-if="component.route?.icon?.src"
                      class="hidden h-16 shrink-0 opacity-60 grayscale transition-all duration-300 group-hover:opacity-100 group-hover:grayscale-0 group-focus:opacity-100 group-focus:grayscale-0 dark:block"
                      :src="
                        component.route?.icon?.srcDark ||
                        component.route?.icon?.src
                      "
                      :alt="component.name + ' Tairo Documentation'"
                    />
                  </template>
                </div>
                <div
                  class="dark:border-muted-700 flex items-center justify-between border-t-2 border-dashed border-gray-300 px-6 py-4"
                >
                  <div
                    v-if="component?.route?.components"
                    class="flex w-full flex-wrap justify-start gap-2"
                  >
                    <BaseTag
                      v-for="name of component?.route?.components"
                      :key="name"
                      condensed
                    >
                      <span class="font-mono text-sm">&lt;{{ name }}&gt;</span>
                    </BaseTag>
                  </div>
                </div>
              </BaseCard>
            </NuxtLink>
          </div>
        </DocLayoutSection>
      </div>
    </div>

    <div
      v-if="componentsWithoutPages.length"
      class="flex w-full flex-wrap justify-start gap-2"
    >
      <BaseTag
        v-for="component of componentsWithoutPages"
        :key="component.name"
        condensed
        class="cursor-help opacity-60 transition-opacity duration-100 hover:opacity-100"
        data-tooltip="This component is not documented yet."
      >
        <span class="font-mono text-xs">&lt;{{ component.name }}&gt;</span>
      </BaseTag>
    </div>
  </div>
</template>
