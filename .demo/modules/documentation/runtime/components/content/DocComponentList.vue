<script setup lang="ts">
import { useDocumentationRoutes } from '../../../runtime/composables/routes'

const meta = ref<string[]>([])

const componentsMeta = await useComponentMeta()
const {
  docRoutes: routesFlat,
  docRoutesByCategory: routesByCategory,
  categoryOrders,
} = await useDocumentationRoutes()

// filter unwanted components
watchEffect(async () => {
  meta.value = Object.keys(componentsMeta.value)
})

// map component meta to documentation routes
const componentsPagesMap = computed(() => {
  return meta.value.map((name) => {
    const route = routesFlat.value.find((route: any) =>
      route.components?.includes(name),
    )
    // if (process.dev) {
    //   if (!route) {
    //     console.warn(
    //       `Component ${name} is missing a documentation route. Please add it to the documentation routes.`,
    //     )
    //   }
    // }
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
              class="nui-focus rounded-md group"
              :to="component.route._path"
            >
              <BaseCard>
                <div class="mb-2 flex justify-between p-6">
                  <div class="grow flex h-full justify-between flex-col pr-4">
                    <span
                      class="block w-full text-lg mb-2 max-w-[240px] line-clamp-1 text-muted-800 dark:text-white"
                      >{{ component?.route?.title }}</span
                    >
                    <span
                      class="text-muted-400 mb-2"
                      v-if="component?.route?.description"
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
                      class="h-16 flex-shrink-0 opacity-60 grayscale transition-all duration-300 group-hover:opacity-100 group-hover:grayscale-0 dark:hidden"
                      v-if="component.route?.icon?.src"
                      :src="component.route?.icon?.src"
                      :alt="component.name + ' Tairo Documentation'"
                    />
                    <img
                      class="hidden h-16 flex-shrink-0 opacity-60 grayscale transition-all duration-300 group-hover:opacity-100 group-hover:grayscale-0 group-focus:opacity-100 group-focus:grayscale-0 dark:block"
                      v-if="component.route?.icon?.src"
                      :src="
                        component.route?.icon?.srcDark ||
                        component.route?.icon?.src
                      "
                      :alt="component.name + ' Tairo Documentation'"
                    />
                  </template>
                </div>
                <div
                  class="dark:border-muted-700 flex justify-between items-center border-t-2 border-dashed border-gray-300 py-4 px-6"
                >
                  <div
                    v-if="component?.route?.components"
                    class="flex flex-wrap justify-start w-full gap-2"
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
      class="flex flex-wrap justify-start w-full gap-2"
    >
      <BaseTag
        v-for="component of componentsWithoutPages"
        :key="component.name"
        condensed
        class="opacity-60 hover:opacity-100 transition-opacity duration-100 cursor-help"
        data-tooltip="This component is not documented yet."
      >
        <span class="font-mono text-xs">&lt;{{ component.name }}&gt;</span>
      </BaseTag>
    </div>
  </div>
</template>
