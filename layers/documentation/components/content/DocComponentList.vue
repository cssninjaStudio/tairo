<script setup lang="ts">
const props = defineProps<{
  prefix?: string
}>()

const meta = ref<string[]>([])

const componentsMeta = await useComponentMeta()
const { docRoutes: routesFlat } = await useDocumentationRoutes()

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
</script>

<template>
  <div>
    <div>
      <DocLayoutSection>
        <div class="grid gap-4 md:grid-cols-4">
          <NuxtLink
            v-for="component of componentsPagesMap"
            :key="component.name"
            class="nui-focus group rounded-md"
            :to="component.route?._path"
          >
            <BaseCard class="flex h-full flex-col px-4 py-8" shape="curved">
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
                    component.route?.icon?.srcDark || component.route?.icon?.src
                  "
                  :alt="component.name + ' Tairo Documentation'"
                />
              </template>
              <div class="mt-2 text-center font-sans">
                <div class="flex h-full grow flex-col justify-between">
                  <span
                    v-if="component?.name"
                    class="text-muted-800 line-clamp-1 block w-full max-w-[240px] text-sm dark:text-white"
                    >{{ component?.name }}</span
                  >
                  <span
                    class="text-primary-500 font-sans text-xs font-medium opacity-60 transition-opacity duration-300 group-hover:opacity-100 group-focus:opacity-100"
                  >
                    Read documentation
                  </span>
                </div>
              </div>
            </BaseCard>
          </NuxtLink>
        </div>
      </DocLayoutSection>
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
