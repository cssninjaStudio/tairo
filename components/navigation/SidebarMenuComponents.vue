<script setup lang="ts">
import type { RouteRecordRaw } from 'vue-router'

type ComponentsTree = Record<string, RouteRecordRaw[]>

const categoryOrders = [
  'Uncategorized',
  'Content',
  'Interaction',
  'Display',
  'Forms',
  'Addons',
] as const

const { displayMode, isSearching, filter, reset } = useDocumentationMenu()
const router = useRouter()

const show = reactive({
  Uncategorized: true,
  Content: true,
  Interaction: true,
  Display: true,
  Forms: true,
  Addons: true,
})

const componentHubRoute = router.resolve('/components')
const componentChildRoutes = computed(() => {
  const childrens = componentHubRoute.matched[0]?.children
    ?.filter((route) => {
      if (!filter.value) {
        return true
      }

      if (displayMode.value === 'category') {
        return route.meta?.title
          ?.toLowerCase()
          .includes(filter.value.toLowerCase())
      }

      return route.meta?.documentation?.components?.some((component) =>
        component?.toLowerCase().includes(filter.value.toLowerCase())
      )
    })
    ?.reduce<ComponentsTree>((acc, child) => {
      if (child) {
        const category = child.meta?.documentation?.category ?? 'Uncategorized'
        acc[category] = acc[category] ?? []
        acc[category].push(child)
      }
      return acc
    }, {})

  Object.keys(childrens).forEach((category) => {
    childrens[category].sort((a, b) => {
      const aName = a.path.toLowerCase()
      const bName = b.path.toLowerCase()

      if (aName < bName) {
        return -1
      }
      if (aName > bName) {
        return 1
      }
      return 0
    })
  })

  return childrens
})

const hightlightSearch = (text?: string, search?: string): string => {
  if (!text) {
    return ''
  }

  if (!search) {
    return text
  }

  const regex = new RegExp(search, 'gi')

  return text.replace(regex, (part) => {
    return `<mark class="bg-primary-100 text-primary-800 dark:bg-primary-800 dark:text-primary-200">${part}</mark>`
  })
}
</script>

<template>
  <div>
    <template v-for="category in categoryOrders">
      <div v-if="componentChildRoutes[category]" :key="category">
        <button
          v-if="category !== 'Uncategorized'"
          type="button"
          class="group ninja-focus mt-4 mb-1 flex min-h-[2rem] w-full items-center justify-between focus-within:outline-0 focus-visible:outline-1"
          @click="show[category] = !show[category]"
        >
          <span
            class="font-sans text-[.7rem] font-medium uppercase text-muted-500"
          >
            {{ category }}
          </span>
          <div
            v-if="!filter"
            class="text-muted-400 group-hover:text-primary-400 group-focus-visible:text-primary-400 dark:text-muted-500"
          >
            <BaseIcon
              v-if="!show[category]"
              name="mdi:minus-box-outline"
              class="h-4 w-4"
            />
            <BaseIcon v-else name="mdi:plus-box-outline" class="h-4 w-4" />
          </div>
        </button>
        <ul v-show="filter || show[category]">
          <li
            v-for="route in componentChildRoutes[category]"
            :key="route.name"
            class="mb-1 flex min-h-[2rem] w-full items-center"
          >
            <NuxtLink
              :to="{ name: route.name }"
              :class="
                displayMode === 'component'
                  ? 'flex-col'
                  : 'flex-row items-center'
              "
              class="group ninja-focus flex w-full text-muted-400 transition-colors duration-300 focus-within:outline-0 hover:text-primary-500 focus-visible:text-primary-500 focus-visible:outline-1"
            >
              <template
                v-if="
                  route.meta?.documentation?.components &&
                  displayMode === 'component'
                "
              >
                <div
                  v-for="(
                    component, index
                  ) in route.meta?.documentation?.components?.filter(
                    (item, index) => (isSearching ? true : index === 0)
                  )"
                  :key="component"
                  class="truncate font-mono"
                  :class="[
                    index !== 0 && 'text-xs opacity-50',
                    index === 0 && `text-sm`,
                  ]"
                  :title="`<${component} />`"
                >
                  <span
                    v-if="
                      index !== 0 &&
                      index !==
                        route.meta?.documentation?.components?.length - 1
                    "
                  >
                    ├─
                  </span>
                  <span
                    v-else-if="
                      index !== 0 &&
                      index ===
                        route.meta?.documentation?.components?.length - 1
                    "
                  >
                    └─
                  </span>
                  <span>&lt;</span>
                  <span v-html="hightlightSearch(component, filter)"></span>
                  <span>&gt;</span>
                </div>
                <template v-if="isSearching">
                  <div
                    v-for="composable in route.meta?.documentation?.composables"
                    :key="composable"
                    class="truncate font-mono text-xs opacity-50"
                    :title="composable"
                  >
                    <BaseIcon
                      name="ri:parentheses-line"
                      class="mr-2 inline-block h-4 w-4"
                    />
                    <span v-html="hightlightSearch(composable, filter)"></span>
                  </div>
                  <div
                    v-for="item in route.meta?.documentation?.interfaces"
                    :key="item"
                    class="truncate font-mono text-xs opacity-50"
                    :title="item"
                  >
                    <BaseIcon
                      name="ri:parentheses-line"
                      class="mr-2 inline-block h-4 w-4"
                    />
                    <span v-html="hightlightSearch(item, filter)"></span>
                  </div>
                </template>
              </template>
              <span
                v-else
                class="font-sans text-sm"
                v-html="hightlightSearch(route.meta?.title, filter)"
              ></span>
            </NuxtLink>
          </li>
        </ul>
      </div>
    </template>
  </div>
</template>
